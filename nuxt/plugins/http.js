import Vue from 'vue'
import Axios from 'axios'

function httpServe(opt = { method: 'get', params: '', url: '' }) {
  const httpDefualtOpt = {
    method: opt.method,
    url: opt.url,
    timeout: 100000,
    params: opt.params, 
    data: opt.params, 
    hearders:
      opt.method === 'get'
        ? {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=UTF-8',
            cache: false
          }
        : {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            // mineType: 'multipart/form-data'
          }
  }
  if (opt.method === 'get') {
    delete httpDefualtOpt.data
  } else {
    delete httpDefualtOpt.params
  }

  return new Promise((resolve, reject) => {
    Axios(httpDefualtOpt)
      .then((res) => {
        if (res.data.code === 0) resolve(res.data)
        else reject(Error(res.data.msg))
      })
      .catch((err) => {
        reject(Error(err.message))
      })
  })
}

Vue.use({
  install: function(Vue) {
    Vue.prototype.$http = httpServe
  }
})
