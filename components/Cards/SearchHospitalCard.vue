<template>
  <v-card flat hover class="pb-2" router :to="{name: 'Hospital', params: {id: item.get_hospital.id}}"  >
      <!-- <v-card-media
        :src="'http://localhost:8000/media/'+item.get_hospital.image_file"
        height="125px"
        contain
      > -->
      <v-card-media
        src="/img/demo.jpg"
        height="200px"
        contain
      >
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex class="bg-fullsheet" >
            <template v-if="item.get_additionalservice" >
            <div class="top-left pa-2" v-show="item.get_additionalservice.name" >
              <div class="headline" >{{ item.get_additionalservice.name}}</div>
              <div>Additional Service</div>
              <v-chip small label class="ml-0" color="info" text-color="white" >
                <template v-show="item.get_additionalservice.total_rating" >
                  {{ item.get_additionalservice.total_rating }} Ratings
                </template>
                ,&nbsp;
                <template v-show="item.get_additionalservice.recommended" >
                  <v-icon small>thumb_up</v-icon>
                  &nbsp; 
                  {{ item.get_additionalservice.recommended }}
                </template>
              </v-chip>
            </div>
              <v-chip v-show="item.get_additionalservice.overall_rating" :class="[getColorCode(item.get_additionalservice.overall_rating).backgroundColor, 'accent-1 bottom-left']" >
                {{item.get_additionalservice.overall_rating+" "}}
              </v-chip>
          </template>
          <template v-if="item.get_speciality" >
            <div class="top-left pa-2" v-show="item.get_speciality.name" >
              <div class="headline" >{{ item.get_speciality.name}}</div>
              <div>Service</div>
              <v-chip small label class="ml-0" color="info" text-color="white" >
                <template v-show="item.get_speciality.total_rating" >
                  {{ item.get_speciality.total_rating }} Ratings
                </template>
                ,&nbsp;
                <template v-show="item.get_speciality.recommended" >
                  <v-icon small>thumb_up</v-icon>
                  &nbsp; 
                  {{ item.get_speciality.recommended }}
                </template>
              </v-chip>
            </div>
              <v-chip v-show="item.get_speciality.overall_rating" :class="[getColorCode(item.get_speciality.overall_rating).backgroundColor, 'accent-1 white--text bottom-left']" >
                {{item.get_speciality.overall_rating+" "}}
              </v-chip>
          </template>
          <template v-if="item.get_service" >
            <div class="top-left pa-2" v-show="item.get_service.name" >
              <div class="headline" >{{ item.get_service.name}}</div>
              <div>Service</div>
              <v-chip small label class="ml-0" color="info" text-color="white" >
                <template v-show="item.get_service.total_rating" >
                  {{ item.get_service.total_rating }} Ratings
                </template>
                ,&nbsp;
                <template v-show="item.get_service.recommended" >
                  <v-icon small>thumb_up</v-icon>
                  &nbsp; 
                  {{ item.get_service.recommended }}
                </template>
              </v-chip>
            </div>
              <v-chip label v-show="item.get_service.overall_rating" :class="[getColorCode(item.get_service.overall_rating).backgroundColor, 'accent-1 white--text bottom-left']" >
                {{item.get_service.overall_rating+" "}}
              </v-chip>
          </template>
          <div class="bottom-right pa-2" v-if="item.get_hospital.distance">{{item.get_hospital.distance.text }} Away</div>
          <v-icon class="top-right pa-2" color="success" large >verified_user</v-icon>
          </v-flex>
        </v-layout>
      </v-container>
      </v-card-media>
    <!-- <v-card-media
    :src="'http://localhost:8000/media/'+item.get_hospital.image_file"
    height="200px"
    >
    <v-container class="card-label-spacing" fill-height fluid>
        <v-layout fill-height>
          <span><v-chip label class="success white--text" v-if="item.get_hospital.is_subscribed" >Verified</v-chip></span>
          <v-flex xs12 align-end d-flex >
            <span class="bg-tranparent body-1 white--text">5.2 Kms</span>
          </v-flex>
        </v-layout>
      </v-container>
  </v-card-media> -->
    <v-card-title class="py-0 pl-1">
      <span class="body-2 mb-0">{{item.get_hospital.title}}</span><br>
    </v-card-title>
    <v-card-title class="py-0 pb-2 pl-1">
      <div class="grey--text hidden-content">{{item.get_hospital.address}}</div>
    </v-card-title>
    <v-card-actions class="pa-0 pl-1">
      <rating-label :data="item.get_hospital.overall_rating" />
      <span class="pl-2 grey--text" >{{item.get_hospital.total_rating}} Ratings <v-icon left >chevron_right</v-icon></span>
      <v-spacer></v-spacer>
      <v-btn flat icon color="error" ><v-icon>turned_in_not</v-icon></v-btn>
      <v-btn flat icon color="info" @click.prevent="pushCompare(item.get_hospital)" ><v-icon >add</v-icon></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['item'],
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
      }
  },
  data() {
    return {

    }
  }
}
</script>
<style lang="less" >
  .v-card {
    &:hover{
      box-shadow: 0 3px 16px 0 rgba(0, 0, 0, .11);
    }
    .container{
      padding: 0;
    }

    
    .hidden-content {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .bg-fullsheet{
      background-color: rgba(0, 0, 0, 0.6);
      width: 100%;
      color: white;
      height: 100%;
      position: relative;

      .top-left{
        position: absolute;
        top: 0;
        left: 0;
      }

      .top-right{
        position: absolute;
        top: 0;
        right: 0;
      }
      
      .bottom-left{
        position: absolute;
        bottom: 0;
        left: 0;
      }

      .bottom-right{
        position: absolute;
        bottom: 0;
        right: 0;
      }

}

  }
  
</style>
