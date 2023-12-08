import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import macrosPlugin from 'vite-plugin-babel-macros'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    macrosPlugin(),
    react({ jsxImportSource: '@emotion/react' }),
    tsconfigPaths(),
  ],
  cacheDir: './.vite',
})
