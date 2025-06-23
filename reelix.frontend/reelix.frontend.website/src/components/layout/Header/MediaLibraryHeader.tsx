import { useState } from 'react'
import './MediaLibraryHeader.scss'
import Image from '../common/Image'
import Button from '../../input/Button'
import SideMenu from '../menus/SideMenu'
import SearchFilter from '../common/SearchFilter'
import { NavLink, useNavigate } from 'react-router-dom'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import { mediaLibraryPageNavigation } from '../../navigation/navigationConfig'

const MediaLibraryHeader: React.FC = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false)
  const { screenSize } = useWindowDimensions()
  const navigation = useNavigate()

  const handleBurgerMenuClick = () => {
    setSideMenuOpen((prev) => !prev)
  }

  const handleSearch = (value: string) => {
    if (value.length <= 0) {
      navigation('/home') // TODO: Change to previous page instead of just going back to home.
    } else {
      navigation('?search=' + encodeURIComponent(value))
    }
  }

  return (
    <>
      <header
        className={`media-library-header__container media-library-header__container--${screenSize}`}
      >
        {screenSize === 'small' && (
          <>
            <Button
              className='media-library-header__button'
              transparent
              onClick={handleBurgerMenuClick}
            >
              <Image src='/black.png' alt='burger menu' width='30' height='30' />
            </Button>
            <SearchFilter
              className='media-library-header__search'
              onchange={handleSearch}
              height='30'
              width='30'
            />
            {sideMenuOpen && <SideMenu />}
          </>
        )}
        {screenSize !== 'small' && (
          <>
            <div className='media-library-header__left'>
              <Image
                src='/ReelixIcon.png'
                alt='Reelix Icon'
                className='media-library-header__logo'
                width='50'
                height='50'
              />
            </div>
            <div className={`media-library-header__links`}>
              {Object.values(mediaLibraryPageNavigation).map((type) => (
                <NavLink key={type.path} className='media-library-header__link' to={`${type.path}`}>
                  {type.label}
                </NavLink>
              ))}
            </div>
            <div className='media-library-header__right'>
              <SearchFilter
                className='media-library-header__search'
                onchange={handleSearch}
                height='50'
                width='50'
              />
              <Button
                transparent
                className='media-library-header__button'
                onClick={() => navigation('/settings/user')}
              >
                <Image src='/black.png' alt='Settings' width='50' height='50' />
              </Button>
            </div>
          </>
        )}
      </header>
      <div className={`media-library-header__spacer media-library-header__spacer--${screenSize}`} />
    </>
  )
}

export default MediaLibraryHeader
