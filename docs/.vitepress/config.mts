import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Oneplus Kernel Image",
  description: "使用GA编译一加KSU分支内核并发布构建",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/what-is-this' }
    ],

    footer: {
        message: '感谢GitHub Pages提供网站搭建服务',
        copyright: 'Copyright © 2024-现在 酷安@我不是尘桑。'
    },

    editLink: {
        pattern: 'https://github.com/mcxiaochenn/Action_OKI_KernelSU_SUSFS/edit/main/docs/:path',
        text: '在 GitHub 中编辑本页'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mcxiaochenn/Action_OKI_KernelSU_SUSFS' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: '什么是OKI', link: '/guide/what-is-this' },
          { text: '安装', link: '/guide/installation' },
          { text: '无root安装', link: '/guide/noroot-installation'},
          { text: '如何构建', link: '/guide/how-to-build'}
        ]
      }
    ]
  }
})
