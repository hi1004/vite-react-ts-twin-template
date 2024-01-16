import { CSSProperties } from 'react'
import tw, { styled } from 'twin.macro'

interface FlexProps {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  direction?: CSSProperties['flexDirection']
}
const Flex = styled.div<FlexProps>(
  tw`flex`,
  ({ align, justify, direction }) => ({
    alignItems: align,
    justifyContent: justify,
    flexDirection: direction,
  }),
)

export default Flex
