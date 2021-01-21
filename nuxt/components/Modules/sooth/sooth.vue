<template>
  <div style="overflow-x:hidden">
  <skgmenu />
  <div class="soothPC">
    <div class="content_1">
      <p class="title_1">酥酥麻麻</p>
      <p class="title_2">感觉每根神经都在伸懒腰</p>
      <p class="titleS_1">秘经通技术</p>
      <div class="texts">
        <p>SKG秘经通技术是突破以往物理揉捏的表层式按摩</p>
        <p>在脉冲电技术上进行研发升级</p>
        <p>为您带来神经层，血管层，肌肉层，三层深度按摩体验 </p>
      </div>
      <div style="background-image:url('https://file-skg.skg.com/skg.com/20200909/d04796737054416cbe774205a188a055.gif');background-size: contain;background-repeat: no-repeat;" class="banner"> </div>
    </div>
    <div class="content_1" style="background:#42d7c8">
      <p class="title_1">暖暖的</p>
      <p class="title_2">像给脖子敷了热毛巾</p>
      <p class="titleS_1">恒温热敷技术</p>
      <div class="texts" style="font-size: 15px;line-height: 27px;">
        <p>产品内置新型温控器</p>
        <p>实现3秒速热，恒温热敷</p>
        <p>进一步消除疲劳感  </p>
      </div>
      <div style="background-image:url('https://file-skg.skg.com/skg.com/20200909/687c1b0444414e38883d0812691d192b.gif');background-size: contain;background-repeat: no-repeat;" class="banner"> </div>
    </div>
    <div class="content_1" style="background: #f3f4f8;height:100vh;padding-top:0">
      <!-- <p class="title_1">丁香医生证言</p>
      <p class="titleS_1">XXXXXXXXX</p>
      <div class="texts" style="font-size: 15px;line-height: 27px;">
        <p>XXXXXXXXX</p>
        <p>XXXXXXXXX</p>
        <p>XXXXXXXXX </p>
      </div> -->
      <!-- <img src="https://file-skg.skg.com/skg.com/20200814/8a07e455850a4d32965322c89936572a.png" style="width:100%"> -->
      <div style="background-image:url('https://file-skg.skg.com/skg.com/20200814/8a07e455850a4d32965322c89936572a.png');background-size: contain;background-repeat: no-repeat;width:100%;height:100vh;margin-top:0" class="banner"> </div>
    </div>
  </div>
  <div class="soothWrap">
    <img src="https://file-skg.skg.com/skg.com/20200909/54659aaf6cee4e9f943fab609aed5dd8.png" class="soothBanner" style="margin-top:50px">
    <div class="videoBox">
        <video
          src="https://file-skg.obs.cn-south-1.myhuaweicloud.com/skg.com/video/c4ca4238a0b923820dcc509a6f75849b.mp4"
          class="indexVideo"
          :poster="src.videoImg"
          @click="autoPlay"
          id="video"
          ></video>
        <img
          :src="src.videoAutoPlay"
          @click="autoPlay"
          alt=""
          id="videoAutoPlay"
          v-show="videoImgShow">
        <div class="videoBottom">
          <img :src="src.videoBottom" alt="">
        </div>
    </div>
    <div class="textbox">
        <div class="textView">
        <p class="textTit">秘经通技术</p>
        <p class="mr">酥酥麻麻，感觉每根神经都在伸懒腰</p>
        <div class="smallText">
          <p>SKG秘经通技术是突破以往物理揉捏的表层式按摩</p>
          <p>在脉冲电技术上进行研发升级</p>
          <p>为您带来神经层，血管层，肌肉层，三层深度按摩体验</p>
        </div>
      </div>
      <img src="https://file-skg.skg.com/skg.com/20200909/9d1a97a23cfa4ff08bfca0b70a87eeee.gif" class="soothBanner">
    </div>
    <div class="textBox">
      <div class="textView">
      <p class="textTit">恒温热敷技术</p>
      <p class="mr">暖暖的，像给脖子敷了热毛巾</p>
      <div class="smallText">
        <p>产品内置新型温控器</p>
        <p>实现3秒速热，恒温热敷</p>
        <p>进一步消除疲劳感</p>
      </div>
      </div>
      <img src="https://file-skg.skg.com/skg.com/20200909/d1d140e42f46463ea4e4c80658c6002e.gif" class="soothBanner">
    </div>
    <div class="textBox">
      <!-- <div class="textView">
      <img src="@/static/img/ty3.png" alt="">
        <div class="smallText">
          <p>*******************</p>
          <p>****************</p>
          <p>**************</p>
        </div>
      </div> -->
      <img src="https://file-skg.skg.com/skg.com/20200814/a44e919bac64414884525137bef582a7.jpg" class="soothBanner">
    </div>
  </div>
   <myfooter />
  </div>
