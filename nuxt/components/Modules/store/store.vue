<template>
  <div>
    <skgMenu />
    <div class="storePC">
      <div class="searchStore">
        <p>官方授权网点认证</p>
        <input type="text" id="pcStoreNum" placeholder="请输入授权号" v-model="pcStoreNum" style="width: 300px;margin-top: 40px;font-family: DFPGB_Y5;height: 34px; border: 1px solid #42c8c8;border-radius: 20px;padding-left: 20px;"/>
        <div class="authen" @click="pcAuthen" v-text="authenTxt" style="    width: 149px;height: 36px;background: #00b4aa;color: #fff;font-family: DFPGB_Y5;font-size: 16px;line-height: 36px;text-align: center;border-radius: 18px; margin: 20px 0 50px;">立即认证</div>
		<div class="searchResult">
			<div class="title">查询结果</div>
			<div class="fail" v-text="resTit">
				很抱歉，暂无该店铺信息
			</div>
      <img :src="searchSuccessImg" alt="" class="pcSearchSuccessImg">
			<span class="fail_2" v-text="resCont">
				请核对输入的所属平台和店铺名称是否正确
			</span>
		</div>
      </div>

      <div class="storePhoto">
        <img src="@/static/img/wrapTy.png" alt />
      </div>
      <div class="searchStore" style="background:#eee;padding-top:0px;padding-bottom:30px">
        <div id="pcStoreName">
          <input type="text" placeholder="搜索体验店" v-model="searchVal"/>
          <span class="goSearch" @click="clickItem(searchVal)">搜索</span>
        </div>
        <p class="toMoreStore">
          <nuxt-link to="/map">
          查看所有体验店
          </nuxt-link>
          <span style="font-size: 20px;">&gt;</span>
        </p>
      </div>
      <div class="nearStore">
		  <div class="nearTitle">附近体验店</div>
		  <ul>
			  <li v-for="(item,index) in storeData" :key="index" @click="clickItem(item.name)" style="cursor: pointer;">
				  <p class="name">{{item.name}}</p>
				  <p class="address" style="font-size:13px;line-height:17px">{{item.address}}</p>
			  </li>
		  </ul>
	  </div>
    </div>
    <div class="storeWrap">
      <div class="searchStore">
        <p>官方授权网点认证</p>
        <input type="text" id="storeNum" placeholder="请输入授权号" v-model="appStoreNum" />
        <div class="searchPass">
          <div class="searchSuccess" v-text="resTit">skg旗舰店</div>
          <img :src="searchSuccessImg" alt="" class="searchSuccessImg">
          <span class="searchPassTxt" v-text="resCont">已通过认证</span>
        </div>
        <div class="authen" @click="authen" v-text="authenTxt">立即认证</div>
      </div>
      <div class="storePhoto">
        <img :src="storePhoto" alt />
      </div>
      <div class="searchStore">
        <p>查找体验店</p>
        <input type="text" id="storeName" placeholder="搜索体验店" />
        <p class="toMoreStore">
          <nuxt-link to="/map">
            查看所有体验店
          </nuxt-link>
          <span style="font-size: 20px;">&gt;</span>
        </p>
      </div>
      <div class="infoBox">
        <div class="storeInfo" v-for="(item,index) in storeData" :key="index" @click="clickItem(item.name)">
          <p class="storeName">{{item.name}}</p>
          <div class="locationBox">
            <span class="storeLocation">{{item.address}}</span>
            <div class="distance">
              <span>{{item.distance}}km</span>
              <img :src="blueTo" alt class="blueTo" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Foot />
  </div>
</template>


