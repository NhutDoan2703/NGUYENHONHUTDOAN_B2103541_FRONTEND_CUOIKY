<script> 
    import * as yup from "yup";
    import { Form, Field, ErrorMessage } from "vee-validate";
    import AuthenService from "../services/Authen.service.js"
    import Notificationjs from "../assets/js/Notification.js"
    import AppHeader from "../components/AppHeader.vue";
    import Notificationvue from "../components/Notification.vue";
    export default {
        components: {
    Form,
    Field,
    ErrorMessage,
    AppHeader,
    Notificationvue,
    Notificationjs
},
        data() {
        const Logupform = yup.object().shape({
            name: yup
            .string()
            .required("Vui lòng nhập tên.")
            .min(2, "Tên phải ít nhất 2 ký tự."),
            email: yup
            .string()
            .required("Vui lòng nhập email.")
            .email("E-mail không đúng.")
            .max(50, "E-mail tối đa 50 ký tự."),
           pwd: yup
            .string()
            .required("Mật khẩu phải có giá trị.")
            });
            return {
            Logupform,
            message:"Đăng ký thành công",
            usernew:{
                username:"",
                email:"",
                password:"",
            },
            Notificationjs:{
              title:"",
              msg:"",
              type:"",
              duration:0
                 },
            };
        },
        methods:{
            Notification,
            async postuser(){
                try{
                  await AuthService.createsignup(this.usernew);
                   this.Notificationjs.title="Thành công",
                  this.Notificationjs.msg="Đăng ký thành công",
                  this.Notificationjs.type="success",
                  this.Notificationjs.duration=2000
                  this.Notification();
                  setTimeout(()=>{
                    this.$router.push({name:"login"});
                  },2000);
                }catch(erorr){
                  console.log(erorr);
                  this.Notificationjs.title="Lỗi",
                  this.Notificationjs.msg="Thông tin bạn nhập đã được đăng ký",
                  this.Notificationjs.type="error",
                  this.Notificationjs.duration=2000
                  this.Notification();
                }
            }
        }
    };
</script>

<template>
  <div class="header">
        <app-header/>
    </div>
<Notificationvue/>
<section class="body_admin mt-4">
  <div class="container py-4">
            <h2 class="fw-bold mb-5 text-center">ĐĂNG KÝ TÀI KHOẢN</h2>
            <div class="h-100" >
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1 ">
            <Form :validation-schema="Logupform">
              <div class="form-outline mb-3 shadow-5">
                 <label class="form-label fw-bold" for="name">Họ và tên</label>
                 <Field 
                        id="name"
                        name="name"
                        placeholder="Nhập tên đăng ký"
                        type="text"
                        class="form-control form-control-lg"
                        v-model="usernew.username"/>
                    <ErrorMessage name="name" class="text-danger"/> 
              </div>
                <div class="mb-3">
                  <label class="form-label fw-bold" for="email">Email</label>
                  <div class="form-outline">
                      <Field 
                        id="email"
                        name="email"
                        placeholder="Nhập email đăng ký"
                        type="email"
                        class="form-control form-control-lg"
                        v-model="usernew.email"
                    />
                    <ErrorMessage name="email" class="text-danger" /> 
                  </div>
                </div>
              <div class="form-outline mb-3">
                <label class="form-label fw-bold" for="pwd">Mật khẩu</label>
                    <Field 
                        id="pwd"
                        name="pwd"
                        placeholder="Nhập mật khẩu"
                        type="password"
                        class="form-control form-control-lg"
                        v-model="usernew.password"
                    />
                    <ErrorMessage name="pwd" class="text-danger" /> 
              </div>
              <button type="button" class="btn btn-info btn-lg mb-4" @click="postuser()">
               ĐĂNG KÝ
              </button>
              <p>Nếu bạn đã có tài khoản <router-link to="/login"> Đăng nhập</router-link></p>

            </Form>
          </div>
          </div>
        </div>
      </div>
    </div>

</section>

</template>

  <style>
.body_admin{
    font-size: 25px;
}
</style>