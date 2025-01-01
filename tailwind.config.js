/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Primary: '#D5EDFF', 
        Secondary: '#0675F5',
        Border:'#2B5B87'
      },
      backgroundImage: {
        'btn-blue-gradient': 'linear-gradient(to right, #2E96F9, #0079EB)',
        'btn-dark-gradient': 'linear-gradient(to right, rgb(11,101,255), rgb(6,117,255))',
        'dark-bg-gradient': 'linear-gradient(to right, rgba(60, 93, 133, 0.46), rgba(10, 42, 75, 0))',
      },
      fontFamily: {
        fatfrank: ['Poppins', 'sans-serif'],
        clash: ['Inter', 'serif'],
      },
    },
  },
  plugins: [],
}

