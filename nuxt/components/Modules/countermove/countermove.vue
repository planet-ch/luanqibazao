<template>
  <div class="countermove">
    <skgMenu />
    <div class="measure">
      <div class="measureTit">
        假冒产品对策·知识产权
      </div>
      <p class="measureCont">若没有SKG技术人员监督制作，SKG的所有产品均无法完全被仿造。</p>
      <p class="measureCont">SKG严格制止没有经过安全和有效性验证的假冒产品在市面上横行。</p>
      <p class="measureCont">为了让消费者安心使用集SKG技术之大成的产品和正版商品，</p>
      <p class="measureCont">我们极力重视知识产权的保护和假冒产品对策。</p>
      <p class="measureCont">全方位致力于守护消费者的健康和权益。</p>
      <img src="https://file-skg.skg.com/skg.com/20200817/578fd9074b284ad1afcf28b7c9828a8b.png" alt="">
    </div>
    <div class="zhishi">
      <div class="zhishiTit">知识产权</div>
      <p class="zhishiCont">严格制止仿造的假冒产品。</p>
      <p class="zhishiCont">不仅是为了战胜对方，<br class="appShow"/>更是为了守护各位消费者和技术人员的辛勤付出，</p>
      <p class="zhishiCont">因此我们正全力对假冒产品进行彻底排除。</p>
      <p class="zhishiCont">作为对策的一个环节，就是获取多项专利，<br class="appShow"/>注重创意的独占许可。</p>
      <p class="zhishiCont">此外，我们也致力于对保护产品的外观设计以及<br class="appShow"/>对保护品牌的商标等重要权利的维护。</p>
      <img src="https://file-skg.skg.com/skg.com/20200817/6365b41f583f431aa25702def40ca0bc.png" alt="">
    </div>
    <div class="patent">
      <div class="patentTop">
        <div class="patentTopItem">
          <p class="itemEn">DESIGN</p>
          <p class="itemCn">外观设计</p>
        </div>
        <div class="patentTopItem">
          <p class="itemEn">TRADEMARK</p>
          <p class="itemCn">产品</p>
        </div>
        <div class="patentTopItem">
          <p class="itemEn">PATENT</p>
          <p class="itemCn">专利</p>
        </div>
      </div>
      <div class="apply">
        申请约 <span v-text="applyNum" class="applyNUm"></span> 件
      </div>
      <div class="patentTit">
        <p class="patentTitTxt">全面杜绝假冒伪劣产品</p>
        <p class="patentTitTxt">守护消费者健康</p>
      </div>
      <div class="pcPatentCont">

        <p class="patentCont">
          近年来，随着电子商务交易全球化的迅速发展，通过网络这一媒介，
          假冒产品的危害在世界范围内不断扩大，其手段也日趋复杂化、恶劣化。
        </p>
        <p class="patentCont">
          以仿冒品为代表的假冒产品不仅会降低品牌形象，
          还会因为其劣质而给消费者带来有损健康的危险。
        </p>
        <p class="patentCont">为了保护消费者不被这类劣质假冒产品危害，安心使用正版产品，</p>
        <p class="patentCont">今后我们将继续以“坚决杜绝假冒伪劣产品”的强烈态度，</p>
        <p class="patentCont">积极参与到世界各地举办的打击假冒产品的活动。</p>
        <p class="patentCont">作为制造商，我们要保护消费者的权益免受假冒产品的危害。</p>
        <p class="patentCont">在这一使命感的驱动下，我们每天进行市场调查，</p>
        <p class="patentCont">
          一旦发现假冒产品立即行使知识产权的权利，必要时对制造假冒产品的窝点进行查找、揭发和诉讼。
        </p>
      </div>
      <div class="appPatentCont">
      </div>
    </div>
    <Foot />
  </div>
