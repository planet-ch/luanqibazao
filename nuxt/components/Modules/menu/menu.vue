<template>
  <div class="banner" >
    <div class="bannerTop">
      <!-- <ul class="topMenu">
        <li v-for="(item,index) in PCtop" :key="index">
          <nuxt-link :to="item.path">
            <span class="topTxt">{{item.title}}</span>
          </nuxt-link>
        </li>
      </ul> -->
      <no-ssr>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#000"
          text-color="#fff"
          active-text-color="#42d7c8"
          style="height:21px;padding-left:20px;font-size:14px;"
        >
          <el-submenu 
            :index="(index + 1)"
            v-for="(item,index) in menuList"
            :key="index"
          >
            <template slot="title">{{ item.title }}</template>
            <el-menu-item :index=" (index + 1)+'-' + 　(chidrenIndex + 1 )  " v-for="(childrenItem,chidrenIndex) in item.children" :key="chidrenIndex">
              <nuxt-link :to="{name:childrenItem.path,params:{index:childrenItem.params}}"  v-if="childrenItem.path.length <10">{{ childrenItem.name }}</nuxt-link >
              <a :href="childrenItem.path" target="_blank"  v-if="childrenItem.path.length >10">{{ childrenItem.name }}</a>
            </el-menu-item>
          </el-submenu>
        </el-menu> 
      </no-ssr>
    </div>
    <div class="pcList">
      <div
        class="pcListChild"
        v-for="(item,index) in proList"
        :key="index"
        :class="index > 3 ? 'childTxt' : ''"
        @mouseover="pcShowDetail(index)"
        @mouseleave="pcHideDetail(index)"
      >

        <img :src="item.titleImg" alt="" v-if="item.titleImg" :id="'childImg' + index">
        <span v-if="!item.titleImg" class="pcListChildTit" >{{item.title}}</span>
      </div>
      <div class="pcListChild childTxt">
        <nuxt-link to="/sooth" no-prefetch class="pcListChildTit">技术原理</nuxt-link>
      </div>
    </div>
    <div class="logo pc-logo" :class="{'open':openburger}" @click="clkHome()" id="logo" v-show="!openburger">
      <img src="https://img.skg.com/skg.com/20200723/529c7a5ad3bb4f3495046f0082188e16.png" alt>
    </div>
    <div class="menuInputBox" v-show="openburger" >
      <input type="text" class="menuInput" placeholder="K6"  v-model="menuInput" @keyup.enter="search" @keyup="closes">
      <span id="serText" @click="search">搜索</span>
    </div>
    <ul id="searchList" v-if="showSearch">
        <li v-for="(item,index) in searchList" :key="index + '1'" @click="openProDetail(item.type)">{{item.name}}</li>
        <li v-for="(item,index) in searchList2" :key="index + '2'" @click="openNewsdetail(item.fileName)">{{item.title}}</li>
    </ul>
    <ul class="level" :class="{'open':openburger}" ref="menu">
      <li v-for="(item,index) in proList" :key="index + 'a'">
        <div class="titleBox" @click="showPro(index,'proDel')">
            <img :src="item.titleImg" alt="" class="titleImg" v-if="item.titleImg">
            <span v-if="item.title" class="titleTxt">{{item.title}}</span>
            <img src="@/static/img/open.png" alt="" class="openImg">
        </div>
        <div class="proDel">
          <div class="proBox" v-for="(childrenItem, childrenIndex) in item.children" :key="childrenIndex" @click="openProDetail(childrenItem.path,childrenItem.params)">
            <nuxt-link :to="{path:childrenItem.path, query:{index:childrenItem.params}}">
              <img :src="childrenItem.img" alt="" class="chidrenImg">
              <p class="childrenName">{{childrenItem.name}}</p>
            </nuxt-link>
          </div>
        </div>
      </li>
      <li v-for="(item,index) in routerList" :key="index + 'b'">
        <nuxt-link :to="item.path">
          <span class="titleTxt">{{item.title}}</span>
          <img src="@/static/img/open.png" alt="" class="openImg">
        </nuxt-link>
      </li>
      <li v-for="(item,index) in childrenList" :key="index + 'c'">
        <div class="childrenTit" @click="showDel(index, 'routerBox')">
          <span class="titleTxt">{{item.title}}</span>
          <img src="@/static/img/open.png" alt="" class="openImg childrenOpenImg">
        </div>

        <div class="routerBox">
          <div class="detailBox" v-for="(detailItem,detailIndex) in item.childrenTxt" :key="detailIndex">
            <nuxt-link :to="detailItem.path">
              <span>{{detailItem.name}}</span>
              <img src="@/static/img/grayTo.png" alt="" class="toImg">
            </nuxt-link>
          </div>
        </div>
      </li>
    </ul>
    <div
      class="pcProList" v-show="pcProListShow"
      @mouseover="showList"
      @mouseleave="hideList"
    >
      <div class="pcProMenu">
        <div class="pcProBox" v-for="(childrenItem, childrenIndex) in proList[listIndex].children" :key="childrenIndex +1" @click="openProDetail(childrenItem.path,childrenItem.params)">
             <nuxt-link :to="{path:childrenItem.path, query:{index:childrenItem.params}}">
               <img :src="childrenItem.img" alt="" class="pcChidrenImg">
               <p class="pcChildrenName">{{childrenItem.name}}</p>
             </nuxt-link>
          </div>
      </div>
    </div>
    <div class="burger" @click.stop.prevent="openMenu">
      <burger :isClose="openburger"/>
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations, mapActions, mapGetters}from 'vuex'
import menuDataDemo from "~/static/data/menu";
import { TweenMax, Power2, TimelineLite } from "gsap";
import regMenu from "../login_menu.vue";
import burger from "./burger-bt.vue";
import { timeout } from "q";
import language from './language'
export default {
  name: "menu",
  components: {
    regMenu,
    burger,
    language,
  },
  data() {
    return {
      showSearch:false,
      menuData: menuDataDemo,
      openburger: false,
      menuShowID: -1,
      StatusMenu: true,
      show_lang:false,
      listIndex: 0,
      closeImg: require("@/static/img/close.png"),
      openImg: require("@/static/img/open.png"),
      menuInput: "",
      pcProListShow:　false,
      greenIndex: 0,
      proList: [
        {
          titleImg: "https://file-skg.skg.com/skg.com/20200917/2e68b91100774bea9748227b79ff94a4.png",
          children: [
            {img: "https://file-skg.obs.cn-south-1.myhuaweicloud.com/skg.com/20200723/eac60efb2d2f4280a47c917ed88111f5.png",name: "全新K5",path: "/proDetail/newk5",params:"0"},
            {img: "https://file-skg.skg.com/skg.com/20200908/a55d218c7f204477b2524d854f2ac8e1.png",name: "全新K4",path: "/proDetail/newK4",params:"0"},
            {img: "https://img.skg.com/skg.com/20200723/aff2d99a1c01459780a3d1dc31ece6c3.png",name: "K6",path: "/proDetail/k6",params:"0"},
            {img: "https://file-skg.obs.cn-south-1.myhuaweicloud.com/skg.com/20200723/d457e50c684d48fbaa6a988be73d89b2.png",name: "K3",path: "/proDetail/k3_1",params:"0"},
            {img: "https://img.skg.com/skg.com/20200723/696de2ea4b1f47e59899fc6bd23ced33.png",name: "4098蓝牙",path: "/proDetail/k5BLE",params:"0"},
            {img: "https://file-skg.skg.com/skg.com/20200918/3005687f26f24a1298c3f62803475984.png",name: "",path: "/proList",params: ""},
          ]
        },
        {
          titleImg: "https://file-skg.skg.com/skg.com/20201229/ea54d92ccc9b4dd18d953f0be6056bb4.png",
          children: [
            {img: "https://file-skg.skg.com/skg.com/20201229/fc5874dd40b74802b772d9fc88351a4c.png",name: "G7颈椎按摩仪",path: "/proDetail/G7",params:"0"},
          ]
        },
        {
          titleImg: "https://file-skg.skg.com/skg.com/20200917/75b72577824243f28e468a99dfbf1a67.png",
          children: [
            {img: "https://file-skg.skg.com/skg.com/20200910/f058ea6d3a6f44a9bfb0b7901ed2a82b.png",name: "F3筋膜枪",path: "/proDetail/jinmo",params:"0"},
            {img: "https://file-skg.skg.com/skg.com/20201230/b52d50839776433aa6163cbba570e9fc.png",name: "全新F5",path: "/proDetail/F5",params:"0"},

          ]
        },
        {
          titleImg: "https://file-skg.skg.com/skg.com/20200917/d23a665fa66142f49d3c5c18f191e7f7.png",
          children: [
            {img: "https://file-skg.skg.com/skg.com/20210113/69edfd59666640e6b9a23bc5e54662d1.png",name: "E4眼部按摩仪",path: "/proDetail/E4",params:"0"},
            {img: "https://file-skg.obs.cn-south-1.myhuaweicloud.com/skg.com/20200723/61416dbb15744823a4c4e5818761f975.png",name: "E3眼部按摩仪",path: "/proDetail/4306",params:"0"},
            {img: "https://file-skg.obs.cn-south-1.myhuaweicloud.com/skg.com/20200723/0b930f2f693d4fb7858f2f5d1827ec52.png",name: "4301眼部按摩仪",path: "/proDetail/4301",params:"0"},
          ]
        },
      ],
      routerList: [
        {
          title:"技术原理",
          path: "/sooth"
        }
      ],
      childrenList: [
        {
          title:"购买渠道",
          childrenTxt: [
            {name: "线下体验店",path:"/store"},
            {name: "官方授权店",path:"/store"}
          ]
        },
        {
          title:"探索精彩SKG",
          childrenTxt: [
            {name: "关于SKG",path:"/about"},
            {name: "新闻中心",path:"/news"},
            {name: "加入我们",path:"/joinUs"},
            {name: "知识产权",path:"/patent"},
            {name: "假冒产品对策",path:"/countermove"},
          ]
        },
        {
          title:"商务合作",
          childrenTxt: [
            {name: "企业合作",path:"/cooperation"},
            {name: "媒体联络",path:"/contactUs"}
          ]
        },
        {
          title:"服务与支持",
          childrenTxt: [
            {name: "联系我们",path:"/contactUs"},
            {name: "服务政策",path:"/"},
            {name: "真伪查询",path:"/query"}
          ]
        }
      ],
      PCtop: [
        {
          title:"购买渠道",
          path: "/store"
        },
        {
          title:"探索精彩SKG",
          path: "/about"
        },
        {
          title:"商务合作",
          path: "/cooperation"
        },
        {
          title:"服务与支持",
          path: "/contactUs"
        },
      ],
      blueImg: [
        "https://file-skg.skg.com/skg.com/20200918/72027c59ee894dbdb410bc24d622e639.png",
        "https://file-skg.skg.com/skg.com/20201229/6da27c5f7bd742779467eb651411e18d.png",
        "https://file-skg.skg.com/skg.com/20200918/66dc3277768840f0b3fb2c717b654e3a.png",
        "https://file-skg.skg.com/skg.com/20200918/dc37679ad42b4234893a9fdb92b578d5.png",
      ],
      blackImg: [
        "https://file-skg.skg.com/skg.com/20200917/2e68b91100774bea9748227b79ff94a4.png",
        "https://file-skg.skg.com/skg.com/20201229/ea54d92ccc9b4dd18d953f0be6056bb4.png",
        "https://file-skg.skg.com/skg.com/20200917/75b72577824243f28e468a99dfbf1a67.png",
        "https://file-skg.skg.com/skg.com/20200917/d23a665fa66142f49d3c5c18f191e7f7.png",
      ],
      searchList:[],
      searchList2:[],
      productList:[
        {
          "name":"K6颈椎按摩仪（炫彩浅蓝）",
          "type":"k6"
        },
        {
          "name":"K6颈椎按摩仪（炫彩浅粉）",
          "type":"k6"
        },
        {
          "name":"K6颈椎按摩仪（炫彩墨绿）",
          "type":"k6"
        },
        {
          "name":"K6颈椎按摩仪（炫彩蓝）",
          "type":"k6"
        },
        {
          "name":"K6颈椎按摩仪（炫彩浅银）",
          "type":"k6"
        },
         {
          "name":"4098PLUS颈椎按摩仪",
          "type":"k5PLUS"
        },
        {
          "name":"4098尊贵款颈椎按摩仪",
          "type":"k5尊贵款"
        },
        {
          "name":"4098经典颈椎按摩仪",
          "type":"k5经典"
        },
        {
          "name":"4098蓝牙颈椎按摩仪",
          "type":"k5蓝牙"
        },
        {
          "name":"4998AI颈椎按摩仪",
          "type":"k5AI"
        },
        {
          "name":"全新K5颈椎按摩仪",
          "type":"newk5"
        },
        {
          "name":"4356颈椎按摩仪",
          "type":"k4"
        },
        {
          "name":"K3颈椎按摩仪（蒂芙尼蓝）",
          "type":"k3_1"
        },
        {
          "name":"K3颈椎按摩仪（浅灰）",
          "type":"k3_2"
        },
        {
          "name":"K3颈椎按摩仪（象牙白）",
          "type":"k3_3"
        },
        {
          "name":"古力娜扎联名款（粉色）颈椎按摩仪",
          "type":"dz_1"
        },
        {
          "name":"古力娜扎联名款（白色）颈椎按摩仪",
          "type":"dz_2"
        },
        {
          "name":"施华洛世奇联名定制款颈椎按摩仪 ",
          "type":"dz_3"
        },
        {
          "name":"古力娜扎联名款（红色）颈椎按摩仪",
          "type":"dz_4"
        },
        {
          "name":"4301眼部按摩仪",
          "type":"eyes_1"
        },
        {
          "name":"4306眼部按摩仪",
          "type":"eyes_2"
        },
      ],
      origin: 'http://10.102.114.20:3000',
      activeIndex: '1',
      activeIndex2: '1',
      menuList: [
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
    };
  },
  computed:{
    ...mapState({testUrl:state=>state.testUrl}),
    ...mapState({menudata:state=>state.menudata})
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    openProDetail(path,type){
      this.$store.commit('setProductFlag',!this.$store.state.productFlag)
      this.$store.commit('setProductParams',type)
      this.showSearch = false;
      this.openburger = false;
      // this.$router.push({name: path, params:{index: type}})
    },
    closes(){
      if(this.menuInput==''){
        this.showSearch = false;
      }
    },
    openNewsdetail(name){
      window.open(`${this.$store.state.urlNew}html/${name}`, '_blank')
    },
    getSearchlist(likes){
      const htpOpt = {
        url: `${this.$store.state.testUrl}web/serchGrobal/search?likes=${likes}`,
        // url: `https://cn.skg.com/service/web/serchGrobal/search?likes=${likes}`,
        // url:`http://10.102.104.151:8080/skg/web/serchGrobal/searchByLikes?likes=${likes}`,
        method: "get",
        // params:likes
      };
      this.$http(htpOpt).then(res => {
        if(res.code==0){
          res.object.news.map((item,index)=>{
            if(item.title.length>20){
              item.title = item.title.substring(0,20)+'...【新闻】';
            }else{
              item.title = item.title+'【新闻】';
            }
          })
          this.searchList2 = res.object.news;
          // this.searchList = JSON.parse(decodeURIComponent(res.object.product[0].pcImageArray));
        }
      })
    },
    goto(){
      this.show_lang=!this.show_lang
      // window.open("https://cn.skg.com")
    },
    clkHome(){
      this.showSearch = false;
      this.menuInput = '';
      var width = document.body.clientWidth
      if(width < 768){
        this.openMenu()
      }
      // window.location.href(this.origin)
      this.$router.push("/")
    },
    getDataList() {
      this.dataListLoading = true;
      let i = 1;
      this.menuData=this.menudata
      this.menuData.map(item=>{
        if(item.children==undefined){
          item.children=[]
        }
        if(item.showInMenu==undefined){
          item.showInMenu="1"
        }
      })
    },
    openMenu() {
      this.openburger = !this.openburger;
      this.menuShowID = -1;
      this.show_lang=false;
      this.showSearch = false;
      this.menuInput = '';
    },
    search(){
      this.showSearch = true;
      this.searchList = this.productList.filter(item => item.name.indexOf(this.menuInput.toUpperCase())!=-1);
      // var dataform = new FormData()
      this.getSearchlist(this.menuInput)

    },
    triggleMenu(index) {
      if (this.menuShowID > 0) {
        this.StatusMenu = false;
        setTimeout(() => {
          this.StatusMenu = true;
          this.menuShowID = -1;
        }, 600);
      } else this.menuShowID = index;
    },
    showPro(index,className) {
      var proDel = document.getElementsByClassName(className)
      var openImg = document.getElementsByClassName("openImg")
      if(proDel[index].style.display === "none" || proDel[index].style.display === ""){
        proDel[index].style.display = "block"
        openImg[index].src = this.closeImg
      } else {
        proDel[index].style.display = "none"
        openImg[index].src = this.openImg
      }
    },
    showDel(index,className) {
      var proDel = document.getElementsByClassName(className)
      var titleBox = document.getElementsByClassName("childrenTit")
      var openImg = document.getElementsByClassName("childrenOpenImg")
      // console.log(proDel[index].style.display)
      if(proDel[index].style.display === "none" || proDel[index].style.display === ""){
        proDel[index].style.display = "block"
        titleBox[index].style.borderBottom = "0.5px solid rgba(0,0,0,0.2)"
        openImg[index].src = this.closeImg
      } else {
        proDel[index].style.display = "none"
        titleBox[index].style.borderBottom = "none"
        openImg[index].src = this.openImg
      }
    },
    // pc端显示产品列表
    pcShowDetail(index) {
      this.greenIndex = index
      var pcProList = document.getElementsByClassName("pcProList")[0]
      // console.log("pcProList",pcProList,this.pcProListShow)
      this.pcProListShow = true
      this.listIndex = index
      document.getElementsByClassName("banner")[0].style.background = "#fff"
      // if(index < 4){
      //   console.log("index",index)
        var chooseItem = document.getElementById(`childImg${index}`)
        for(let i=0;i<4;i++){
            document.getElementById(`childImg${i}`).src = this.blackImg[i]
            // document.getElementsByClassName("pcListChildTit")[0].style.color = "#000"
            // document.getElementsByClassName("pcListChildTit")[1].style.color = "#000"
        }
        chooseItem.src = this.blueImg[index]
      // } else {
      //   for(let i=0;i<4;i++){
      //       document.getElementById(`childImg${i}`).src = this.blackImg[i]
      //       document.getElementsByClassName("pcListChildTit")[0].style.color = "#000"
      //       document.getElementsByClassName("pcListChildTit")[1].style.color = "#000"
      //   }
      //       document.getElementsByClassName("pcListChildTit")[index-4].style.color = "#42d7c8"
      // }
    },
    // pc端隐藏产品列表
    pcHideDetail(index){
      this.pcProListShow = false
      // var pcProList = document.getElementsByClassName("pcProList")[0]
      // pcProList.style.display = "none"
      document.getElementsByClassName("banner")[0].style.background = "#42d7c8"
        for(let i=0;i<4;i++){
            document.getElementById(`childImg${i}`).src = this.blackImg[i]
      //       document.getElementsByClassName("pcListChildTit")[0].style.color = "#000"
      //       document.getElementsByClassName("pcListChildTit")[1].style.color = "#000"
      //       document.getElementsByClassName("pcListChildTit")[2].style.color = "#000"
        }

    },
    showList(){
      if(this.greenIndex <4){
        document.getElementById(`childImg${this.greenIndex}`).src = this.blueImg[this.greenIndex]
      } else  {
        //  document.getElementsByClassName("pcListChildTit")[this.greenIndex-4].style.color = "#42d7c8"
      }
      this.pcProListShow = true
      document.getElementsByClassName("banner")[0].style.background = "#fff"

    },
    hideList(){
      this.pcProListShow = false
      document.getElementsByClassName("banner")[0].style.background = "#42d7c8"
        for(let i=0;i<4;i++){
            document.getElementById(`childImg${i}`).src = this.blackImg[i]
            // document.getElementsByClassName("pcListChildTit")[0].style.color = "#000"
            // document.getElementsByClassName("pcListChildTit")[1].style.color = "#000"
            // document.getElementsByClassName("pcListChildTit")[2].style.color = "#000"
        }
    },
    getNews(){
      const htpOpt = {
        url: `${this.$store.state.testUrl}web/news/list`,
        method: "post",
        params:{
          page: 1,
          size: 1000
        }
      };
      this.$http(htpOpt).then(res => {
        if(res.code==0){
          this.searchData = res.page.list;
        }
      })
    },
  },
  // created() {
  //   this.getDataList();
  // },
  created() {
    this.getDataList()
  },
  mounted(){
    var width = document.body.clientWidth
    var logo = document.getElementById("logo")
    // console.log(width)
    if(width < 750){
      logo.style.left = (width - logo.offsetWidth)/2 + "px"
    }
    // console.log("menudata",this.menuData)
  }
};
</script>
<style lang="scss" scoped>
$hover-color: #ffd0a1;
$font-color: #000; //#afafaf;
$bg-color:#42d7c8;
.el-menu {
  a, a:link, a:visited, a:hover, a:active {
    text-decoration: none;
    color: #fff  !important;
    border: none;
    display: inline-block;
    width: 100%;
    height:100%;
  }
}
.banner {
  background: $bg-color;
  width: 1280px;
  padding: 50px 10px 10px 10px;
  box-sizing: border-box;
  position: relative;
  transform: translate(-50%, 0%);
  top: 0;
  left: 50%;
  z-index: 10;
  cursor: pointer;
  &:hover,
  &.open {
    height: auto;
}
#searchList{
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 50px;
  z-index: 999999999;
  overflow-y: auto;
  background: #fff;
  padding-bottom: 10px;
  li{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #eee;
    padding-left: 15px;
    color: #000;
    overflow: hidden;
    font-size: 14px;
    cursor: pointer;
  }
}
.level {
  height: 100vh;
}
.box {
  width: 90%;
  margin-left: 5%;
  height: 1500px;
  background: gray;
  overflow: hidden;
}
}
  .logo {
    float: left;
    width: 128px;
    margin-top: -10px;
    p {
      display: none;
    }
  }
  .menuInputBox {
    position: absolute;
    left: 70px;
    top:  10px;
    height: 30px;
    width: 70vw;
    border-radius: 4px;
    background: #fff url("../../../static/img/search.png") no-repeat;
    background-position:  5px center;
    background-size: 18px;
    #serText{
        color: #42d7c8;
        font-size: 14px;
        position: absolute;
        right: 10px;
        top: 6px;
        z-index: 999;
    }
    .menuInput{
      height: 25px;
      width: 60vw;
      margin-left: 30px;
      border-radius: 4px;
      position: absolute;
      left: 0;
      top: 3px;
      z-index: 222;
      &::placeholder {
        color: #BCBCBC;
      }
    }

  }
  .level {
    float: right;
    background: #fff;
    ul {
      height: 2000px;
      overflow: scroll;
    }
    li {
      float: left;
      .title {
        height: 30px;
      }
      .titleImg {
        width: 62px;
        height: 16px;
        margin: 7px 0 0 50px;
      }
      .titleBox {
        width: 100%;
        height: 30px;
      }
      .proDel {
        width: 80vw;
        margin-left: 10vw;
        overflow: hidden;
        display: none;
      }
      .childrenTit {
        width: 75vw;
        height: 30px;
        margin-left: 50px;
        span {
          padding-left: 0px;
        }
      }
      .routerBox {
        width: 80vw;
        margin-left: 50px;
        overflow: hidden;
        display: none;
      }
      .routerBox .detailBox:nth-child(even) {
          margin-left: 20px;
        }
      .proBox {
        width: 50%;
        height: 185px;
        float: left;
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        .chidrenImg {
          width: 100px;
          height: 106px;
        }
        a {

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .childrenName {
          font-family: DFPGB_Y5;
          font-size: 12px;
          text-align: center;
          float: left;
        }
      }
      .detailBox{
        width: 130px;
        height: 45px;
        line-height: 45px;
        float: left;
        position: relative;
      }
      .openImg {
        width: 10px;
        height:10px;
        position: absolute;
        top: 10px;
        right: 0;
        opacity: 0.4;
      }
      .toImg {
        width: 5px;
        height:8px;
        right: 20px;
        top: 19px;
        position: absolute;
      }
      .titleTxt {
        font-family: DFPGB_Y5;
        font-size: 16px;
        padding-left: 50px;
      }
    }
  }
  .burger {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    cursor: pointer;
  }
@media screen and (min-width: 220px) and (max-width: 767px) {
  .banner {
    background: $bg-color;
    width: 100vw;
    box-sizing: border-box;
    padding: 40px 0 10px 0;
    font-size: 14px;
    position: fixed;
    top: 0px;
    .bannerTop {
      display: none;
    }
    .reg,
    .level {
      display: none;
      overflow: scroll;
      position: absolute;
      top: 50px;
      padding-bottom: 80px;
    }
    .pcList {
      display: none;
    }
    .logo {
      left: 50% !important;
      transform: translateX(-50%);
      width: 74px;
      position: absolute;
      top: 26px;
      left: 125px;
      img{
        width: 100%;
      }
      p {
        position: absolute;
        width: 300px;
        text-align: left;

        font-size: 12px;
        color: $font-color;
      }
      &.open{
            display: block;
            overflow: scroll;
      }
      img {
        width: 100%;
      }
    }
    .star {
      display: block;
      width: 20px;
      position: absolute;
      right: 53px;
      top: 15px;
    }
    &:hover {
      height: auto;
    }
    .burger {
      display: block;
    }
    .level {
      width: 100vw;
      text-align: left;
      max-height: 5000px;
      float: none;
      // overflow: hidden; //二级菜单隐藏
      animation: closeMenu 0.6s cubic-bezier(1.32,1.67,1.51,1) forwards;
      li {
        float: none;
        position: relative;
        display: block;
        margin: 18px 0 0 0;
        line-height: 30px;
        width: 87vw;//二级菜单隐藏; //二级菜单隐藏
            background-size: 7px;//二级菜单隐藏
            background-position: 99% center;//二级菜单隐藏
            background-repeat: no-repeat;//二级菜单隐藏
        &:nth-child(1){
          margin-top:10px;
        }
      }
      &.open {
        display: block;

      }
    }
    // .pcProList {
    //   display: none;
    // }
  }
}
@media screen and (min-width: 768px) and (max-width: 1349px) {
  .banner {
    background: $bg-color;
    width: 100vw;
    box-sizing: border-box;
    padding: 45px 0 10px 0;
    font-weight: bold;
    font-size: 14px;
    position: fixed;
    top: 0px;
    .bannerTop {
      width: 100vw;
      height: 20px;
      background: #000;
      color: #fff;
      position: absolute;
      top: 0;
      .topMenu {
        height: 14px;
        margin-left: 2.5vw;
        li{
          float: left;
          padding: 0 5px;
        }
        .topTxt {
          color: #fff;
          font-size: 12px;
        }
      }
    }
    .pcList {
      width: 53vw;
      position: absolute;
      right: 0;
      top: 27px;
      height: 25px;
      .pcListChild{
        width: 45px;
        float: left;
        height: 30px;
        margin: 0 16px ;
        cursor: pointer;
        img {
          width: 100%;
        }
        .pcListChildTit {
          width: 60px;
          height: 25px;
          font-size: 14px;
          font-family: DFPGB_y5;
        }
      }
      .childTxt {
        width: auto;
      }
      .childTxt a {
        color: #000 ;
      }
    }
    .reg, .level {
      display: none;
      overflow: scroll;
      position: absolute;
      top: 50px;
      padding-bottom: 80px;
    }
    .logo {
      width: 74px;
      position: absolute;
      top: 35px;
      left: 27vw;
      img{
        width: 100%;
      }
      p {
        position: absolute;
        width: 300px;
        text-align: left;

        font-size: 12px;
        color: $font-color;
      }
      &.open{
            display: block;
            overflow: scroll;
      }
      img {
        width: 100%;
      }
    }
    .star {
      display: block;
      width: 20px;
      position: absolute;
      right: 53px;
      top: 15px;
    }
    &:hover {
      height: auto;
    }
    .burger {
      display: none;
    }
    .level {
      width: 100vw;
      text-align: left;
      max-height: 5000px;
      float: none;
      // overflow: hidden; //二级菜单隐藏
      animation: closeMenu 0.6s cubic-bezier(1.32,1.67,1.51,1) forwards;
      li {
        float: none;
        position: relative;
        display: block;
        margin: 18px 0 0 0;
        line-height: 30px;
        width: 87vw;//二级菜单隐藏; //二级菜单隐藏
            background-size: 7px;//二级菜单隐藏
            background-position: 99% center;//二级菜单隐藏
            background-repeat: no-repeat;//二级菜单隐藏
        &:nth-child(1){
          margin-top:10px;
        }
      }
      &.open {
        display: block;

      }
    }
    .pcProList {
      // display: none;
      left: 0;
      width: 100vw;
      height: 27vw;
      background: rgba($color: #fff, $alpha: 0.95);
      position: fixed;
      top: 55px;
      .pcProMenu {
        height: 20vw;
        width: 100%;
        margin-top: 3vw;
        display: flex;
        justify-content: center;
        .pcProBox {
          width: 95px;
          height: 16vw;
          margin: 2vw 20px 0 0px;
          .pcChidrenImg {
            width: 95px;
          }
          .pcChildrenName {
            text-align: center;
            font-family: DFPGB_Y5;
            line-height: 20px;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1350px) {
  .banner {
    background: $bg-color;
    width: 100vw;
    box-sizing: border-box;
    padding: 55px 0 10px 0;
    font-size: 14px;
    position: fixed;
    top: 0px;
    .bannerTop {
      width: 100vw;
      height: 20px;
      background: #000;
      color: #fff;
      position: absolute;
      top: 0;
      .topMenu {
        height: 14px;
        margin-left: 2.5vw;
        li{
          float: left;
          padding: 0 5px;
        }
        .topTxt {
          color: #fff;
          font-size: 12px;
        }
      }
    }
    .pcList {
      width: 63vw;
      position: absolute;
      right: 0;
      top: 32px;
      height: 25px;
      .pcListChild{
        width: 66px;
        float: left;
        height: 36px;
        margin: 0 50px ;
        cursor: pointer;
        img {
          width: 100%;
          margin-top: 2px;
        }
        .pcListChildTit {
          width: 60px;
          height: 25px;
          font-size: 20px;
          font-weight: bold;
          font-family: DFPGB_y5;
        }
      }
      .childTxt {
        width: auto;
      }
      .childTxt a {
        color: #000 ;
      }
    }
    .reg, .level {
      display: none;
      overflow: scroll;
      position: absolute;
      top: 50px;
      padding-bottom: 80px;
    }
    .logo {
      width: 74px;
      position: absolute;
      top: 42px;
      left: 27vw;
      img{
        width: 100%;
      }
      p {
        position: absolute;
        width: 300px;
        text-align: left;

        font-size: 12px;
        color: $font-color;
      }
      &.open{
            display: block;
            overflow: scroll;
      }
      img {
        width: 100%;
      }
    }
    .star {
      display: block;
      width: 20px;
      position: absolute;
      right: 53px;
      top: 15px;
    }
    &:hover {
      height: auto;
    }
    .burger {
      display: none;
    }
    .level {
      width: 100vw;
      text-align: left;
      max-height: 5000px;
      float: none;
      // overflow: hidden; //二级菜单隐藏
      animation: closeMenu 0.6s cubic-bezier(1.32,1.67,1.51,1) forwards;
      li {
        float: none;
        position: relative;
        display: block;
        margin: 18px 0 0 0;
        line-height: 30px;
        width: 87vw;//二级菜单隐藏; //二级菜单隐藏
        background-size: 7px;//二级菜单隐藏
        background-position: 99% center;//二级菜单隐藏
        background-repeat: no-repeat;//二级菜单隐藏
        &:nth-child(1){
          margin-top:10px;
        }
      }
      &.open {
        display: block;

      }
    }
    .pcProList {
      // display: none;
      width: 100vw;
      height: 18vw;
      background: rgba($color: #fff, $alpha: 0.95);
      position: fixed;
      left: 0;
      top: 55px;
      .pcProMenu {
        height: 15vw;
        width: 100%;
        margin-top: 3vw;
        display: flex;
        justify-content: center;
        .pcProBox {
          width: 95px;
          height: 10vw;
          margin: 2vw 40px 0 40px;
          .pcChidrenImg {
            width: 95px;
          }
          .pcChildrenName {
            text-align: center;
            font-family: DFPGB_Y5;
            line-height: 20px;
          }
        }
      }
    }
  }
}
</style>
