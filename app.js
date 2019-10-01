//app.js
const AV = require('./utils/av-weapp-min.js');

// Initialization of the app
AV.init({
  appId: 'TwkUpb2NNUYnHPgjjQneJMtR-MdYXbMMI',
  appKey: 'vdSdo2S1bVwvgMc954XSFoFk',
});

App({
  onLaunch: function () {
    // 获取用户信息
    
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})