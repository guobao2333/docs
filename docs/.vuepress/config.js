import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  base: '/docs-source/',

  title: '果宝的文档',
  description: '这里全都是宝贝，别愣着了快捡啊！',

  theme: defaultTheme({
    // logo: 'https://vuejs.press/images/hero.png',
    locales: {
      '/': {
        selectLanguageName: '简体中文',
      },
      /*'/en/': {
        selectLanguageName: 'English',
      },*/
    },

    navbar: ['/', '/get-started'],
  }),

  bundler: viteBundler(),
})
