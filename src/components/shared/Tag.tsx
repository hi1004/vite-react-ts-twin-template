import { Colors, colors } from '@/styles/colorPalette'
import tw, { styled } from 'twin.macro'

interface TagProps {
  color?: string
  backgroundColor?: string
}

const Tag = styled.span<TagProps>(
  tw`
  text-11pxr
  p-4pxr
  font-bold
  rounded-[2px]
  text-center
  `,
  ({ color = colors.white, backgroundColor = colors.blue }) => ({
    color: color in colors ? colors[color as Colors] : color,
    backgroundColor:
      backgroundColor in colors
        ? colors[backgroundColor as Colors]
        : backgroundColor,
  }),
)

export default Tag