</template>
<script>
import skgMenu from "@/components/Modules/menu/menu.vue"
import Foot from "@/components/Modules/footer/footer.vue"
export default {
  name: "Countermove",
  head() {
    return {
      title: 'SKG假冒产品对策_知识产权_专利申请-SKG官网',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'SKG假冒产品对策,知识产权,专利申请。SKG作为时尚的颈椎按摩仪品牌，集研发、生产、销售、培训为一体，主要经营颈椎按摩仪,护颈仪,颈部按摩器,颈椎按摩器等。'
        },
        {
          hid: 'Keywords',
          name: 'Keywords',
          content: 'SKG假冒产品对策,知识产权,专利申请'
        }
      ]
    }
  },
  components: {
    skgMenu,
    Foot,
  },
  data(){
    return {
      applyNum: 1000,
      screenHeight: 0,
      isUSe: true,
      bodyWidth: 0,
    }
  },
  mounted(){
      window.addEventListener('scroll', this.handleScroll)
      // console.log("1232")
  },
  methods:{
     handleScroll() {
            this.screenHeight = document.documentElement.scrollTop || document.body.scrollTop;
            this.bodyWidth = document.body.clientWidth
            // console.log(this.screenHeight,this.bodyWidth)
            if(this.bodyWidth > 768){
              if(this.screenHeight >1400) {
              var  timeInterval = setInterval(()=>{
                if(this.applyNum >= 1743){
                  clearInterval(timeInterval)
                  // this.isUSe = false
                } else{
                  this.applyNum++
                  }
              },10)
              }
            } else {
              if(this.screenHeight >400) {
              var  timeInterval = setInterval(()=>{
                if(this.applyNum >= 1743){
                  clearInterval(timeInterval)
                  // this.isUSe = false
                } else{
                  this.applyNum++
                  }
              },10)
              }
            }
            // console.log("this.screenHeight",this.screenHeight)
        },
  }

}
</script>
<style lang="scss" scoped>
.countermove {
  padding-top: 50px;
  .measure {
    width: 100vw;
    height: 110vw;
    background: #42d7c8;
    img {
      width: 90vw;
      height: 56vw;
      margin: 13px 0 0 5vw  ;
    }
  }
  .zhishi {
    width: 100vw;
    height: 110vw;
    background: #fff;
    img {
      width: 90vw;
      height: 56vw;
      margin:  13px  0 0 5vw;
    }
  }
  .measureTit, .zhishiTit {
    text-align: center;
    font-size:  24px;
    font-family: DFPGB_Y5;
    font-weight: bold;
    padding: 35px 0 17px 0;
  }
  .measureCont, .zhishiCont {
    text-align: center;
    font-size: 12px;
    font-family: DFPGB_Y5;
    line-height: 18px;
  }
  .patent {
    width: 100vw;
    height: 143vw;
    background: #42d7c8;
    .patentTop{
      width: 76vw;
      height: 22vw;
      margin: 18px 0 0 12vw;
      display: flex;
      justify-content: space-between;
      .patentTopItem {
        margin-top: 18px;
        width: 22vw;
        height: 22vw;
        border: 1px solid black;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
          font-family: DFPGB_Y5;
        .itemEn {
          font-size: 1.9vw;
          margin: 7.5vw 0 1.5vw 0;
        }
        .itemCn {
          font-size: 4vw;
        }
      }
    }
    .apply {
      text-align: center;
      font-size: 24px;
      font-family: DFPGB_Y5;
      margin: 33px 0 22px;
      .applyNUm {
        font-size: 46px;
        font-weight: bold;
      }
    }
    .patentTit {
      display: none;
    }
    .pcPatentCont {
      display: none;
    }
    .appPatentCont {
      display: block;
      height: 95vw;
      background: url("https://file-skg.skg.com/skg.com/20200818/221cf19dcb5249089c107013c6353217.png");
      background-size: 100%;
    }
    .patentCont{
      background: #fff;
       text-align: center;
       font-family: DFPGB_Y5;
       font-size: 12px;
       line-height: 24px;
    }
  }
  .appShow {
    display: block;
  }
}
@media screen  and (min-width: 768px){
  .countermove {
    .appShow {
      display: none;
    }
  padding-top: 65px;
  .measure {
    width: 100vw;
    height: 1000px;
    background: #fff;
    img {
      width: 45vw;
      height: 25vw;
      margin: 64px 0 0 27.5vw;
    }
  }
  .zhishi {
    width: 100vw;
    height: 1000px;
    background: #42d7c8;
    img {
      width: 45vw;
      height: 25vw;
      margin: 64px 0 0 27.5vw;
    }
  }
  .measureTit, .zhishiTit {
    text-align: center;
    font-size:  42px;
    font-family: DFPGB_Y5;
    font-weight: bold;
    padding: 120px 0 30px 0;
  }
  .measureCont, .zhishiCont {
    text-align: center;
    font-size: 19px;
    font-family: DFPGB_Y5;
    line-height: 36px;
  }
  .patent {
    width: 100vw;
    height: 1000px;
    background: #fff;
    .patentTop{
      width: 45vw;
      height: 13vw;
      margin: 90px 0 0 27.5vw;
      display: flex;
      justify-content: space-between;
      .patentTopItem {
        width: 13vw;
        height: 13vw;
        border: 1px solid black;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
          font-family: DFPGB_Y5;
        .itemEn {
          font-size: 1.9vw;
          margin: 3.5vw 0 1vw 0;
        }
        .itemCn {
          font-size: 2vw;
        }
      }
    }
    .apply {
      text-align: center;
      font-size: 60px;
      font-family: DFPGB_Y5;
      font-weight: bold;
      margin: 81px 0 100px;
      .applyNUm {
        font-size: 132px;
      }
    }
    .patentTit {
      text-align: center;
      font-family: DFPGB_Y5;
      font-weight: bold;
      font-size: 42px;
      margin-bottom: 34px;
    }
    .patentCont{
       text-align: center;
       font-family: DFPGB_Y5;
       font-size: 19px;
       line-height: 36px;
    }

    .patentTit {
      display: block;
    }
    .pcPatentCont {
      display: block;
    }
    .appPatentCont {
      display: none;
    }
  }
}
}
</style>
