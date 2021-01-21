export default function({ $axios, redirect }, inject) {
  $axios.onRequest((confg) => {
    confg.hearders =
      confg.method === 'get'
        ? {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=UTF-8',
            cache: false
          }
        : {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            mineType: 'multipart/form-data'
          }
    if (confg.method !== 'get') {
      confg.data = confg.params
      delete confg.params
    }
  })
}
