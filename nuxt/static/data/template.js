import swiperdata from "~/static/data/swiperdata";
import swiperdata_news from "~/static/data/swiperdata_news";
import swiper3data from "~/static/data/swiper3data";
import swiper3data_2 from "~/static/data/swiper3data_2";
import swiper4data from "~/static/data/swiper4data";
import quickMenuData from "~/static/data/quickMenuData";
import adsBlkdata from "~/static/data/adsBlkdata";
import innerMain from "~/static/data/innerMain";
import videoList from "~/static/data/videoList";
import htmlEdit from "~/static/data/htmlEdit";
import videoBlk from "~/static/data/videoBlk";
import proList from "~/static/data/proList";
// import swiper5data from "~/static/data/swiper5data";
import prodetaildata from "~/static/data/prodetaildata";
// import prodetail from "~/static/data/prodetail";
import swiperdata_newsList from "~/static/data/swiperdata_newsList";
const maindata = [
  {
    templateID: 1,//id=3
    style: "full",
    data: [
      {
        name: "quickMenu",
        data: quickMenuData
      },
      {
        name: "swiper2",
        // data: {
        //   setting: {
        //     row: 3,
        //     col: null
        //   },
        data: swiperdata
        // }
      },

      {
        name: "swiperNews",
        data: swiperdata_news
      },
      {
        name: "swiper3",
        data: swiper3data
      },
      {
        name: "swiper4",
        data: swiper4data
      },
      {
        name: "swiper3",
        data: swiper3data_2
      }
    ]
  },
  {
    templateID: 2,//综合
    style: "inner",
    data: [
      {
        name: "htmlEdit",
        data: innerMain
      },
      {
        name: "adsBlk",
        data: adsBlkdata
      }
    ]
  },
  {
    templateID: 3,//videolist
    style: "inner", 
    data: [
      {
        name: "videoList",
        data: videoList
      }
    ]
  },
  {
    templateID: 4, //infodetail
    style: "inner",
    data: [
      {
        name: "htmlEdit",
        data: htmlEdit
      }
    ]
  },
  {
    templateID: 5, //videodetail
    style: "inner",
    data: [
      {
        name: "videoDetail",
        data: videoBlk
      }
    ]
  },
  {
    templateID: 6, //pro
    style: "full",
    data: [
      {
        name: "quickMenu",
        data: quickMenuData
      },
      {
        name: "swiper6",
        data: swiperdata
      },
      {
        name: "swiper2",
        data: swiperdata
      },
      {
        name: "swiper6",
        data: swiperdata
      }
    ]
  },
  {
    templateID: 7, //prolist
    style: "full",
    data: [
      {
        name: "banner",
        data: null
      },
      {
        name: "swiper7",
        data: proList
      }
    ]
  },
  {
    templateID: 8, //prodetail
    style: "inner",
    data: [
      {
        name: "swiper5",
        data: prodetaildata.photo
      },
      {
        name: "detailbanner",
        data: null
      },
      {
        name: "prodesc",
        data: prodetaildata.desc
      },
      {
        name: "htmlEdit",
        data: prodetaildata.detail
      }
    ]
  },
  {
    templateID: 9, //infoList
    style: "full",
    data: [
      {
        name: "swiperNewsList",
        data: swiperdata_newsList
      }
    ]
  }
];

export default maindata;
