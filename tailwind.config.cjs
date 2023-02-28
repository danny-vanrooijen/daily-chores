/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      boxShadow: ({ theme }) => ({
        choreButton: `0 5px ${theme("colors.sky.900")}`,
      }),
    },
  },
  plugins: [],
};
