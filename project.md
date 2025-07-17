# 我的项目

包括工作和个人项目，大大小小预计70+的项目工程。

## 2025

* [知岛文库](https://www.jhxq.top/)
* [进化猩球](http://course.jhxq.top:81/)
* [对TA说](https://www.duitashuo.love/)

## 2021-2024

* [BD-aPaaS（一站式微服务治理运营平台）](https://apaas5.wodcloud.com/apaas/portal/ui/#/)
* ~~SMS接码平台~~
* UOS-CI/CD报告（内部工具uos-report）
* 信息化系统（内部工具ia_vue）

## 2017-2020

* [要啦资讯站（PC、H5、Admin）](https://www.51.la/)
* [要啦网站统计（PC、H5、微信小程序）](https://web.51.la/)
* 要啦网站统计专业版（PC）内部使用、支持热力图、事件分析
* 要啦网站统计SDK开发
* ~~可视化平台项目(visualization)~~
* ~~要啦联运平台~~
* ~~万花筒(Lighting)（PC、Admin）~~（低代码平台，用作内部运营页面的快速构建工具。已下线）
* ~~[要啦短网址（PC、H5、Admin）](https://dwz.51.la/)~~
* ~~[要啦小程序统计（PC、Admin）](https://mpa.51.la/)~~
* ~~粤开财富小程序（微信搜索**粤开财富**）~~
* 万丈1加运动（微信小程序搜索）

## 2014-2016

* [太平洋电脑网](https://www.whidy.cn/ByePCGROUPYears.html)

......

## 2005

* [高三的日子](https://www.whidy.cn/demos/memory/)

## 主要项目简单介绍

### 要啦资讯站

基于 `Nuxt.js` 的一个服务端渲染Web应用（同时在**静态化站点**做了一些研究）。

因有和其他微信公众号合作，为提高文章录入查询，开发了一个使用方便的公众号查询工具，我将其命名为：

#### 微信公众号文章快速爬取工具

该工具实现了由本地部署的Web应用，以我们的域名，例如 `https://lab.51.la/mp` 来访问到 `https://mp.weixin.qq.com/` 页面主体，并登录自己的微信账号后进入产品工具首页。该工具通过部分微信公众号接口，来实现公众号文章的查询搜索等能力。

目前已部署至个人服务器：[https://demo.whidy.net](https://demo.whidy.net)，欢迎体验。

### 要啦网站统计

> 该产品主要功能，可以理解为和百度统计、谷歌分析、CNZZ友盟等站点数据分析工作相同。

主要包含[PC端](https://web.51.la/)、[移动端](https://m.51.la)、小程序（微信搜索**51LA统计**）、配套的 `SDK` （基于浏览器端的用户行为分析上报）。

**PC端**：早期采用 `Koa.js` 框架搭建、使用到[ `Art-Template` ](https://aui.github.io/art-template/zh-cn/index.html)， `jQuery` 等。后面重构调整为 `Egg.js` 作为中间层服务，主要用于**鉴权**、对接收到的**后端数据处理**，使用 `nunjucks` 模板引擎**渲染页面**等，前端样式及JS逻辑等代码构建升级至 `Webpack4` ，并开发集成编译后使用七牛Node下CDN上传服务等。

中间层服务使用了 `Redis+Session` 用于存储用户状态、 `Redis` 同时具备数据分析存储能力，并有大量制定化需求由中间层开发。

**移动端**：采用 `Vue.js` ，结合 `Muse-UI` 组件库搭建，统一使用 `Egg.js` 框架中间层服务进行数据传递等能力。

**小程序**：结合 `Vant Weapp` 直接由微信开发者工具开发。

**网站统计SDK**：**纯Javascript**开发的一款性能优异的数据统计能力代码，一共有两套 `SDK` ，基础版和专业版。基础版仅包括一些常见的**客户端UA采集**，而专业版包括**事件采集**，**用户点击行为采集**和**热力图渲染**等高级能力。代码打包采用 `Webpack4` 。

### 要啦短网址

> 产品用于将长URL缩短的功能，并提供推广分析能力。

包括[PC端](https://dwz.51.la/)、[移动端](https://dwz.51.la/m/)两个版本。

**PC端**：第一版采用 `Nuxt.js+Koa.js` 开发的一套同构应用，后来因开发环境编译过慢移除Koa.js，由Nuxt.js的中间件实现鉴权等中间层。

**移动端**：采用 `Vue-CLI` 搭建，结合 `Mand Mobile` 组件库搭建，利用 `PostCSS` 的插件实现**移动端适配**，整个产品包括设计由我完成。

### 要啦小程序统计

> 该产品可实时分析微信小程序访问在线人数、统计新增用户、小程序访问量、来路等数据报表。

包括[PC端](https://mpa.51.la/)、 `SDK` 开发。

**PC端**：基于[Egg + Vue 工程化解决方案](https://www.yuque.com/easy-team/egg-vue)开发，用户可以通过该产品分析微信小程序的用户使用情况，包括但不限于每日流量、新增用户、用户留存、流量趋势、场景值分析、页面分析、用户画像等能力。

**SDK**：根据微信小程序生命周期特性、小程序内置接口来获取信息，在合适的时候进行数据上报并实时分析。采用 `Gulp` 进行SDK代码压缩。

### 粤开财富小程序

该小程序（微信搜索**粤开财富**）实现了点击按钮发射炮弹击毁横向移动船只的小游戏。

为何使用小程序来实现游戏逻辑？因小游戏开发周期过长，故通过原生Javascript计算并配合一些CSS Animation、GIF动态图片实现。

> 早期需求评估考虑过COCOS引擎，PIXI.js都不适合小程序。但需求期望能在小程序的游戏交互上获取内置小程序接口数据，故也无法使用Webview方式。

### 一加运动打卡小程序

用于万丈金数公司内部员工使用的运动、公益活动打卡积分小程序。

项目包括微信小程序、后端服务、管理员后台三个部分。

技术栈：微信小程序开发；后端采用 `Koa.js` 、 `MySQL` 、 `Redis` 等，用到 `JWT` 、 `邮件发送服务` （收取验证码）等功能；管理后台采用 `Vue-CLI` 搭建，使用Vue版 `Ant Design` 的UI框架。

## 个人项目

> 个人项目主要是为了方便提高开发效率和一些感兴趣的技术研究和学习

### WhidyWrites

新版的[个人博客](https://www.whidy.net)，还在不断优化和完善中。

是一个全栈Web应用，前端部分用 `Gatsby.js` 框架，后端采用 `Strapi` （开源Headless CMS），数据库采用 `PostgreSQL` ，运用 `GraphQL` 查询语言。

### BlazingLOG

> 这是早期进行新博客创建的另一个方案

基于 `Next.js` + `PostgreSQL` + `Docker` ，可视化数据库维护通过[Hasura](https://hasura.io/)，查询通过 `GraphQL` 。

项目地址：[https://github.com/whidy/BlazingLOG](https://github.com/whidy/BlazingLOG)

### daily

这是一个基于 `Hugo` 的建立在Github上的一个博客，也是我所有博客之一，访问地址[https://whidy.github.io/](https://whidy.github.io/)，不过后来比较少更新了，大部分数据和 `SegmentFault` 的[个人主页](https://segmentfault.com/u/whidy)信息一致，未来博客内容均在主站[WhidyWrites](https://www.whidy.net/)发布。

项目地址：[https://github.com/whidy/daily](https://github.com/whidy/daily)

### postcss-study

17年学习 `PostCSS` 写的一系列教程（笔记）分享。目前已暂停更新。

项目地址：[https://github.com/whidy/postcss-study](https://github.com/whidy/postcss-study)

### grab-web

基于 `Egg.js` 的一个Web应用，实现Web端上传文件，后端查询数据并返回查询结果和批量查询的日志记录。

后端服务使用Node.js服务端**处理文件**，并集成若干**代理服务器**在服务层模发送查询请求，防止被封IP，部分查询接口还需要进行**图形验证码**验证通过（采用*百度OCR*接口）查询。

技术栈： `Egg.js` 、 `mongoDB` 、 `Redis` 、文件读取、批量任务队列、日志记录等

> 研究图形验证码的过程中，稍有研究 `Python` 相关的机器学习方面知识，因为模型实现等多方面困难最终放弃。

### mobileweb

基于 `Webpack4` + `postcss` 来解决移动端适配问题，主要采用 `rem` 单位解决，另有一个分支，采用 `vw` 单位解决方案。

项目地址：[https://github.com/whidy/mobileweb](https://github.com/whidy/mobileweb)

### coding-style-rules

基于 `Vue-CLI4.x` 的项目开发脚手架，主要在于完善了ESLint配置，规范化代码，以降低团队协作开发过程中出现的各种规范不统一问题。*现已从公司内部Git仓迁移至Github。*

项目地址：[https://github.com/whidy/coding-style-rules](https://github.com/whidy/coding-style-rules)

### my-cli

存放个人常用的快速搭建站点基础配置脚手架，未完善好的，很久没有维护了，未来可能保持更新。目前包含 `Vue-CLI 4` ， `Nuxt.js` ， `Next.js` 等相关。

项目地址：[https://github.com/whidy/my-cli](https://github.com/whidy/my-cli)

### lab-tools

用于存放各种奇怪需求的工具，包括：

* [跨域共享方案](https://github.com/whidy/lab-tools/tree/master/cross-domain-sharing)
* [图片水印添加](https://github.com/whidy/lab-tools/tree/master/watermark)
* [Gitbook变量使用](https://github.com/whidy/lab-tools/tree/master/gitbook-variables)
* [网页用户行为记录及回放](https://github.com/whidy/lab-tools/tree/master/rrweb)
* ...（等等）

技术栈包括： `hapi` 、 `Koa.js` 、 `GitBook` 、 `Canvas` 等。

项目地址：[https://github.com/whidy/lab-tools](https://github.com/whidy/lab-tools)

### api-json-server

自建的一个 `Mock` 数据临时测试仓库工具，主要基于[faker.js](https://github.com/Marak/faker.js)

项目地址：[https://github.com/whidy/api-json-server](https://github.com/whidy/api-json-server)

> 当然大家熟知的Mock.js和这个能力类似，不再重复。

### a-new-project-needs

做一个项目需要用到各种基础配置，完善中。

项目地址：[https://github.com/whidy/a-new-project-needs](https://github.com/whidy/a-new-project-needs)

### wordpress-to-gatsby

之前做 `Wordpress` 博客迁移到 `Gatsby` 做的一些研究

项目地址：[https://github.com/whidy/wordpress-to-gatsby](https://github.com/whidy/wordpress-to-gatsby)

## 补充

在多年工作和个人学习过程中，其技术接触广泛，善用各类工具及开源库，有较强的业务解决能力和需求分析能力。

有团队领导能力，能高效发挥团队优势，搭建技术梯队、基础建设能力，提升团队整体水平。

### 主要技术能力总结如下

* Vue.js、Nuxt.js、Koa.js、Egg.js、微信小程序、jQuery
* Nunjucks、Art-Template、JSTL、JSX
* Element-UI、Element-Plus、Vant.js
* TailwindCSS、UnoCSS、Bootstrap
* SASS、PostCSS、Sytle in JS
* Vite.js、Vue-CLI、Webpack、Gulp
* MySQL、RESTful
* VSCode、Git、Fiddler、Charles
* macOS、Windows、Linux（CentOS、UOS）

### 了解并实践的技术栈包括

* Gatsby.js、Express.js、React.js、Next.js、Wordpress、Jekyll
* Strapi、Hasura
* Redis、MongoDB、PostgreSQL、GraphQL
* HTTP、Nginx、云存储（OBS、COS等）、CDN配置及开发
* Linux

### 有接触使用过

* Hapi.js
* Cocos 2D、Pixi.js
* Python、TensorFlow

### 其他技能

* 兴趣驱使，热衷探索
* 勤于笔记、分享习惯
* Markdown、PlantUML
* 严谨的开发规范和团队协作能力
* 较好的英文阅读能力
* 博客：[https://www.whidy.net](https://www.whidy.net)
* SegmentFault：[https://segmentfault.com/u/whidy](https://segmentfault.com/u/whidy)
* Github：[https://github.com/whidy](https://github.com/whidy)
* StackOverflow：[https://stackoverflow.com/users/3089701/whidy](https://stackoverflow.com/users/3089701/whidy)

> 各种UI组件库、各种常用的CLI工具这里省略。
