import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import * as VueGoogleMaps from 'vue2-google-maps'
import VueGeolocation from 'vue-browser-geolocation'
import VueLocalStorage from 'vue-ls'
import VueContentLoading from 'vue-content-loading'

// if (process.browser) {
//   const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
//   Vue.use(VueAwesomeSwiper)
// }


// Dialogs Registration Globally
import AllSpeicailitiesDialog from '@/components/Dialogs/AllSpecialitiesDialog'
import SelectStateDialog from '@/components/Dialogs/SelectStateDialog'

// Cards Registration Globally
import HospitalCard from '@/components/Cards/HospitalCard'
import FullScreenHospitalCard from '@/components/Cards/FullScreenHospitalCard'
import SearchHospitalCard from '@/components/Cards/SearchHospitalCard'
import CityCard from '@/components/Cards/CityCard'
import EventCard from '@/components/Cards/EventCard'
import QuickSpecialityCard from '@/components/Cards/QuickSpecialityCard'
import ServiceCard from '@/components/Cards/ServiceCard'
import SpecialCard from '@/components/Cards/SpecialCard'
import RateAndReviewCard from '@/components/Cards/RateAndReviewCard'
import CustomerRateandReviewCard from '@/components/Cards/CustomerRateandReviewCard'
import QuestionCard from '@/components/Cards/QuestionCard'
import CustomerQuestionCard from '@/components/Cards/CustomerQuestionCard'
import DoctorCard from '@/components/Cards/DoctorCard'

// Label Components
import ActivateLocationLabel from '@/components/Labels/ActivateLocationLabel'
import RatingBarLabel from '@/components/Labels/RatingBarLabel'

// Loading Card Components
import HospitalLoadingCard from '@/components/LoadingCard/HospitalLoadingCard'
import CityLoadingCard from '@/components/LoadingCard/CityLoadingCard'

// Carousal Components
import HospitalGallerySlider from '@/components/Silder/HospitalGallerySlider'
import EventSilder from '@/components/Silder/EventSilder'
import FeaturedHospitalSlider from '@/components/Silder/FeaturedHospitalSlider'
import DoctorSlider from '@/components/Silder/DoctorSlider'
import NearbyCitySilder from '@/components/Silder/NearbyCitySilder'
import StateSlider from '@/components/Silder/StateSlider'

// SmallComponents
import RatingLabel from '@/components/SmallComponents/RatingLabel'
import SmallProfile from '@/components/SmallComponents/SmallProfile'
import SmallSpeciality from '@/components/SmallComponents/SmallSpeciality'
import AddImageOnLoad from '@/components/SmallComponents/AddImageOnLoad'
import AlertBar from '@/components/SmallComponents/AlertBar'

Vue.use(Vuetify)

Vue.use(Vuetify, { theme: {
  primary: '#0000',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107',
  background: '#f1f3f6',
}})

Vue.component('content-loading', VueContentLoading)
Vue.component('hospital-card', HospitalCard)
Vue.component('full-hospital-card', FullScreenHospitalCard)
Vue.component('search-hospital-card', SearchHospitalCard)
Vue.component('city-card', CityCard)
Vue.component('event-card', EventCard)
Vue.component('quick-speciality-card', QuickSpecialityCard)
Vue.component('service-card', ServiceCard)
Vue.component('special-card', SpecialCard)
Vue.component('rate-review-card', RateAndReviewCard)
Vue.component('customer-rate-review-card', CustomerRateandReviewCard)
Vue.component('customer-question-card', CustomerQuestionCard)
Vue.component('question-card', QuestionCard)
Vue.component('location-label', ActivateLocationLabel)
Vue.component('rate-bar-label', RatingBarLabel)
Vue.component('hospital-loading', HospitalLoadingCard)
Vue.component('city-loading', CityLoadingCard)
Vue.component('hospital-gallery-carousel', HospitalGallerySlider)
Vue.component('event-silder', EventSilder)
Vue.component('doctor-slider', DoctorSlider)
Vue.component('featured-hospital-silder', FeaturedHospitalSlider)
Vue.component('rating-label', RatingLabel)
Vue.component('small-profile', SmallProfile)
Vue.component('small-speciality', SmallSpeciality)
Vue.component('add-image-load', AddImageOnLoad)
Vue.component('alert-bar', AlertBar)
Vue.component('doctor-card', DoctorCard)
Vue.component('all-specialities-dialog', AllSpeicailitiesDialog)
Vue.component('select-state-dialog' , SelectStateDialog)
Vue.component('nearby-city-silder', NearbyCitySilder)
Vue.component('state-silder', StateSlider)

Vue.use(VueLocalStorage)
Vue.use(VueGeolocation)
// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyAlu17PuCOggAb8q65PiJ2RhOkIwEzUxto',
//     libraries: 'places',
//     deepWatch: false
//   }
// })
