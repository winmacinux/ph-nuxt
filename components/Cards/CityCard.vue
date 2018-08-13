<template>
  <div class="city pa-2" @click="getDetails" >
    <v-avatar
      size="74px"
      color="grey lighten-4"
    >
      <img :src="city.icon" v-if="city.icon" :alt="city.name" >
      <img src="/icons/cities/default.png" v-else alt="Default Image" >
    </v-avatar>
    <p class="pt-3">{{ city.name }}</p>
  </div>
</template>

<script>
export default {
  props: ['city'],
  methods: {
    getDetails(){
      this.$emit('data', this.city)
    }
  }
}
</script>

<style lang="less" scoped>
  .city {
    border-radius: 5px;
    &:hover{
      box-shadow: 0 3px 16px 0 rgba(0, 0, 0, .11);
    }
    text-align: center;
    cursor: pointer;
    p{
      text-align: center;
      font-weight: 500;
    }
  }
</style>
