import Button from '@/components/shared/Button'
import Dimmed from '@/components/shared/Dimmed'
import Flex from '@/components/shared/Flex'
import Text from '@/components/shared/Text'
import tw from 'twin.macro'

interface AlertProps {
  isOpen?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  buttonLabel?: string
  onButtonClick: () => void
}

const Alert = ({
  isOpen,
  title,
  description,
  buttonLabel = '확인',
  onButtonClick,
}: AlertProps) => {
  if (!isOpen) return null

  return (
    <Dimmed isClose>
      <AlertContainer onClick={(e) => e.stopPropagation()}>
        <Text typography="t4" bold display="block" css={titleStyles}>
          {title}
        </Text>
        {description && <Text typography="t7">{description}</Text>}
        <Flex justify="flex-end">
          <Button outline onClick={onButtonClick} css={buttonStyles}>
            {buttonLabel}
          </Button>
        </Flex>
      </AlertContainer>
    </Dimmed>
  )
}

const AlertContainer = tw.div`
  absolute
  top-1/2
  left-1/2
  -translate-x-1/2
  -translate-y-1/2
  bg-white
  z-alert
  rounded-[8px]
  overflow-hidden
  w-80
  p-24pxr
  shadow-xl
`
const titleStyles = tw`mb-6pxr`
const buttonStyles = tw`mt-12pxr`
export default Alert
