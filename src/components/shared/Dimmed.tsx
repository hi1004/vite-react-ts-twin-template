import { useAlertContext } from '@contexts/AlertContext'
import tw, { styled } from 'twin.macro'

const Dimmed = ({
  children,
  isClose = false,
}: {
  children: React.ReactNode
  isClose?: boolean
}) => {
  const { close } = useAlertContext()
  return (
    <DimmedContainer
      onClick={() => {
        if (isClose) close()
      }}
    >
      {children}
    </DimmedContainer>
  )
}

const DimmedContainer = styled.div`
  ${tw`fixed inset-0 bg-black bg-opacity-75 z-dimmed`}
`
export default Dimmed
