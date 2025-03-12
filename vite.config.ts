/// <reference types="vitest" />

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { peerDependencies } from './package.json';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'phv-kit',
      fileName: (format) => `index.${format}.js`,
      formats: ['cjs', 'es']
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)]
    },
    sourcemap: true,
    emptyOutDir: true
  },
  plugins: [dts()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts'
  }
});
