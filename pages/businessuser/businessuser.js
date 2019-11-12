// pages/businessuser/businessuser.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  invest:function(){
    wx.navigateTo({
      url: '../invest/invest',
    })
  },
  postnewjob:function(){
    wx.navigateTo({
      url: '../postnewjob/postnewjob',
    })
  },
  myjob:function(){
    wx.navigateTo({
      url: '../mypostjob/mypostjob',
    })
  },
  feedback:function(){
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://job.dongdongidea.com/index/Company/index',
      data:{
        user_id:wx.getStorageSync('user_id')
          
      },
      success: (result) => {
        console.log(result.data)
        wx.setStorageSync('region_id', result.data.data.region_id);
          
        var usermsg=result.data.data
        this.setData({
          usermsg:usermsg
        })
        console.log(usermsg)
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