<template>
  <div>
    <skgmenu />
    <div class="patentPC">
      <div class="heard">
        <div class="textBox">
          <p class="bigTitle">知识产权及专利技术</p>
          <p style="margin-top:20px">作为全球领先可穿戴按摩仪品牌</p>
          <p>SKG正不断通过技术创新</p>
          <p>致力于为全球用户提供出众的可穿戴按摩体验</p>
          <p>SKG尊重他人知识产权</p>
          <p>同时非常注重自有知识产及专利技术权保护</p>
          <p>我们坚持“研发”与“创新”双驱动，构筑坚固的技术壁垒</p>
        </div>
        <div class="imgBox">
          <img src="https://file-skg.obs.cn-south-1.myhuaweicloud.com/skg.com/20200723/c6cde03b00a2484c8513f0356120d435.png?x-oss-process=image/resize,h_300"/>
        </div>
      </div>
      <div class="footerBox">
        <div class="patentBox fl" @click="goNews">
          <img src="@/static/img/icon_1.png" alt="">
          <p class="title">知识产权动态</p>
          <p class="text">SKG知识产权创新活动和行业知识产权发展动态 </p>
          <p class="btn">了解详情&gt;</p>
        </div>
        <div class="patentBox fr" @click="goNews">
          <img src="@/static/img/icon_2.png"  style="width: 53px;" >
          <p class="title">联合声明</p>
          <p class="text">开发专利技术，赋能合作伙伴，携手共赢  </p>
          <p class="btn">了解详情&gt;</p>
        </div>
      </div>
    </div>
    <div class="patentWrap">
      <div class="heard">
        <img src="https://file-skg.obs.cn-south-1.myhuaweicloud.com/skg.com/20200723/c6cde03b00a2484c8513f0356120d435.png?x-oss-process=image/resize,h_300"/>
        <div class="textBox">
          <img src="@/static/img/patent_2.png"/>
          <p>作为全球领先可穿戴按摩仪品牌</p>
          <p>SKG正不断通过技术创新</p>
          <p>致力于为全球用户提供出众的可穿戴按摩体验</p>
          <p>SKG尊重他人知识产权</p>
          <p>同时非常注重自有知识产及专利技术权保护</p>
          <p>我们坚持“研发”与“创新”双驱动，构筑坚固的技术壁垒</p>
        </div>
      </div>
      <div class="patentBox" @click="goNews">
        <img src="@/static/img/icon_1.png" alt="">
        <p class="title">知识产权动态</p>
        <p class="text">SKG知识产权创新活动和行业知识产权发展动态 </p>
        <p class="btn">了解详情&gt;</p>
      </div>
      <div class="patentBox" style="border-top:13px solid #E1E1E1" @click="goNews">
        <img src="@/static/img/icon_2.png">
        <p class="title">联合声明</p>
        <p class="text">开发专利技术，赋能合作伙伴，携手共赢  </p>
        <p class="btn">了解详情&gt;</p>
      </div>
    </div>
    <myfooter />
  </div>
</template>
<script>
import skgmenu from '@/components/Modules/menu/menu.vue'
import myfooter from '@/components/Modules/footer/footer.vue'
export default {
  name: 'patent',
  head() {
    return {
      title: 'SKG知识产权及专利技术_动态_联合声明-SKG官网',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'SKG知识产权及专利技术,动态,联合声明。SKG作为时尚的颈椎按摩仪品牌，集研发、生产、销售、培训为一体，主要经营颈椎按摩仪,护颈仪,颈部按摩器,颈椎按摩器等。'
        },
        {
          hid: 'Keywords',
          name: 'Keywords',
          content: 'SKG知识产权及专利技术,动态,联合声明'
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

    }
  },
  methods: {
    goNews(){
      this.$router.push('/news')
    }
  }
}
</script>

<style lang="scss" scoped>
.patentPC{
  display: none;
}
.patentWrap{
  background: #42d7c8;
  overflow-x: hidden;
  .heard {
    width: 100vw;
    position: relative;
  }
  .textBox{
    background: #42d7c8;
    padding: 15px 25px;
    img{
      height: 44px;
      width: 215px;
    }
    p{
      font-size: 12px;
      font-weight: bold;
      color: #000;
      line-height: 20px;
    }
  }
  .patentBox{
    background: #fff;
    padding: 30px 0;
    text-align: center;
    cursor: pointer;
    img{
      width: 26px;
      height: 33px;
    }
    .title{
      font-size: 21px;
      font-weight: bold;
      margin-top: 10px;
    }
    .text{
      font-size: 14px;
      font-weight: bolder;
       margin-top: 10px;
    }
    .btn{
      color: #42d7c8;
      font-size: 13px;
      font-weight: bolder;
       margin-top: 5px;
    }
  }
}
@media screen and (min-width: 768px) {
  .patentWrap{
    display: none;
  }
  .patentPC{
    display:  block;
    padding-top: 50px;
    .heard{
      height: 50vh;
      width: 100%;
      background: #42d7c8;
      padding: 5vh 24vw;
      box-sizing: border-box;;
      .textBox{
        float: left;
        margin-top: 50px;
        p{
          font-size: 12px;
          line-height: 20px;
          font-weight: bold;
        }
        .bigTitle{
          font-size: 28px;
          font-weight: bold;
          letter-spacing: 3px;
        }
      }
      .imgBox{
        float: right;
        width: 25vw;
      }
    }
  }
  .footerBox{
    height: 45vh;
    background: #fff;
    padding: 2vh 10vw;
    margin: 0 auto;
    margin-top: 10px;
    .patentBox{
      width: 48%;
      box-shadow: 0 0 10px #0600010D;
      padding: 9vh 0;
      text-align: center;
      cursor: pointer;
      img{
          width: 33px;
          height: 40px;
      }
      .title{
        font-size: 18px;
        font-weight: bold;
        letter-spacing: 2px;
        margin-top: 3vh;
      }
      .text{
        margin-top: 1vh;
        font-size: 13px;
      }
      .btn{
        color: #42d7c8;
        margin-top: 3vh;
      }
    }
  }
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px){
  .patentPC {
    .heard{
        height: 30vh;
        width: 100%;
        background: #42d7c8;
        padding: 5vh 9vw;
        box-sizing: border-box;
        .imgBox{
            float: right;
            width: 40vw;
        }
    }
    .footerBox{
      height: 40vh;
    }
  }
}
</style>

