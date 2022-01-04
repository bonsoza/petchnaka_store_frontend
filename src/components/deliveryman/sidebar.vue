<template>
    <div class="sidebar">
        <sidebarNav :item="collect" class="sidebarNav" />
        <!-- <sidebarNav :item="setting" class="sidebarNav" /> -->
    </div>
</template>

<script>
import sidebarNav from "./sidebarNav.vue";
export default {
    data() {
        return {
            collect: {
                header:"<i class='fa fa-address-book'></i> พนักงานส่งสินค้า",
                navs:[
                    { name: "สถานะการจัดส่ง", link: { name: "status3"}}

                ]
            }
            // setting: {
            //     header:"<i class='fa fa-cog' ></i> ตั้งค่า",
            //     navs:[
            //         { name: "แก้ไขข้อมูลส่วนตัว"}
            //     ]
            // }
        };
    },
   components: {
       sidebarNav
   }
};
</script>

<style scoped>
    .sidebarNav {
        margin-top: 30px;
    }
</style>