<template>
    <app-header/>
    <br/>
    
    <div class="container login_fff6887">
    <div class="row justify-content-center">
    <div class="col-md-8 col-lg-6 col-xl-5">
    <div class="shadown">
        <Form @submit="submitUser" :validation-schema="contactFormSchema" >
            <h2>Đăng nhập</h2>
            <div class="input-section">
                <Field name="email" type="email" class="user-input" placeholder="Nhập Email" />
            </div>

            <ErrorMessage name="email" class="error-feedback" />
            <div class="input-section">
                <Field name="password" type="password" class="user-input" placeholder="Nhập Password">
                </Field>

            </div>
            <ErrorMessage name="password" class="error-feedback" />
            <p id="forgot-password">Quên mật khẩu</p>
            <div class="form-group">
                <button class="btn btn-dark">Đăng nhập</button>
            </div>
        </Form>
    
    </div>
    </div>
    </div>
    </div>
    
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import GlassestoreService from "../services/GlassesStores.service";
import * as yup from "yup";

export default {
    components: {
        AppHeader,
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:users"],
    props: {
        users: { type: Object, require: true },
    },
    data() {
        const contactFormSchema = yup.object().shape({
            email: yup
                .string()
                .required("@_@ Opps, Hãy nhập vào Email.")
                .email("Email không đúng"),
            password: yup
                .string()
                .required("@_@ Opps, Hãy nhập vào Password."),

        });
        return {
            userLocal: this.users,
            contactFormSchema,
        };
    },
    methods: {
        submitUser() {
            this.$emit("submit:users", this.userLocal);

        },
    },

}
</script>

<style scoped>
.user-input {
    margin: 10px 10px;
}
.error-feedback{
        color: red;
    }
.shadown{
    width:100%;
    border: 1px solid;
    padding: 10px;
    box-shadow: 1px 1px 1px 5px #AAA;
    
}


</style>