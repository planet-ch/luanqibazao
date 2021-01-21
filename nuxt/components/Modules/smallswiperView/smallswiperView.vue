<template>
  <div class="fullScreen" @click="goto">
    <div class="bg" ref="bg">
    </div>
  </div>
</template>
<script>
export default {
  name: "smallswiperView",
  data() {
    return {
      bgStyle: "",
      context: ""
    };
  },
  props: {
    getdata: {
      type: String,
      default: () => null
    }
  },
  methods: {
    goto() {
      let data = this.getdata;
      if (data.url) this.$router.push(data);
    }
  },
  mounted() {
    if (this.getdata) {
      // this.$refs.bg.style = `background-image:url(${this.getdata.bg_photo})`;
      this.$refs.bg.style.backgroundImage = `url(${this.getdata})`;
    }
  }
};
</script>
<style lang="scss" scoped>
// @import url("@/style/common.scss");
@media screen and (min-width: 421px) {
  .fullScreen {
    height: 100%;
    .bg {
      width: 100%;
      height:100%;
      position: relative;
      // background-image: url($bgUrl);
      background-repeat: no-repeat;
      background-position:  center center;
      background-size: 100%;
      background-color: #42d7c8;
      .content {   
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        padding: 120px 100px;
        box-sizing: border-box;
        div {
          font-size: 28px;
          line-height: 38px;
          text-transform: Uppercase;
          text-align: left;
          color: #454545;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 420px) {
  .fullScreen {
    .bg {
      width: 100%;
      height: 275px;
      position: relative;
      // background-image: url($bgUrl);
      background-position: center;
      background-repeat: no-repeat;
      background-size: auto 100% ;
      .content {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        padding: 120px 100px;
        box-sizing: border-box;
        div {
          font-size: 28px;
          line-height: 38px;
          text-transform: Uppercase;
          text-align: left;
          color: #454545;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}

</style>