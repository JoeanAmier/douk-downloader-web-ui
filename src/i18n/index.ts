import { createI18n } from 'vue-i18n'

export const i18n = createI18n({
  locale: 'zh-CN',
  // locale: 'en-US',

  // 没有翻译时直接显示原文
  missing: (locale, key) => {
    return key
  },

  messages: {
    'zh-CN': {},
    'en-US': {
      是否下载作品音乐: "Download works's music",
      启用: 'Enable',
      禁用: 'Disable',
    },
  },
})
