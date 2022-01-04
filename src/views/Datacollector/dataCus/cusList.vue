<template>
    <layout>
        <div slot="buttons" class="from-group">
            <router-link class="btn" :to="{ name: 'cus-list'}"> รายการข้อมูลลูกค้า </router-link>
            <router-link class="btn" :to="{ name: 'cus-from'}"> เพิ่มข้อมูลใหม่ </router-link>
        </div>
        <div class="card">
            <div class="card-body">
                <header class="mb-4">
                    <h2><i class="fa fa-cart-arrow-down"></i> ข้อมูลลูกค้าทั้งหมด</h2>
                </header>
                <hr>
                <table class="table">
                    <thead>
                        <tr>
                            <th>รหัสลูกค้า</th>
                            <th>ชื่อลูกค้า</th>
                            <th>เบอร์โทรศัพท์</th>
                            <th>ที่อยู่</th>
                            <th></th>
                        </tr>
                    </thead>
                    <thead>
                        <tr v-for="(item, index) in rows" :key="index">
                            <td>{{item.id_customer}}</td>
                            <td>{{item.name}}</td>
                            <td>{{item.phone_cus}}</td>
                            <td>{{item.adress_cus}}</td>
                            <td><button class="but btn-danger" @click="delete_data(item.id)"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </layout>
</template>

<script>
import layout from '@/components/datacollect/layout';
import axios from '@/axios';
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
        this.getData();
    },
    methods: {
        getData() {
            axios
            .get('/api/customer/get' ,{

            })
            .then((response)=>{
                this.rows = response.data
                console.log(this.rows)
                
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        delete_data(id) {
            axios
            .post('/api/customer/delete', {
                id: id
            })
            .then((response) => {
                console.log(response)
                this.getData()
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>
    .btn {
        color: #3E8CC7;
        font-size: 20px;
        margin-right: 5px;
        min-width: 150px;
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