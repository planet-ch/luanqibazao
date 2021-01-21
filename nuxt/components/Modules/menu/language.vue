<template>
  <div class="language" :class="{'ss':!show}">
      <div class="mask" :class="{'show':show}">
          <div class="content" v-if="datalist">
              <h2>Choose Country / Area </h2>
              <div  v-for="(item,index) of datalist" :key="index">
              <div class="tit">{{item.title}}</div>
              <div class="choose">
                  <div class="county" v-for="(jtem,count) of item.cc" :key="count">
                      <img :src="jtem.icon" alt="">
                      <a :href="jtem.url" target="_blank">{{jtem.name}}</a>
                  </div>
              </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"language",
    props:{
        show:{
            type:Boolean,
            default:true
        }
    },
    data(){
        return{
            datalist:null
        }
    },
    methods:{
        init(){
            let opt={
                url:"/json/language.json",
                method:"get",
            }
            this.$http(opt)
            .then(res=>{
                this.$nextTick(()=>{
                    this.datalist=res.area
                })
            })
        }
    },
    mounted(){
        this.init()
    }

}
</script>

<style lang="scss" scoped>
.language{
    width: 100vw;
    height: 100vh;
    
    position: fixed;
    box-sizing: border-box;
    left: 0;
    overflow: hidden;
    &.ss{
        opacity: 0;
        visibility: hidden;
    }
    .mask{
        position: absolute;
        left: 100%;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 5vw 10vw;
        color: #333;
        background: #fff;
        &.show{
            left: 0;
            transition: 0.3s ease-out;
        }
        .content{
            text-align: left;
            h2{
                font-size: 24px;
                line-height: 1.8;
                font-weight: 700;
            }
            .tit{
                font-size: 18px;
                line-height: 1.8;
                font-weight: 700;
            }
            .choose{
                display: flex;
                justify-content: left;
                padding: 15px 0 20px 0;
                cursor: pointer;
                .county{
                    margin: 10px;
                    padding: 10px 20px;
                    border: 1px solid #eaeaea;
                    border-radius: 6px;
                    max-width: 200px;
                    display: flex;
                    align-items: center;
                    &:hover{
                        background: #eaeaea;
                        transition: 0.3s ease-in-out;
                    }
                    img{
                        width: 40px;
                    }
                    a{
                        text-decoration-line: none;
                        color: #545454;
                        line-height: 1.8;
                        font-size: 16px;
                        padding-left: 8px;
                        &:hover{
                            // text-decoration-line:underline;
                            color: #333;
                        }
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 960px) {
    .language{
    
    .mask{
        padding: 5vw;
        .content{
                
            h2{
                
            }
            .tit{
                
            }
            .choose{
                flex-flow:row wrap;
                padding: 15px 0 20px 0;
                .county{
                    flex-direction: column;

                    &:hover{
                        background: #eaeaea;
                        transition: 0.3s ease-in-out;
                    }
                    img{
                        width: 30px;
                    }
                    a{
                        text-decoration-line: none;
                        color: #545454;
                        line-height: 1.8;
                        font-size: 14px;
                        padding-left: 8px;
                        &:hover{
                            // text-decoration-line:underline;
                            color: #333;
                        }
                    }
                }
            }
        }
    }
}
}
</style>