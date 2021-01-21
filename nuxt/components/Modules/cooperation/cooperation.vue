<template>
  <div>
    <skgmenu />
    <div class="cooperationPC">
      <div class="detail detailjoinFlow">
        <div class="title">合作让我们共赢未来</div>
        <div class="name inpItem">
          <span class="label">*姓名</span>
          <input rows="5" v-model="mail_name" type="text" placeholder="请输入联系人姓名" />
        </div>
        <div class="email inpItem">
          <span class="label">*邮箱</span>
          <input type="text" v-model="mail_email" placeholder="请输入联系邮箱" />
        </div>
        <div class="product inpItem">
          <span class="label">*渠道/产品</span>
          <input rows="5" v-model="mail_product" type="text" placeholder="合作渠道/意向产品" />
        </div>
        <div class="company inpItem">
          <span class="label">联系公司</span>
          <input rows="5" v-model="mail_company" type="text" placeholder="请输入联系人公司（选填）" />
        </div>
        <div class="addr inpItem">
          <span class="label">*联系地址</span>
          <input rows="5" v-model="mail_addr" type="text" placeholder="请输入联系地址"/>
        </div>
        <div class="phone inpItem">
          <span class="label">*联系电话</span>
          <input
            type="text"
            :readonly="isTruePhone"
            :class="{'readonly':isTruePhone}"
            v-model="mail_phone"
            placeholder="请输入联系电话"
          />
          <div class="capCha" @click="getCaptcha" :style="{background:(captcha=='获取验证码'?'#42d7c8':'#CCC')}">{{captcha}}</div>
        </div>
        <div class="inpItem">
          <span class="label">*验证码</span>
          <input class="in_cap" type="text" v-model="in_capcha" placeholder="请输入验证码" />
        </div>
        <div class="subimt" @click="send">
          <input type="button" value="提交" />
        </div>
      </div>
      <div class="status" v-show="status>0">{{status_tip}}</div>
    </div>
    <div class="cooperationWrap">
      <div class="heard" id="heardjoinFlow">
        <div class="bg"></div>
        <img
          src="https://img.skg.com/skg.com/20200723/109d35539dce4febbc4cd668b57f8d32.png?x-oss-process=image/resize,h_300"
          alt
          srcset
        />
      </div>
      <div class="detail detailjoinFlow">
        <div class="title">合作让我们共赢未来</div>
        <div class="name">
          <input rows="5" v-model="mail_name" type="text" placeholder="请输入联系人姓名" />
        </div>
        <div class="email">
          <input type="text" v-model="mail_email" placeholder="请输入联系邮箱" />
        </div>
        <div class="product">
          <input rows="5" v-model="mail_product" type="text" placeholder="合作渠道/意向产品" />
        </div>
        <div class="company">
          <input rows="5" v-model="mail_company" type="text" placeholder="请输入联系人公司（选填）" />
        </div>
        <div class="addr">
          <textarea rows="5" v-model="mail_addr" type="text" placeholder="请输入联系地址"></textarea>
        </div>
        <div class="phone">
          <input
            type="text"
            :readonly="isTruePhone"
            :class="{'readonly':isTruePhone}"
            v-model="mail_phone"
            placeholder="请输入联系电话"
          />
          <div class="capCha" @click="getCaptcha">{{captcha}}</div>
          <input class="in_cap" type="text" v-model="in_capcha" placeholder="请输入验证码" />
        </div>
        <p class="ts">您也可以通过在线客服、电话、邮件、企业微信联系我们。</p>
        <div class="subimt" @click="send">
          <input type="button" value="提交" />
        </div>
      </div>
      <div class="status" v-show="status>0">{{status_tip}}</div>
      <ul id="footerList">
        <li>
          <p class="footerTitle">在线客服</p>
          <p class="footerText">在线客服为您服务</p>
        </li>
        <li>
          <p class="footerTitle">电话咨询</p>
          <p class="footerText">0755-88866686</p>
        </li>
        <li>
          <p class="footerTitle">SKG总部地址</p>
          <p class="footerText">广东省深圳市南山区中科大厦23A</p>
        </li>
      </ul>
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
      title: 'SKG商务合作_合作让我们共赢未来-SKG官网',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'SKG商务合作,合作让我们共赢未来。SKG作为时尚的颈椎按摩仪品牌，集研发、生产、销售、培训为一体，主要经营颈椎按摩仪,护颈仪,颈部按摩器,颈椎按摩器等。'
        },
        {
          hid: 'Keywords',
          name: 'Keywords',
          content: 'SKG商务合作'
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
      scene: null,
      status: 0,
      status_tip: '',
      mail_email: null,
      mail_phone: null,
      mail_name: null,
      mail_company: null,
      mail_product: null,
      mail_addr: null,
      in_capcha: null,
      captchaVal: null,
      phoneVal: null,
      timer: null,
      captcha: '获取验证码',
      isTruePhone: false
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
    getCaptcha() {
      if (this.isTruePhone) {
        return
      }
      if (
        !/^[1][3-9]\d{9}$|^([6|9])\d{7}$|^[6]([8|6])\d{5}$/.test(
          this.mail_phone
        )
      ) {
        this.tips = '电话不正确'
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
      // console.log(this.in_capcha);
      var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
      if(!this.mail_name){
        this.status_tip = '请输入姓名！';
        this.status = 1;
        return;
      }
      if(!this.mail_email){
        this.status_tip = '请输入邮箱！';
        this.status = 1;
        return;
      }
      if(!reg.test(this.mail_email)){
        this.status_tip = '邮箱格式不正确，请重新输入！';
        this.status = 1;
        return;
      }
      if(!this.mail_product){
        this.status_tip = '请输入渠道/产品！';
        this.status = 1;
        return;
      }
      if(!this.mail_addr){
        this.status_tip = '请输入联系地址！';
        this.status = 1;
        return;
      }
       if(!this.mail_phone){
        this.status_tip = '请输入联系电话！';
        this.status = 1;
        return;
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
      if(!this.in_capcha){
        this.status_tip = '请输入验证码！';
        this.status = 1;
        return;
      }
      if (this.captchaVal != this.in_capcha) {
        this.status_tip = '验证码不正确，请重新输入！'
        this.status = 1
        return
      }
      let opt = {
        url: 'https://cn.skg.com/skg/web/zhaoshang/sendEmail',
        // url:'http://10.102.104.151:8080/skg/web/zhaoshang/sendEmail',
        method: 'post',
        params: {
          title: `官网中文招商信息`,
          msg: `来自官网中文（cn.skg.com）招商信息<br>联系邮箱：${this.mail_email}<br>联系电话：${this.phoneVal}<br>联系地址：${this.mail_addr}<br>联系人：${this.mail_name}<br>联系公司：${this.mail_company}<br>合作渠道/意向产品：${this.mail_product}<br>`
        }
      }
      this.status_tip = '正在提交你的资料...'
      this.status = 2
      this.$http(opt).then((res) => {
        if (res.msg === 'success') {
          this.status_tip = '你的资料已提交成功'
          this.status = 1
          this.mail_name = null
          this.mail_email = null
          this.mail_product = null
          this.in_cap = null
          this.mail_addr = null
          this.mail_phone = null
          this.this.captchaVa = null
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cooperationPC{
  display: none;
  overflow-x: hidden;
}
.status {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 99%;
  left: 50%;
  max-width: 250px;
  max-height: 160px;
  padding: 10px;
  box-sizing: border-box;
  z-index: 2;
  background-color: #42d7c8;
  color: #eee;
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
.cooperationWrap {
  overflow-x: hidden;
  .title {
    font-size: 19px;
    font-weight: bold;
    width: 100%;
    text-align: center;
    color: #42d7c8;
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
      background-color: #f3f3f3;
      line-height: 40px;
      min-height: 40px;
      padding: 0 10px;
      width: 100%;
      border-radius: 5px;
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
        background-image: url('/cn/img/joinIn/email.png');
        background-repeat: no-repeat;
        background-size: 20px;
        background-position: 96% center;
      }
    }
    .phone {
      position: relative;
      input {
        width: 60%;
        background-image: url('/cn/img/joinIn/phone.png');
        background-repeat: no-repeat;
        background-size: 20px;
        background-position: 96% center;
        border-radius: 12px 0 0 12px;
      }
      .capCha {
        width: 40%;
        line-height: 40px;
        text-align: center;
        position: absolute;
        background-color: #42d7c8;
        color: #fff;
        top: 0;
        right: 0;
        border-radius: 0 12px 12px 0;
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
    padding-top: 50px;
    .status{
        position: absolute;
        transform: translate(-50%, -50%);
        top: 30%;
        left: 52%;
        max-width: 250px;
        max-height: 160px;
        padding: 10px;
        box-sizing: border-box;
        z-index: 2;
        background-color: #fff;
        color: red;
        box-shadow: 0 0 10px #eee;
        font-size: 14px;
        line-height: 22px;
    }
    .detailjoinFlow{
      width: 33%;
      margin: 0 auto;
      text-align: right;
      margin-left: 28%;
      .title{
        margin-left: 22%;
        font-size: 27px;
        color: #2AD2C9FF;
        margin-top: 40px;
        letter-spacing: 3px;
        text-align: center;
        margin-bottom: 30px;
      }
      .label{
        font-size: 14px;
        display: inline-block;
        width: 80px;
        text-align: right;
        vertical-align: middle;
        margin-right: 10px;
      }
      .inpItem{
        margin-top: 25px;
        input{
          border: 1px solid #2AD2C9FF;
          border-radius: 20px;
          width: 60%;
          height: 30px;
          font-size:12px;
          padding-left: 10px;
        }
      }
      .subimt{
        text-align: center;
        margin-bottom: 50px;
        input{
          width: 100px;
          text-align: center;
          background: #2AD2C9FF;
          border-radius: 15px;
          height: 30px;
          line-height: 30px;
          color: #fff;
          margin-top: 25px;
          margin-left: 26%;
        }
      }
      .phone{
        position: relative;
        .capCha {
          width: 100px;
          line-height: 30px;
          text-align: center;
          position: absolute;
          background-color: #42d7c8;
          color: #fff;
          top: 0;
          right: 0;
          border-radius: 0 15px 15px 0;
          cursor: pointer;
        }
      }
    }
  }
}
</style>

