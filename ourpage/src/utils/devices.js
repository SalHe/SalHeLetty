function getDeviceType() {
    var ua = navigator.userAgent;
    if (ua.indexOf('Android') > -1) {
        return 'Andorid';
    } else if (ua.indexOf('iPhone') > -1) {
        return 'iOS';
    }
    return 'PC';
}

function isInWechat() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i) === 'micromessenger';
}

export {getDeviceType, isInWechat};