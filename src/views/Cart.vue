<script>
import AppHeader from '../components/AppHeader.vue';
import CartService from '../services/GlassesStores.service';
import Notificationvue from '../components/Notification.vue'
import Notificationjs from '../assets/js/Notification.js'
import CartItem from "../components/CartItem.vue";
export default {
    data() {
        return {
            carts: [],
            notification: {
                title: "",
                msg: "",
                type: "",
                duration: 0
            },
        }
    },
    components: {
        AppHeader,
        Notificationvue,
        CartItem
    },
    methods: {
        getiduser() {
            const user = JSON.parse(localStorage.getItem("user"));
            return user._id;
        },
        async getcarts() {
            try {
                this.carts = await CartService.get(this.getiduser());
            } catch (error) {
                console.log(error);
            }
        },
        async delcart(index) {
            this.Notificationotification.title = "Deleted",
                this.Notification.msg = "Đã xóa sản phẩm",
                this.Notification.type = "error",
                this.Notification.duration = 2000
            this.Notificationjs();
            await CartService.delete(this.carts[index]._id)
            this.refeshlistcart();
        },
        Notificationjs,
        refeshlistcart() {
            this.getcarts();
        },

        async registerproduct() {
            if (this.carts.length > 0) {
                this.Notification.title = "Thành công",
                    this.Notification.msg = "Đặt hàng thành công",
                    this.Notification.type = "success",
                    this.Notification.duration = 2000,

                    this.Notificationjs();
                await CartService.deleteAll({})
                this.refeshlistcart();
            } else {
                this.Notification.title = "lỗi",
                    this.Notification.msg = "Đặt hàng không thành công, vui lòng thêm sản phẩm vào giỏ hàng",
                    this.Notification.type = "error",
                    this.Notification.duration = 3000,
                    this.Notificationjs();
            }
        },
        async removeAllCart() {
            if (confirm("Bạn có chắc muốn xóa tất cả giỏ hàng")) {
                try {
                    await CartService.deleteAll();
                    this.refeshlistcart();
                } catch (error) {
                    console.log(error);
                }
            }
        },
        total() {
            var total = 0;
            for (var i in this.carts) {
                total += (this.carts[i].price * this.carts[i].quantity);
            }
            return total;
        }
    },
    created() {
        this.refeshlistcart();
    },
}
</script>
<template>
    <app-header/>
    <notificationvue/>
    <section class="h-100 h-custom">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12">
                    <div class="card card-registration card-registration-2" style="border-radius: 15px;">
                       
                        <h2 class="fw-bold mb-0 text-black mx-auto text-center">Giỏ hàng của bạn</h2>
                        
                    </div>

                    
                    <p class="my-4"></p>
                    <cart-item :refeshlistcart="refeshlistcart" :carts="carts" @deleted:cartIndex="delcart"></cart-item>
                    <button class="btn btn-sm btn-dark" @click="removeAllCart">
                        <i class="fas fa-trash"></i> Xóa tất cả
                    </button>
                    <hr class="my-4">

                    
                    <div class="d-flex justify-content-between mb-5">
                        <h5 class="text-dark">TỔNG TIỀN</h5>
                        <h5 class="text-dark">{{ total() }}<span> VNĐ</span></h5>
                    </div>
                    <button type="button" class="btn btn-dark btn-block btn-lg mx-auto text-center"
                        data-mdb-ripple-color="white" @click="registerproduct()">Đặt hàng</button>

                </div>
            </div>
            
        </div>
        
    </section>
</template>
<style scoped>
@media (min-width: 1025px) {
    .h-custom {
        height: 100%;
    }
}

.card-registration .select-input.form-control[readonly]:not([disabled]) {
    font-size: 1rem;
    line-height: 2.15;
    padding-left: .75em;
    padding-right: .75em;
}

.card-registration .select-arrow {
    top: 13px;
}

.bg-grey {
    background-color: #050505;
}

@media (min-width: 992px) {
    .card-registration-2 .bg-grey {
        border-top-right-radius: 16px;
        border-bottom-right-radius: 16px;
    }
}

@media (max-width: 991px) {
    .card-registration-2 .bg-grey {
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
    }
}
</style>