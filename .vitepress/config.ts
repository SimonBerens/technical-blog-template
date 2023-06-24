import { defineConfig } from 'vitepress'
import { katex } from '@mdit/plugin-katex';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Technical Blog Template",
  description: "A Technical Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },

  head: [[
    'link',
    {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.7/dist/katex.min.css', integrity: 'sha384-3UiQGuEI4TTMaFmGIZumfRPtfKQ3trwQE2JgosJxCnGmQpL/lJdjpcHkaaFwHlcI', crossorigin: 'anonymous'}
  ]],
  markdown: {
    config: md => {
      md.use(katex)
    }
  }
})
