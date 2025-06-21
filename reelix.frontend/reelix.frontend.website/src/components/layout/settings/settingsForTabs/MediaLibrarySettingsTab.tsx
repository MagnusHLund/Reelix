import { SettingsForTabProps } from '../SettingsTab'
import './MediaLibrarySettingsTab.scss'

const MediaLibrarySettingsTab: React.FC<SettingsForTabProps> = () => {
  return <div className='media-library-settings-tab__container'></div>
}

export default MediaLibrarySettingsTab

//* = Settings tab name
//! = Admin only setting
//  = Setting for both admins and normal users
//? = Not in the first version, but planned for later

//* Media library settings
//! Scan media library
//! Add additional media libraries
//! Manage access to different media libraries
// Minimum playtime percentage before media is considered "started watching"
// Maximum playtime percentage before media is considered "done watching"
// Minimum media length allowed to consider media as "started watching"
// Enable/disable theme songs for media
// Max days in next up
// Max items in next up
// Sort order of ContentSections on the home page.
