import Text from '@/components/shared/Text'
import tw from 'twin.macro'

interface BadgeProps {
  label: string
}

const Badge = ({ label }: BadgeProps) => {
  return (
    <Container>
      <Text typography="t7" color="white" bold>
        {label}
      </Text>
    </Container>
  )
}

const Container = tw.div`rounded-[12px] px-6pxr py-4pxr bg-blueColor`
export default Badge
