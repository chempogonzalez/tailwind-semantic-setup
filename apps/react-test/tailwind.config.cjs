/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  semanticSetup: {
    themes: [
      {
        name: 'test',
        preferredColorScheme: ['dark', 'light'],
        colors: {
          primary: '#e0a82e',
          secondary: '#f9d72f',
          accent: 'purple',
          base: '#fff',
        },
      },
    ],
  },
  plugins: [],
  presets: [require('tailwind-semantic-setup')],
}
