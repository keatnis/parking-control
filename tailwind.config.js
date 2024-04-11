/** @type {import('tailwindcss').Config} */
 // darkMode: ['selector', '[data-mode="dark"]'],
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    
    // colors: {
    //   primary: '#116ab0', 
    // },
    extend: {},
  },
  plugins: [
    ('flowbite/plugin')
  ],
}

