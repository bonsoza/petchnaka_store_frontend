<template>
    <layout>
        <div slot="buttons" class="from-group">
            <router-link class="btn" :to="{ name: 'order-list'}"> รายการข้อมูลการสั่งซื้อ </router-link>
            <router-link class="btn" :to="{ name: 'order-from'}"> เพิ่มข้อมูลใหม่ </router-link>
        </div>
        <div class="card">
            <div class="card-body">
                <header class="mb-4">
                    <h2><i class="fa fa-cart-arrow-down"></i> รายการสั่งซื้อทั้งหมด</h2>
                </header>
                <hr>
                <table class="table">
                    <thead>
                        <tr>
                            <th>รหัสลูกค้า</th>
                            <th>รหัสสินค้า</th>
                            <th>จำนวนสินค้าที่สั่ง</th>
                            <th>ราคารวมที่สั่ง</th>
                        </tr>
                    </thead>
                    <thead>
                        <tr v-for="(item, index) in rows" :key="index">
                            <td>{{ item.id_customer }}</td>
                            <td>{{ item.id_product }}</td>
                            <td>{{ item.quantity }}</td>
                            <td>{{ item.allprice }}</td>
                        </tr>
                    </thead>
                </table>
                
            </div>
        </div>
    </layout>
</template>

<script>
import layout from '@/components/datacollect/layout';
import axios from "@/axios";
export default {
    components: {
        layout
    },
    data() {
        return {
            rows: []
        }
    },
    mounted() {
        this.getAllDetail();
    },
    methods: {
        getAllDetail() {
            axios
            .get('/api/order/getOrder', {
            })
            .then((response) => {
                this.rows = response.data
                console.log(response)
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        
    }
}
</script>

<style scoped>
    .btn {
        color: #3E8CC7;
        font-size: 20px;
        margin-right: 5px;
        min-width: 170px;
    }

    .btn:hover {
        background-color: #DEE2E6;
    }

    .btn.router-link-active {
        background-color: #DEE2E6;
    }

    .mb-4 {
        font-size: 30px;
        font-weight: 500;
    }
</style>