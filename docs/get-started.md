# 开始

这是一个普通的页面，其中包含Vuepress的基础知识。

## 页

您可以在Vuepress目录中添加Markdown文件，每个标记文件都将转换为网站中的页面。

有关更多详细信息，请参见[路由][]。

## 内容

每个标记文件将渲染到[HTML][content]，然后转换为VUE SFC。

Vuepress支持基本的Markdown语法和[某些扩展][synatex-extensions]，您还可以在其中[使用VUE功能][vue-feature]。

## 配置

VuePress使用`.vuepress/config.js`（或.ts）文件作为[site Configuration][config]，您可以使用它来配置您的站点。

对于[客户端配置][client-config]，您可以创建`.vuepress/client.js`（或.ts）。

同时，您还可以使用[FrontMatter][]添加每个页面的配置。

## 布局和自定义

这是控制`@vuepress/theme-default`：

 - [底栏][]
 - [侧边栏][]

检查[默认主题文档][default-theme]以获取完整参考。

您可以使用`.vuepress/styles/index.scss`文件[添加额外的样式][style]。

[routing]: https://vuejs.press/guide/page.html#routing
[content]: https://vuejs.press/guide/page.html#content
[synatex-extensions]: https://vuejs.press/guide/markdown.html#syntax-extensions
[vue-feature]: https://vuejs.press/guide/markdown.html#using-vue-in-markdown
[config]: https://vuejs.press/guide/configuration.html#client-config-file
[client-config]: https://vuejs.press/guide/configuration.html#client-config-file
[frontmatter]: https://vuejs.press/guide/page.html#frontmatter
[navbar]: https://vuejs.press/reference/default-theme/config.html#navbar
[sidebar]: https://vuejs.press/reference/default-theme/config.html#sidebar
[default-theme]: https://vuejs.press/reference/default-theme/
[style]: https://vuejs.press/reference/default-theme/styles.html#style-file
