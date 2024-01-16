import { Colors, colors } from '@styles/colorPalette'
import { Typography, typographyMap } from '@styles/typograph'
import { CSSProperties } from 'react'
import { styled } from 'twin.macro'

interface TextProps {
  typography?: Typography
  color?: Colors
  display?: CSSProperties['display']
  textAlign?: CSSProperties['textAlign']
  fontWeight?: CSSProperties['fontWeight']
  bold?: boolean
}

const Text = styled.span<TextProps>(
  ({ typography = 't5' }) => typographyMap[typography],
  ({ color = 'black', display, textAlign, fontWeight, bold }) => ({
    color: colors[color],
    display,
    textAlign,
    fontWeight: bold ? 'bold' : fontWeight,
  }),
)

export default Text
