import PlaybackAndStreamingSettingsTab from '../layout/settings/settingsForTabs/PlaybackAndStreamingSettingsTab'
import PersonalizationSettingsTab from '../layout/settings/settingsForTabs/PersonalizationSettingsTab'
import UserManagementSettingsTab from '../layout/settings/settingsForTabs/UserManagementSettingsTab'
import MediaLibrarySettingsTab from '../layout/settings/settingsForTabs/MediaLibrarySettingsTab'
import SystemSettingsTab from '../layout/settings/settingsForTabs/SystemSettingsTab'
import SettingsTab from '../layout/settings/SettingsTab'
import TabMenu from '../layout/menus/TabMenu'
import Dropdown from '../input/Dropdown'
import { useState } from 'react'
import './SettingsPage.scss'

const SettingsPage: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(true) // TODO: Determined by authorization, when API is implemented
  const [selectedScope, setSelectedScope] = useState<string>('user')

  const settingsScopes = [
    { value: 'user', label: 'User' },
    { value: 'admin', label: 'Admin' },
  ]

  const settingsTabs = [
    {
      title: 'System',
      navigateTo: '/settings/system',
      Component: SystemSettingsTab,
    },
    {
      title: 'User Management',
      navigateTo: '/settings/user',
      Component: UserManagementSettingsTab,
    },
    {
      title: 'Media Library',
      navigateTo: '/settings/media-library',
      Component: MediaLibrarySettingsTab,
    },
    {
      title: 'Playback & Streaming',
      navigateTo: '/settings/playback-streaming',
      Component: PlaybackAndStreamingSettingsTab,
    },
    {
      title: 'Personalization',
      navigateTo: '/settings/personalization',
      Component: PersonalizationSettingsTab,
    },
  ]

  return (
    <div className="settings__page">
      <div className="settings__header">
        <h1 className="settings__header-title">Settings</h1>
        {isAdmin && (
          <div className="settings__scope-selector">
            <span className="settings__scope-label">View settings as:</span>
            <Dropdown
              className="settings__scope-dropdown"
              options={settingsScopes}
              defaultSelectedValue="user"
              onChange={(value) => setSelectedScope(value)}
            />
          </div>
        )}
      </div>
      <TabMenu
        className="settings__tabs"
        tabs={settingsTabs.map(({ title, navigateTo, Component }) => ({
          title,
          navigateTo,
          tabContents: (
            <SettingsTab
              title={title}
              tabContentComponent={
                <Component isAdminSettingsScope={selectedScope === 'admin'} />
              }
            />
          ),
        }))}
      />
    </div>
  )
}

export default SettingsPage

// TODO: Settings of interest to add

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

//* Playback & streaming settings
//! Hardware acceleration
//! Modify list of which hardware decoding algorithms to use
//! Video transcoding codec
//! Audio transcoding codec
// Preferred audio language
// Preferred subtitle language
// preferred video resolution
// Subtitle text size
// subtitle text weight
// subtitle font family
// Subtitle text color (color picker with transparency)
// Subtitle background color (color picker with transparency)
// Preview of subtitle appearance (not really a setting, but useful to have on the settings page)
//? Network bandwidth (custom input field in mbps. if 0, disable.)
//? Maximum media stream resolution
//? Autoplay next series episode
//? Audio channels (auto, stereo, mono, 5.1, 7.1)

//* Personalization settings
// UI language (in supported languages)
//? Modify CSS variables, to change UI coloring & allowing background to be a slideshow of media images, custom single image or just a static color
//? Change font family
//? Choose screensaver (or disable)
//? Maximum amount of media in a custom section row
