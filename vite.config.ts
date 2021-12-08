import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
const path = require('path')

export default defineConfig({
  plugins: [solidPlugin()],
  resolve:{
    alias: {
      '@lib' : path.resolve(__dirname, './src/lib'),
      '@components' : path.resolve(__dirname, './src/components'),
      '@assets' : path.resolve(__dirname, './src/assets')
	}
  },
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
