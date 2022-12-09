import plugin from 'tailwindcss/plugin'

import { colors, getCssVariablesNames, VARIABLES_MAP } from './colors.js'
import { convertToHsl, convertToDarkerHsl, convertToReadableHsl } from './helpers/colors.js'
import { defaultThemeColors } from './helpers/default-theme-colors.js'



function getThemeCssVariables (userColorsObject) {
  const cssVariables = {}
  Object.entries(VARIABLES_MAP).forEach(([colorName, colorVariable]) => {
    const [cssVariableName] = getCssVariablesNames(colorVariable)

    const userColor = userColorsObject[colorName]
    // If user has provided a color for this variable, use it
    if (userColor) {
      const hslColor = convertToHsl(userColor)
      cssVariables[cssVariableName] = hslColor
      return
    }

    if (['base-dark', 'base-darkest'].includes(colorName)) {
      const baseColorToDarken = colorName === 'base-darkest' ? 'base-dark' : 'base'
      const userBaseColor = userColorsObject[baseColorToDarken]

      const color = userBaseColor ?? defaultThemeColors[baseColorToDarken]
      cssVariables[cssVariableName] = convertToDarkerHsl(color, 0.08)
      return
    }

    if (colorName.includes('-dark') || colorName.includes('-content')) {
      const baseColorName = colorName.replace('-dark', '').replace('-content', '')
      const userBaseColor = userColorsObject[baseColorName]

      const color = userBaseColor ?? defaultThemeColors[baseColorName]
      cssVariables[cssVariableName] = colorName.includes('-dark')
        ? convertToDarkerHsl(color)
        : convertToReadableHsl(color)
      return
    }



    // If user has not provided a color for this variable, use the default one
    const colorValue = defaultThemeColors[colorName]
    const hslColor = convertToHsl(colorValue)
    cssVariables[cssVariableName] = hslColor
  })

  return cssVariables
}

function getBaseThemesCssVariables (themes) {
  // Get and set css variables for each theme
  return themes.reduce((acc, { name, colors, preferredColorScheme }) => {
    const cssVariables = getThemeCssVariables(colors)
    acc[`[data-theme="${name}"]`] = {
      'color-scheme': preferredColorScheme?.join(' '),
      ...cssVariables,
    }

    return acc
  }, {})
}


/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    colors,
  },
  plugins: [
    /* [start] ------------------ CUSTOM PLUGIN ---------------------------------- */
    plugin(function ({ addBase, matchUtilities, addVariant, theme, config }) {
      const themes = config('semanticSetup.themes')
      const rootThemesWithCssVariables = getBaseThemesCssVariables(themes)



      addBase(rootThemesWithCssVariables)

      // Setup base background and text color
      const [baseColorVariable] = getCssVariablesNames(VARIABLES_MAP.base)
      const [baseContentColorVariable] = getCssVariablesNames(VARIABLES_MAP['base-content'])
      addBase({
        ':root [data-theme]': {
          backgroundColor: `hsl(var(${baseColorVariable}) / var(--tw-bg-opacity, 1))`,
          color: `hsl(var(${baseContentColorVariable}) / var(--tw-text-opacity, 1))`,
        },
      })


      /** Add 'wh' utility for width-height quick setup (square) */
      matchUtilities(
        {
          wh: value => ({
            width: value,
            height: value,
          }),
        },
        { values: theme('spacing') },
      )

      /** Add 'circle' utility to quick setup avatars and other circles */
      matchUtilities(
        {
          circle: value => ({
            width: value,
            height: value,
            borderRadius: '100%',
          }),
        },
        { values: theme('spacing') },
      )

      /** Variants which can be useful */
      themes.forEach(({ name }) => {
        addVariant(`theme-${name}`, `[data-theme="${name}"] &`)
      })
      addVariant('hocus', ['&:hover', '&:focus'])
      addVariant('optional', '&:optional')
      addVariant('group-optional', ':merge(.group):optional &')
      addVariant('peer-optional', ':merge(.peer):optional ~ &')
    }),
    /* [end] -------------------- CUSTOM PLUGIN ---------------------------------- */



    /** Official tailwind plugins */
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],

}


export default config
