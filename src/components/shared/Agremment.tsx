import Flex from '@/components/shared/Flex'
import Text from '@/components/shared/Text'
import { colors } from '@/styles/colorPalette'
import { MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'

const Agremment = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex as="ul" direction="column" css={tw`m-24pxr`}>
      {children}
    </Flex>
  )
}

const AgremmentTitle = ({
  children,
  checked,
  onChange,
}: {
  children: React.ReactNode
  checked: boolean
  onChange: (e: MouseEvent<HTMLElement>, checked: boolean) => void
}) => {
  return (
    <Flex
      as="li"
      align="center"
      onClick={(e) => onChange(e, !checked)}
      css={tw`gap-2 cursor-pointer`}
    >
      <IconCheck checked={checked} widthCircle />
      <Text typography="t4">{children}</Text>
    </Flex>
  )
}

const AgremmentDescription = ({
  children,
  checked,
  onChange,
  link,
}: {
  children: React.ReactNode
  checked: boolean
  onChange: (e: MouseEvent<HTMLElement>, checked: boolean) => void
  link?: string
}) => {
  return (
    <Flex
      as="li"
      align="center"
      onClick={(e) => onChange(e, !checked)}
      css={tw`cursor-pointer`}
    >
      <Flex css={tw`flex-1 gap-1`}>
        <IconCheck checked={checked} />
        <Text typography="t6">{children}</Text>
      </Flex>
      {link && (
        <Link to={link} target="_blank">
          Link
        </Link>
      )}
    </Flex>
  )
}
Agremment.Title = AgremmentTitle
Agremment.Description = AgremmentDescription
export default Agremment

function IconCheck({
  checked,
  widthCircle = false,
}: {
  checked: boolean
  widthCircle?: boolean
}) {
  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z"
        fill={checked ? colors.blue : colors.gray}
      />

      {widthCircle && (
        <path
          clipRule="evenodd"
          d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
          fill={checked ? colors.blue : colors.gray}
          fillRule="evenodd"
        />
      )}
    </svg>
  )
}
