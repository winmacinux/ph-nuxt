<template>
  <swiper :options="swiperOption" ref="mySwiper" class="pa-3" >
    <!-- slides -->
    <template  v-if="nearByCities.length == 0" >
      <swiper-slide class="py-1" v-for="i in 12" :key="i" >
        <city-loading />
      </swiper-slide>
    </template>
    <template v-else >
      <swiper-slide class="py-1" >
        <city-card :city="nearby" />
      </swiper-slide>
      <swiper-slide class="py-1" v-for="item in nearByCities" :key="item.id" >
        <city-card :city="item" />
      </swiper-slide>
      <swiper-slide class="py-1" >
        <city-card :city="allCities" />
      </swiper-slide>
    </template>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  props: ['slides'],
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    nearByCities() {
      return this.$store.getters.loadUserNearByCities
    },
  },
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
      nearby: {
        id: "nearbyid",
        name: "Near by",
        state_id: "",
        icon: "/icons/cities/nearby.png"
      },
      allCities: {
        id: "allcitiesid",
        name: "All Cities",
        state_id: "",
        icon: "/icons/cities/all_cities.png"
      },
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
            slidesPerView: this.slides,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 3,
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
