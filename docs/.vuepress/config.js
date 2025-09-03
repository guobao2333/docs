import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'zh-CN',
  base: '/docs/',

  title: '果宝个人文档',
  description: '正在建设中，请稍安勿躁',

  theme: defaultTheme({
    // logo: 'https://vuejs.press/images/hero.png',
    repo: 'guobao2333/docs',
    contributors: false,
    /*locales: {
      '/': {
        selectLanguageName: '简体中文',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
    },*/

    navbar: ['/', '/get-started', '/termux-android-sdk'],
  }),

  bundler: viteBundler(),
})
