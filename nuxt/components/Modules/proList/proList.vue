<template>
  <div class="prolist">
  <skgmenu />
    <div class="title">
      <img src="https://img.skg.com/skg.com/20200723/d976c296db814cceb726f012ffc1a0cb.png" alt="">
    </div>
    <div class="prolistData"  v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="proListChild swiper-slide" v-for="(Item,Index) of proListData1" :key="Index"  @click="openProDetail(Item.params)">
          <nuxt-link :to="{path:Item.path, query:{index:Item.params}}">
            <img :src="Item.img" alt="">
            <p style="text-align:center">{{Item.name}}</p>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="title">
      <img src="https://img.skg.com/skg.com/20200723/40097cc7fb654a57b7cf6f3a764583ce.png" alt="">
    </div>
    <div class="prolistData"  v-swiper:Swiper="swiperOptionTwo">
      <div class="swiper-wrapper">
        <div class="proListChild swiper-slide" v-for="(childItem,childIndex) of proListData2" :key="childIndex" @click="openProDetail(childItem.params)" >
          <nuxt-link :to="{path:childItem.path, query:{index:childItem.params}}">
            <img :src="childItem.img" alt="">
            <p style="text-align:center">{{childItem.name}}</p>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="title">
      <img src="https://img.skg.com/skg.com/20200723/075077d2332a475d9297d8b5ef03fdd5.png" alt="">
    </div>
    <div class="prolistData"  v-swiper:SwiperThree="swiperOptionThree">
      <div class="swiper-wrapper">
        <div class="proListChild swiper-slide" v-for="(threeitem,threeIndex) of proListData3" :key="threeIndex" @click="openProDetail(threeitem.params)">
          <nuxt-link :to="{path:threeitem.path, query:{index:threeitem.params}}">
            <img :src="threeitem.img" alt="">
            <p style="text-align:center">{{threeitem.name}}</p>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="title">
      <img src="https://img.skg.com/skg.com/20200723/bc11e3abadf5490b8940f8770cfd7d0c.png" alt="">
    </div>
    <div class="prolistData"  v-swiper:SwiperFour="swiperOptionFour">
      <div class="swiper-wrapper">
        <div class="proListChild swiper-slide" v-for="(fourItem,fourIndex) of proListData4" :key="fourIndex" @click="openProDetail(fourItem.params)">
          <nuxt-link :to="{path:fourItem.path, query:{index:fourItem.params}}">
            <img :src="fourItem.img" alt="">
            <p style="text-align:center">{{fourItem.name}}</p>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="title">
      <span>联名定制系列</span>
    </div>
    <div class="prolistData"  v-swiper:SwiperFive="swiperOptionFive">
      <div class="swiper-wrapper">
        <div class="proListChild swiper-slide" v-for="(fiveItem,fiveIndex) of proListData5" :key="fiveIndex" @click="openProDetail(fiveItem.params)">
          <nuxt-link :to="{path:fiveItem.path, query:{index:fiveItem.params}}">
            <img :src="fiveItem.img" alt="">
            <p style="text-align:center">{{fiveItem.name}}</p>
          </nuxt-link>
        </div>
      </div>
    </div>

  <myfooter />
  </div>
