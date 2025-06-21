import { SettingsForTabProps } from '../SettingsTab'
import './PersonalizationSettingsTab.scss'

const PersonalizationSettingsTab: React.FC<SettingsForTabProps> = ({ isAdminSettingsScope }) => {
  return <div className='personalization-settings-tab__container'></div>
}

export default PersonalizationSettingsTab

//* = Settings tab name
//! = Admin only setting
//  = Setting for both admins and normal users
//? = Not in the first version, but planned for later

//* Personalization settings
// UI language (in supported languages)
//? Modify CSS variables, to change UI coloring & allowing background to be a slideshow of media images, custom single image or just a static color
//? Change font family
//? Choose screensaver (or disable)
//? Maximum amount of media in a custom section row
