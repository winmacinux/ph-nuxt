<template>
    <v-card flat >
      <v-card-title class="body-2 px-3 py-1" >
        <v-container class="pa-0" >
          <v-layout >
            <v-flex >
              <v-chip label class="ml-0 pa-0 chip2" color="success" text-color="white" >4 <v-icon small >star</v-icon></v-chip>
            </v-flex>
            <v-flex>
              {{ title }}
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-title>
      <v-card-text v-if="review.length > 200" class="px-3 py-0" >
      <template v-if="readMore" >
        {{ review.substring(0, 200) }}
        <br>
      <v-btn small flat color="info" @click="readMore=false" >Read More</v-btn>
      </template>
      <template v-else>
        {{ review }}
      </template>
      </v-card-text>
      <v-card-text v-else class="px-3 py-0" >
        {{ review }}
      </v-card-text>
      <v-card-actions class="px-3">
        <p class="caption grey--text"><b>Imran Sk</b> <v-icon small >check_circle</v-icon>Certified User 10 Feb, 2018</p>
        <v-spacer></v-spacer>
        <v-btn flat icon color="grey" ><v-icon small >thumb_down_alt</v-icon> 28</v-btn>
        <v-btn flat icon color="grey"><v-icon small >thumb_up_alt</v-icon> 35</v-btn>
      </v-card-actions>
    </v-card>    
</template>
<script>
export default {
  data () {
    return {
        readMore: true,
        title: 'No doubt why may OEM\'s are going for this chipset for their mid-range 4G handset offerings. It is very power efficient',
        review: 'Redmi 2 Prime is what gives the term VFM meaning. Not that Redmi1s and Redmi 2 were not VFM but this one takes it to whole new level offering 2GB RAM with 16 GB onboard storage, dual-sim 4G connectivity and 64-bit chipset.Ordered the product on 10-Aug under the exchange scheme and 10% cashback with Citibank card and got the product delivered today much ahead of the expected delivery date (19th Aug). So good job flipkart. Being an Mi3 user, I can say this product will definitely meet a regular user\'s expectation easily. It has the Snapdragon 410 , which I know for sure is one of the better mid-range chipset from Qualcomm unlike the 615 which has heating issues. No doubt why may OEM\'s are going for this chipset for their mid-range 4G handset offerings. It is very power efficient (great battery life) and the audio DAC it comes with gives very good sound output through the head-phones. I have tested the sound quality myself with the Rightmark Audio Analyzer and believe me it\'s great. You can refer to the Redmi 2 review on gsmarena.com for a word on its sound quality. I can\'t say this about my Mi3 (Snapdragon 800) in which the frequency response which has a cutoff at bass frequencies. In a day\'s use, I have not come across any drawbacks and hope it stays that way. To summarize, I can only say go for it if you want something under 7K! It\'s totally worth it.'
    }
  }
}
</script>
<style lang="less" scoped>
.chip2 {
  .v-chip__content{
    padding: 0  4px;
    line-height: 0.1;
    height: 20px;
  }
} 
</style>
