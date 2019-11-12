// pages/detail/detail.js
let app =  getApp();

  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isshow:0
  },
  bindpost:function(){
    this.setData({
      isshow:1
    })
  },
  cancel:function(){
    this.setData({
      isshow:0
    })
  },
  sharemoney:function(){
    this.setData({
      isshow:2
    })
  },
  sendmsg:function(){
    wx.request({
      url: 'http://job.dongdongidea.com/index/Position/signup',
      data: {
        user_id:wx.getStorageSync('user_id'),
        position_id:wx.getStorageSync('position_id'),
        name:this.data.username,
        mobile:this.data.userno,
        sex:1
      },
      method: 'POST',
      success: (result) => {
        if(result.data.status==200){
          wx.showToast({
            title: '申请成功',
          })
        }else{
          wx.showToast({
            title: '申请失败，请确认信息无误后在尝试',
            icon: 'none'
          })
        }
        console.log(result)
      },
    });
      
    this.setData({
      isshow:0
    })
  },
  username:function(e){
    console.log(e)
    this.setData({
      username:e.detail.value
    })
  },
  usersex:function(e){
    // console.log(this.sex)
    this.setData({
      usersex:e.detail.value
    })
    console.log(this.data.usersex)
  },
  userno:function(e){
    console.log(e)
    this.setData({
      userno:e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    wx.setStorageSync('position_id',options.id)
    wx.request({
      url: 'http://job.dongdongidea.com/index/Position/details?id='+options.id+'&user_id='+options.user_id,
      success: (result) => {
        console.log(result.data)
        var detail = result.data.data
        this.welfare(result.data.data);
        this.setData({
          detail:detail,
        })
        // console.log(detail)
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
  sharetofriend:function(e){
    wx.request({
      url: 'http://job.dongdongidea.com/index/User/share',
      method:'POST',
      data: {
        share_id:wx.getStorageSync('user_id'),
        user_id:50,
        position_id:wx.getStorageSync('position_id')
      },
      success: (result) => {
        console.log(result.data)
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