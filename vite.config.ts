import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        tanstackRouter({
            target: 'react',
            autoCodeSplitting: true,
        }),
        react({
            babel: {
                plugins: [['babel-plugin-react-compiler']],
            },
        }),
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ['react', 'react-dom'],

                    data: [
                        '@tanstack/react-router',
                        '@tanstack/react-query',
                        'axios',
                    ],

                    mantine: [
                        '@mantine/core',
                        '@mantine/hooks',
                        '@mantine/notifications',
                        '@mantine/spotlight',
                    ],

                    carousel: [
                        '@mantine/carousel',
                        'embla-carousel',
                        'embla-carousel-react',
                    ],

                    motion: ['framer-motion'],

                    icons: ['@tabler/icons-react'],
                },
            },
        },
    },
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './src/setupTests.ts',
    },
});
