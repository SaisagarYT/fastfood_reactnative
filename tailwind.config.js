/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        //main templates
        red:{
          100:'#D33B0D'
        },
        green:{
          100:'#084137'
        },
        orange:{
          100:'#EB920C'
        },
        darkOrange:{
          100:'#DF5A0C'
        },
        buttons:{
          100:'#FE8C00'
        },
        brown:{
          100:'#3C2F2F'
        },
        lighttext:{
          100:'#878787'
        }
      }
    },
  },
  plugins: [],
}