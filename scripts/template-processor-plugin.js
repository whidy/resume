const { loadConfig, processTemplate } = require('./process-template');

class TemplateProcessorPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('TemplateProcessorPlugin', (compilation) => {
      // 检查是否有 HtmlWebpackPlugin 
      const HtmlWebpackPlugin = require('html-webpack-plugin');
      
      // 使用 HtmlWebpackPlugin 的 hooks 来处理生成的 HTML
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync('TemplateProcessorPlugin', (data, callback) => {
        try {
          // 获取配置
          const config = loadConfig();
          
          // 处理HTML内容
          const processedContent = processTemplate('', '', config, data.html);
          data.html = processedContent;
          callback(null, data);
        } catch (error) {
          console.error('TemplateProcessorPlugin error:', error);
          callback(error);
        }
      });
    });
  }
}

module.exports = TemplateProcessorPlugin;