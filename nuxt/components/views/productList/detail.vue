<template>
  <div class="product-detail">
    <skgmenu />
    <div class="content-box">
      <p class="title">
        {{returnName(currentProduct.className)}}
      </p>
      <div class="box-1 box">
        <p class="box-title">
          {{currentProduct.spare1}}
        </p>
        <div class="product-list">
          <div class="product-item" v-for="(img, index) in urls" :key="index" @click="showImg(index)">
            <img :src="img" alt="">
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
import { ImagePreview } from 'vant';
export default {
  name: 'detail',
  components: {
    skgmenu,
    myfooter,
  },
  data () {
    return {
      currentProduct: {},
      urls: []
    }
  },
  created() {
    this.$store.commit('setLoading', true)
    this.$store.dispatch('getRightList').then(res => {
      this.currentProduct = res.find(item => item.id === this.$route.query.id * 1) || {}
      this.urls = this.returnImg(this.currentProduct.imgUrl)
      this.$store.commit('setLoading', false)
    })
  },
  methods: {
    showImg (i) {
      ImagePreview({
        images: this.urls,
        startPosition: i
      });
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
    }
  }
}
</script>

<style lang="scss" scoped>
$fsz:50;
@function rem($val){
  @return $val/$fsz*1rem;
}
.product-detail{
  font-family: DFPGB_Y5;
  margin-top: 50px;
  .content-box{
    box-sizing: border-box;
    width: 100%;
    background: #FFF;
    overflow: hidden;
    padding: rem(10);
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
        display: grid;
        grid-template-columns: repeat(3, rem(240));
        grid-template-rows: repeat(3, rem(240));
        place-items: start center;
        place-content: space-between;
        grid-gap: rem(4);
        .product-item{
          display: flex;
          align-items: center;
          justify-content: center;
          width: rem(240);
          height: rem(240);
          background: #2c3e50;
          overflow: hidden;
          img{
            display: block;
            width: 200%;
            height: auto;
          }
        }
      }
    }
  }
}
</style>
