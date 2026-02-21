/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#6366f1', // Indigo
                    dark: '#4f46e5',
                },
                secondary: {
                    light: '#ec4899', // Pink
                    dark: '#db2777',
                },
                dark: {
                    DEFAULT: '#0f172a',
                    lighter: '#1e293b',
                    lightest: '#334155',
                }
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
            backdropBlur: {
                xs: '2px',
            },
            animation: {
                'gradient-x': 'gradient-x 15s ease infinite',
                'gradient-y': 'gradient-y 15s ease infinite',
                'gradient-xy': 'gradient-xy 15s ease infinite',
            },
            keyframes: {
                'gradient-y': {
                    '0%, 100%': { 'background-size': '400% 400%', 'background-position': 'center top' },
                    '50%': { 'background-size': '200% 200%', 'background-position': 'center bottom' }
                },
                'gradient-x': {
                    '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
                    '50%': { 'background-size': '200% 200%', 'background-position': 'right center' }
                },
                'gradient-xy': {
                    '0%, 100%': { 'background-size': '400% 400%', 'background-position': 'left center' },
                    '50%': { 'background-size': '200% 200%', 'background-position': 'right center' }
                }
            }
        },
    },
    plugins: [],
}
