import PlaybackAndStreamingSettingsTab from './settingsForTabs/PlaybackAndStreamingSettingsTab'
import PersonalizationSettingsTab from './settingsForTabs/PersonalizationSettingsTab'
import UserManagementSettingsTab from './settingsForTabs/UserManagementSettingsTab'
import MediaLibrarySettingsTab from './settingsForTabs/MediaLibrarySettingsTab'
import SystemSettingsTab from './settingsForTabs/SystemSettingsTab'
import './SettingsTab.scss'
import React from 'react'

type AllowedSettingsTabs =
  | React.ReactElement<SettingsTabProps, typeof SystemSettingsTab>
  | React.ReactElement<SettingsTabProps, typeof UserManagementSettingsTab>
  | React.ReactElement<SettingsTabProps, typeof MediaLibrarySettingsTab>
  | React.ReactElement<SettingsTabProps, typeof PlaybackAndStreamingSettingsTab>
  | React.ReactElement<SettingsTabProps, typeof PersonalizationSettingsTab>

export interface SettingsForTabProps {
  isAdminSettingsScope?: boolean
}

interface SettingsTabProps extends SettingsForTabProps {
  title: string
  tabContentComponent: AllowedSettingsTabs
}

const SettingsTab: React.FC<SettingsTabProps> = ({
  title,
  tabContentComponent,
  isAdminSettingsScope,
}) => {
  const SettingsForTab = React.Children.map(tabContentComponent, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        isAdminSettingsScope: isAdminSettingsScope,
      })
    }
    return child
  })

  return (
    <section className='settings-tab__container'>
      <div className='settings-tab__header'>
        <h1 className='settings-tab__title'>{title}</h1>
      </div>
      <div className='settings-tab__content'>{SettingsForTab}</div>
    </section>
  )
}

export default SettingsTab
