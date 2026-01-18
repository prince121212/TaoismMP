// miniprogram/data/lunar.js
// 黄历数据模块 - 纯前端实现

/**
 * 农历数据（1900-2100年）
 * 每个元素表示一年的农历信息
 */
const LUNAR_INFO = [
  0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
  0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
  0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
  0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
  0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557
]

/**
 * 天干
 */
const TIAN_GAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸']

/**
 * 地支
 */
const DI_ZHI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']

/**
 * 生肖
 */
const SHENG_XIAO = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']

/**
 * 二十四节气
 */
const JIE_QI = [
  '小寒', '大寒', '立春', '雨水', '惊蛰', '春分',
  '清明', '谷雨', '立夏', '小满', '芒种', '夏至',
  '小暑', '大暑', '立秋', '处暑', '白露', '秋分',
  '寒露', '霜降', '立冬', '小雪', '大雪', '冬至'
]

/**
 * 宜忌数据库
 */
const YI_JI_DATA = {
  yi: [
    ['祈福', '求嗣', '开光', '塑绘', '斋醮', '订盟', '纳采', '嫁娶', '动土', '入宅'],
    ['移徙', '安床', '解除', '入殓', '移柩', '安葬', '破土', '启钻', '修坟', '立碑'],
    ['开市', '交易', '立券', '纳财', '栽种', '纳畜', '牧养', '竖柱', '上梁', '盖屋'],
    ['求财', '开业', '交易', '立券', '会亲友', '上官赴任', '临政亲民', '结婚姻', '纳采问名'],
    ['嫁娶', '祭祀', '祈福', '求嗣', '开光', '出行', '解除', '伐木', '拆卸', '修造'],
    ['祈福', '求财', '赴任', '出行', '移徙', '开市', '交易', '动土', '修造', '安葬'],
    ['祭祀', '沐浴', '捕捉', '栽种', '纳畜', '牧养', '入殓', '除服', '成服', '移柩']
  ],
  ji: [
    ['动土', '开市', '安门', '安床', '安葬', '破土', '修坟', '伐木', '作灶', '栽种'],
    ['嫁娶', '入宅', '开市', '交易', '出行', '词讼', '安门', '移徙', '上梁', '立券'],
    ['嫁娶', '安葬', '出行', '祈福', '动土', '破土', '安床', '开光', '作灶', '斋醮'],
    ['开市', '动土', '掘井', '安葬', '破土', '启钻', '修坟', '伐木', '作梁', '纳畜'],
    ['开市', '入宅', '安葬', '作灶', '词讼', '上梁', '盖屋', '竖柱', '安门', '作灶'],
    ['嫁娶', '安葬', '开市', '交易', '远行', '移徙', '入宅', '动土', '破土', '安门'],
    ['嫁娶', '移徙', '入宅', '开市', '安葬', '动土', '修造', '破土', '作灶', '开光']
  ]
}

/**
 * 吉时数据
 */
const JI_SHI_DATA = [
  ['子时(23:00-01:00)', '卯时(05:00-07:00)', '午时(11:00-13:00)', '酉时(17:00-19:00)'],
  ['丑时(01:00-03:00)', '辰时(07:00-09:00)', '未时(13:00-15:00)', '戌时(19:00-21:00)'],
  ['寅时(03:00-05:00)', '巳时(09:00-11:00)', '申时(15:00-17:00)', '亥时(21:00-23:00)'],
  ['子时(23:00-01:00)', '辰时(07:00-09:00)', '申时(15:00-17:00)', '戌时(19:00-21:00)'],
  ['卯时(05:00-07:00)', '午时(11:00-13:00)', '酉时(17:00-19:00)', '亥时(21:00-23:00)'],
  ['丑时(01:00-03:00)', '巳时(09:00-11:00)', '未时(13:00-15:00)', '戌时(19:00-21:00)'],
  ['寅时(03:00-05:00)', '辰时(07:00-09:00)', '申时(15:00-17:00)', '亥时(21:00-23:00)']
]

/**
 * 获取农历年份信息
 */
function getLunarYearInfo(year) {
  return LUNAR_INFO[year - 1900]
}

/**
 * 获取农历年份天数
 */
