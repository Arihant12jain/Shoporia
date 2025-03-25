/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**",'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

