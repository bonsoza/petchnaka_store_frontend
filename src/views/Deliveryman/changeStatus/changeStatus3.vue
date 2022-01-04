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
          <h2><i class="fa fa-cart-arrow-down"></i> สถานะการจัดส่ง</h2>
        </header>
        <hr />
        <b-table
          :items="rows"
          :fields="fields"
          sort-icon-left
          responsive="sm"  
        >
        <template #cell(status_delivery)="rows"> 
          <span class="badge bg-warning" v-if="rows.item.status_delivery == 0">unsuccess</span>
          <span class="badge bg-success" v-if="rows.item.status_delivery == 1">success</span>
        </template>
        <template #cell(updated_at)="rows"> 
          <span v-if="rows.item.status_delivery == 1">{{ getDate(rows.item.updated_at) }}</span>
        </template>
        </b-table>
      </div>
    </div>
  </layout>
</template>

<script>
import layout from "@/components/deliveryman/layout";
import axios from "@/axios";
export default {
  components: {
    layout,
  },
  data() {
    return {
      rows: [],
      fields: [
        { key: "id_customer", sortable: true, label: "รหัสลูกค้า" },
        { key: "id_product", sortable: false, label: "รหัสสินค้า" },
        { key: "quantity", sortable: false, label: "จำนวนที่ซื้อ" },
        { key: "allprice", sortable: false, label: "ราคารวมที่สั่ง" },
        { key: "adress_cus", sortable: false, label: "ที่อยู่" },
        { key: "status_delivery", sortable: true, label: "สถานะการส่ง" },
        { key: "updated_at", sortable: false, label: "วันที่ส่ง" }
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
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getDate(wan) {
      const date = new Date(wan);
      const result = date.toLocaleDateString("th-TH", {
        hour: "numeric",
        minute: "numeric",
        year: "numeric",
        month: "numeric",
        day: "numeric"
        
      });
      return result;
    }
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

.btn.router-link-active {
  background-color: #dee2e6;
}

.mb-4 {
  font-size: 30px;
  font-weight: 500;
}
</style>
