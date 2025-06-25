import { selectSettingsScope } from '../../../../redux/selectors/settingsSelectors'
import { selectMyUser } from '../../../../redux/selectors/usersSelectors'
import { settingsNavigation } from '../../../navigation/navigationConfig'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './UserManagementSettingsTab.scss'
import { useEffect } from 'react'

const UserManagementSettingsTab: React.FC = () => {
  const settingsScope = useSelector(selectSettingsScope)
  const myUser = useSelector(selectMyUser)
  const navigate = useNavigate()

  useEffect(() => {
    if (settingsScope === 'user') {
      navigate(`${settingsNavigation.user.path}?${myUser.id}`)
    }
  }, [myUser, settingsScope, navigate])

  return <div className='user-management-settings-tab__container'></div>
}

export default UserManagementSettingsTab

//* = Settings tab name
//! = Admin only setting
//  = Setting for both admins and normal users
//? = Not in the first version, but planned for later

//* User management
//! Assign and remove user as administrator - cant remove self
//! Create new user
//! See all users (non-admins can only see their own user)
// Change user name (non-admins can only change their own user name)
// Change password (non-admins can only change their own password)
// Timezone
//!? Delete user accounts
//!? Disable user account
//!? Media age restriction for user
//!? Whitelist genres for user
//!? Manage Accessible hours for user
