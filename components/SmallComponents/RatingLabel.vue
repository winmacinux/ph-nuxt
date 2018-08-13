<template>
  <v-chip label :class="[getColorCode(data).backgroundColor ,'accent-1 chip2']">
    <div :class="[getColorCode(data).backgroundColor, 'accent-4 white--text pa-1']">{{ data }}</div>
    <span :class="[getColorCode(data).backgroundColorText ,'accent-3 pa-1']">{{ getColorCode(data).text }}</span>
  </v-chip>
</template>

<script>
export default {
  props: ['data'],
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
  }
}
</script>

<style lang="less">
  .chip2 {
    
    .v-chip__content {
      height: auto;
      padding: 0 ;
      div{
        font-weight: 600;
      }
      span {
        font-weight: 500;
      }
    }
  } 
</style>
