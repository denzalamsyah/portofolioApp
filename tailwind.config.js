/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        belgie: ["Playwrite BE VLG", "cursive"],
      },
      backgroundImage: {
        gambar: "url('../public/img/bghome.webp')", // Jalur relatif dari folder public
      },
      keyframes: {
        move: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(20px)" },
        },
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "white" },
        },
        colorChange: {
          "0%, 100%": { color: "#ffffff" },
          "66%": { color: "#f1c40f" },
        },
      },
      animation: {
        move: "move 2s ease-in-out infinite",
        typing:
          "typing 3s steps(30, end) forwards, blink .75s step-end infinite",
        colorChange: "colorChange 9s ease-in-out infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
