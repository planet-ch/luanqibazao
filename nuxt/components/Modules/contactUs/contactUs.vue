<template>
  <div>
    <skgmenu/>
    <div class="contactUsPC">
        <p class="title">联系我们</p>
        <div class="contactUsBg">
          <div class="contentBox">
            <div class="contentLeft">
              <img src="https://file-skg.skg.com/skg.com/20201021/e308dcf41fe546958b5fb8ef3d904ea8.jpg" alt="">
            </div>
            <div class="contentRight">
              <ul>
                <li class="contentItem">
                  <img src="https://file-skg.skg.com/skg.com/20201021/c8ad1a8a98604877a4535910251235a6.png" alt="">
                  <span>热线电话：400-822-0888</span>
                </li>
                <li class="contentItem">
                  <img src="https://file-skg.skg.com/skg.com/20201021/1a5d1326fbda4b179e1220c67c783904.png" alt="">
                  <span>媒体联络：Pr@skg.com</span>
                </li>
                <li class="contentItem">
                  <img src="https://file-skg.skg.com/skg.com/20201021/8316160827a84bb391ef157a3befbd2e.png" alt="" style="margin-top:-20px">
                  <div>
                    <div style="float:left;">联系人地址：</div>
                    <div style="width:350px;float:right;">深圳市南山区粤海街道高新区社区高新南一道009号中科研发园三号楼23AF</div> </div>
                </li>
              </ul>
              <div class="qrBox">
                <dl>
                  <dt>
                    <img src="https://file-skg.skg.com/skg.com/20201021/4034a528d3bf475b8f45ac17a9fb648f.png" alt="">
                  </dt>
                  <dd>
                    <img src="https://file-skg.skg.com/skg.com/20201021/3c0336f4e58a44048be01d679fcf60db.png" alt="">
                    <span>微博</span>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <img src="https://file-skg.skg.com/skg.com/20201021/24e91f2e9f034ae38cd53a92bc5b1830.png" alt="">
                  </dt>
                  <dd>
                    <img src="https://file-skg.skg.com/skg.com/20201021/d9a30c1be81f465fa75a22a406652185.png" alt="">
                    <span>公众号</span>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <img src="https://file-skg.skg.com/skg.com/20201021/865a0b8cb03e4427bbf38e79a0bdf890.png" alt="">
                  </dt>
                  <dd>
                    <img src="https://file-skg.skg.com/skg.com/20201021/2e6f38ae757e438fa7dcb78c3d521015.png" alt="">
                    <span>企业微信</span>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <img src="https://file-skg.skg.com/skg.com/20201021/aa4a4769058b46479249530be217bba5.png" alt="">
                  </dt>
                  <dd>
                    <img src="https://file-skg.skg.com/skg.com/20201021/62cc3a6fa2904263b3754aca1c280a99.png" alt="">
                    <span>SKG商城</span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

    </div>
    <div class="contactUswrap">
        <div class="content">
          <p class="title">联系我们</p>
          <img src="@/static/img/contactUs.png" class="contactUsIMG">
          <p class="titleS">联系客服</p>
          <ul class="lxList" id="">
            <li>
              <img src="@/static/img/i1.png" alt="">
              <div><a href="tel:13764567708">400-822-0888</a></div>
              <div>热线电话</div>
            </li>
            <li>
              <img src="@/static/img/i2.png" alt="">
              <div><a href="tel:13764567708">0755-88866686</a></div>
              <div>热线客服</div>
            </li>
            <li>
              <img src="@/static/img/i3.png" alt="" style="height: 30px;top:14px">
              <div style="margin-top:10px">微博</div>
            </li>
            <li>
              <img src="@/static/img/i4.png" alt=""  style="height: 30px;top:14px">
              <div style="margin-top:10px">微信</div>
            </li>
            <li style="border:none">
              <img src="https://file-skg.skg.com/skg.com/20201021/8316160827a84bb391ef157a3befbd2e.png" alt=""  style="height: 35px;top:14px">
              <div>联系人地址</div>
              <div style="font-size:12px;line-height:16px;color:#919191;">深圳市南山区粤海街道高新区社区高新南一道009号中科研发园三号楼23AF</div>
            </li>
          </ul>
          <p class="titleS">媒体联络</p>
          <ul class="lxList">
            <li style="border:none">
              <img src="@/static/img/i5.png" alt="" style="height: 30px;top:14px">
              <div style="margin-top:10px">Pr@skg.com </div>
            </li>
          </ul>
        </div>
    </div>
     <myfooter/>
  </div>
