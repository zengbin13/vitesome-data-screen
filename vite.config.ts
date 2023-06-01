/// <reference types="vitest" />

import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    VueMacros({
      defineOptions: false,
      defineModels: false,
      plugins: {
        vue: Vue({
          script: {
            propsDestructure: true,
            defineModel: true,
          },
        }),
      },
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      exclude: ['**/components/*.vue'],
      extendRoute(route, parent) {
        if (route.path === '/login')
          return route

        return {
          ...route,
          meta: { auth: true },
        }
      },
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS(),

    viteMockServe({
      mockPath: 'mock',
      enable: true,
    }),
  ],

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3333',
        changeOrigin: true,
        // rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
