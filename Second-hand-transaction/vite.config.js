import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

const {resolve} = require('path');

// https://vitejs.dev/config/
export default defineConfig({
    alias: {
        '@': resolve(__dirname, 'src'),
    },
    plugins: [vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),],
    server: {
        //跨域处理
        proxy: {
            '^/api/.*': {
                target: 'https://api.uomg.com/',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
        }
    },
})