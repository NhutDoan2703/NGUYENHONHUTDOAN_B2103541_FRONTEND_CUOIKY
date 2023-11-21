<script>
    export default{
        data(){
            return{
                products:[],
            }
        },
        props:{
            refeshlistcart:Function,
            carts:Array,
        },
        emit:[
            "deleted:cartIndex"
        ],
        methods:{
        deletedcart(index){
            this.$emit("deleted:cartIndex",index);
        },
    },
}
</script>
<template>
   
    <table class="table table-bordered table-dark cart_info text-center">
        <thead class="table-info ">
           <tr>
            <th>Tên sản phẩm</th>
            <th>Hỉnh ảnh</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Quản lý</th>
           </tr>
        </thead>
        <tbody v-for="(item,index) in carts">
            <tr>
                <td>{{item.title}}</td>
                <td class="col-md-2 col-lg-2 col-xl-2">
                    <img :src="item.img" class="img-fluid rounded-3" alt="Cotton T-shirt" ></td>
                <td>{{ item.price }}</td>
                <td>{{item.quantity}}</td>
                <td><button type="button" @click="deletedcart(index)" class="text-muted btn btn-exit"><i class="bi bi-trash3-fill text-danger"></i></button></td>
            </tr>
            
        </tbody>
    </table>
</template>