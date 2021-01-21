<template>
<div class="mySw full" >
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="https://file-skg.skg.com/skg.com/20200818/43659b682f524d179ffd922f4af7565e.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://file-skg.skg.com/skg.com/20200818/8eb7bfc45cea49deb4d9135abc1e3f31.jpg" alt="">
      </div>
    </div>
  </div>
</div>
  
</template>
<script>
export default {
  name: "aboutSwiper",
  data() {
    return {
      swiperOption: {
         direction: 'vertical',
        // loop: true, // 是否循环轮播
      }
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

.mySw{
  width: 100vw;
  height: 60vw;
}
.swiper-slide {
  height: 60vw;
}
</style>


