/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         colors: {
            "nav-bg": "#1f1e1e",
            "bg-primary": "#0A0B0D",
            "font-primary": "#F2F2F2",
            "input-dark": "#3b3b3b",
            "bg-secondary": "#131313",
         },
         fontFamily: {
            sans: ["Rajdhani", "sans-serif"],
            abril: ["Abril Fatface", "serif"],
         },
      },
   },
   plugins: [],
};
