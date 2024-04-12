// @ts-nocheck
import { defineConfig } from '@unocss/vite';
import { presetMini } from '@unocss/preset-mini';
import presetWebFonts from '@unocss/preset-web-fonts'
import { presetKobalte } from 'unocss-preset-primitives'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
    presets: [
        presetMini(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                code: 'JetBrains Mono',
            },
        }),
        presetIcons({}),
        presetKobalte({}),
    ],
    theme: {
        colors: {
            'primary': '#00CF00',
            'second': '#0095FF',
            'light': '#F5FBF2',
            'dark': '#191919',
            'dark-light': '#212121'
        }
    }
});
