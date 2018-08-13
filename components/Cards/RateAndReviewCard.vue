<template>
    <div class="top-card mb-5">
      <div class="rating_heading pa-3">
        <div class="overall_rating " >
          <div class="left" >
            <div class="display-2 mt-3" >3.2<v-icon color="black" class="pb-2" x-large>star</v-icon></div>
            <div class="grey--text">86 Ratings & 24 Reviews</div>
          </div>
          <div class="right" >
            <div class="reading">
              <div class="overall">
                5 <v-icon small color="black">star</v-icon>
              </div>
              <v-progress-linear value="30" height="5" color="success"></v-progress-linear>
              <div class="total">11</div>
            </div>
            <div class="reading">
              <div class="overall">
                4 <v-icon small color="black">star</v-icon>
              </div>
              <v-progress-linear value="30" height="5" color="success"></v-progress-linear>
              <div class="total">11</div>
            </div>
            <div class="reading">
              <div class="overall">
                3 <v-icon small color="black">star</v-icon>
              </div>
              <v-progress-linear value="30" height="5" color="success"></v-progress-linear>
              <div class="total">11</div>
            </div>
            <div class="reading">
              <div class="overall">
                2 <v-icon small color="black">star</v-icon>
              </div>
              <v-progress-linear value="30" height="5" color="warning"></v-progress-linear>
              <div class="total">11</div>
            </div>
            <div class="reading">
              <div class="overall">
                1 <v-icon small color="black">star</v-icon>
              </div>
              <v-progress-linear value="30" height="5" color="error"></v-progress-linear>
              <div class="total">11</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: [],
}
</script>

<style lang="less" scoped >
.top-card{
  width: 100%;
  min-height: 150px;
  
  .rating_heading{
    width: 100%;

    .under-title{
      height: 2px;
      width: 40px;
      background-color: #EE2E24;
      display: inline-block;
    }
  }

.overall_rating{
  width: 100%;
  text-align: center;

  .left {
    // background-color: aqua;
    // padding-top: 3rem;
    width: 30%;
    text-align: center;
  }

  .right {
    // background-color: antiquewhite;
    width: 70%;
    .reading{
      clear: both;
      .overall{
        width: 15%;
      float: left;
      margin: 0.1rem 0;
      color: black;
      // padding-right: 0.5rem;
      i {
        padding-bottom: 0.2rem;
      }
    }
    .v-progress-linear{
      float: left;
      width: 70%;
      margin: 0.6rem 0;
    }
    .total {
      float: left;
      width: 10%;
      padding-left: 0.5rem;
      margin: 0.1rem 0;
      color: grey;
    }
    }
  }
}

}
</style>

