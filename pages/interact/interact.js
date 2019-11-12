// pages/interact/interact.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData: 1,
    type:1,
    // 设置翻页数
    pageset:1,
    currpage:1,
    oldList:[],
    oldList2:[],
    },
  changemsg1:function(e){
    this.data.oldList=[]
    // console.log(e)
    this.setData({
      currentData:1,
      type:e.currentTarget.dataset.type,
      currpage:1,
      // olddata:[]
    })
    console.log(this.data.type)
    this.getmsg()
  },
  changemsg2:function(e){
    this.data.oldList2=[]
    this.setData({
      currentData:2,
      type:e.currentTarget.dataset.type,
      currpage:1,
      // olddata:[]
    })
    console.log(this.data.type)
    this.getmsg2()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getmsg()
  },
    getmsg() {
      wx.request({
        url: 'http://job.dongdongidea.com//index/Chat/index',
        data:{
          type:this.data.type,
          user_id:50,
          longitude:wx.getStorageSync('longitude'),
          latitude:wx.getStorageSync('latitude'),
          pageno:this.data.currpage
        },
        success: (res)=> {
          var nearpeople=res.data.data
          let olddata = this.data.oldList
          olddata.push(...nearpeople)
          this.setData({
            nearpeople:olddata,
            currpage:res.data.currPage,
            totalpage:res.data.totalPage,
            olddata:olddata
          })
          console.log(this.data.currpage+'swiper-notification')
        }
      })
    },
    getmsg2() {
      wx.request({
        url: 'http://job.dongdongidea.com//index/Chat/index',
        data:{
          type:this.data.type,
          user_id:50,
          longitude:wx.getStorageSync('longitude'),
          latitude:wx.getStorageSync('latitude'),
          pageno:this.data.currpage
        },
        success: (res)=> {
          var nearpeople=res.data.data
          let olddata = this.data.oldList2
          olddata.push(...nearpeople)
          console.log(res.data)
          this.setData({
            nearpeople:olddata,
            currpage:res.data.currPage,
            totalpage:res.data.totalPage,
            olddata:olddata
          })
          console.log(this.data.currpage+'swiper-notification')
        }
      })
    },

  checkCurrent:function(){
    
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
    if(this.data.currpage>=this.data.totalpage){
      wx.showToast({
        title: '没有更多附近人啦',
        icon: 'none'
      })
      console.log('加载到最后啦');
    }else{
      this.data.currpage++
      this.getmsg()
      console.log(this.data.currpage+'数据加载啦');
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})