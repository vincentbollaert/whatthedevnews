import { globalCss } from '~/../stitches.config'

export const globalStyles = globalCss({
  html: {
    backgroundColor: '$sand4',
    color: '$default',
    fontFamily: '$default',
    fontSize: '62.5%',
    boxSizing: 'border-box',
  },
  '*, *::after, *::before': {
    boxSizing: 'inherit',
  },
  body: {
    margin: 0,
    height: '100%',
    fontSize: '$default',
    '-webkit-font-smoothing': 'antialiased',
  },
  a: {
    color: '$primary',
    'text-decoration': 'none',
    cursor: 'pointer',
  },
  ul: {
    margin: 0,
    padding: 0,
    'list-style-type': 'none',
  },
  'input, button': {
    border: 'none',
    outline: 'none',
  },
  input: {
    all: 'unset', // try assigning this to all properties same as box-sizing
    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
    },
  },
  'input[type="number"]': {
    '-moz-appearance': 'textfield',
  },
  button: {
    padding: 0,
    lineHeight: '1',
    fontFamily: 'inherit',
    color: 'inherit',
    textTransform: 'inherit',
    fontWeight: 'inherit',
    textAlign: 'inherit',
    background: 'transparent',
  },
  'h1, h2, h3, h4, h5': {
    margin: 0,
    fontFamily: '$default',
  },
  p: {
    margin: 0,
  },
  table: {
    borderCollapse: 'collapse',
    tableLayout: 'fixed',
    textAlign: 'center',
    width: '100%',
  },
  th: {
    textAalign: 'left',
  },
})
