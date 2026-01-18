// miniprogram/pages/lunar/lunar.js
const lunarUtil = require('../../data/lunar')

Page({
  data: {
    lunarInfo: null,
    loading: true
  },

  onLoad() {
    this.loadLunarInfo()
  },

  onShow() {
    // 每次显示页面时刷新数据
    this.loadLunarInfo()
  },

  // 加载黄历信息
  loadLunarInfo() {
    try {
      const info = lunarUtil.getLunarInfo()
      this.setData({
        lunarInfo: info,
        loading: false
      })
      console.log('黄历信息:', info)
    } catch (error) {
      console.error('加载黄历信息失败:', error)
      wx.showToast({
        title: '加载失败',
        icon: 'none'
      })
    }
  },

  // 刷新黄历
  onRefresh() {
    this.setData({ loading: true })
    setTimeout(() => {
      this.loadLunarInfo()
    }, 500)
  }
})

