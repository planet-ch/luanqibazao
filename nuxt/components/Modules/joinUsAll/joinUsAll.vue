<template>
  <div>
    <skgmenu/>
    <div class="joinUsAll">
      <div id="img"></div>
      <ul id="joinList">
        <p class="title">所有职位</p>
        <div class="tab"><span class="fl">职位名称</span><span class="fr">城市</span></div>
        <li v-for="(item,index) in zpList" :key="index"><span class="fl">{{item.positionName}}</span><span class="fr">{{item.positionCity}}</span></li>
      </ul>
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
  name: "joinUsAll",
  components: {
    skgmenu,
    myfooter,
    topMenu,
  },
  computed:{
    
  },
  data() {
    return {
     zpList:[]
    }
  },
  props:{

  },
  methods:{
    getZP(){
      const htpOpt = {
        url: `${this.$store.state.testUrl}web/position/listByModifyTime`,
        // url:'http://10.102.104.151:8080/skg/web/position/listByModifyTime',
        method: "get",
        params:{
          page: 1,
          size: 1000
        }
      };
      this.$http(htpOpt).then(res => {
        if(res.code==0){
          this.zpList = res.positionList.records;
        }
      })
    },
  },
  mounted(){
    this.getZP();
  }  
};
</script>

<style lang="scss" scoped>
.joinUsAll{
  padding-top: 50px;
  overflow-x: hidden;
  #img{
    width: 100%;
    height: 300px;
    background: url('https://file-skg.skg.com/skg.com/20200804/bd1883b4ae264ffab1ca3731c4577784.png') no-repeat no-repeat;
    background-size: cover;
    background-position: center;
  }
  #joinList{
    width: 40%;
    padding: 20px 30px;
    box-shadow: 0 0 10px #eee;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    .title{
      font-size: 18px;
      color: #000;
      font-weight: bold;
    }
    .tab{
      margin-top:10px;
      font-size: 18px;
      color: #999999FF;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #999999FF;
    }
    li{
      height: 45px;
      line-height: 45px;
      font-size: 16px; 
    }
  }
}
.fr{
  float: right;
} 
.fl{
  float: left;
}
@media screen and (max-width: 820px){
  .joinUsAll #joinList{
      width: 96%;
      padding: 10px 20px;
      box-shadow: 0 0 10px #eee;
      border-radius: 10px;
      margin: 0 auto;
      margin-top: 20px;
      margin-bottom: 20px;     
  }
  .joinUsAll #img{
    height: 200px;
  }
}
</style>

