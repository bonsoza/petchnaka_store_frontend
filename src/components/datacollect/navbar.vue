<template>
    <nav class="navbar navbar-light">
      <a class="name" href="#">
        <img src="/img/logo.png" alt="Logo">
      </a>
      <a href="" class="btn-logout">
        <i class="fa fa-sign-out" aria-hidden="true" @click="getLogout"></i>
      </a>
    </nav>
</template>

<script>
export default {
  methods: {
    getLogout() {
      alert('ออกจากระบบสำเร็จ')
      this.$router.push("/login");
    }
  }
}
</script>

<style scoped>

  .navbar {
    padding-top: 0%;
    background-color: whitesmoke;
    height: 80px;
    border-bottom: solid 2px #C1EBF4;
  }

  .name img{
    margin-left: 15px;
    width: 150px;
  }
  
  .btn-logout {
    background-color: #3E8CC7;
    width: 100px;
    height: 80px;
    color: white;
    font-size: 40px;
    text-align: center;
    line-height: 80px;
  }
  
</style>>
