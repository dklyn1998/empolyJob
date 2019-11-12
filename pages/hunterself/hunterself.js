// pages/hunterself/hunterself.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  myjob: function () {
    wx.navigateTo({
      url: '../hunterjob/hunterjob',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://job.dongdongidea.com/index/Hunter/index',
      data: {
        user_id:92
      },
      success: (result) => {
        console.log(result.data)
        this.setData({
          name:result.data.data.name,
          num:result.data.data.num,
          balance:result.data.data.balance
        })
      },
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