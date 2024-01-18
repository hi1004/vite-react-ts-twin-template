import useUser from '@/hooks/auth/useUser'
import Button from '@components/shared/Button'
import Flex from '@components/shared/Flex'
import { useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import tw from 'twin.macro'

const NavBar = () => {
  const { pathname } = useLocation()
  const showSignButton = !['/signin', '/signup'].includes(pathname)
  // TODO:
  const user = useUser()

  const renderButton = useCallback(() => {
    if (user) {
      return (
        <Link to="/my">
          {/* TODO: */}
          <img
            src={
              user.photoURL ??
              'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-1024.png'
            }
            alt={user.displayName}
            width={40}
            height={40}
            css={tw`rounded-full`}
          />
          {/* <MyImage size={40} /> */}
        </Link>
      )
    }

    if (showSignButton) {
      return (
        <Link to="/signin">
          <Button>로그인/회원가입</Button>
        </Link>
      )
    }

    return null
  }, [user, showSignButton])

  return (
    <Flex justify="space-between" align="center" css={navbarContainerStyles}>
      <Link to="/">Love Trip</Link>
      {renderButton()}
    </Flex>
  )
}
const navbarContainerStyles = tw`sticky top-0 left-0 bg-white border-b h-80pxr py-10pxr px-24pxr border-b-grayColor`
export default NavBar
