<template>
<div class="mySw full" >
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) of getdata.data" :key="index">
        <swiper :getdata="item" type="small"/></div>
    </div>
    <div class="swiper-pagination" ></div>
  </div>
</div>
  
</template>
<script>
import maindata from "~/static/data/maindata"
import mainpcdata from "~/static/data/mainpcdata"
//setting
import {fullScreen} from '~/static/data/swiper.js'
//data
import swiper from '../swiperView/swiperView.vue'
export default {
  name: "smallwiper",
  components: {
    swiper
  },
  data() {
    return {
      swiperOption: {
        loop: false, // 是否循环轮播
        pagination: {  // 开启分页符
          el: '.swiper-pagination'
        }
      },
      getdata: {},
    }
  },
  methods:{
    init(){

    }
  },
  created(){
    console.log("1231231")
    var width = document.body.clientWidth
    if(width > 600){
      this.getdata = mainpcdata
    } else {
      this.getdata = maindata
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
// .swiper-container{
//   margin-top: 50px;
// }

  .swiper-pagination {
    position: absolute;
    width: 100vw; 
    height: 2vh;
    bottom: 4vh;
    left: 0vw;
    --swiper-theme-color: #1F6162;
  }

.mySw{
  width: 100%;
}
</style>


