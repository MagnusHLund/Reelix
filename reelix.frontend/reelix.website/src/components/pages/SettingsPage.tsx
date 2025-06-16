import './SettingsPage.scss'

const SettingsPage: React.FC = () => {
  return <div className="settings__page"></div>
}

export default SettingsPage

// TODO: Settings of interest to add

//? Version 1
//! Exclusively admin settings
// See folders to media libraries
// See folder to logs
// See folder for configuration (includes config file for settings that can mess up the server if changed incorrectly)
// Restart server
// Shutdown server
// See active devices
// See previously active devices
// Scan media library
// Show basic server information
// See server activity log
// See server alerts
// Modify server name
// Add additional media libraries
// Manage access to different media libraries
// User overview + adding new users
// Assign user to administrator
// Hardware acceleration
// Modify list of which hardware decoding algorithms to use
// Minimum playtime percentage before media is considered "started watching"
// Maximum playtime percentage before media is considered "done watching"
// Minimum media length allowed to consider media as "started watching"
// Server http port
// View scheduled tasks (media scan, clean logs, maybe more)

//! Shared settings (admin controls default setting value and user can overwrite it, if admin allows it)
// Change user name
// Change password
// Preferred audio language
// Preferred subtitle language
// preferred video resolution
// Timezone
// Enable/disable theme songs for media
// Max days in next up
// Max items in next up
// Subtitle text size
// subtitle text weight
// subtitle font family
// Subtitle text color (color picker with transparency)
// Subtitle background color (color picker with transparency)
// Preview of subtitle appearance
// UI language (in supported languages)
// Sort order of ContentSections on the home page.

//? Version 2
//! Exclusively admin settings
// Delete user account(s)
// Media age restriction for user
// Whitelist genres for user
// Access hours for user
// Video transcoding codec
// Audio transcoding codec
// create & Manage scheduled tasks (media scan, clean logs, maybe more)
// Allow changing mysql & Neo4j database to external server.
// Server https port (& upload functionality for certificates stuff. Certificates will be in the config folder.)

//! Shared settings (admin controls default setting value and user can overwrite it, if admin allows it)
// Colors (overwrite scss variables... is that possible? can it be saved on a database for the user, and applied to whichever device they are on?) - Allow background to be a slideshow of media images, custom single image or just a static color
// Overall font family
// Screensaver? Custom image or slideshow of media images. Also how long before it activates.
// Network bandwidth (custom input field in mbps. if 0, disable.)
// Maximum media stream resolution
// Autoplay next series episode
// Disable user account
// Audio channels (auto, stereo, mono, 5.1, 7.1)
