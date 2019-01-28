
Page({
  data: {
    count: 5,
    imgList: [],
    result: []
  },

  previewImage(e) {
    const imgList = this.data.imgList
    var idx = e.currentTarget.id
    wx.previewImage({
      current: imgList[idx],
      urls: imgList,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  chooseImage(e) {
    const that = this
    wx.chooseImage({
      count: 5,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        const tempFilePaths = res.tempFilePaths;
        that.setData({
          imgList: res.tempFilePaths
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  
  uploadImg(e) {
    wx.request({
      url: 'http://127.0.0.1:8000/readme/image',
      data: {
        len: this.data.imgList.length,
        imgs: this.data.imgList
      },
      success: res => {
        if (res.statusCode == 200) {
          this.setData({
            result: res.data
          })
        }
        console.log(this.data.result)
      }
    })
  }
})
