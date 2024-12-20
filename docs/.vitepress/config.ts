import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'NeatUI',
  description:
    'Neat UI 是一个基于 Vue3 的轻量级的 UI 组件库，提供基础的 UI 组件，方便开发。',
  base: '/litos-ui-vue/',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/litos-ui-vue/logo.svg',
      },
    ],
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    logo: '/logo.svg',
    outline: {
      level: [1, 4],
    },
    siteTitle: false,
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '文档',
        link: '/usage',
      },
      {
        text: '组件',
        link: '/components/container',
      },
    ],
    sidebar: [
      {
        text: '指南',
        collapsed: true,
        items: [
          {
            text: '快速上手',
            link: '/usage',
          },
          {
            text: '样式重置',
            link: '/reset',
          },
          {
            text: '工具样式',
            link: '/css-util',
          },
          {
            text: '暗黑模式',
            link: '/dark',
          },
        ],
      },
      {
        text: '通用',
        collapsed: true,
        items: [
          {
            text: 'Container 容器布局',
            link: '/components/container',
          },
          {
            text: 'Polygon 多边形',
            link: '/components/polygon',
          },
          {
            text: 'Icon 图标',
            link: '/components/icon',
          },
          {
            text: 'Theme 主题切换',
            link: '/components/theme',
          },
        ],
      },
      {
        text: '表单',
        collapsed: true,
        items: [
          {
            text: 'Button 按钮',
            link: '/components/button',
          },
          {
            text: 'Input 输入框',
            link: '/components/input',
          },
          {
            text: 'MdInput 输入框',
            link: '/components/mdinput',
          },
          {
            text: 'Checkbox 复选框',
            link: '/components/checkbox',
          },
          {
            text: 'Radio 单选框',
            link: '/components/radio',
          },
          {
            text: 'Switch 开关',
            link: '/components/switch',
          },
          {
            text: 'Form 表单',
            link: '/components/form',
          },
          {
            text: 'SelectOri 原生下拉选择',
            link: '/components/selectori',
          },
          {
            text: 'DatePickerOri 日期选择',
            link: '/components/datepickerori',
          },
          {
            text: 'ColorPicker 颜色选择',
            link: '/components/colorpicker',
          },
          {
            text: 'Select 选择器',
            link: '/components/select',
          },
        ],
      },
      {
        text: '数据展示',
        collapsed: true,
        items: [
          {
            text: 'Card 卡片',
            link: '/components/card',
          },
          {
            text: 'Qrcode 二维码',
            link: '/components/qrcode',
          },
          {
            text: 'Image 图片',
            link: '/components/image',
          },
          {
            text: 'Shadow 阴影',
            link: '/components/shadow',
          },
          {
            text: 'Table 表格',
            link: '/components/table',
          },
          {
            text: 'TanstackTable',
            link: '/components/tanstacktable',
          },
          {
            text: 'Collapse 折叠面板',
            link: '/components/collapse',
          },
          {
            text: 'Progress 进度条',
            link: '/components/progress',
          },
          {
            text: 'DescriptionPanel 简介面板',
            link: '/components/descriptionpanel',
          },
          {
            text: 'List 滚动列表',
            link: '/components/list',
          },
          {
            text: 'VirtualList 虚拟列表',
            link: '/components/virtuallist',
          },
          {
            text: 'Tabs 标签页',
            link: '/components/tabs',
          },
          {
            text: 'PageHeader 页头',
            link: '/components/pageheader',
          },
          {
            text: 'Tag 标签',
            link: '/components/tag',
          },
          {
            text: 'Pagination 分页',
            link: '/components/pagination',
          },
        ],
      },
      {
        text: '导航',
        collapsed: true,
        items: [
          {
            text: 'Tabbar 标签栏',
            link: '/components/tabbar',
          },
        ],
      },
      {
        text: '反馈',
        collapsed: true,
        items: [
          {
            text: 'Popover 弹出气泡',
            link: '/components/popover',
          },
          {
            text: 'FloatingPopover',
            link: '/components/floating_popover',
          },
          {
            text: 'Dialog 对话框',
            link: '/components/dialog',
          },
          {
            text: 'Tooltip 文字提示',
            link: '/components/tooltip',
          },
          {
            text: 'Message 消息提示',
            link: '/components/message',
          },
          {
            text: 'Popconfirm 气泡确认框',
            link: '/components/popconfirm',
          },
        ],
      },
      {
        text: '自定义指令',
        collapsed: true,
        items: [
          {
            text: 'Directives 简单指令',
            link: '/components/directives',
          },
          {
            text: 'Loading 加载',
            link: '/components/loading',
          },
          {
            text: 'BorderLoading 边框加载',
            link: '/components/border_loading',
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/DvShu/litos-ui-vue',
      },
      {
        icon: {
          svg: '<svg viewBox="0 0 1024 1024" aria-hidden="true"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23"></path></svg>',
        },
        link: 'https://gitee.com/towardly/litos-ui-vue',
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
