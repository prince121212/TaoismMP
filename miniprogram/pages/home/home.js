// miniprogram/pages/home/home.js
const signs = require('../../data/signs')

// 引入微信同声传译插件
const plugin = requirePlugin("WechatSI")

Page({
  data: {
    isDrawing: false,
    currentSign: null,
    showDetail: false,
    showStick: false,
    stickAnimation: null,
    showResultCard: false
  },

  // 音频上下文
  audioContext: null,

  // 摇一摇相关
  lastShakeTime: 0,
  shakeThreshold: 1.5, // 摇晃阈值（降低以提高灵敏度）
  lastX: null,
  lastY: null,
  lastZ: null,
  isShaking: false, // 是否正在摇晃检测中

  onLoad(options) {
    // 创建音频上下文
    this.audioContext = wx.createInnerAudioContext()
    this.audioContext.src = '/assets/audio/shake.mp3' // 音效文件路径

    // 启动加速度计
    this.startAccelerometer()

    // 调试日志：查看接收到的所有参数
    console.log('=== onLoad 接收到的参数 ===')
    console.log('完整 options:', options)
    console.log('options.scene:', options.scene)
    console.log('options.status:', options.status)
    console.log('========================')

    // 处理扫码进入的场景（scene 参数）
    if (options.scene) {
      console.log('检测到 scene 参数，处理扫码进入')
      this.handleScanCode(options.scene)
    }
    // 处理开发者工具编译模式（直接传递 status 参数）
    else if (options.status) {
      console.log('检测到 status 参数，处理开发模式')
      const signNumber = parseInt(options.status)
      if (signNumber >= 1 && signNumber <= 61) {
        console.log('开发模式：自动抽取第', signNumber, '签')
        setTimeout(() => {
          this.autoDrawSign(signNumber)
        }, 500)
      } else {
        wx.showToast({
          title: '签号无效（1-61）',
          icon: 'none',
          duration: 2000
        })
      }
    }
  },

  onShow() {
    // 每次显示页面时重置状态
    this.startAccelerometer()

    // 设置自定义 TabBar 选中状态
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },

  onHide() {
    // 页面隐藏时停止监听
    this.stopAccelerometer()
  },

  onUnload() {
    // 页面卸载时清理
    this.stopAccelerometer()
    if (this.audioContext) {
      this.audioContext.destroy()
    }
  },

  // 分享功能
  onShareAppMessage() {
    const sign = this.data.currentSign

    // 如果有签文，分享签文内容
    if (sign) {
      return {
        title: `我抽到了第${sign.number}签【${sign.level}】：${sign.poem}`,
        path: `/pages/home/home?scene=${sign.number}`
      }
    }

    // 默认分享
    return {
      title: '朕瓷灵签 - 赵公明财神灵签',
      path: '/pages/home/home'
    }
  },


  // 处理扫码进入
  handleScanCode(scene) {
    try {
      // 解码 scene 参数
      const sceneStr = decodeURIComponent(scene)
      console.log('扫码参数:', sceneStr)

      // 解析参数（格式：status=4 或 status=4&other=value）
      const params = this.parseSceneParams(sceneStr)

      // 如果包含 status 参数，自动抽取对应签号
      if (params.status) {
        const signNumber = parseInt(params.status)

        // 验证签号有效性（1-61）
        if (signNumber >= 1 && signNumber <= 61) {
          console.log('自动抽取第', signNumber, '签')
          // 延迟执行，确保页面已完全加载
          setTimeout(() => {
            this.autoDrawSign(signNumber)
          }, 500)
        } else {
          wx.showToast({
            title: '签号无效，请重新扫码',
            icon: 'none',
            duration: 2000
          })
        }
      }
    } catch (error) {
      console.error('解析扫码参数失败:', error)
      wx.showToast({
        title: '二维码格式错误',
        icon: 'none',
        duration: 2000
      })
    }
  },

  // 解析 scene 参数
  parseSceneParams(sceneStr) {
    const params = {}
    const pairs = sceneStr.split('&')

    pairs.forEach(pair => {
      const [key, value] = pair.split('=')
      if (key && value) {
        params[key] = value
      }
    })

    return params
  },

  // 启动加速度计监听
  startAccelerometer() {
    // 先停止之前的监听，避免重复监听
    this.stopAccelerometer()

    wx.startAccelerometer({
      interval: 'normal', // 改为 normal，降低检测频率
      success: () => {
        console.log('加速度计启动成功')
        wx.onAccelerometerChange(this.onAccelerometerChange.bind(this))
      },
      fail: (err) => {
        console.error('加速度计启动失败', err)
      }
    })
  },

  // 停止加速度计监听
  stopAccelerometer() {
    wx.stopAccelerometer()
    wx.offAccelerometerChange()
  },

  // 加速度变化回调
  onAccelerometerChange(res) {
    // 如果正在抽签或已有签文结果，则不响应摇一摇
    if (this.data.isDrawing || this.data.currentSign) return

    const { x, y, z } = res
    const now = Date.now()

    // 初始化：第一次获取加速度数据时，只记录不触发
    if (this.lastX === null || this.lastY === null || this.lastZ === null) {
      this.lastX = x
      this.lastY = y
      this.lastZ = z
      return
    }

    // 计算加速度变化（绝对值）
    const deltaX = Math.abs(x - this.lastX)
    const deltaY = Math.abs(y - this.lastY)
    const deltaZ = Math.abs(z - this.lastZ)

    // 计算总加速度变化（向量和）
    const acceleration = Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ)

    // 更新上次的值
    this.lastX = x
    this.lastY = y
    this.lastZ = z

    // 调试日志
    console.log('加速度变化:', {
      deltaX: deltaX.toFixed(2),
      deltaY: deltaY.toFixed(2),
      deltaZ: deltaZ.toFixed(2),
      acceleration: acceleration.toFixed(2),
      threshold: this.shakeThreshold
    })

    // 判断是否达到摇晃阈值
    if (acceleration > this.shakeThreshold) {
      // 防抖：3秒内只触发一次
      if (now - this.lastShakeTime > 3000) {
        console.log('检测到摇晃！触发抽签')
        this.lastShakeTime = now
        this.handleDraw()

        // 震动反馈
        wx.vibrateShort({
          type: 'medium'
        })
      } else {
        console.log('摇晃过于频繁，已忽略')
      }
    }
  },

  // 执行抽签
  handleDraw() {
    // 如果正在抽签或已有签文结果，则不允许再次抽签
    if (this.data.isDrawing || this.data.currentSign) return

    this.setData({
      isDrawing: true,
      currentSign: null,
      showDetail: false,
      showStick: false
    })

    // 播放摇晃音效
    this.playShakeSound()

    // 1秒后摇晃结束，弹出签条
    setTimeout(() => {
      const sign = signs.getRandomSign()

      // 停止音效
      this.stopShakeSound()

      // 显示签条并播放动画
      this.setData({
        currentSign: sign,
        showStick: true
      })

      // 创建弹出动画
      this.createStickAnimation()

      // 1.5秒后显示签文卡片（加快显示）
      setTimeout(() => {
        this.setData({
          isDrawing: false,
          showStick: false,
          showResultCard: true  // 立即显示解签画面
        })

        // 解签画面弹出后，播放语音
        setTimeout(() => {
          this.speakPoem()
        }, 500)
      }, 1500)
    }, 1000)
  },

  // 自动抽签（扫码进入时使用）
  autoDrawSign(signNumber) {
    // 如果正在抽签或已有签文结果，则不允许再次抽签
    if (this.data.isDrawing || this.data.currentSign) return

    // 根据签号获取签文
    const sign = signs.getSignByNumber(signNumber)

    if (!sign) {
      wx.showToast({
        title: '签文不存在',
        icon: 'none',
        duration: 2000
      })
      return
    }

    this.setData({
      isDrawing: true,
      currentSign: null,
      showDetail: false,
      showStick: false
    })

    // 播放摇晃音效
    this.playShakeSound()

    // 显示提示：正在为您开启第X签
    wx.showToast({
      title: `正在开启第${signNumber}签`,
      icon: 'none',
      duration: 1000
    })

    // 1秒后摇晃结束，弹出签条
    setTimeout(() => {
      // 停止音效
      this.stopShakeSound()

      // 显示签条并播放动画
      this.setData({
        currentSign: sign,
        showStick: true
      })

      // 创建弹出动画
      this.createStickAnimation()

      // 1.5秒后显示签文卡片
      setTimeout(() => {
        this.setData({
          isDrawing: false,
          showStick: false,
          showResultCard: true
        })

        // 解签画面弹出后，播放语音
        setTimeout(() => {
          this.speakPoem()
        }, 500)
      }, 1500)
    }, 1000)
  },

  // 播放摇晃音效
  playShakeSound() {
    if (this.audioContext) {
      this.audioContext.play()
    }
  },

  // 停止摇晃音效
  stopShakeSound() {
    if (this.audioContext) {
      this.audioContext.stop()
    }
  },

  // 创建签条弹出动画
  createStickAnimation() {
    const animation = wx.createAnimation({
      duration: 2500,
      timingFunction: 'ease-out'
    })

    // 从小到大，同时往上飞出屏幕
    animation.scale(4).translateY(-1000).opacity(0).step()

    this.setData({
      stickAnimation: animation.export()
    })
  },

  // 版本号比较函数
  compareVersion(v1, v2) {
    const arr1 = v1.split('.')
    const arr2 = v2.split('.')
    const len = Math.max(arr1.length, arr2.length)

    for (let i = 0; i < len; i++) {
      const num1 = parseInt(arr1[i] || 0)
      const num2 = parseInt(arr2[i] || 0)
      if (num1 > num2) return 1
      if (num1 < num2) return -1
    }
    return 0
  },

  // 语音播报签诗（使用微信同声传译插件）
  speakPoem() {
    if (!this.data.currentSign) return

    const text = this.data.currentSign.poem
    console.log('开始语音播报:', text)

    // 使用微信同声传译插件进行语音合成
    plugin.textToSpeech({
      lang: "zh_CN",
      tts: true,
      content: text,
      success: (res) => {
        console.log('语音合成成功', res)

        // 创建音频上下文播放合成的语音
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.src = res.filename

        innerAudioContext.onPlay(() => {
          console.log('开始播放语音')
        })

        innerAudioContext.onEnded(() => {
          console.log('语音播放完成')
        })

        innerAudioContext.onError((err) => {
          console.error('音频播放失败', err)
        })

        // 播放语音
        innerAudioContext.play()
      },
      fail: (err) => {
        console.error('语音合成失败', err)
        wx.showToast({
          title: '语音播报失败',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },

  // 切换详情展开/收起
  toggleDetail() {
    this.setData({
      showDetail: !this.data.showDetail
    })
  },



  // 继续抽签
  handleContinue() {
    this.setData({
      currentSign: null,
      animationDegree: 0,
      showDetail: false,
      showResultCard: false
    })
  }
})

