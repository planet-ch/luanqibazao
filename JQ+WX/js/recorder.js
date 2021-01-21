var cropper = null
var rotateReg = 0
var serverId = ''
var imgFile = null
var uploadImgOver = false
var uploadAudioOver = false
var params = {
  bgUrl: '',
  content: '',
  mediaId: '',
  mobile: '',
  nickname: '',
  recordUrl: ''
}
var previewData = {
  title: '',
  bg: '',
  localId: '',
  play: false
}

$(function(){
  var util = new Util
  // watchPreview()
  // 微信SDK注册
  // configWx()
  var $gallery = $("#gallery"), $galleryImg = $("#galleryImg"),
    $uploaderInput = $("#uploaderInput"),
    $uploaderFiles = $("#uploaderFiles");
  ;

  // 读取文件之后流程
  $uploaderInput.on("change", function(e){
    var src, url = window.URL || window.webkitURL || window.mozURL, files = e.target.files;
    for (var i = 0, len = files.length; i < len; ++i) {
      var file = files[i];
      if (url) {
        src = url.createObjectURL(file);
      } else {
        src = e.target.result;
      }
    }
    appendDom(src)
    var image = document.getElementById('image');
    // 在选取完图片之后实例化裁剪图片
    util.loading('加载中')
    initCropper(image)
  });

  // 页面元素事件绑定
  $uploaderFiles.on("click", "li", function(){
    $galleryImg.attr("style", this.getAttribute("style"));
    $gallery.fadeIn(100);
  });
  $gallery.on("click", function(){
    $gallery.fadeOut(100);
  });

  // 下载按钮实例
  $('body').on('click', '.download-btn', function () {
    $('body .uploadBox #coverImg').remove('#coverImg')
    getImage(function (blob) {
      imgFile = new File([blob], 'bg.jpg', { type: blob.type })
      blobToDataURL(blob, function(img){
        previewData.bg = img
        $('body .uploadBox').append('<img id="coverImg" src="'+ img +'" />')
        destroyCropper()
      })
    })
  }).on('click', '.destroy-btn', destroyCropper)
    .on('click', '.reset-btn', resetCropper)
    .on('click', '.rotate-btn', function () {
      rotateReg += 90
      rotate(rotateReg)
    })
    .on('click', '.submit-btn', submit)
    .on('click', '.weui-dialog__btn_default', submitCancel)
    .on('click', '.weui-dialog__btn_primary', submitComfirm)
    .on('click', '.confirm-btn', submit)
    .on('click', '.back-btn', previewConfirm)
    .on('click', '.close-btn', previewConfirm)
    .on('click', '.preview-btn', preview)
    .on('click', '.envelope-icon', playPause)
    .on('input', '.step-2 .input-box input', contentTest)
    .on('input', '.step-4 .input-box input', mobileTest)

  $('.envelope-top').on('webkitAnimationEnd', function () {
    paperSlideTop()
  })
  $('.envelope-paper').on('webkitAnimationEnd', function () {
    swingBottom()
  })
  $('.preview-btn-box').on('webkitAnimationEnd', function () {
    swingBottom()
  })
  // $('.envelope-icon').on('webkitAnimationEnd', function () {
  // })


  function swingTop () {
    $('.envelope-top').removeClass('swing-bottom-fwd').addClass('swing-top-fwd')
  }

  function swingBottom () {
    $('.envelope-top').css('z-index', 103).removeClass('swing-top-fwd').addClass('swing-bottom-fwd')
    $('.envelope-icon').addClass('button-animate-leave').empty()
  }

  function paperSlideTop () {
    $('.envelope-paper').addClass('paper-slide-top')
    $('.red-envelope').addClass('envelope-run')
    $('.preview-btn-box').hide()
  }
  function paperSlideBottom () {
    $('.envelope-paper').addClass('paper-slide-bottom')
  }

  // 触发预览按钮 条件监听
  function watchPreview () {
    var myBg = ''
    var myLoaclId = ''
    Object.defineProperty(previewData, 'bg', {
      set: function (v){
        // 触发显示预览按钮事件
        myBg = v
        showPreviewBtn()
      },
      get: function () {
        return myBg
      },
      enumerable : true,
      configurable : true
    })
    Object.defineProperty(previewData, 'localId', {
      set: function (v){
        // 触发显示预览按钮事件
        myLoaclId = v
        showPreviewBtn()
      },
      get: function () {
        return myLoaclId
      },
      enumerable : true,
      configurable : true
    })
  }

  function showPreviewBtn () {
    if (Boolean(previewData.localId) && Boolean(previewData.bg)) {
      $('.preview-btn').show()
    } else {
      $('.preview-btn').hide()
    }
  }

  function playPause () {
    if (previewData.play) {
      // 播放状态
      $('.play-btn').removeClass('pause')
      wx.pauseVoice({
        localId: previewData.localId
      })
    } else {
      $('.play-btn').addClass('pause')
      console.log(wx.pauseVoice, '不能播放吗');
      wx.playVoice({
        localId: previewData.localId
      })
      wx.onVoicePlayEnd({
        success: function (res) {
          $('.play-btn').removeClass('pause')
        }
      })
    }
    previewData.play = !previewData.play
  }

  // 动态添加每次图片源
  function appendDom (src) {
    $('body').append('<img id="image" src="'+ src +'" />')
    $('.button-box').show().css('display', 'flex')
  }

  // 销毁裁剪对象实例
  function destroyCropper () {
    $('body #image').remove('#image')
    $uploaderInput.val('')
    cropper.destroy()
    $('.button-box').hide()
  }

  // 还原裁剪对象实例
  function resetCropper () {
    cropper.reset()
  }

  function rotate (reg) {
    cropper.rotate(reg)
  }

// blob转base文件
  function blobToDataURL(blob, callback) {
    var a = new FileReader();
    a.onload = function (e) { callback(e.target.result); }
    a.readAsDataURL(blob);
  }

// 创建裁剪对象实例
  function initCropper (image) {
    cropper = new Cropper(image, {
      aspectRatio: 250 / 169,
      viewMode: 1,
      dragMode: 'move',
      minCropBoxWidth: 250,
      minCropBoxHidth: 169,
      movable: true,
      background: true,
      ready:function () {
        util.closeLoading()
      }
    });
  }

  // 获取裁剪之后图片blob流
  function getImage(fn) {
    // 图片配置
    cropper.getCroppedCanvas({
      width: 250 * 8,
      height: 169 * 8,
      minWidth: 250,
      minHeight: 169,
      maxWidth: 4096,
      maxHeight: 4096,
      fillColor: '#fff',
      imageSmoothingEnabled: false,
      imageSmoothingQuality: 'high'
    }).toBlob(function (blob) {
      fn(blob)
    });
  }

  // 提交弹框后事件
  function submit () {
    params.content = $('.step-2 .input-box input').val()
    params.mobile = $('.step-4 .input-box input').val()

    // if ($('.envelope-top').hasClass('swing-bottom-fwd')) {
    //   // swingTop()
    // } else if ($('.envelope-top').hasClass('swing-top-fwd')) {
    //   paperSlideBottom()
    // } else {
    //   paperSlideBottom()
    // }
    // return
    if (!imgFile) {
      util.toast('您还没有上传祝福图片哦~', 2000)
      return
    }
    if (params.content === '') {
      util.toast('请填写您对Ta的祝福吧~', 2000)
      return
    }
    if (!util.contentLength(params.content)) {
      util.toast('文字最多输入20个字哦~', 2000)
      return
    }
    if (localId === '') {
      util.toast('您还没有录音呢~', 2000)
      return
    }
    if (params.mobile === '') {
      util.toast('手机号码一定要输入哦~', 2000)
      return
    }
    if (!util.isMobile(params.mobile)) {
      util.toast('请输入正确的手机号哦~', 2000)
      return
    }
    $('body').off('click', '.weui-dialog__btn_default').on('click', '.weui-dialog__btn_default', submitCancel)
        .off('click', '.weui-dialog__btn_primary').on('click', '.weui-dialog__btn_primary', submitComfirm)
    // $('body').on('click', '.weui-dialog__btn_default', submitCancel)
    //     .on('click', '.weui-dialog__btn_primary', submitComfirm)
    util.dialog()
  }
  function submitCancel () {
    util.closeDialog()
  }

  /**
   * 用户确认 提交之后 上传图片 和上传音频
   */
  function submitComfirm () {
    if ($('.envelope-top').hasClass('swing-bottom-fwd')) {
      // swingTop()
    } else if ($('.envelope-top').hasClass('swing-top-fwd')) {
      paperSlideBottom()
    } else {
      paperSlideBottom()
    }
    util.closeDialog()
    setTimeout(function () {
      util.loading()
      uploadAudio(localId, function (serverId) {
        params.mediaId = serverId
        uploadAudioOver = true
        submitAjax()
      })
      util.upload(imgFile, function (res) {
        params.bgUrl = res.url
        uploadImgOver = true
        submitAjax()
      }, function () {})
    }, 2000)

  }

  /**
   * 上传音频文件到微信服务器  拿回serverId回传后端
   * @param localId
   * @param fn
   */
  function uploadAudio (localId, fn) {
    wx.uploadVoice({
      localId: localId, // 需要上传的音频的本地ID，由stopRecord接口获得
      isShowProgressTips: 0, // 默认为1，显示进度提示
      success: function (res) {
        serverId = res.serverId; // 返回音频的服务器端ID
        fn && fn(serverId)
      }
    });
  }

  function submitAjax (serverId) {

    if (uploadImgOver && uploadAudioOver) {
      // 都上传完毕后 提交数据
      util.ajax('/blessing/save', 'POST', params, function (res) {
        util.closeLoading()
        if (res.code === 0) {

          util.closeDialog()
          util.closeLoading()
          window.history.replaceState('','', window.location.origin + '/success.html')
          setTimeout(function () {
            window.location.href = window.location.origin + '/success.html'
          }, 500)
          // util.toast('录制成功~快通知你的朋友查看吧', 2000, function () {
          //   window.location.href = ''
          // }, true)
        } else {
          util.toast(res.msg, 2000)
        }
        util.closeDialog()
      }, function () {
        util.closeDialog()
      })
    }
  }

  // 预览相关
  function preview () {
    params.content = $('.step-2 .input-box input').val()
    params.mobile = $('.step-4 .input-box input').val()
    if (!Boolean(previewData.bg)) {
      // 没有上传图片
      util.toast('您还没有上传祝福图片哦~', 1000,function () {}, true)
    } else if (!Boolean(params.content)) {
      util.toast('请填写您对Ta的祝福吧~', 1000,function () {}, true)
    } else if (!Boolean(previewData.localId)) {
      // 没有录音
      util.toast('您还没有录音呢~', 1000,function () {}, true)
    } else if (!Boolean(params.mobile)) {
      util.toast('手机号码一定要输入哦~', 1000,function () {}, true)
    } else if (!/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[189])\d{8}$/.test(params.mobile)) {
      util.toast('请输入正确的手机号码~')
    } else {
      previewData.title = $('.step-2 .input-box input').val()
      previewData.loaclId = localId
      $('.blessing-img').attr('src', previewData.bg)
      $('.blessing-title p').html(previewData.title)
      $('body').css('overflow', 'hidden')
      $('#preview').fadeIn(200)
    }
    // if (Boolean(previewData.localId) && Boolean(previewData.bg)) {
    //
    // } else {
    //   util.toast('完整的祝福才可以预览哦~', 1000,function () {}, true)
    // }

  }
  function previewConfirm () {
    $('body').css('overflow', 'auto')
    $('#preview').fadeOut(200)
    // 播放状态
    $('.play-btn').removeClass('pause')
    wx.stopVoice({
      localId: previewData.localId
    })
    previewData.play = false
  }

  /**
   * 内容校验
   */
  function contentTest () {
    // this.value = this.value.trim()
    if (util.contentLength(this.value)) {
      $(this).siblings('.input-num').html('(' + this.value.length + '/45)')
    } else {
      this.value = this.value.substring(0, 45)
      $(this).siblings('.input-num').html('(<span style="color: red;">' + this.value.length + '</span>/45)')
      // util.toast('您输入太多内容了~', 2000)
    }
  }

  function mobileTest () {
    this.value = this.value.substring(0, 11)
    if (!util.isMobile(this.value) && this.value.length === 11) {
      util.toast('请输入正确的手机号哦~', 2000)
    }
  }
});

