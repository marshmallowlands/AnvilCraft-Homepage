import { defineConfig } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
const base = '/AnvilCraft-Homepage/'

// https://vitepress.dev/reference/site-config
// .vitepress/config.js
export default defineConfig({
  base,
  srcDir: 'src',
  title: "AnvilCraft 铁砧工艺",
  description: "一个原版风科技模组",
  lang: "zh-CN",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      { text: '主页', link: '/' },
      { text: '信息', link: '/View' },
      { text: '关于支持赞助', link: '/about' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Anvil-Dev' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/5930630/channel/collectiondetail?sid=2530932' },
      { icon: 'discord', link: 'https://discord.gg/gAnWeZNKGh' },
    ]
  }
})
