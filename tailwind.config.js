/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'media',
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'thin': '2px',
        'medium': '1rem',
        'large': '2rem',
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#ffffff',
      'yellow': '#e6930e',
      'link-yellow': '#f8cd0e',
      'spice-purple': '#8a53b1',
      'text-grey': '#4c4c4cbb',
      'light-grey': '#aaaaaaa'
    },
    fontFamily: {
      sans: ['Arial', 'sans-serif'],
      serif: ['Made Tommy', 'serif'],
      tommy: ['Made Tommy', 'serif'],
      segoe: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      cambria: ['Cambria', 'Cochin', 'Georgia', 'Times', 'Times New Roman', 'serif'],
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [require("@tailwindcss/forms")],
};
