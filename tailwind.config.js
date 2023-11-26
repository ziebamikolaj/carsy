/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         colors: {
            "nav-bg": "#1f1e1e",
         },
         fontFamily: {
            sans: ["Rajdhani", "sans-serif"],
         },
      },
   },
   plugins: [],
};
