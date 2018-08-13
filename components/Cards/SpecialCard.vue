<template>
  <v-card flat tile class="text-xs-center py-2" >
    <v-card-media
      src="/img/demo.jpg"
      contain height="150px"
    >
    </v-card-media>
    <v-card-text class="title pb-0">Speciality Name</v-card-text>
    <v-card-text>Some Imp and Trending About</v-card-text>
  </v-card>
</template>
<script>
export default {
  props: ['hospital'],
  methods: {
  },
  data () {
    return {
      
    }
  }
  
}
</script>
<style lang="less" scoped >
  .card {
    
    .container {
      padding: 0;
      
      .bg-tranparent{
        float: right;
        text-align: right;
        text-transform: uppercase;
        background-color: rgba(0, 0, 0, 0.3);
      }
      .bg-fullsheet{
        background-color: rgba(0, 0, 0, 0.6);
        width: 100%;
        height: 100%;
        position: relative;
        .title {
          width: 70%;
          font-size: 15px !important;
          // word-break: break-all;
          // background-color: aqua;
          text-transform: uppercase;
        }
      }

      .rating{
        position: absolute;
        bottom: 1rem;
        right: 0;
      }
      .distance{
        position: absolute;
        bottom: 1rem;
        left: 0;
      }
    }
    .chip {  
      // width: 6.5rem;
      .chip__content {
        height: auto !important;
        margin-left: -12px !important;
        text-align: center;
        font-size: 1rem;
        div {
          width: 1.5rem;
        }
      }
    }
  }
</style>


