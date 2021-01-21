<template>
  <div class="container">
    <div class="box">
      <h1 class="title">除名查询</h1>
      <!-- <div class="closeBtn">
        <img src="/cn/img/closeCHUMIN.png" alt="">
      </div> -->
      <div class="main">
        <div class="item1">
          <div class="flex">
            <div class="name">姓名</div>
            <div class="value">
              <input @input="writeName" v-model="userName" type="text">
            </div>
          </div>
          <div class="flex error" v-show="warning1">
            <div class="name small"></div>
            <div class="value">
              必填字段
            </div>
          </div>

          <div class="flex">
            <div class="idCard">身份证号码</div>
            <div class="value">
              <input @input="writeId" v-model="userId" type="text">
            </div>
          </div>

          <div class="flex error" v-show="warning2">
            <div class="name small"></div>
            <div class="value">
              必填字段
            </div>
          </div>
          <div class="flex">
            <div class="idCard small"></div>
            <div class="value small">
              <button @click="doSearch" class="btn">查询</button>
            </div>
          </div>

        </div>
        <div class="item2">
          <h1 v-show="isshowresult" class="title2">什么是除名查询？</h1>
          <h3 v-show="isshowresult" class="tip2">仅反馈被查询人是否为未来穿戴公司除名员工。<br>如需了解详细信息，请发送邮件至group@skg.com咨询。</h3>
          <h1 :class="{isshow : isshow, noshow : !isshow}" class="title3">查询结果</h1>
          <h3 :class="{isshow : isshow1}" class="tip3">没有与您查询条件相匹配的信息</h3>
          <h3 :class="{isshow : isshow2}" class="tip4">此人员为未来穿戴公司除名员工</h3>
        </div>
      </div>
      <div class="tips">如需了解详细信息，请发送邮件至group@skg.com咨询</div>
      <div class="bottom-nav">
        <router-link to="/">
          <span>首页</span>
        </router-link>
        <em>/</em>
        <span>除名查询</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: "",
      userId: "",
      warning1: false,
      warning2: false,
      isshow: false,
      isshow1: false,
      isshow2: false,
      isshowresult: true
    }
  },
  methods: {
    doSearch () {
      if(this.userName == ""){
        this.warning1 = true
        return
      }if(this.userId == ""){
        this.warning2 = true
        return
      }
      this.isshow1 = false
      // console.log(this.isshow1)
      this.isshow2 = false
      const htpOpt={
        url: "https://zhishi.skg.com/web.kb/ext/hrmawardInfo/query?realName="+ encodeURI(this.userName)+"&sfz="+this.userId,
        method: 'post',
        params: {}
      }
      this.$http(htpOpt).then( res => {
        // console.log(res)

        if(res.code == 0 && res.msg == "否"){
          this.isshow = true
          this.isshow1 = true
          this.isshow2 = false
          this.isshowresult = false
        }else if(res.code == 0 && res.msg == "是"){
          this.isshow = true
          this.isshow1 = false
          this.isshow2 = true
          this.isshowresult = false
        }
      })
    },

    writeName (e) {
      // console.log(e.target.value)
      this.userName = e.target.value
      if(this.warning1 == true) this.warning1 = false
    },
    writeId (e) {
      this.userId = e.target.value
      if(this.warning2 == true) this.warning2 = false
    },
  }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1210px) {
  .container{
    height: 749px;
    background-color: #42c8c8;
    .box{
      width: 75%;
      margin: 0 auto;
      position: relative;
      .title{
        margin: 85px 0;
        font-size: 45px;
        line-height: 57px;
      }
      .main{
        padding-top: 35px;
        min-height: 400px;
        height: auto;
        display: block;
        border: 1px solid #eee;
        background-color: #ffffff;
        display: flex;
        .item1{
          width: 50%;
          .flex{
            display: flex;
            margin-top: 20px;
            .name,.idCard{
              width: 23%;
              text-align: right;
              color: #666;
              padding-right: 10px;
              height: 42px;
              font-size: 18px;
              line-height: 42px;
            }
            .value{
              width: 70%;
              input{
                width: 100%;
                height: 42px;
                background: none;
                border: 1px solid #ccc;
                border-radius: 1px;
                line-height: 100%;
                padding-left: 5px;
                font-size: 20px
              }
            }
          }
          .btn{
            width: 40%;
            background: #fff;
            border-radius: 0;
            border: 1px solid #111;
            color: #111;
            height: 50px;
            line-height: 50px;
            cursor: pointer;
            font-size: 18px;
            margin-bottom: 10px;
            &:hover{
              background-color: #42c8c8;
              color: #fff;
            }
          }
        }
        .item2{
          width: 50%;
          .title2{
            font-size: 34px;
            padding-top: 10px;
            line-height: 48px;
            font-family: Microsoft YaHei, Arial, Helvetica, sans-serif !important;
            font-weight: bold !important;
            margin: 0 0 12px 0;
            letter-spacing: 1px;
            opacity: 1;
            transition: all 1s;
          }
          .title3{
            font-size: 34px;
            padding-top: 10px;
            line-height: 48px;
            font-family: Microsoft YaHei, Arial, Helvetica, sans-serif !important;
            font-weight: bold !important;
            margin: 0 0 12px 0;
            letter-spacing: 1px;
            opacity: 1;
            transition: all 1s;
            position: absolute;
            top: 177px;
          }
          .title3.isshow{
            // display: block;
            opacity: 1;
          }
          .title3.noshow{
            opacity: 0;
            // display: none;
          }
          .tip2{
            color: #666;
            font-family: Microsoft YaHei, Arial, Helvetica, sans-serif !important;
            line-height: 1.625;
            font-weight: normal;
            font-size: 16px;
          }
          .tip3,.tip4{
            color: #666;
            font-family: Microsoft YaHei, Arial, Helvetica, sans-serif !important;
            line-height: 1.625;
            font-weight: normal;
            font-size: 16px;
            position: absolute;
            transition: all 0s;
            top: 249px;
            opacity: 0;
          }
          .tip3.isshow{
            opacity: 1;
          }
          .tip4.isshow{
            opacity: 1;
          }
        }
        .flex.error{
          margin: 0;
          color: red;
          height: 20px;
          font-size: 14px;
        }
      }
      .tips{
        padding: 15px 0 30px;
        line-height: 1.625;
        font-weight: normal;
        color: #282828;
        font-size: 18px;
      }
      .bottom-nav{
        color: #545454;
        font-size: 16px;
        em{
          margin: 0 7px 0 4px;
        }
        span{
          cursor: pointer;
        }
      }
      .closeBtn{
        width: 5%;
        position: absolute;
        top: 3px;
        right: 0px;
        cursor: pointer;
      }
    }
  }
}
@media screen and (min-width: 1061px) and (max-width: 1209px) {
  .container{
    height: 749px;
    background-color: #42c8c8;
    .box{
      width:85%;
      margin: 0 auto;
      position: relative;
      .title{
        margin: 85px 0;
        font-size: 45px;
        line-height: 57px;
      }
      .main{
        padding-top: 35px;
        min-height: 400px;
        height: auto;
        display: block;
        border: 1px solid #eee;
        background-color: #ffffff;
        display: flex;
        .item1{
          width: 50%;
          .flex{
            display: flex;
            margin-top: 20px;
            .name,.idCard{
              width: 23%;
              text-align: right;
              color: #666;
              padding-right: 10px;
              height: 42px;
              font-size: 18px;
              line-height: 42px;
            }
            .value{
              width: 70%;
              input{
                width: 100%;
                height: 42px;
                background: none;
                border: 1px solid #ccc;
                border-radius: 1px;
                line-height: 100%;
                padding-left: 5px;
                font-size: 20px
              }
            }
          }
          .btn{
            width: 40%;
            background: #fff;
            border-radius: 0;
            border: 1px solid #111;
            color: #111;
            height: 50px;
            line-height: 50px;
            cursor: pointer;
            font-size: 18px;
            margin-bottom: 10px;
            &:hover{
              background-color: #42c8c8;
              color: #fff;
            }
          }
        }
        .item2{
          width: 50%;
          .title2{
            font-size: 34px;
            padding-top: 10px;
            line-height: 48px;
            font-family: Microsoft YaHei, Arial, Helvetica, sans-serif !important;
            font-weight: bold !important;
            margin: 0 0 12px 0;
            letter-spacing: 1px;
            opacity: 1;
            transition: all 1s;
          }
          .title3{
            font-size: 34px;
            padding-top: 10px;
            line-height: 48px;
            font-family: Microsoft YaHei, Arial, Helvetica, sans-serif !important;
            font-weight: bold !important;
            margin: 0 0 12px 0;
            letter-spacing: 1px;
            opacity: 1;
            transition: all 1s;
            position: absolute;
            top: 177px;
          }
          .title3.isshow{
            // display: block;
            opacity: 1;
          }
          .title3.noshow{
            opacity: 0;
            // display: none;
          }
          .tip2{
            color: #666;
            font-family: Microsoft YaHei, Arial, Helvetica, sans-serif !important;
            line-height: 1.625;
            font-weight: normal;
            font-size: 16px;
          }
          .tip3,.tip4{
            color: #666;
            font-family: Microsoft YaHei, Arial, Helvetica, sans-serif !important;
            line-height: 1.625;
            font-weight: normal;
            font-size: 16px;
            position: absolute;
            transition: all 0s;
            top: 249px;
            opacity: 0;
          }
          .tip3.isshow{
            opacity: 1;
          }
          .tip4.isshow{
            opacity: 1;
          }
        }
        .flex.error{
          margin: 0;
          color: red;
          height: 20px;
          font-size: 14px;
        }
      }
      .tips{
        padding: 15px 0 30px;
        line-height: 1.625;
        font-weight: normal;
        color: #282828;
        font-size: 18px;
      }
      .bottom-nav{
        color: #545454;
        font-size: 16px;
        em{
          margin: 0 7px 0 4px;
        }
        span{
          cursor: pointer;
        }
      }
      .closeBtn{
        width: 5%;
        position: absolute;
        top: 3px;
        right: 0px;
        cursor: pointer;
      }
    }
  }
}
@media screen and (min-width: 769px) and (max-width: 1060px) {
  .container .box .title{
    margin: 0;
    margin-top: 10px;
  }
  .container{
    height: 749px;
    background-color: rgb(56, 169, 169);
    .box{
      width:95%;
      margin: 0 auto;
      position: relative;
      .title{
        margin: 85px 0;
        font-size: 45px;
        line-height: 57px;
      }
      .main{
        padding-top: 35px;
        min-height: 400px;

        height: auto;
        display: block;
        border: 1px solid #eee;
        background-color: #ffffff;
        display: flex;
        .item1{
          width: 50%;
          .flex{
            display: flex;
            margin-top: 20px;
            .name,.idCard{
              width: 23%;
              text-align: right;
              color: #666;
              padding-right: 10px;
              height: 42px;
              font-size: 18px;
              line-height: 42px;
            }
            .value{
              width: 70%;
              input{
                width: 100%;
                height: 42px;
                background: none;
                border: 1px solid #ccc;
                border-radius: 1px;
                line-height: 100%;
                padding-left: 5px;
                font-size: 20px
              }
            }
          }
          .btn{
            width: 40%;
            background: #fff;
            border-radius: 0;
            border: 1px solid #111;
            color: #111;
            height: 50px;
            line-height: 50px;
            cursor: pointer;
            font-size: 18px;
            margin-bottom: 10px;
            &:hover{
              background-color: #42c8c8;
              color: #fff;
            }
          }
        }
        .item2{
          width: 50%;
          .title2{
            font-size: 34px;
            padding-top: 10px;
            line-height: 48px;
            font-family: Microsoft YaHei, Arial, Helvetica, sans-serif !important;
            font-weight: bold !important;
            margin: 0 0 12px 0;
            letter-spacing: 1px;
            opacity: 1;
            transition: all 1s;
          }
          .title3{
            font-size: 34px;
            padding-top: 10px;
            line-height: 48px;
            font-family: Microsoft YaHei, Arial, Helvetica, sans-serif !important;
            font-weight: bold !important;
            margin: 0 0 12px 0;
            letter-spacing: 1px;
            opacity: 1;
            transition: all 1s;
            position: absolute;
            top: 177px;
          }
          .title3.isshow{
            // display: block;
            opacity: 1;
          }
          .title3.noshow{
            opacity: 0;
            // display: none;
          }
          .tip2{
            color: #666;
            font-family: Microsoft YaHei, Arial, Helvetica, sans-serif !important;
            line-height: 1.625;
            font-weight: normal;
            font-size: 16px;
          }
          .tip3,.tip4{
            color: #666;
            font-family: Microsoft YaHei, Arial, Helvetica, sans-serif !important;
            line-height: 1.625;
            font-weight: normal;
            font-size: 16px;
            position: absolute;
            transition: all 0s;
            top: 249px;
            opacity: 0;
          }
          .tip3.isshow{
            opacity: 1;
          }
          .tip4.isshow{
            opacity: 1;
          }
        }
        .flex.error{
          margin: 0;
          color: red;
          height: 20px;
          font-size: 14px;
        }
      }
      .tips{
        padding: 15px 0 30px;
        line-height: 1.625;
        font-weight: normal;
        color: #282828;
        font-size: 18px;
      }
      .bottom-nav{
        color: #545454;
        font-size: 16px;
        em{
          margin: 0 7px 0 4px;
        }
        span{
          cursor: pointer;
        }
      }
      .closeBtn{
        width: 5%;
        position: absolute;
        top: 3px;
        right: 0px;
        cursor: pointer;
      }
    }
  }
}
  @media screen and (min-width: 422px) and (max-width: 768px) {
    .container{
      height: 785px;
      background-color: #f2f2f2;
      .box{
        width: 92%;
        max-width: 1128px;
        margin: 0 auto;
        .title{
          margin: 50px 0;
          font-size: 36px;
          line-height: 57px;
        }
        .main{
          padding-top: 35px;
          min-height: 465px;
          height: auto;
          display: block;
          border: 1px solid #eee;
          background-color: #ffffff;
          .item1{
            width: 90%;
            margin: 0 auto;
            .flex{
              .idCard.small{
                display: none;
              }
              margin-top: 20px;
              .name,.idCard{
                text-align: left;
                color: #666;
                padding-right: 10px;
                height: 42px;
                font-size: 18px;
                line-height: 100%;
              }
              .value{
                width: 100%;
                input{
                  width: 100%;
                  height: 42px;
                  background: none;
                  border: 1px solid #ccc;
                  border-radius: 1px;
                  line-height: 100%;
                  padding-left: 5px;
                  font-size: 20px
                }
              }
              .value.small{
                text-align: center;
              }
            }
            .btn{
              width: 40%;
              background: #fff;
              border-radius: 0;
              border: 1px solid #111;
              color: #111;
              height: 50px;
              line-height: 50px;
              cursor: pointer;
              font-size: 18px;
              margin-bottom: 10px;
              &:hover{
                background-color: #42c8c8;
                color: #fff;
              }
            }
          }
          .item2{
            width: 90%;
            margin: 0 auto;
            .title2{
              font-size: 30px;
              padding-top: 10px;
              line-height: 48px;
              font-family: Microsoft YaHei, Arial, Helvetica, sans-serif !important;
              font-weight: bold !important;
              margin: 0 0 12px 0;
              letter-spacing: 1px;
              opacity: 1;
              transition: all 1s;
            }
            .title3{
              font-size: 30px;
              padding-top: 10px;
              line-height: 48px;
              font-family: Microsoft YaHei, Arial, Helvetica, sans-serif !important;
              font-weight: bold !important;
              margin: 0 0 12px 0;
              letter-spacing: 1px;
              opacity: 1;
              transition: all 1s;
              position: absolute;
              top: 532px;
            }
            .title3.isshow{
              // display: block;
              opacity: 1;
            }
            .title3.noshow{
              opacity: 0;
              // display: none;
            }
            .tip2{
              color: #666;
              font-family: Microsoft YaHei, Arial, Helvetica, sans-serif !important;
              line-height: 1.625;
              font-weight: normal;
              font-size: 16px;
              margin-bottom: 20px;
            }
            .tip3,.tip4{
              color: #666;
              font-family: Microsoft YaHei, Arial, Helvetica, sans-serif !important;
              line-height: 1.625;
              font-weight: normal;
              font-size: 16px;
              position: absolute;
              transition: all 0s;
              top: 601px;
              opacity: 0;
            }
            .tip3.isshow{
              opacity: 1;
            }
            .tip4.isshow{
              opacity: 1;
            }
          }
          .flex.error{
            margin: 0;
            color: red;
            height: 20px;
            font-size: 14px;
            .name.small{
              display: none;
            }
          }
        }
        .tips{
          padding: 15px 0 30px;
          line-height: 1.625;
          font-weight: normal;
          color: #282828;
          font-size: 17px;
        }
        .bottom-nav{
          display: none;
        }
      }
    }
  }
   @media screen and (max-width: 421px) {
    .container{
      background-color: #f2f2f2;
      .box{
        width: 92%;
        max-width: 1128px;
        margin: 0 auto;
        .title{
          margin: 50px 0;
          font-size: 36px;
          line-height: 57px;
        }
        .main{
          padding-top: 35px;
          min-height: 465px;
          height: auto;
          display: block;
          border: 1px solid #eee;
          background-color: #ffffff;
          .item1{
            width: 90%;
            margin: 0 auto;
            .flex{
              .idCard.small{
                display: none;
              }
              margin-top: 20px;
              .name,.idCard{
                text-align: left;
                color: #666;
                padding-right: 10px;
                height: 42px;
                font-size: 18px;
                line-height: 100%;
              }
              .value{
                width: 100%;
                input{
                  width: 100%;
                  height: 42px;
                  background: none;
                  border: 1px solid #ccc;
                  border-radius: 1px;
                  line-height: 100%;
                  padding-left: 5px;
                  font-size: 20px
                }
              }
              .value.small{
                text-align: center;
              }
            }
            .btn{
              width: 40%;
              background: #fff;
              border-radius: 0;
              border: 1px solid #111;
              color: #111;
              height: 50px;
              line-height: 50px;
              cursor: pointer;
              font-size: 18px;
              margin-bottom: 10px;
              &:hover{
                background-color: #42c8c8;
                color: #fff;
              }
            }
          }
          .item2{
            width: 90%;
            margin: 0 auto;
            .title2{
              font-size: 30px;
              padding-top: 10px;
              line-height: 48px;
              font-family: Microsoft YaHei, Arial, Helvetica, sans-serif !important;
              font-weight: bold !important;
              margin: 0 0 12px 0;
              letter-spacing: 1px;
              opacity: 1;
              transition: all 1s;
            }
            .title3{
              font-size: 30px;
              padding-top: 10px;
              line-height: 48px;
              font-family: Microsoft YaHei, Arial, Helvetica, sans-serif !important;
              font-weight: bold !important;
              margin: 0 0 12px 0;
              letter-spacing: 1px;
              opacity: 1;
              transition: all 1s;
              position: absolute;
              top: 532px;
            }
            .title3.isshow{
              // display: block;
              opacity: 1;
            }
            .title3.noshow{
              opacity: 0;
              // display: none;
            }
            .tip2{
              color: #666;
              font-family: Microsoft YaHei, Arial, Helvetica, sans-serif !important;
              line-height: 1.625;
              font-weight: normal;
              font-size: 16px;
              margin-bottom: 20px;
            }
            .tip3,.tip4{
              color: #666;
              font-family: Microsoft YaHei, Arial, Helvetica, sans-serif !important;
              line-height: 1.625;
              font-weight: normal;
              font-size: 16px;
              position: absolute;
              transition: all 0s;
              top: 601px;
              opacity: 0;
            }
            .tip3.isshow{
              opacity: 1;
            }
            .tip4.isshow{
              opacity: 1;
            }
          }
          .flex.error{
            margin: 0;
            color: red;
            height: 20px;
            font-size: 14px;
            .name.small{
              display: none;
            }
          }
        }
        .tips{
          padding: 15px 0 30px;
          line-height: 1.625;
          font-weight: normal;
          color: #282828;
          font-size: 17px;
        }
        .bottom-nav{
          display: none;
        }
      }
    }
  }
</style>
