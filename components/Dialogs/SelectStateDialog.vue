<template>
  <v-dialog v-model="dialog" large persistent >
    <v-card>
      <v-card-text class="text-xs-center" >
        <div class="headline" >Select your Current State</div>
        <div class="grey--text" >Please let us know your current location so that we can suggest your hospitality and services in better way.</div>
      </v-card-text>
      <v-layout row wrap class="white" >
        <v-flex md2 sm3 xs4 v-for="(item, index) in states" :key="index" >
          <v-card tile >
            <city-card :city="item" @data="selectState" />
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>
  </v-dialog>  
</template>

<script>
export default {
  props: ['dialog'],
  computed: {
    states() {
      return this.$store.getters.loadUserStates
    }
  },
  methods: {
    selectState(obj) {
      this.$store.dispatch('loadCities', { 'state': obj.name })
      this.dialog = false
      this.$emit('success')
    }
  },
  data () {
    return {
      // dialog: false,
    }
  }
  
}
</script>

<style lang="less" scoped>
  .v-card {
    .city {

      &:hover {
        box-shadow: none;
      }
    }
  }
</style>
