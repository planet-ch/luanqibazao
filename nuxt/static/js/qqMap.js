window.qq = window.qq || {}
qq.maps = qq.maps || {}
window.soso || (window.soso = qq)
soso.maps || (soso.maps = qq.maps)
;(function() {
  function getScript(src) {
    const script = document.createElement('script')
    script.type = 'text/javascript'

    var protocol = window.location.protocol == 'https:' ? 'https://' : 'http://'
    src =
      src && (src.indexOf('http://') === 0 || src.indexOf('https://') === 0)
        ? src
        : protocol + src
    script.src = src
    document.head.appendChild(script)
  }
  qq.maps.__load = function(apiLoad) {
    delete qq.maps.__load
    apiLoad(
      [
        ['2.4.127', '7SPBZ-35G6V-YEMP5-UAJB5-WGEP6-AEFG3', 0],
        [
          'https://3gimg.qq.com/',
          'lightmap/api_v2/2/4/127/mods/',
          'https://3gimg.qq.com/lightmap/api_v2/2/4/127/theme/',
          true
        ],
        [1, 18, 34.519469, 104.461761, 4],
        [
          1578641943820,
          'https://pr.map.qq.com/pingd',
          'https://pr.map.qq.com/pingd'
        ],
        [
          'https://apis.map.qq.com/jsapi',
          'https://apikey.map.qq.com/mkey/index.php/mkey/check',
          'https://sv.map.qq.com/xf',
          'https://sv.map.qq.com/boundinfo',
          'https://sv.map.qq.com/rarp',
          'https://apis.map.qq.com/api/proxy/search',
          'https://apis.map.qq.com/api/proxy/routes/',
          'https://confinfo.map.qq.com/confinfo',
          'https://overseactrl.map.qq.com'
        ],
        [
          [
            null,
            [
              'https://rt0.map.gtimg.com/tile',
              'https://rt1.map.gtimg.com/tile',
              'https://rt2.map.gtimg.com/tile',
              'https://rt3.map.gtimg.com/tile'
            ],
            'png',
            [256, 256],
            3,
            19,
            '114',
            true,
            false
          ],
          [
            null,
            [
              'https://m0.map.gtimg.com/hwap',
              'https://m1.map.gtimg.com/hwap',
              'https://m2.map.gtimg.com/hwap',
              'https://m3.map.gtimg.com/hwap'
            ],
            'png',
            [128, 128],
            3,
            18,
            '110',
            false,
            false
          ],
          [
            null,
            [
              'https://p0.map.gtimg.com/sateTiles',
              'https://p1.map.gtimg.com/sateTiles',
              'https://p2.map.gtimg.com/sateTiles',
              'https://p3.map.gtimg.com/sateTiles'
            ],
            'jpg',
            [256, 256],
            1,
            19,
            '101',
            false,
            false
          ],
          [
            null,
            [
              'https://rt0.map.gtimg.com/tile',
              'https://rt1.map.gtimg.com/tile',
              'https://rt2.map.gtimg.com/tile',
              'https://rt3.map.gtimg.com/tile'
            ],
            'png',
            [256, 256],
            1,
            19,
            '',
            false,
            false
          ],
          [
            null,
            [
              'https://sv0.map.qq.com/hlrender/',
              'https://sv1.map.qq.com/hlrender/',
              'https://sv2.map.qq.com/hlrender/',
              'https://sv3.map.qq.com/hlrender/'
            ],
            'png',
            [256, 256],
            1,
            19,
            '',
            false,
            false
          ],
          [
            null,
            [
              'https://rtt2.map.qq.com/rtt/',
              'https://rtt2a.map.qq.com/rtt/',
              'https://rtt2b.map.qq.com/rtt/',
              'https://rtt2c.map.qq.com/rtt/'
            ],
            'png',
            [256, 256],
            1,
            19,
            '',
            false,
            false
          ],
          null,
          [
            [
              'https://rt0.map.gtimg.com/vector/',
              'https://rt1.map.gtimg.com/vector/',
              'https://rt2.map.gtimg.com/vector/',
              'https://rt3.map.gtimg.com/vector/'
            ],
            [256, 256],
            3,
            18,
            '114',
            [
              'https://rt0.map.gtimg.com/icons/',
              'https://rt1.map.gtimg.com/icons/',
              'https://rt2.map.gtimg.com/icons/',
              'https://rt3.map.gtimg.com/icons/'
            ],
            []
          ],
          null
        ],
        ['https://s.map.qq.com/TPano/v1.1.2/TPano.js', 'map.qq.com/', '']
      ],
      loadScriptTime
    )
  }
  var loadScriptTime = new Date().getTime()
  getScript('https://3gimg.qq.com/lightmap/api_v2/2/4/127/main.js')
})()

