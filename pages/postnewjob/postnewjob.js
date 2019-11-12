// pages/postnewjob/postnewjob.js
let app =  getApp();

  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['全职', '兼职'],
    index:0,
    kind: ['客服', '美工','前端','java','美工'],
    kindof:0,
    area:0,
    cdarea:['双流区','武侯区','锦江区','青羊区'],
    sexno:0,
    sex:['男','女','男女不限'],
    sexmsg:0
  },  
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    console.log(e)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChangekind: function(e) {
    console.log(e)
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      kindof: e.detail.value
    })
  },
  bindPickerChangesex: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      sexno: e.detail.value,
    })
    
  },
  bindPickerChangearea: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      area: e.detail.value
    })
  },
  bindnewjob:function(){
    wx.request({
      url: 'http://job.dongdongidea.com/index/Company/publish',
      data: {
        title: this.data.title,
        content: this.data.condition,
        type:parseInt(this.data.index)+1,
        user_id:wx.getStorageSync('user_id'),
        jobtype: this.data.index+1,
        longitude:app.globalData.longitude,
        latitude:app.globalData.latitude,
        salary:this.data.salary,
        rebate:this.data.money,
        sex:parseInt(this.data.sexno)+1,
        agemin:this.data.minage,
        agemax:this.data.maxage,
        welfare:'五险一金',
        // 区域加不起
        region_id:wx.getStorageSync('region_id'),
        region_name:this.data.cdarea[this.data.area],
      },
      method: 'POST',
      success: (result)  => {
        console.log(result.data)
        if(result.data.status==200){
        wx.showToast({
          title: '申请职位成功',
          icon: 'success',
          duration: 1500,
          mask: true,
        });
        wx.redirectTo({
          url: '/pages/businessuser/businessuser',
        });
        console.log(this.data.type)
          
      }else{
        wx.showToast({
          title: result.data.info,
          icon: 'none',
          duration: 1500,
          mask: true,
        });
      }
          
      },
    });
  },
  bindtitle:function(e){
    console.log(e)
    this.setData({
      title:e.detail.value
    })
  },
  age:function(e){
    this.setData({
      age:e.detail.value
    })
  },
  condition:function(e){
    this.setData({
      condition:e.detail.value
    })
  },
  salary:function(e){
    this.setData({
      salary:e.detail.value
    })
  },
  // 获取最低和最高年龄
  minage:function(e){
    this.setData({
      minage:e.detail.value
    })
  },
  maxage:function(e){
    this.setData({
      maxage:e.detail.value
    })
  },
  money:function(e){
    this.setData({
      money:e.detail.value
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://job.dongdongidea.com/index/Company/attach',
      success: (result) => {
        console.log(result.data.data)
        this.setData({
          jobtype:result.data.data
        })
        console.log(this.data.jobtype.name)
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