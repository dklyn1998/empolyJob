// pages/poster/poster.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  poster:function(){
    wx.navigateTo({
      url: '../postpeople/postepeople',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorageSync('position_id',options.position_id)
    // app.globalData.position_id=option.id
    // console.log(options)
    wx.request({
      url: 'http://job.dongdongidea.com/index/Position/details?id='+options.position_id+'&user_id='+options.user_id,
      success: (result) => {
        console.log(result.data)
        this.welfare(result.data.data);
        var detail = result.data.data
        this.setData({
          detail:detail,
            
        })
        console.log(detail)
      },
    });
  },
  welfare(e){
      // 让福利部分变成数组
      var welfare= e.welfare.split(',')
      // 工资变成元为单位，并有两个小数点
      var salary=(e.salary).toFixed(2)
      this.setData({
        welfare:welfare,
        salary:salary
      })
  },
  getit:function(e){
    wx.request({
      url: 'http://job.dongdongidea.com/index/Position/receipt',
      data: {
        position_id:wx.getStorageSync('position_id'),
        user_id:92
      },
      method: 'POST',
      success: (result) => {
        console.log(result.data)
        if(result.data.status==200){
        wx.showToast({
          title: '申请成功',
          icon: 'success',
          mask: true,
        });
      }else{
        wx.showToast({
          title: result.data.info+'请再试',
          icon: 'none',
          mask: true,
        });
      }
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