import PlaybackAndStreamingSettingsTab from '../layout/settings/settingsForTabs/PlaybackAndStreamingSettingsTab'
import PersonalizationSettingsTab from '../layout/settings/settingsForTabs/PersonalizationSettingsTab'
import UserManagementSettingsTab from '../layout/settings/settingsForTabs/UserManagementSettingsTab'
import MediaLibrarySettingsTab from '../layout/settings/settingsForTabs/MediaLibrarySettingsTab'
import SystemSettingsTab from '../layout/settings/settingsForTabs/SystemSettingsTab'
import { selectMyUser } from '../../redux/selectors/usersSelectors'
import { settingsNavigation } from '../navigation/navigationConfig'
import SettingsHeader from '../layout/Header/SettingsHeader'
import SettingsTab from '../layout/settings/SettingsTab'
import TabMenu from '../layout/menus/TabMenu'
import { useSelector } from 'react-redux'
import './SettingsPage.scss'

const SettingsPage: React.FC = () => {
  const isAdmin = useSelector(selectMyUser).role === 'admin'

  const settingsTabs = [
    {
      title: 'System',
      navigateTo: settingsNavigation.system.path,
      Component: SystemSettingsTab,
      adminOnly: true,
    },
    {
      title: 'User Management',
      navigateTo: settingsNavigation.user.path,
      Component: UserManagementSettingsTab,
      adminOnly: false,
    },
    {
      title: 'Media Library',
      navigateTo: settingsNavigation.mediaLibrary.path,
      Component: MediaLibrarySettingsTab,
      adminOnly: false,
    },
    {
      title: 'Playback & Streaming',
      navigateTo: settingsNavigation.playbackStreaming.path,
      Component: PlaybackAndStreamingSettingsTab,
      adminOnly: false,
    },
    {
      title: 'Personalization',
      navigateTo: settingsNavigation.personalization.path,
      Component: PersonalizationSettingsTab,
      adminOnly: false,
    },
  ]

  return (
    <div className='settings__page'>
      <SettingsHeader title='Settings' isAdmin={isAdmin} />
      <TabMenu
        className='settings__tabs'
        tabs={settingsTabs.map(({ title, navigateTo, Component, adminOnly }) => ({
          key: navigateTo.toLowerCase(),
          title,
          navigateTo,
          adminOnly,
          tabContents: <SettingsTab tabContentComponent={<Component />} />,
        }))}
      />
    </div>
  )
}

export default SettingsPage
