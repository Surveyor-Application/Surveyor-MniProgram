
Page({
  data: {
    list: [
      {
        question: 'This is question 1.'
      }
      // , {
      //   question: 'This is question 2'
      // }, {
      //   question: 'This is question 3'
      // }, {
      //   question: 'This is question 4'
      // }, {
      //   question: 'This is question 5'
      // }
    ],
    id: [],
    answer: [],
    result: []
  },

  formSubmit(e) {
    var that = this
    var queid = 1
    var surid = that.data.id
    var answer = that.data.answer
    wx.request({
      url: 'http://localhost:8080/answer/insert',
      method: "POST",
      data: {
        queid: queid,
        surid: surid,
        content: answer
      }, 
      success: res => {
        if(res.statusCode == 200) {
          that.setData({
            result: res.data
          })
        }
      }
    })
  },
  formInput(e) {
    var id = e.target.dataset.id + 1
    this.data.answer = e.detail.value
    this.setData ({
      id: id, 
      answer: this.data.answer
    })
    console.log(this.data.answer)
  }
})
