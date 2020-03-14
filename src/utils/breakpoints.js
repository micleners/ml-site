
import { css, jsx } from '@emotion/core'


const size = {
  400: 400,
  500: 500,
  600: 600,
  700: 700,
  800: 800,
  900: 900,
  1000: 1000,
  1100: 1100,
  1200: 1200,
  1300: 1300,
  1400: 1400,
}

export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})