;(window.qq = window.qq || {}),
  (qq.maps = qq.maps || {}),
  window.soso || (window.soso = qq),
  soso.maps || (soso.maps = qq.maps),
  (qq.maps.Geolocation = (function() {
    'use strict'
    var e = [],
      t = null,
      o = 0,
      n = '_geoIframe_' + Math.ceil(1e7 * Math.random()),
      i = document.createElement('iframe'),
      r = null,
      s = null,
      a = null,
      c = null,
      u = function(u, l) {
        if (!u) return void alert('请输入key！')
        if (!l) return void alert('请输入referer！')
        var p = document.getElementById(n)
        if (!p) {
          i.setAttribute('id', n), i.setAttribute('allow', 'geolocation')
          var g = 'https:'
          i.setAttribute(
            'src',
            g + '//apis.map.qq.com/tools/geolocation?key=' + u + '&referer=' + l
          ),
            i.setAttribute('style', 'display: none; width: 100%; height: 30%'),
            document.body
              ? document.body.appendChild(i)
              : document.write(i.outerHTML)
          var m = this
          window.addEventListener(
            'message',
            function(n) {
              var i = n.data
              if (i && 'geolocation' == i.module) {
                if ((clearTimeout(c), e.length > 0)) {
                  var u = e.shift()
                  u.sucCb && u.sucCb(i)
                }
                ;(o = 2), m.executeNextGeo(), t && t(i)
              } else {
                s = new Date().getTime()
                var l = s - r
                if (l >= a) {
                  if (e.length > 0 && 'geo' === e[0].type) {
                    var u = e.shift(),
                      p = { type: 'fail', code: 5, message: 'The request' }
                    u.errCb && u.errCb(p)
                  }
                  clearTimeout(c), (o = -1), m.executeNextGeo()
                }
                if (e.length > 0 && 'ip' === e[0].type) {
                  var u = e.shift()
                  u.errCb && u.errCb(p)
                }
              }
            },
            !1
          )
        }
      }
    return (
      (u.prototype.executeNextGeo = function() {
        1 !== o && e.length > 0 && ((o = 1), e[0].geoprocess())
      }),
      (u.prototype.getLocation = function(t, n, i) {
        if (i && i.timeout) {
          var r = new RegExp('^[0-9]*$')
          if (!r.test(i.timeout)) return void alert('timeout 请输入数字')
        }
        if (e.length > 10)
          throw new Error('geolocation queue must be lass than 10')
        e.push({
          sucCb: t,
          errCb: n,
          option: i,
          geoprocess: this.getOnceLocation,
          type: 'geo'
        }),
          1 !== o && ((o = 1), this.getOnceLocation())
      }),
      (u.prototype.getOnceLocation = function() {
        var t = e[0] && e[0].option
        ;(r = new Date().getTime()),
          (a = t && t.timeout ? +t.timeout : 1e4),
          clearTimeout(c),
          (c = setTimeout(function() {
            if (e.length > 0) {
              var t = e.shift()
              t.errCb && t.errCb()
            }
          }, a)),
          document
            .getElementById(n)
            .contentWindow.postMessage('getLocation', '*')
      }),
      (u.prototype.getIpLocation = function(t, n) {
        if (e.length > 10)
          throw new Error('geolocation queue mast be lass than 10')
        e.push({
          sucCb: t,
          errCb: n,
          geoprocess: this.getOnceIpLocation,
          type: 'ip'
        }),
          1 !== o && ((o = 1), this.getOnceIpLocation())
      }),
      (u.prototype.getOnceIpLocation = function() {
        document
          .getElementById(n)
          .contentWindow.postMessage('getLocation.robust', '*')
      }),
      (u.prototype.watchPosition = function(e) {
        ;(t = e),
          document
            .getElementById(n)
            .contentWindow.postMessage('watchPosition', '*')
      }),
      (u.prototype.clearWatch = function() {
        ;(t = null),
          document
            .getElementById(n)
            .contentWindow.postMessage('clearWatch', '*')
      }),
      u
    )
  })())
