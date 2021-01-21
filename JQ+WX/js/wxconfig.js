(function(win){
  var _wxConfig = {
    title: '',
    desc: '',
    link: '',
    imgUrl: ''
  }
  // 调取后台接口获取注册参数 注册config,拿到权限
  function init () {
    $.ajax({
      headers: {},
      type: 'GET',
      data: {},
      timeout: 15000, //超时时间设置，单位毫秒
      dataType: 'json',
      url: window.location.origin + '/api/blessing/wx/getSignature?pageUrl=' + window.location.href,
      success: function (res) {
        wx.config({
          debug: false, // 若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: res.result.appId, // 必填，公众号的唯一标识
          timestamp: res.result.timestamp, // 必填，生成签名的时间戳
          nonceStr: res.result.noncestr, // 必填，生成签名的随机串
          signature: res.result.signature, // 必填，签名，见附录1
          jsApiList: [
            'chooseImage',
            'previewImage',
            'startRecord',
            'stopRecord',
            'onVoiceRecordEnd',
            'playVoice',
            'pauseVoice',
            'stopVoice',
            'onVoicePlayEnd',
            'downloadVoice',
            'uploadVoice',
            'updateAppMessageShareData',
            'updateTimelineShareData',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareQZone',
            'hideAllNonBaseMenuItem'
          ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2 'hideAllNonBaseMenuItem'
        });
      }, // 返回成功的回调函数
      error: function () {
        var log = '网络不稳定（请求未响应）~'
      },
      complete: function (XMLHttpRequest, status) {
        if (status == 'timeout') { //超时,status还有success,error等值的情况
          var log = '网络不稳定（请求超时）~'
        }
        typeof complete == 'function' && complete()
        // _self.allAjaxLoad(-1)
      }
    });
  }

  function configShare (config) {

    wx.onMenuShareTimeline({
      title: config.title, // 分享标题
      desc: config.desc, // 分享描述
      link: config.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: window.location.origin + '/img/share_icon.png', // 分享图标
      success: function () {
        // 设置成功
      }
    })
    wx.onMenuShareAppMessage({
      title: config.title, // 分享标题
      desc: config.desc, // 分享描述
      link: config.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: window.location.origin + '/img/share_icon.png', // 分享图标
      success: function () {
        // 设置成功
      }
    })
    wx.onMenuShareQQ({
      title: config.title, // 分享标题
      desc: config.desc, // 分享描述
      link: config.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: window.location.origin + '/img/share_icon.png',// 分享图标
      success: function () {
        // 设置成功
      }
    })
    wx.onMenuShareQZone({
      title: config.title, // 分享标题
      desc: config.desc, // 分享描述
      link: config.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: window.location.origin + '/img/share_icon.png', // 分享图标
      success: function () {
        // 设置成功
      }
    })

    // 最新API无效
    // wx.updateAppMessageShareData({
    //   title: config.title, // 分享标题
    //   desc: config.desc, // 分享描述
    //   link: config.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    //   imgUrl: '', // 分享图标
    //   success: function () {
    //     // 设置成功
    //   }
    // })
    //
    // wx.updateTimelineShareData({
    //   title: config.title, // 分享标题
    //   desc: config.desc, // 分享描述
    //   link: config.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    //   success: function () {
    //     // 设置成功
    //   }
    // })
  }

  win.configWx = function (data, fn) {
    init()
    wx.ready(function () {
      data && configShare(data)
      fn && fn()
    })
  }
})(window)
