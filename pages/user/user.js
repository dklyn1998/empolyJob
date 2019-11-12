// user/user.js
let app =  getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // 加入点击事件
  hunter: function () {
    if(this.data.role==1){
      wx.navigateTo({
        url: '../reghunter/reghunter',
      })
  }else{
    wx.navigateTo({
      url: '../hunterself/hunterself',
    })
    
  }
  },
  mybag:function(){
    wx.navigateTo({
      url: '../bag/bag',
    })
  },
  myjob: function () {
    wx.navigateTo({
      url: '../myjob/myjob',
    })
  },
  share: function () {
    wx.navigateTo({
      url: '../share/share',
    })
  },
  share: function () {
    wx.navigateTo({
      url: '../share/share',
    })
  },
  feedback: function () {
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  },
  business: function () {
    if(this.data.role==1){
    wx.navigateTo({
      url: '../bussiness/bussiness',
    })
  }else{
    wx.navigateTo({
      url: '../businessuser/businessuser',
    })
  }
  },
  // 授权登录
  bindGetUserInfo: function(e) {
    console.log(e.detail.userInfo)
    if (e.detail.userInfo){
      //用户按了允许授权按钮
    } else {
      //用户按了拒绝按钮
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://job.dongdongidea.com//index/user/index',
      data: {
        user_id:92
      },
      success: (result) => {
        console.log(result.data)
        // console.log(result.data.data.nickName)
        this.setData({
          nickName:result.data.data.nickName,
          avatarUrl:result.data.data.avatarUrl,
          role:result.data.data.is_role
        })
        console.log(this.data.role)
      },
      fail: () => {},
      complete: () => {}
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})