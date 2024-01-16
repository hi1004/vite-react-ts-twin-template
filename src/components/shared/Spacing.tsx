import { styled } from 'twin.macro'

interface SpacingProps {
  size: number
  direction?: 'vertical' | 'horizontal'
}

const Spacing = styled.div<SpacingProps>(({ size, direction = 'vertical' }) =>
  direction === 'vertical' ? `height: ${size}px` : `width: ${size}px`,
)

export default Spacing
