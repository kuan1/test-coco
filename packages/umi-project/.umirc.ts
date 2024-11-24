import { defineConfig } from "umi";
// @ts-ignore
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin'

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
  chainWebpack(config) {
    config.plugin('module-federation').use(ModuleFederationPlugin, [{
      name: 'remoteApp',
      filename: 'remoteEntry.js',
      remoteType: 'var',
      exposes: {
        './cocoRegister': './src/utils/cocoRegister.tsx'
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
    }]);
    // 测试federation缓存
    config.cache(false)
  },
});
