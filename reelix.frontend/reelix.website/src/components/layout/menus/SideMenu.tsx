import { NavLink } from 'react-router-dom'
import './SideMenu.scss'
import Dropdown from '../../input/Dropdown'
import { mediaLibraryNavigation } from '../../../utils/navigationUtils'
import { changeServer } from '../../../services/serverService'

const SideMenu: React.FC = () => {
  // Load the servers and store in redux global state
  const serverOptions = [
    { value: 'option1', label: 'Option 1' }, // 20 character limit on server name
    { value: 'option2', label: 'Option 2' },
  ]

  return (
    <div className="side-menu__container">
      <div>
        <h1>Media libraries</h1>
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
      </div>
      <div>
        <h1>Settings</h1>
        <NavLink to="/settings" className="side-menu__link">
          Settings
        </NavLink>
      </div>
      <div>
        <h1>Server</h1>
        <Dropdown
          options={serverOptions}
          onChange={changeServer}
          className="side-menu__server-dropdown"
          transparent
        />
      </div>
    </div>
  )
}

export default SideMenu
