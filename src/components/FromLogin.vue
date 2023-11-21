<script> 
    import * as yup from "yup";
    import { Form, Field, ErrorMessage } from "vee-validate";
    import { mapActions } from "pinia";
    import { useAuthStore } from "@/stores/Auth.store";
    import Notificationjs from "../assets/js/Notification.js";
    export default {
        components: {
            Form,
            Field,
            ErrorMessage,
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
            Loginform,
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
                location.href='http://localhost:8001/';
              } catch (error) {
                this.toast();
                console.log(error);
              }
            },
        },
    };
</script>
<template >
      
        <Form :validation-schema="Loginform" @submit="handleLogin">
       
       <div class="form-outline mb-4 shadow-5">
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
       <div class="text-center text-lg-start mt-4 pt-2">
        <div class="row"></div>
           <button class="btn btn-info btn-lg">ĐĂNG NHẬP</button>
         <p class="small mt-2 pt-1 mb-0">Nếu bạn chưa có tài khoản <router-link to="/logup"
             class="text-primary">Đăng ký</router-link></p>
       </div>
     </Form>
     
</template>