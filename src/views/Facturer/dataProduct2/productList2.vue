<template>
  <layout>
    <div class="card">
      <div class="card-body">
        <header class="mb-4">
          <h2><i class="fa fa-cart-arrow-down"></i> จำนวนสินค้าคงเหลือ</h2>
        </header>
        <hr />
        <table class="table">
          <thead>
            <tr>
              <th>รหัสสินค้า</th>
              <th>ชื่อสินค้า</th>
              <th>จำนวนคงเหลือ</th>
              <th>ราคาขาย</th>
              <th>วันที่แก้ไขล่าสุด</th>
              <th>ภาพตัวอย่าง</th>
            </tr>
          </thead>
          <thead>
            <tr v-for="(item, index) in rows" :key="index">
              <td>{{ item.id_product }}</td>
              <td>{{ item.product_name }}</td>
              <td v-if="item.quantity > 0" class="text-info">
                {{ item.quantity }}
              </td>
              <td v-else class="text-danger">{{ item.quantity }}</td>
              <td>{{ item.product_price }}</td>
              <td>{{ getDate(item.updated_at) }}</td>
              <td><img :src="item.image" alt="" /></td>
              <router-link :to="{ name: 'edit-count', params: { id: item.id } }"
                ><a href=""
                  ><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a
              ></router-link>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </layout>
</template>

<script>
import layout from "@/components/menufacturer/layout";
import axios from "@/axios";
export default {
  components: {
    layout,
  },
  data() {
    return {
      rows: [],
    };
  },
  mounted() {
    this.getAllDetail();
  },
  methods: {
    getAllDetail() {
      axios
        .get("/api/facturer/allEdit", {})
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
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      return result;
    },
  },
};
</script>

<style></style>
