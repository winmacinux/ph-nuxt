<template>
  <v-container align-center align-content-center class="background" >
    <v-layout wrap row align-content-center align-center justify-center class="mb-3" >
      <v-flex  md2 sm3 xs4 v-for="(item, index) in quickSpecialities" :key="index" >
        <quick-speciality-card :item="item" />
      </v-flex>
      <v-flex xs12 class="text-xs-center stick-btn">
      <v-btn round color="primary" depressed @click="showSpecialities = false" >
        View More
        <v-icon right>keyboard_arrow_down</v-icon>
      </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  // props: ['userLocation'],
  async fetch ({ store, params }) {
    await store.dispatch('loadSpecialities')
  },
  methods: {
    toggleLocationLabel(val){
      this.showLocationLabel = false
    }
  },
  computed: {
    allStates() {
      return this.$store.getters.loadUserStates
    },
    nearByCities() {
      return this.$store.getters.loadUserNearByCities
    },
    quickSpecialities(){
      console.log(this.$store.getters.loadQuickSpecialites);
      return this.$store.getters.loadQuickSpecialites
    },
  },
  mounted() {
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  },
  data() {
    return {
      hospital: {
        "name": "Rajiv Gandhi Super Speciality Hospital",
        "address": "Tahirpur, Taharpur Village, Dilshad Garden",
        "location": "28.68928799999999,77.31658199999993",
        "city": "New Delhi",
        "district": "New Delhi",
        "state": "Delhi",
        "country": "India",
        "pincode": "110093",
        "phone": "011 6525 2480",
        "total_rating": 1,
        "overall_rating": 4.4,
        "get_hospital": {
          "id": 1,
          "name": "Rajiv Gandhi Super Speciality Hospital",
          "address": "Tahirpur, Taharpur Village, Dilshad Garden",
          "image_file": "assets/img/demo.jpg",
          "city": "New Delhi",
          "district": "New Delhi",
          "state": "Delhi",
          "country": "India",
          "location": {
            "lat": 28.68928799999999,
            "lng": 77.31658199999993
          },
          "is_subscribed": true,
          "total_rating": 1,
          "overall_rating": 4.4,
          "distance": {
            "text": "12.8 km",
            "value": 12765
          }
        }
      }
    }
  } 
}
</script>
<style lang="less" scoped>
.stick-btn{
  margin-top: -1.8rem;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.slick-track {
  width: 100% !important;

  .slick-slide{
    width: 200px !important;
  }
}
.temp{
  width: 200px !important;
  height: 100px !important;
  background-color: red !important;
  img{
    width: 200px !important;
    height: 100px !important;
  }
}

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
.bg-blue-gradient {
  background-color: #009cde;
  background-image: radial-gradient(circle farthest-side at center bottom,#009cde,#003087 125%);
  color: #fff;  

  .cards{
    .card{
      // border: 1px solid grey;
    }
  }
}
</style>


