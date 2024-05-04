/** @type {import('tailwindcss').Config} */
export default{
  content: [
    "index.html",
    "./src/**/*.{vue,js,ts,svg}",
  ],
  darkMode: ["class"],
  // safelist: ["dark"],
  prefix: "", // or 'media' or 'class'
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'instrument': ['Instrument', 'sans-serif'],

    },
    extend: {
      colors: {
          primary: 'var(--primary)',
          background: 'var(--background)',
          backgroundSecond: 'var(--background-second)',
          text: 'var(--text)',
          textSecond: 'var(--text-second)',
          shading: 'var(--shading)',
          card: 'var(--card)',
      },
    },
  },
}

