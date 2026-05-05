import { fileURLToPath } from 'node:url'
import { dirname, extname, relative, resolve } from 'path'
import react from '@vitejs/plugin-react'
import esbuild from 'esbuild'
import { glob } from 'glob'
import { defineConfig, type Plugin } from 'vite'
import dts from 'vite-plugin-dts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// See https://github.com/vitejs/vite/issues/6555 for more information
const minifyBundle = (): Plugin => ({
  name: 'minify-bundle',
  async generateBundle(_, bundle) {
    for (const asset of Object.values(bundle)) {
      if (asset.type == 'chunk' && asset.fileName.endsWith('.js'))
        asset.code = (
          await esbuild.transform(asset.code, { minify: true, sourcemap: true })
        ).code
    }
  },
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['lib'],
      tsconfigPath: './tsconfig.build.json',
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace(
          /components\/([^/]+)\/index\.d\.ts$/,
          '$1.d.ts'
        ),
        content,
      }),
    }),
    minifyBundle(),
  ],
  build: {
    sourcemap: true,
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react-hook-form',
        '@hookform/resolvers',
        'react/jsx-runtime',
        '@radix-ui/react-checkbox',
        '@radix-ui/react-dialog',
        '@radix-ui/react-label',
        '@radix-ui/react-progress',
        '@radix-ui/react-radio-group',
        '@radix-ui/react-slot',
        '@radix-ui/react-switch',
        '@radix-ui/react-tabs',
        '@radix-ui/react-tooltip',
        '@radix-ui/react-popover',
        'class-variance-authority',
        'clsx',
        'tailwind-merge',
        'tailwindcss',
        'tailwindcss/colors',
        'tailwindcss/defaultTheme',
        'cmdk',
        'sonner',
        'vaul',
        'daterangepicker',
        'moment',
        'jquery',
      ],
      input: {
        index: resolve(__dirname, 'lib/index.ts'),
        ...Object.fromEntries(
          glob
            .sync('lib/components/*/index.{ts,tsx}', {
              ignore: ['lib/**/*.d.ts'],
            })
            .map((file) => [
              relative('lib/components', file).split('/')[0],
              fileURLToPath(new URL(file, import.meta.url)),
            ])
        ),
        ...Object.fromEntries(
          glob
            .sync('lib/components/*/styles.js')
            .map((file) => [
              relative(
                'lib',
                file.slice(0, file.length - extname(file).length)
              ),
              fileURLToPath(new URL(file, import.meta.url)),
            ])
        ),
        'tailwind.theme': resolve(__dirname, 'lib/tailwind.theme.ts'),
        styles: resolve(__dirname, 'lib/styles.js'),
      },
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
  },
})
