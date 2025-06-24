import useWindowDimensions from '../../../hooks/useWindowDimensions'
import Dropdown from '../../input/Dropdown'
import Button from '../../input/Button'
import './SettingsHeader.scss'

interface SettingsHeaderProps {
  title: string
  isAdmin?: boolean
  className?: string
  onDropdownChange: (value: string) => void
}

const SettingsHeader: React.FC<SettingsHeaderProps> = ({ title, isAdmin, onDropdownChange }) => {
  const { screenSize } = useWindowDimensions()

  const settingsScopes = [
    { value: 'user', label: 'User' },
    { value: 'admin', label: 'Admin' },
  ]

  return (
    <>
      <header className={`settings-header__container settings-header__container--${screenSize}`}>
        <Button className='settings-header__button' transparent>
          <img src='/black.png' alt='Back' width='50' height='50' />
        </Button>
        <h1 className='settings-header__title'>{title}</h1>
        <div className='settings__scope-selector'>
          {isAdmin && (
            <>
              <span className='settings__scope-label'>View settings as:</span>
              <Dropdown
                className='settings__scope-dropdown'
                options={settingsScopes}
                defaultSelectedValue='user'
                onChange={onDropdownChange}
              />
            </>
          )}
        </div>
      </header>
      <div className='settings-header__spacer' />
    </>
  )
}

export default SettingsHeader
