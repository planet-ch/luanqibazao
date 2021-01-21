<template>
  <div>
    <skgmenu />
    <div class="cooperation cooperationPC">
      <div class="title" style="margin-top:30px">真伪查询及保修信息查询</div>
      <div id="noPass" v-if="!showQuery">
        <img src="@/static/img/noPass.png" class="noPassimg" v-if="this.proData.status=='该条码不存在' || this.proData.status=='该条码查询不存在，如有疑问，请联系微信公众号【SKG服务】咨询人工客服'">
        <img src="@/static/img/pass.png" class="noPassimg" v-else>
        <div class="text_1"  v-if="this.proData.status=='该条码不存在' || this.proData.status=='该条码查询不存在，如有疑问，请联系微信公众号【SKG服务】咨询人工客服'">防伪码：{{this.proData.code}}</div>
        <div class="text_2">{{this.proData.status}}</div>
        <div class="capCha"  @click="jxQuery" style="margin-top:15px;margin-bottom:20px">重新认证</div>
      </div>
      <div class="detail" id="detailjoinFlow1" v-if="showQuery">
        <div class="email">
          <input type="text" v-model="scode" placeholder="请输入防伪码查询" />
        </div>
        <p class="ts">请正确填写产品上的12位防伪码</p>
        <div class="phone">
          <input
            type="text"
            :readonly="isTruePhone"
            :class="{'readonly':isTruePhone}"
            v-model="mail_phone"
            placeholder="请输入手机号码"
          />
          <div
            class="capCha"
            @click="getCaptcha"
            :style="{background:(captcha=='获取验证码'?'#42d7c8':'#CCC')}" style="font-size:15px"
          >{{captcha}}</div>
          <input class="in_cap" type="text" v-model="in_capcha" placeholder="请输入验证码" />
        </div>
        <div class="capCha"  @click="send" style="margin-top:18px">立即查询</div>

        <div class="status" v-show="status>0">{{status_tip}}</div>
        <div class="imgsBox">
          <div class="imgbox">
            <img
              src="https://file-skg.obs.cn-south-1.myhuaweicloud.com/skg.com/20200723/9da07135d5ad4da5afa20fa941ce282f.png?x-oss-process=image/resize,h_200"
              class="queryts"
            />
            <p class="queryText">在包装盒上查看</p>
          </div>
          <div class="imgbox">
            <img
              src="https://file-skg.obs.cn-south-1.myhuaweicloud.com/skg.com/20200723/63df9c7139e24c5b8925920411f931b0.png?x-oss-process=image/resize,h_200"
              class="queryts"
            />
            <p class="queryText">在产品内侧查看</p>
          </div>
        </div>
        <div class="tsText">
          <p>*查询提示</p>
          <p>我司拥有最终解释权，查询结果仅供参考。</p>
        </div>
      </div>
    </div>
    <div class="cooperation cooperationWrap">
      <div class="detail" id="detailjoinFlow2" v-if="showQuery">
        <div class="title" style="margin-bottom:30px">真伪及保修信息查询</div>
        <div class="email">
          <input type="text" v-model="scode" placeholder="请输入防伪码查询" />
        </div>
        <div class="phone">
          <input
            type="text"
            :readonly="isTruePhone"
            :class="{'readonly':isTruePhone}"
            v-model="mail_phone"
            placeholder="请输入手机号码"
          />
          <div
            class="capCha"
            @click="getCaptcha"
            :style="{background:(captcha=='获取验证码'?'#42d7c8':'#CCC')}"
          >{{captcha}}</div>
          <input class="in_cap" type="text" v-model="in_capcha" placeholder="请输入验证码" />
          <div class="capCha" style="top:44px" @click="send">立即查询</div>
        </div>
      </div>
      <div class="status" v-show="status>0">{{status_tip}}</div>
      <ul class="queryList" v-if="!showQuery">
        <p class="title">查询结果</p>
        <li>
          <span>防伪码</span>
          <span class="fr">{{this.proData.code}}</span>
        </li>
        <li>
          <span>产品状态</span>
          <span class="fr">{{this.proData.status}}</span>
        </li>
        <li>
          <span>查询次数</span>
          <span class="fr">{{this.proData.searchNum}}</span>
        </li>
        <div class="queryBtn" @click="jxQuery">继续查询</div>
      </ul>
      <img
        src="https://file-skg.obs.cn-south-1.myhuaweicloud.com/skg.com/20200723/9da07135d5ad4da5afa20fa941ce282f.png?x-oss-process=image/resize,h_200"
        class="queryts"
      />
      <p class="queryText">在包装盒上查看</p>
      <img
        src="https://file-skg.obs.cn-south-1.myhuaweicloud.com/skg.com/20200723/63df9c7139e24c5b8925920411f931b0.png?x-oss-process=image/resize,h_200"
        class="queryts"
      />
      <p class="queryText">在产品内侧查看</p>
      <div class="tsText">
        <p>*查询提示</p>
        <p>我司拥有最终解释权，查询结果仅供参考。</p>
      </div>
    </div>
    <myfooter />
  </div>
