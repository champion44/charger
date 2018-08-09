// pages/charge/charge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    marker: ['on', 'off', 'off', 'off'],
    money:50
  },
  select: function(res) {
    var that = this
    var id = res.currentTarget.id
    var marker = ['off', 'off', 'off', 'off']
    marker[id - 1] = 'on'
    that.setData({
      marker: marker
    })
    switch (id){
      case '1':
        that.setData({
          money: 50
        })
      break;
      case '2':
        that.setData({
          money: 20
        })
      break;
      case '3':
        that.setData({
          money: 10
        })
      break;
      default:
        that.setData({
          money: '...'
        })
        break;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  confirm:function(res){
    var that = this
var value = res.detail.value
that.setData({
  money:value
})
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})