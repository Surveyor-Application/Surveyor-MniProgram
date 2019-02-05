
Page({
  data: {
    list: [],
    id: [],
    answer: [],
    result: []
  },

  onLoad(opts) {
    var that = this
    wx.request({
      url: 'http://localhost:8080/question/list', 
      data: {
        surid: 1
      },
      success: res => {
        that.setData ({
          list: res.data
        })
      }
    })
  },

  formSubmit(e) {
    var that = this
    var surid = 1
    var queid = that.data.id
    var answer = that.data.answer
    for( var i = 0; i < this.data.answer.length; i++) {
      wx.request({
        url: 'http://localhost:8080/answer/insert',
        method: "POST",
        data: {
          surid: surid,
          queid: queid[i],
          content: answer[i]
        },
        success: res => {
          if (res.statusCode == 200) {
            that.setData({
              result: res.data
            })
            console.log(that.data.result)
          }3
        }
      })
    }
  },

  formInput(e) {
    var qid = e.target.dataset.id
    this.data.id[qid] = qid + 1
    this.data.answer[qid] = e.detail.value
    this.setData ({
      id: this.data.id, 
      answer: this.data.answer
    })
  }
})
