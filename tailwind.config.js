/** @type {import('tailwindcss').Config} */
const pxToRem = (px, base = 16) => `${px / base}rem`
const range = (start, end) => {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index)
}
export default {
  content: [],
  theme: {
    extend: {
      spacing: {
        ...range(1, 1000).reduce((acc, px) => {
          acc[`${px}pxr`] = pxToRem(px)
          return acc
        }, {}),
      },
      fontSize: {
        ...range(1, 1000).reduce((acc, px) => {
          acc[`${px}pxr`] = pxToRem(px)
          return acc
        }, {}),
      },
      colors: {
        'regal-blue': '#243c5a',
      },
    },
  },
  plugins: [],
}
