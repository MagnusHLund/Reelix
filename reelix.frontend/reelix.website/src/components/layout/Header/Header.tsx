import './Header.scss'
import { useState } from 'react'
import Image from '../common/Image'
import Button from '../../input/Button'
import SideMenu from '../menus/SideMenu'
import SearchFilter from '../common/SearchFilter'
import { NavLink, useNavigate } from 'react-router-dom'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import { mediaLibraryNavigation } from '../../../utils/navigationUtils'

const Header: React.FC = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false)
  const { screenSize } = useWindowDimensions()
  const navigation = useNavigate()

  const handleBurgerMenuClick = () => {
    setSideMenuOpen((prev) => !prev)
  }

  const handleSearch = (value: string) => {
    console.log(value) // TODO: Implement search functionality
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
            <SearchFilter
              className="header__search"
              onchange={handleSearch}
              height="30"
              width="30"
            />
            {sideMenuOpen && <SideMenu />}
          </>
        )}
        {screenSize !== 'small' && (
          <>
            <div className="header__left">
              <Image
                src="/ReelixIcon.png"
                alt="Reelix Icon"
                className="header__logo"
                width="50"
                height="50"
              />
            </div>
            <div className={`header__links`}>
              {mediaLibraryNavigation.map((type) => (
                <NavLink
                  key={type.value}
                  className="header__link"
                  to={`#${type.value}`}
                >
                  {type.label}
                </NavLink>
              ))}
            </div>
            <div className="header__right">
              <SearchFilter
                className="header__search"
                onchange={handleSearch}
                height="50"
                width="50"
              />
              <Button
                transparent
                className="header__button"
                onClick={() => navigation('/settings')}
              >
                <Image src="/black.png" alt="Settings" width="50" height="50" />
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
