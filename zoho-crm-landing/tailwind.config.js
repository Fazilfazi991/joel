/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                brand: {
                    green: {
                        DEFAULT: '#56D964', // New Green
                        hover: '#22C55E',   // Green-500 (Previous light)
                        light: '#86EFAC',   // Green-300 (Lighter than new default)
                        50: '#F0FDF4',      // Green-50
                        100: '#DCFCE7',     // Green-100
                        200: '#BBF7D0',     // Green-200
                    },
                    orange: {
                        DEFAULT: '#F97316', // Orange-500
                        hover: '#EA580C',   // Orange-600
                        50: '#FFF7ED',      // Orange-50
                        100: '#FFEDD5',     // Orange-100
                    },
                    violet: {
                        DEFAULT: '#8B5CF6', // Violet-500
                        hover: '#7C3AED',   // Violet-600
                        50: '#F5F3FF',      // Violet-50
                        100: '#EDE9FE',     // Violet-100
                    },
                    dark: {
                        DEFAULT: '#111827', // Gray-900
                    },
                    gray: {
                        50: '#F5F5F5',
                        100: '#F3F4F6',
                        200: '#E5E7EB',
                        300: '#D1D5DB',
                        400: '#9CA3AF',
                        500: '#6B7280',
                        600: '#4B5563',
                        900: '#111827',
                    }
                }
            }
        },
    },
    plugins: [],
}
