<template>
  <v-card flat hover >
    <v-card-media
      src="/img/event.jpg"
      height="200px"
    >
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex xs12 class="bg-fullsheet white--text pa-2" >
            <div class="title">Health Check Event Zone</div>
            <div class="caption py-2">{{ hospital.get_hospital.name }}</div>
            <v-chip label class="ml-0" color="error" text-color="white" >
              Know More
            </v-chip>
            <div class="distance pa-2" >On 12/04/2014</div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-media>
  </v-card>
</template>
<script>
export default {
  props: ['hospital'],
  methods: {
    getColorCode(value){
      if(value == "NaN")
        value = 0

      let colors = {
        one: 'red',
        two: 'orange',
        three: 'yellow',
        four: 'light-blue',
        five: 'light-green',
      }
      let rating= {
        backgroundColor: '',
        backgroundColorText: '',
        text: '',
        value: value
      }

      if(value > 4){
        rating.backgroundColor=colors.five
        rating.backgroundColorText=colors.five+'--text'
        rating.text='Excellent'
      }
      else if(value > 3 && value <= 4){
        rating.backgroundColor=colors.four
        rating.backgroundColorText=colors.four+'--text'
        rating.text='Very Good'
      }
      else if(value > 2 && value <= 3){
        rating.backgroundColor=colors.three
        rating.backgroundColorText=colors.three+'--text'
        rating.text='Not Bad'
      }
      else if(value > 1 && value <= 2){
        rating.backgroundColor=colors.two
        rating.backgroundColorText=colors.two+'--text'
        rating.text='Bad'
      }else{
        rating.backgroundColor = colors.one
        rating.backgroundColorText = colors.one+'--text'
        rating.text = 'Poor'
      }      
      return rating
    },
  },
  data () {
    return {
      
    }
  }
  
}
</script>
<style lang="less" scoped >
  .v-card {
    border-radius: 5px; 
    transition: 0.5s;
    &:hover{
      transform: scale(1.02, 1.02);
      box-shadow: 0 3px 16px 0 rgba(0, 0, 0, .11);
    }
    
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
    .v-chip {  
      // width: 6.5rem;
      .v-chip__content {
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


