<template>
  <div class="fullScreen" @click="goto">
    <div class="bg" ref="bg">
    </div>
  </div>
</template>
<script>
import mainpcdata from "~/static/data/mainpcdata"
export default {
  name: "fullScreen",
  data() {
    return {
      bgStyle: "",
      context: ""
    };
  },
  props: {
    getdata: {
      type: Object,
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
    // console.log(this.getdata.bg_photo,"12421421")
    // var width = document.body.clientWidth
    // var bg = document.getElementsByClassName("bg")
    // if(width > 600){
    //   for(let i=0;i<mainpcdata.data.length;i++){
    //     bg[i].style.backgroundImage = `url(${mainpcdata.data[i].bg_photo})`;
    //     }
    // } else {
      console.log("getdatadas",this.getdata,this.$refs.bg)
      this.$refs.bg.style.backgroundImage = `url(${this.getdata.bg_photo})`
    // }

    // if (this.getdata) {
    //   // this.$refs.bg.style = `background-image:url(${this.getdata.bg_photo})`;
    //   this.$refs.bg.style.backgroundImage = `url(${this.getdata.bg_photo})`;
    // }
  },
};
</script>
<style lang="scss" scoped>
// @import url("@/style/common.scss");
@media screen and (min-width: 421px) {
  .fullScreen {
    .bg {
      width: 100vw;
      height: 100vh;
      position: relative;
      // background-image: url($bgUrl);
      background-repeat: no-repeat;
      background-position:  center center;
      background-size: cover;
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
      width: 100vw;
      height: 177vw;
      position: relative;
      // background-image: url($bgUrl);
      background: no-repeat 50% 50%;
      background-size: cover;
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