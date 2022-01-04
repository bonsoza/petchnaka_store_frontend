<template>
    <div class="layout">
        <navbar />
        <div class="container">
            <slot name="buttons"></slot>
            <div class="row">
                <div class="col-sm-9">
                    <slot></slot>
                </div>
                <div class="col-sm-3">
                    <sidebar />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import navbar from "@/components/menufacturer/navbar";
import sidebar from "@/components/menufacturer/sidebar";
export default {
    components:{
    navbar,
    sidebar
  }
}
</script>

<style scoped>
    .container {
        margin-top: 30px;
    }
</style>