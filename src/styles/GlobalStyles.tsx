import { Global } from '@emotion/react'
import { colorPalette } from '@styles/colorPalette'
import { GlobalStyles as BaseStyles, css } from 'twin.macro'

const customStyles = css`
  ${colorPalette}
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
