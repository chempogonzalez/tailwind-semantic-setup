import Color from 'color'



const formatHslFromArray = (hslArray) => {
  const [hue, saturation, lightness] = hslArray
  return `${hue} ${saturation}% ${lightness}%`
}




export function convertToHsl (value) {
  const hslArray = Color(value).hsl().round().array()
  return formatHslFromArray(hslArray)
}


export function convertToReadableHsl (input, percentage = 0.8) {
  const colorByInput = Color(input)
  const colorToMixWith = colorByInput.isDark()
    ? Color('white')
    : Color('black')

  const hslArray = colorByInput.mix(colorToMixWith, percentage).saturate(15).hsl().round().array()
  return formatHslFromArray(hslArray)
}


export function convertToDarkerHsl (value, percentage = 0.3) {
  const hslArray = Color(value).darken(percentage).hsl().round().array()
  return formatHslFromArray(hslArray)
}
