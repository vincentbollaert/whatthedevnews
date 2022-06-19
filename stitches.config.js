import { createStitches } from '@stitches/react'
import { tomato, yellow, green, cyan, sand } from '@radix-ui/colors'

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      ...sand,

      default: sand.sand11,

      primary: cyan.cyan8,
      secondary: sand.sand10,

      success1: green.green8,
      success2: green.green9,

      warning1: yellow.yellow8,
      warning2: yellow.yellow9,

      error1: tomato.tomato8,
      error2: tomato.tomato9,
    },
    space: {
      default: '1.2rem',
      xsm: '0.4rem',
      sm: '0.8rem',
      md: '$space$default',
      lg: '1.6rem',
      xlg: '2.4rem',
    },
    fontSizes: {
      default: '1.2rem',
      xxsm: '0.9rem',
      xsm: '1rem',
      sm: '1.1rem',
      md: '$fontSizes$default',
      lg: '1.3rem',
      xlg: '1.6rem',
    },
    fonts: {
      default: 'sans-serif',
    },
  },
  utils: {
    marginX: value => ({ marginLeft: value, marginRight: value }),
  },
})
