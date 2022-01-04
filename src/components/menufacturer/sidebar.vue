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
                header:"<i class='fa fa-address-book'></i> ผู้ผลิต",
                navs:[
                    { name: "จำนวนสินค้าภายในคลัง", link: { name: "product-list2"}}

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