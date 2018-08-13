<template>
  <v-card>
    <v-card-media src="/img/doctor.jpg" height="200" ></v-card-media>
    <v-card-title class="body-2 pb-0" >{{ doctor.name }}</v-card-title>
    <v-card-title class="pt-0" >
      <div class="body-1">{{ doctor.speciality }}</div>
      <div class="caption grey--text" >({{ doctor.experience }})</div>
      <v-spacer />
    </v-card-title>
  </v-card>  
</template>

<script>
export default {
  props: ['doctor'],
  data() {
    return {

    }
  }
  
}
</script>

<style lang="less" scoped>

</style>
