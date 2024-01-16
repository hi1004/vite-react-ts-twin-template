import Button from '@/components/shared/Button'
import { motion } from 'framer-motion'
import { createPortal } from 'react-dom'
import tw from 'twin.macro'

interface FixedButtomButtonProps {
  label: string
  onClick: () => void
  disabled?: boolean
}

const FixedButtomButton = ({
  label,
  onClick,
  disabled,
}: FixedButtomButtonProps) => {
  const $rootPortal = document.getElementById('root-portal') as HTMLElement
  return createPortal(
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 90 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: 'easeInOut',
        }}
      >
        <Button
          size="medium"
          disabled={disabled}
          full
          onClick={onClick}
          css={buttonStyles}
        >
          {label}
        </Button>
      </motion.div>
    </Container>,
    $rootPortal,
  )
}

const Container = tw.div`
  fixed
  inset-x-0
  bottom-0
  px-10pxr
  pt-20pxr
  pb-8pxr
  bg-white
`
const buttonStyles = tw`rounded-[8px]`
export default FixedButtomButton