</template>
<script>
import { TimelineMax, Power2 } from 'gsap'
import skgmenu from '@/components/Modules/menu/menu.vue'
import myfooter from '@/components/Modules/footer/footer.vue'
export default {
  name: 'cooperation',
  head() {
    return {
      title: 'SKG真伪查询及保修信息查询-SKG官网',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'SKG真伪查询及保修信息查询。SKG作为时尚的颈椎按摩仪品牌，集研发、生产、销售、培训为一体，主要经营颈椎按摩仪,护颈仪,颈部按摩器,颈椎按摩器等。'
        },
        {
          hid: 'Keywords',
          name: 'Keywords',
          content: 'SKG真伪查询'
        }
      ]
    }
  },
  components: {
    skgmenu,
    myfooter
  },
  data() {
    return {
      showQuery: true,
      status: 0,
      status_tip: '',
      scode: null,
      mail_phone: null,
      in_capcha: null,
      captchaVal: null,
      phoneVal: null,
      timer: null,
      captcha: '获取验证码',
      isTruePhone: false,
      proData: { code: '', status: '', searchNum: '' }
    }
  },
  watch: {
    status(val) {
      if (val === 1) {
        setTimeout(() => {
          this.status = 0
        }, 3000)
      }
    }
  },
  methods: {
    jxQuery() {
      this.showQuery = true
    },
    getCaptcha() {
      if (this.isTruePhone) {
        return
      }
      if (
        !/^[1][3-9]\d{9}$|^([6|9])\d{7}$|^[6]([8|6])\d{5}$/.test(
          this.mail_phone
        )
      ) {
        this.status_tip = '手机号不正确'
        this.status = 1
        return
      }

      let opt = {
        url: 'https://zhishi.skg.com/web.kb/app/captcha/' + this.mail_phone,
        method: 'get'
      }
      this.$http(opt).then((res) => {
        this.isTruePhone = true
        if (res.code === 0) {
          let tmp = opt.url.split('/')
          this.phoneVal = tmp[tmp.length - 1]
          this.captchaVal = res.captcha
        }
        this.refeshCap()
      })
    },
    refeshCap() {
      let countDownNum = 60
      this.timer = setInterval(() => {
        countDownNum--
        if (countDownNum > 0) {
          this.captcha = `${countDownNum}s后重试`
        } else {
          this.captcha = '获取验证码'
          this.isTruePhone = false
          clearInterval(this.timer)
        }
      }, 1000)
    },
    send() {
      // console.log(this.captchaVal)
      if (!this.scode) {
        this.status_tip = '请输入防伪码！'
        this.status = 1
        return
      }
      if (!this.mail_phone) {
        this.status_tip = '请输入手机号！'
        this.status = 1
        return
      }
      if (
        !/^[1][3-9]\d{9}$|^([6|9])\d{7}$|^[6]([8|6])\d{5}$/.test(
          this.mail_phone
        )
      ) {
        this.status_tip = '手机号不正确，请重新输入！'
        this.status = 1
        return
      }
      if (!this.in_capcha) {
        this.status_tip = '请输入验证码！'
        this.status = 1
        return
      }
      if (this.captchaVal != this.in_capcha) {
        this.status_tip = '验证码不正确，请重新输入！'
        this.status = 1
        return
      }
      let opt = {
        url: 'https://zhishi.skg.com/web.kb/ext/barcode/warranty',
        method: 'get',
        params: {
          barCode: Number(this.scode),
          mobile: Number(this.mail_phone)
        }
      }
      this.status_tip = '查询中...'
      this.status = 2
      this.$http(opt).then((res) => {
        if (res.result) {
          this.captchaVal = null
          if (res.result.tip.includes('不存在')) {
            this.proData = {
              code: this.scode, // 授权码
              status: '该条码不存在', // 授权时间
              searchNum: '--' // 次数
            }
          } else if (res.result.tip.includes('已过期')) {
            this.proData = {
              code: this.scode, // 授权码
              status:'该条码查询不存在，如有疑问，请联系微信公众号【SKG服务】咨询人工客服', // 授权时间
              searchNum: '--' // 次数
            }
          } else if (res.result.tip.includes('成功')) {
            this.proData = {
              code: this.scode, // 授权码
              status:
                res.result.searchNum == 1
                  ? '注册成功'
                  : res.result.searchNum > 3
                  ? '已多次查询，如有疑问，请联系微信公众号【SKG服务】咨询人工客服'
                  : `已注册`, // 授权时间
              searchNum: res.result.searchNum // 次数
            }
          }
          this.status = 0
          this.showQuery = false
          this.mail_phone = null
          this.scode = null
          this.in_capcha = null
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cooperationPC{
  display: none;
}
.cooperation {
  padding-top: 50px;
  overflow-x: hidden;
  .title {
    font-size: 19px;
    font-weight: bold;
    width: 100%;
    text-align: center;
    color: #42d7c8;
  }
  .queryList {
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
    .title {
      color: #42d7c8;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 10px;
    }
    li {
      line-height: 25px;
    }
    span {
      font-size: 14px;
      &:last-child {
        font-size: 12px;
      }
    }
    .queryBtn {
      background: #42d7c8;
      width: 110px;
      border-radius: 15px;
      height: 30px;
      line-height: 30px;
      color: #fff;
      font-size: 13px;
      text-align: center;
      margin: 10px auto;
    }
  }
  .fr {
    float: right;
  }
  .queryts {
    width: 60%;
    margin: 0 auto;
    display: block;
    margin-top: 20px;
  }
  .queryText {
    text-align: center;
    font-size: 13px;
    margin-top: 7px;
    font-weight: bold;
  }
  .tsText {
    width: 90%;
    margin: 0 auto;
    margin-top: 40px;
    color: #000;
    margin-bottom: 20px;
    p {
      line-height: 20px;
    }
  }
  .status {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 11%;
    left: 50%;
    width: 300px;
    text-align: center;
    max-height: 160px;
    padding: 10px;
    box-sizing: border-box;
    z-index: 2;
    background-color: #42d7c8;

    color: red;
    border-radius: 10px;
    font-size: 14px;
    &::after {
      content: '';
      z-index: -1;
      width: 100%;
      height: 100%;
      background-color: rgba($color: #000000, $alpha: 0.3);
    }
  }
  .ts {
    color: #aaa;
  }
  .heard {
    width: 100vw;
    position: relative;
    .bg {
      width: 100vw;
      background-image: url('/cn/img/joinIn/01.jpg');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center center;
    }
  }
  .detail {
    width: 100vw;
    box-sizing: border-box;
    padding: 5vw;
    text-align: left;
    .email,
    .phone,
    .addr,
    .name,
    .product,
    .company,
    .subimt {
      box-sizing: border-box;
      width: 90vw;
      margin: 10px auto;
    }
    .subimt {
      text-align: center;
      margin-top: 20px;
    }
    input,
    textarea {
      box-sizing: border-box;
      background-color: #fff;
      line-height: 35px;
      min-height: 35px;
      padding: 0 10px;
      width: 100%;
      border-radius: 15px;
      border: 1px solid #42d7c8;
      &::placeholder {
        color: #545454;
      }
    }
    .subimt input {
      width: 120px;
      border-radius: 15px;
      min-height: 30px;
      background: #42d7c8;
      color: #eee;
      height: 35px;
      line-height: 36px;
    }
    textarea {
      box-sizing: border-box;
      padding: 2vw;
      line-height: 180%;
    }
    .email {
      input {
        background-repeat: no-repeat;
        background-size: 20px;
        background-position: 96% center;
      }
    }
    .phone {
      position: relative;
      input {
        width: 60%;
        // background-image: url('/cn/img/joinIn/phone.png');
        background-repeat: no-repeat;
        background-size: 20px;
        background-position: 96% center;
        border-radius: 12px 0 0 12px;
      }
      .capCha {
        width: 41%;
        line-height: 37px;
        text-align: center;
        position: absolute;
        background-color: #42d7c8;
        color: #fff;
        top: 0px;
        right: 0;
        border-radius: 0 15px 15px 0;
        cursor: pointer;
      }
      .in_cap {
        margin-top: 7px;
        border-radius: 12px;
        width: 100%;
        background-image: none;
      }
      .addr {
        textarea {
          background-image: url('/cn/img/joinIn/address.png');
          background-repeat: no-repeat;
          background-size: 20px;
          background-position: 96% 14px;
        }
      }
      input[type='button'] {
        background-color: #42d7c8;
        color: #fff;
        text-align: center;
        line-height: 30px;
        cursor: pointer;
      }
    }
  }
  #footerList {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 10px;
    li {
      padding: 7px 0;
      border-top: 1px solid #ddd;
      .footerTitle {
        font-size: 12px;
        color: #42d7c8;
        line-height: 20px;
      }
      .footerText {
        font-size: 14px;
        color: #000000;
        line-height: 20px;
      }
    }
  }
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #c5c5c5 !important;
}

input:-moz-placeholder,
textarea:-moz-placeholder {
  color: #c5c5c5 !important;
}

input::-moz-placeholder,
textarea::-moz-placeholder {
  color: #c5c5c5 !important;
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: #c5c5c5 !important;
}
@media screen and (min-width: 768px) {
  .cooperationWrap{
    display: none;
  }
  .cooperationPC{
    display: block;
    width: 50%;
    margin: 0 auto;
    background: #eee;
    margin-top: 90px;
    padding-top: 0;
    margin-bottom: 30px;
     #noPass{
      .noPassimg{
        width: 50px;
        margin: 0 auto;
        margin-top: 30px;
        display: block;
      }
      .text_1{
        font-size: 16px;
        text-align: center;
        padding-top: 10px;
      }
      .text_2{
        font-size: 17px;
        text-align: center;
        padding-top: 10px;
        font-weight: bold;
      }
    }
    .detail{
      width: 100%;
      padding: 35px 25%;
      padding-bottom: 10px;
    }
    .title{
      color: #000000FF;
      letter-spacing: 2px;
      font-size: 23px;
    }
    .imgsBox{
      width: 100%;
      margin: 0 auto;
      margin-top: 50px;
      .imgbox{
        width: 40%;
        display: inline-block;
        p{
          line-height: 60px;
        }
        &:first-child{
          margin-right: 18%;
        }
      }
    }
    .queryts{
      display: inline-block;
      width: 100%;
    }
    .capCha{
      width: 150px;
      height: 40px;
      line-height: 40px;
      border-radius: 25px;
      text-align: center;
      color: #fff;
      display: block;
      margin: 0 auto;
      background: #42D7C8FF;
      font-size: 18px;
      letter-spacing: 2px;
      cursor: pointer;
    }
    .ts{
      color: #666;
      text-align: right;
    }
  }
  .cooperation .detail .email, .cooperation .detail .phone, .cooperation .detail .addr, .cooperation .detail .name, .cooperation .detail .product, .cooperation .detail .company, .cooperation .detail .subimt{
    width: 100%;
  }
  .cooperation .detail input, .cooperation .detail textarea{
    line-height: 38px;
    border-radius: 35px;
  }
  .cooperation .detail .phone .capCha{
    line-height: 42px;
    border-radius: 0 35px 35px 0;
  }
  .cooperation .detail .phone input{
    border-radius: 35px 0 0 35px;
  }
  .cooperation .detail .phone .in_cap{
    border-radius: 35px;
  }

}
@media screen and (min-width: 768px) and (max-width: 1024px){
  .cooperationPC{
    width: 95%;
  }
  .cooperationPC .imgsBox .imgbox:first-child {
      margin-right: 18%;
  }
}
</style>

