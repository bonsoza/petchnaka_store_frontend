<template>
    <layout>
        <div class="card">
            <div class="card-body">
                <header class="mb-4">
                    <h2><i class="fa fa-cart-arrow-down"></i> แก้ไขจำนวนสินค้า</h2>
                </header>
                <hr>
                    <div class="form-group">
                        <label for="">
                            รหัสสินค้า
                        </label>
                        <multiselect v-model="value" :options="optiondealer" label="code" :show-labels="false" :custom-label="nameWithLang" disabled></multiselect>
                    </div>
                    <div class="form-group">
                        <label for="">
                           จำนวนที่เพิ่มเข้า
                        </label>
                        <input type="text" class="form-control" v-model="quantity">
                        
                    </div>
                    <br>
                    <div class="form-group mb-3">
                        <div class="row">
                            <div class="col-6">
                                <button type="submit" class="btn btn-info btn-block" @click="getUpdateData">บันทึก</button>
                            </div>
                            
                        </div>
                    </div>
            </div>
        </div>
    </layout>
</template>

<script>
import layout from '@/components/menufacturer/layout';
import Multiselect from 'vue-multiselect'
import axios from '@/axios';
export default {
    components: {
        layout,
        Multiselect
    },
    data() {
      return {
        optiondealer: [
            { 
            code:"type-1  ถังน้ำแบบขุ่น",
            price: 10,
            id: 1
            },
            { 
            code:"type-2  ถังน้ำแบบใส",
            price: 15,
            id: 2
            },
            { 
            code:"type-3  ขวดน้ำ 750 ml",
            price: 8,
            id: 3
            },
            { 
            code:"type-4  ขวดน้ำ 350 ml",
            price: 5,
            id: 4
            }
        ],
        value: null,
        quantity: ''
      }
    },
    mounted() {
        this.getDetail();
        console.log(this.$route);
    },
    methods: {
        getDetail() {
            axios
            .get('/api/facturer/edit', {
                params:{
                    id: this.$route.params.id
                }
            })
            .then((response) => {
                this.value = {id_product:response.data.id_product,product_name:response.data.product_name}
                this.quantity = response.data.quantity
                console.log(response)
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        getUpdateData() {
            axios
            .post('/api/facturer/updateData', {
                id_product: this.value.id_product,
                quantity: this.quantity
            })
            .then((response) => {
                alert('บันทึกเรียบร้อย')
                this.$router.push({
                    name: 'product-list2'
                })
                console.log(response)
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        nameWithLang ({ id_product, product_name }) {
            return `${id_product} — [${product_name}]`
    }
    }
}
</script>

<style scoped>
    .btn {
        color: black;
        font-size: 20px;
        margin-right: 5px;
        min-width: 130px;
    }

    form {
        max-width: 290px;
        margin: auto;
    }
</style>