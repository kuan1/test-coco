import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes('react-')
        }
      }
    }),
    federation({
      name: 'host-app',
      remotes: {
        remoteApp: {
          external: 'http://localhost:8000/remoteEntry.js', // 远程模块地址
          externalType: 'url',
          format: 'var'
        }
      },
    }),
  ],
})
