/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            keyframes: {
                move: {
                    from: { transform: 'translateY(-15px)' },
                    to: { transform: 'translateY(0px)', scale: '1.03' },
                },
                moveVertical: {
                    from: { transform: 'translateY(-10px)' },
                    to: { transform: 'translateY(10px)' },
                },
            },
            animation: {
                move: 'move 3s ease-in-out infinite alternate',
                moveVertical: 'moveVertical 3s ease-in-out infinite alternate',
            },
        },
    },
    plugins: [require('tailwindcss'), require('autoprefixer')],
};
