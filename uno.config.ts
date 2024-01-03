import { defineConfig } from 'unocss'

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
})
