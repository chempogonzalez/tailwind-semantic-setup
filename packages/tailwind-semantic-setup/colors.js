
export const VARIABLES_MAP = {
  'primary': '--p',
  'primary-dark': ['--pd', '--p'],
  'primary-content': '--pc',

  'secondary': '--s',
  'secondary-dark': ['--sd', '--s'],
  'secondary-content': '--sc',

  'accent': '--a',
  'accent-dark': ['--ad', '--a'],
  'accent-content': '--ac',

  'neutral': '--n',
  'neutral-dark': ['--nd', '--n'],
  'neutral-content': '--nc',

  'base': '--b',
  'base-dark': ['--bd', '--b'],
  'base-darkest': ['--bdt', '--bd'],
  'base-content': '--bc',

  'info': '--i',
  'info-content': ['--ic', '--nc'],

  'success': '--su',
  'success-content': ['--suc', '--nc'],

  'warning': '--w',
  'warning-content': ['--wc', '--nc'],

  'error': '--e',
  'error-content': ['--ec', '--nc'],
}

export const getCssVariablesNames = (variable) => {
  return Array.isArray(variable)
    ? variable
    : [variable, undefined]
}





function withOpacityValue (variable, fallbackColor = '') {
  return ({ opacityValue }) => {
    const fallbackColorValue = fallbackColor ? `, var(${fallbackColor})` : ''
    const cssColorVariable = `var(${variable}${fallbackColorValue})`

    if (opacityValue === undefined) return `hsl(${cssColorVariable})`

    return `hsl(${cssColorVariable} / ${opacityValue})`
  }
}



function getParsedColors () {
  const colors = Object.entries(VARIABLES_MAP).reduce((acc, [variableKey, value]) => {
    const [variable, fallbackColor] = getCssVariablesNames(value)

    acc[variableKey] = withOpacityValue(variable, fallbackColor)

    return acc
  }, {})

  return colors
}



export const colors = {
  transparent: 'transparent',
  current: 'currentColor',

  /**
   * Semantic colors pointing to css variables
   *
   * primary: 'var(--p)',
   * primaryFocus: 'var(--pf, var(--p))',
   * ...
   */
  ...getParsedColors(),
}
