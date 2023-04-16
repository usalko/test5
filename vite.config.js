import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig(() => {
    return {
        build: {
            outDir: 'build',
        },
        plugins: [
            react(),
            // svgr options: https://react-svgr.com/docs/options/
            svgr({ svgrOptions: { icon: true } }),
        ],
        server: {
            proxy: {
                '/graph': {
                    target: process.env.BACKEND_API_ENDPOINT || 'https://test5.qstand.art/',
                    changeOrigin: true,
                },
                '/media': {
                    target: process.env.BACKEND_API_ENDPOINT || 'https://test5.qstand.art/',
                    changeOrigin: true,
                },
            },
            watch: {
                usePolling: true,
            },
            port: 3000,
        },
    }
})