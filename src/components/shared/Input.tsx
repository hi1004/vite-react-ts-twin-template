import { colors } from '@/styles/colorPalette'
import tw, { styled } from 'twin.macro'

const Input = styled.input`
  ${tw`w-full px-16pxr h-40pxr text-15pxr border border-grayColor rounded-[6px] focus:outline-none focus:border-blueColor`}
  &[aria-invalid='true'] {
    border-color: ${colors.red};
  }
`

export default Input
