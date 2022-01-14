module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            'on-background': 'var(--color-on-background)'
        }
        //     primary: 'var(--color-primary)',
        //     secondary: 'var(--color-secondary)'
        // }
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
