<template>
<transition :name="transitionName">
  <div class="loading" @click="goto" @scroll="stop($event)">
    <div class="logo">
      <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 196 52">
        <g id="logo_group" data-name="logo_group" ref="logo">
          <path
            ref="logo_path1"
            class="cls-1"
            d="M5.58,45.94l.08,0a79.4,79.4,0,0,0,25.43,3.91C47.92,49.87,59.67,45,59.67,38V33.46c0-3.19-2-5.53-6.3-7.37-4.5-1.93-11.68-3.37-22.6-4.53-18.4-2-23.85-4.18-26.08-5.69a4.18,4.18,0,0,1-.58-.48,2.56,2.56,0,0,1-.06-3.6,5.76,5.76,0,0,1,.44-.41l.06-.05.29-.23C9.1,7.87,19.4,6.39,28.13,6.39a74.42,74.42,0,0,1,24,3.85l.85.25a4.82,4.82,0,0,0,1.51.24c2.15,0,3.9-1.37,3.9-3.06a3.06,3.06,0,0,0-2.18-2.74L54.8,4.42A78.47,78.47,0,0,0,28.37.13c-15.3,0-27.29,5-27.29,11.4v4.58c0,3.14,2,5.44,6.22,7.25,4.45,1.9,11.54,3.31,22.33,4.46,15.9,1.7,23.26,3.5,26.22,5.85l0,0,.21.21a2.69,2.69,0,0,1,.81,1.88,2.6,2.6,0,0,1-.44,1.42l-.08.1a2.28,2.28,0,0,1-.29.34l-.27.32-.1.09c-2.39,2.12-5.92,3.4-9.34,4.1a77.58,77.58,0,0,1-15.08,1.44A74.47,74.47,0,0,1,5.44,39.18l-1-.35-.34,0H3.87C1.74,38.82,0,40.23,0,42a3,3,0,0,0,1.7,2.51,32.75,32.75,0,0,0,3.88,1.45"
          ></path>
          <path
            ref="logo_path2"
            class="cls-1"
            d="M129.8,47.36a3.35,3.35,0,0,0-.24-3.23l-.5-.56h0a7.71,7.71,0,0,0-2.39-1.7A265.24,265.24,0,0,1,86.48,28.57l-.18-.08,0,0c-1.58-.72-3.52-1.7-3.52-3.68s1.83-2.5,3.28-3.29l0,0A258.19,258.19,0,0,1,126.7,8.13a7,7,0,0,0,2-1.36l0,0h0a6.31,6.31,0,0,0,1.39-3.52c0-1.78-1.66-2-3.37-1.57a322.3,322.3,0,0,0-42.73,14C80.9,17.34,79.52,21,79.52,25c0,4.25,1.57,8,5,9.53A322.06,322.06,0,0,0,127,48.42s2,.32,2.77-1.06"
          ></path>
          <path
            ref="logo_path3"
            class="cls-1"
            d="M163.37,22.42c-1.22,0-2.2,1.39-2.2,3.1s.85,2.89,1.94,3.07h29.07v7.84a4.18,4.18,0,0,0,0,.59A2.34,2.34,0,0,1,191,39l-.05,0c-5,2.26-14.7,4.7-24.13,4.7-13.76,0-25.8-4.56-29.94-10.85v0a13.79,13.79,0,0,1-2-7.24,15.17,15.17,0,0,1,2.29-8l0,0c5-6.87,16-11.3,29.49-11.3a46.36,46.36,0,0,1,20.17,4.08l.64.28A3.55,3.55,0,0,0,189,11h.15a3.21,3.21,0,0,0,3.27-2.89,3,3,0,0,0-1.64-2.73L190,5C182.73,1.44,176,0,166.81,0c-22.3,0-34.43,11.46-34.91,22.79v3.89c0,.18,0,.36,0,.55v.12c0,.21,0,.43,0,.63v.38h0l0,.47c.48,5.57,3.69,10.71,9,14.46,6.24,4.38,15.13,6.7,25.71,6.7a57.12,57.12,0,0,0,24.2-5.13l.08,0a5.52,5.52,0,0,0,3.23-4.93V22.42Z"
          ></path>
          <path
            ref="logo_path4"
            class="cls-1"
            d="M72.06.4c-1.58,0-2.85,1.34-2.85,3.32a.33.33,0,0,1,0,.12V46.11A3,3,0,0,0,72,49.28,3,3,0,0,0,74.89,46a.31.31,0,0,1,0-.11V3.55A3,3,0,0,0,72.06.4"
          ></path>
        </g>
      </svg>
    </div>
    <div class="Myclick" ref="MyClk">
      enter
    </div>
    <div class="center">
      <svg class="bigCricle">
        <linear id="svgCricle" class="svgCricle" cx="50" cy="50" r="48"/>
      </svg>
    </div>
    <div class="center">
      <svg class="bigCricle">
        <circle id="svgCricle" class="svgCricle" cx="50" cy="50" r="48"/>
      </svg>
    </div>
    <div class="center">
      <svg class="bigCricle">
        <circle id="svgCricle" class="svgCricle" cx="50" cy="50" r="48"/>
      </svg>
    </div>
  <div class="bg">
    <video autoplay loop muted ref="vv">
      <source src="" type="video/mp4"  />
    </video>
  </div>
  </div>
