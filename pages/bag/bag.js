// pages/bag/bag.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getmoney:function(){
    wx.navigateTo({
      url: '../commission/commission',
    })
  },
  detail: function () {
    wx.navigateTo({
      url: '../Incomedetails/Incomedetails',
    })
  },
  comdetail: function () {
    wx.navigateTo({
      url: '../comdetail/comdetail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://job.dongdongidea.com/index/user/getwithdraw',
      data: {
        user_id:wx.getStorageSync('user_id'),
        amount:3000
      },
      method: 'POST',
      success: (result) => {
        console.log(result)
        // this.setData({
        //   amount:result.data.amount,
        //   child_amount:result.data.child.amount
        // })
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