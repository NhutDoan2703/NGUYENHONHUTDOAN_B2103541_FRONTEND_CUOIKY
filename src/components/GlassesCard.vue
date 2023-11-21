<script>
export default {
	props: {
		products: { type: Object, required: true },
	},
};
</script>
<template>
	<div class="d-flex">
		<div class="p-1 d-fex flex-column">
			<img :src=" products.img[0]" alt="img" width="150">
		</div>
        <div>
            <div class="text p-1">
                <strong>Danh mục:</strong>
                {{products.categories}}
            </div>
            <div class="text p-1">
                <strong>Giá :</strong>
                {{products.price}}
            </div>
            <div class="p-1">
                <strong>Màu sắc:</strong>
                {{products.color}}
            </div>
            <div class="p-1">
                <strong>Phân loại:</strong>
                {{products.size}}
            </div>
            
        </div>
	</div>
</template>
<style>
.text{
    font-size: 20px;
}
</style>