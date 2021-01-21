const path = require('path')
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  env: {
    NODE_ENV: process.env.NODE_ENV
  },
  head: {
    title:'『SKG官网』畅销巴黎·纽约·首尔，全球1500万年轻人的选择！颈椎按摩仪|护颈仪|颈部按摩器-招商合作',
    meta: [
      { charset: 'utf-8' },
      {
        name: "baidu-site-verification",
        content: "code-hOzVjvDlQH"
      },
      {
        name: 'viewport',
        content:
          'initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width'
      },
      {
        hid: 'Keywords',
        name: 'Keywords',
        content: "颈椎按摩仪,护颈仪,颈部按摩器,颈椎按摩器,SKG,SKG官网" },
      {
        hid: 'description',
        name: 'description',
        content: 'SKG作为时尚的颈椎按摩仪品牌，集研发、生产、销售、培训为一体的专业大型国际企业，主要经营颈椎按摩仪,护颈仪,颈部按摩器,颈椎按摩器等，以超时尚设计理念，启发全球用户追求智能健康生活方式'
      },
      { 'http-equiv': 'Pragma', content: 'no-cache' },
      { 'http-equiv': 'Cache-Control', content: 'no-cache' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    script: [
      {
        charset: 'utf-8',
        src: 'https://map.qq.com/api/js?v=2.exp&key=7SPBZ-35G6V-YEMP5-UAJB5-WGEP6-AEFG3',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'https://3gimg.qq.com/lightmap/api_v2/2/4/127/main.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'https://3gimg.qq.com/lightmap/components/geolocation/geolocation.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/baidu.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/rem.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/hm.baidu.js',
        body: true
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  // loading: '~/components/Modules/loading/loading.vue',
  css: [
    { src: '~/style/common.scss' },
    { src:'element-ui/lib/theme-chalk/index.css'},
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/http',
    '~/plugins/axios',
    '~/plugins/vant',
    { src: '~/plugins/vue-awesome-swiper', ssr: false },
    { src: '~/plugins/ksvuescrollmagic', ssr: false },
    { src: '~/plugins/qqmap', ssr: false },
    { src:'~plugins/element-ui',ssr: false},
    { src: '~/plugins/swiperStar', ssr: false },
    { src: '~/plugins/gsap', ssr: false },
    '~/plugins/vue-video-player'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/router'],

  axios: {},

  build: {
    vendor: ['element-ui'],
    analyze: false,
    extractCSS: { allChunks: true },
    extend(config, ctx) {
      config.devtool = 'nosources-source-map'
    },
    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'vant',
            // 目前在 nuxt 中无法按需引入样式，因此采用手动引入的方式
            style: false
          },
          'vant'
        ]
      ]
    }
  }
}
