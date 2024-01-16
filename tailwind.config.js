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
        ...range(1, 100).reduce((acc, px) => {
          acc[`${px}pxr`] = pxToRem(px)
          return acc
        }, {}),
      },
      fontSize: {
        ...range(1, 100).reduce((acc, px) => {
          acc[`${px}pxr`] = pxToRem(px)
          return acc
        }, {}),
      },
      colors: {
        redColor: '#F44336',
        blueColor: '#2196F3',
        greenColor: '#4CAf50',
        blackColor: '#212121',
        grayColor: '#E2E2E2',
      },

      zIndex: {
        dimmed: 10,
        alert: 11,
      },
    },
  },
  plugins: [],
}
