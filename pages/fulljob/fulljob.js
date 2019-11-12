// pages/fulljob/fulljob.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isshow:0,
    isactive:false,
    citylist:['全城市','锦江区','高新区','武侯区','温江区'],
    num:0,
    jobkind: [
      '销售',
      '人事/行政',
      '高级管理',
      '市场',
      '技术',
      '教育',
      '金融',
      '设计',
      '传媒',
      '房地产',
      '服务业',
      '产品',
      '医疗',
      '供应链',
      '采购',
      '汽车',
      '咨询',
      '旅游',
      '培训',
      '其他'
    ],
    id:0,
    currpage:1,
    oldList:[],
    order:["薪资由低到高","薪资由高到低"]
  },

  city:function(){
    this.setData({
      isshow:1,
      num:0
    })
  },
  cancel:function(){
    this.setData({
      isshow:0
    })
  },
  bindkind:function(){
    this.setData({
      isshow:2,
      num:0
    })
  },
  sort:function(){
    this.setData({
      isshow:3,
      num:0
    })
  },
  addclass:function(e){
    this.setData({
    num : e.currentTarget.dataset.index,
    })
  },
  addclass1:function(e){
    console.log(e.currentTarget.dataset.index)
    this.setData({
    num : e.currentTarget.dataset.index,
    })
      wx.request({
        url: 'http://job.dongdongidea.com/index/Position/index',
        data:{
          pageno:1,
          type:1,
          jobtype:this.data.num
        },
        // 请求数据---增加jobtype
        success: (res)=> {
          this.data.oldList=[]
          this.data.currpage=1
          console.log(res.data)
          let list = this.welfare(res.data.data);
          // console.log(res.data.data)
          let olddata = this.data.oldList
          olddata.push(...list)
          // console.log(e)
          this.setData({
            // 拼接数组
            fulljobmsg:olddata,
            totalpage:res.data.totalPage,
            currpage:res.data.currPage,
          })
          // console.log(this.data.currpage)
        }
      })
    },
  addclass2:function(e){
    console.log(e.currentTarget.dataset.index)
    this.setData({
    num : e.currentTarget.dataset.index,
    })
    // console.log(this.data.num)
      wx.request({
        url: 'http://job.dongdongidea.com/index/Position/index',
        data:{
          pageno:1,
          type:1,
          order:this.data.num
        },
        // 请求数据---增加jobtype
        success: (res)=> {
          this.data.oldList=[]
          this.data.currpage=1
          console.log(res.data)
          let list = this.welfare(res.data.data);
          // console.log(res.data.data)
          let olddata = this.data.oldList
          olddata.push(...list)
          // console.log(e)
          this.setData({
            // 拼接数组
            fulljobmsg:olddata,
            totalpage:res.data.totalPage,
            currpage:res.data.currPage,
          })
          // console.log(this.data.currpage)
        }
      })
    },
  binddetail:function(e){
    // console.log(e)
    var id=e.currentTarget.dataset.id
    var user_id=e.currentTarget.dataset.user_id
    wx.navigateTo({
      url: '../detail/detail?id='+id+'&user_id='+user_id,
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  this.formsg()
},
// 请求数据的函数
  formsg(e){
    wx.request({
      url: 'http://job.dongdongidea.com/index/Position/index',
      data:{
        pageno:this.data.currpage,
        type:1,
        // longitude:longitude,
        // latitude:latitude,
      },
      success: (res)=> {
        console.log(res.data)
        let list = this.welfare(res.data.data);
        // console.log(res.data.data)
        let olddata = this.data.oldList
        olddata.push(...list)
        // console.log(e)
        this.setData({
          // 拼接数组
          fulljobmsg:olddata,
          totalpage:res.data.totalPage,
          currpage:res.data.currPage,
        })
        // console.log(this.data.currpage)
      }
    })
  },
// 处理下方输出问题
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
  // 最后一页了，取消下拉功能
  // console.log('我到达底部啦');
  if(this.data.currpage>=this.data.totalpage){
    //没有下一页数据了
    // console.log('没有数据了');
    wx.showToast({
      title: '没有更多内容啦',
      icon: 'none',
    });
      
  }else{
    this.data.currpage++;
    this.formsg();
    // this.addclass1()
  }
    
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  }
})