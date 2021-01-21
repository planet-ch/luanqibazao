<template>
  <div>
    <skgmenu />
    <div class="PCIndex">
      <div class="contain">
        <swiper v-if="id==3" />
        <div v-if="id==3">
          <div class="story">
            <!-- <p class="cn">品牌故事</p>
            <p class="en">BRAND STORY</p>
            <p class="description">
              SKG品牌名来源于Thomas L.Friedman的
              <br />《The World Is Flat：A Brief History of the Twenty-first
              <br />Century》(译:《世界是平的》)书中关于全球化的启发，
              <br />寓意提供智慧(Smart)的产品、亲和(Kind)的服务，
              <br />建立全球化(Global)品牌的愿景。
            </p> -->
            <video-swiper />
          </div>
          <div id="produts">
            <div class="k6" @click="openProDetail('newk5','0')" style="backgroundImage:url('https://file-skg.skg.com/skg.com/20200921/7c94081186674081bc11f44308ca5f3c.jpg')"></div>
            <ul class="kBox">
              <li @click="openProDetail('jinmo','0')" style="backgroundImage:url('https://file-skg.skg.com/skg.com/20201102/7058ea18c44b4ded8e291d1ebabfd157.png')">
              </li>
              <li @click="openProDetail('4306','0')" style="backgroundImage:url('https://file-skg.skg.com/skg.com/20200918/8e580a4cc01949eab4a11b855fac0d94.jpg')">
              </li>
            </ul>
          </div>
          <div class="startUse">
            <p>明星都在用的</p>
            <p style="padding-top:10px">颈椎按摩仪</p>
            <swiper2 />
          </div>
          <div class="product">
            <div class="textBox">
              <div class="proTit">众多综艺指定按摩仪</div>
              <div class="proName">《乘风破浪的姐姐》《妻子的浪漫旅行4》《亲爱的请放松》</div>
              <div class="proName">《说唱听我的》《我要这样的生活》《我是唱作人2》</div>
              <div class="proName">《喜欢你我也是2》......</div>
            </div>
            <div class="videoBox">
              <video
                src="https://file-skg.obs.cn-south-1.myhuaweicloud.com/skg.com/video/c81e728d9d4c2f636f067f89cc14862c.mp4"
                poster="https://file-skg.skg.com/skg.com/20200909/1a7fd4067dc5445cb961b81d0a7e2c2a.jpg"
                class="indexVideo"
                controls="controls"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapIndex">
      <div class="contain">

        <swiper v-if="id==3" />
        <div v-if="id==3">
          <div class="story">
            <!-- <img src="https://file-skg.skg.com/skg.com/20200901/44ea39ad075a499490917eff1c905854.jpg" alt=""> -->
            <video-swiper />
          </div>

          <div class="products" ref="product" v-for="(item,index) in modelInfo" :key="index" :style="{backgroundImage:'url(' + item.bgUrl +')', height:height}"  @click="openProDetail(item.params)">
            <div class="title" v-if="item.title">
              <img :src="item.title" alt class="model" />
            </div>
            <div class="notitle" v-if="!item.title"></div>
            <div class="productText" v-text="item.description"></div>
            <div class="productText" v-text="item.description2"></div>
            <div class="fun" v-text="item.function"></div>
              <div class="more" v-if="item.color " :style="{color: item.color }" >
                探索更多
                <img :src="item.to" alt />
              </div>
          </div>
          <!-- <div class="jinmo" @click="openProDetail('jinmo')"></div> -->
          <div class="startUse">
            <p>明星都在用的</p>
            <p>颈椎按摩仪</p>
            <swiper2 v-if="isPC" />
            <swiper2-pc v-if="!isPC" />
          </div>
          <div class="product">
            <div class="proTit">众多综艺指定按摩仪</div>
            <div class="proName">《乘风破浪的姐姐》《妻子的浪漫旅行4》《亲爱的请放松》</div>
            <div class="proName">《说唱听我的》《我要这样的生活》《我是唱作人2》</div>
            <div class="proName">《喜欢你我也是2》......</div>
            <div class="videoBox">
              <video
                src="https://file-skg.skg.com/skg.com/20200902/6a378912ba1f40cabe882075b71cbb22.MP4"
                class="indexVideo"
                controls="controls"
                poster="https://file-skg.skg.com/skg.com/20200909/1a7fd4067dc5445cb961b81d0a7e2c2a.jpg"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
    <myfooter />
  </div>
