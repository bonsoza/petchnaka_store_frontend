<template>
  <div class="login container">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <img src="img/logo.png" alt="Logo" class="img-logo" />
        <div class="card">
          <h1 class="card-header">
            Log in
          </h1>
          <div class="card-body">
              <div class="form-group">
                <label for="">รหัสผู้ใช้งาน</label>
                <input
                  type="text"
                  placeholder="Username"
                  class="form-control"
                  v-model="username"
                />
              </div>

              <div class="form-group">
                <label for="">รหัสผ่าน</label>
                <input
                  type="password"
                  placeholder="Password"
                  class="form-control"
                  v-model="password"
                />
              </div>

              <div class="form-group">
                <button
                  class="btn btn-secondary"
                  type="button"
                  @click="getLogin()"
                >
                  เข้าสู่ระบบ
                </button>

              </div>
          </div>
        </div>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      upto: "",
      username: "",
      password: "",
      user1: "datacollector",
      pass1: "1234",
      user2: "facturer",
      pass2: "1234",
      user3: "deliveryman",
      pass3: "1234",
    };
  },
  methods: {
    getLogin() {
      // this.$router.push({ name: 'order-list' })
      if (this.username === this.user1 && this.password === this.pass1) {
        alert('เข้าสู่ระบบสำเร็จ')
        this.$router.push("/datacollect");
      }
      else if (this.username === this.user2 && this.password === this.pass2) {
        alert('เข้าสู่ระบบสำเร็จ')
        this.$router.push("/facturer");
      }
      else if (this.username === this.user3 && this.password === this.pass3) {
        alert('เข้าสู่ระบบสำเร็จ')
        this.$router.push("/deliveryman");
      }
       else {
        alert('เข้าสู่ระบบล้มเหลว!')
        alert('พิมรหัสใหม่อีกครั้ง!')
      }
    },
  },
};
</script>

<style scoped>
.img-logo {
  display: block;
  margin: auto;
  margin-top: 5%;
  margin-bottom: 10px;
}

h1 {
  font-size: 40px;
  font-weight: 1000;
  text-align: center;
  letter-spacing: 1px;
}

.card-body {
  padding-top: 5%;
  padding-left: 15%;
  padding-right: 15%;
  padding-bottom: 10%;
}

.form-group {
  padding-bottom: 5%;
}

.btn {
  width: 100%;
  font-size: 25px;
  /* background-color: #C1EBF4;
        border-color: white;
        color: #3E8CC7; */
  font-weight: 1000;
  margin-top: 2%;
}
.btn.router-link-exact-active {
  background-color: beige;
}
</style>
