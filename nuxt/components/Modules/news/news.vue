<template>
   <div>
     <skgmenu />
     <div class="WrapNews">
        <ul class="newList">
          <li v-for="(item,index) in newList" :key="index" @click="openArticle(index,$event)">
            <div v-if="item.image!=null" class="fmImg" :style="{backgroundImage:'url('+ item.image +')'}"></div>
            <div v-else class="fmImg" style="background-image:url('https://file-skg.skg.com/skg.com/20200729/bdbbf719887f4929ac481ea312649a7c.png');background-size:'cover'"></div>
            <div class="newBottom">
              <div class="date">
                <img src="@/static/img/newsIcon.png" alt=""><span class="text">{{item.lastUpdateTime.substring(0,10)}}</span>
              </div>
              <div class="title">{{item.title}}</div>
              <div class="des" v-if="item.imageDesc!=null">{{item.imageDesc}}</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="PCNews">
        <p class="title">新闻中心</p>
        <ul class="newList">
          <li v-for="(item,index) in newList" :key="index" @click="openArticle(index,$event)">
            <div v-if="item.image!=null" class="leftBox" :style="{backgroundImage:'url('+ item.image +')',backgroundSize:'cover' }"></div>
            <div class="leftBox" v-else style="background-image:url('https://file-skg.skg.com/skg.com/20200908/6ae5472a5fa445a0a44b26b02ee4a111.png');background-size:'cover'"></div>
            <div class="rightBox">
              <p class="tit">{{item.title}}</p>
              <p class="des">{{item.imageDesc}}</p>
              <div class="date">{{item.lastUpdateTime.substring(0,10)}}</div>
            </div>
          </li>
        </ul>
      </div>
      <myfooter />
   </div>
</template>
<script>
import skgmenu from '@/components/Modules/menu/menu.vue'
import myfooter from '@/components/Modules/footer/footer.vue'
export default {
  name: 'sooth',
  head() {
    return {
      title: 'SKG新闻中心_品牌资讯_品牌动态-SKG官网',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'SKG新闻中心,品牌资讯,品牌动态。SKG作为时尚的颈椎按摩仪品牌，集研发、生产、销售、培训为一体，主要经营颈椎按摩仪,护颈仪,颈部按摩器,颈椎按摩器等。'
        },
        {
          hid: 'Keywords',
          name: 'Keywords',
          content: 'SKG新闻中心,品牌资讯,品牌动态'
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
      newList:[]
    }
  },
  methods: {
    getNews(){
      const htpOpt = {
        url: `${this.$store.state.testUrl}web/news/list`,
        method: "post",
        params:{
          page: 1,
          size: 1000
        }
      };
      this.$http(htpOpt).then(res => {
        if(res.code==0){
          this.newList = res.page.list;
        }
      })
    },
    openArticle(index,e){
      window.open(`${this.$store.state.urlNew}html/${this.newList[index].fileName}`, '_blank')
    }
  },
  mounted(){
    window.scroll(0,0);
    this.getNews()
  }
}
</script>

<style lang="scss" scoped>
.PCNews{
  display: none;
}
.WrapNews{
  padding-top: 65px;
  ul{
    li{
      border: 1px solid #878787;
      width: 90%;
      margin: 0 auto;
      margin-bottom: 10px;
      padding: 5px;
      .fmImg{
        height: 200px;
        background-size: cover;
        background-repeat: no-repeat;
      }
      .newBottom{
        padding: 5px;
        .date{
          img{
            width: 41px;
            height: 14px;
            margin-right: 5px;
            vertical-align: bottom;
          }
          .text{


            color: #000;
            font-size: 12px;
          }
        }
        .title{
          font-size: 16px;
          font-weight: bold;
          margin-top: 10px;
        }
        .des{
          font-size: 13px;
          line-height: 19px;
          margin-top: 5px;
          color: #878787;
        }
      }

    }

  }
}
@media screen and (min-width: 768px) {
  .WrapNews{
    display: none;
  }
  .PCNews{
    display: block;
    padding-top: 50px;
      .title{
        color: #42d7c8;
        font-size: 25px;
        text-align: center;
        font-weight: bold;
        padding: 70px 0 3px 0;
        letter-spacing: 3px;
      }
      .newList{
        width: 57%;
        margin: 0 auto;
        margin-top: 20px;
        li{
          height: 160px;
          margin-bottom: 10px;
          .leftBox,.rightBox{
            float: left;
            height: 100%;
          }
          .leftBox{
            width: 31%;
            background-size: cover;
            background-position: center center;
          }
          .rightBox{
            width: 65%;
            background: #eee;
            padding: 20px 15px;
            position: relative;
            .tit{
              font-size: 20px;
              font-weight: bold;
            }
            .des{
              padding-top: 15px;
              line-height: 25px;
              font-size: 13px;
              display: -webkit-box;
              overflow: hidden;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            .date{
              font-size: 12px;
              position: absolute;
              bottom: 20px;
            }
          }
        }
      }
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px){
  .PCNews .newList{
    width: 80%;
  }
}
</style>

