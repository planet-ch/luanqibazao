<template>
<div class="mySw full" >
  <div v-swiper:mySwiper="mobleSwiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) of getdata.data" :key="index"><swiper :getdata="item" type="small"/></div>
    </div>
        <div class="swiper-button-next" >
          <img src="https://file-skg.skg.com/skg.com/20200914/1f25d1ff02c94280af18900167390d70.png" alt="">
        </div>
        <div class="swiper-button-prev" >
          <img src="https://file-skg.skg.com/skg.com/20200914/c97f34b3a55742e885868a51cf32ff31.png" alt="">
        </div>
  </div>
</div>
  
</template>
<script>
import mainsmalldata from "~/static/data/mainsmalldata"
import swiper from '../smallswiperView/smallswiperView.vue'
export default {
  name: "smallSwiper",
  components: {
    swiper
  },
  data() {
    return {
      mobleSwiperOption: {
        loop: true, // 是否循环轮播
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }
      },
      offsetWidth: 0,
      isPC:　false,
    }
  },
  props:{
    getdata:{
      type:Object,
      default:()=>mainsmalldata
    }
  },
  methods:{
  },
};
</script>
<style lang="scss" scoped>
// .swiper-pagination{
//   .swiper-pagination-bullet{
//   background: none;
//   border: 1px solid #fff;
  
// }
// .swiper-pagination-bullet-active{
//     background: #fff;
//     border: none;
//   }
// }
.swiper-container{
  .swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {
    content: none;
  }
  .swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
    content: none;
  }
  margin-top: 30px;
  --swiper-theme-color: #4ad7c8;
  --swiper-navigation-size: 40px;
  .swiper-button-next {
    outline: none;
    margin-right: 20px;
    margin-bottom: 3px;
  }
  .swiper-button-prev {
    outline: none;
    margin-left: 23px;
    margin-bottom: 3px;
  }
}
.swiper-wrapper {
  height: 300px;
}
 .swiper-slide {
      text-align: center;
      font-size: 18px;
      transition: 300ms;
      transform: scale(0.8) !important;
    }
	.swiper-slide-active,.swiper-slide-duplicate-active{
      transform: scale(1) !important;
  }
.mySw{
  width: 100%;
}
@media screen and (min-width: 768px) {
  .swiper-wrapper{
    height: 60vh;
  }
  .mySw{
    width: 55%;
    margin: 0 auto;
  }
  .swiper-container{
    margin-top: 60px;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px){
  .swiper-wrapper{
    height: 30vh;
  }
  .mySw{
    width: 80%;
    margin: 0 auto;
  }
}
</style>


