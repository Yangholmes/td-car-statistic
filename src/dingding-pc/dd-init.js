;

/**
 * [通过config接口注入权限验证配置
 * @type {[type]}
 */
DingTalkPC.config({
    agentId: 76417678, // 必填，微应用ID
    corpId: dingc4aebce85d94b448, //必填，企业ID
    timeStamp: _config.timeStamp, // 必填，生成签名的时间戳
    nonceStr: _config.nonceStr, // 必填，生成签名的随机串
    signature: _config.signature, // 必填，签名
    jsApiList: [ // 必填，需要使用的jsapi列表
        'runtime.permission.requestAuthCode',
        'device.notification.alert',
        'device.notification.confirm',
        'biz.contact.choose',
        'device.notification.prompt',
        'biz.ding.post'
        ] // 必填，需要使用的jsapi列表
});
