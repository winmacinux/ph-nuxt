<template>
  <v-carousel class="elevation-1" hide-delimiters lazy>
    <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i">
    </v-carousel-item>
      <div row class="carousel-overlay" >
        <div class="about py-2 px-5">
          <p class="display-1" >Rajiv Gandhi Super Speciality Hospital</p>
          <p class="body-3">
            <v-icon color="white" small>location_on</v-icon>
            Road No. 1, N.H.  8, Mahipalpur Extn, Airport Zone, Block B, Mahipalpur Village, Mahipalpur, , Delhi</p>
          <rating-label data="4.5" />
          <span>4555 Ratings <v-icon dark>keyboard_arrow_right</v-icon></span>
          <v-chip color="info" outline >Hospital</v-chip>
          <v-chip color="error" outline >Private</v-chip>
        </div>
        <div class="content py-2 px-5" >
          <div>
            Exact Address of the hotel will be shared after the booking
          </div>
          <a class="text-xs-right mx-auto white--text" ><v-icon color="white" small >description</v-icon>Read Rules</a>
        </div>
      </div>
  </v-carousel>
</template>

<script>
export default {
  // props: ['items'],
  data() {
    return {
      items: [
        {
          src: "/img/demo.jpg"
        },
        {
          src: "/img/demo.jpg"
        },
        {
          src: "/img/demo.jpg"
        },
        {
          src: "/img/demo.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="less" >
.v-carousel {
  .carousel-overlay {
    position: absolute;
    bottom: 0;
    color: white;
    width: 100%;
    .about {
      width: 100%;
      min-height: 100px;
      background: rgba(0, 0, 0, 0.5);

      p {
        margin-bottom: 10px;
      }
    }
    .content {
      background: rgba(255, 0, 0, 0.5);
      width: 100%;
      // color: white;
    }

    .chip2 {
      .v-chip__content {
        height: 27px;
        padding: 0;
      div {
        // padding: 14px 5px !important;
      }
      span {
        padding: 14px 5px !important;
      }
    }
  }
  }
}
</style>
