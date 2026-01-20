Page({
  data: {
    currentPage: 1,
    travelData: [
      {
        title: '景德镇古窑民俗博览区',
        content: '国家5A级景区，展示景德镇千年制瓷历史。可观看传统手工制瓷工艺，参观古代窑炉，了解瓷器烧制全过程。'
      },
      {
        title: '中国陶瓷博物馆',
        content: '收藏展示景德镇各个时期的陶瓷精品，从古代到现代，系统展现中国陶瓷发展史。免费开放，值得细细品味。'
      },
      {
        title: '陶溪川文创街区',
        content: '由老厂房改造的文创园区，汇集众多陶瓷艺术家工作室、创意市集、咖啡馆。周末有创意集市，可淘到独特的手工陶瓷作品。'
      },
      {
        title: '御窑厂遗址',
        content: '明清御窑厂遗址，专为皇室烧制瓷器的地方。可以看到大量古代瓷片，了解御窑的历史和工艺。'
      },
      {
        title: '三宝国际陶艺村',
        content: '隐藏在山林中的陶艺村，众多艺术家在此创作。环境清幽，可以体验陶艺制作，感受艺术氛围。'
      }
    ],
    productData: [
      {
        name: '58头皇家花园—蓝',
        category: '骨瓷餐具 > 至尊珐琅彩',
        image: 'https://si.geilicdn.com/weidian1286456178-55d6000001762c2971520a217216_1560_2340.jpg.webp?w=640&h=640'
      },
      {
        name: '76头金镶玉',
        category: '高温白玉瓷餐具 > 颜色釉',
        image: 'https://si.geilicdn.com/pcitem1286456178-38f600000170f155148a0a21348d_1002_1709.jpg.webp?w=640&h=640'
      },
      {
        name: '68头 如愿 餐具',
        category: '骨瓷餐具 > 手工镶金',
        image: 'https://si.geilicdn.com/pcitem1286456178-243900000189f2d6adae0a23136f_4160_6240.jpg.webp?w=750&h=750&cp=1'
      },
      {
        name: '手绘玲珑珠联碧合盖碗茶具',
        category: '手绘茶具 > 玲珑盖碗套装',
        image: 'https://si.geilicdn.com/pcitem1286456178-675d0000019034d05e7e0a2102c5_1280_1777.jpg.webp?w=640&h=640'
      },
      {
        name: '9头玲珑鱼',
        category: '手绘茶具 > 玲珑壶组套装',
        image: 'https://si.geilicdn.com/pcitem1286456178-139c00000170ba76804a0a217216_3168_3168.jpg.webp?w=640&h=640'
      },
      {
        name: '9头玲珑缠枝鸿福',
        category: '手绘茶具 > 玲珑壶组套装',
        image: 'https://si.geilicdn.com/pcitem1286456178-237800000170b932aab20a21348d_1386_2079.jpg.webp?w=640&h=640'
      },
      {
        name: '中国红茶具',
        category: '品牌 > 国外',
        image: 'https://si.geilicdn.com/pcitem1286456178-5a2a00000170ba6086cd0a21c2a7_5472_3648.jpg.webp?w=640&h=640'
      },
      {
        name: '15头青出于兰',
        category: '品牌 > 国外',
        image: 'https://si.geilicdn.com/pcitem1286456178-2eb300000170ba5863240a21c2a8_3648_5472.jpg.webp?w=750&h=750&cp=1'
      },
      {
        name: '中国红口杯',
        category: '品牌 > 国外',
        image: 'https://si.geilicdn.com/pcitem1286456178-086f00000170ba5e48530a217205_5398_3599.jpg.webp?w=750&h=750&cp=1'
      },
      {
        name: '32头雀翔',
        category: '品牌 > 国外',
        image: 'https://si.geilicdn.com/pcitem1286456178-001b00000170ba6674960a21c2a8_5472_3648.jpg.webp?w=750&h=750&cp=1'
      },
      {
        name: '76头皇家御品 红',
        category: '高温白玉瓷餐具 > 臻品珐琅彩',
        image: 'https://si.geilicdn.com/pcitem1286456178-4fde00000171731b074c0a217216_1386_2079.jpg.webp?w=640&h=640'
      },
      {
        name: '76头皇家御品',
        category: '高温白玉瓷餐具 > 臻品珐琅彩',
        image: 'https://si.geilicdn.com/wdseller1286456178-509d00000171730a3aa20a20b7b9_554_589.jpg.webp?w=750&h=750&cp=1'
      },
      {
        name: '86头珐琅彩-帝王黄',
        category: '骨瓷餐具 > 至尊珐琅彩',
        image: 'https://si.geilicdn.com/bj-wd-1286456178-1513754942515-1548719032_790_636.jpg.webp?w=640&h=640'
      },
      {
        name: '86头珐琅彩-夫人兰',
        category: '骨瓷餐具 > 至尊珐琅彩',
        image: 'https://si.geilicdn.com/bj-wd-1286456178-1513754092668-1220617405_790_563.jpg.webp?w=640&h=640'
      },
      {
        name: '56头青出于蓝',
        category: '品牌 > 国外',
        image: 'https://si.geilicdn.com/bj-wd-1286456178-1538810596753-655637623_1126_750.jpg.webp?w=750&h=750&cp=1'
      },
      {
        name: '32头金碧辉煌',
        category: '品牌 > 国外',
        image: 'https://si.geilicdn.com/pcitem1286456178-245300000170c3edeb100a21348d_800_800.jpg.webp?w=750&h=750&cp=1'
      },
      {
        name: '58头爱马仕餐具',
        category: '品牌 > 国外',
        image: 'https://si.geilicdn.com/pcitem1286456178-119e00000170ba6a618a0a21c2a7_5472_3648.jpg.webp?w=750&h=750&cp=1'
      },
      {
        name: '32头赤道丛林',
        category: '品牌 > 国外',
        image: 'https://si.geilicdn.com/pcitem1286456178-5a7100000170c2bb8d0c0a21c2a8_5472_3648.jpg.webp?w=750&h=750&cp=1'
      },
      {
        name: '72头虞美人',
        category: '高温白玉瓷餐具 > 颜色釉',
        image: 'https://si.geilicdn.com/pcitem1286456178-63310000017096889aa00a20b7b9_4096_6144.jpg.webp?w=750&h=750&cp=1'
      },
      {
        name: '58头蓝莲',
        category: '品牌 > 国外',
        image: 'https://si.geilicdn.com/pcitem1286456178-2fbe00000170c401369e0a217205_5616_3744.jpg.webp?w=640&h=640'
      }
    ],
    cultureData: [
      {
        title: '陶瓷的起源与发展',
        content: '中国是瓷器的故乡，制陶历史可追溯至新石器时代。商周时期出现原始瓷器，东汉时期烧制出真正的瓷器。',
        detail: '新石器时代，中国先民就开始制作陶器，距今已有万年历史。商周时期，原始瓷器出现，这是陶向瓷过渡的重要阶段。东汉时期，浙江上虞等地成功烧制出真正的瓷器，标志着瓷器的诞生。\n\n唐代是中国陶瓷发展的重要时期，形成了"南青北白"的格局，越窑青瓷和邢窑白瓷各领风骚。宋代陶瓷艺术达到巅峰，五大名窑和八大窑系竞相辉映，追求自然之美。\n\n元代青花瓷横空出世，开创了彩瓷新纪元。明清时期，景德镇成为全国制瓷中心，青花、五彩、粉彩、珐琅彩等品种层出不穷，工艺技术达到登峰造极的境界。',
        expanded: false
      },
      {
        title: '景德镇瓷都',
        content: '景德镇素有"瓷都"之称，始于汉代，兴于唐宋，盛于明清。其瓷器以"白如玉、明如镜、薄如纸、声如磬"著称。',
        detail: '景德镇制瓷始于汉代，唐代称昌南镇，以生产青白瓷闻名。宋真宗景德年间，因进贡瓷器质量上乘，皇帝赐名"景德镇"，从此名扬天下。\n\n景德镇瓷器有"白如玉、明如镜、薄如纸、声如磬"的美誉。青花、粉彩、玲珑、颜色釉并称四大名瓷。青花瓷色泽青翠，粉彩瓷柔和淡雅，玲珑瓷剔透精巧，颜色釉变化万千。\n\n明清时期，景德镇设立御窑厂，专为皇室烧制瓷器。历代名匠辈出，创造了无数精品。景德镇瓷器远销海外，成为中国的文化名片，"瓷都"之名实至名归。',
        expanded: false
      },
      {
        title: '宋代五大名窑',
        content: '宋代五大名窑代表了中国陶瓷艺术的最高成就。汝窑天青色釉如雨过天晴，官窑紫口铁足庄重典雅。',
        detail: '汝窑位于河南汝州，以天青色釉著称，釉色如雨过天晴的天空，温润如玉。汝窑传世品极少，每件都是国宝级文物。\n\n官窑专为宫廷烧制，器型端庄，釉色青灰，有"紫口铁足"特征。追求古朴典雅，体现皇家气度。\n\n哥窑以开片著称，釉面布满裂纹，形成"金丝铁线"的独特美感。开片是釉与胎膨胀系数不同造成的，却成就了别样的艺术效果。\n\n钧窑以窑变釉闻名，釉色变化莫测，有"入窑一色，出窑万彩"之说。玫瑰紫、海棠红、天蓝等色彩斑斓。\n\n定窑以白瓷见长，胎质细腻，釉色洁白。刻花、印花装饰精美，线条流畅，图案生动。',
        expanded: false
      },
      {
        title: '龙泉青瓷',
        content: '龙泉窑是中国历史上烧制年代最长、窑址分布最广的青瓷名窑。其釉色青翠欲滴，如翡翠般温润。',
        detail: '龙泉窑位于浙江龙泉，始于三国两晋，盛于宋元，延续至今已有1700多年历史。是中国制瓷史上烧制年代最长、窑址分布最广、产品质量最高的青瓷名窑。\n\n龙泉青瓷釉色青翠，有梅子青、粉青等名贵品种。梅子青如青梅初熟，色泽深沉；粉青如青玉温润，淡雅柔和。釉层肥厚，光泽柔和，有"千峰翠色"之美誉。\n\n龙泉青瓷造型优美，线条流畅，装饰简洁。多采用刻花、划花、贴花等技法，图案以莲花、牡丹、龙凤为主。体现了宋代"天人合一"的审美理念，追求自然之美。\n\n2009年，龙泉青瓷传统烧制技艺被列入联合国教科文组织人类非物质文化遗产代表作名录。',
        expanded: false
      },
      {
        title: '青花瓷的艺术',
        content: '青花瓷是中国瓷器的代表，始于唐代，成熟于元代，盛于明清。以钴料在瓷胎上绘画，施透明釉高温烧制。',
        detail: '青花瓷是用含钴的矿物颜料在瓷胎上绘画，再施透明釉，经1300度高温一次烧成。青花发色幽雅，图案永不褪色，是釉下彩的代表。\n\n唐代青花瓷初现，元代青花瓷成熟，使用进口"苏麻离青"料，发色浓艳。明代永乐、宣德青花最为著名，使用"苏泥勃青"料，呈色鲜艳，有"铁锈斑"。成化青花淡雅，嘉靖、万历青花浓重。\n\n清代康熙青花达到巅峰，使用国产"珠明料"，发色翠蓝，分水技法成熟，能表现浓淡层次。雍正、乾隆青花精致典雅。\n\n青花瓷将中国水墨画艺术融入瓷器装饰，题材丰富，有山水、人物、花鸟、龙凤等。笔法流畅，构图精美，是中国瓷器的代表作品。',
        expanded: false
      },
      {
        title: '彩瓷的辉煌',
        content: '彩瓷包括釉上彩和釉下彩。明代五彩瓷色彩浓艳，清代粉彩柔和淡雅，珐琅彩精致华贵。',
        detail: '彩瓷分为釉下彩和釉上彩。釉下彩在瓷胎上绘画后施釉烧制，色彩永不褪色，如青花、釉里红。釉上彩在烧好的白瓷上绘画，再入窑低温烧制，色彩丰富，如五彩、粉彩。\n\n明代五彩瓷以红、绿、黄、紫、黑为主色，色彩浓艳，对比强烈。嘉靖、万历五彩最为著名，图案繁密，富丽堂皇。\n\n清代粉彩瓷是在五彩基础上发展而来，使用"玻璃白"打底，色彩柔和淡雅，有粉润之感。雍正粉彩最为精美，色彩清新，画工细腻。\n\n珐琅彩是清代宫廷御用瓷器，在景德镇烧制白瓷后送到宫中，由宫廷画师绘画，再入窑烧制。用料考究，画工精致，色彩华贵，每件都是艺术珍品。\n\n斗彩结合釉下青花和釉上彩绘，先用青花勾勒轮廓，烧成后再填彩色，色彩丰富，层次分明。成化斗彩鸡缸杯是斗彩的代表作。',
        expanded: false
      }
    ]
  },

  onLoad() {
    this.checkTaoismType()
  },

  toggleDetail(e) {
    const index = e.currentTarget.dataset.index
    const key = `cultureData[${index}].expanded`
    this.setData({
      [key]: !this.data.cultureData[index].expanded
    })
  },

  onSwiperChange(e) {
    this.setData({
      currentPage: e.detail.current
    })
  },

  goToPrevPage() {
    if (this.data.currentPage > 0) {
      this.setData({
        currentPage: this.data.currentPage - 1
      })
    }
  },

  goToNextPage() {
    if (this.data.currentPage < 2) {
      this.setData({
        currentPage: this.data.currentPage + 1
      })
    }
  },

  checkTaoismType() {
    const url = 'https://eylxfyrmqopmiolxmfhd.supabase.co/rest/v1/TAOISM?id=eq.1&select=TAOISMtype'
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5bHhmeXJtcW9wbWlvbHhtZmhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4OTE5OTIsImV4cCI6MjA4NDQ2Nzk5Mn0.1lzWWwkPxBQ9S-01aCAloWS9jOx3NzLduEMYctzUbOY'

    wx.request({
      url: url,
      method: 'GET',
      header: {
        'apikey': apiKey,
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      success: (res) => {
        console.log('请求成功:', res)
        if (res.data && res.data.length > 0) {
          const taoismType = res.data[0].TAOISMtype
          console.log('TAOISMtype:', taoismType)
          if (taoismType === 1) {
            wx.switchTab({
              url: '/pages/lottery/lottery'
            })
          }
        }
      },
      fail: (err) => {
        console.error('获取配置失败:', err)
      }
    })
  }
})