</template>
<script>
import skgmenu from '@/components/Modules/menu/menu.vue'
import myfooter from '@/components/Modules/footer/footer.vue'
export default {
  name: 'sooth',
  head() {
    return {
      title: 'SKG技术原理_秘经通技术_恒温热敷技术-SKG官网',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'SKG技术原理,秘经通技术,恒温热敷技术。SKG作为时尚的颈椎按摩仪品牌，集研发、生产、销售、培训为一体，主要经营颈椎按摩仪,护颈仪,颈部按摩器,颈椎按摩器等。'
        },
        {
          hid: 'Keywords',
          name: 'Keywords',
          content: 'SKG技术原理,秘经通技术,恒温热敷技术'
        }
      ]
    }
  },
  components: {
    skgmenu,
    myfooter
  },
  data() {
    return {
      src: {
          videoImg: "https://file-skg.skg.com/skg.com/20200909/c655d70c9a264a88ad58ed8586780589.jpg",
          videoAutoPlay: require("@/static/img/autoPlay.png"),
          videoBottom: require("@/static/img/videoBottom.png"),
          to: require("@/static/img/whiteTo.png")
        },
        videoImgShow: true,
    }
  },
  methods: {
   autoPlay: function(){
        var video = document.getElementById("video")
        video.contro
        if(this.videoImgShow){
          this.videoImgShow = false
          video.play()
        } else {
          this.videoImgShow = true
          video.pause()
        }
      }
    },
}
</script>

<style lang="scss" scoped>
.soothPC{
  display: none;
}
.soothWrap{
  font-family: DFPGB_Y5;
  padding-top: 50px;
  background: #42d7c8;
  overflow-x: hidden;
  .soothBanner{
    width: 85%;
    margin: 30px auto;
    display: block;
  }
    .videoBox {
    width: 90vw;
    height: 50vw;
    margin-top: 2vh;
    margin-left: 5vw;
    position: relative;
    margin-bottom: 40px;
  }
  .indexVideo {
    width: 90vw;
    height: 50vw;
  }
  #videoAutoPlay {
    width: 20vw;
    height: 20vw;
    position: absolute;


    left: 40%;
    top: 27%;
  }
  .videoBottom {
    width:85vw;
    height: 1vh;
    position: absolute;
    bottom: 0.5vh;
    left: 7vw;
  }
  .videoBottom img {
    width: 95%;
    height: 4vh;
  }
  .textView{
    width: 85%;
    margin: 0 auto;
    img{
     width: 117px;
     height: 34px;
    }
    .textTit {
      padding: 35px 0 13px 0 ;
      font-size: 24px;
      text-align: center;
    }
    p{
      font-size: 13px;
      font-weight: bold;
      color: #000;
    }
    .mr{
      text-align: center;
      line-height: 18px;
    }
    .smallText p{
      text-align: center;
      font-size: 12px;
      font-weight: bold;
      line-height: 18px;
      color: #000;
    }
  }
  .textBox{
    margin-top: 30px;
    text-align: center;
  }
}
@media screen and (min-width: 768px) {
  .soothWrap{
    display: none;
  }
  .soothPC{
    padding-top: 70px;
    display: block;
    text-align: center;
    .content_1{
      padding-top: 5vh;
      height: 100vh;
      .title_1,.title_2{
        font-size: 30px;
        font-weight: bold;
        letter-spacing: 3px;
        line-height: 35px;
      }
      .titleS_1{
        font-size: 20px;
        padding: 2vh 0;
      }
      .texts{
        font-size: 15px;
        line-height: 27px;
      }
      .banner{
       height: 50vh;
       width: 50%;
       background-position: center;
       margin: 0 auto;
       margin-top: 5vh;
      }
    }
  }
}
</style>

