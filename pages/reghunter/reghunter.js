// pages/reghunter/reghunter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  
  huntername:function(e){
    this.setData({
      name:e.detail.value
    })
  },
  hunternum:function(e){
    console.log(e)
    this.setData({
      num:e.detail.value
    })
  },
  shenhe:function(){
    wx.navigateTo({
      url: "../shenhe/sheneh"
    })
    wx.request({
      url: 'http://job.dongdongidea.com/index/Hunter/set',
      data: {
        user_id:92,
        mobile:this.data.num,
        name:this.data.name
      },
      header: {'content-type':'application/json'},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        console.log(result.data)
        
      },
      fail: () => {},
      complete: () => {}
    });
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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