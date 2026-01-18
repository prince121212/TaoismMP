// miniprogram/data/signs.js
// 朕瓷灵签 - 64个签文数据

const SIGNS = [
  {
    id: 'sign_001',
    number: 1,
    title: '上上签',
    poem: '春风化雨润万物\n百花齐放竞芬芳\n前路光明无阻碍\n前程似锦待君行',
    meaning: '此签示吉祥之兆。春风化雨，万物生长，象征新的开始充满生机。百花齐放，竞相绽放，预示事业蒸蒸日上。前路光明，无有阻碍，表示前程似锦，一切顺利。',
    advice: '宜把握机遇，勇敢前行。此时正是发展的好时机，应该积极主动，不可错失良机。',
    category: 'gji',
    tags: ['事业', '爱情', '财运']
  },
  {
    id: 'sign_002',
    number: 2,
    title: '上签',
    poem: '月明星稀照前路\n清风徐来拂心湖\n静水深流蕴智慧\n厚积薄发见成果',
    meaning: '此签示平稳发展之象。月明星稀，光明照路，表示方向明确。清风徐来，心境平和，预示内心安定。静水深流，蕴含智慧，象征深厚的积累。厚积薄发，终见成果，预示成功在即。',
    advice: '宜静心修养，积累力量。不可急功近利，应该脚踏实地，厚积薄发，方能成就大业。',
    category: 'gji',
    tags: ['修养', '学业', '事业']
  },
  {
    id: 'sign_003',
    number: 3,
    title: '中签',
    poem: '云遮日月光不明\n风吹树木摇不定\n前路迷茫需思考\n静待时机再出发',
    meaning: '此签示迷茫困顿之象。云遮日月，光明被遮挡，表示前路不明。风吹树木，摇摇欲坠，预示局势不稳。前路迷茫，需要思考，象征当前需要冷静分析。静待时机，再出发，预示困难是暂时的。',
    advice: '宜暂停观望，不可盲目行动。此时应该静心思考，等待时机，不可仓促决定。',
    category: 'zhong',
    tags: ['等待', '思考', '调整']
  },
  {
    id: 'sign_004',
    number: 4,
    title: '中下签',
    poem: '雨势渐急路泥泞\n行人举步多艰难\n莫要灰心继续行\n雨过天晴见彩虹',
    meaning: '此签示困难挑战之象。雨势渐急，路泥泞，表示困难重重。行人举步艰难，预示前行不易。但莫要灰心，继续前行，象征坚持就有希望。雨过天晴，见彩虹，预示困难终会过去。',
    advice: '宜坚持不懈，克服困难。此时虽有挑战，但只要坚持，终能渡过难关。',
    category: 'zhong',
    tags: ['困难', '坚持', '希望']
  },
  {
    id: 'sign_005',
    number: 5,
    title: '下签',
    poem: '暗夜漫漫无星光\n迷途知返是良策\n悬崖勒马莫太晚\n改过自新有生机',
    meaning: '此签示警示之象。暗夜漫漫，无星光，表示前路黑暗。迷途知返，是良策，象征需要反思。悬崖勒马，莫太晚，预示需要及时改正。改过自新，有生机，表示只要改正，仍有希望。',
    advice: '宜反思自省，及时改正。此时需要认真审视自己的行为，改正错误，方能重获生机。',
    category: 'xiong',
    tags: ['警示', '反思', '改正']
  },
  {
    id: 'sign_006',
    number: 6,
    title: '下下签',
    poem: '风雨交加摧枝叶\n雷电轰鸣震天地\n大树倾倒根拔起\n一切化为乌有矣',
    meaning: '此签示大凶之象。风雨交加，摧枝叶，表示灾难临头。雷电轰鸣，震天地，预示事态严重。大树倾倒，根拔起，象征基础动摇。一切化为乌有，表示可能面临重大损失。',
    advice: '宜谨慎小心，防范未然。此时应该极其谨慎，避免冒险，保护好自己的基础。',
    category: 'xiong',
    tags: ['凶险', '警告', '防范']
  }
]

// 获取随机签文
function getRandomSign() {
  const randomIndex = Math.floor(Math.random() * SIGNS.length)
  return SIGNS[randomIndex]
}

// 根据ID获取签文
function getSignById(id) {
  return SIGNS.find(sign => sign.id === id)
}

// 根据签号获取签文
function getSignByNumber(number) {
  return SIGNS.find(sign => sign.number === number)
}

module.exports = {
  SIGNS,
  getRandomSign,
  getSignById,
  getSignByNumber
}

