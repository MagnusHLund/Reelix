import { SettingsForTabProps } from '../SettingsTab'
import './SystemSettingsTab.scss'

const SystemSettingsTab: React.FC<SettingsForTabProps> = ({ isAdminSettingsScope }) => {
  return <div className='system-settings-tab__container'></div>
}

export default SystemSettingsTab

//* = Settings tab name
//! = Admin only setting
//  = Setting for both admins and normal users
//? = Not in the first version, but planned for later

//* System settings
//! Modify server name
//! Restart server
//! Shutdown server
//! View directory paths (media library, logs, config)
//! See active devices & the user that is using them
//! See history of when users were last active
//! Show basic server information (uptime, version, maybe more)
//! See shortened critical server logs
//! Server http port
//! View scheduled tasks (media scan, clean logs, maybe more)
//!? create & Manage scheduled tasks (media scan, clean logs, maybe more)
//!? Allow changing mysql & Neo4j database to external server.
//!? Server https port (& upload functionality for certificates stuff. Certificates will be in the config folder.)
