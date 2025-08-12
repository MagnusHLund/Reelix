import React from 'react'
import { MediaLibrary } from '../../../redux/slices/mediaLibrariesSlice'
import BaseModal from './BaseModal'
import SettingsGroup from '../settings/SettingsGroup'
import Setting from '../settings/Setting'

interface MediaLibrarySettingsModalProps {
  mediaLibrary: MediaLibrary
  onClose: () => void
}

const MediaLibrarySettingsModal: React.FC<MediaLibrarySettingsModalProps> = ({
  mediaLibrary,
  onClose,
}) => {
  return (
    <BaseModal title={`${mediaLibrary.name}`} onClose={onClose}>
      <SettingsGroup
        title='Restrictions'
        description='Add a whitelist, blacklist or age restriction to your media library.'
      >
        <Setting
          title='Whitelist'
          description='Write the username of the user that can access the media library.'
        ></Setting>
        <Setting
          title='Blacklist'
          description='Write the username of the user that cannot access the media library.'
        ></Setting>
        <Setting
          title='Age Restriction'
          description='Set an age restriction for the media library.'
        ></Setting>
      </SettingsGroup>
    </BaseModal>
  )
}

export default MediaLibrarySettingsModal
