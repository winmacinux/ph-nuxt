import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAlu17PuCOggAb8q65PiJ2RhOkIwEzUxto',
    libraries: 'places',
    deepWatch: false
  }
})