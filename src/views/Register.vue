<template>
  <div class="register container">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <img src="img/logo.png" alt="Logo" class="img-logo" />
        <div class="card">
          <h1 class="card-header">Register</h1>
          <div class="card-body">
            <form @submit.prevent="onSubmit()">
              <div class="form-group">
                <label for="">ชื่อ</label>
                <input v-validate="'required'" name="myinput" type="text" />
                <span>{{ errors.first("myinput") }}</span>
                <!-- <ValidationProvider rules="required" v-slot="{ errors }">
                  <input
                    type="text"
                    name="firstname"
                    v-validate="'required'"
                    v-model.trim="form.firstname"
                    class="form-control"
                  />
                  <span>{{ errors[0] }}</span>
                </ValidationProvider> -->
              </div>

              <div class="form-group">
                <label for="">นามสกุล</label>
                <input
                  type="text"
                  v-model.trim="form.lastname"
                  class="form-control"
                />
              </div>

              <div class="form-group">
                <label for="">รหัสผู้ใช้งาน</label>
                <input
                  type="text"
                  v-model.trim="form.emp_username"
                  class="form-control"
                />
              </div>

              <div class="form-group">
                <label for="">รหัสผ่าน</label>
                <input
                  type="text"
                  v-model.trim="form.emp_password"
                  class="form-control"
                />
              </div>

              <div class="form-group">
                <button type="submit" class="btn btn-info btn-block">
                  ลงทะเบียน
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
//import { ValidationProvider } from "vee-validate";
export default {
  components: {
    //ValidationProvider,
  },
  data() {
    return {
      form: {
        firstname: "",
        lastname: "",
        emp_username: "",
        emp_password: "",
      },
    };
  },
  methods: {
    //บันทึกข้อมูล
    onSubmit() {
      console.log(this.form);
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
  font-weight: 1000;
  margin-top: 2%;
}
</style>
