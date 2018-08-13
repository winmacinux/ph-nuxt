<template>
  <v-card class="text-xs-center" flat >
    <v-container>
      <v-layout row wrap justify-center >
        <v-flex md6 class="pa-4">
          <v-card-text class="headline py-4" >Location Permission is Disabled</v-card-text>
          <v-btn color="error" @click="activateLocation" >Get your Location</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>  
</template>
<script>
export default {
  created(){
    this.activateLocation()
  },
  methods: {
    activateLocation(){
      navigator.geolocation.getCurrentPosition( position => {
        // console.log(position.coords)
        // this.coords = position.coords
        this.$emit('show', false)
      })
    }
  },
  data () {
    return {
      // coords: null
    }
  }
}
</script>
<style lang="less" scoped>
  .v-card{
    .flex {
      border: 0.2rem solid #e74c3c;
    }
  }
</style>
