<template>
  <div>
    <skgmenu/>
    <div class="joinUsPC">
      <div class="joinContent">
            <p class="title">
              加入我们
            </p>
            <div class="joinBoxS">
              <ul class="joinbox">
                <div class="heard"><span class="fl">社会招聘</span><span class="fr" @click="gotoMore">更多</span></div>
                <div class="joinList">
                  <p class="infoTitle"><span class="fl">职位名称</span> <span class="fr">城市</span></p>
                  <li v-for="(item,index) in zpList" :key="index">
                    <span class="fl">{{item.positionName}}</span><span class="fr">{{item.positionCity}}</span>
                  </li>
                </div>
              </ul>
              <ul class="joinbox">
                <div class="heard"><span class="fl">最新岗位</span><span class="fr"  @click="gotoMore">更多</span></div>
                <div class="joinList">
                  <p class="infoTitle"><span class="fl">职位名称</span> <span class="fr">城市</span></p>
                  <li v-for="(item,index) in zpnewList" :key="index">
                    <span class="fl">{{item.positionName}}</span><span class="fr">{{item.positionCity}}</span>
                  </li>
                </div>
              </ul>
            </div>
      </div>
    </div>
    <div class="joinUswrap">
        <div class="content">
          <p class="title">加入我们</p>
          <img src="@/static/img/contactUs.png" class="contactUsIMG">
          <p class="titleS">社招职位</p>
          <div class="szBox">
            <p class="infoTitle"><span class="fl">职位名称</span> <span class="fr">城市</span></p>
            <ul class="szList">
              <li v-for="(item,index) in zpList" :key="index">
                <span class="fl">{{item.positionName}}</span><span class="fr">{{item.positionCity}}</span>
              </li>
            </ul>
          </div>
          <div class="more" @click="gotoMore">查看更多 &gt;</div>
          <p class="titleS">最新职位</p>
          <div class="szBox" style="margin-bottom:30px">
            <p class="infoTitle"><span class="fl">职位名称</span> <span class="fr">城市</span></p>
            <ul class="szList">
              <li v-for="(item,index) in zpnewList" :key="index">
                <span class="fl">{{item.positionName}}</span><span class="fr">{{item.positionCity}}</span>
              </li>
            </ul>
            <div class="more" @click="gotoMore">查看更多 &gt;</div>
          </div>
          <ul>
            <li></li>
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
export default {
  name: "join",
  head() {
    return {
      title: 'SKG招聘_SKG社会招聘_在招岗位-SKG官网',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'SKG招聘,SKG社会招聘,在招岗位。SKG作为时尚的颈椎按摩仪品牌，集研发、生产、销售、培训为一体，主要经营颈椎按摩仪,护颈仪,颈部按摩器,颈椎按摩器等。'
        },
        {
          hid: 'Keywords',
          name: 'Keywords',
          content: 'SKG招聘,SKG社会招聘,在招岗位'
        }
      ]
    }
  },
  components: {
    skgmenu,
    myfooter,
    topMenu,
  },
  computed:{

  },
  data() {
    return {
     zpList:[],
     zpnewList:[]
    }
  },
  props:{

  },
  methods:{
    gotoMore(){
      this.$router.push('/joinUsAll')
    },
    getZP(){
      const htpOpt = {
        url: `${this.$store.state.testUrl}web/position/list`,
        // url:'http://10.102.104.151:8080/skg/web/position/list',
        method: "get",
        params:{
          page: 1,
          size: 3
        }
      };
      this.$http(htpOpt).then(res => {
        if(res.code==0){
          this.zpList = res.page.records;
        }
      })
    },
    getgetZPNew(){
      const htpOpt = {
        url: `${this.$store.state.testUrl}web/position/listByModifyTime`,
        // url:'http://10.102.104.151:8080/skg/web/position/listByModifyTime',
        method: "get",
        params:{
          page: 1,
          size: 3
        }
      };
      this.$http(htpOpt).then(res => {
        if(res.code==0){
          this.zpnewList = res.positionList.records;
        }
      })
    },
  },
  mounted(){
    this.getZP();
    this.getgetZPNew();
  }
};
</script>

<style lang="scss" scoped>
.joinUsPC{
  display: none;
}
.joinUswrap{
  padding-top: 70px;
  overflow-x: hidden;
  width: 100%;
  .content {
    .title{
      text-align: center;
      font-size: 23px;
      font-weight: bold;
      color: #42d7c8;
    }
    .more{
      font-size: 15px;
      color: #666;
      text-align: center;
      margin-top: 5px;
    }
    .contactUsIMG{
      width: 90%;
      display: block;
      margin: 0 auto;
      margin-top: 20px;
    }
    .titleS{
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      color: #42d7c8;
      margin-top: 25px;
    }

    .szBox{
      width: 80%;
      margin: 0 auto;
      margin-top: 10px;
      .infoTitle{
        height: 35px;
        border-bottom: 1px solid #000;
        span{
          font-size: 14px;
          color: #555;
        }
      }
      .szList{
        li{
          line-height: 45px;
          height: 45px;
          font-size: 14px;
          font-weight: bold;
        }
      }
    }
  }
}
.fr{
  float: right;
}
.fl{
  float: left;
}
@media screen and (min-width: 768px) {
  .joinUswrap{
    display: none
  }
  .joinUsPC{
    display: block;
    .joinContent{
      width: 100%;
      height: 100vh;
      background-image: url('https://file-skg.skg.com/skg.com/20200731/c33fd2336a0f48269aa9f55aedfe97c8.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      padding-top: 25vh;
      .title{
        font-size: 35px;
        font-weight: bold;
        color: #42D7C8FF;
        text-align: center;
        letter-spacing: 3px;

      }
    }
    .joinBoxS{
      width: 60%;
      margin: 0 auto;
      margin-top: 5vh;
      .joinbox{
        border-radius: 10px;
        box-shadow: 0 0 3px #666;
        width: 49%;
        float: left;
        &:first-child{
          margin-right: 2%;
        }
        .heard{
          background: #42D7C8FF;
          height: 50px;
          line-height: 50px;
          padding:0 30px;
          border-top-left-radius:10px;
          border-top-right-radius:10px;

          .fl{
            font-weight: bold;
            color: #000000FF;
            font-size: 16px;
          }
          .fr{
            font-size: 13px;
            color: #000000FF;
            cursor: pointer;
          }
        }
        .joinList{
          background: #fff;
          padding: 0 30px;
          padding-bottom: 10px;
          border-bottom-left-radius:10px;
          border-bottom-right-radius:10px;
          padding-top: 10px;
        }
         li{
          line-height: 45px;
          height: 45px;
          font-size: 13px;
          color: #000000FF;
        }
        .infoTitle{
            height: 45px;
            /* line-height: 55px; */
            border-bottom: 1px solid rgba(153,153,153,1);
            margin-bottom: 10px;
            padding-bottom: 10px;
            padding-top: 10px;
          span{
            font-size: 14px;
            color: #999999FF;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px){
  .joinUsPC .joinContent{
        height: 60vh;
        padding-top: 15vh;
  }
}
</style>

