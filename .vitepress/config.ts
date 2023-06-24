import { defineConfig } from 'vitepress'
import { katex } from '@mdit/plugin-katex';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Technical Blog Template",
  description: "A Technical Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: 'github', link: 'https://github.com/SimonBerens/technical-blog-template' }
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
