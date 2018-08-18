<template>
<v-app>
    <v-navigation-drawer
      v-model="drawer"
      enable-resize-watcher
      hide-overlay
      floating
      temporary
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
      color="info"
      prominent
      dark
      scroll-off-screen
      flat
    >
      <v-toolbar-title class="ml-3 mr-3 hidden-xs-only">
        <v-avatar>
          <img src="/img/logo.png" alt="Logo Image"  >
        </v-avatar>
      </v-toolbar-title>
      <v-autocomplete
      :loading="loading"
      :items="searchItems"
      :search-input.sync="search"
      v-model="select"
      cache-items
      class="mx-3"
      flat
      hide-no-data
      hide-details
      label="Which state are you from?"
      solo-inverted
    ></v-autocomplete>
      <v-spacer class="hidden-xs-only"></v-spacer>
      <v-btn flat class="hidden-xs-only" >
        <v-icon left >insert_invitation</v-icon>
        Quick Appointment
      </v-btn>
      <v-btn flat class="hidden-xs-only" >
        Emergency
        <v-icon small>keyboard_arrow_down</v-icon>
      </v-btn>
      <v-btn flat class="hidden-xs-only" >
        Near By
        <v-icon small>keyboard_arrow_down</v-icon>
      </v-btn>
      <v-btn icon >
        <v-icon>face</v-icon>
      </v-btn>
      <v-btn icon >
        <v-icon>face</v-icon>
      </v-btn>
      <v-btn icon @click.stop="drawer = !drawer" class="hidden-sm-and-up">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content class="background">
      
      <nuxt/>
  <v-fab-transition >
      <v-btn
        color="info"
        dark
        fab
        fixed
        bottom
        right
      >
        <v-icon>keyboard_arrow_up</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
    </v-fab-transition>
    </v-content>
    <v-footer color="white" height="auto">
      <v-container>
        <v-layout row wrap >
          <v-flex xs10 >
            <span class="subheading" >Made with <v-icon color="error">favorite</v-icon> in India &copy; 2017</span>
          </v-flex>
          <v-flex xs2 >
            <gmap-map ref="newmap" map-type-id="terrain" :center="userLocation.currentLocation" :zoom="16" style="" >
              <gmap-marker
                :position.sync="userLocation.currentLocation"
                :clickable="false"
                :draggable="false"
              ></gmap-marker>
            </gmap-map>
          </v-flex>
        </v-layout>
      </v-container>
    </v-footer>
    <select-state-dialog :dialog="selectState" @success="selectState = false" />
  </v-app>
</template>

<script>
export default {
  methods: {
    querySelections (v) {
      this.loading = true
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    }
  },
  mounted() {
    navigator.geolocation.getCurrentPosition( position => {
      this.userLocation.currentLocation.lat = position.coords.latitude
      this.userLocation.currentLocation.lng = position.coords.longitude
      
      this.$refs.newmap.$mapPromise.then((map)=>{
        let geocoder = new google.maps.Geocoder();
        let location = {
          location: {
            ...this.userLocation.currentLocation
          }
        }
        geocoder.geocode(location, (results, status) => {
          console.log(results, status);
          if (status === 'OK') {
            this.userLocation.addressComponents = results[0].address_components
            let stateIndex = results[0].address_components.length-3
            this.userLocation.currentState = results[0].address_components[stateIndex].long_name
            // this.$store.dispatch('updateCurrentLocation', this.userLocation).then( () => {
            //   this.$store.dispatch('loadStates', { 'country_id': '101' })
            //   this.$store.dispatch('loadCities', { 'state': this.$store.getters.loadUserLocation.currentState })
            // })
          }
        })
      })
    }, error => {
      // alert("Kindly Allow Geolocation Access: " + error.message)
      // this.$store.dispatch('loadStates', { 'country_id': '101' })
      this.selectState = true
    })
  },
  watch: {
    search (val) {
      val && val !== this.select && this.querySelections(val)
    }
  },
  data () {
    return {
      selectState: false,
      clipped: false,
      drawer: false,
      fixed: false,
      userLocation: {
        addressComponents: [],
        currentState: null,
        currentLocation: {
          lat: 0,
          lng: 0
        },
      },
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'P',
      loading: false,
      searchItems: [],
      search: null,
      select: null,
      states: [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'District of Columbia',
        'Federated States of Micronesia',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Marshall Islands',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Northern Mariana Islands',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Palau',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virgin Island',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming'
      ]
    }
  },
  name: 'App'
}
</script>


<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

@media only screen and (min-width: 1264px) {
  .container {
      max-width: 1350px;
  }
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

