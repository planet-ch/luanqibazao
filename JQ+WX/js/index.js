var playLocalId = ''
// var num1 = Math.ceil(Math.random()*3)
// var num2 = ''
// createdNum()
// function createdNum () {
//   num2 = Math.ceil(Math.random()*3)
//   if (num1 === num2) {
//     createdNum()
//   }
// }
$(function(){
  var defaultData = [
    {
      bgUrl: './../img/default/skg.png',
      content: '有SKG的陪伴<br>' +
          '愿你每天都有放松好心情',
      mediaId: '',
      mobile: '',
      nickname: '',
      recordUrl: './../audio/4.mp3',
      play: false
    }
  ]
  var shareConfig = {
    title: '点击听取',
    desc: '你有一条来自王一博的祝福信息',
    link: window.location.href,
    imgUrl: ''
  }
  // 初始化页面
  configWx(shareConfig)
  window.vue = new Vue({
    el: '#content',
    data: {
      name: 'content',
      data: [],
      currentItem: {},
      currentAudioDom: null,
      mobile: '',
      getting: false,
      codeTime: 60,
      codeTimer: null,
      util: new Util,
      smCode: '',
      currentTopDom: null,
      currentPaperDom: null,
      currentIconDom: null,
      rightCode: '',
      smMobile: '',
      smCodeTimer: null,
      // smCodeTime: window.sessionStorage.getItem('smCodeTime') || 300,
      smCodeTime: 300,
      sliderIndex: 0
    },
    created: function () {
      $('.input-box .mobile').on('input', mobileTest)
      function mobileTest () {
        this.mobile = this.mobile.substring(0, 11)
      }
      var originalHeight=document.documentElement.clientHeight ||document.body.clientHeight;
      window.onresize = function () {
        var resizeHeight=document.documentElement.clientHeight || document.body.clientHeight;
        if(resizeHeight-0<originalHeight-0){
          //当软键盘弹起，在此处操作
          $('.box').css('marginTop', '4rem')
        }else{
          //当软键盘收起，在此处操作
          $('.box').css('marginTop', '10rem')
        }
      }

    },
    watch: {
      mobile: function (newV, oldV) {
        this.mobile = newV.substring(0, 11)
      }
    },
    methods: {
      open: function (index) {
        // console.log(index, '这个index有问题');
        // return false
        // if (!e.currentTarget) {
        //   return false
        // }
        var that = this
        that.currentIconDom = $('.envelope-icon')[index]
        that.currentPaperDom = $('.envelope-paper')[index]
        that.currentTopDom = $('.envelope-top')[index]
        that.currentEnvelope = $('.red-envelope')[index]
        that.animate()
        // if ($('.envelope-top').hasClass('swing-bottom-fwd')) {
        //   // that.swingTop()
        // } else if ($('.envelope-top').hasClass('swing-top-fwd')) {
        //   // that.paperSlideBottom()
        // } else {
        //   setTimeout(function () {
        //     $('.envelope-top').addClass('swing-top-fwd')
        //   }, 500)
        // }

        if ($(that.currentTopDom).hasClass('swing-bottom-fwd')) {
          // 如果2个都没有完全展开,需要重新执行
          // $(that.currentTopDom).addClass('swing-bottom-fwd')
          // that.swingTop()
        } else if ($(that.currentTopDom).hasClass('swing-top-fwd')) {
          // console.log('第二次才会进来', index);
          // // that.paperSlideBottom()
          // $(this.currentTopDom).css('z-index', 95)
          // $(this.currentPaperDom).addClass('paper-slide-top')
          // $(this.currentIconDom).addClass('button-animate')
          // $(this.currentEnvelope).addClass('envelope-down')
        } else {
          setTimeout(function () {
            $(that.currentTopDom).addClass('swing-top-fwd')
          }, 500)
        }
      },

      swingTop: function () {
        // $('.envelope-top').removeClass('swing-bottom-fwd')
        // $('.envelope-top').addClass('swing-top-fwd')
        $(this.currentTopDom).removeClass('swing-bottom-fwd')
        $(this.currentTopDom).addClass('swing-top-fwd')
      },

      swingBottom: function () {
        // $('.envelope-top').removeClass('swing-top-fwd')
        // $('.envelope-top').addClass('swing-bottom-fwd')
        $(this.currentTopDom).removeClass('swing-top-fwd')
        $(this.currentTopDom).addClass('swing-bottom-fwd')
      },

      paperSlideTop: function (index) {
        // $('.envelope-top').css('z-index', 95)
        // $('.envelope-paper').addClass('paper-slide-top')
        // $('.envelope-icon').addClass('button-animate')
        // $('.red-envelope').addClass('envelope-down')

        // $(this.currentTopDom).css('z-index', 95)
        // $(this.currentPaperDom).addClass('paper-slide-top')
        // $(this.currentIconDom).addClass('button-animate')
        // $(this.currentEnvelope).addClass('envelope-down')

        $('.envelope-top').eq(index).css('z-index', 95)
        $('.envelope-paper').eq(index).addClass('paper-slide-top')
        $('.envelope-icon').eq(index).addClass('button-animate')
        $('.red-envelope').eq(index).addClass('envelope-down')
      },

      paperSlideBottom: function () {
        $(this.currentPaperDom).addClass('paper-slide-bottom')
      },
      animate: function () {
        var that = this
        $(this.currentTopDom).off("webkitAnimationEnd").on('webkitAnimationEnd', function () {

          // 在信封动画未结束前 切换slider会导致currentTopDom被切换,保存在dom元素上的index来判断动画元素

          that.paperSlideTop($(this).data('index'))
        })
        $(this.currentPaperDom).off("webkitAnimationEnd").on('webkitAnimationEnd', function () {
          // swingBottom()
        })
        $(this.currentIconDom).off("webkitAnimationEnd").on('webkitAnimationEnd', function (e) {
          $(this).append('<span>点击播放祝福</span>')
          $(this).on('click', function () {
            var index = $(this).data('index')
            var audio = that.data[index]
            that.playOrPause(audio, index)
          })
        })

        // $('.envelope-top').off("webkitAnimationEnd").on('webkitAnimationEnd', function () {
        //   that.paperSlideTop()
        // })
        // $('.envelope-paper').off("webkitAnimationEnd").on('webkitAnimationEnd', function () {
        //   // swingBottom()
        // })
        // $('.envelope-icon').off("webkitAnimationEnd").on('webkitAnimationEnd', function (e) {
        //   $(this).append('<span>点击播放祝福</span>')
        //   $(this).on('click', function () {
        //     var index = $(this).data('index')
        //     var audio = that.data[index]
        //     that.playOrPause(audio, index)
        //   })
        // })


      },
      getSmCode: function () {
        var that = this
        if (!/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[189])\d{8}$/.test(this.mobile)) {
          this.util.toast('请输入正确的手机号码~')
          return false
        }
        if (this.getting) {
          return false
        }
        this.getting = true

        $.ajax({
          headers: {},
          type: 'GET',
          data: {
            mobile: that.mobile
          },
          timeout: 15000, //超时时间设置，单位毫秒
          dataType: 'json',
          url: 'https://zhishi.skg.com/web.kb/app/captcha/' + that.mobile,
          success: function (res) {
            if (res.code === 0) {
              clearInterval(that.smCodeTimer)
              that.rightCode = res.captcha
              that.smMobile = that.mobile // 记住当前验证码获取手机
              that.smCodeTime = 300
              that.smCodeTimer = setInterval(function () {
                that.smCodeTime--
                console.log('smCodeTime', that.smCodeTime)
                // window.sessionStorage.setItem('smCodeTime', that.smCodeTime)
                if (that.smCodeTime < -1) {
                  clearInterval(that.smCodeTimer)
                }
              }, 1000)
              that.codeTimer = setInterval(function () {
                that.codeTime--
                if (that.codeTime < 0) {
                  clearInterval(that.codeTimer)
                  that.codeTime = 60
                  that.getting = false
                }
              }, 1000)
              that.util.toast('发送成功', 2000, function () {}, true)
            } else {
              that.util.toast(res.msg, 2000, function () {})
            }
          }
        })
      },
      getBlessing: function (fn) {
        if (this.rightCode !== this.smCode || this.rightCode === '') {
          this.util.toast('请输入正确的短信验证码~')
          return false
        }
        if (this.mobile !== this.smMobile) {
          // 当前输入手机号码不等于上次 需重新获取验证码
          this.util.toast('请输入正确的短信验证码~')
          return false
        }
        if (this.smCodeTime <= 0) {
          this.util.toast('短信验证码已过期,请获取最新的短信验证码~~')
          return false
        }
        var that = this
        $.ajax({
          headers: {},
          type: 'GET',
          data: {
            mobile: that.mobile
          },
          timeout: 15000, //超时时间设置，单位毫秒
          dataType: 'json',
          // url: 'https://bless.skg.com/api/blessing/info/' + that.mobile,
          url: window.location.origin + '/api/blessing/info/' + that.mobile,
          success: function (res) {
            if (res.code === 0) {
              if (res.blessing.length > 0) {
                that.data = res.blessing && res.blessing.map(function(item){
                  item.play = false
                  item.localId = ''
                  return item
                })
                that.$nextTick(function () {
                  fn && fn()
                })
              } else {
                that.data = defaultData
                that.$nextTick(function () {
                  fn && fn()
                })
              }
            }
          }
        })
      },
      playOrPause: function (audio, index) {
        var that = this
        this.currentAudioDom = this.$refs['audio' + index]
        if (audio.play) {
          // 正在播放
          if (audio.recordUrl) {
            // 如果有URL 走正常音频模式
            this.currentAudioDom && this.currentAudioDom[0].pause()
          } else {
            playLocalId = audio.localId
            wx.pauseVoice({
              localId: audio.localId // 需要暂停的音频的本地ID，由stopRecord接口获得
            })
          }
        } else {
          if (audio.recordUrl) {
            // 如果有URL 走正常音频模式
            this.currentAudioDom && this.currentAudioDom[0].play()
            this.currentAudioDom && this.currentAudioDom[0].addEventListener('ended', function () {
              audio.play = false
            })
          } else {
            playLocalId = audio.localId
            wx.playVoice({
              localId: audio.localId // 需要播放的音频的本地ID，由stopRecord接口获得
            })
            wx.onVoicePlayEnd({
              success: function (res) {
                that.data.forEach(function (item) {
                  item.play = false
                })
              }
            })
          }
        }
        audio.play = !audio.play
      },
      downloadFile: function (data, index) {
        var that = this
        index = index > data.length ? 0 : index
        this.currentItem = this.data[index] || {}
        if (this.currentItem.localId) {
          // 已经加载过了
          return
        }
        wx.downloadVoice({
          serverId: this.currentItem.mediaId, // 需要下载的音频的服务器端ID，由uploadVoice接口获得
          isShowProgressTips: 1, // 默认为1，显示进度提示
          success: function (res) {
            that.currentItem.localId = res.localId
            data[index].localId = res.localId
          }
        })
      },
      preview: function (event) {
        if (/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[189])\d{8}$/.test(this.mobile)) {
          var that = this
          this.getBlessing(function () {
            $('#preview').fadeIn(200)
            that.initSwiper()
            // that.downloadFile(that.data, 0)
            that.openAnimate()
          })
        } else {
          this.toast('请输入正确的手机号码~')
        }
        event.stopPropagation()
      },
      openAnimate: function () {
        this.open(0)
      },
      toast: function (text, delay, fn, type) {
        if (type) {
          // 如果传了状态 依据状态
          $('#topTips').addClass('weui-toptips_success')
        } else {
          $('#topTips').removeClass('weui-toptips_success')
        }
        $('#topTips').html(text)
        $('#topTips').fadeIn(200);
        setTimeout(function () {
          $('#topTips').fadeOut(200);
          fn && fn()
        }, delay || 2000)
      },
      previewConfirm: function (event) {
        this.currentAudioDom && this.currentAudioDom[0].pause()
        wx.stopVoice({
          localId: playLocalId // 需要停止的音频的本地ID，由stopRecord接口获得
        })
        $('.envelope-icon').off('click').children('span').remove()
        // $('.envelope-paper').removeClass('paper-slide-top')
        // $('.red-envelope').removeClass('envelope-down')
        // $('.envelope-top').removeClass('swing-top-fwd').css('z-index', 103)
        $('#preview').fadeOut(200)
        event.stopPropagation()
      },
      initSwiper () {
        var that = this
        var galleryThumbs = new Swiper('.gallery-thumbs', {
          spaceBetween: 10,
          slidesPerView: 'auto',
          // freeMode: true,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          on: {
            slideChange () {
              // console.log('底部轮播图触发', this.activeIndex);
              // that.open(this.activeIndex)
            }
          }
        });
        var galleryTop = new Swiper('.gallery-top', {
          spaceBetween: 30,
          thumbs: {
            swiper: galleryThumbs
          },
          on: {
            slideChange () {
              that.sliderIndex = this.activeIndex
              console.log('top轮播图触发', this.activeIndex);
              that.open(this.activeIndex)
              // 下载当前实例对应音频 切换当前实例 其他实例全部暂停
              that.data.forEach(function (item) {
                item.play = false
              })
              if (that.data[this.activeIndex].audio) {
                // 无需下载
              } else {
                that.downloadFile(that.data, this.activeIndex)
              }
              // 暂停音频
              that.currentAudioDom && that.currentAudioDom[0].pause()
              wx.stopVoice({
                localId: playLocalId // 需要停止的音频的本地ID，由stopRecord接口获得
              })
            }
          }
        });
      },
      closeDialog () {
        this.currentAudioDom && this.currentAudioDom[0].pause()
        wx.stopVoice({
          localId: playLocalId // 需要停止的音频的本地ID，由stopRecord接口获得
        })
        $('.envelope-icon').off('click').children('span').remove()
        // $('.envelope-paper').removeClass('paper-slide-top')
        // $('.red-envelope').removeClass('envelope-down')
        // $('.envelope-top').removeClass('swing-top-fwd').css('z-index', 103)
        $('#preview').fadeOut(200)
      }
    }
  })

//   $('body').on('click', '.mask', previewConfirm)
//     .on('click', '.next-step', preview)
// // 预览相关
//   function preview (event) {
//     $('#preview').fadeIn(200)
//     initSwiper()
//     event.stopPropagation()
//   }
//   function previewConfirm (event) {
//     $('#preview').fadeOut(200)
//     event.stopPropagation()
//   }
// function initSwiper () {}
});
