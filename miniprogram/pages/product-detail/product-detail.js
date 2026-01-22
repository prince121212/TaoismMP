const productsData = require('../../data/products.js')

Page({
  data: {
    product: null,
    currentImageIndex: 0
  },

  onLoad(options) {
    const productId = parseInt(options.id)
    const product = productsData.find(p => p.id === productId)

    if (product) {
      this.setData({
        product: product
      })
    } else {
      wx.showToast({
        title: '商品不存在',
        icon: 'none'
      })
      setTimeout(() => {
        wx.navigateBack()
      }, 1500)
    }
  },

  onImageChange(e) {
    this.setData({
      currentImageIndex: e.detail.current
    })
  },

  previewImage(e) {
    const current = e.currentTarget.dataset.url
    wx.previewImage({
      current: current,
      urls: this.data.product.images
    })
  },

  onShareAppMessage() {
    return {
      title: this.data.product.name,
      path: `/pages/product-detail/product-detail?id=${this.data.product.id}`,
      imageUrl: this.data.product.coverImage
    }
  }
})
