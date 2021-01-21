<template>
<div class="mySw full" >
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) of getdata.data" :key="index"><swiper :getdata="item" type="small"/></div>
        <div class="swiper-pagination" ></div>
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
      swiperOption:{
        loop: true,
        speed: 300,
        slidesPerView: 3,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          paginationCurrentClass: "myCurrentPage"
        }
      },
      mobleSwiperOption: {
        loop: false, // 是否循环轮播
        pagination: {  // 开启分页符
          el: 'swiper-pagination'
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
    setFootCenter() {
      this.offsetWidth = document.body.offsetWidth
      // var menu = document.getElementsByClassName('menu')[0]
      // if (this.offsetWidth >= 780 && this.offsetWidth < 1280) {
      //   menu.style.marginLeft = (this.offsetWidth - 740) / 2 + 'px'
      // } else if (this.offsetWidth >= 1280) {
      //   menu.style.marginLeft = (this.offsetWidth - 940) / 2 + 'px'
      // }
      if (this.offsetWidth < 420) {
        this.isPC = false
      } else {
        this.isPC = true
      }
      // console.log("offsetwidth",this.offsetWidth,this.isPC)
    },
  },
  mounted() {
    this.setFootCenter()
    window.onresize = () => {
      this.setFootCenter()
    }
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
  margin-top: 50px;
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


