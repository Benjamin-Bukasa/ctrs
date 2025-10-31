/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xs': '320px',   // Très petit téléphone
        'xs': '360px',     // Petit téléphone
        'sm': '480px',     // Téléphone standard
        'md': '768px',     // Tablette
        'lg': '1024px',    // PC / Laptop
        'xl': '1440px',    // Grand écran desktop
        '2xl': '1920px',   // Projection / Full HD
        '4k': '2560px',    // 4K - très grand écran
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}