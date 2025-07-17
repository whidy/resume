const fs = require('fs');
const path = require('path');

function loadConfig() {
  const configPaths = [
    path.join(__dirname, '../config.json'),
    path.join(__dirname, '../config.local.json'),
    path.join(__dirname, '../config.sample.json')
  ];

  for (const configPath of configPaths) {
    if (fs.existsSync(configPath)) {
      console.log(`📄 使用配置文件: ${path.basename(configPath)}`);
      return JSON.parse(fs.readFileSync(configPath, 'utf8'));
    }
  }

  console.log('⚠️ 未找到配置文件，将使用默认假数据');
  return null;
}

function processTemplate(templatePath, outputPath, config, content = null) {
  console.log('🔄 处理模板文件...');
  
  let templateContent = content || fs.readFileSync(templatePath, 'utf8');
  
  if (!config) {
    console.log('📝 使用默认假数据生成简历');
    // 如果没有配置，保持原有的假数据不变
    return templateContent;
  }

  // 替换个人信息
  const { personalInfo } = config;
  templateContent = templateContent.replace(/张三 \(zhangsan\)/g, `${personalInfo.name} (${personalInfo.englishName})`);
  templateContent = templateContent.replace(/Web前端开发工程师 · 8年经验/g, `${personalInfo.title} · ${personalInfo.experience}`);
  templateContent = templateContent.replace(/138\*\*\*\*8888/g, personalInfo.phone);
  templateContent = templateContent.replace(/example@example\.com/g, personalInfo.email);
  templateContent = templateContent.replace(/30岁 · 男 · 本科/g, `${personalInfo.age}岁 · ${personalInfo.gender} · ${personalInfo.education}`);

  // 替换自我描述
  if (config.selfDescription) {
    const selfDescRegex = /专注Web开发领域多年[\s\S]*?<strong class="text-blue-600">热情、专注、精益求精！<\/strong>/;
    templateContent = templateContent.replace(selfDescRegex, config.selfDescription);
  }

  // 替换技能标签
  if (config.skills) {
    const frontendSkills = config.skills.frontend.map(skill => `<span class="tech-tag">${skill}</span>`).join('\n                ');
    const backendSkills = [...config.skills.backend, ...config.skills.tools].map(skill => `<span class="tech-tag">${skill}</span>`).join('\n                ');
    
    templateContent = templateContent.replace(
      /<span class="tech-tag">HTML5<\/span>[\s\S]*?<span class="tech-tag">PostCSS<\/span>/,
      frontendSkills
    );
    templateContent = templateContent.replace(
      /<span class="tech-tag">Node\.js<\/span>[\s\S]*?<span class="tech-tag">Git<\/span>/,
      backendSkills
    );
  }

  // 替换工作经历
  if (config.workExperience && config.workExperience.length > 0) {
    let workHTML = '';
    config.workExperience.forEach(work => {
      workHTML += `
          <div class="bg-white border-l-4 border-blue-500 pl-6 py-4 print:border-l-2 print:pl-4">
            <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <h3 class="text-lg font-semibold text-gray-800 print:text-base">${work.company}</h3>
              <span class="text-sm text-gray-500 print:text-xs">${work.duration}</span>
            </div>
            <p class="text-blue-600 font-medium mb-2 print:text-sm">${work.position}</p>
            <p class="text-gray-700 text-sm mb-2 print:text-xs">${work.description}</p>
            <p class="text-gray-600 text-xs print:text-xs">${work.achievements}</p>
          </div>`;
    });
    
    const workRegex = /<div class="space-y-6 print:space-y-4">[\s\S]*?<\/div>/;
    templateContent = templateContent.replace(workRegex, `<div class="space-y-6 print:space-y-4">${workHTML}\n        </div>`);
  }

  // 替换项目经历
  if (config.projects && config.projects.length > 0) {
    let projectHTML = '';
    config.projects.forEach(project => {
      const achievementsHTML = project.achievements.map(achievement => `<li>• ${achievement}</li>`).join('\n              ');
      projectHTML += `
          <div class="bg-gray-50 rounded-lg p-6 print:bg-transparent print:p-4 print:border print:border-gray-200">
            <h3 class="text-lg font-semibold mb-2 text-gray-800 print:text-base">${project.name}</h3>
            <p class="text-sm text-gray-600 mb-3 print:text-xs">${project.tech}</p>
            <p class="text-sm text-gray-700 mb-3 print:text-xs">${project.description}</p>
            <ul class="text-sm text-gray-700 space-y-1 print:text-xs">
              ${achievementsHTML}
            </ul>
          </div>`;
    });
    
    const projectRegex = /<div class="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-1 print:gap-4">[\s\S]*?<\/div>/;
    templateContent = templateContent.replace(projectRegex, `<div class="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-1 print:gap-4">${projectHTML}\n        </div>`);
  }

  // 替换教育经历
  if (config.education && config.education.length > 0) {
    let educationHTML = '';
    config.education.forEach(edu => {
      educationHTML += `
          <div class="flex flex-col md:flex-row md:justify-between">
            <div>
              <h3 class="font-medium text-gray-800 print:text-sm">${edu.school}</h3>
              <p class="text-sm text-gray-600 print:text-xs">${edu.degree} / ${edu.major}</p>
            </div>
            <span class="text-sm text-gray-500 print:text-xs">${edu.duration}</span>
          </div>`;
    });
    
    const educationRegex = /<div class="space-y-3 print:space-y-2">[\s\S]*?<\/div>/;
    templateContent = templateContent.replace(educationRegex, `<div class="space-y-3 print:space-y-2">${educationHTML}\n        </div>`);
  }

  // 替换其他信息
  if (config.additionalInfo && config.additionalInfo.length > 0) {
    const additionalHTML = config.additionalInfo.map(info => `<p>${info}</p>`).join('\n          ');
    const additionalRegex = /<div class="text-sm text-gray-600 space-y-2 print:text-xs">[\s\S]*?<\/div>/;
    templateContent = templateContent.replace(additionalRegex, `<div class="text-sm text-gray-600 space-y-2 print:text-xs">\n          ${additionalHTML}\n        </div>`);
  }

  // 替换页脚感谢语
  if (config.footer) {
    const footerRegex = /<strong>感谢您认真阅读本人简历！<\/strong>[\s\S]*?共创公司和个人的双赢佳绩。/;
    templateContent = templateContent.replace(footerRegex, `<strong>${config.footer}</strong>`);
  }

  console.log('✅ 模板处理完成');
  return templateContent;
}

module.exports = { loadConfig, processTemplate };