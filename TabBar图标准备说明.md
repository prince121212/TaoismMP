# TabBar 图标准备说明

## 需要的图标文件

为了让底部导航栏正常显示，需要准备以下4个图标文件：

```
miniprogram/assets/images/
├── tab-sign.png           # 抽签图标（未选中）
├── tab-sign-active.png    # 抽签图标（选中）
├── tab-lunar.png          # 黄历图标（未选中）
└── tab-lunar-active.png   # 黄历图标（选中）
```

---

## 图标规格要求

### 尺寸要求
- **推荐尺寸**：81px × 81px
- **最小尺寸**：40px × 40px
- **最大尺寸**：120px × 120px

### 格式要求
- **格式**：PNG 格式
- **背景**：透明背景
- **颜色**：
  - 未选中状态：灰色 (#999999)
  - 选中状态：金色 (#D4AF37)

---

## 临时解决方案（使用 emoji 或文字）

如果暂时没有图标，可以先修改 `app.json`，去掉图标配置：

```json
{
  "tabBar": {
    "color": "#999999",
    "selectedColor": "#D4AF37",
    "backgroundColor": "#ffffff",
    "borderStyle": "black",
    "list": [
      {
        "pagePath": "pages/home/home",
        "text": "抽签"
      },
      {
        "pagePath": "pages/lunar/lunar",
        "text": "黄历"
      }
    ]
  }
}
```

这样 tabBar 会只显示文字，不显示图标。

---

## 图标设计建议

### 抽签图标 (tab-sign)
- **设计元素**：签筒、竹签、祈福手势
- **风格**：简约线条图标
- **参考**：🎲 🎴 📿

### 黄历图标 (tab-lunar)
- **设计元素**：日历、农历、传统纹样
- **风格**：简约线条图标
- **参考**：📅 📆 🗓️

---

## 在线图标资源

可以从以下网站下载免费图标：

1. **iconfont（阿里巴巴矢量图标库）**
   - 网址：https://www.iconfont.cn/
   - 搜索关键词：签筒、日历、黄历

2. **Flaticon**
   - 网址：https://www.flaticon.com/
   - 搜索关键词：fortune, calendar, lunar

3. **IconPark**
   - 网址：https://iconpark.oceanengine.com/
   - 搜索关键词：签、日历

---

## 快速制作图标（使用 Figma/Sketch）

### 方法1：使用 Figma（免费）

1. 打开 Figma（https://www.figma.com/）
2. 创建 81×81px 的画布
3. 使用形状工具绘制简单图标
4. 导出为 PNG 格式

### 方法2：使用在线工具

1. **Canva**（https://www.canva.com/）
   - 创建自定义尺寸：81×81px
   - 使用元素库添加图标
   - 下载为 PNG

2. **Photopea**（https://www.photopea.com/）
   - 在线 Photoshop 替代品
   - 创建 81×81px 画布
   - 绘制或导入图标

---

## 当前状态

⚠️ **图标文件缺失**

由于图标文件不存在，小程序可能会显示警告或错误。

**建议操作**：
1. 先使用临时解决方案（去掉图标配置）
2. 后续再添加图标文件

---

## 下一步

我会修改 `app.json`，暂时去掉图标配置，让小程序可以正常运行。

