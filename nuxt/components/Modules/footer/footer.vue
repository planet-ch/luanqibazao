
<template>
  <div class="foot">
    <div class="path" v-if="pathShow">
      <span class="firstPath">
        <nuxt-link to="/">
          <img src="https://img.skg.com/skg.com/20200723/529c7a5ad3bb4f3495046f0082188e16.png" alt />
        </nuxt-link>
      </span>
      <span class="secondPath">
        <img :src="src.to" alt />
        <span class="pathName">{{pathName}}</span>
      </span>
    </div>
    <div class="menu">
      <ul class="list">
        <li class="listLi">
          <div class="listLi"  @click="firstListShow">
            <div class="title" >推荐产品</div>
            <div class="icon">
              <img
                :src="src.open"
                alt
                id="icon00"
              />
            </div>
          </div>
          <!---->
        </li>
        <div class="child child00" style="cursor: pointer;" @click="openProDetail('k6')">
          <nuxt-link :to="{path: '/proDetail/k6', query:{index: 'k6', name: 'k6'}}">
            K6系列
          </nuxt-link>
        </div>
        <div class="child child00" style="cursor: pointer;" @click="openProDetail('newk5')">
          <nuxt-link :to="{path: '/proDetail/newk5', query:{index: 'newk5', name: 'newk5'}}">
            全新K5
          </nuxt-link>
        </div>
        <div class="child child00" style="cursor: pointer;" @click="openProDetail('newK4')">
          <nuxt-link :to="{path: '/proDetail/newK4', query:{index: 'newK4', name: 'newK4'}}">
            全新K4
          </nuxt-link>
        </div>
        <div class="child child00" style="cursor: pointer;">
          <nuxt-link to="/sooth">
            技术原理
          </nuxt-link>
        </div>
        <div class="child child00" style="cursor: pointer;">
          <a href="https://zhishi.skg.com/#/">
            产品相关问题
          </a>
        </div>
      </ul>
      <ul class="list" v-for="(item, index) in menuList" :key="index">
        <li class="listLi" @click="listShow(index)">
          <div v-if="!item.path" class="listLi">
            <div class="title">{{ item.title }}</div>
            <div class="icon">
              <img :src="src.open" alt :id="'icon' + index" />
            </div>
          </div>

          <!-- <div v-if="item.path" style="width:100%">
            <nuxt-link :to="item.path" class="listLi">
              <div class="title">{{ item.title }}</div>
              <div class="icon">
                <img :src="src.open" alt :id="'icon' + index" />
              </div>
            </nuxt-link>
          </div> -->
        </li>
        <div
          class="child"
          v-for="(child,childIndex) in item.children"
          :key="childIndex"
          :class=" 'child'+index "
          style="cursor: pointer;"
        >
          <nuxt-link :to="{name:child.path,params:{index:child.params}}" v-if="child.path.length <10">{{ child.name }}</nuxt-link>
          <a :href="child.path" target="_blank"  v-if="child.path.length >10">{{ child.name }}</a>
        </div>
      </ul>
    </div>
    <div class="pcFoot">
      <!-- <div class="kefu">
        <div class="kefuTxt">
          <img :src="isPC ? src.blackKefu :　src.kefu" alt />
          服务热线
        </div>
      </div> -->
      <div class="phone">
        <div class="serveTxt">
          <p class="serveNum">400-822-0888</p>
          <p style="font-size:16px">全国服务热线</p>
        </div>
        <p class="phoneNum">0755-88866686</p>
        <p style="font-size:16px">合作热线</p>
        <!-- <p
          class="phoneNum"
          style="cursor: pointer;padding-top: 20px;font-size:12px"
          @click="terminations"
        >除名查询</p> -->
      </div>
      <div class="care">
        <div class="info">
          <span>关注SKG</span>
          <div class="infoImg">
            <a href="https://weibo.com/standardklassegut" target="_blank">
              <img :src="src.microblog" alt />
            </a>
            <nuxt-link to="/contactUs">
              <img :src="src.wechat" alt @click="openMask('wechat')" />
            </nuxt-link>
            <nuxt-link to="/contactUs">
              <img :src="src.echat" alt @click="openMask('echat')" />
            </nuxt-link>
            <nuxt-link to="/contactUs">
              <img
                :src="src.minipro"
                alt
                style="width:18px;height:18px"
                @click="openMask('minipro')"
              />
            </nuxt-link>
          </div>
          <div class="lang">
            <img :src="src.lang" alt />
            Language
          </div>
        </div>
      </div>
    </div>
    <div class="copy">
      <span class="copyright">Copyright ©2020SKG 版权所有 保留一切权利</span>
      <a
        href="terminations"
        target="_blank"
        class="delName"
        style=""
      > 除名查询 </a>
      <router-link class="delName" :to="{ name: 'productList' }">
        消费维权
      </router-link>
      <a href="https://beian.miit.gov.cn/" target="_blank"> 备案号:粤ICP备13079021号</a>
      <a
        style="background: url(https://cn.skg.com/cn/img/icp_icon.png) no-repeat left bottom;padding-left: 22px;height: 19px;display: inline-block;line-height: 20px;"
      >粤公网安备 44060602001369号</a>
    </div>
    <div class="mask" id="mask">
      <div class="maskBox">
        <div class="maskTit" id="maskTit" v-text="maskTxt"></div>
        <div class="qrcode">
          <img :src="wechatCode" alt id="qrCode" />
        </div>
        <div class="saveCode">
          <a :href="wechatCode" id="codeLink">保存二维码</a>
        </div>
        <hr />
        <div class="saveTost">保存后扫码查看</div>
        <div class="close">
          <img :src="src.close" alt @click="closeBox" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Foot',
  data() {
    return {
      src: {
        kefu: require('@/static/img/kefu.png'),
        blackKefu: require('@/static/img/blackKefu.png'),
        microblog: require('@/static/img/microblog.png'),
        wechat: require('@/static/img/wechat.png'),
        echat: require('@/static/img/Echat.png'),
        minipro: require('@/static/img/minipro.png'),
        lang: require('@/static/img/lang.png'),
        open: require('@/static/img/open.png'),
        close: require('@/static/img/close.png'),
        to: require('@/static/img/grayTo.png')
      },
      firstMenuList: {
        title: "推荐产品",
        children: [
          {name:"quanxing",path:"proDetail",params:"k6"},
          {name:"娜扎联名定制款",params:"dz_1"},
          {name:"施华洛世奇定制款",params:"dz_3"}
        ]
      },
      menuList: [
        // {
        //   title: "推荐产品",
        //   children: [
        //     {name:"K6系列",path:"proDetail",params:"k6"},
        //     {name:"娜扎联名定制款",params:"dz_1"},
        //     {name:"施华洛世奇定制款",params:"dz_3"}
        //   ]
        // },
        // { title: '舒缓原理', path: 'sooth' },
        {
          title: '购买渠道',
          children: [
            { name: '线下体验店', path: 'store' },
            { name: '官方授权店', path: 'store' }
          ]
        },
        {
          title: '探索精彩SKG',
          children: [
            { name: '关于SKG', path: 'about' },
            { name: '新闻中心', path: 'news' },
            { name: '加入我们', path: 'joinUs' },
            { name: '知识产权', path: 'patent' },
            {name: "假冒产品对策",path:"countermove"},
          ]
        },
        {
          title: '商务合作',
          children: [
            { name: '企业合作', path: 'cooperation' },
            { name: '媒体联络', path: 'contactUs' }
          ]
        },
        {
          title: '服务与支持',
          children: [
            { name: '联系我们', path: 'contactUs' },
            { name: '真伪查询', path: 'query' },
            { name: '在线咨询', path: 'https://askq.qiyukf.com/client?k=fccdd3dc5ce1863b36a6a397769cce44&wp=1&robotShuntSwitch=1&robotId=3430484' },
          ]
        }
      ],
      pathShow: true,
      pathName: '',
      isPC: false,
      offsetWidth: 0,
      wechatCode:
        'https://file-skg.skg.com/skg.com/20200731/9e634e6f233147a18fba8a9cd198fde3.png',
      echatCode:
        'https://file-skg.skg.com/skg.com/20200731/cc0af60919a642d58d58b01d1c782bbc.png',
      miniproCode:
        'https://file-skg.skg.com/skg.com/20200731/c4992a5dfd9b47d582b9b6dc6c72d38c.jpg',
      maskTxt: '公众号：SKG未来穿戴'
    }
  },
  methods: {
    openProDetail(type) {
      this.$store.commit('setProductFlag', !this.$store.state.productFlag)
      this.$store.commit('setProductParams', type)
      this.showSearch = false
      this.openburger = false
      // this.$router.push({ name: 'proDetail', params: { index: type } })
    },
    terminations() {
      this.$router.push('/terminations')
    },
    firstListShow(){
      var width = document.body.clientWidth
      if ( width < 768) {
        var that = this
        var arr = []
        arr = document.getElementsByClassName("child00")
        // console.log(arr[0].style.display)
        if (arr[0].style.display === 'none' || arr[0].style.display === '') {
          for (var j = 0; j < arr.length; j++) {
            arr[j].style.display = 'block'
          }
          document.getElementById("icon00").src = that.src.close
        } else {
          for (var i = 0; i < arr.length; i++) {
            arr[i].style.display = 'none'
          }
          document.getElementById("icon00").src = that.src.open
        }
      }
    },
    listShow(index) {
      var width = document.body.clientWidth
      // console.log("index",index)
      if (!!this.menuList[index].children && width < 768) {
        var that = this
        var arr = []
        arr = document.getElementsByClassName(`child${index}`)
        // console.log(arr[0].style.display)
        if (arr[0].style.display === 'none' || arr[0].style.display === '') {
          for (var j = 0; j < arr.length; j++) {
            arr[j].style.display = 'block'
          }
          document.getElementById(`icon${index}`).src = that.src.close
        } else {
          for (var i = 0; i < arr.length; i++) {
            arr[i].style.display = 'none'
          }
          document.getElementById(`icon${index}`).src = that.src.open
        }
      }
    },
    setFootCenter() {
      this.offsetWidth = document.body.offsetWidth
      var menu = document.getElementsByClassName('menu')[0]
      if (this.offsetWidth >= 780 && this.offsetWidth < 1280) {
        menu.style.marginLeft = (this.offsetWidth - 740) / 2 + 'px'
      } else if (this.offsetWidth >= 1280) {
        menu.style.marginLeft = (this.offsetWidth - 940) / 2 + 'px'
      }
      if (this.offsetWidth < 600) {
        this.isPC = false
      } else {
        this.isPC = true
      }
      // console.log(document.body.offsetWidth)
    },
    closeBox() {
      document.getElementById('mask').style.display = 'none'
    },
    openMask(val) {
      if (!this.isPC) {
        document.getElementById('mask').style.display = 'block'
        var codeImg = document.getElementById('qrCode')
        var codeLink = document.getElementById('codeLink')
        switch (val) {
          case 'wechat':
            this.maskTxt = '公众号：SKG未来穿戴'
            codeImg.src = this.wechatCode
            codeLink.href = this.wechatCode
            break
          case 'echat':
            this.maskTxt = '企业微信'
            codeImg.src = this.echatCode
            codeLink.href = this.echatCode
            break
          case 'minipro':
            this.maskTxt = '小程序：SKG官方商城'
            codeImg.src = this.miniproCode
            codeLink.href = this.miniproCode
            break
        }
      }
    }
  },
  created() {
    var routePath = this.$route.path
    var routeParam = this.$route.params
    if (routePath === '/') {
      this.pathShow = false
    } else {
      this.pathShow = true
    }
    switch (routePath) {
      case '/proDetail':
        this.pathName = '产品详情'
        break
      case '/about':
        this.pathName = '关于SKG'
        break
      case '/contactUs':
        this.pathName = '联系我们'
        break
      case '/sooth':
        this.pathName = '技术原理'
        break
      case '/store':
        this.pathName = '查找体验店'
        break
      case '/cooperation':
        this.pathName = '企业合作'
        break
      case '/query':
        this.pathName = '真伪查询'
        break
      case '/patent':
        this.pathName = '知识产权'
        break
      case '/news':
        this.pathName = '新闻中心'
        break
      case '/countermove':
        this.pathName = '假冒产品对策'
        break
    }
    // console.log(this.pathName)
  },
  mounted() {
    this.setFootCenter()
    window.onresize = () => {
      // console.log("123213")
      this.setFootCenter()
    }
  },
  destroyed() {
    var scrollToTop = window.setInterval(function() {
      var pos = window.pageYOffset
      if (pos > 0) {
        window.scrollTo(0, pos - 40) // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop)
      }
    }, 16) // how fast to scroll (this equals roughly 60 fps)
  }
}
</script>
<style lang="scss"  scoped>
.foot {
  min-height: 78vh;
  background: #42d7c8;
  overflow: hidden;
  width: 100%;
}
.path {
  width: 100%;
  height: 50px;
  margin-left: 10vw;
  padding-top: 17px;
  img {
    width: 40px;
  }
}
.pathName {
  font-family: DFPGB_Y5;
  font-size: 12px;
}
.secondPath {
  img {
    width: 5px;
    margin: 2px 10px;
  }
}
.menu {
  width: 80vw;
  min-height: 42vh;
  margin-left: 10vw;
  border-bottom: 1px solid #38a9a9;
}
.el-submenu__icon-arrow {
  display: none !important;
}
.title {
  font-family: DFPGB_Y5;
  font-size: 17px;
}
.list {
  width: 100%;
  margin: 0;
  padding: 0;
}
.listLi {
  font-family: DFPGB_Y5;
  width: 100%;
  height: 8vh;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
}
.el-icon-plus {
  color: #000;
}
.child {
  font-family: DFPGB_Y5;
  margin-left: 5vw;
  height: 5vh;
  line-height: 5vh;
  display: none;
}
.kefu {
  width: 80vw;
  height: 10vh;
  margin-left: 10vw;
  border-bottom: 1px solid #38a9a9;
  font-family: DFPGB_Y5;
  font-size: 18px;
  color: #fff;
  display: flex;
  align-items: center;
}
.kefu img {
  width: 19px;
  margin: 2px 10px 0 0;
}
.phone {
  width: 80vw;
  height: 20vh;
  margin-left: 10vw;
  border-bottom: 1px solid #38a9a9;
  font-size: 16px;
  font-family: DFPGB_Y5;
}
.delName {
  display: inline-block;
  margin: 6px 0px;
}
.serveTxt {
  height: 7vh;
}
.serveNum,
.phoneNum {
  margin: 3vh 0 2vh 0;
}
.care {
  width: 80vw;
  height: 7vh;
  margin-left: 10vw;
  margin-top: 20px;
}
.info {
  font-family: DFPGB_Y5;
  display: flex;
  justify-content: space-between;
  height: 10vh;
  font-size: 12px;
  align-items: center;
}
.info img {
  width: 22px;
  height: 18px;
}
.lang {
  display: flex;
  align-items: center;
}
.lang img {
  width: 12px;
  height: 12px;
  margin-right: 5px;
}
.infoImg {
  width: 35vw;
  display: flex;
  justify-content: space-around;
}
.copy {
  margin-left: 10vw;
  font-size: 12px;
  font-family: DFPGB_Y5;
}
.icon img {
  width: 12px;
  height: 12px;
}
.copyright {
  display: none;
}
.mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  background: rgba($color: #000000, $alpha: 0.2);
  display: none;
  .maskBox {
    width: 70vw;
    height: 63vh;
    margin-left: 15vw;
    margin-top: 21vh;
    background: #fff;
    border-radius: 16px;
    position: relative;
    .maskTit {
      text-align: center;
      width: 100%;
      height: 80px;
      line-height: 120px;
      font-size: 14px;
    }
    .qrcode {
      width: 50vw;
      height: 50vw;
      margin: 0vh 0 0 10vw;
    }
    .saveCode a {
      display: block;
      text-align: center;
      font-family: DFPGB_Y5;
      font-size: 16px;
      color: #42d7c8;
      height: 45px;
      line-height: 45px;
    }
    hr {
      width: 6vw;
      margin-left: 32vw;
      border: 1px solid #42d7c8;
    }
    .saveTost {
      width: 100%;
      height: 60px;
      line-height: 60px;
      font-size: 16px;
      font-family: DFPGB_Y5;
      text-align: center;
    }
    .close {
      width: 13px;
      height: 13px;
      position: absolute;
      top: 8px;
      right: 8px;
      img {
        width: 100%;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .foot {
    min-height: 330px;
  }
  .path {
    display: none;
  }
  .list {
    width: 100px;
    margin: 0 10px;
    float: left;
  }
  .menu {
    margin-left: 1vw;
    min-height: 20vh;
    height: 285px;
    width: 600px;
    position: relative;
    float: left;
  }
  .child {
    width: 100px;
    display: block;
    height: 30px;
    margin-left: 0;
  }
  .listLi {
    width: 110px;
    height: 30px;
    margin-top: 20px;
    .icon {
      display: none;
    }
  }
  .kefu {
    width: 130px;
    margin: 30px 0 0 0;
    height: 30px;
    border: none;
    color: #000;
  }
  .phone {
    width: 180px;
    border: none;
    height: 140px;
    margin: 0;
  }
  .serveNum{
    font-size: 22px;
    margin: 5px 0 10px 0;
  }
  .phoneNum {
    font-size: 22px;
    margin: 24px 0 10px 0;
  }
  .care {
    width: 140px;
    margin: 0;
    padding-top: 10px;
    height: 110px;
    border-bottom: 1px solid #38a9a9;
  }
  .info {
    font-size: 14px;
    display: block;
    height: 30px;
  }
  .serveTxt {
    height: 45px;
  }
  .infoImg {
    width: 120px;
    margin-top: 10px;
    justify-content: space-between;
  }
  .lang {
    display: none;
  }
  .pcFoot {
    padding-top: 30px;
    width: 180px;
    float: left;
  }
  .copy {
    display: block;
    width: 100vw;
    height: 30px;
    text-align: center;
    clear: both;
    margin: 0;
    padding-top: 15px;
  }
  .copyright {
    display: inline;
  }
  .delName {
    display:inline-block;
    width:67px;
    border-left:1px solid #000;
    border-right:1px solid #000;
    &:nth-of-type(2){
      border-left: none;
      margin: 0 2px 0 -6px;
    }
  }
  .kefuTxt {
    font-family: DFPGB_Y5;
    font-weight: bold;
    font-size: 17px;
  }
}
@media screen and (min-width: 1300px) {
  .menu {
    width: 800px;
  }
  .list {
    margin: 0 28px;
  }
}
</style>
