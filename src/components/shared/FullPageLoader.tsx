import Flex from '@/components/shared/Flex'
import Spacing from '@/components/shared/Spacing'
import Text from '@/components/shared/Text'
import tw from 'twin.macro'

const FullPageLoader = ({ message }: { message?: string }) => {
  return (
    <Flex justify="center" align="center" css={fullpageLoaderContainerStyles}>
      <Flex direction="column" align="center">
        <img
          width={120}
          src="https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-47-323_512.gif"
          alt="로켓"
        />
        {message && (
          <>
            <Spacing size={120} />
            <Text bold typography="t4">
              {message}
            </Text>
          </>
        )}
      </Flex>
    </Flex>
  )
}

const fullpageLoaderContainerStyles = tw`fixed inset-0 `
export default FullPageLoader