</template>
<script>
import {mapState, mapMutations, mapActions, mapGetters}from 'vuex'
import skgmenu from "@/components/Modules/menu/menu.vue";
import myfooter from "@/components/Modules/footer/footer.vue";
import topMenu from "@/components/Modules/innerMenu/topMenu.vue";
import swiper from "@/components/Modules/Swiper/Swiper.vue";
import swiper2 from "@/components/Modules/smallSwiper/smallSwiper.vue";
export default {
  name: "temp",
  head() {
    return {
      title: 'SKG联系方式_热线电话_客服_媒体联络_微博_公众号_商城-SKG官网',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'SKG联系方式,热线电话,客服,媒体联络,微博,公众号,商城。SKG作为时尚的颈椎按摩仪品牌，集研发、生产、销售、培训为一体，主要经营颈椎按摩仪,护颈仪,颈部按摩器,颈椎按摩器等。'
        },
        {
          hid: 'Keywords',
          name: 'Keywords',
          content: 'SKG联系方式,热线电话,客服,媒体联络,微博,公众号,商城'
        }
      ]
    }
  },
  components: {
    skgmenu,
    myfooter,
    topMenu,
    swiper,
    swiper2
  },
  computed:{

  },
  data() {
    return {

    }
  },
  props:{

  },
  methods:{

  },
  mounted(){
  }
};
</script>

<style lang="scss" scoped>
.contactUsPC{
  display: none;
}
.contactUswrap{
  padding-top: 60px;
  overflow-x: hidden;
  .content {
    font-family: DFPGB_Y5;
    .title{
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      color: #42d7c8;
    }
    .contactUsIMG{
      width: 90%;
      display: block;
      margin: 0 auto;
      margin-top: 20px;
    }
    .titleS{
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      color: #42d7c8;
      margin-top: 35px;
    }
    .lxList{
      color: #000000;
      font-size: 13px;
      font-weight: bold;
      width: 83%;
      margin: 0 auto;
      margin-top: 20px;
      li{
        position: relative;
        border-bottom: 1px solid #000000;
        padding: 10px 0;
        padding-left: 70px;
        height: 59px;
        box-sizing: border-box;
        img{
          width: 35px;
          height: 35px;
          position: absolute;
          left: 0;
          top: 14px;
        }
        div{
          line-height: 20px;
          letter-spacing: 1px;

        }
      }

    }
  }
}
@media screen and (min-width: 768px) {
  .contactUswrap{
    display: none;
  }
  .contactUsPC{
    display: block;
    padding-top: 90px;
    .contactUsBg{
        display: block;
        height: 70vh;
        width: 1100px;
        margin: 0 auto;
        box-sizing: border-box;
        padding-top: 200px;
        margin-top: -8vh;
      .contentBox {
        width: 100%;
        .contentLeft {
          width: 42%;
          height: 100%;
          float: left;
        }
        .contentRight {
          width: 55%;
          height: 100%;
          float: right;
          margin-top: 25px;
          .contentItem {
            width: 100%;
            font-family: DFPGB_Y5;
            display: flex;
            align-items: center;
            padding: 15px 30px;
            font-size: 18px;
            img {
              width: 24px;
              height: 24px;
              margin-right: 20px;
            }
          }
          .qrBox {
              width: 80%;
              height: 180px;
              display: flex;
              justify-content: space-around;
              align-items: center;
              dl{
                width: 100px;
                height: 100px;
                dt {
                  img {
                    width: 75px;
                    margin-left: 12px;
                    margin-bottom: 10px;
                  }
                }
                dd {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  img {
                    width: 17px;
                    margin-right: 5px;
                  }
                  span {
                    font-size: 18px;
                    font-family: DFPGB_Y5;
                  }
                }
              }
          }
        }
      }
    }
    .title{
      text-align: center;
      font-size: 32px;
      font-weight: bold;
      color: #42d7c8;
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px){
  .contactUsPC .contactUsBg{
      display: block;
      height: 35vh;
      width: 90vw;
      margin: 0 auto;
      margin-top: 5vh;
      background-image: url('https://file-skg.skg.com/skg.com/20200731/60214039d439491b853883040a61bb22.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      margin-top: 0vh;
  }
}

</style>

