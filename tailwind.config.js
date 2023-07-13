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
      colors:{
        'orange':'#FF882E',
        'blue':'#004891',
      },
      fontFamily:{
        'travels':['TT Travels']
      },
      animation:{
        'textnav':'textnav 300ms ease-in-out',
        'fadein':'fadein 300ms ease-in-out',
        'fadeout':'fadeout 300ms ease-in-out',

      },
      keyframes:{
        textnav: {
          '0%': { opacity:0 },
          '100%': { opacity:1 },
        },
        fadein: {
          '0%': { opacity:0 },
          '100%': { opacity:1 },
        },
        fadeout: {
          '0%': { opacity:1 },
          '100%': { opacity:0 },
        }
      }
    },
  },
  plugins: [],
}
