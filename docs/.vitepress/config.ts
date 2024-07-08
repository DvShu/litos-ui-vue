import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'NeatUi',
  description:
    'Neat UI 是一个基于 Vue3 的轻量级的 UI 组件库，提供基础的 UI 组件，方便开发。',
  base: '/neatui-vue/',
  cleanUrls: true,
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/neatui-vue/logo.svg' }]],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    logo: '/logo.svg',
    outline: {
      level: [1, 4],
    },
    siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/usage' },
      { text: '组件', link: '/components/container' },
    ],

    sidebar: [
      {
        text: '指南',
        collapsed: false,
        items: [
          { text: '快速上手', link: '/usage' },
          { text: '样式重置', link: '/reset' },
          { text: '工具样式', link: '/css-util' },
        ],
      },
      {
        text: '组件',
        collapsed: false,
        items: [
          { text: 'Container 容器布局', link: '/components/container' },
          { text: 'Directives 指令', link: '/components/directives' },
          { text: 'Icon 图标', link: '/components/icon' },
          { text: 'Button 按钮', link: '/components/button' },
          { text: 'Input 输入框', link: '/components/input' },
          { text: 'Tooltip 文字提示', link: '/components/tooltip' },
          { text: 'Message 消息提示', link: '/components/message' },
          { text: 'Card 卡片', link: '/components/card' },
          { text: 'Qrcode 二维码', link: '/components/qrcode' },
          { text: 'Image 图片', link: '/components/image' },
          { text: 'Shadow 阴影', link: '/components/shadow' },
          { text: 'Table 表格', link: '/components/table' },
          { text: 'Checkbox 复选框', link: '/components/checkbox' },
          { text: 'Radio 单选框', link: '/components/radio' },
          { text: 'Switch 开关', link: '/components/switch' },
          { text: 'Polygon 多边形', link: '/components/polygon' },
          { text: 'Form 表单', link: '/components/form' },
          { text: 'Collapse 折叠面板', link: '/components/collapse' },
          { text: 'Progress 进度条', link: '/components/progress' },
          { text: 'Loading 加载', link: '/components/loading' },
          {
            text: 'DescriptionPanel 简介面板',
            link: '/components/descriptionpanel',
          },
          {
            text: 'Tabbar 标签栏',
            link: '/components/tabbar',
          },
          {
            text: 'Tabs 标签页',
            link: '/components/tabs',
          },
          {
            text: 'List 滚动列表',
            link: '/components/list',
          },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DvShu/neatui-vue' },
      {
        icon: {
          svg: '<svg viewBox="0 0 1024 1024" aria-hidden="true"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23"></path></svg>',
        },
        link: 'https://gitee.com/towardly/neatui-vue',
      },
    ],

    footer: {
      message: 'Released under the MulanPSL2 License.',
      copyright: 'Copyright © 2019-present Shu',
    },
    search: {
      provider: 'local',
    },
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色主题',
    darkModeSwitchTitle: '切换到深色主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    externalLinkIcon: true,
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
  },
});