</template>
<script>
//setting
import skgmenu from '@/components/Modules/menu/menu.vue'
import myfooter from '@/components/Modules/footer/footer.vue'
export default {
  name: 'proList',
  components: {
    skgmenu,
    myfooter,
  },
  head() {
    return {
      title: '『SKG官网』畅销巴黎·纽约·首尔，全球1500万年轻人的选择！颈椎按摩仪|护颈仪|颈部按摩器-招商合作',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'SKG作为时尚的颈椎按摩仪品牌，集研发、生产、销售、培训为一体的专业大型国际企业，主要经营颈椎按摩仪,护颈仪,颈部按摩器,颈椎按摩器等，以超时尚设计理念，启发全球用户追求智能健康生活方式'
        },
        {
          hid: 'Keywords',
          name: 'Keywords',
          content: '颈椎按摩仪,护颈仪,颈部按摩器,颈椎按摩器,SKG,SKG官网'
        }
      ]
    }
  },
  data(){
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 10,
      },
      swiperOptionTwo: {
        slidesPerView: 'auto',
        spaceBetween: 10,
      },
      swiperOptionThree: {
        slidesPerView: 'auto',
        spaceBetween: 10,
      },
      swiperOptionFour: {
        slidesPerView: 'auto',
        spaceBetween: 10,
      },
      swiperOptionFive: {
        slidesPerView: 'auto',
        spaceBetween: 10,
      },
      proListData1: [
            {img: "https://img.skg.com/skg.com/20200723/aff2d99a1c01459780a3d1dc31ece6c3.png",name: "炫彩浅蓝",path: "/proDetail/k6",params:"0"},
            {img: "https://img.skg.com/skg.com/20200723/9de1ee250d3e4e868ccb169c3b0205ee.png",name: "炫彩浅粉",path: "/proDetail/k6",params:"1"},
            {img: "https://img.skg.com/skg.com/20200723/cfd3e8d29dc946ebacb74054adf2c493.png",name: "炫彩墨绿",path: "/proDetail/k6",params:"2"},
            {img: "https://img.skg.com/skg.com/20200723/072f8c740bb44daabed9c8f3c41c7e77.png",name: "炫彩蓝",path: "/proDetail/k6",params:"3"},
            {img: "https://img.skg.com/skg.com/20200723/f9208f03b0d244fb8e676a2426d05764.png",name: "炫彩浅银",path: "/proDetail/k6",params:"4"},
          ],
      proListData2:  [
            {img: "https://file-skg.obs.cn-south-1.myhuaweicloud.com/skg.com/20200723/eac60efb2d2f4280a47c917ed88111f5.png",name: "全新K5",path: "/proDetail/newk5",params:"0"},
            {img: "https://img.skg.com/skg.com/20200723/7e9a65c732f54d4097708a500b8d532a.png",name: "4098PLUS",path: "/proDetail/k5PLUS",params:"0"},
            {img: "https://img.skg.com/skg.com/20200723/c64673e2ac27463aa731ce739ab249ef.png",name: "k5尊贵",path: "/proDetail/k5Pro",params:"0"},
            {img: "https://img.skg.com/skg.com/20200723/4987f07536ab4abb80d510f88cf3c3bd.png",name: "4098经典",path: "/proDetail/k5Classic",params:"0"},
            {img: "https://img.skg.com/skg.com/20200723/696de2ea4b1f47e59899fc6bd23ced33.png",name: "4098蓝牙",path: "/proDetail/k5BLE",params:"0"},
            {img: "https://img.skg.com/skg.com/20200723/c1537f4c4f16403f8835bd19485a7131.png",name: "4998AI",path: "/proDetail/k5AI",params:"0"},
          ],
      proListData3: [
            {img: "https://file-skg.skg.com/skg.com/20200908/a55d218c7f204477b2524d854f2ac8e1.png",name: "全新K4",path: "/proDetail/newK4",params:"0"},
            {img: "https://file-skg.obs.cn-south-1.myhuaweicloud.com/skg.com/20200723/01bc7542ff72459793f6c1e39bb56af0.png",name: "4356",path: "/proDetail/k4",params:"0"},
            {img: "https://file-skg.skg.com/skg.com/20201027/5ce0e3be3ae5416eb94b5893270d91a6.png",name: "4588",path: "/proDetail/4588",params:"0"},
          ],
      proListData4: [
            {img: "https://file-skg.obs.cn-south-1.myhuaweicloud.com/skg.com/20200723/d457e50c684d48fbaa6a988be73d89b2.png",name: "蒂芙尼蓝",path: "/proDetail/k3_1",params:"0"},
            {img: "https://file-skg.obs.cn-south-1.myhuaweicloud.com/skg.com/20200723/a09b56d1a5a4408bb626bd642131e520.png",name: "浅灰",path: "/proDetail/k3_2",params:"0"},
            {img: "https://file-skg.obs.cn-south-1.myhuaweicloud.com/skg.com/20200723/6d7a65cdd778433c80b64c86351fec12.png",name: "象牙白",path: "/proDetail/k3_3",params:"0"},
          ],
      proListData5:[
            {img: "https://file-skg.obs.cn-south-1.myhuaweicloud.com/skg.com/20200723/8d287563d2b94e3abe7d8bdf4730735f.png",name: "娜小古定制款（粉色）",path: "/proDetail/dz_1",params:"0"},
            {img: "https://file-skg.obs.cn-south-1.myhuaweicloud.com/skg.com/20200723/acd62874e1c64a67a8c3aa40b33ff599.png",name: "娜小古定制款（白色）",path: "/proDetail/dz_2",params:"0"},
            {img: "https://file-skg.obs.cn-south-1.myhuaweicloud.com/skg.com/20200723/0a585859614546a493aa3ca0be5519ee.png",name: "施华洛世奇--水晶限量款",path: "/proDetail/dz_3",params:"0"},
            {img: "https://file-skg.obs.cn-south-1.myhuaweicloud.com/skg.com/20200723/afb7c3e9f6194128987b5a43fd2abbde.png",name: "娜小古定制款（红色）",path: "/proDetail/dz_4",params:"0"},
          ],
    }
  },
  methods: {
    openProDetail(type){
      // console.log("123213213")
      this.$store.commit('setProductFlag',!this.$store.state.productFlag)
      this.$store.commit('setProductParams',type)
      this.showSearch = false;
      this.openburger = false;
      // this.$router.push({name:'proDetail', params:{index: type}})
    },
  },
  mounted(){

  },


}
</script>
<style lang="scss" scoped>

@media screen and (min-width: 0px) and (max-width: 768px){
  .prolist {
    padding-top: 50px;
    width: 100vw;
    .title {
      width: 100vw;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 90px;
      }
    }
    .prolistData {
      width: 100vw;
      height: 225px;
      .swiper-slide {
        width: 146px;
        box-sizing: border-box;
        height: 213px;
        float: left;
        margin-left: 10px;
        border-radius: 10px;
        background: #F2F2F2;
        a {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
        img {
          width: 114px;
          height: 124px;
          margin: 16px;
        }
        p {
          font-family: DFPGB_Y5;
        }
      }
    }
  }
}
@media screen and (min-width: 769px) and (max-width: 1920px){
  .prolist {
    padding-top: 65px;
    width: 99vw;
    .title {
      width: 99vw;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 90px;
      }
      span {
        font-family: DFPGB_Y5;
        font-size: 24px;
      }
    }
    .prolistData {
      width: 99vw;
      height: 225px;
      &:nth-last-child(2){
        margin-bottom: 50px;
      }
      .swiper-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        .swiper-slide {
          width: 146px;
          cursor: pointer;
          box-sizing: border-box;
          height: 213px;
          float: left;
          margin-left: 10px;
          border-radius: 10px;
          background: #F2F2F2;
          a {
            display: inline-block;
            width: 100%;
            height: 100%;
          }
          img {
            width: 114px;
            height: 124px;
            margin: 16px;
          }
          p {
            font-size: 16px;
            font-family: DFPGB_Y5;
            line-height: 24px;
          }
        }
      }
    }
  }

}
</style>
