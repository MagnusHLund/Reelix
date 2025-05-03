import Image from './Image'
import './Header.scss'
import Dropdown from '../../input/Dropdown'

const Header: React.FC = () => {
  const dropdownOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ]

  return (
    <div className="header__container">
      <div className="header__left">
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
    </div>
  )
}

export default Header
