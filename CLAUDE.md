# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Start Development Server
```bash
npm start
# or
npm run dev
```
Starts webpack dev server on port 9000 with hot reloading and file watching.

### Build for Production
```bash
npm run build
```
Creates optimized production build for web viewing in `dist/` directory.

### Build PDF Version
```bash
npm run build:pdf
```
Creates optimized build with PDF-friendly styles (print media queries).

### Generate PDF File
```bash
npm run pdf
```
Automatically generates `白舜-Web前端开发工程师.pdf` using Puppeteer for high-quality output.

### Generate Inline HTML
```bash
npm run inline
```
Creates `白舜-Web前端开发工程师-单文件版.html` with all CSS and JavaScript inlined for maximum portability.

## Project Overview

现代化个人简历项目，支持配置文件管理敏感信息，提供三个版本：
1. **在线查阅版本** - 交互式web简历，包含动画和响应式设计
2. **PDF转换版本** - 优化的打印样式，适合转换为PDF文件  
3. **单文件版本** - 所有资源内联的HTML文件，便于分享和部署

### Privacy Protection
- Uses configuration files to manage sensitive information
- Personal data separated from codebase
- Supports multiple config file priorities: `config.json` > `config.local.json` > `config.sample.json`
- Falls back to sample data if no personal config found

## Project Architecture

### Key Technologies
- **Webpack 5**: Module bundler with dev server and CSS extraction
- **TailwindCSS 3**: Utility-first CSS framework with custom theme
- **PostCSS 8**: CSS processing with autoprefixer and cssnano
- **Lucide Icons**: Modern icon library for UI elements
- **Simple Icons**: Brand logos for GitHub, technologies, etc.

### Project Structure
```
src/
├── index.html          # Main resume template
├── js/
│   └── index.js        # Entry point and interactions
├── css/
│   └── index.css       # TailwindCSS imports and custom styles
└── components/         # Reusable resume components (to be created)
docs/
└── 白舜-Web前端开发（202507）.docx  # Original resume document
```

### Configuration Files
- **tailwind.config.js**: Custom theme with animations, colors, and print styles
- **webpack.config.js**: Build configuration for both web and PDF versions
- **postcss.config.js**: CSS processing pipeline

### Design Requirements
- **Professional Layout**: Clean, modern design suitable for frontend developer
- **Icon Integration**: Technology logos, GitHub, contact icons
- **Responsive Design**: Mobile-friendly layout
- **Print Optimization**: CSS print media queries for PDF generation
- **Subtle Animations**: Fade-in and slide-up effects for web version
- **Interactive Elements**: Hover effects, smooth transitions

### Icon Libraries Available
- **Lucide**: `import { IconName } from 'lucide'` for UI icons
- **Simple Icons**: Brand logos for GitHub, Vue, React, etc.

### Build Modes
The project supports multiple output modes:
- **Web Version**: Standard responsive design with animations
- **PDF Version**: `PDF_VERSION=true` - Optimized for print/PDF conversion
- **Inline Version**: Self-contained HTML with all resources embedded
- **Auto PDF Generation**: Uses Puppeteer to generate high-quality PDF files

### Inline HTML Features
- **Self-Contained**: All CSS, JavaScript, and fonts embedded in single file
- **No Dependencies**: Can run directly in any browser without server
- **Email Friendly**: Perfect for sending via email or uploading to any hosting
- **Offline Ready**: Works completely offline once downloaded
- **Optimized Size**: ~206KB total file size with full functionality

### PDF Generation Features
- **Puppeteer Engine**: Professional PDF rendering with Chrome engine
- **Font Loading**: Ensures Inter fonts and Lucide icons render correctly
- **High Quality**: 2x device scale factor for crisp text and graphics
- **Optimized Layout**: 0.8cm margins with 0.8 scale for optimal content fit
- **Color Preservation**: Maintains gradients and colors in PDF output