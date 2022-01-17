module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            'on-background': 'var(--color-on-background)',
            'primary': 'var(--color-primary)',
            'interactive': 'var(--color-interactive)'
        },
        fontSize: {
            '5xl': ['3rem', {
                lineHeight: '3',
            }]
        },
        //     primary: 'var(--color-primary)',
        //     secondary: 'var(--color-secondary)'
        // }
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
