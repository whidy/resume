# 我的项目

> 项目存放于Macbook Pro上，用于记录本地有需要或者有用的项目说明

## 工作

> 项目过多，这里仅列举几个稍具代表性项目，因公司项目，无开源代码，以下项目均由我独立开发或对团队指导开发，所有项目均包含管理端，因实现技术难度不大就不提了。

项目主要围绕以下几个产品：

* [要啦资讯站](https://www.51.la/)
* [要啦网站统计](https://web.51.la/)
* [要啦短网址](https://dwz.51.la/)
* [要啦小程序统计](https://mpa.51.la/)
* [要啦用户中心](https://user.51.la/)
* 粤开财富小程序（微信搜索**粤开财富**）

### 要啦资讯站

基于Nuxt.js的一个服务端渲染Web应用（在静态化CMS站点做了一些深入研究）。

因编辑有和其他微信公众号合作，为提高文章录入查询，特开发了一款重量级的工具，我将其命名为**微信公众号文章快速爬取工具**。

该工具实现了由本地部署的Web应用，以我们的域名，例如 `https://lab.51.la/mp` 来访问到 `https://mp.weixin.qq.com/` 页面主体，并登录自己的微信账号后进入产品工具首页。该工具通过部分微信公众号接口，来实现公众号文章的查询搜索等能力。

目前已部署至个人服务器：<https://demo.whidy.net>，欢迎体验。

### 要啦网站统计

> 该产品主要功能，可以理解为和百度统计、谷歌分析、CNZZ友盟等站点数据分析工作相同。

主要包含[PC端](https://web.51.la/)、[移动端](https://m.51.la)、小程序（微信搜索**51LA统计**）、配套的 `SDK` （基于浏览器端的用户行为上报）。

**PC端**早期采用Koa.js框架搭建、使用到[Art-Template](https://aui.github.io/art-template/zh-cn/index.html)，jQuery等。后面重构调整为 `Egg.js` 作为中间层服务，主要用于**鉴权**、对接收到的**后端数据处理**，使用 `nunjucks` 模板引擎**渲染页面**等，前端样式及JS逻辑等代码构建升级至 `Webpack4` ，并开发集成编译后使用七牛Node下CDN上传服务等。

中间层服务使用了 `Redis+Session` 用于存储用户状态、 `Redis` 同时具备数据分析存储能力，并有大量制定化需求由中间层开发。

**移动端**采用 `Vue.js` ，结合 `Muse-UI` 组件库搭建，统一使用 `Egg.js` 框架中间层服务进行数据传递等能力。

**小程序**结合 `Vant Weapp` 直接由微信开发者工具开发。

**网站统计SDK**是**纯Javascript**开发的一款性能优异的数据统计能力代码，一共有两套 `SDK` ，基础版和专业版。基础版仅包括一些常见的**客户端UA采集**，而专业版包括**事件采集**，**用户点击行为采集**和**热力图渲染**等高级能力。代码打包采用 `Webpack4` 。

### 要啦短网址

> 产品用于将长URL缩短的功能，并提供推广分析能力。

包括[PC端](https://dwz.51.la/)、[移动端](https://dwz.51.la/m/)两个版本。

**PC端**第一版采用 `Nuxt.js+Koa.js` 开发的一套同构应用，后来因开发环境编译过慢移除Koa.js，由Nuxt.js的中间件实现鉴权等中间层。

**移动端**采用 `Vue-CLI` 搭建，结合 `Mand Mobile` 组件库搭建，利用 `PostCSS` 的插件实现**移动端适配**，整个产品包括设计由我完成。

### 要啦小程序统计

> 该产品可实时分析微信小程序访问在线人数、统计新增用户、小程序访问量、来路等数据报表。

包括[PC端](https://mpa.51.la/)、 `SDK` 开发。

**PC端**基于[Egg + Vue 工程化解决方案](https://www.yuque.com/easy-team/egg-vue)开发，用户可以通过该产品分析微信小程序的用户使用情况，包括但不限于每日流量、新增用户、用户留存、流量趋势、场景值分析、页面分析、用户画像等能力。

SDK根据微信小程序生命周期特性、小程序内置接口来获取信息，在合适的时候进行数据上报并实时分析。采用 `Gulp` 进行SDK代码压缩。

### 要啦用户中心

之前以上产品仅有产品独立的登录页，造成维护管理等方面困难，因产品线增加，改造为SSO模式，配合后端进行了大量的调整，在鉴权方面、产品维护方面有较大提升。

### 粤开财富小程序

该小程序（微信搜索**粤开财富**）实现了在小程序上的实现一个简单的炮击船只的小游戏能力。因小游戏开发周期过长，故通过原生Javascript配合一些CSS Animation、GIF动态图片实现。

> 早期需求评估考虑过COCOS引擎，PIXI.js都不适合小程序。但需求期望能在小程序的游戏交互上获取内置小程序接口数据，故也无法使用Webview方式。

### 一加运动打卡小程序

用于万丈金数公司内部员工使用的运动、公益活动打卡积分小程序。

项目包括 `微信小程序` 、后端服务、管理员后台三个部分。

技术栈： `微信小程序` 开发；后端采用 `Koa.js` 、 `MySQL` 、 `Redis` 等，用到 `JWT` 、 `邮件发送服务` （收取验证码）等特性；管理后台采用 `Vue-CLI` 搭建，使用Vue版 `Ant Design` 的UI框架。

## 学习

### a-new-project-needs

做一个项目需要用到各种基础配置，完善中。

项目地址：<https://github.com/whidy/a-new-project-needs>

### api-json-server

自建的一个 `Mock` 数据临时测试仓库工具，主要基于[faker.js](https://github.com/Marak/faker.js)

项目地址：<https://github.com/whidy/api-json-server>

### BlazingLOG

基于 `Next.js` + `PostgreSQL` + `Docker` ，可视化数据库维护通过[Hasura](https://hasura.io/)，查询通过GraphQL。

项目地址：<https://github.com/whidy/BlazingLOG>

### daily

这是一个基于Hugo的建立在github上的一个博客，也是我所有博客之一，访问地址<https://whidy.github.io/>，不过后来比较少更新了，大部分数据和 `SegmentFault` 的[个人主页](https://segmentfault.com/u/whidy)信息一致，不过也不怎么更新了，博客内容均在主站[WhidyWrites](https://www.whidy.net/)发布。

项目地址：<https://github.com/whidy/daily>

### mobileweb

基于 `Webpack4` + `postcss` 来解决移动端适配问题，主要采用 `rem` 单位解决，另有一个分支，采用 `vw` 单位解决方案。

项目地址：<https://github.com/whidy/mobileweb>

### my-cli

存放个人常用的快速搭建站点基础配置脚手架，未完善好的，很久没有维护了，未来可能保持更新。目前包含 `Vue-CLI 4` ， `Nuxt.js` ， `Next.js` 等相关。

项目地址：<hhttps://github.com/whidy/my-cli>

### coding-style-rules

基于 `Vue-CLI4.x` 的项目开发脚手架，主要在于完善了ESLint配置，规范化代码，以降低团队协作开发过程中出现的各种规范不统一问题。*现已从公司内部Git仓迁移至Github。*

项目地址：<https://github.com/whidy/coding-style-rules>

## 研究

### lab-tools

用于存放各种奇怪需求的工具，包括：

* [跨域共享方案](https://github.com/whidy/lab-tools/tree/master/cross-domain-sharing)
* [图片水印添加](https://github.com/whidy/lab-tools/tree/master/watermark)
* [Gitbook变量使用](https://github.com/whidy/lab-tools/tree/master/gitbook-variables)
* [网页用户行为记录及回放](https://github.com/whidy/lab-tools/tree/master/rrweb)
* ...（等等）

技术栈包括： `hapi` （Node.js框架）、 `Koa.js` 、 `GitBook` 、 `Canvas` 等。

项目地址：<https://github.com/whidy/lab-tools>

## 其他

### postcss-study

17年学习PostCSS写的一系列教程（笔记）分享。目前已暂停更新。

项目地址：<https://github.com/whidy/postcss-study>

### beauty-my-webs

尝试一套开发规范的项目，有很多需要完善的。

项目地址：<https://github.com/whidy/beauty-my-webs>

### grab-web

基于Egg.js的一个Web应用，实现Web端上传文件，后端查询数据并返回查询结果和批量查询的日志记录。

后端服务使用Node.js服务端**处理文件**，并集成若干**代理服务器**在服务层模发送查询请求，防止被封IP，部分查询接口还需要进行**图形验证码**验证通过（采用*百度OCR*接口）查询。

技术栈： `Egg.js` 、 `mongoDB` 、 `Redis` 、文件读取、批量任务队列、日志记录等

> 研究图形验证码的过程中，稍有研究Python相关的机器学习方面知识，因为模型实现等多方面困难最终放弃。

## 废弃

### blog-hexo

尝试将旧版博客迁移至Hexo的方案

### wordpress-to-gatsby

之前做Wordpress博客迁移到Gatsby做的一些研究

项目地址：<https://github.com/whidy/wordpress-to-gatsby>

## 补充

在多年工作和个人学习过程中，其技术接触广泛，善用各类工具及开源库，有较强的业务解决能力和需求分析能力。

有团队领导能力，能高效发挥团队优势，搭建技术梯队、基础建设能力，提升团队整体水平。

### 主要技术能力总结如下

* jQuery、Vue.js、Nuxt.js、Koa.js、Egg.js、微信小程序
* Nunjucks、Art-Template、JSTL
* SASS、PostCSS
* Bootstrap、TailwindCSS
* Webpack、Gulp
* Redis、MySQL、RESTful
* VSCode、Git、Fiddler、Charles
* Windows、Macos

### 了解并实践的技术栈包括

* Wordpress、React.js、Next.js、Gatsby.js、Express.js、Jekyll
* Strapi、Hasura
* MongoDB、PostgreSQL、GraphQL
* HTTP、Nginx、云存储（OBS、COS等）、CDN配置及开发
* Linux

### 有接触使用过

* Hapi.js
* Cocos 2D、Pixi.js
* Python、TensorFlow

### 其他技能

* 兴趣驱使，热衷开发
* 做笔记和分享习惯，良好Markdown书写能力
* 严格的开发规范和团队协作能力
* 较好的英文阅读能力
* 博客：<https://www.whidy.net>和<https://www.whidy.cn>
* SegmentFault：<https://segmentfault.com/u/whidy>
* Github：<https://github.com/whidy>
* StackOverflow：<https://stackoverflow.com/users/3089701/whidy>
* Medium：<https://medium.com/@bs1988>

> 各种UI组件库、各种常用的CLI工具这里省略。