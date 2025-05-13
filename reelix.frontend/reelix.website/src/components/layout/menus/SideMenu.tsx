import './SideMenu.scss'
import { NavLink } from 'react-router-dom'
import NavigationSection from '../sections/NavigationSection'
import { mediaLibraryNavigation } from '../../../utils/navigationUtils'

const SideMenu: React.FC = () => {
  return (
    <div className="side-menu__container">
      <NavigationSection title="Media libraries">
        {mediaLibraryNavigation.map((item) => {
          return (
            <a
              href={`#${item.value}`}
              key={item.label}
              className="side-menu__link"
            >
              {item.label}
            </a>
          )
        })}
      </NavigationSection>
      <NavigationSection title="Settings">
        <NavLink to="/settings" className="side-menu__link">
          Settings
        </NavLink>
      </NavigationSection>
    </div>
  )
}

export default SideMenu
