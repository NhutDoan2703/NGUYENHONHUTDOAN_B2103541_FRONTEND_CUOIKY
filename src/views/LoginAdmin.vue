<template >
<Notification/>
<AppHeaderAdmin/>
<p style="font-size: 40px;" class="text-center mt-4">ĐĂNG NHẬP ADMIN</p>
<div class="body_admin">
 

  <div class="container-fluid h-custom login">
    <div class="row d-flex justify-content-center align-items-center ">
      
      <div class=" offset-xl-1 col-8">
        
        <Form :validation-schema="Loginform" @submit="handleLogin">
        
        <div class="form-outline mb-4 shadow-5 ">
          <label class="form-label fw-bold" for="username">Tên đăng nhập</label>
          <Field 
              id="name"
              placeholder="Nhập tên đăng nhập"
              name="username"
              type="text"
              class="form-control form-control-lg"
          />
          <ErrorMessage name="username" class="text-danger" />
        </div>

        <div class="form-outline mb-3">
          <label class="form-label fw-bold" for="pwd">Mật khẩu</label>
           <Field 
              id="pwd"
              placeholder="Nhập mật khẩu"
              name="password"
              type="password"
              class="form-control form-control-lg"
          />
          <ErrorMessage name="password" class="text-danger"/>
        </div>
        <div class="d-flex justify-content-between align-items-center">
       
        </div>
        <div class="text-center tex t-lg-start mt-4 pt-2">
            <button class="btn btn-info btn-lg"
              style="padding-left: 2.5rem; padding-right: 2.5rem;">ĐĂNG NHẬP</button>
       
        </div>
      </Form>
      </div>
    </div>
  </div>
</div>  

</template>

<script>  

import * as yup from "yup";
    import { Form, Field, ErrorMessage } from "vee-validate";
    import { mapActions } from "pinia";
    import { useAuthStore } from "@/stores/Authen.stores.js";
    import Notification from "../components/Notification.vue";
    import AppHeaderAdmin from "../components/AppHeaderAdmin.vue"
import Notification from "../components/Notification.vue";
    export default {
        components: {
    Form,
    Field,
    AppHeaderAdmin,
    ErrorMessage,
    Notification
},
        data() {
        const Loginform = yup.object().shape({
            username: yup
            .string()
            .required("Vui lòng nhập tên")
            .min(2, "Tên phải ít nhất 2 ký tự."),
           password: yup
            .string()
            .required("Vui lòng nhập mật khẩu")
            });
            return {
           
            toasts:{
                    title:"Lỗi",
                    msg:"Tên đăng nhập hoặc tài khoản không đúng!",
                    type:"warn",
                    duration:2000
                 },
            }
        },
        methods:{
            toast,
            showPwd(){
            if(document.querySelector("#checkpwd").checked == true){
                  document.querySelector("#pwd").type = 'text';
            }else{
                  document.querySelector("#pwd").type = 'password';
            }
          },
          	...mapActions(useAuthStore, ["login"]),
            async handleLogin(user) {
              try {
                await this.login(user);
                location.href='http://localhost:8001/homeadmin';
              } catch (error) {
                this.toast();
                console.log(error);
              }
            },
        },
    };
</script>

<style>
.body_admin{
    background-image: url('../assets/images/admin_lo.jpg');
    background-size: cover;
    font-size: 25px;
}
</style>