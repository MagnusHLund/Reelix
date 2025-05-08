import './SideMenu.scss'
import { NavLink } from 'react-router-dom'
import Dropdown from '../../input/Dropdown'
import MenuSection from '../sections/MenuSection'
import NavigationSection from '../sections/NavigationSection'
import { changeServer } from '../../../services/serverService'
import { mediaLibraryNavigation } from '../../../utils/navigationUtils'

const SideMenu: React.FC = () => {
  // Load the servers and store in redux global state
  const serverOptions = [
    { value: 'option1', label: 'Option 1' }, // 20 character limit on server name
    { value: 'option2', label: 'Option 2' },
  ]

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
      <MenuSection title="Settings">
        <Dropdown
          options={serverOptions}
          onChange={changeServer}
          className="side-menu__server-dropdown"
          transparent
        />
      </MenuSection>
    </div>
  )
}

export default SideMenu
