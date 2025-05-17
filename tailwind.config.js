/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors:{
        background: "#f3f4f6",
        foreground:'#ffffff',
        textPrimary:'#4b5563',
        accent:'#5750f1',
        accentHighlight:"rgba(87, 80, 241, 0.12)",
        dark:{
          background: "#020d1a",
          foreground:'#122031',
          textPrimary:'#9ca3af',
          accent:'#5750f1',
          accentHighlight:"ffffff1a",
        }
      }

    },
  },
  plugins: [],
}