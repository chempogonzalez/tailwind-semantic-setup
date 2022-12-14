import { defaultThemeColors } from './helpers/default-theme-colors.js'



function withOpacityValue (variable, fallbackColor = '') {
  return ({ opacityValue }) => {
    const fallbackColorValue = fallbackColor ? `, var(${fallbackColor})` : ''
    const cssColorVariable = `var(${variable}${fallbackColorValue})`

    if (opacityValue === undefined) return `hsl(${cssColorVariable})`

    return `hsl(${cssColorVariable} / ${opacityValue})`
  }
}


/**
 * Get tailwind theme colors object from themes config array
 *
 * @example
 * primary: 'var(--primary)',  // with opacity function
 * secondary: 'var(--secondary)',
 */
export function getColorsByThemesConfig (themesConfigArray) {
  const colors = {
    transparent: 'transparent',
    current: 'currentColor',
  }

  const uniqueColorNames = Array.from(
    new Set(
      [
        ...Object.keys(defaultThemeColors),
        ...themesConfigArray.map(theme => Object.keys(theme.colors)).flat(2),
      ],
    ),
  )

  uniqueColorNames.forEach((colorName) => {
    colors[colorName] = withOpacityValue(`--${colorName}`)
  })

  return colors
}
