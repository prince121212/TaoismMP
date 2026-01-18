// miniprogram/utils/util.js
// 工具函数

// 获取签文分类名称
function getCategoryName(category) {
  const categoryMap = {
    'gji': '吉',
    'zhong': '中',
    'xiong': '凶'
  }
  return categoryMap[category] || '未知'
}

// 获取签文分类颜色
function getCategoryColor(category) {
  const colorMap = {
    'gji': '#52C41A',
    'zhong': '#FAAD14',
    'xiong': '#F5222D'
  }
  return colorMap[category] || '#999999'
}

module.exports = {
  getCategoryName,
  getCategoryColor
}

