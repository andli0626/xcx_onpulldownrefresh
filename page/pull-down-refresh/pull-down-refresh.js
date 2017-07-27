Page({

  // 开始刷新
  onPullDownRefresh: function () {

    wx.showToast({
      title: 'loading...',
      icon: 'loading'
    })
    console.log('onPullDownRefresh', new Date())

  },

  // 停止刷新
  stopPullDownRefresh: function () {

    wx.stopPullDownRefresh({
      complete: function (res) {
        wx.hideToast()
        console.log(res, new Date())
      }
    })
    
  }
})
