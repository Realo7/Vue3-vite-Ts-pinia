import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue'],
      dts: 'src/auto-import.d.ts',
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/bem.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      // 设置别名 '@' 指向 'src' 目录
      '@': '/src',
    },
  },
})
