import Flex from '@/components/shared/Flex'
import Spacing from '@/components/shared/Spacing'
import Text from '@/components/shared/Text'
import { css } from '@emotion/react'
import {
  ButtonColors,
  ButtonSize,
  buttonColorMap,
  buttonOutlineColorMap,
  buttonSizeMap,
} from '@styles/button'
import tw, { styled } from 'twin.macro'

interface ButtonProps {
  color?: ButtonColors
  size?: ButtonSize
  full?: boolean
  outline?: boolean
  disabled?: boolean
}

const BaseButton = styled.button<ButtonProps>(
  tw`font-bold cursor-pointer rounded-[6px] hover:opacity-80`,
  ({ color = 'primary', outline }) =>
    outline ? buttonOutlineColorMap[color] : buttonColorMap[color],
  ({ size = 'small' }) => buttonSizeMap[size],
  ({ full }) => full && tw`block w-full rounded-none`,
  ({ disabled }) =>
    disabled && tw`opacity-[0.26] cursor-default hover:opacity-[0.26]`,
)

const ButtonGroup = ({
  title,
  children,
}: {
  title?: string
  children: React.ReactNode
}) => {
  return (
    <Flex direction="column">
      {title && (
        <>
          <Text typeof="t6">{title}</Text>
          <Spacing size={4} />
        </>
      )}
      <Flex css={buttonGroupStyles}>{children}</Flex>
    </Flex>
  )
}

const buttonGroupStyles = css`
  flex-wrap: wrap;
  gap: 10px;
  & button {
    flex: 1;
  }
`
const Button = BaseButton as typeof BaseButton & {
  Group: typeof ButtonGroup
}

Button.Group = ButtonGroup
export default Button