<script>
import skgMenu from '@/components/Modules/menu/menu.vue'
import Foot from '@/components/Modules/footer/footer.vue'
export default {
  name: 'Store',
  head() {
    return {
      title: 'SKG购买渠道_官方授权网点认证_线下体验店-SKG官网',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'SKG购买渠道,官方授权网点认证,线下体验店。SKG作为时尚的颈椎按摩仪品牌，集研发、生产、销售、培训为一体，主要经营颈椎按摩仪,护颈仪,颈部按摩器,颈椎按摩器等。'
        },
        {
          hid: 'Keywords',
          name: 'Keywords',
          content: 'SKG购买渠道,官方授权网点认证,线下体验店'
        }
      ]
    }
  },
  components: {
    skgMenu,
    Foot
  },
  data() {
    return {
      storePhoto:
        'https://file-skg.skg.com/skg.com/20201031/8b6cd2e21b9f4ca4bdbc14323bfeda28.jpg',
      toMore: require('@/static/img/grayTo.png'),
      blueTo: require('@/static/img/blueTo.png'),
      storeData: [
        // {
        //   name: '机场一店（深圳宝安国际机场）',
        //   address: '深圳宝安国际机场GTC编号GTC-217',
        //   distance: '6.66km'
        // },
        // {
        //   name: '深圳莱福仕',
        //   address: '深圳市南山区南海大道2163号来福士广场B1层77号华硕智汇',
        //   distance: '0.02km'
        // },
        // {
        //   name: '深圳莱福仕',
        //   address: '深圳市南山区南海大道2163号来福士广场B1层77号华硕智汇',
        //   distance: '8.88km'
        // }
      ],
      geolocation:null,
      searchVal:'',
      gpsStatus:0,
      appStoreNum: "",
      pcStoreNum: "",
      resTit: "skg旗舰店",
      resCont: "已通过认证",
      pcAuthenTit: "很抱歉，暂无该店铺信息",
      pcAuthenCont: "请核对输入的所属平台和店铺名称是否正确",
      authenTxt: "立即认证",
      searchSuccessImg: "https://file-skg.skg.com/skg.com/20200805/e6b52e86b96d4a04b408e4b4426011c4.png",
    }
  },
  methods: {
    clickItem(name){
      this.$router.push('/map/'+name)
    },
    getCurrentPos(){
        this.geolocation=new qq.maps.Geolocation("7SPBZ-35G6V-YEMP5-UAJB5-WGEP6-AEFG3", "skg");
        let options={timeout:8000};
        this.geolocation.getLocation(this.showPosition, this.showErr, options);
    },
    showPosition(position){
        console.log(position);
        this.latitude = position.lat;
        this.longitude = position.lng;
        this.city = position.city;
        this.getShopList();
    },
    showErr(){
        if(this.gpsStatus<1){
            console.log("开始定位");
            this.gpsStatus+=1;
            this.geolocation.getIpLocation(this.showPosition, this.showErr);
        }
        else{
            console.log("定位失败");
            this.showPosition({lat:22.9323201589,lng:113.2147765160});
        }
    },
    getShopList(){
          const opt={
              url:'https://xcx.skg.com/service/miniprogram/counter/nearbyList2',
              // url:'http://10.102.104.151:8090/skg/miniprogram/counter/nearbyList2',
              method:'get',
              params:{
                  lat:this.latitude,
                  lng:this.longitude,
                  page:1,
                  size:6,
                  // key:'佛山'
              }
          }
          this.$http(opt)
          .then(res=>{
              if(res.code===0){
                  // res.list.map((item,index)=>{
                  //     item.distance = String(item.distance*1000).substring(0,3);
                  // })
                  this.storeData=res.list
              }
          })
          .then(()=>{
              this.setShopMask(this.storeData)
          })

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
     getRes(code){
    },
    openArticle(index,e){
      window.location.href = `${this.$store.state.urlNew}html/${this.newList[index].fileName}`
    },
    authen(){
      const htpOpt = {
        url: `${this.$store.state.queryUrl}?code=${this.appStoreNum}`,
        method: "GET",
      };
      this.$http(htpOpt).then(res => {
        if(this.authenTxt === "立即认证"){

            document.getElementById("storeNum").style.display = "none"
            this.authenTxt = "重新认证"
            document.getElementsByClassName("searchPass")[0].style.display = "block"
          if(!!res.data){
            this.resTit = "skg旗舰店"
            this.resCont = "已通过认证"
            document.getElementsByClassName("searchSuccessImg")[0].style.display = "inline-block"
          } else {
            this.resTit = "很抱歉，暂无该店铺信息"
            this.resCont = "请核对输入的所属平台和店铺名称是否正确"
            document.getElementsByClassName("searchSuccessImg")[0].style.display = "none"
          }
        } else {
            document.getElementById("storeNum").style.display = "block"
            document.getElementsByClassName("searchPass")[0].style.display = "none"
            this.authenTxt = "立即认证"
        }
      })
    },
    pcAuthen(){
     const htpOpt = {
        url: `${this.$store.state.queryUrl}?code=${this.appStoreNum}`,
        method: "GET",
      };
      this.$http(htpOpt).then(res => {
          document.getElementsByClassName("searchResult")[0].style.display = "block"
        if(!!res.data){
          this.resTit = res.data.ptlj
          console.log(this.resTit,res.data.ptlj)
          this.resCont = "已通过认证"
          document.getElementsByClassName("pcSearchSuccessImg")[0].style.display = "inline-block"
        } else {
          this.resTit = "很抱歉，暂无该店铺信息"
          this.resCont = "请核对输入的所属平台和店铺名称是否正确"
          document.getElementsByClassName("pcSearchSuccessImg")[0].style.display = "none"
        }
      })
    }
  },
  watch:{
    appStoreNum(newData, oldData){
      this.pcStoreNum = this.appStoreNum
    },
    pcStoreNum(newData, oldData){
       this.appStoreNum = this.pcStoreNum
    }
  },
  mounted(){
    window.scroll(0,0);
    this.getCurrentPos();
  },
}
</script>


