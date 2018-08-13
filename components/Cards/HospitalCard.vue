<template>
  <v-card flat class="card2">
    <v-card-media
      :src="hospital.get_hospital.image_file"
      height="200px"
    >
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex xs12 align-end d-flex>
            <span class="bg-tranparent body-1 white--text pr-3">{{ hospital.get_hospital.distance.text }}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-media>
    <v-card-title class="pl-1 pt-1 pb-0">
      <span class="body-2 mb-0">{{ hospital.get_hospital.name }}</span><br>
    </v-card-title>
    <v-card-title class="pl-1 py-0 pb-2">
      <div class="grey--text hidden-content">{{ hospital.get_hospital.address+", "+hospital.get_hospital.state }}</div>
    </v-card-title>
    <v-card-actions class="pa-0 px-1">
      <rating-label :data="hospital.get_hospital.overall_rating" />
      <span class="pr-2 grey--text">{{hospital.get_hospital.total_rating}} Ratings</span>
      <v-spacer></v-spacer>
      <span>{{ hospital.get_hospital.distance.text }}</span>
      <v-btn flat icon color="error" ><v-icon>turned_in_not</v-icon></v-btn>
    </v-card-actions>
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
<style lang="less" >
.card2 {
  &:hover{
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
    }
    .hidden-content {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
}
</style>


