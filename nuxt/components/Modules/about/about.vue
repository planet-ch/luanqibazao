<template>
    <div class="about">
        <skgMenu />
        <div class="mission">
         <div class="missionTxt">
           <p>让每个人更年轻健康</p>
           <p>尽享健康科技</p>
          </div>
        </div>
        <div class="aboutVideo">
          <div class="videoBox">
            <video
            src="https://file-skg.skg.com/skg.com/20201031/98be788bfa7f4dcc9c0b6c323ca44c18.mp4"
            class="Video"
            controls
            id="video"
            ></video>
            <div class="videoBottom">
              <img :src="videoBottom" alt="">
            </div>
          </div>
          <p class="aboutStory">品牌故事</p>
          <p class="aboutStoryEn">BRAND STORY</p>
          <div class="descripttion">
            未来穿戴技术有限公司（SKG）成立于2007年，是一家专注于可穿戴按摩仪研发、设计、生产的高科技公司。 <br class="brshow"/>
            立足于人体健康数据管理，SKG一直致力于让每个人更年轻健康，为用户提供高品质的可穿戴按摩仪产品和服务体验， <br class="brshow"/>
            同时也不断整合最优质的研发、设计和制造资源，现已拥有全球410项核心专利。
          </div>
        </div>
        <div class="history">
          <div class="historyTit">
            品牌发展历程
          </div>
          <historySwiper class="pcSwiper" />
        </div>
        <div class="culture">
          <div class="cultureTit">企业文化</div>
          <aboutSwiper  class="aboutSwiper"/>
        </div>
        <!-- 移动端 -->
        <div class="aboutInfo" v-for="(item,index) in infoData" :key="index">
          <div class="tit" :style="{background: item.color }">
            <p class="aboutTit">{{item.title}}</p>
            <nuxt-link :to="item.path">
              <p class="knowMore">了解更多</p>
            </nuxt-link>
          </div>
          <img :src="item.imgUrl" alt="" class="inFoImg">
        </div>
        <!-- PC端 -->
        <div class="pcAboutInfo">
          <aboutInfoSwiper />
        </div>
        <div class="joinUs">
          <p class="job">工作机会</p>
          <nuxt-link to="/joinUs">加入我们</nuxt-link>
        </div>
        <Foot />
    </div>
</template>


