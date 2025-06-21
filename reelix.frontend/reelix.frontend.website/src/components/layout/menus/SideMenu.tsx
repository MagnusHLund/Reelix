import './SideMenu.scss'
import { NavLink } from 'react-router-dom'
import NavigationSection from '../sections/NavigationSection'
import { mediaLibraryPageNavigation } from '../../navigation/navigationConfig'

const SideMenu: React.FC = () => {
  return (
    <div className='side-menu__container'>
      <NavigationSection title='Media libraries'>
        {Object.values(mediaLibraryPageNavigation).map((item) => {
          return (
            <NavLink to={`${item.path}`} key={item.label} className='side-menu__link'>
              {item.label}
            </NavLink>
          )
        })}
      </NavigationSection>
      <NavigationSection title='Settings'>
        <NavLink to='/settings/user' className='side-menu__link'>
          Settings
        </NavLink>
      </NavigationSection>
    </div>
  )
}

export default SideMenu
