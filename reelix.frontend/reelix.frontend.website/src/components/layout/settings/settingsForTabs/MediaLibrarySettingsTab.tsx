import { selectMediaLibraries } from '../../../../redux/selectors/mediaLibrariesSelector'
import { selectSettingsScope } from '../../../../redux/selectors/settingsSelectors'
import { selectMyUser } from '../../../../redux/selectors/usersSelectors'
import Button from '../../../input/Button'
import { useSelector } from 'react-redux'
import './MediaLibrarySettingsTab.scss'
import Setting from '../Setting'
import MediaLibrarySettingsModal from '../../modals/MediaLibrarySettingsModal'
import { MediaLibrary } from '../../../../redux/slices/mediaLibrariesSlice'
import React, { useState } from 'react'

const MediaLibrarySettingsTab: React.FC = () => {
  const myUser = useSelector(selectMyUser)
  const settingsScope = useSelector(selectSettingsScope)
  const mediaLibraries = useSelector(selectMediaLibraries)

  const [mediaLibraryToShow, setMediaLibraryToShow] = useState<MediaLibrary | null>(null)

  return (
    <div className='media-library-settings-tab__container'>
      {settingsScope === 'admin' && myUser.role === 'admin' && (
        <div>
          <Setting title='Scan media libraries'>
            <Button
              onClick={() => {
                /* TODO: Call API */
              }}
            >
              Scan media libraries
            </Button>
          </Setting>
          <div title='Media libraries'>
            {mediaLibraries.map((mediaLibrary) => {
              return (
                <Button
                  key={mediaLibrary.id}
                  onClick={() => {
                    /* TODO: Open modal for editing media library. IsEnabled, Whitelist, blacklist and age restriction. */
                    setMediaLibraryToShow(mediaLibrary)
                    console.log('headache')
                  }}
                >
                  {mediaLibrary.name}
                </Button>
              )
            })}
            <Button
              onClick={() => {
                /* TODO: Call API */
              }}
            >
              Add media library
            </Button>
          </div>
          {mediaLibraryToShow && (
            <MediaLibrarySettingsModal
              mediaLibrary={mediaLibraryToShow}
              onClose={() => setMediaLibraryToShow(null)}
            />
          )}
        </div>
      )}
    </div>
  )
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
