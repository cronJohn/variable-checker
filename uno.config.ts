import { defineConfig } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
    theme: {
        colors: {
            'tc': {
                'primary': '#20EBFD',
                'dark': '#333a3b',
                'light': '#e0ebec',
            },
        },
    },
    rules: [
        ['nm-bs', [
            ['box-shadow', '7px 7px 14px #242929, -7px -7px 14px #424b4d'],
        ]],
    ],

    presets: [
        presetUno(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                main: 'Noto Sans',
            }
        }),
    ],
})