<script>
import skgMenu from "@/components/Modules/menu/menu.vue"
import Foot from "@/components/Modules/footer/footer.vue"
import aboutSwiper from '@/components/Modules/aboutSwiper/aboutSwiper.vue'
import historySwiper from '@/components/Modules/historySwiper/historySwiper.vue'
import aboutInfoSwiper from '@/components/Modules/aboutSwiper/aboutInfoSwiper.vue'
export default {
  name: "About",
  head() {
    return {
      title: 'SKG简介_品牌发展历程_企业文化-SKG官网',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'SKG简介,品牌发展历程,企业文化。SKG作为时尚的颈椎按摩仪品牌，集研发、生产、销售、培训为一体，主要经营颈椎按摩仪,护颈仪,颈部按摩器,颈椎按摩器等。'
        },
        {
          hid: 'Keywords',
          name: 'Keywords',
          content: 'SKG简介,品牌发展历程,企业文化'
        }
      ]
    }
  },
  components: {
    skgMenu,
    Foot,
    historySwiper,
    aboutSwiper,
    aboutInfoSwiper
  },
  data() {
    return {
      videoAutoPlay: require("@/static/img/autoPlay.png"),
      videoBottom: require("@/static/img/videoBottom.png"),
      cultureImg: "https://file-skg.skg.com/skg.com/20200724/6545d6ae9cd4459fba25fa8249bd2932.png",
      infoData: [
        {
          title: "知识产权及专利技术",
          imgUrl: "https://file-skg.skg.com/skg.com/20200724/d2203ff63d39456bb8a703754fd7f3ea.png",
          color: "#42d7c8",
          path: "/patent"
        },
        {
          title: "新闻中心",
          imgUrl:"https://file-skg.skg.com/skg.com/20200724/8739f8c0b9994b5abfedc1d8e99ac8a7.png",
          color: "#fff",
          path: "/news"
        },
        {
          title: "加入我们",
          imgUrl:"https://file-skg.skg.com/skg.com/20200724/c20397e064f442b1884b9bbb1d084e49.png",
          color: "#42d7c8",
          path: "/"
        },
      ]

    }
  },
}
</script>
<style lang="scss" scoped>
.about {
  padding-top: 50px;
  overflow-x: hidden;
}
.mission {
  height: 94vw;
  width: 100vw;
  font-size: 28px;
  font-family:  DFPGB_Y9;
  text-align: center;
  background: url("https://file-skg.skg.com/skg.com/20200724/9be415927fc84807a632d411b901ea0b.png");
  background-size: 100% 100%;
  .missionTxt {
    padding-top: 15vw;
    p {
      line-height: 35px;
      margin: 0;
    }
  }
}
.aboutVideo {
  width: 100vw;
  height: 108vw;
  .aboutStory {
    margin-top: 20px;
    color: #42d7c8;
    font-family: DFPGB_Y5;
    font-size: 18px;
    text-align: center;
    line-height: 18px;
  }
  .aboutStoryEn {
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 10px;
    color: #F2F2F2;
    text-align: center;
  }
  .videoBox {
    width: 90vw;
    height: 50vw;
    /* background-image: url("@/static/img/TV.png");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 0 16px; */
    margin-top: 2vh;
    margin-left: 5vw;
    position: relative;
  }
  .Video {
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
   width:80vw;
   height: 1vh;
   position: absolute;
   bottom: 0.5vh;
   left: 7vw;
  }
  .videoBottom img {
    width: 95%;
    height: 4vh;
  }
  .descripttion {
    width: 100vw;
    height: 18vh;
    padding: 0 15px;
    font-family: DFPGB_Y5;
    font-size: 12px;
    line-height: 20px;
  }
}
.history {
  width: 100vw;
  height: 244vw;
  background: url("https://file-skg.skg.com/skg.com/20200817/f2b5309bd1024325bd1bf3555f414bab.jpg");
  background-size: 100%;
  .pcSwiper {
    display: none;
  }
}
.culture{
  width: 100vw;
  height: 130vw;
  .cultureTit {
    font-size: 18px;
    text-align: center;
    line-height: 60px;
    font-family: DFPGB_Y9;
    color: #42d7c8;
    height: 60px;
  }
  img{
    width: 90+vw;
    margin-left: 5vw;
    height: 80vw;
  }
  .order {
    padding-top: 25px;
    text-align: center;
    font-family: DFPGB_Y5;
    font-size: 16px;
  }
  .orderContent {
    font-size: 18px;
    font-family: DFPGB_Y5;
    text-align: center;
    line-height: 40px;
  }
}
.aboutInfo {
  box-sizing: border-box;
  .tit {
    width: 100vw;
    height: 40vw;
    .aboutTit {
      font-size: 24px;
      font-family: DFPGB_Y9;
      text-align: center;
      padding-top: 12vw;
    }
    .knowMore {
      text-align: center;
      font-family: DFPGB_Y5;
      font-size: 14px;
      margin-top: 5vw;
    }
  }
  .inFoImg {
    display: block;
    width: 100%;
  }
  .aboutSwiper {
    display: block;
  }
}
.pcAboutInfo {
  display: none;
}
.joinUs {
  display: none;
}
.historyTit {
  display: none;
}
.brshow {
  display: none;
}
@media screen  and (min-width: 768px){
  .mission {
    background: url("https://file-skg.skg.com/skg.com/20200731/f0d7043b334843e0b4beb3b53feb1db3.png") no-repeat;
    background-size: 100%;
    height: 54vw;
    .missionTxt {
      display: none;
    }
  }
  .aboutVideo  {
    height: 48vw;
    .videoBox{
      width: 53vw;
      height: 30vw;
      margin-left: 23vw;
    }
    #videoAutoPlay {
      width: 15vw;
      height: 15vw;
    }
    .Video {
      width: 54vw;
      height: 30vw;
    }
    .videoBottom {
      width: 54vw;
      left: 2vw;
    }
    .aboutStory {
      font-size: 30px;
      margin-top: 45px;
       line-height: 30px;
    }
    .aboutStoryEn {
      font-size: 14px;
      line-height: 14px;
    }
    .descripttion {
      padding-top: 20px;
      text-align: center;
      font-size: 18px;
      line-height: 30px;
    }
  }
  .history {
    background: #42d7c8;
    background-size: 100%;
    height: 60vw;
    .historyTit {
      font-size: 26px;
      text-align: center;
      display: block;
      font-family: DFPGB_Y5;
      padding-top: 30px;
      font-weight: bold;
    }
    .pcSwiper {
      display: block;
      overflow: hidden;
    }
  }
  .aboutSwiper {
    display: none;
  }
  .culture {
    background: url("https://file-skg.skg.com/skg.com/20200804/f9cf0f1f4562438ab184ef88606354c0.png") no-repeat;
    background-size: 100%;
    height: 55vw;
    .cultureTit {
      display: none;
    }
  }
  .aboutInfo {
    display: none;
  }
  .pcAboutInfo {
    display: block;
    width: 100vw;
    height: 50vw;
    background: #42d7c8;
  }
  .joinUs {
    display: block;
    width: 100vw;
    height: 20vw;
    background: #fff;
    .job {
      text-align: center;
      font-size: 24px;
      font-family: DFPGB_Y5;
      color: #42d7c8;
      padding-top: 8vw;
    }
    a {
      display: block;
      width: 10vw;
      height: 2vw;
      background: #42d7c8;
      border-radius: 50px;
      text-align: center;
      font-family: DFPGB_Y5;
      font-size: 14px;
      margin-top: 1vw;
      line-height: 2vw;
      color: #fff;
      margin-left: 45vw;
    }
  }
  .brshow {
    display: block;
  }
}
</style>
