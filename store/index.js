import Vuex from 'vuex'
import axios from 'axios'
import VueGeolocation from 'vue-browser-geolocation'
import specialities from '@/static/assets/specialities.json'
import states from '@/static/assets/states.json'
import cities from '@/static/assets/cities.json'

const createStore = () => {
  return new Vuex.Store({
    state: {
      error: {
        status: false,
        text: '',
      },
      userLocation: {
        addressComponents: [],
        currentState: null,
        currentLocation: {
          lat: 0,
          lng: 0
        },
      },
      specaialities: [{
        "id": "1",
        "data": "Audiologist",
        "name": "Audiology",
        "quick": false,
        "icon": "assets/icons/audiology.png"
      }],
      nearbyLocations: [],
      userStates: [],
      cities: [],
      states: [{
        "id": "4113",
        "name": "",
        "country_id": ""
      }],
      loading: false,
      header: {
        headers: {
          'Authorization': 'Token fd683b6cd8e7f02b9a8875ec889ce1bf03526591',
          'Content-Type': 'application/json'
        }
      },
      currentLocation: null,
      serverURL: {
        filterLoad: 'http://localhost:8000/hospital/filter/',
        searchLoad: 'http://localhost:8000/hospital/search/',
        hospital: 'http://localhost:8000/hospital/hospitals/',
        hosp: 'http://localhost:8000/hospital/hospital/',
        room: 'http://localhost:8000/hospital/rooms/',
        event: 'http://localhost:8000/hospital/events/',
        hr: 'http://localhost:8000/hospital/hrs/',
        feedback: 'http://localhost:8000/hospital/feedbacks/',
        report: 'http://localhost:8000/hospital/reports/',
        image: 'http://localhost:8000/hospital/images/',
        additionalservices: 'http://localhost:8000/hospital/additionalservices/',
        service: 'http://localhost:8000/hospital/services/',
        subService: 'http://localhost:8000/hospital/subservices/',
        mailNormal: 'http://localhost:8000/hospital/mail/',
        rating: 'http://localhost:8000/review/ratings/',
        comment: 'http://localhost:8000/review/comments/',
        user: 'http://localhost:8000/user/',
        userLogin: 'http://localhost:8000/user/login/',
        nearbyLocations: 'http://localhost:8000/user/nearby_locations/',
        loadStates: 'http://localhost:8000/user/states/',
      },
      searchData: ['Ravi']
    },

    mutations: {
      setError(state, payload){
        state.error = payload
      },
      setLoading(state, payload){
        state.loading = payload
      },
      setSearch(state, payload){
        state.searchData = payload
      },
      setCurrentLocation(state, payload){
        state.currentLocation = payload
      },
      setSpecialities(state, payload) {
        state.specaialities = payload
      },
      setStates(state, payload) {
        state.states = payload
      },
      setCities(state, payload) {
        state.cities = payload
      },
      setUserStates(state, payload) {
        state.userStates = payload
      },
      setNearbyLocations(state, payload) {
        state.nearbyLocations = payload
      },
      setUserLocation(state, payload) {
        state.userLocation = payload
      }
    },

    actions: {
      updateCurrentLocation({commit}, payload){
        commit('setUserLocation', payload)
      },
      // Load States to application
      loadStates({commit, getters}, payload) {
        new Promise((resolve, reject) => {

          axios.post(getters.getServerURL.loadStates, payload, getters.getHeaders).then(response=> {
            commit('setUserStates', response.data)
            console.log(response.data)
            resolve()
          }).catch(e=> {
            reject('Error')
            commit('setError', {
              status: true,
              text: e
            })
          })
        })
      },
      // Load Cities to application
      loadCities({commit, getters}, payload) {
        axios.post(getters.getServerURL.nearbyLocations, payload, getters.getHeaders).then(response=> {
          console.log(response.data)
          commit('setNearbyLocations', response.data)
        }).catch(e=> {
          commit('setError', {
            status: true,
            text: e
          })
        })
      },
      // Load Specialities to application
      loadSpecialities({commit}) {
        commit('setSpecialities', specialities.specialities)
      },
      updateError({commit}, payload){
        commit('setLoading', true)
        commit('setError', {
          status: payload.status,
          text: payload.text
        })
        commit('setLoading', false)
      },
      searchload({commit, getters}, payload){
        commit('setLoading', true)
        let search = {
          search: payload
        }
        axios.post(getters.getServerURL.searchLoad, search, getters.getHeaders).then(response=> {
          console.log(response.data)
          commit('setSearch', response.data)
          this.$router.push('/search/')
        }).catch(e=> {
          commit('setError', {
            status: true,
            text: e
          })
        })
        commit('setLoading', false)
      }
    },

    getters: {
      loadUserLocation(state){
        return state.userLocation
      },
      loadUserStates(state, getters){
        return state.userStates
      },
      loadStates(state, getters){
        return state.states.filter( o => {
          return o.country_id === "101"
        })
      },
      loadUserCurrentState(state, getters){
        if (getters.loadUserLocation.currentState !== null && state.userStates.length > 0) {

          return state.userStates.find(o => {
            return o.name.toLowerCase().indexOf(getters.loadUserLocation.currentState.toLowerCase()) > -1
          })
        }
      },
      loadUserNearByCities(state, getters){
        return state.nearbyLocations
      },
      loadQuickSpecialites(state){
        return state.specaialities.filter( o => {
          return o.quick === true
        })
      },
      loadAllSpecialities(state){
        return state.specaialities
      },
      filterSpecialites(state) {
        return (search) => {
          return state.specaialities.filter( (obj) => {
            return obj.name.toLowerCase().indexOf(search.toLowerCase()) > -1
          })
        }
      },
      loadCurrentLocation(state){
        return state.currentLocation
      },
      getSearchData(state){
        return state.searchData
      },
      getServerURL(state) {
        return state.serverURL
      },
      getHeaders(state){
        return state.header
      },
      loadError(state){
        return state.error
      },
      loading(state){
        return state.loading
      },
    }
  })
}

export default createStore