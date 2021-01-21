import Vue from 'vue'
import Router from 'vue-router'
import wrap from "~/components/Modules/template/home.vue";  //主页
import about from "~/components/Modules/about/about.vue";   // 关于SKG
import store from "~/components/Modules/store/store.vue";    // 查找体验店
import contactUs from "~/components/Modules/contactUs/contactUs.vue";   // 联系我们
import joinUs from "~/components/Modules/joinUs/joinUs.vue";   // 加入我们
import joinUsAll from "~/components/Modules/joinUsAll/joinUsAll.vue";   // 加入我们所有列表
import cooperation from "~/components/Modules/cooperation/cooperation.vue";   // 企业合作
import sooth from "~/components/Modules/sooth/sooth.vue";   // 舒缓原理
import proDetail from "~/components/Modules/proDetail/proDetail.vue";   // 产品详情
import query from "~/components/Modules/query/query.vue";  // 真伪查询
import patent from "~/components/Modules/patent/patent.vue";  // 知识产权
import news from "~/components/Modules/news/news.vue";   // 新闻中心
import map from "~/components/Modules/map/map.vue";   // 地图
import proList from "~/components/Modules/proList/proList.vue";   // 产品列表
import authen from "~/components/Modules/Authen/authen.vue";  //公众号菜单
import terminations from "~/components/Modules/terminations/termination.vue";   // 除名查询
import countermove from "~/components/Modules/countermove/countermove.vue";   // 除名查询
import productList from "~/components/views/productList/index";   // 产品检索
import productDetail from "~/components/views/productList/detail";   // 产品检索-移动详情
import routerData from "~/static/data/routerData";
import axios from 'axios'
import { async } from 'q'
Vue.use(Router)
export async function createRouter() {
  let routes=[
    {
      path: "/",
      name: "home",
      meta: { templateID: 3 },
      component: wrap
    },
    {
      path: "/joinUs",
      name: "joinUs",
      component: joinUs
    },
    {
      path: "/authen",
      name: "authen",
      component: authen
    },
    {
      path: "/terminations",
      name: "terminations",
      component: terminations
    },
    {
      path: "/map/:key?",
      name: "map",
      component: map
    },
    {
      path: "/joinUsAll",
      name: "joinUsAll",
      component: joinUsAll
    },
    {
      path: '/countermove',
      name: 'countermove',
      component: countermove
    },
    {
      path: "/contactUs",
      name: "contactUs",
      component: contactUs
    },
    {
      path: "/cooperation",
      name: "cooperation",
      component: cooperation
    },
    {
      path: "/news",
      name: "news",
      component: news
    },
    {
      path: "/about",
      name: "about",
      component: about
    },
    {
      path: "/store",
      name: "store",
      meta: { templateID: 13 },
      component: store
    },
    {
      path: "/sooth",
      name: "sooth",
      component: sooth
    },
    {
      path: "/proList",
      name: "proList",
      component: proList
    },
    {
      path: "/query",
      name: "query",
      component: query
    },
    {
      path: "/patent",
      name: "patent",
      component: patent
    },
    {
      path: "/proDetail/:id",
      name: "proDetail",
      component: proDetail
    },
    {
      path: '/productList',
      name: 'productList',
      component: productList
    },
    {
      path: '/productDetail',
      name: 'productDetail',
      component: productDetail
    }
  ]
  let other = [
    {
      path: '/skgTips',
      name: 'skgTips',
      component: () => import('@/components/views/skgTips.vue')
    },
    {
      path: '/product/class/:class',
      name: 'product4',
      meta: { templateID: 13 },
      component: wrap
    },
    {
      path: '/offline/further/:id', //offline/further/19
      name: 'product5',
      meta: { templateID: 13 },
      component: wrap
    }
  ]
  let ss = await importMenu2()
  let router = new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [...routes]
    // routes: ss.length > 0 ? [...ss, ...other] : [...aa]
  })
  return router
}

function importMenu(listdata) {
  let data = []
  listdata.map((item) => {
    if (item.children == undefined) {
      item.children = []
    }
  })
  for (let item of listdata) {
    let { path, title, templateID, children, page } = item
    if (item.children.length > 1) {
      importMenu(item.children)
    }
    let tmp = {
      path: path,
      name: title,
      children: importMenu(children),
      meta: {
        templateID: templateID
      },
      component: wrap
    }
    if (children.length < 1) delete tmp.children
    data.push(tmp)
  }
  return data
}

async function importMenu2() {
  // const htpOpt = {
  //   url:
  //     process.env.NODE_ENV === 'production'? 'https://test.skg.com/skg/web/menu/list':'https://test.skg.com/skg/web/menu/list',

  //   method: 'get'
  // }
  // const res = await axios(htpOpt)
  // // debugger
  // let temp = JSON.parse(decodeURIComponent(res.data.data[0].menuInfo))
  // //console.log([...importMenu(temp), { path: '*', redirect: '/' }])
  // return [...importMenu(temp), { path: '*', redirect: '/' }]
}
