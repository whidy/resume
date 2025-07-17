const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
  console.log('🚀 开始生成PDF...');
  
  const htmlPath = path.join(__dirname, '../dist/index.html');
  if (!fs.existsSync(htmlPath)) {
    console.error('❌ 未找到构建文件，请先运行 npm run build:pdf');
    process.exit(1);
  }

  let browser;
  try {
    // 使用最简配置启动浏览器
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    
    console.log('📄 加载HTML文件...');
    const fileUrl = `file://${htmlPath}`;
    await page.goto(fileUrl, { waitUntil: 'domcontentloaded' });

    // 简单等待
    await page.waitForTimeout(3000);

    console.log('📄 生成PDF文件...');
    const pdfBuffer = await page.pdf({
      format: 'A4',
      margin: { top: '1cm', right: '1cm', bottom: '1cm', left: '1cm' },
      printBackground: true
    });

    const outputPath = path.join(__dirname, '../白舜-Web前端开发工程师.pdf');
    fs.writeFileSync(outputPath, pdfBuffer);
    
    console.log(`✅ PDF生成成功！文件: ${outputPath}`);

  } catch (error) {
    console.error('❌ PDF生成失败:', error.message);
    process.exit(1);
  } finally {
    if (browser) await browser.close();
  }
}

generatePDF().catch(console.error);