# vue-resume

> 一款个人简历编辑器

[预览地址](https://1w1ng.github.io/vue-resume/dist/)

## 项目描述
- 本项目为在线简历编辑器，具有注册，登录，登出，编辑区域增加删除功能，实时预览，在线保存等功能。
- 使用框架为vue，部分构件采用Element组件，结合HTML5,CSS3。

## 技术栈

Vue+webpack+ES6+Scss+leancloud


## 项目结构

```
├─build
├─config // webpack相关配置
├─dist // webpack打包后的文件
│  └─static
│      ├─css
│      └─js
├─src //开发环境
│  ├─assets //reset.css
│  ├─components // 组件
│  ├─lib //leancloud相关文件
└─static
```

## 使用方法

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
