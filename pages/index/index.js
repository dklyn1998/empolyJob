//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isshow:0,
  },
  showredbag:function(){
    this.setData({
      isshow:1
    })
  },
  hidredbag:function(){
    this.setData({
      isshow:0
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  findfulljob:function(e){
    wx.navigateTo({
      url: '../fulljob/fulljob',
    })
  },
  findpartimejob: function (e) {
    wx.navigateTo({
      url: '../fulljob/fulljob',
    })
  },
  nearpeople: function (e) {
    wx.switchTab({
      url: '../interact/interact',
    })
  },
  nearjob: function (e) {
    wx.navigateTo({
      url: '../fulljob/fulljob',
    })
  },
  todetail:function(e){
    var id=e.currentTarget.dataset.id
    console.log(e)
    wx.navigateTo({
      url: '../detail/detail?id='+id,
    })
    console.log(this.id)
  },
  onLoad: function () {
    console.log(app.globalData.user_id);
    var reqTask = wx.request({
      url: 'http://job.dongdongidea.com/index/index/home',
      data:{
        user_id:wx.getStorageSync('user_id')
          
      },
      success: (result) => {
        console.log(result.data.data.position)
        var indexmsg=result.data.data
        this.indeximg(indexmsg.ad);
        var indexbottommsg=indexmsg.position
        this.setData({
          indexmsg:indexmsg,
          indexbottommsg:indexbottommsg,
        })
      },
    });
      
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  indeximg(e){
    for(var i=0;i<e.length;i++){
      e[i]='http://job.dongdongidea.com'+e[i]
    }
    var indeximages = e
    console.log(indeximages)
    this.setData({
      indeximages:indeximages
    })
},
welfare(e){
  var walfare=[]
  for( var i=0;i<e.length;i++){
  // 让福利部分变成数组
  var welfare= e[i].welfare.split(',')
  // 工资变成元为单位，并有两个小数点
  var salary=(e[i].salary).toFixed(2)
  }
},
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
