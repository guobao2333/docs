import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  base: '/docs/',

  title: '果宝个人文档',
  description: '正在建设中，暂时保留默认内容',

  theme: defaultTheme({
    // logo: 'https://vuejs.press/images/hero.png',
    repo: 'guobao2333/docs',
    contributors: false
    locales: {
      '/': {
        selectLanguageName: '简体中文',
      },
      /*'/en/': {
        selectLanguageName: 'English',
      },*/
    },

    navbar: ['/', '/get-started', '/termux-android-sdk'],
  }),

  bundler: viteBundler(),
})
