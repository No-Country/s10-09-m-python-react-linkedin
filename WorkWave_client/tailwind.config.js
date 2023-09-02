/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import scrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-blue": "#000000",
        "celeste-claro": "#61A9FD",
      },
      fontFamily: {
        inter: ["inter", "sans-serif"],
      },
      width: {
        451: "451px",
      },
    },
    screens: {
      xs: "480px",
      ss: "600px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [daisyui, scrollbar({ nocompatible: true })],
};
