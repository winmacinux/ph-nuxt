<template lang="html">
  <v-snackbar bottom right v-model="status" dark >
    {{ message }}
    <v-btn flat color="pink" @click="closeAlert" >Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  props: ['message', 'status'],
  methods: {
    closeAlert(){
      this.$emit('dismissed')
    }
  }
}
</script>

<style lang="css">
</style>
