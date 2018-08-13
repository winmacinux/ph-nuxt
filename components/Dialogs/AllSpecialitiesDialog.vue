<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable
    >
    <v-card tile class="fill-content" >
      <v-toolbar card light color="primary" fixed flat prominent >
        <v-text-field
        solo-inverted
        v-model="search"
        flat
        dark
        label="Search Specialities... "
        prepend-icon="search"
        />
        <!-- <v-spacer /> -->
        <v-btn icon dark @click.native="closeDialog" class="mr-4" >
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-content>
        <v-layout row wrap class="white" >
          <v-flex md2 sm3 xs4 v-for="(item, index) in specialities" :key="index" >
            <quick-speciality-card :item="item" />
          </v-flex>
        </v-layout>
      </v-content>
    </v-card>
  </v-dialog>  
</template>

<script>
export default {
  props: ['dialog'],
  methods: {
    closeDialog(){
      this.$emit('close')
    }
  },
  computed: {
    specialities(){
      if(this.search !== '')
        return this.$store.getters.filterSpecialites(this.search)
      else
        return this.$store.getters.loadAllSpecialities
    },
  },
  data () {
    return {
      search: ''
    }
  }
}
</script>

<style lang="less" scoped>
  .fill-content{
    height: fit-content !important;
  }
  .scroll-content{
    overflow-y: scroll;
  }
</style>
