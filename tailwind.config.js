/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "greenfield-dm-sans-exbold-h1-48pt":
          "var(--greenfield-dm-sans-exbold-h1-48pt-font-family)",
        "greenfield-dm-sans-reg-b2-14pt":
          "var(--greenfield-dm-sans-reg-b2-14pt-font-family)",
        "greenfield-dm-sans-semibold-h3-36pt":
          "var(--greenfield-dm-sans-semibold-h3-36pt-font-family)",
      },
    },
  },
  plugins: [],
};
