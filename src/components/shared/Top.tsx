import Flex from '@/components/shared/Flex'
import Text from '@/components/shared/Text'
import tw from 'twin.macro'

const Top = ({
  title,
  subTitle,
}: {
  title: React.ReactNode
  subTitle: React.ReactNode
}) => {
  return (
    <Flex direction="column" css={topContainerStyles}>
      <Text typography="t4" bold>
        {title}
      </Text>
      <Text typography="t7">{subTitle}</Text>
    </Flex>
  )
}
const topContainerStyles = tw`p-24pxr`
export default Top
