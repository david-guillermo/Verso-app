import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue';
import { createTailwindConfig } from 'vite-plugin-tailwindcss';

export default defineConfig({
  plugins: [
    createVuePlugin({
      template: { compileVue: false },
    }),
    createTailwindConfig({
      config: './tailwind.config.js',
    }),
  ],
  build: {
    target: 'es2020',
    outDir: './dist',
  },
  server: {
    port: 3000,
  },
});
