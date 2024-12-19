// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textPrimary: "#333333",      // Define the color for text-textPrimary
        textSecondary: "#666666",    // Define the color for text-textSecondary
        background: "#F0F0F0",       // Define the color for bg-background
        primary: "#FF6347",          // Define the color for bg-primary, text-primary, etc.
      },
      fontFamily: {
        heading: ['Roboto', 'sans-serif'], // Apply the imported font 'Roboto' to headings
      },
      boxShadow: {
        card: '0 2px 10px rgba(0, 0, 0, 0.1)', // Custom shadow for card
      }
    },
  },
  plugins: [],
}


