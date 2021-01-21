import Vue from 'vue'

import {
  getMatchedComponentsInstances,
  promisify,
  globalHandleError
} from './utils'

import NuxtLoading from './components/nuxt-loading.vue'
import NuxtBuildIndicator from './components/nuxt-build-indicator'

import '..\\style\\common.scss'

import '..\\node_modules\\element-ui\\lib\\theme-chalk\\index.css'

import _6f6c098b from '..\\layouts\\default.vue'

const layouts = { "_default": _6f6c098b }

export default {
  head: {"title":"『SKG官网』畅销巴黎·纽约·首尔，全球1500万年轻人的选择！颈椎按摩仪|护颈仪|颈部按摩器-招商合作","meta":[{"charset":"utf-8"},{"name":"baidu-site-verification","content":"code-hOzVjvDlQH"},{"name":"viewport","content":"initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width"},{"hid":"Keywords","name":"Keywords","content":"颈椎按摩仪,护颈仪,颈部按摩器,颈椎按摩器,SKG,SKG官网"},{"hid":"description","name":"description","content":"SKG作为时尚的颈椎按摩仪品牌，集研发、生产、销售、培训为一体的专业大型国际企业，主要经营颈椎按摩仪,护颈仪,颈部按摩器,颈椎按摩器等，以超时尚设计理念，启发全球用户追求智能健康生活方式"},{"http-equiv":"Pragma","content":"no-cache"},{"http-equiv":"Cache-Control","content":"no-cache"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.png"}],"script":[{"charset":"utf-8","src":"https:\u002F\u002Fmap.qq.com\u002Fapi\u002Fjs?v=2.exp&key=7SPBZ-35G6V-YEMP5-UAJB5-WGEP6-AEFG3","body":true},{"type":"text\u002Fjavascript","src":"https:\u002F\u002F3gimg.qq.com\u002Flightmap\u002Fapi_v2\u002F2\u002F4\u002F127\u002Fmain.js","body":true},{"type":"text\u002Fjavascript","src":"https:\u002F\u002F3gimg.qq.com\u002Flightmap\u002Fcomponents\u002Fgeolocation\u002Fgeolocation.min.js","body":true},{"type":"text\u002Fjavascript","src":"js\u002Fbaidu.js","body":true},{"type":"text\u002Fjavascript","src":"js\u002Frem.js","body":true},{"type":"text\u002Fjavascript","src":"js\u002Fhm.baidu.js","body":true}],"style":[]},

  render (h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })

    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter (el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [templateEl])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      h(NuxtBuildIndicator),
      transitionEl
    ])
  },

  data: () => ({
    isOnline: true,

    layout: null,
    layoutName: ''
  }),

  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this

      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
    // Add $nuxt.context
    this.context = this.$options.context
  },

  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline () {
      return !this.isOnline
    }
  },

  methods: {
    refreshOnlineStatus () {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    async refresh () {
      const pages = getMatchedComponentsInstances(this.$route)

      if (!pages.length) {
        return
      }
      this.$loading.start()

      const promises = pages.map((page) => {
        const p = []

        if (page.$options.fetch) {
          p.push(promisify(page.$options.fetch, this.context))
        }

        if (page.$options.asyncData) {
          p.push(
            promisify(page.$options.asyncData, this.context)
              .then((newData) => {
                for (const key in newData) {
                  Vue.set(page.$data, key, newData[key])
                }
              })
          )
        }

        return Promise.all(p)
      })
      try {
        await Promise.all(promises)
      } catch (error) {
        this.$loading.fail()
        globalHandleError(error)
        this.error(error)
      }
      this.$loading.finish()
    },

    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) {
          this.$loading.fail()
        }
        if (this.$loading.finish) {
          this.$loading.finish()
        }
      }
    },

    setLayout (layout) {
      if(layout && typeof layout !== 'string') {
        throw new Error('[nuxt] Avoid using non-string value as layout property.')
      }

      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },

  components: {
    NuxtLoading
  }
}
