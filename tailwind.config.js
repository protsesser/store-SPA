/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'plus-jakarta-sans': ['"Plus Jakarta Sans"', 'sans-serif'],
      'sora': ['Sora', 'sans-serif'],
      'averia-libre': ['"Averia Libre"', 'system-ui'],
      //"Sora", sans-serif
    },
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
          ".no-scrollbar::-webkit-scrollbar": {
              display: "none",
          },
          ".no-scrollbar": {
              "-ms-overflow-style": "none",
              "scrollbar-width": "none",
          },
      };
      addUtilities(newUtilities);
  },
  ],
}