</template>


<script>
import '@/node_modules/video.js/dist/video-js.css'
import '@/node_modules/vue-video-player/src/custom-theme.css'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import skgmenu from '@/components/Modules/menu/menu.vue'
import myfooter from '@/components/Modules/footer/footer.vue'
import topMenu from '@/components/Modules/innerMenu/topMenu.vue'
import swiper from '@/components/Modules/Swiper/Swiper.vue'
import videoSwiper from '@/components/Modules/videoSwiper/videoSwiper.vue'
import swiper2 from '@/components/Modules/smallSwiper/smallSwiper.vue'
import swiper2Pc from '@/components/Modules/smallPcSwiper/smallSwiper.vue'
export default {
  name: 'temp',
  components: {
    skgmenu,
    myfooter,
    topMenu,
    swiper,
    swiper2,
    swiper2Pc,
    videoSwiper
  },
  computed: {},
  data() {
    return {
      id: -1,
      isopen: true,
      src: {
        brandImg:
          'https://file-skg.skg.com/skg.com/20200724/70a1e716d94f4bffb07695ff2fe4a8fb.png',
        videoImg: require('@/static/img/videoImg.png'),
        videoAutoPlay: require('@/static/img/autoPlay.png'),
        program:
          'https://file-skg.skg.com/skg.com/20200724/ddefa79bcc4b41669a0d51216296e5b8.png',
        videoBottom: require('@/static/img/videoBottom.png'),
        to: require('@/static/img/whiteTo.png')
      },
      videoImgShow: true,
      modelInfo: [
        {
          bgUrl:  "https://file-skg.skg.com/skg.com/20200918/8e2c38f181e84249887b9abe9f0ddc24.jpg",
          params: 'newk5'
          // title:
          //   'https://img.skg.com/skg.com/20200723/d976c296db814cceb726f012ffc1a0cb.png',
          // description: '随时随地，舒缓不适',
          // function: '4大模式15档力度 | 3档恒温热敷 | ≈120g 轻巧便携',
          // color: '#ffffff',
          // to: require('@/static/img/whiteTo.png'),
          // path: 'proDetail',
        },
        {
          bgUrl: "https://file-skg.skg.com/skg.com/20200918/c4ca515a14154579992bb8628f962279.jpg",
          params: 'jinmo'
          // title:
          //   'https://img.skg.com/skg.com/20200723/40097cc7fb654a57b7cf6f3a764583ce.png',
          // description: '分区按摩 手法细腻',
          // function: '4大模式9档力度 | 大面积热敷 | Ω独特造型',
          // color: '#42d7c8',
          // to: require('@/static/img/blueTo.png'),
          // path: 'proDetail',
        },
        {
          bgUrl: "https://file-skg.skg.com/skg.com/20200918/9285315ccde1464b90858cb084f89d99.jpg",
          params: '4306'
          // title:
          //   'https://img.skg.com/skg.com/20200723/075077d2332a475d9297d8b5ef03fdd5.png',
          // description: '更轻巧 更大面积热敷',
          // function: '4大模式9档力度 | 42℃恒温热敷 | 180°浮动电极片',
          // color: '#FFF',
          // to: require('@/static/img/whiteTo.png'),
          // path: 'proDetail',
        },
        // {
        //   bgUrl:
        //     'https://file-skg.skg.com/skg.com/20200829/331342d104504d3496b64d5335cfae42.jpg',
        //   title:
        //     'https://img.skg.com/skg.com/20200723/bc11e3abadf5490b8940f8770cfd7d0c.png',
        //   description: '幻彩青春，舒服零负担',
        //   function: '3大模式15档力度 | 42℃恒温热敷 | 轻巧便携',
        //   color: '#42d7c8',
        //   to: require('@/static/img/blueTo.png'),
        //   path: 'proDetail',
        //   params: 'k3_2'
        // },
        // {
        //   bgUrl:
        //     'https://file-skg.skg.com/skg.com/20200724/d922020e1de844e192732f5d5789eae8.png',
        //   description: '古力娜扎联名款',
        //   function: '按压|揉捏|捶打｜小古元气模式｜娜扎语音播报',
        //   color: '#fff',
        //   to: require('@/static/img/whiteTo.png'),
        //   path: 'proDetail',
        //   params: 'dz_1'
        // },
        // {
        //   bgUrl:
        //     'https://file-skg.skg.com/skg.com/20200724/577ca1f54f9f440e9513ecd1920f108f.png',
        //   description: '施华洛世奇 尊贵款',
        //   function: '4大模式15档力度｜3档恒温热敷｜高定水晶版限量礼盒',
        //   color: '#42d7c8',
        //   to: require('@/static/img/blueTo.png'),
        //   path: 'proDetail',
        //   params: 'dz_3'
        // },
        // {
        //   bgUrl:
        //     "https://file-skg.skg.com/skg.com/20200829/a202430095dd42ef9535c416b02b2543.jpg",
        //   // description: '腰腿放松按摩',
        //   // function: '常用SKG筋膜枪',
        //   color: '#42d7c8',
        //   to: require('@/static/img/blueTo.png'),
        //   path: 'proDetail',
        //   params: 'dz_3'
        // }
        // {
        //   bgUrl: require("@/static/img/startUse.png"),
        //   description: '明星都在用的',
        //   description2: '颈椎按摩仪',
        // }
      ],
      height: '',
      offsetWidth: 0,
      isPC:　false,
    }
  },
  head (){
    return{
      title: "『SKG官网』拥有全球410项核心专利！颈椎按摩仪|护颈仪|颈部按摩器",
      meta: [
        { hid: 'Keywords',name: 'Keywords', content: "颈椎按摩仪,护颈仪,颈部按摩器,颈椎按摩器,SKG,SKG官网" },
        { hid: 'description', name: 'description', content: "SKG作为时尚的颈椎按摩仪品牌，集研发、生产、销售、培训为一体的专业大型国际企业，主要经营颈椎按摩仪,护颈仪,颈部按摩器,颈椎按摩器等，以超时尚设计理念，启发全球用户追求智能健康生活方式" },
      ]
    }
  },
  props: {},
  mounted() {
    var width = document.body.clientWidth
    this.height = width / 0.6 + 'px'
    // var arr = document.getElementsByClassName("product")
    // var brr = [].slice.call(document.getElementsByClassName("product"))
    // console.log("arr",arr,"brr",brr)
    // for(var i=0;i<arr.length;i++){
    //   arr[i].style.height = height + "px"
    //   console.log("arr[i].style.height",arr[i].style.height)
    // }

    this.setFootCenter()
    window.onresize = () => {
      this.setFootCenter()
    }

  (function (w, d, n, a, j) {
    w[n] = w[n] || function () {
      (w[n].a = w[n].a || []).push(arguments);
    };
    j = d.createElement('script');
    j.async = true;
    j.src ='https://qiyukf.com/script/fccdd3dc5ce1863b36a6a397769cce44.js';
    d.body.appendChild(j);
  })(window, document, 'ysf');
    
  (function (w, d, n, a, j) {
		// w[n] = w[n] || function () {
		// 	(w[n].a = w[n].a || []).push(arguments);
    // };
    var timer = null
    function debounce (fn, delay, mustRun) {
      var timeout,
        startTime = new Date();
 
    return function() {
        var context = this,
            args = arguments,
            curTime = new Date();
 
        clearTimeout(timeout);
        // 如果达到了规定的触发时间间隔，触发 handler
        if(curTime - startTime >= mustRun){
            fn.apply(context,args);
            startTime = curTime;
        // 没达到触发间隔，重新设定定时器
        }else{
            timeout = setTimeout(fn, delay);
        }
    };
    }
    var node1 = document.createElement('div')
    node1.addEventListener('click', function () {
      if(document.documentElement.scrollTop >　1000){
        let top = document.documentElement.scrollTop || document.body.scrollTop
        const timeTop = setInterval(() => {
          document.body.scrollTop = document.documentElement.scrollTop = top -= 50
          if (top <= 0) {
            clearInterval(timeTop)
          }
        }, 10)
      }
    })
    window.addEventListener("scroll", debounce(function (){
      console.log(document.documentElement.scrollTop)
      if(document.documentElement.scrollTop >　1000){
        node1.className = "backTop show"
      } else {
        node1.className = 'backTop'
      }
    }, 100, 100) )
		d.body.appendChild(node1);
	})(window, document, '123');

  },
  methods: {
    openProDetail(type, index){
      this.$store.commit('setProductFlag',!this.$store.state.productFlag)
      this.$store.commit('setProductParams',type)
      this.showSearch = false;
      this.openburger = false;
      this.$router.push({path:'/proDetail/' + type, query:{index: index}})
    },
    openMobleCenter(){
      if(this.isopen){
        this.$message({
          message: '敬请期待',
          center: true,
          offset: 150,
        });
        this.isopen = false
      }
    },
    openCenter() {
      if(this.isopen){
        this.$message({
          message: '敬请期待',
          center: true,
          offset: 400,
        });
        this.isopen = false
      }
    },
    autoPlay: function() {
      if(document.body.clientWidth > 750){
        var video = document.getElementById('pcVideo')
      } else {
        var video = document.getElementById('video')
      }
      // video.contro
      if (this.videoImgShow) {
        this.videoImgShow = false
        video.play()
      } else {
        this.videoImgShow = true
        video.pause()
      }
    },
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
  beforeRouteUpdate(to, from, next) {
    this.currentpath = to.path
    this.dataList = []
    jIii
    this.id = to.meta.templateID

    // this.dataList = this.testData.filter(item => item.templateID === to.meta.templateID)[0]||[],
    ;(this.dataList =
      this.initdata.filter(
        (item) => item.templateID === to.meta.templateID
      )[0] || []),
      // console.log(this.id)
    next()
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      document.documentElement.scrollTop = document.body.scrollTop = 0
      vm.id = to.meta.templateID
      //vm.dataList = vm.testData.filter(item => item.templateID === vm.id)[0]||[];
      vm.currentpath = to.path
      // vm.$nextTick(()=>setTimeout(()=>vm.BScroll?vm.refreshScroll():vm.initScroll(),100))
    })
  },
}
</script>


