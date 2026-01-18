Component({
  data: {
    selected: 0,
    color: "#FFD700",
    selectedColor: "#FFFFFF",
    list: [
      {
        pagePath: "/pages/home/home",
        text: "抽签"
      },
      {
        pagePath: "/pages/lunar/lunar",
        text: "黄历"
      }
    ]
  },
  
  attached() {
    // 组件加载时，根据当前页面设置选中状态
    this.setSelected()
  },

  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
    },

    setSelected() {
      const pages = getCurrentPages()
      const currentPage = pages[pages.length - 1]
      const url = currentPage.route
      
      const selected = this.data.list.findIndex(item => {
        return item.pagePath === `/${url}`
      })
      
      if (selected !== -1) {
        this.setData({
          selected: selected
        })
      }
    }
  }
})

