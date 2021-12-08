const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
    extend: {
        fontWeight: ['hover', 'focus'],
        fontFamily: {
            'sans': ['Nunito','Helvetica', 'Arial', 'sans-serif', ...defaultTheme.fontFamily.sans],
        },
    },
    },
    variants: {},
    plugins: []
};