<style lang="scss" scoped>
.storePC {
  display: none;
}
.storeWrap {
  padding-top: 50px;
  overflow-x: hidden;
  .searchStore {
    width: 80vw;
    height: 60vw;
    margin-left: 10vw;
    font-family: DFPGB_Y9;
    font-size: 24px;
    text-align: center;
    padding-top: 40px;
    color: #42d7c8;
    display: flex;
    flex-direction: column;
    align-items: center;
    .searchPass {
      display: none;
      margin-top: 20px;
      .searchSuccess {
        color: #000;
      }
      .searchPassTxt {
        font-size: 12px;
        font-family: DFPGB_Y5;
        color: #000;
      }
      .searchSuccessImg{
        width: 12px;
        margin-top: 3px;
      }
    }
  }
  .authen {
    width: 149px;
    height: 36px;
    background: rgba(42, 210, 201, 1);
    color: #fff;
    font-family: DFPGB_Y5;
    font-size: 16px;
    line-height: 36px;
    text-align: center;
    border-radius: 18px;
    margin-top: 20px;
  }
  #storeNum,
  #storeName {
    width: 300px;
    margin-top: 10vw;
    font-family: DFPGB_Y5;
    height: 34px;
    border: 1px solid rgba(66, 200, 200, 1);
    border-radius: 20px;
    padding-left: 20px;
    &::placeholder {
      color: rgba(176, 176, 176, 1);
      font-family: DFPGB_Y5;
    }
  }
  .storePhoto {
    width: 100vw;
    img {
      display: block;
      width: 100%;
    }
  }
  .toMoreStore {
    font-family: DFPGB_Y5;
    font-size: 16px;
    color: #000;
    margin-top: 20px;
    img {
      width: 5px;
    }
  }
  .infoBox {
    width: 90vw;
    margin-left: 5vw;
    padding: 0 0 20px 0;
    .storeInfo {
      width: 90vw;
      height: 100px;
      margin-bottom: 10px;
      background: #f9f9fb;
      padding-left: 20px;
    }
    .storeName {
      font-family: DFPGB_Y5;
      font-size: 16px;
      color: #626164;
      padding-top: 12px;
      line-height: 45px;
    }
    .locationBox {
      overflow: hidden;
      .storeLocation {
        display: block;
        width: 200px;
        color: #a6a6a8;
        height: 40px;
        float: left;
      }
      .distance {
        width: 70px;
        color: #42d7c8;
        height: 20px;
        text-align: right;
        float: right;
        margin-right: 30px;
        .blueTo {
          width: 5px;
          height: 5px;
          float: right;
          margin: 7px 0 0 2px;
        }
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .storeWrap {
    display: none;
  }
  .storePC {
    display: block;
    padding-top: 66px;
    overflow-x: hidden;
	.nearStore{
		margin-top: 30px;
		width: 65vw;
		margin:0 auto;
		margin-bottom: 30px;
		.nearTitle{
			font-size: 20px;
			font-weight: bold;
			text-align: center;
			height: 40px;
			border-bottom: 1px solid #000;
			color: #42d7c8;
		}
		ul{
			font-size: 0;
			li{
				display: inline-block;
				width: 32%;
        margin-right: 2%;
				margin-top: 35px;
				font-size: 14px;
				.name{
					color: #666;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          height: 36px;
				}
				.address{
					color: #aaaaaa;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          height: 36px;
				}
        &:nth-child(3n){
          margin-right: 0;
        }
      }

		}
	}
    .searchStore {
      width: 65vw;
      margin: 0 auto;
      /* margin-left: 10vw; */
      font-family: DFPGB_Y9;
      font-size: 24px;
      text-align: center;
      padding-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #42d7c8;
	    margin-bottom: 30px;

    }
	.searchResult{
		padding: 20px 0;
		width: 100%;
    display: none;
		background: #eee;
		text-align: center;
		margin-top: 20px;
		.title{
			font-size: 20px;
			font-weight: normal;
		}
		.fail{
			font-size: 24px;
			padding-top: 20px;
		}
		.fail_2{
			font-size: 15px;
      font-family: DFPGB_Y5;
			padding-top: 10px;
		}
    .pcSearchSuccessImg {
      width: 12px;
      margin-top: 9px;
    }
	}
    .authen {
      width: 149px;
      height: 36px;
      background: #00B4AAFF;
      color: #fff;
      font-family: DFPGB_Y5;
      font-size: 16px;
      cursor: pointer;
      line-height: 36px;
      text-align: center;
      border-radius: 18px;
      margin: 20px 0 50px 0;
    }
    #pcStoreNum,
    #pcStoreName {
      width: 300px;
      margin-top: 40px;
      font-family: DFPGB_Y5;
      position: relative;
      input{
        height: 34px;
        border: 1px solid rgba(66, 200, 200, 1);
        border-radius: 20px;
        padding-left: 20px;
        width: 100%;
        &::placeholder {
          color: rgba(176, 176, 176, 1);
          font-family: DFPGB_Y5;
        }
      }
      .goSearch{
          position: absolute;
          right: 15px;
          top: 9px;
          color: #42d7c8;
          font-size: 15px;
          cursor: pointer;
      }
    }
    .storePhoto {
      width: 65vw;
	  margin: 0 auto;
      img {
        display: block;
        width: 100%;
      }
    }
    .toMoreStore {
      font-family: DFPGB_Y5;
      font-size: 16px;
      color: #000;
      margin-top: 20px;
      img {
        width: 5px;
      }
    }
    .infoBox {
      width: 90vw;
      margin-left: 5vw;
      padding: 0 0 20px 0;
      .storeInfo {
        width: 90vw;
        height: 100px;
        margin-bottom: 10px;
        background: #f9f9fb;
        padding-left: 20px;
      }
      .storeName {
        font-family: DFPGB_Y5;
        font-size: 16px;
        color: #626164;
        padding-top: 12px;
        line-height: 45px;
      }
      .locationBox {
        overflow: hidden;
        .storeLocation {
          display: block;
          width: 200px;
          color: #a6a6a8;
          height: 40px;
          float: left;
        }
        .distance {
          width: 70px;
          color: #42d7c8;
          height: 20px;
          text-align: right;
          float: right;
          margin-right: 30px;
          .blueTo {
            width: 5px;
            height: 5px;
            float: right;
            margin: 7px 0 0 2px;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px){
  .storePC .nearStore,.storePC .searchStore,.storePC .storePhoto{
      width: 80vw;
  }
}
</style>
