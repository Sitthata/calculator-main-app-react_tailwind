/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['League Spartan', 'sans-serif'],
      },
      colors: {
        light: {
          DEFAULT: "hsl(0, 0%, 90%)", // Light gray main background
          "main-bg": {
            100: "hsl(0, 0%, 90%)", // Light gray main background
            200: "hsl(0, 5%, 81%)", // Grayish red
            300: "hsl(0, 0%, 93%)", // Very light gray screen background
          },
          primary: {
            100: "hsl(185, 42%, 37%)", // Dark moderate cyan key background
            200: "hsl(185, 58%, 25%)", // Very dark cyan key shadow
          },
          secondary: {
            100: "hsl(25, 98%, 40%)", // Orange key background/toggle
            200: "hsl(25, 99%, 27%)", // Dark orange key shadow
            300: "hsl(45, 7%, 89%)", // Light grayish yellow key background
            400: "hsl(35, 11%, 61%)", // Dark grayish orange key shadow
          },
          neutral: {
            100: "hsl(0, 0%, 100%)", // White text
            200: "hsl(45, 7%, 89%)", // Light grayish yellow
            300: "hsl(35, 11%, 61%)", // Dark grayish orange
            400: "hsl(60, 10%, 19%)", // Very dark grayish yellow
          },
        },
        dark: {
          DEFAULT: "hsl(0, 0%, 90%)",
          "main-bg": {
            100: "hsl(222, 26%, 31%)",
            200: "hsl(223, 31%, 20%)",
            300: "hsl(224, 36%, 15%)",
          },
          primary: {
            100: "hsl(225, 21%, 49%)",
            200: "hsl(224, 28%, 35%)",
          },
          secondary: {
            100: "hsl(6, 63%, 50%)",
            200: "hsl(6, 70%, 34%)",
            300: "hsl(30, 25%, 89%)",
            400: "hsl(28, 16%, 65%)",
          },
          neutral: {
            100: "hsl(0, 0%, 100%)",
            200: "hsl(30, 25%, 89%)",
            300: "hsl(28, 16%, 65%)",
            400: "hsl(221, 14%, 31%)",
          },
        },
      },
    },
  },
  plugins: [],
};
