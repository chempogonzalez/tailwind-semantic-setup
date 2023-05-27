// @ts-check
const { withSemanticSetup } = require('tailwind-semantic-setup')



module.exports = withSemanticSetup({
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  semanticSetup: {
    plugins: {
      'typography': true,
      'forms': true,
      'line-clamp': false,
      'aspect-ratio': true,
    },
    themes: [
      {
        name: 'test',
        preferredColorScheme: ['dark', 'light'],
        colors: {
          primary: '#e0a82e',
          secondary: '#f9d72f',
          accent: 'purple',
          root: '#fff',
        },
      },
      {
        name: 'test2',
        preferredColorScheme: ['dark', 'light'],
        colors: {
          test: 'red',
        },
      },
    ],
  },
})
