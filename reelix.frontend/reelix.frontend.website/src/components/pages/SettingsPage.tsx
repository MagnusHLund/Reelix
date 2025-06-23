import PlaybackAndStreamingSettingsTab from '../layout/settings/settingsForTabs/PlaybackAndStreamingSettingsTab'
import PersonalizationSettingsTab from '../layout/settings/settingsForTabs/PersonalizationSettingsTab'
import UserManagementSettingsTab from '../layout/settings/settingsForTabs/UserManagementSettingsTab'
import MediaLibrarySettingsTab from '../layout/settings/settingsForTabs/MediaLibrarySettingsTab'
import SystemSettingsTab from '../layout/settings/settingsForTabs/SystemSettingsTab'
import SettingsHeader from '../layout/Header/SettingsHeader'
import SettingsTab from '../layout/settings/SettingsTab'
import TabMenu from '../layout/menus/TabMenu'
import Dropdown from '../input/Dropdown'
import { useState } from 'react'
import './SettingsPage.scss'

const SettingsPage: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(true) // TODO: Determined by authorization, when API is implemented
  const [selectedScope, setSelectedScope] = useState<string>('user')

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
    <div className='settings__page'>
      <SettingsHeader title='Settings' isAdmin={isAdmin} onDropdownChange={setSelectedScope} />
      <TabMenu
        className='settings__tabs'
        tabs={settingsTabs.map(({ title, navigateTo, Component }) => ({
          title,
          navigateTo,
          tabContents: (
            <SettingsTab
              title={title}
              tabContentComponent={<Component isAdminSettingsScope={selectedScope === 'admin'} />}
            />
          ),
        }))}
      />
    </div>
  )
}

export default SettingsPage
