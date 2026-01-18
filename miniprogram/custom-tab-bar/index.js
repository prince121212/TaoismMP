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

  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
    }
  }
})

