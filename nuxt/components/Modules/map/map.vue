<template>
  <div class="maps">
    <!-- <iframe width='100%' height='100%' frameBorder='0' src='http://d.dituzhe.com/ShareMap/077D5B?hideBar=true'> </iframe> -->
    <div class="container" ref="container"></div>
    <div class="shoplst">
        <div class="item" :class="{select:isclick==index}" v-for="(item, index) of shoplist" :key="index" @click="toAddr(item,index)" style="cursor: pointer;" title="点击查看">
            <div class="title">{{item.name}}<span style="font-weight:bold">【点击查看】</span> </div>
            <div class="addr">{{item.address}}</div>
        </div>
    </div>
    <div class="searchHeader">
      <span class="back" @click="back">返回</span>
      <div class="inpBox">
        <input type="text" placeholder="请输入店铺名称或店铺地址" v-model="searchInp" @keyup.enter="changeInp">
        <!-- <img src="@/static/img/search.png" class="search"> -->
        <span class="search" @click="changeInp">搜索</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "maps",
  data() {
    return {
      mapkey: null,
      geolocation:null,
      latitude:null,
      longitude :null,
      city:null,
      gpsStatus:0,
      shoplist:[],
      isclick:-1,
      qq:null,
      searchInp:''
    };
  },
  methods: {
    back(){
      this.$router.go(-1)
    },
    changeInp(){
      this.getShopList(this.searchInp)
      // console.log(this.searchInp);
    },
    init(){
      const that=this
      that.getCurrentPos();
    },
    setMap() {
      this.mapkey = new qq.maps.Map(this.$refs.container, {
        center: new qq.maps.LatLng(this.latitude,this.longitude),
        zoom: 20,
        mapStyleId: "style1"
      });
    },
    getCurrentPos(){
        this.geolocation=new qq.maps.Geolocation("7SPBZ-35G6V-YEMP5-UAJB5-WGEP6-AEFG3", "skg");
        let options={timeout:8000};
        this.geolocation.getLocation(this.showPosition, this.showErr, options);
    },
    showPosition(position){
        // console.log(position);
        this.latitude = position.lat;
        this.longitude = position.lng;
        this.city = position.city;
        this.setMap();
        this.searchInp = this.$route.params.key;
        if(this.$route.params.key){
          this.getShopList(this.$route.params.key)
        }else{
          this.getShopList();
        }


    },
    showErr(){
        if(this.gpsStatus<1){
            // console.log("开始粗略定位");
            this.gpsStatus+=1;
            this.geolocation.getIpLocation(this.showPosition, this.showErr);
        }
        else{
            // console.log("定位失败");
            this.showPosition({lat:22.9323201589,lng:113.2147765160});
        }
    },
    toAddr(item,index){
      this.shoplist.map(item=>item.infoWin.close());
        item.infoWin.open();
        item.infoWin.setPosition(new qq.maps.LatLng(item.lat,item.lng));
        this.mapkey.panTo(new qq.maps.LatLng(item.lat,item.lng))
        this.isclick=index
    },
    setShopMask(data){
      const that=this
        data.map((item, index)=>{
            item.myMask=new qq.maps.Marker({
                position: new qq.maps.LatLng(item.lat,item.lng),
                map:this.mapkey,
                content:index
            })
            item.infoWin=new qq.maps.InfoWindow({map:this.mapkey});
            item.infoWin.setContent(`<div style="padding:10px;background:#fff;">${item.name}<br>${item.address}</div>`);
            item.infoWin.setPosition(new qq.maps.LatLng(item.lat,item.lng));
            qq.maps.event.addListener(item.myMask,'click',function(){
              that.shoplist.map(item=>item.infoWin.close());
              that.mapkey.panTo(new qq.maps.LatLng(item.lat,item.lng));
              item.infoWin.open();
            })
        })
    },
    getShopList(key){
        const opt={
            url:'https://xcx.skg.com/service/miniprogram/counter/nearbyList2',
            // url:'http://10.102.104.151:8090/skg/miniprogram/counter/nearbyList2',
            method:'get',
            params:{
                 lat:this.latitude,
                 lng:this.longitude,
                 page:0,
                 size:1000,
                 key:key
            }
        }
        this.$http(opt)
        .then(res=>{
            if(res.code===0){
                this.shoplist=res.list
            }
        })
        .then(()=>{
            this.setShopMask(this.shoplist)
        })

    }
  },
  mounted() {
    this.init()

  }
};
</script>
<style lang="scss" scoped>
  .maps {
    width: 100%;
    box-sizing: border-box;
    padding-left:30%;
    height: 95vh;
    position: relative;
    .container{
        width:100%;
        height: 100%;
    }
    .searchHeader{
      position: absolute;
      top: 0;
      left: 0;
      height: 50px;
      width: 30%;
      background: #fff;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      padding: 10px 10px;

      .back{
          border: 1px solid #eee;
          padding: 0px 10px;
          height: 25px;
          line-height: 24px;
          text-align: center;
          display: inline-block;
          color: #999;
          cursor: pointer;
          border-radius: 5px;
          position: absolute;
          left: 10px;
          top: 13px;
          &:hover{
              background: #42d7c8;
              color: #fff;
            }
      }
      .inpBox{
        margin-left: 10px;
        width: 70%;
        margin-left: 70px;
        position: relative;
        input{
            height: 30px;
            line-height: 30px;
            border: none;
            border-bottom: 1px solid #eee;
            width: 100%;
            font-size: 15px;
        }
        .search{
            cursor: pointer;
            background: #42d7c8;
            font-size: 14px;
            position: absolute;
            color: #fff;
            right: 2px;
            padding: 3px 10px;
            top: 1px;
            border-radius: 3px;

        }
      }
    }
    .shoplst{
        position: absolute;
        top:50px;
        left:0;
        z-index: 1;
        width: 30%;
        min-width:400px;
        height: 90vh;
        background: #fff;
        overflow-y: scroll;
        text-align: left;
        &::-webkit-scrollbar
        {
            width: 6px;
            height: 6px;

        }
        &::-webkit-scrollbar-track
        {

            border-radius: 3px;

        }
        &::-webkit-scrollbar-thumb
        {
            border-radius: 3px;

            background-color: #555;
        }
        .item{
            padding: 10px;
            border-bottom: 1px solid #aeaeae;
            .title, .addr{
                line-height: 180%;
                color: #545454;
            }
            &.select{
              .title, .addr{
                font-weight: bold;
              }
            }
        }
    }
  }
.maps {
  ::-webkit-input-placeholder { /* WebKit browsers */
    color: #999;
    font-size: 15px;
  }

  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #999;
    font-size: 15px;
  }

  :-ms-input-placeholder { /* Internet Explorer 10+ */
    color: #999;
    font-size: 15px;
  }
}

@media screen and (max-width: 420px) {
  .maps {
    width: 100vw;
    height: 80vh;
    padding-left: 0;
    .container{
        width:100%;
        height: 100%;
        position: relative;
    }
    .shoplst{
       position: relative;
       top: 10px;
       width: 100%;
    }
    .searchHeader{
      width: 100%;
      z-index: 9999999999999999;
      position: absolute;
    }
    .searchHeader .inpBox{
      width: 80%;
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px){
  .maps{
    padding-left: 0;
    .searchHeader{
      width: 45%;
    }
    .searchHeader .inpBox{
      width: 78%;
    }
  }
  .shoplst{
    width: 45% !important;
    min-width: auto !important;
  }
  .container{
    width: 55% !important;
    float: right;
  }
}
</style>