<style scoped lang="scss">
.PCIndex {
  display: none;
}
.story {
  width: 100vw;
  margin-top: 0;
}
.wrapIndex .story{
  padding: 10px 0;
}
p {
  font-family: DFPGB_Y5;
}
.story p.cn {
  font-size: 29px;
  color: #42d7c8;
  text-align: center;
  margin: 0;
  padding-top: 41px;
}
.story p.en {
  text-align: center;
  margin: 0;
  color: rgba(0, 0, 0, 1);
  opacity: 0.1;
}
.title img {
  width: 100%;
}
.k6 {
  background-repeat: no-repeat;
}
.description {
  font-family: auto;
  text-align: center;
  color: #000;
  font-size: 12px;
  line-height: 20px;
}
.brandImg {
  width: 90vw;
  height: 90vw;
  margin-left: 5vw;
  margin-top: 5vw;
}
.brandImg img {
  width: 100%;
}
.products {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-bottom: 2px;
}
.indexVideo {
  width: 90vw;
  height: 50vw;
  margin: 35px 0 0 5vw;
}
#videoAutoPlay {
  width: 20vw;
  height: 20vw;
  position: absolute;
  left: 40%;
  top: 27%;
}
#pcVideoAutoPlay {
  width: 20vw;
  height: 20vw;
  position: absolute;
  left: 29%;
  top: 22%;
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
.jinmo {
  width: 100vw;
  height: 163vw;
  background-color: #42d7c8;
  background: url( "https://file-skg.skg.com/skg.com/20200914/e0290ff9db26418188fb28363a7fc172.jpg") no-repeat;
  background-size: 100% 100%;
}
.startUse {
  width: 100vw;
  height: 131vw;
  background: #42d7c8;
  font-size: 30px;
  padding-top: 10vh;
}
.startUse p {
  margin: 0;
  text-align: center;
}
.product {
  margin: 0;
  width: 100vw;
  height: 110vw;
}
.title {
  font-family: DFPGB_Y5;
  font-size: 24px;
  text-align: center;
  width: 30vw;
  height: 14vh;
  line-height: 10vh;
  margin-left: 35vw;
  display: flex;
  align-items: center;
}
.notitle {
  padding-top: 10vh;
}
.model {
  width: 12vw;
}
.productText {
  font-family: DFPGB_Y5;
  font-size: 28px;
  width: 100vw;
  text-align: center;
}
.fun {
  width: 100vw;
  text-align: center;
  font-size: 12px;
  margin-top: 1vh;
}
.more {
  font-family: DFPGB_Y5;
  font-size: 4vw;
  text-align: center;
  line-height: 7vh;
  width: 24vw;
  margin-left: 38vw;
}
.more img {
  width: 6px;
  height: 10px;
  margin-left: 6px;
}
.proTit {
  font-family: DFPGB_Y5;
  font-size: 30px;
  text-align: center;
  padding: 7vh 0 3vh 0;
}
.proName {
  width: 100vw;
  font-size: 12px;
  text-align: center;
}
@media screen and (min-width: 768px) {
  .PCIndex {
    display: block;
  }
  .wrapIndex {
    display: none;
  }
  .PCIndex {
    overflow-x: hidden;
    .startUse {
      width: 100vw;
      height: 53vw;
      font-size: 31px;
      padding-top: 15vh;
      font-weight: bold;
      letter-spacing: 3px;
    }
    .swiper-wrapper{
      height: 60vh !important;
    }
    .product{
      height: 820px;
      position: relative;
      .proName{
        width: auto;
        text-align: center;
        font-size: 15px;
      }
      .textBox{
          .proTit{
            font-weight: bold;
            text-align: center;
            font-size: 40px;
            color: rgb(0, 0, 0);
            text-align: center;
          }
      }
    }
    .description {
      font-family: auto;
      text-align: center;
      color: #000;
      font-size: 15px;
      line-height: 25px;
      padding-top: 10px;
    }
    .indexVideo {
      width: 44vw;
      height: 25vw;
      margin: 0;
    }
    .videoBox {
      width: 44vw;
      height: 25vw;
      margin-left: 28vw;
      margin-top: 34px;
    }
    .videoBottom {
      width: 46vw;
      height: auto;
      position: absolute;
      bottom: -13%;
      left: 13vw;
    }
    .videoBottom img {
      height: auto;
    }
    #videoAutoPlay {
      width: 12vw;
      height: 12vw;
      position: absolute;
      left: 34%;
      top: 32%;
    }
    #produts {
      width: 100%;
      height: 63vw;
      .k6 {
        height: 32vw;
        width: 100%;
        background-size: contain;
        background-position: center center;
        cursor: pointer;
      }
      .kBox {
        height: 31vw;
        width: 100%;
        li {
          width: 49.9%;
          height: 100%;
          box-sizing: border-box;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: top;
          float: left;
          cursor: pointer;
          &:nth-child(2) {
            margin-left: 0.2%;
          }
          .KTitle_1 {
            font-size: 21px;
            letter-spacing: 2px;
            text-align: center;
            padding-top: 10px;
            b {
              font-size: 26px;
            }
          }
          .KTitle_2 {
            text-align: center;
            padding-top: 7px;
            font-size: 14px;
          }
          .KTitle_3 {
            font-size: 12px;
            text-align: center;
            padding-top: 7px;
          }
          .ts {
            text-align: center;
            font-size: 12px;
            color: #42d7c8;
            padding-top: 7px;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px){
  .PCIndex{
     .story{
      height: 79vw;
    }
  }
  .PCIndex #produts .kBox{
      height: 31vw;
      width: 100%;
  }
  .PCIndex #produts .kBox li{
    width: 49.9%;
    height: 100%;
    box-sizing: border-box;

    background-size: contain;
  }
  .PCIndex #produts .k6 {
    height: 32vw;
    background-repeat: no-repeat;
  }
   .PCIndex .product .textBox{
      position: static;
      .proTit{
        font-weight: bold;
        text-align: left;
        font-size: 40px;
        color: rgb(0, 0, 0);
        text-align: center;
      }
      .proName {
        text-align: center;
      }
  }
  .PCIndex .videoBox{
    position: static;
    width: 70vw;
    height: 40vw;
    margin-left: 15vw;
    .indexVideo {
      width: 70vw;
      height: 40vw;
    }
  }
  .PCIndex .startUse{
    height: 100vh;
  }
}
@media screen and (min-width: 1025px) and (min-width: 1550px){
  .PCIndex .product .textBox{
      .proTit{
        font-weight: bold;
        text-align: left;
        font-size: 40px;
        color: rgb(0, 0, 0);
        text-align: center;
      }
  }
}
  .PCIndex  .startUse {
    height: 100vh;
  }
  .PCIndex .product {
    height: 700px;
  }

@media screen and (min-width: 1551px) and (min-width: 1920px){
  .PCIndex .product .textBox{
      .proTit{
        font-weight: bold;
        text-align: left;
        font-size: 40px;
        color: rgb(0, 0, 0);
        text-align: center;
      }
  }
  .PCIndex  .startUse {
    height: 53vw;
  }
  .PCIndex .product {
    height: 820px;
  }
}
</style>

