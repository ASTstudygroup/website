import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** .... */
import Markdown from '@pity/vite-plugin-react-markdown'
export default defineConfig({
  base: "/website/",
  plugins: [
    react(),
    Markdown({
      wrapperComponentName: 'ReactMarkdown',
      wrapperComponentPath: '',
      // if you want use components in md file, please add it in this
      // [ComponentName]: `componentPath`
      // ?‍?: the `ComponentName` must be `CamelCase`
      importComponentsPath: {
        ReactTest: './src/components/Timeline/page',
      },
      // markdownItUses: [
      //   prism,
      // ],
    }),
  ],
})