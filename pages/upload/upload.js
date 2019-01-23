
Page({
  data: {
    count: 5,
    imgList: []
  },
  previewImage(e) {
    const imgList = this.data.imgList
    wx.previewImage({
      current: imgList[idx],
      urls: imgList,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
    console.log(imgList)
  },
  chooseImage(e) {
    const that = this
    wx:wx.chooseImage({
      count: 5,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        const tempFilePaths = res.tempFilePaths;
        that.setData({
          imgList: res.tempFilePaths
        })
        console.log(that.data.imgList)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})
