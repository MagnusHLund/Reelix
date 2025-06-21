import { SettingsForTabProps } from '../SettingsTab'
import './UserManagementSettingsTab.scss'

const UserManagementSettingsTab: React.FC<SettingsForTabProps> = ({ isAdminSettingsScope }) => {
  return <div className='user-management-settings-tab__container'></div>
}

export default UserManagementSettingsTab

//* = Settings tab name
//! = Admin only setting
//  = Setting for both admins and normal users
//? = Not in the first version, but planned for later

//* User management
//! Assign user to administrator
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
