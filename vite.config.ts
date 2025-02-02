import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { transformWithEsbuild } from 'vite'

export default defineConfig({
    root: 'src/',
    publicDir: '../public/',
    plugins: [
        // React support with SWC
        react({}),
        // .js file support as if it was JSX
        {
            name: 'load+transform-js-files-as-jsx',
            async transform(code, id) {
                if (!id.match(/src\/.*\.js$/))
                    return null
                return transformWithEsbuild(code, id, {
                    loader: 'jsx',
                    jsx: 'automatic',
                })
            },
        },
    ],
    server: {
        host: true,
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env)
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true,
        assetsDir: 'gallery/assets',
        rollupOptions: {
            output: {
                assetFileNames: 'gallery/assets/[name]-[hash][extname]',
                chunkFileNames: 'gallery/assets/[name]-[hash].js',
                entryFileNames: 'gallery/assets/[name]-[hash].js',
            }
        }
    },
})