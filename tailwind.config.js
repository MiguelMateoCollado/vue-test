/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      width: {
        custom: "80%",
      },
      height: {
        custom: "867px",
      },
      colors: {
        whiteLite: "#F2F2F2",
        blueCustom: "#273F70",
      },
      screens: {
        "phone-sm": "320px",
        phone: "480px",
      },
    },
  },
  plugins: [],
};
