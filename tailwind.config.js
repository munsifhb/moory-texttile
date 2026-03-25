/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '200px',   // Small screens (mobile)
      md: '768px',   // Medium screens (tablet)
      lg: '1024px',  // Large screens (laptop)
      xl: '1280px',  // Extra large screens (desktop)
      '2xl': '1536px', // 2X large screens (big monitors)
    },

    colors : {
     'accent' : '#f74e25',
     
     'light' : '#FAF7F2',
      'text' : '#1A1A1A',
      'muted' : '#ff7f11'
    },

    fontFamily : {
      'josefin' : ['josefinsans', 'sans-serif'],
    },
    extend: {

    },
  },
  plugins: [],
}

