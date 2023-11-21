<template>
    <app-header/>
    <h1>This is Home</h1>
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
</template>
<script>
import AppHeader from '../components/AppHeader.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



export default {
    components: {
        AppHeader,
        Swiper,
        SwiperSlide,

    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
};
</script>
  