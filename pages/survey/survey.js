
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
    wx.request({
      url: 'http://localhost:8080/answer/insert',
      data: {
        queid: 1,
        surid: that.data.id,
        answer: that.data.answer
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
    console.log(id)
    this.data.answer = e.detail.value
    this.setData ({
      id: this.data.id, 
      answer: this.data.answer
    })
    console.log(this.data.answer)
  }
})
