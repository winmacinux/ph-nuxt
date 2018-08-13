<template>
  <v-card tile class="pa-4" router :to="'search/'+item.data" style="min-height: 186px;">
    <v-avatar tile size="64px" >
      <img :src="item.icon" alt="">
    </v-avatar>
    <v-card-text>{{ item.name }}</v-card-text>
  </v-card>  
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="less" scoped>
  .v-card{
    text-align: center;
    cursor: pointer;
    // border: 0.1rem solid #ecf0f1;
  }
</style>
