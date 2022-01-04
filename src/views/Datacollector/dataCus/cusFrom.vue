<template>
    <layout>
        <div slot="buttons" class="from-group">
            <router-link class="btn" :to="{ name: 'cus-list'}"> รายการข้อมูล </router-link>
            <router-link class="btn" :to="{ name: 'cus-from'}"> เพิ่มข้อมูลใหม่ </router-link>
        </div>
        <div class="card">
            <div class="card-body">
                <h2><i class="fa fa-pencil-square-o"></i> เพิ่มข้อมูลลูกค้าใหม่</h2>
                    <div class="form-group">
                        <label for="">
                            รหัสลูกค้า
                        </label>
                        <input type="text" class="form-control" v-model="idcus">
                    </div>

                    <div class="form-group">
                        <label for="">
                            ชื่อลูกค้า
                        </label>
                        <input type="text" class="form-control" v-model="namecus">
                        
                    </div>

                    <div class="form-group">
                        <label for="">
                            เบอร์โทรศัพท์
                        </label>
                        <input type="text" class="form-control" v-model="phonecus">
                        
                    </div>

                    <div class="form-group">
                        <label for="">
                            ที่อยู่
                        </label>
                        <textarea class="form-control" rows="3" v-model="adresscus"></textarea>
                    </div>
                    <br />
                    <div class="form-group mb-3">
                        <div class="row">
                            <div class="col-4">
                                <button class="btn btn-info btn-block" @click="submit">บันทึก</button>
                            </div>
                            <div class="col-4">
                                <button class="btn btn-danger btn-block" @click="clear">ยกเลิก</button>
                            </div>
                        </div>
                    </div>
            
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
            idcus : '',
            namecus : '',
            phonecus : '',
            adresscus : ''
        }
    },
    methods: {
        submit() {
            axios
            .post('/api/customer/save', {
                idcus: this.idcus,
                name: this.namecus,
                phone: this.phonecus,
                adress: this.adresscus
            })
            .then((response) => {
                alert('บันทึกเรียบร้อย')
                console.log(response)
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        clear() {
            this.idcus = null
            this.namecus = null
            this.phonecus = null
            this.adresscus = null
        }
    }
}
</script>

<style scoped>
    .btn {
        color: #3E8CC7;
        font-size: 20px;
        margin-right: 5px;
        min-width: 130px;
    }

    .btn:hover {
        background-color: #DEE2E6;
    }

    .btn.router-link-exact-active {
        background-color: #DEE2E6;
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