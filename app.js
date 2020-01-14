
App({
  onLaunch: function () {

    // 模拟加载数据
    wx.$request = ({url, data}) => {
      let p = new Promise((resolve, reject) => {

        setTimeout(() => {
          let list = []

          if (data.pageNum < 3) { // 只加载两页数据
            for (let i = 0; i < data.pageSize; i++) {
              list.push({
                id: (data.pageNum - 1) * data.pageSize + i,
                coverUrl: 'https://pic.uhouzz.com/thumbImagesTest/6c/cac5e4e8f198233909f26a629e1eff507b898d.jpg?x-oss-process=image/resize,h_460',
                title: ' 异乡好居真不错呀真不错',
                createTime: '2019-12-23 16:30:00',
                readed: (data.pageNum - 1) * data.pageSize + i
              })
            }
          }


          let res = {
            code: 200,
            data: {
              rows: list
            }
          }

          resolve(res)
        }, 1000)
      })
      return p
    }


  }
})
