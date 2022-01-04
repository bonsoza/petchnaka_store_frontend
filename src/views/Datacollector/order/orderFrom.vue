<template>
  <layout>
    <div slot="buttons" class="from-group">
      <router-link class="btn" :to="{ name: 'order-list' }">
        รายการข้อมูล
      </router-link>
      <router-link class="btn" :to="{ name: 'order-from' }">
        เพิ่มข้อมูลใหม่
      </router-link>
    </div>
    <div class="card">
      <div class="card-body">
        <h2><i class="fa fa-pencil-square-o"></i> เพิ่มรายการสั่งซื้อใหม่</h2>

        <div class="form-group">
          <label for="">
            ชื่อและรหัสลูกค้า
          </label>

          <multiselect
            class="col-6"
            v-model="value"
            :options="rows"
            label="name"
            :show-labels="false"
            :custom-label="nameWithLang"
          ></multiselect>
        </div>

        <div class="form-group">
          <label for="">
            ชนิดสินค้า
          </label>
          <multiselect
            class="col-6"
            v-model="item"
            tag-placeholder="Add this as new tag"
            placeholder="ชนิดสินค้าที่ต้องการซื้อ"
            :options="table"
            track-by="id_product"
            :custom-label="nameWithLang2"
            @input="selectRow"
          ></multiselect>
          <!-- {{ item }} -->
        </div>

        <div class="quantity col-6">
          <b-input-group>
            <b-input-group-prepend>
              <b-btn variant="info" @click="decrement(num)">-</b-btn>
            </b-input-group-prepend>

            <b-form-input
              type="number"
              min="0.00"
              v-model="num"
              @input="cal(num)"
              @change="cal(num)"
            ></b-form-input>

            <b-input-group-append>
              <b-btn variant="info" @click="increment(num)">+</b-btn>
            </b-input-group-append>
          </b-input-group>
        </div>

        <div class="form-group">
          <label for="">ราคารวมที่สั่ง</label>
          <br />
          <label for="">{{ this.total }}</label>
        </div>

        <div class="form-group mb-3">
          <div class="row">
            <div class="col-sm-6">
              <button
                type="submit"
                class="btn btn-info btn-block"
                @click="submit"
              >
                บันทึก
              </button>
            </div>
          </div>
        </div>

        <!-- <b-modal
          id="selected-modal"
          ref="modal"
          title="ใส่จำนวนที่ต้องการ"
          @show="resetModal"
          @hidden="resetModal"
          @ok="handleOk"
        >
          <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-group
              label="จำนวน"
              label-for="name-input"
              invalid-feedback="Name is required"
              :state="nameState"
            >
              <b-form-input
                id="name-input"
                v-model="name"
                :state="nameState"
                required
              ></b-form-input>
            </b-form-group>
          </form>
        </b-modal> -->
      </div>
    </div>
  </layout>
</template>

<script>
import layout from "@/components/datacollect/layout";
import axios from "@/axios";
import { BModal } from "bootstrap-vue";
import Multiselect from "vue-multiselect";

export default {
  components: {
    layout,
    Multiselect,
    BModal,
  },
  data() {
    return {
      quantity: "",
      options: [
        { name: "Vue.js", code: "vu" },
        { name: "Javascript", code: "js" },
        { name: "Open Source", code: "os" },
      ],
      value: null,
      item: null,
      rows: [],
      table: [],
      num: 0,
      total: 0,
    };
  },
  computed: {
    price: function() {
      return quantity + value;
    },
  },
  mounted() {
    // this.cal(this.num)
    this.getData();
    this.getAllDetail();
  },
  methods: {
    nameWithLang({ id_customer, name }) {
      return `${id_customer} — [${name}]`;
    },
    nameWithLang2({ id_product, product_name }) {
      return `${id_product} — [${product_name}]`;
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options.push(tag);
      this.value.push(tag);
    },
    getAllDetail() {
      axios
        .get("/api/facturer/allEdit", {})
        .then((response) => {
          this.table = response.data;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getData() {
      axios
        .get("/api/customer/get", {})
        .then((response) => {
          this.rows = response.data;
          console.log(this.rows);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    submit() {
      axios
        .post("/api/order/saveOrder", {
          id_cus: this.value.id_customer,
          id_user: 1,
          quantity: this.num,
          id_product: this.item.id_product,
          totalprice: this.total,
        })
        .then((response) => {
          alert('บันทึกเรียบร้อย')
          this.getUpdateData(this.item.id_product, this.num);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    selectRow(rows) {
      this.num = 1;
      this.total = rows.product_price;
      this.getDetail(rows);
    },
    increment(num) {
      console.log(num);
      this.cal(num);
      this.num += 1;
    },
    decrement(num) {
      console.log(num);
      if (this.num === 0) {
        alert("Negative quantity not allowed");
      } else {
        this.num -= 1;
        this.minus(num);
      }
    },
    cal(num) {
      this.total = parseInt(this.item.product_price) * parseInt(num);
      // alert(num)
    },
    minus(num) {
      this.total = this.total - parseInt(this.item.product_price);
    },
    getDetail(x) {
      axios
        .get("/api/facturer/edit", {
          params: {
            id: x.id,
          },
        })
        .then((response) => {
          this.quantity = response.data.quantity;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      
    },
    getUpdateData(x, y) {
      axios
        .post("/api/facturer/updateData", {
          id_product: x,
          quantity: this.quantity-y,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.btn {
  color: #3e8cc7;
  font-size: 20px;
  margin-right: 5px;
  min-width: 130px;
}

.btn:hover {
  background-color: #dee2e6;
}

.btn.router-link-exact-active {
  background-color: #dee2e6;
}

.fa {
  font-size: 20px;
}

.btnsave {
  margin-top: 6px;
  float: right;
  color: white;
}

.btn.btn-info,
.btn.btn-danger {
  color: black;
}

form {
  max-width: 290px;
  margin: auto;
}
</style>
