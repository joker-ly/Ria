/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}','node_modules/flowbite-react/lib/esm/**/*.js', /* src folder, for example */],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('assets/images/about-img-43fdee60.webp')",
        'logo': "url('assets/images/maharah-logo.svg')",
      }
    },
  },
  plugins: [ require('flowbite/plugin'),],
}

