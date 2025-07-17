const { loadConfig, processTemplate } = require('./process-template');
const fs = require('fs');
const path = require('path');

function postBuild() {
  console.log('🔄 开始后处理构建文件...');
  
  const distPath = path.join(__dirname, '../dist');
  const htmlPath = path.join(distPath, 'index.html');
  
  if (!fs.existsSync(htmlPath)) {
    console.error('❌ 未找到构建后的HTML文件');
    process.exit(1);
  }

  try {
    // 加载配置
    const config = loadConfig();
    
    // 读取构建后的HTML内容
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    // 处理模板
    const processedContent = processTemplate('', '', config, htmlContent);
    
    // 写回文件
    fs.writeFileSync(htmlPath, processedContent, 'utf8');
    
    console.log('✅ HTML文件处理完成');
    
  } catch (error) {
    console.error('❌ 后处理失败:', error.message);
    process.exit(1);
  }
}

// 如果直接运行此脚本
if (require.main === module) {
  postBuild();
}

module.exports = { postBuild };