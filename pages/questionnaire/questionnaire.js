
Page({
  data: {
    list: [
      {
        question: 'This is question 1.'
      }, {
        question: 'This is question 2'
      }, {
        question: 'This is question 3'
      }, {
        question: 'This is question 4'
      }, {
        question: 'This is question 5'
      }
    ],
    answer: [],
    result: []
  },

  formSubmit(e) {
    wx.request({
      url: 'http://127.0.0.1:8000/readme/answer',
      data: {
        len: this.data.list.length,
        answer: this.data.answer
      }, 
      success: res => {
        if(res.statusCode == 200) {
          this.setData({
            result: res.data
          })
        }
      }
    })
  },
  formInput(e) {
    var id = e.currentTarget.id
    this.data.answer[id] = e.detail.value
    this.setData ({
      answer: this.data.answer
    })
  }
})
