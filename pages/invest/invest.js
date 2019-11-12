// pages/invest/invest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money:['充50元','充100元','充150元','充200元'],
    num:0,
  },
  isactive:function(e){
    console.log(e.currentTarget.dataset.index)
    this.setData({
      num : e.currentTarget.dataset.index,
      })
  },
  choosemoney:function(e){
    console.log(e)
    this.setData({
      num:4
    })
  },
  myset:function(e){
    console.log(e)
  },
  payfor:function(){
    console.log('点击了按钮')
    this.setData({})
    wx.request({
      url: 'http://job.dongdongidea.com/index/Company/pay',
      data: {
        user_id:92,
        company_id:26,
        // money:this.data.num==0?50:this.num==1?100:this.num==2?150:this.num==3?200:'num==4'
      },
      method: 'POST',
      success: (result) => {
        console.log(result.data)
      },
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  //   var that =this
  //   wx.request({
  //     url: 'http://job.dongdongidea.com/index/user/rechargeAmount',
  //     success: function(res) {
  //       console.log(res.data.data)
  //       var moneymsg = res.data.data
  //       that.setData({
  //         moneymsg:moneymsg
  //       })
  //     }
  //   })

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