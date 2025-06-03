import './Header.scss'
import { useState } from 'react'
import Image from '../common/Image'
import Button from '../../input/Button'
import SideMenu from '../menus/SideMenu'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import { mediaLibraryNavigation } from '../../../utils/navigationUtils'

const Header: React.FC = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false)
  const { screenSize } = useWindowDimensions()

  const handleBurgerMenuClick = () => {
    setSideMenuOpen((prev) => !prev)
  }
  // Isn't a header a kind of a menu? maybe move this to the menus folder?

  return (
    <>
      <header className={`header__container header__container--${screenSize}`}>
        {screenSize === 'small' && (
          <>
            <Button
              className="header__button"
              transparent
              onClick={handleBurgerMenuClick}
            >
              <Image
                src="/black.png"
                alt="burger menu"
                width="30"
                height="30"
              />
            </Button>
            <Button transparent className="header__logo">
              <Image src="/black.png" alt="Search" width="30" height="30" />
            </Button>
            {sideMenuOpen && <SideMenu />}
          </>
        )}
        {screenSize !== 'small' && (
          <>
            <div className="header__left">
              <Image
                src="/black.png"
                alt="Reelix Logo"
                className="header__logo"
                width="50"
                height="50"
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
      <div className={`header__spacer header__spacer--${screenSize}`} />
    </>
  )
}

export default Header
