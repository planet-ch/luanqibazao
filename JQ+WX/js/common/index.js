var host = window.location.origin + '/api'
// var host ='https://bless.skg.com/api'

function Util () {
    this.host = host
}

/**
 * 设备判断
 */
Util.prototype.isIos = function () {
    var  u  =  navigator.userAgent,
        app  =  navigator.appVersion;
    var  ios  =  !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    var  iPad  =  u.indexOf('iPad')  >  -1;
    var  iPhone  =  u.indexOf('iPhone')  >  -1  ||  u.indexOf('Mac')  >  -1;
    if  (ios  ||  iPad  ||  iPhone)  {
        return  true;
    }
    else  {
        return  false;
    }
}

/**
 * 手机号验证
 */
Util.prototype.isMobile = function (value) {
    return /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[189])\d{8}$/.test(value)
}

/**
 * 祝福语验证
 */
Util.prototype.contentLength = function (value) {
    return value.length <= 45
}

/**
 * 开启确认弹框
 */
Util.prototype.dialog = function (text) {
    text ? $('.weui-dialog__bd').html(text) : $('.weui-dialog__bd').html('祝福定制后无法修改，是否完成？')
    if (this.isIos()) {
        $('#iosDialog').fadeIn(200)
    } else {
        $('#androidDialog').fadeIn(200)
    }
}

/**
 * 关闭确认弹框
 */
Util.prototype.closeDialog = function () {
    if (this.isIos()) {
        $('#iosDialog').fadeOut(200);
    } else {
        $('#androidDialog').fadeOut(200);
    }
}

/**
 * 开启loading
 */
Util.prototype.loading = function (msg) {
    $('.weui-toast__content').html(msg || '发送中')
    var $loadingToast = $('#loadingToast');
    if ($loadingToast.css('display') != 'none') return;
    $loadingToast.fadeIn(100);
}

/**
 * 关闭loading
 */
Util.prototype.closeLoading = function () {
    var $loadingToast = $('#loadingToast');
    $loadingToast.fadeOut(100);
}

/**
 * 开启提示
 */
Util.prototype.toast = function (text, delay, fn, type) {
    if (!$('#topTips')) {
        $('body').append('<div class="weui-toptips weui-toptips_warn" id="topTips"></div>')
    }
    if (Boolean(type)) {
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
}

/**
 * 上传接口
 */
Util.prototype.upload = function (file, success, error) {
    var fromData = new FormData()
    fromData.append('file', file)
    $.ajax({
        headers: {},
        type: 'POST',
        data: fromData,
        contentType: false,
        processData: false,
        timeout: 15000, //超时时间设置，单位毫秒
        url: this.host + '/blessing/upload',
        success: success,
        error: error
    })
}

/**
 * 普通请求
 */
Util.prototype.ajax = function (url, type, data, success, error) {
    console.log(params);
    $.ajax({
        headers: {
            'Content-Type': 'application/json'
        },
        type: type,
        data: JSON.stringify(data),
        timeout: 15000, //超时时间设置，单位毫秒
        dataType: 'json',
        processData: false,
        contentType: 'application/json',
        url: this.host + url,
        success: success,
        error: error
    })
}
