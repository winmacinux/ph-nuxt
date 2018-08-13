<template>
  <div>
    <v-chip @click="selectRating" label outline color="grey" v-for="i in 5" :key="i" :class="[{'active': rating == i},'chip4']" >{{ i }}</v-chip>
    <span v-if="rating" :class="[colors[rating].color+'--text','body-2']"  >{{ colors[rating].text }}</span>
  </div>
</template>

<script>
export default {
  methods: {
    selectRating(event){
      if(event.path[0].innerHTML > 0){
        this.rating = event.path[0].innerHTML
        this.$emit('rating', this.rating)
      }
    }
  },
  data () {
    return {
      rating: 0,
      colors: [
        { 
          color: 'grey',
          text: ''
        },
        { 
          color: 'error',
          text: 'Very Bad'
        },
        { 
          color: 'warning',
          text: 'Bad'
        },
        { 
          color: 'primary',
          text: 'Good'
        },
        { 
          color: 'primary',
          text: 'Very Good'
        } , 
        { 
          color: 'success',
          text: 'Excellent'
        },
      ]
    }
  }
}
</script>

<style lang="less">
  .chip4 {
    font-weight: 600;
    border: 2px solid #e0e0e0;
    cursor: pointer;
    
    &.active {
      border: 2px solid #2874f0 !important;
      color: #2874f0 !important;
      // background-color: #BBDEFB !important;
    }
    
    .v-chip__content {
      cursor: pointer;
    }

  }
</style>
