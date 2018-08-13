<template>
  <swiper :options="swiperOption" ref="mySwiper" class="pa-3" >
  <!-- slides -->
    <swiper-slide class="py-1" v-for="item in 10" :key="item" >
      <doctor-card :doctor="data" />
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'

export default {
  props: ['data', 'slides'],
  // components: {
  //   swiper,
  //   swiperSlide
  // },
  mounted() {
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(1, 1000, false)
  },
  methods: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
    callback(){

    }
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: this.slides,
        spaceBetween: 10,
        // centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1024: {
            slidesPerView: this.slides,
            spaceBetween: 10
          },
          768: {
            slidesPerView: this.slides-1,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      },
    }
  }
}
</script>

<style lang="less" scoped>
.swiper-container {
  width: -webkit-fill-available;
}
.swiper-button-next{
  background-color: rgba(255,255,255,0.98);
  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);
  border-radius: 2px;
  width: 3rem;
  top: 40%;
  height: 6rem;
  right: 0;
  cursor: pointer;
}

.swiper-button-prev {
  cursor: pointer;
  background-color: rgba(255,255,255,0.98);
  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);
  border-radius: 2px;
  top: 40%;
  left: 0;
  width: 3rem;
  height: 6rem;
}
</style>
