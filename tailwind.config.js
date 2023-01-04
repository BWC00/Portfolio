/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
	  keyframes: {
	    bounce: {
		  '0%, 100%':{
		    transform: 'translateY(-25%)',
			transitionTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
		  },
		  '50%':{
			  transform: 'translateY(0)',
			  transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
		  },
	  	},
	  },
	  animation:{
		  bounce:'bounce 3s linear infinite'
	  },
	  backgroundImage: {
		  'paper': "url('./public/paper.jpeg')",
	  },
      fontFamily: {
        burtons: "burtons",
      },
    },
  },
  plugins: [],
}
