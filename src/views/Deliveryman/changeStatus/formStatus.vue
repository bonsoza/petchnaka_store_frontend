<template>
  <layout>
    <div slot="buttons" class="from-group">
      <router-link class="btn" :to="{ name: 'status3' }">
        สถานะการจัดส่ง
      </router-link>
      <router-link class="btn" :to="{ name: 'form-status' }">
        แก้ไขสถานะการจัดส่ง
      </router-link>
    </div>
    <div class="card">
      <div class="card-body">
        <header class="mb-4">
          <h2><i class="fa fa-cart-arrow-down"></i> แก้ไขสถานะการจัดส่ง</h2>
        </header>
        <hr />
        <b-table
          :items="rows"
          :fields="fields"
          :sort-desc.sync="sortDesc"
          sort-icon-left
          responsive="sm"
        >
          <template #cell(status_delivery)="rows">
            <b-form-group
              v-slot="{ ariaDescribedby }"
            >
              <b-form-radio-group
                id="btn-radios-1"
                v-model="rows.item.status_delivery"
                :options="options"
                :aria-describedby="ariaDescribedby"
                :name="'radios-btn-default' + rows.item.id"
                buttons
                @input="updateDelivery(rows.item)"
              ></b-form-radio-group>
            </b-form-group>
            
          </template>
        </b-table>
      </div>
    </div>
  </layout>
</template>

<script>
import layout from "@/components/deliveryman/layout";
import { BModal } from "bootstrap-vue";
import Multiselect from "vue-multiselect";
import axios from "@/axios";

export default {
  components: {
    layout,
    Multiselect,
    BModal,
  },
  data() {
    return {
      rows: [],
      status: null,
      sortDesc: false,
      optionstatus: [
        {
          id: 1,
          status_delivery: "success",
          row: this.rows,
        },
        {
          id: 2,
          status_delivery: "unsuccess",
          row: this.rows,
        },
      ],
      fields: [
        { key: "id_customer", sortable: false, label: "รหัสลูกค้า" },
        { key: "id_product", sortable: false, label: "รหัสสินค้า" },
        { key: "quantity", sortable: false, label: "จำนวนที่ซื้อ" },
        { key: "allprice", sortable: false, label: "ราคารวมที่สั่ง" },
        { key: "adress_cus", sortable: false, label: "ที่อยู่" },
        { key: "status_delivery", sortable: true, label: "สถานะการส่ง" },
      ],
      selected: 'radio1',
        options: [
          { text: 'unsuccess', value: '0' },
          { text: 'success', value: '1' }
        ]
    };
  },
  mounted() {
    this.getAllDetail();
  },
  methods: {
    getAllDetail() {
      axios
        .get("/api/order/getDelivery", {})
        .then((response) => {
          this.rows = response.data;
          this.rows.item = { status_delivery: response.data.status_delivery };
          //   console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    show(rows, x) {
      this.updateDelivery(x);
      console.log(x, "aaaaaaa");
      console.log(rows);
    },
    updateDelivery(x) {
      axios
        .post("/api/order/updateDelivery", {
          id: x.id,
          status_delivery: x.status_delivery
        })
        .then((response) => {
          alert('อัพเดทสถานะเรียบร้อย')
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      
    },
  },
};
</script>

<style scoped>
.btn {
  color: #3e8cc7;
  font-size: 20px;
  margin-right: 5px;
  min-width: 170px;
}

.btn:hover {
  background-color: #dee2e6;
}

.btn.router-link-exact-active {
  background-color: #dee2e6;
}

.mb-4 {
  font-size: 30px;
  font-weight: 500;
}
</style>
