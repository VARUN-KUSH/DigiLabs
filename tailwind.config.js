/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    colors: { 'white': '#fff',
    'neutral1000': '#e6e7e9',
    'neutral400': '#5a6475',
    'neutral200': '#363c46',
    'neutral100': '#24282f',
    'neutral50': '#121417',
    'neutral1300': '#f1f1f2',
    'neutral1200': '#eeefef',
    'pri-purple400': '#582066',
    'color-ghostwhite100': '#faf9ff',
    'pri-purple900': '#f4eff6',
    'color-mediumpurple': 'rgba(197, 152, 255, 0.5)',
    'color-lavender': '#efe4f2',
    },
    fontFamily: {
      Manrope: ['Manrope', 'sans-serif'],
      Inter: ['Inter', 'sans-serif'],
    },
    borderRadius: {
      'br-5xs': '8px', 
      'br-smi': '13px',
      'br-221xl': '240px',
    },
    fontSize: {
      'h25': '14px',
      'h50': '16px',
      'h400-40': '40px',
      'h300-32': '32px',
      'h500-48': '48px',
      'font1': '13px',
      'font2': '32.5px',
      'font3': '19.5px',
      'para-medium': '18px',
      'h700': '62px',
      'h05-12-medium': '12px',
    },
    
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var( tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var( tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
