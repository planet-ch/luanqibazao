<template>
  <div >
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) of videoData" :key="index">
          <div class="videoBox">
            <video
              :src="item.src"
              class="indexVideo"
              controls="controls"
              :poster="item.poster"
            ></video>
            <div class="videoBottom">
              <img :src="src.videoBottom" alt />
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <div class="videoswiper-pagination" style="margin: 32px 0 0 40vw;width:20vw;display:flex;justifyContent:center"></div>
    </div>
  </div>
</template>
<script>
//setting
import {fullScreen} from '~/static/data/swiper.js'
export default {
  name: "videowiper",
  data() {
    return {
      swiperOption: {
        loop: true, // 是否循环轮播
        pagination: {  // 开启分页符
          clickable: true,
          el: '.videoswiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

      src: {
        videoImg: require('@/static/img/videoImg.png'),
        videoBottom: require('@/static/img/videoBottom.png')
      },
      videoData: [
        {
          src: "https://file-skg.skg.com/skg.com/36D8CFA92E03C56AE28A305D8CB1DD94.mp4",
          poster: "https://file-skg.skg.com/skg.com/20201204/ad6b9bb846a747a3a55ce180e5f33c6b.png"
        },
        {
          src: "https://file-skg.skg.com/skg.com/20201031/98be788bfa7f4dcc9c0b6c323ca44c18.mp4",
          poster: "https://file-skg.skg.com/skg.com/20201031/76df1bde471e412abadcf31bd486599f.png",
        }, //
        {
          src: "https://file-skg.skg.com/skg.com/20201031/6d0a56c21edc4c8f809da3197729337a.mp4",
          poster:  "https://file-skg.skg.com/skg.com/20200829/5423975631d14b3387faa2fde5e5c671.jpg",
        }, // 网吧
        {
          src: "https://file-skg.skg.com/skg.com/20201031/16ded9d2d8fd476f84b0b38b617405f0.mp4",
          poster:  "https://file-skg.skg.com/skg.com/20200829/5399038d640749b0a3f8a1c287c71e9b.jpg",
        }, // 办公室
        {
          src: "https://file-skg.skg.com/skg.com/20201031/14c21edbd1cf4908ac18368f889572a1.mp4",
          poster:  "https://file-skg.skg.com/skg.com/20200829/18d3b900a0f64444b65c8b0acf0b5e41.jpg",
        }, // 公交站
      ],
    }
  },
  methods:{
    init(){

    },
  },
  created()
  {
    this.init()
  }
};
</script>
<style lang="scss" scoped>
 .swiper-pagination {
    position: absolute;
    width: 100vw;
    height: 2vh;
    bottom: 4vh;
    left: 0vw;
  }
  .mySw{
    width: 100%;
  }
.swiper-container{
    --swiper-navigation-color: #42d7c8;/* 单独设置按钮颜色 */
    --swiper-navigation-size: 44px;/* 设置按钮大小 */
    // margin: 50px;
  }
  .swiper-container{
    --swiper-pagination-color: #00b4aa;/* 两种都可以 */
  }
  .swiper-button-next {
    outline: none;
  }
  .indexVideo {
    width: 90vw;
    height: 50vw;
  }

  .videoBox {
    width: 90vw;
    height: 50vw;
    margin-top: 2vh;
    margin-left: 5vw;
    position: relative;
  }
  .videoBottom {
    width: 80vw;
    height: 1vh;
    position: absolute;
    bottom: 0.5vh;
    left: 7vw;
  }
  .videoBottom img {
    width: 95%;
    height: 4vh;
  }
  .swiper-button-prev  {
    display: none;
  }
  .swiper-button-next  {
    display: none;
  }

@media screen and (min-width: 768px) {
  .swiper-pagination {
    position: absolute;
    width: 100vw;
    height: 2vh;
    bottom: 4vh;
    left: 0vw;
    --swiper-theme-color: #1F6162;
  }
.swiper-container{
    --swiper-navigation-color: #42d7c8;/* 单独设置按钮颜色 */
    --swiper-navigation-size: 44px;/* 设置按钮大小 */
    margin: 50px;
  }

  .swiper-button-prev  {
    display: block;
  }
  .swiper-button-next  {
    display: block;
  }
  .mySw{
    width: 100%;
  }

  .indexVideo {
    width: 59vw;
    height: 33vw;
  }

  .videoBox {
    width: 90vw;
    height: auto;
    margin-left: 20vw;
    position: relative;
  }
  .videoBottom {
    width: 46vw;
    height: auto;
    position: absolute;
    bottom: -13%;
    left: 7vw;
  }
  .videoBottom img {
    height: auto;
  }
}
</style>


