<template>
  <div class="product-list">
    <skgmenu />
    <div class="pc">
      <div class="content-box">
        <div class="search-box">
                  <div class="title">产品介绍</div>
          <!--        <div class="search-input">-->
          <!--          <input type="text">-->
          <!--          <div class="search-button"></div>-->
          <!--        </div>-->
          <div class="list">
            <div class="product-item" v-for="(item, index) in [...neckList, ...eyeList, ...bodyList]" @click="showImg(item, index)">
              <img :src="item.simgUrl" alt="">
              <p>{{item.name}}</p>
            </div>
          </div>
        </div>
      </div>
      <el-dialog
        :visible.sync="dialogVisible"
        width="90%">
        <div class="img-box">
          <el-image class="img" :src="urls[currentImgIndex]"></el-image>
        </div>
        <div class="img-list">
          <div class="box-title">
            {{currentProduct.spare1}}
          </div>
          <div class="box-list">
            <el-image v-for="(img, i) in urls" :src="img" class="img coverImg" :key="i" @click="chooseOne(img, i)">
              <div slot="error" class="image-slot">
              </div>
            </el-image>
          </div>
          <div class="box-bottom">
            {{returnName(currentProduct.className)}}
          </div>
        </div>
        <div class="close" @click="close"></div>
      </el-dialog>
    </div>
    <div class="mobile">
      <div class="content-box">
        <p class="title">产品介绍</p>
        <div class="box-1 box" v-if="neckList.length > 0">
          <p class="box-title">
            颈椎按摩仪
          </p>
          <div class="product-list">
            <div class="product-item" v-for="(item, index) in neckList" :key="index" @click="toDetail(item, index)">
              <img :src="item.simgUrl" alt="">
              <p>{{item.name}}</p>
            </div>
          </div>
        </div>
        <div class="box-1 box"  v-if="eyeList.length > 0">
          <p class="box-title">
            眼部按摩仪
          </p>
          <div class="product-list">
            <div class="product-item" v-for="(item, index) in eyeList" :key="index" @click="toDetail(item, index)">
              <img :src="item.simgUrl" alt="">
              <p>{{item.name}}</p>
            </div>
          </div>
        </div>
        <div class="box-1 box"  v-if="bodyList.length > 0">
          <p class="box-title">
            眼部按摩仪
          </p>
          <div class="product-list">
            <div class="product-item" v-for="(item, index) in bodyList" :key="index" @click="toDetail(item, index)">
              <img :src="item.simgUrl" alt="">
              <p>{{item.name}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <myfooter />
  </div>
</template>

<script>
import skgmenu from '@/components/Modules/menu/menu.vue'
import myfooter from '@/components/Modules/footer/footer.vue'
export default {
  name: "index",
  components: {
    skgmenu,
    myfooter,
  },
  data () {
    return {
      dialogVisible: false,
      necklist: [],
      urls: [],
      currentProduct: {},
      currentImgIndex: 0
    }
  },
  computed: {
    neckList () {
      return this.$store.state.neckList
    },
    eyeList () {
      return this.$store.state.eyeList
    },
    bodyList () {
      return this.$store.state.bodyList
    }
  },
  created() {
    let showModal = true
    // 移动端 不默认展开PC端弹框
    if (process.browser) {
      try {
        let width = document.documentElement.clientWidth
        if (width < 800) {
          showModal = false
        } else {
          showModal = true
        }
      } catch (err) {
      }
    }
    this.$store.dispatch('getRightList').then(res => {
      if (this.$route.query.oepn && showModal) {
        this.currentProduct = res.find(item => item.id === this.$route.query.id * 1) || {}
        this.urls = this.returnImg(this.currentProduct.imgUrl)
        this.$nextTick(() => {
          this.dialogVisible = true
        })
      }
    })


  },
  methods: {
    toDetail (item, index) {
      console.log(item, index)
      this.$router.push({ name: 'productDetail', query: { id: item.id } })
    },
    returnName (value) {
      let name = ''
      switch (value) {
        case 'neck':
          name = '颈椎按摩仪'
          break
        case 'eye':
          name = '眼部按摩仪'
          break
        case 'body':
          name = '按摩仪'
          break
      }
      return name
    },
    returnImg (value) {
      return value && value.split(',')
    },
    getList () {
      const htpOpt = {
        url: `${this.$store.state.testUrl}web/rights/list?page=1&size=100`,
        method: "post",
        params:{
          page: 1,
          size: 100
        }
      };
      this.$http(htpOpt).then(res => {
        if(res.code==0){
          this.list = res.page.list;
        }
      })
    },
    showImg (item, index) {
      this.$router.push({ name: 'productList', query: { id: item.id, oepn: '1' } })
      this.currentProduct = item
      this.urls = this.returnImg(item.imgUrl)
      this.$nextTick(() => {
        this.dialogVisible = true
      })
    },
    chooseOne (img, index) {
      this.currentImgIndex = index
    },
    close () {
      this.dialogVisible = false
      this.currentImgIndex = 0
    }
  }
}
</script>

<style lang="scss" scoped>
$fsz:50;
@function rem($val){
  @return $val/$fsz*1rem;
}

.product-list{
  font-family: DFPGB_Y5;
  .pc{
    .content-box{
      width: 100%;
      min-height: 1000px;
      background: #000 url("https://file-skg.skg.com/skg.com/20201118/7100dd5270ef45efbcd64de540ff86e0.jpg") no-repeat top left;
      overflow: hidden;
      .search-box{
        margin-top: 248px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        .title{
          font-size: 32px;
          color: #fff;
          font-family: DFPGB_Y5;
          margin-bottom: 30px;
        }
        .search-input{
          width: 510px;
          height: 54px;
          background-color: #fff;
          border-radius: 50px;
          overflow: hidden;
          input{
            float: left;
            width: 442px;
            height: 100%;
            padding-left: 30px;
            font-size: 24px;
            &::placeholder{
              color: #DBDBDB;
            }
          }
          .search-button{
            float: right;
            width: 68px;
            height: 54px;
            background: #42D7C8 url("./../../../assets/search.png") no-repeat center/cover;
            background-size: 30px 30px;
            cursor: pointer;
          }
        }
        .list{
          margin-top: 40px;
          display: flex;
          flex-flow: wrap;
          justify-content: flex-start;
          align-items: center;
          width: 1214px;
          .product-item{
            width: 215px;
            height: 242px;
            background-color: #fff;
            border-radius: 16px;
            margin: 0 26px 20px 0;
            cursor: pointer;
            img{
              display: block;
              width: 196px;
              height: 176px;
              margin: 10px auto 16px;
            }
            p{
              font-size: 22px;
              color: #42D7C8;
              text-align: center;
            }
          }
        }
      }
    }

    ::v-deep .el-dialog__header, ::v-deep .el-dialog__footer{
      display: none;
    }
    ::v-deep .el-dialog__body, ::v-deep .el-dialog{
      background: none;
      display: flex;
      justify-content: space-between;
    }
    ::v-deep .el-dialog{
      display: flex;
      justify-content: center;
      box-shadow: none;
    }
    .img-box{
      width: 848px;
      height: 635px;
      margin-right: 26px;
      .img{
        width: 100%;
        height: 100%;
      }
    }
    .img-list{
      display: flex;
      flex-flow: column;
      width: 232px;
      height: 408px;
      .box-title{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 78px;
        background: #fff;
        font-size: 16px;
        color: #8C8C8C;
      }

      .box-list{
        display: flex;
        flex-flow: wrap;
        flex: 1;
        background: #fff;
        .img{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 75px;
          height: 75px;
          background: #8c8c8c;
          margin: 1px 0 0 1px;
          cursor: pointer;
          ::v-deep img{
            width: 200%;
            height: auto;
          }
        }
      }

      .box-bottom{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 102px;
        background: #fff;
        font-size: 26px;
        color: #42D7C8;
      }
    }
    .close {
      margin-left: 2px;
      width: 60px;
      height: 60px;
      background: #8c8c8c url("./../../../assets/close.png") no-repeat center;
      background-size: 20px 20px;
      cursor: pointer;
      &:hover{
        opacity: 0.8;
      }
    }
  }
  .mobile{
    display: none;
    margin-top: 50px;
    .content-box{
      box-sizing: border-box;
      width: 100%;
      background: #FFF;
      overflow: hidden;
      padding: rem(30);
      .title{
        margin-top: rem(40);
        margin-bottom: rem(30);
        font-size: rem(40);
        color: #42D7C8;
        text-align: center;
      }
      .box{
        padding-bottom: rem(40);
        .box-title{
          font-size: rem(34);
          color: #1B1515;
          text-align: center;
          margin-bottom: rem(20);
        }
        .product-list{
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, rem(216));
          grid-template-rows: repeat(auto, 32.8%);
          grid-gap: rem(16) 0;
          place-items: start center;
          place-content: space-between;
          .product-item{
            width: rem(216);
            height: rem(306);
            background: #F2F2F2;
            border-radius: rem(16);
            overflow: hidden;
            >img{
              display: block;
              width: rem(170);
              height: rem(178);
              margin: rem(30) auto;
            }
            p{
              text-align: center;
              font-size: rem(16);
              color: #000000;
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 220px) and (max-width: 750px) {
    .pc{
      display: none;
    }
    .mobile{
      display: block;
    }
  }
}
</style>
<style lang="scss">
@media screen and (min-width: 220px) and (max-width: 750px) {
  .v-modal{
    display: none !important;
  }
}
</style>
