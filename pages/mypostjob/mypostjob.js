// pages/mypostjob/mypostjob.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://job.dongdongidea.com/index/Position/signuplist',
      data: {
        type:1,
        user_id:wx.getStorageSync('user_id'),
        // pageno:1
      },
      method: 'GET',
      success: (result) => {
        console.log(result.data)
        let msg =result.data.data
        let list = this.welfare(result.data.data);
        this.setData({
          msg
        })
      },
    });
  },
  detail: function () {
    wx.navigateTo({
      url: '../postpeople/postepeople',
    })
  },
  welfare(e){
    for(var i=0;i <e.length; i++){
      var walfare=[]
      // 让福利部分变成数组
      var welfare= e[i].welfare.split(',')
      // 薪水部分多两个小数点
      e[i].salary=(e[i].salary).toFixed(2)
      // 修改时间设置
      e[i].ctime= (e[i].ctime/360000).toFixed(0)
      e[i].welfare=welfare
      var id=e[i].id
      // console.log(id)
    }
    return e;
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