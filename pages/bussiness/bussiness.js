// pages/bussiness/bussiness.js
const app = getApp()

  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bussinessindex:0,
    bussinessscale:0,
    // 被选中的图片数组
    choosemyimg:[]
  },
  bussiness:function(){
    wx.request({
      url: 'http://job.dongdongidea.com/index/Company/set',
      data: {
        region_id:'510101',
        region_name:this.data.area,
        company_name:this.data.name,
        user_id:wx.getStorageSync('user_id'),
        industry:this.data.bus,
        nature:'私企',
        scale:'100-1000人',
        realname:this.data.duty,
        company_mobile:this.data.phone,
        company_address:this.data.addr,
        content:this.data.getintro,
        logo:'/image/x.png', 
        license:'license'
      },
      method: 'POST',
      success: (result) => {
        console.log(result)
        wx.showToast({
          title: '申请成功请等待审核',
          icon: 'success',
          duration: 1500,
          mask: true,
        });
          
      },
    });
    wx.navigateTo({
      url: '../businessuser/businessuser',
    })
  },
  bindPickerChange: function(e) {
    console.log(e)
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      bussinessindex: e.detail.value
    })
  },
  bindPickerChangescale: function(e) {
    console.log(e)
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      bussinessscale: e.detail.value
    })
  },
  getarea:function(e){
    this.setData({
      area:e.detail.value
    })
  },
  getname:function(e){
    console.log(e.detail.value)
    this.setData({
      name:e.detail.value
    })
  },
  getbus:function(e){
    this.setData({
      bus:e.detail.value
    })
  },
  getduty:function(e){
    this.setData({
      duty:e.detail.value
    })
  },
  getphone:function(e){
    this.setData({
      phone:e.detail.value
    })
  },
  getintro:function(e){
    this.setData({
      intro:e.detail.value
    })
  },
  getaddr:function(e){
    this.setData({
      addr:e.detail.value
    })
  },
  // 上传图片----
  chooseimg:function(e){
    this.pictureload(1)
  },
  chooseimg2:function(e){
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
  pictureload(){
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (result) => {
        const tempFilePaths = result.tempFilePaths
        // console.log(tempFilePaths);
        this.setData({
          tempFilePaths,
          // 图片数组进行赋值并且拼接
          choosemyimg:result.tempFilePaths
        })
        console.log('获取到后台的值'+tempFilePaths)
        // tempFilePaths = tempFilePaths.join('');
        wx.uploadFile({
          url: 'http://job.dongdongidea.com/index/index/uploads',
          filePath: this.data.tempFilePaths[0],
          name: 'file',
          formData: {
            // 'user': 'test'
          },
          success: (result1) => {
            console.log(result1)
          },
          });
      },
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://job.dongdongidea.com/index/Company/attach',
      success: (result) => {
        var bussinessmsg=result.data.data
        console.log(bussinessmsg)
        this.setData({
          bussinessmsg:bussinessmsg
        })
        // console.log(bussinessmsg.jobtype[0].name)
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