const axios = require('axios')
const urlApi =
  process.env.NODE_ENV === 'production'
    ? 'https://cn.skg.com/service/'
    : process.env.NODE_ENV === 'development'
    ? 'https://test.skg.com/skg/'
    : 'https://cn.skg.com/service/'
// const urlApi = 'https://cn.skg.com/service/';
export const state = () => ({
  SM_controller: null,
  scollerToMc: null,
  tipsStatus: true,
  menudata: null,
  listdata: null,
  clickFlag:true,
  imgurl: '',
  queryUrl: "https://zhishi.skg.com/web.kb/ext/shopcode/queryByCode",
  // url: "https://10.101.103.186:8080/",//调试环境
  urlNew:
    process.env.NODE_ENV === 'production'
      ? 'https://cn.skg.com/'
      : process.env.NODE_ENV === 'development'
      ? 'https://test.skg.com/'
      : 'https://cn.skg.com/',
  // urlNew:'https://cn.skg.com/',
  imgUrl: 'http://ec.skg.com/',
  testUrl: urlApi,
  productFlag:false,
  productParams:'',
  neckList: [],
  eyeList: [],
  bodyList: [],
  loading: false
})
export const mutations = {
  setProductParams(state, object) {
    state.productParams = object
  },
  setProductFlag(state, object) {
    state.productFlag = object
  },
  setClickFlag(state, object) {
    state.clickFlag = object
  },
  updateSMcontroller(state, object) {
    state.SM_controller = object
  },
  UpdateScollerToMc(state, myname) {
    state.scollerToMc = myname
  },
  UpdateTip(state, status) {
    state.tipsStatus = status
  },
  UPDATE_MENUDATA: (state, arry) => {
    state.menudata = arry
  },
  UPDATE_TEMPDATA: (state, arry) => {
    state.listdata = arry
  },
  updateNeck: (state, list) => {
    state.neckList = list
  },
  updateEye: (state, list) => {
    state.eyeList = list
  },
  updateBody: (state, list) => {
    state.bodyList = list
  },
  setLoading: (state, loading) => {
    state.loading = loading
  }
}
export const actions = {
  async nuxtServerInit({ commit }, { route }) {
    // debugger
    const temp = await Promise.all([
      axios.get(urlApi + 'web/menu/list'),
      axios.get(urlApi + 'web/temp/list')
    ])

    let aa = JSON.parse(decodeURIComponent(temp[0].data.data[0].menuInfo))
    let bb = temp[1].data.data
    bb.map((item) => {
      item.tempInfo = JSON.parse(decodeURIComponent(item.tempInfo))
    })
    // debugger
    commit('UPDATE_MENUDATA', aa)
    commit('UPDATE_TEMPDATA', bb)
  },
  async getRightList({ commit } ) {
    // debugger
    const result = await axios.post(urlApi + 'web/rights/list?page=1&limit=100',{ page: 1,
      limit: 100 } )
    let neckList = result.data && result.data.page.list.filter(item => item.className === 'neck')
    let eyeList = result.data && result.data.page.list.filter(item => item.className === 'eye')
    let bodyList = result.data && result.data.page.list.filter(item => item.className === 'body')
    commit('updateNeck', neckList)
    commit('updateEye', eyeList)
    commit('updateBody', bodyList)
    return result.data.page.list
  }
}
