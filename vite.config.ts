/// <reference types="vitest" />
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
// import devtools from 'solid-devtools/vite';
import UnocssPlugin from '@unocss/vite';

export default defineConfig({
    plugins: [
        // devtools(),
        solidPlugin(),
        UnocssPlugin({
            // your config or in uno.config.ts
        }),
    ],
    server: {
        port: 3000,
    },
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['node_modules/@testing-library/jest-dom/vitest'],
        // if you have few tests, try commenting this for better performance
        isolate: false,
    },
    build: {
        target: 'esnext',
    },
    resolve: {
        conditions: ['development', 'browser'],
    },
});
