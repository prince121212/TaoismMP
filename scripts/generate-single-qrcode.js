/**
 * 生成单个签的小程序码（用于测试）
 * 使用方法：node generate-single-qrcode.js 4
 */

const axios = require('axios');
const fs = require('fs');

// ========== 配置区 ==========
const APPID = 'your_appid_here';        // 替换为你的小程序 AppID
const SECRET = 'your_secret_here';      // 替换为你的小程序 Secret
// ============================

// 从命令行参数获取签号
const signNumber = process.argv[2] || 4;

console.log(`🚀 开始生成第${signNumber}签的小程序码...\n`);

// 获取 access_token
async function getAccessToken() {
  const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${APPID}&secret=${SECRET}`;
  
  try {
    const response = await axios.get(url);
    if (response.data.access_token) {
      console.log('✅ Access Token 获取成功');
      return response.data.access_token;
    } else {
      throw new Error(response.data.errmsg || '获取失败');
    }
  } catch (error) {
    console.error('❌ 获取 access_token 失败:', error.message);
    throw error;
  }
}

// 生成小程序码
async function generateQRCode(signNumber) {
  const accessToken = await getAccessToken();
  const url = `https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=${accessToken}`;
  
  // 这里的配置就是小程序码中包含的信息
  const data = {
    // scene 参数：这就是扫码后传递给小程序的参数
    scene: `status=${signNumber}`,
    
    // 页面路径：扫码后打开的页面
    page: 'pages/home/home',
    
    // 二维码宽度
    width: 430,
    
    // 线条颜色（金色）
    line_color: { r: 212, g: 175, b: 55 }
  };
  
  console.log('\n📝 小程序码配置:');
  console.log('   - scene:', data.scene);
  console.log('   - page:', data.page);
  console.log('   - width:', data.width);
  
  try {
    const response = await axios.post(url, data, {
      responseType: 'arraybuffer'
    });
    
    // 保存图片
    const filename = `qrcode_sign_${signNumber}.png`;
    fs.writeFileSync(filename, response.data);
    
    console.log(`\n✅ 小程序码生成成功！`);
    console.log(`📁 文件路径: ${filename}`);
    console.log(`\n🔍 扫描这个二维码后会发生什么：`);
    console.log(`   1. 微信打开小程序`);
    console.log(`   2. 跳转到 pages/home/home 页面`);
    console.log(`   3. onLoad 接收到参数: { scene: "status=${signNumber}" }`);
    console.log(`   4. 自动抽取第${signNumber}签`);
    
    return filename;
  } catch (error) {
    console.error(`\n❌ 生成失败:`, error.message);
    throw error;
  }
}

// 执行生成
generateQRCode(signNumber);

