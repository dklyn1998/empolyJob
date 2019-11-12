// pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choosemyimg:[]
  },
  getTitle:function(e){
    console.log(e)
    this.setData({
      title:e.detail.value
    })
  },
  getFeed:function(e){
    console.log(e)
    this.setData({
      feed:e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.title)
  },
  submit:function(e){
    wx.request({
      url: 'http://job.dongdongidea.com/index/user/feedback',
      data: {
        user_id:wx.getStorageSync('user_id'),
        content:'标题为'+this.data.title+'内容为'+this.data.feed
      },
      method: 'POST',
      success: (result) => {
        if(this.data.title!==undefined&this.data.feed!==undefined){
          wx.showToast({
            title: '发送成功',
          })
        }else{
          wx.showToast({
            title: '发送失败，请输入标题或内容',
            icon: 'none'
          })
          return
        }
        console.log(result.data);
      },
    });
  },
// 上传图片----
chooseimg:function(e){
  wx.chooseImage({
    count: 9,
    sizeType: ['original', 'compressed'],
    sourceType: ['album', 'camera'],
    success: (result) => {
      const tempFilePaths = result.tempFilePaths
      this.setData({
        tempFilePaths,
        // 图片数组进行赋值并且拼接
        choosemyimg2:result.tempFilePaths//[...this.data.choosemyimg,...result.tempFilePaths]
      })
    }
  })
    
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