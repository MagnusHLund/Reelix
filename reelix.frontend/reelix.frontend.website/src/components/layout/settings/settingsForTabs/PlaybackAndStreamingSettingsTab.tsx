import './PlaybackAndStreamingSettingsTab.scss'

const PlaybackAndStreamingSettingsTab: React.FC = () => {
  return <div className='playback-and-streaming-settings-tab__container'></div>
}

export default PlaybackAndStreamingSettingsTab

//* = Settings tab name
//! = Admin only setting
//  = Setting for both admins and normal users
//? = Not in the first version, but planned for later

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
