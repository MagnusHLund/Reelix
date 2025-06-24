import PlaybackAndStreamingSettingsTab from '../layout/settings/settingsForTabs/PlaybackAndStreamingSettingsTab'
import PersonalizationSettingsTab from '../layout/settings/settingsForTabs/PersonalizationSettingsTab'
import UserManagementSettingsTab from '../layout/settings/settingsForTabs/UserManagementSettingsTab'
import MediaLibrarySettingsTab from '../layout/settings/settingsForTabs/MediaLibrarySettingsTab'
import SystemSettingsTab from '../layout/settings/settingsForTabs/SystemSettingsTab'
import { selectMyUser } from '../../redux/selectors/usersSelectors'
import SettingsHeader from '../layout/Header/SettingsHeader'
import SettingsTab from '../layout/settings/SettingsTab'
import TabMenu from '../layout/menus/TabMenu'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import './SettingsPage.scss'

const SettingsPage: React.FC = () => {
  const isAdmin = useSelector(selectMyUser).isAdmin || false
  const [selectedScope, setSelectedScope] = useState<string>('user')

  const settingsTabs = [
    {
      title: 'System',
      navigateTo: '/settings/system',
      Component: SystemSettingsTab,
      adminOnly: true,
    },
    {
      title: 'User Management',
      navigateTo: '/settings/user',
      Component: UserManagementSettingsTab,
      adminOnly: false,
    },
    {
      title: 'Media Library',
      navigateTo: '/settings/media-library',
      Component: MediaLibrarySettingsTab,
      adminOnly: false,
    },
    {
      title: 'Playback & Streaming',
      navigateTo: '/settings/playback-streaming',
      Component: PlaybackAndStreamingSettingsTab,
      adminOnly: false,
    },
    {
      title: 'Personalization',
      navigateTo: '/settings/personalization',
      Component: PersonalizationSettingsTab,
      adminOnly: false,
    },
  ]

  return (
    <div className='settings__page'>
      <SettingsHeader title='Settings' isAdmin={isAdmin} onDropdownChange={setSelectedScope} />
      <TabMenu
        className='settings__tabs'
        tabs={settingsTabs.map(({ title, navigateTo, Component, adminOnly }) => ({
          title,
          navigateTo,
          adminOnly,
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