function getLunarYearDays(year) {
  let sum = 348
  for (let i = 0x8000; i > 0x8; i >>= 1) {
    sum += (getLunarYearInfo(year) & i) ? 1 : 0
  }
  return sum
}

/**
 * 获取农历月份天数
 */
function getLunarMonthDays(year, month) {
  return (getLunarYearInfo(year) & (0x10000 >> month)) ? 30 : 29
}

/**
 * 获取干支纪年
 */
function getGanZhiYear(year) {
  const ganIndex = (year - 4) % 10
  const zhiIndex = (year - 4) % 12
  return TIAN_GAN[ganIndex] + DI_ZHI[zhiIndex]
}

/**
 * 获取生肖
 */
function getShengXiao(year) {
  return SHENG_XIAO[(year - 4) % 12]
}

/**
 * 转换为农历日期
 */
function solarToLunar(date) {
  const baseDate = new Date(1900, 0, 31)
  let offset = Math.floor((date - baseDate) / 86400000)
  
  let year = 1900
  let daysInYear = 0
  
  while (year < 2100 && offset > 0) {
    daysInYear = getLunarYearDays(year)
    if (offset < daysInYear) break
    offset -= daysInYear
    year++
  }
  
  let month = 1
  let daysInMonth = 0
  
  while (month <= 12 && offset > 0) {
    daysInMonth = getLunarMonthDays(year, month)
    if (offset < daysInMonth) break
    offset -= daysInMonth
    month++
  }
  
  const day = offset + 1
  
  return {
    year,
    month,
    day,
    ganZhi: getGanZhiYear(year),
    shengXiao: getShengXiao(year)
  }
}

/**
 * 获取今日宜忌
 */
function getTodayYiJi(date = new Date()) {
  const dayIndex = date.getDay()
  return {
    yi: YI_JI_DATA.yi[dayIndex],
    ji: YI_JI_DATA.ji[dayIndex]
  }
}

/**
 * 获取今日吉时
 */
function getTodayJiShi(date = new Date()) {
  const dayIndex = date.getDay()
  return JI_SHI_DATA[dayIndex]
}

/**
 * 获取节气信息
 */
function getJieQi(date = new Date()) {
  const month = date.getMonth()
  const day = date.getDate()

  // 简化版节气判断（实际应该用更精确的算法）
  const jieQiDates = [
    [5, 20], [20, 4], [19, 6], [20, 5], [20, 6], [21, 6],
    [22, 7], [23, 8], [23, 8], [23, 8], [23, 8], [22, 7]
  ]

  const monthJieQi = []
  const dates = jieQiDates[month]

  if (day === dates[0]) {
    monthJieQi.push(JIE_QI[month * 2])
  }
  if (day === dates[1]) {
    monthJieQi.push(JIE_QI[month * 2 + 1])
  }

  return monthJieQi.length > 0 ? monthJieQi[0] : null
}

/**
 * 获取完整的黄历信息
 */
function getLunarInfo(date = new Date()) {
  const lunar = solarToLunar(date)
  const yiji = getTodayYiJi(date)
  const jishi = getTodayJiShi(date)
  const jieqi = getJieQi(date)

  // 格式化农历日期
  const lunarMonthStr = ['正', '二', '三', '四', '五', '六', '七', '八', '九', '十', '冬', '腊'][lunar.month - 1]
  const lunarDayStr = ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十',
                       '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十',
                       '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十'][lunar.day - 1]

  return {
    // 公历信息
    solar: {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      weekday: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][date.getDay()]
    },

    // 农历信息
    lunar: {
      year: lunar.year,
      month: lunar.month,
      day: lunar.day,
      monthStr: lunarMonthStr + '月',
      dayStr: lunarDayStr,
      ganZhi: lunar.ganZhi + '年',
      shengXiao: lunar.shengXiao
    },

    // 宜忌
    yi: yiji.yi,
    ji: yiji.ji,

    // 吉时
    jiShi: jishi,

    // 节气
    jieQi: jieqi
  }
}

// 导出模块
module.exports = {
  getLunarInfo,
  getTodayYiJi,
  getTodayJiShi,
  getJieQi,
  solarToLunar
}

