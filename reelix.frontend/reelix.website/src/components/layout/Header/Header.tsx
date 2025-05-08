import './Header.scss'
import { useState } from 'react'
import Image from '../common/Image'
import Button from '../../input/Button'
import SideMenu from '../menus/SideMenu'
import Dropdown from '../../input/Dropdown'
import { changeServer } from '../../../services/serverService'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import { mediaLibraryNavigation } from '../../../utils/navigationUtils'

const Header: React.FC = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false)
  const { sizeCategory } = useWindowDimensions()

  // Load the servers and store in redux global state
  const serverOptions = [
    { value: 'option1', label: 'Option 1' }, // 20 character limit on server name
    { value: 'option2', label: 'Option 2' },
  ]

  const handleBurgerMenuClick = () => {
    setSideMenuOpen((prev) => !prev)
  }

  return (
    <header className={`header__container header__container--${sizeCategory}`}>
      {sizeCategory === 'small' && (
        <>
          <Button
            className="header__button"
            transparent
            onClick={handleBurgerMenuClick}
          >
            <Image src="/black.png" alt="burger menu" width="30" height="30" />
          </Button>
          <Button transparent className="header__logo">
            <Image src="/black.png" alt="Search" width="30" height="30" />
          </Button>
          {sideMenuOpen && <SideMenu />}
        </>
      )}
      {sizeCategory !== 'small' && (
        <>
          <div className="header__left">
            <Image
              src="/black.png"
              alt="Reelix Logo"
              className="header__logo"
              width="50"
              height="50"
            />
            <Dropdown
              options={serverOptions}
              onChange={changeServer}
              className="header__server-dropdown"
              transparent
            />
          </div>
          <div className={`header__links`}>
            {mediaLibraryNavigation.map((type) => (
              <a
                key={type.value}
                className="header__link"
                href={`#${type.value}`}
              >
                {type.label}
              </a>
            ))}
          </div>
          <div className="header__right">
            <Button transparent className="header__button">
              <Image src="/black.png" alt="Search" width="50" height="50" />
            </Button>
            <Button transparent className="header__button">
              <Image src="/black.png" alt="User" width="50" height="50" />
            </Button>
          </div>
        </>
      )}
    </header>
  )
}

export default Header
