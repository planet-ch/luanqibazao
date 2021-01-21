import Vue from 'vue'
const qq = async () => {
  return await new Promise((res, rej) => {
    window.onload = () => res(qq)
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = '/js/qqMap.js'
    script.onerror = rej
    document.head.appendChild(script)
  })
}
Vue.use(qq)
