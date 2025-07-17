const fs = require('fs');
const path = require('path');

async function createInlineHTML() {
  console.log('🚀 开始创建单HTML文件版本...');
  
  const distPath = path.join(__dirname, '../dist');
  const htmlPath = path.join(distPath, 'index.html');
  const cssPath = path.join(distPath, 'styles.css');
  const jsPath = path.join(distPath, 'main.bundle.js');
  
  // 检查文件是否存在
  if (!fs.existsSync(htmlPath)) {
    console.error('❌ 未找到HTML文件，请先运行构建命令');
    process.exit(1);
  }

  try {
    // 读取文件内容
    let htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    // 读取并内联CSS
    if (fs.existsSync(cssPath)) {
      const cssContent = fs.readFileSync(cssPath, 'utf8');
      htmlContent = htmlContent.replace(
        /<link[^>]*href="[^"]*styles\.css"[^>]*>/g,
        `<style>${cssContent}</style>`
      );
      console.log('✅ CSS已内联');
    }
    
    // 读取并内联JavaScript
    if (fs.existsSync(jsPath)) {
      const jsContent = fs.readFileSync(jsPath, 'utf8');
      htmlContent = htmlContent.replace(
        /<script[^>]*src="[^"]*main\.bundle\.js"[^>]*><\/script>/g,
        `<script>${jsContent}</script>`
      );
      console.log('✅ JavaScript已内联');
    }
    
    // 内联Google Fonts
    htmlContent = htmlContent.replace(
      /<link[^>]*href="https:\/\/fonts\.googleapis\.com\/css2\?[^"]*"[^>]*>/g,
      `<style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
      </style>`
    );
    
    // 添加自包含标识注释
    const timestamp = new Date().toLocaleString('zh-CN');
    const inlineComment = `
<!-- 
  白舜 - Web前端开发工程师简历 (单文件版本)
  生成时间: ${timestamp}
  此文件包含所有CSS和JavaScript，可独立运行
-->
`;
    htmlContent = htmlContent.replace('<!DOCTYPE html>', `<!DOCTYPE html>${inlineComment}`);
    
    // 保存单HTML文件
    const outputPath = path.join(__dirname, '../白舜-Web前端开发工程师-单文件版.html');
    fs.writeFileSync(outputPath, htmlContent, 'utf8');
    
    // 计算文件大小
    const stats = fs.statSync(outputPath);
    const fileSizeKB = (stats.size / 1024).toFixed(1);
    
    console.log(`✅ 单HTML文件创建成功！`);
    console.log(`📁 文件路径: ${outputPath}`);
    console.log(`📊 文件大小: ${fileSizeKB} KB`);
    console.log(`🎯 特点: 所有资源已内联，可独立运行`);

  } catch (error) {
    console.error('❌ 创建单HTML文件失败:', error.message);
    process.exit(1);
  }
}

createInlineHTML().catch(console.error);