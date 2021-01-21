var recorderBtn = null, // 录音按钮
  deleteBtn = null,  // 删除按钮
  currentDom = null,  // 当前手指所在DOM
  recordTimer = null,  // 录音倒计时计时器
  recordTime = 60,  // 录音倒计时时间
  localId = '',  // 当前次录音ID
  play = false,  // 是否播放标识
  startTime = 0,  // 当前次按下录音按钮时间
  endTime = 0,  // 当前次结束录音按钮时间
  startRecordTimer = null,// 是否启动录音计时器
  clickTime = 200,  // 长按事件和点击事件 区分时间
  myAudioObj = null ;// 当前页面播放音频实例
  shareConfig = {
    title: '定制你的祝福',
    desc: '让礼物有更多惊喜和感动',
    link: window.location.href,
    imgUrl: ''
  }
$(function () {
  var util = new Util
  window.onblur = function () {
    domHide()
    clearTimeout(startRecordTimer)
    clearInterval(recordTimer)
    recordTime = 60
    wx.stopRecord()
    wx.pauseVoice({
      localId: localId
    })
  }
  configWx(shareConfig, function() {
    // wx.startRecord({
    //   success: function () {
    //     wx.stopRecord()
    //   },
    //   complete: function () {
    //     wx.stopRecord()
    //   }
    // })
    // setTimeout(function () {
    //   wx.stopRecord()
    // }, 500)
    // setTimeout(function () {
    //   wx.stopRecord()
    // }, 1000)
    // setTimeout(function () {
    //   wx.stopRecord()
    // }, 1200)
  })
  recorderBtn = $('.recorder-button')
  deleteBtn = $('.delete-button')
  console.log(recorderBtn, deleteBtn);
  recorderBtn.on('touchstart', domTouchstart)
  recorderBtn.on('touchmove', domTouchmove)
  recorderBtn.on('touchend', domTouchend)
  recorderBtn.on('touchcancel', domTouchcancel)
  $('body').on('click', '.play-audio', playAudio)
      .on('click', '.delete-last-one', deleteLastOne)



  function deleteLastOne () {
    $('body').off('click', '.weui-dialog__btn_default').on('click', '.weui-dialog__btn_default', deleteCancel)
        .off('click', '.weui-dialog__btn_primary').on('click', '.weui-dialog__btn_primary', deleteComfirm)
    util.dialog('删除当前录音后无法找回,是否删除?')
  }

  function deleteCancel () {
    util.closeDialog()
  }

  function deleteComfirm () {
    $('.play-audio').hide()
    $('.delete-last-one').hide()
    $('.recorder-tips').show()
    localId = ''
    params.recordUrl = ''
    params.mediaId = ''
    previewData.localId = ''
    util.closeDialog()
  }

  /**
   * 处理 录音时 禁止页面滑动
   */
  function handler () {
    event.preventDefault();
    event.stopPropagation();
  };
  function OpenMask() {
    document.body.addEventListener('touchmove',handler,false);
    document.body.addEventListener('wheel',handler,false);
  };
  function CloseMask() {
    document.body.removeEventListener('touchmove',handler,false);
    document.body.removeEventListener('wheel',handler,false);
  };

  /**
   * 录音按钮启动事件
   */
  function domTouchstart (e) {
    startTime = new Date().getTime()
    $('.play-audio').hide()
    $('.delete-last-one').hide()
    domShow()
    startRecordTimer = setTimeout(function () {
      endTime = new Date().getTime()
      startRecord()
      var myLocation = e.originalEvent.changedTouches[0]
      currentDom = document.elementFromPoint(myLocation.clientX, myLocation.clientY);
    }, clickTime)
  }

  /**
   * 非正常操作打断触屏操作
   */
  function domTouchcancel (e) {
    domHide()
    clearTimeout(startRecordTimer)
    clearInterval(recordTimer)
    recordTime = 60
    wx.stopRecord()
    wx.pauseVoice({
      localId: localId
    })
  }

  /**
   * 用户手势滑动 判断当前手指所在区域 删除等
   */
  function domTouchmove (e) {
    var myLocation = e.originalEvent.changedTouches[0]
    currentDom = document.elementFromPoint(myLocation.clientX, myLocation.clientY);
    if (currentDom === $('.delete-button')[0]) {
      $('.delete-button').addClass('red')
    } else {
      $('.delete-button').removeClass('red')
    }
  }

  /**
   * 用户手指离开屏幕 关闭录音等操作
   */
  function domTouchend (e) {
    var duration = 60 - recordTime
    endTime = new Date().getTime()
    if (endTime - startTime < clickTime) {
      // 不启动当前录音
      clearTimeout(startRecordTimer)
      $('.play-audio').show()
      $('.delete-last-one').show()
      domHide()
    } else {
      // 只要松开 所有状态还原
      clearInterval(recordTimer)
      recordTime = 60
      $('.delete-button').removeClass('red')
      $('.time-num').css('color', '#42D7C8')

      // 录音时长太短 提示重新录制
      if (duration < 3) {
        $('.weui-toast__content').html('请录三秒以上')
        if (!localId) {
          $('.recorder-tips').show()
        }
        wx.stopRecord();
        domHide()
        var $warnToast = $('#warnToast');
        if ($warnToast.css('display') != 'none') return;

        $warnToast.fadeIn(100);
        setTimeout(function () {
          $warnToast.fadeOut(100);
        }, 2000);
        return
      }

      // 需要判断 当前手指在哪个位置
      switch (currentDom) {
        case $('.delete-button')[0]:
          // 删除操作
          delRecord()
          break;
        default:
          closeRecord(duration)
          break;

      }
    }

  }

  /**
   * 录音开启事件 包含DOM效果 倒计时等
   */
  function startRecord () {
    // 清除播放录音
    if (myAudioObj && myAudioObj.playStatus) {
      myAudioObj.stop()
    }
    // $('.step-1').append('<p>我开始录音</p>')
    /**
     * 开启录音倒计时
     */
    wx.startRecord()
    recordTimer = setInterval(function () {
      recordTime--
      var tiemNum = '00:' + recordTime
      $('.time-num').text(tiemNum)
      if (recordTime <= 10 && recordTime > 0) {
        // 10s内要给出红色警告
        time10Handle()
      } else if (recordTime <= 0) {
        // 60s之后强制结束录音
        clearInterval(recordTimer)
        closeRecord(60)
      } else {
      }
    }, 1000)
  }

  /**
   * 删除录音操作
   */
  function delRecord () {
    wx.stopRecord();
    domHide()
  }

  /**
   * 录音倒数10s处理逻辑
   */
  function time10Handle () {
    $('.time-num').css('color', 'red')
  }

  /**
   * 关闭录音逻辑 并上传
   */
  function closeRecord (duration) {
    recordTime = 60
    wx.stopRecord({
      success: function (res) {
        localId = res.localId;
        previewData.localId = res.localId;
        // uploadAudio(localId)
        if (localId) {
          myAudioObj = new myAudio({
            duration: duration,
            localId: localId,
            dom: $('.play-audio')
          })
          myAudioObj.initDom()
          $('.recorder-tips').hide()
        }
      }
    });
    domHide()
  }

  /**
   * 开启录音逻辑 DOM显示
   */
  function domShow () {
    $('.input-box input').attr('disabled', true)
    var tiemNum = '00:' + recordTime
    $('.time-num').show().text(tiemNum)
    $('.recorder-tips').hide()
    OpenMask()
    $('.box-mask').show()
    // $('.box-bg').show()
    $('.delete-button').show().css('display', 'flex')
    $('.vioce').show()
  }

  /**
   * 结束录音逻辑 DOM隐藏
   */
  function domHide () {
    $('.input-box input').removeAttr('disabled')
    if (localId) {
      // 如果有localId 当前音频DOM不是当次录音 为上次 不需清除
      $('.play-audio').show()
      $('.delete-last-one').show()
    } else {
      $('.play-audio').hide()
      $('.delete-last-one').hide()
      $('.recorder-tips').show()
    }
    var tiemNum = '00:60'
    $('.time-num').text(tiemNum).hide()
    $('.box-mask').hide()
    CloseMask()
    // $('.box-bg').hide()
    $('.delete-button').hide()
    $('.vioce').hide()
  }

  /**
   * 播放音频
   */
  function playAudio () {
    if (myAudioObj.playStatus) {
      // 正在播放
      myAudioObj.pause()
    } else if (!myAudioObj.playStatus) {
      // 没有播放
      myAudioObj.play()
    }
  }

  /**
   * 播放音频类
   */
  function myAudio (options) {
    this.time = options.duration
    this.duration = options.duration
    this.localId = options.localId
    this.dom = options.dom
    this.playStatus = false
    this.playTimer = null
  }

  myAudio.prototype = {
    initDom: function () {
      this.dom.show()
      $('.delete-last-one').show()
      this.dom.children('.duration').html(this.duration + '`')
    },
    play: function () {
      var that = this
      wx.playVoice({
        localId: localId
      })

      this.dom.addClass('pause')

      this.playTimer = setInterval(function () {
        that.duration--
        that.dom.children('.duration').html(that.duration + '`')
        if (that.duration <= 0) {
          // 倒计时结束后
          wx.stopVoice({
            localId: localId // 需要停止的音频的本地ID，由stopRecord接口获得
          })
          // that.pause()
          that.duration = that.time
          that.dom.children('.duration').html(that.duration + '`')
          that.dom.removeClass('pause')
          clearInterval(that.playTimer)
        }
      }, 1000)
      this.playStatus = true
    },
    pause: function () {
      this.dom.removeClass('pause')
      wx.pauseVoice({
        localId: localId
      })
      clearInterval(this.playTimer)
      this.playStatus = false
    },
    stop: function () {
      this.dom.removeClass('pause')
      wx.stopVoice({
        localId: localId
      })
      clearInterval(this.playTimer)
      this.playStatus = false
    }
  }

})



