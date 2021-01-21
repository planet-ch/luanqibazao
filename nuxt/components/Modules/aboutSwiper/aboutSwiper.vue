<template>
<div class="mySw full" >
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="https://file-skg.skg.com/skg.com/20201204/16bc27aaf7f441e39b22e9e81d5777a8.png" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://file-skg.skg.com/skg.com/20200804/32f68a48d4bb452ab7617c9d3e928cae.png" alt="">
      </div>
      <div class="swiper-slide">
        <img src= "https://file-skg.skg.com/skg.com/20200804/17407019d58144579c5717e5850ec84a.png" alt="">
      </div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</div>
  
</template>
<script>
import maindata from "~/static/data/maindata"
//setting
import {fullScreen} from '~/static/data/swiper.js'
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
.swiper-button-next, .swiper-container-rtl .swiper-button-prev {
  right: 0;
  outline: none
}
.swiper-button-prev, .swiper-container-rtl .swiper-button-next {
  left: 0;
  outline: none
}
.swiper-button-prev:after, .swiper-button-next:after {
  font-size: 22px;
}
.swiper-button-prev, .swiper-button-next {
  top: 130px;
  color: #ddd;
}
.swiper-slide {
  width:100%;
  img {
    width: 100%;
  }
}

.mySw{
  width: 90vw;
  margin:  0 5vw;
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
</style>


