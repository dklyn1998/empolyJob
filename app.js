//app.js
App({
  onLaunch: function () {

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 获取位置信息
    wx.getLocation({
      type: 'wgs84',
      success: (res)=> {
        var latitude = res.latitude
        var longitude = res.longitude
        console.log(latitude+"---"+longitude)
        // this.globalData.latitude = latitude
        // this.globalData.longitude=longitude
        wx.setStorageSync('latitude', latitude)
        wx.setStorageSync('longitude', longitude)
      },
    })
    // 登录
    wx.login({
      success:(res)=> {
        if (res.code) {
          // console.log(res.code)
          console.log(res)
          wx.setStorageSync('code', res.code)
          console.log('缓存中的code---'+wx.getStorageSync('code')
            )
          //发起网络请求
          wx.request({
            url: 'http://job.dongdongidea.com/index/index/userlogin',
            method:'POST',
            data: {
              code: wx.getStorageSync('code'),//'043wtgOt16TOQe0PDXOt1ULfOt1wtgOk',
              longitude: wx.getStorageSync('longitude'),
              latitude: wx.getStorageSync('latitude')
            },
            success:(res)=>{
              console.log(res)
              const user_id = res.data.data.id
              // this.globalData.user_id=92 //登陆错误 为保证使用先设置固定的
              // console.log(this.globalData.user_id)
              wx.setStorageSync('user_id', 92)
              wx.setStorageSync('my_id', 51)
              console.log('登陆成功并取到user_id')
              console.log('取到的id为'+user_id)
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  globalData: {
    user_id:92,
  },
})