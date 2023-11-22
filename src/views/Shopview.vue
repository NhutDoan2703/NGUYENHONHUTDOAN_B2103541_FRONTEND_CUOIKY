<template >
    <app-header/>
    
    <div class="col pb-0 small-12 large-12">
            <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                }" :pagination="{
                        clickable: true,
                     }" :navigation="true" :modules="modules" class="mySwiper">
            <swiper-slide><img src="../assets/image/swiper1.jpg" /></swiper-slide>
            <swiper-slide><img src="../assets/image/swiper2.jpg" /></swiper-slide>
            <swiper-slide><img src="../assets/image/swiper3.jpg" /></swiper-slide>
            </swiper>
    </div>
    <br/>
    
    <app-body/>

</template>
<script>

import AppHeader from '../components/AppHeader.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import AppBody from '../components/AppBody.vue';

export default {
    components:{
        AppHeader,
        Swiper,
        SwiperSlide,
        AppBody,

    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
    
}
</script>
<style lang="">
    
</style>