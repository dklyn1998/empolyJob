// pages/hunterjob/hunterjob.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currpage:1,
    oldList:[]
  },
  detail:function(e){
    console.log(e)
    var id=e.currentTarget.dataset.id
    var user_id=e.currentTarget.dataset.user_id
    wx.navigateTo({
      url: '../poster/poster?position_id='+id+'&user_id='+user_id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
    onLoad: function (options) {
      this.getmsg()
  },
    // 获取数据的函数
    getmsg(){
      wx.request({
        url: 'http://job.dongdongidea.com/index/Position/index',
        data:{
          pageno:this.data.currpage,
        },
        header: {
          'Content-Type': 'application/json'
        },
        success: (res)=> {
          console.log(res.data)
          let list = this.welfare(res.data.data);
          // console.log(res.data.data)
          let olddata = this.data.oldList
          olddata.push(...list)
          this.setData({
            // 拼接数组
            fulljobmsg:olddata,
            totalpage:res.data.totalPage,
            currpage:res.data.currPage,
          })
          // console.log(res.data.data.id)
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
      this.getmsg();
    }
      
    },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})