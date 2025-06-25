import { setSettingsScope } from '../../../redux/slices/settingsSlice'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import { UserRole } from '../../../redux/slices/usersSlice'
import Dropdown from '../../input/Dropdown'
import { useDispatch } from 'react-redux'
import Button from '../../input/Button'
import './SettingsHeader.scss'

interface SettingsHeaderProps {
  title: string
  isAdmin?: boolean
  className?: string
}

const SettingsHeader: React.FC<SettingsHeaderProps> = ({ title, isAdmin }) => {
  const dispatch = useDispatch()
  const { screenSize } = useWindowDimensions()

  const settingsScopes = [
    { value: 'user' as UserRole, label: 'User' },
    { value: 'admin' as UserRole, label: 'Admin' },
  ]

  const onDropdownChange = (value: string) => {
    dispatch(setSettingsScope(value))
  }

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
