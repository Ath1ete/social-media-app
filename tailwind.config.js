/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/*.{tsx}",
    "./src/features/**/*.{tsx}",
    "./src/layouts/*.{tsx}",
    "./src/pages/**/*.{tsx}",
    "./src/*.{tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      playwrite: ["Playwrite CA Guides", "serif"],
    },
  },
  plugins: [],
};

// The path pattern used in the content array. Here's a simpler breakdown:

// ./src/: This refers to the src folder in your project directory.
// " **/ ": This means "look in all subfolders inside the src folder, no matter how many levels deep."
// " *.{html, js, tsx, jsx} ": This means "include all files that end with .html, .js, .tsx, .jsx"
// In essence, Tailwind uses this to find all the classes you're using in these files and generate only the necessary CSS for your project.
