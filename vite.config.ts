import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'unplugin-dts/vite';
import { readdirSync } from 'node:fs';
import path from 'path';

const entries = {};

const entryFiles = readdirSync('./src', { recursive: true, encoding: 'utf-8' });
for (const filename of entryFiles) {
  if (
    filename.startsWith('components') ||
    filename.startsWith('directives') ||
    filename.startsWith('hooks')
  ) {
    const filepath = path.parse(filename);
    if (filepath.ext === '') continue;
    const fileAbsName = path.join('src', filename);
    if (filepath.dir === `components${path.sep}message`) {
      if (filepath.ext === '.ts') {
        entries[filepath.dir] = fileAbsName;
      }
    } else {
      entries[path.join(filepath.dir, filepath.name)] = fileAbsName;
    }
  }
}
entries['index'] = 'src/index.ts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: 'tsconfig.types.json',
      processor: 'vue',
    }),
  ],
  build: {
    outDir: 'lib',
    lib: {
      entry: entries,
      formats: ['es'],
      fileName: (format, entryName) => {
        return `${entryName}.js`;
      },
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        'vue',
        /ph-utils\/*/,
        'vue-router',
        '@tanstack/vue-table',
        'qrcode-generator-es',
        '@floating-ui/dom',
      ],
    },
    emptyOutDir: true,
    copyPublicDir: false,
  },
});
