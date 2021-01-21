<template>
<div class="mySw full" >
  <!-- Swiper -->
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <nuxt-link to="/patent">
          <img  src="https://file-skg.skg.com/skg.com/20200817/b4f2ed310ec043ec8bec486b7487f274.jpg" alt="">
        </nuxt-link>
      </div>
      <div class="swiper-slide">
        <nuxt-link to="/news">
         <img  src= "https://file-skg.skg.com/skg.com/20200817/a3032221ed644af682bac82e3403a180.jpg"  alt="">
        </nuxt-link>
      </div>
    </div>
    <div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide" aria-disabled="false">
      <img src="https://file-skg.skg.com/skg.com/20200804/cd5964b2cc1f46378186d18e48d516d5.png" alt="">
    </div>
    <div class="swiper-button-prev" tabindex="-1" role="button" aria-label="Previous slide" aria-disabled="true">
      <img src="https://file-skg.skg.com/skg.com/20200804/7e828e326f82402fa28f512dbbaa20d8.png" alt="">
    </div>
  </div>

</div>
  
</template>
<script>
import maindata from "~/static/data/maindata"
//setting
import 'swiper/css/swiper.css'
export default {
  name: "aboutSwiper",
  data() {
    return {
      swiperOption: {
        loop: true, // 是否循环轮播
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    }
  },
  props:{
    getdata:{
      type:Object,
      default:()=>maindata
    }
  },
  methods:{
    init(){

    }
  },
  created()
  {
    this.init()
  }
};
</script>
<style lang="scss" scoped>
.swiper-slide {
  width:100%;
  img {
    width: 100%;
  }
}

.mySw{
  width: 60vw;
  
  margin:  0 20vw;
}
.order {
  width: 100%;
  font-size: 18px;
  font-family: DFPGB_Y5;
  text-align: center;
}
.content {
  width: 100%;
  font-size: 14px;
  font-family: DFPGB_Y5;
  text-align: left;
}
.swiper-slide  {
  width: 60vw;
  img {
    width: 100%;
  }
}
.swiper-button-next:after {
  content: none;
}
.swiper-button-prev:after {
  content: none;
}
</style>