</transition>
</template>
<script>
import { TweenMax ,TweenLite, Power1, Power4, TimelineLite } from "gsap";
// import '@/script/DrawSVGPlugin.min.js'
// import lottie from "lottie-web"
import animationData from "~/static/data/loadingAnim.js"
export default {
  name: "loading",
  data() {
    return {
      //
    };
  },
  props:{
    transitionName: {
      type: String,
      default: 'fade'
    }
  },
  methods: {
    stop(event){
      event.preventDefault();
    },
    goto(){
      this.$router.push('/')
    },
    animate() {
      let tl=new TimelineLite({onComplete:()=>{
        let ll="https://ec.skg.com/upload/video/190417/c6e48795-5ef1-4428-9b7c-17a8ed470e8d.mp4"
        this.$refs.vv.src=ll
        new TweenMax
        .staggerTo(document.querySelectorAll(".svgCricle"),1,{repeat:-1,repeatDelay:1.1,scale:1.5,strokeWidth:"0px"},0.5,"-=0.5")
        new TweenMax
        .to(document.querySelector(".Myclick"),1,{repeat:-1,yoyo:true,repeatDelay:0.3,opacity:0.3},"-=1")

      }})
      let cc=2
      tl
      .set(document.querySelector(".Myclick"),{opacity:0})
      .fromTo(document.querySelectorAll(".logo"), 2, {opacity:0,scale:2},{opacity:1,scale:1,ease:Power1.easeInOut}) //ease:cubic-bezier(.42,1.38,.67,1)
      .fromTo(document.querySelectorAll(".cls-1"), 2, {drawSVG:"50% 50%",fill:"none",stroke:"#ffffff"},{drawSVG:"100%",stroke:"#ffffff", ease:Power1.easeInOut},"-=2")
      .to(document.querySelectorAll(".cls-1"),1.5,{fill:"#ffffff",ease:Power1.easeInOut},"-=1")
      .fromTo(document.querySelectorAll(".svgCricle"),2,{drawSVG:"0"},{drawSVG:"100%", ease:Power1.easeInOut},"+=0.1")
      .to(document.querySelector(".Myclick"),1,{opacity:1},"-=1")
      // .fromTo(document.querySelectorAll(".svgCricle"),1,{fill:"rgba(255,255,255,0)"},{fill:"rgba(255,255,255,0.5)",strokeWidth:"1px",ease:Power1.easeInOut},"-=1")
      // .to(document.querySelectorAll(".svgCricle"),2,{x:100})
      .fromTo(document.querySelectorAll(".click"),2,{opacity:0},{opacity:0.8},"-=0.5")
      .staggerTo(document.querySelectorAll(".center"),1,{repeat:-1,repeatDelay:1.3,scale:1.3,opacity:0},0.3,"-=0.5")
      
      .staggerTo(document.querySelectorAll(".center"),2,{repeat:-1,repeatDelay:1,
      bezier:[{scaleX:1,scaleY:1,opacity:0.6}, {scaleX:2,scaleY:2,opacity:0}], 
      },0.3,"-=1")
      
    },
    anim2(){
      let el=this.$refs.MyClk
      lottie.loadAnimation({
        container:el,
        renderer:'svg',
        loop:true,
        autoplay:true,
        // path:"json文件路径",
        animationData:animationData
      })
    },
  },
  
  mounted()
  {
    // this.animate();
    // this.anim2()
  }
};
</script>
<style lang="scss" scoped>

.loading {
  cursor: pointer;
  width: 100vw;
  height: 100vh;
  background: #191919;
  position: relative;
  overflow: hidden;
  .logo {
    width: 150px;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 35%;
    left: 50%;
    z-index: 10;
    svg {
      width: 100%;
    }
    .cls-1 {
      fill: #ffffff;
    }
  }
  .Myclick{
     position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 65%;
    width: 280%;
    line-height: 36px;
    font-size: 16px;
    text-align: center;
    color: #fafafa;
    font-weight: 400;
  }
  .center{
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    bottom: 20%;
    width: 100px;
    height: 100px;
    svg{
      width: 100%;
      height: 100%;
    }
    .svgCricle{
      fill:none;
      stroke:#fafafa;
      stroke-linecap:round;
      stroke-miterlimit:10;
      stroke-dasharray:6.0,6.0;
    }
  }
  .bg{
    position: absolute; 
    transform: translate(-50%,0%); 
    left: 0px;  
    top: 0px;  
    z-index: 1;
  }
  video{  
             
            min-width: 100%;  
            min-height: 100%;  
            height: 100vh;  
            width: auto;  
            /*加滤镜*/
            /*filter: blur(15px); //背景模糊设置 */
            /*-webkit-filter: grayscale(100%);*/  
            filter:grayscale(50%); //背景灰度设置 
            z-index:-11;
            opacity: 0.2;
        } 
}
</style>


