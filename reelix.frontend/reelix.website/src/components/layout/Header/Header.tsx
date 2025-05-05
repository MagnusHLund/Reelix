import Image from '../common/Image'
import './Header.scss'
import Dropdown from '../../input/Dropdown'
import MediaTypes from './MediaTypes'
import { useEffect } from 'react'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import Button from '../../input/Button'
const Header: React.FC = () => {
  const { sizeCategory } = useWindowDimensions()

  const dropdownOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ]

  useEffect(() => {}, [sizeCategory])

  return (
    <div className={`header__container header__container--${sizeCategory}`}>
      {sizeCategory === 'small' && (
        <>
          <Button className="header__burger-menu">
            <Image src="/black.png" alt="burger menu" width="30" height="30" />
          </Button>
          <MediaTypes className="header__media-types" />
        </>
      )}
      {sizeCategory !== 'small' && (
        <>
          <div>
            <Image
              src="/black.png"
              alt="Reelix Logo"
              className="header__logo"
              width="50"
              height="50"
            />
            <Dropdown
              options={dropdownOptions}
              onChange={(value) => console.log(value)}
              className="header__server-dropdown"
              transparent
            />
          </div>
          <MediaTypes className="header__media-types" />
          <div className="header__right">
            <Image src="/black.png" alt="Search" width="50" height="50" />
            <Image src="/black.png" alt="User" width="50" height="50" />
          </div>
        </>
      )}
    </div>
  )
}

export default Header
