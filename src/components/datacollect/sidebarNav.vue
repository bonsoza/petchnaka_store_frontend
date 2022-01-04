<template>
    <section class="card">
            <header class="card-header text-center" >
                <h5 class="m-0" v-html="item.header">
                </h5>
            </header>
            <div class="card-body">
                <router-link 
                v-for="(item, index) in item.navs" 
                :key="index" 
                :to="item.link || ''"
                class="sidebar-link" >
                    <i class="fa fa-chevron-right"></i>
                    {{ item.name }}
                </router-link>
                
            </div>
        </section>
</template>

<script>
export default {
    props: ["item"]
}
</script>

<style scoped>
    .m-0 {
        font-size: 28px;
        font-weight: 1000;
    }

    .sidebar-link {
        display: block;
        color: #3E8CC7;
        padding: 8px;
        font-size: 25px;
        text-decoration:none;
    }
    
    .sidebar-link:hover {
        background-color: #DEE2E6;
    }

    .sidebar-link:hover,
    .sidebar-link:hover.fa {
        color: #212529;
    }

    .card {
        border-width: 0;
    }
</style>