import plugin from 'tailwindcss/plugin'

import { getColorsByThemesConfig } from './colors.js'
import { convertToHsl, convertToDarkerHsl, convertToReadableHsl } from './helpers/colors.js'
import { defaultThemeColors } from './helpers/default-theme-colors.js'



function getThemeCssVariables (userColorsObject) {
  const colorsToProcess = {
    ...defaultThemeColors,
    ...userColorsObject,
  }
  const cssVariables = {}

  Object.entries(colorsToProcess).forEach(([colorName, colorValue]) => {
    const cssVariableName = `--${colorName}`

    const userColor = userColorsObject[colorName]
    // If user has provided a color for this variable, just use it
    if (userColor) {
      const hslColor = convertToHsl(userColor)
      cssVariables[cssVariableName] = hslColor
      return
    }

    // base-dark and base-darkest colors (autogenerate them) ------------------
    if (['base-dark', 'base-darkest'].includes(colorName)) {
      const baseColorToDarken = 'base'
      const userBaseColor = userColorsObject[baseColorToDarken]

      const color = userBaseColor ?? defaultThemeColors[baseColorToDarken]
      cssVariables[cssVariableName] = convertToDarkerHsl(color, colorName === 'base-darkest' ? 0.16 : 0.08)
      return
    }
    // ------------------------------------------------------------------------



    // -dark and -content colors (autogenerate them) --------------------------
    const isManagedColor = Boolean(defaultThemeColors[colorName])
    const isDarkColor = colorName.includes('-dark')
    const isContentColor = colorName.includes('-content')

    if (isManagedColor && (isDarkColor || isContentColor)) {
      const baseColorName = colorName.replace('-dark', '').replace('-content', '')
      const userBaseColor = userColorsObject[baseColorName]

      const color = userBaseColor ?? defaultThemeColors[baseColorName]
      cssVariables[cssVariableName] = isDarkColor
        ? convertToDarkerHsl(color)
        : convertToReadableHsl(color)
      return
    }
    // ------------------------------------------------------------------------


    const hslColor = convertToHsl(colorValue)
    cssVariables[cssVariableName] = hslColor
  })

  return cssVariables
}

const assertArray = (value) => {
  if (!Array.isArray(value))
    throw new Error(`Expected array, got ${value}`)
}

const assertColors = (colors) => {
  const allColorsAreString = Object.values(colors).every(c => typeof c === 'string')
  if (!allColorsAreString)
    throw new Error(`color values must be strings, got ${colors}`)
}

function getBaseThemesCssVariables (themes) {
  // Get and set css variables for each theme
  return themes.reduce((acc, { name, colors, preferredColorScheme }) => {
    assertArray(preferredColorScheme)
    assertColors(colors)

    const cssVariables = getThemeCssVariables(colors)
    acc[`[data-theme="${name}"]`] = {
      'color-scheme': preferredColorScheme?.join(' '),
      ...cssVariables,
    }

    return acc
  }, {})
}


/** @type {import('tailwindcss').Config} */
const pluginConfig = {
  plugins: [
    /* [start] ------------------ CUSTOM PLUGIN ---------------------------------- */
    plugin(function ({ addBase, matchUtilities, addVariant, theme, config }) {
      const themes = config('semanticSetup.themes')
      const rootThemesWithCssVariables = getBaseThemesCssVariables(themes)



      addBase(rootThemesWithCssVariables)

      // Setup base background and text color
      addBase({
        ':root [data-theme]': {
          backgroundColor: 'hsl(var(--base) / var(--tw-bg-opacity, 1))',
          color: 'hsl(var(--base-content) / var(--tw-text-opacity, 1))',
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



/**
 * Quick setup for tailwindcss with semantic-ui colors
 *
 * @param {import('tailwindcss').Config & import('./types').SemanticSetup } userConfig
 * @returns {import('tailwindcss').Config}
 */
export function withSemanticSetup (userConfig = {}) {
  const {
    plugins: userPlugins = [],
    theme: userTheme = {},
    semanticSetup = {},
  } = userConfig

  return {
    ...userConfig,
    plugins: [
      ...userPlugins,
      ...pluginConfig.plugins,
    ],
    theme: {
      ...userTheme,
      colors: getColorsByThemesConfig(semanticSetup.themes),
      /**
       * override user extended colors in case they are set up
       * to force using semantic-ui colors
       */
      extend: userTheme?.extend
        ? {
            ...userTheme.extend,
            colors: undefined,
          }
        : undefined,
    },
  }
}
