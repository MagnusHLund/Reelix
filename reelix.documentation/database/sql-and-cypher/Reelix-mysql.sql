-- --------------------------------------------------------
-- Host:                         192.168.50.246
-- Server version:               12.0.2-MariaDB-ubu2404 - mariadb.org binary distribution
-- Server OS:                    debian-linux-gnu
-- HeidiSQL Version:             12.11.0.7065
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for Reelix
CREATE DATABASE IF NOT EXISTS `Reelix` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `Reelix`;

-- Dumping structure for table Reelix.AudioTracks
CREATE TABLE IF NOT EXISTS `AudioTracks` (
  `audio_track_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `playable_media_entity` char(16) NOT NULL,
  `title` varchar(256) NOT NULL,
  `file_path` varchar(256) NOT NULL,
  `stream_index` smallint(5) unsigned NOT NULL,
  `language_code` char(5) NOT NULL,
  `codec` varchar(10) NOT NULL,
  `codec_profile` varchar(15) NOT NULL,
  `file_format` varchar(5) NOT NULL,
  `channels` tinyint(3) unsigned NOT NULL,
  `sample_rate_hz` smallint(5) unsigned NOT NULL,
  `bit_rate_kbps` smallint(5) unsigned NOT NULL,
  `channel_layout` varchar(15) NOT NULL,
  `is_external` tinyint(1) NOT NULL,
  `is_forced` tinyint(1) unsigned NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`audio_track_id`),
  KEY `title` (`title`),
  KEY `updated_at` (`updated_at`),
  KEY `created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.AuthenticationTokens
CREATE TABLE IF NOT EXISTS `AuthenticationTokens` (
  `authentication_token_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` char(16) NOT NULL,
  `token` char(255) NOT NULL,
  `expires_at` timestamp NOT NULL,
  `expired_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL,
  PRIMARY KEY (`authentication_token_id`) USING BTREE,
  KEY `token` (`token`) USING BTREE,
  KEY `expired_at` (`expired_at`) USING BTREE,
  KEY `created_at` (`created_at`) USING BTREE,
  KEY `FK_AuthenticationTokens_Users` (`user_id`),
  CONSTRAINT `FK_AuthenticationTokens_Users` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.ContributorDescriptions
CREATE TABLE IF NOT EXISTS `ContributorDescriptions` (
  `media_contributor_description_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `contributor_id` char(16) NOT NULL,
  `language_code` char(5) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`media_contributor_description_id`),
  KEY `updated_at` (`updated_at`),
  KEY `created_at` (`created_at`),
  KEY `FK__Contributors_2` (`contributor_id`),
  CONSTRAINT `FK__Contributors_2` FOREIGN KEY (`contributor_id`) REFERENCES `Contributors` (`contributor_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.ContributorImages
CREATE TABLE IF NOT EXISTS `ContributorImages` (
  `contributor_images_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `contributor_id` char(16) NOT NULL,
  `file_type` varchar(5) NOT NULL,
  `capture_year` smallint(5) unsigned NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`contributor_images_id`),
  KEY `capture_year` (`capture_year`),
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`),
  KEY `FK__Contributors` (`contributor_id`),
  CONSTRAINT `FK__Contributors` FOREIGN KEY (`contributor_id`) REFERENCES `Contributors` (`contributor_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.Contributors
CREATE TABLE IF NOT EXISTS `Contributors` (
  `contributor_id` char(16) NOT NULL,
  `name` varchar(64) NOT NULL,
  `born_at` timestamp NOT NULL,
  `died_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`contributor_id`),
  KEY `name` (`name`),
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.ContributorsPlayableMediaEntities
CREATE TABLE IF NOT EXISTS `ContributorsPlayableMediaEntities` (
  `media_contributors_playable_media_entity_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `contributor_id` char(16) NOT NULL,
  `playable_media_entity_id` char(16) NOT NULL,
  `role` varchar(64) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`media_contributors_playable_media_entity_id`),
  KEY `updated_at` (`updated_at`),
  KEY `created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.MediaCollectionDescriptions
CREATE TABLE IF NOT EXISTS `MediaCollectionDescriptions` (
  `media_collection_description_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `media_collection_id` char(16) NOT NULL,
  `language_code` char(5) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`media_collection_description_id`),
  KEY `language_code` (`language_code`),
  KEY `updated_at` (`updated_at`),
  KEY `created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.MediaCollections
CREATE TABLE IF NOT EXISTS `MediaCollections` (
  `media_collection_id` char(16) NOT NULL,
  `image_file_path` varchar(256) NOT NULL,
  `created_at` int(10) unsigned NOT NULL,
  `updated_at` int(10) unsigned NOT NULL,
  PRIMARY KEY (`media_collection_id`),
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.MediaCollectionTitles
CREATE TABLE IF NOT EXISTS `MediaCollectionTitles` (
  `media_collection_title_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `media_collection_id` char(16) NOT NULL,
  `language_code` char(5) NOT NULL,
  `title` varchar(256) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`media_collection_title_id`),
  KEY `language_code` (`language_code`),
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.MediaDescriptions
CREATE TABLE IF NOT EXISTS `MediaDescriptions` (
  `media_description_id` int(10) unsigned NOT NULL,
  `media_entity_id` char(16) NOT NULL,
  `language_code` char(5) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`media_description_id`),
  KEY `language_code` (`language_code`),
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.MediaEntities
CREATE TABLE IF NOT EXISTS `MediaEntities` (
  `media_entity_id` char(16) NOT NULL,
  `entity_id` char(16) NOT NULL,
  `entity_type` enum('MOVIE','SERIES','SEASON','EPISODE') NOT NULL,
  PRIMARY KEY (`media_entity_id`),
  KEY `entity_type` (`entity_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.MediaEntitiesMediaCollections
CREATE TABLE IF NOT EXISTS `MediaEntitiesMediaCollections` (
  `media_entities_media_collections_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `media_entity_id` char(16) NOT NULL,
  `media_collection_id` char(16) NOT NULL,
  PRIMARY KEY (`media_entities_media_collections_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.MediaImages
CREATE TABLE IF NOT EXISTS `MediaImages` (
  `media_images_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `media_entity_id` char(16) NOT NULL,
  `url_path` char(64) NOT NULL COMMENT 'Havent figured out the size yet',
  `image_type` enum('PRIMARY','BACKDROP','COVER','LOGO','THUMBNAIL') NOT NULL,
  `created_at` int(10) unsigned NOT NULL,
  `updated_at` int(10) unsigned NOT NULL,
  PRIMARY KEY (`media_images_id`),
  UNIQUE KEY `url_path` (`url_path`),
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.MediaLibraries
CREATE TABLE IF NOT EXISTS `MediaLibraries` (
  `media_library_id` char(16) NOT NULL,
  `library_name` varchar(64) NOT NULL,
  `library_directory` varchar(256) NOT NULL,
  `media_type` enum('MOVIES','SERIES') NOT NULL,
  PRIMARY KEY (`media_library_id`),
  UNIQUE KEY `library_directory` (`library_directory`),
  UNIQUE KEY `library_name` (`library_name`),
  KEY `media_type` (`media_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.MediaTitles
CREATE TABLE IF NOT EXISTS `MediaTitles` (
  `media_title_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `media_entity_id` char(16) NOT NULL,
  `language_code` char(5) NOT NULL,
  `title` varchar(256) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`media_title_id`),
  KEY `language_code` (`language_code`),
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.Movies
CREATE TABLE IF NOT EXISTS `Movies` (
  `movie_id` char(16) NOT NULL,
  `media_library_id` char(16) NOT NULL,
  `movie_directory` varchar(256) NOT NULL,
  `release_date` date NOT NULL,
  `imdb_id` char(9) DEFAULT NULL,
  `tmdb_id` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`movie_id`),
  UNIQUE KEY `movie_directory` (`movie_directory`),
  KEY `release_date` (`release_date`),
  KEY `imdb_id` (`imdb_id`),
  KEY `tmdb_id` (`tmdb_id`),
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.PlayableMediaEntities
CREATE TABLE IF NOT EXISTS `PlayableMediaEntities` (
  `playable_media_entity_id` char(16) NOT NULL,
  `entity_id` char(16) NOT NULL,
  `entity_type` enum('MOVIE','EPISODE') NOT NULL,
  PRIMARY KEY (`playable_media_entity_id`),
  KEY `entity_type` (`entity_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.PlayableMediaEntitiesPlaylists
CREATE TABLE IF NOT EXISTS `PlayableMediaEntitiesPlaylists` (
  `playable_media_entities_playlists_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `playable_media_entity_id` char(16) NOT NULL,
  `playlist_id` char(16) NOT NULL,
  `play_order` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`playable_media_entities_playlists_id`),
  KEY `play_order` (`play_order`),
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.Playlists
CREATE TABLE IF NOT EXISTS `Playlists` (
  `playlist_id` char(16) NOT NULL,
  `owned_by_user_id` char(16) NOT NULL,
  `title` varchar(50) NOT NULL,
  `is_public` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`playlist_id`),
  KEY `title` (`title`),
  KEY `is_public` (`is_public`),
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`),
  KEY `FK_Playlists_Users` (`owned_by_user_id`),
  CONSTRAINT `FK_Playlists_Users` FOREIGN KEY (`owned_by_user_id`) REFERENCES `Users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.RefreshTokens
CREATE TABLE IF NOT EXISTS `RefreshTokens` (
  `refresh_token_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` char(16) NOT NULL,
  `token` char(255) NOT NULL,
  `expires_at` timestamp NOT NULL,
  `expired_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL,
  PRIMARY KEY (`refresh_token_id`) USING BTREE,
  KEY `token` (`token`) USING BTREE,
  KEY `expired_at` (`expired_at`) USING BTREE,
  KEY `created_at` (`created_at`),
  KEY `FK_RefreshTokens_Users` (`user_id`),
  CONSTRAINT `FK_RefreshTokens_Users` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.Series
CREATE TABLE IF NOT EXISTS `Series` (
  `series_id` char(16) NOT NULL,
  `media_library_id` char(16) NOT NULL,
  `series_directory` varchar(256) NOT NULL,
  `title` varchar(256) NOT NULL,
  `total_episodes` mediumint(8) unsigned NOT NULL,
  `total_seasons` mediumint(8) unsigned NOT NULL,
  `start_airing_date` date DEFAULT NULL,
  `end_airing_date` date DEFAULT NULL,
  `imdb_id` char(9) DEFAULT NULL,
  `tmdb_id` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`series_id`),
  UNIQUE KEY `series_directory` (`series_directory`),
  KEY `title` (`title`),
  KEY `start_airing_date` (`start_airing_date`),
  KEY `end_airing_date` (`end_airing_date`),
  KEY `imdb_id` (`imdb_id`),
  KEY `tmdb_id` (`tmdb_id`),
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.SeriesEpisodes
CREATE TABLE IF NOT EXISTS `SeriesEpisodes` (
  `series_episode_id` char(16) NOT NULL,
  `series_id` char(16) NOT NULL,
  `series_season_id` char(16) NOT NULL,
  `episode_directory` varchar(256) NOT NULL,
  `release_date` date DEFAULT NULL,
  `episode_number` mediumint(8) unsigned NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`series_episode_id`),
  UNIQUE KEY `episode_directory` (`episode_directory`),
  KEY `updated_at` (`updated_at`),
  KEY `created_at` (`created_at`),
  KEY `episode_number` (`episode_number`),
  KEY `release_date` (`release_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.SeriesSeasons
CREATE TABLE IF NOT EXISTS `SeriesSeasons` (
  `series_season_id` char(16) NOT NULL,
  `series_id` char(16) NOT NULL,
  `season_number` smallint(5) unsigned NOT NULL,
  `total_season_episodes` smallint(5) unsigned NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`series_season_id`),
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.SettingsDefinitions
CREATE TABLE IF NOT EXISTS `SettingsDefinitions` (
  `settings_definition_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `setting_name` varchar(256) NOT NULL,
  `setting_type` enum('INDIVIDUAL','GLOBAL','SYSTEM') NOT NULL,
  PRIMARY KEY (`settings_definition_id`),
  UNIQUE KEY `setting_name` (`setting_name`),
  KEY `setting_type` (`setting_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.Settingsvalues
CREATE TABLE IF NOT EXISTS `Settingsvalues` (
  `settings_value_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `setting_definition_id` int(16) unsigned NOT NULL,
  `user_id` char(16) DEFAULT NULL,
  `value` varchar(256) DEFAULT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`settings_value_id`),
  KEY `updated_at` (`updated_at`),
  KEY `FK_Settingsvalues_SettingsDefinitions` (`setting_definition_id`),
  KEY `FK_Settingsvalues_Users` (`user_id`),
  CONSTRAINT `FK_Settingsvalues_SettingsDefinitions` FOREIGN KEY (`setting_definition_id`) REFERENCES `SettingsDefinitions` (`settings_definition_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_Settingsvalues_Users` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.SubtitleTracks
CREATE TABLE IF NOT EXISTS `SubtitleTracks` (
  `subtitle_track_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `playable_media_entity_id` char(16) NOT NULL,
  `title` varchar(256) NOT NULL,
  `file_path` varchar(256) NOT NULL,
  `stream_index` smallint(5) unsigned NOT NULL,
  `language_code` char(5) NOT NULL,
  `encoding` varchar(50) NOT NULL,
  `file_format` varchar(5) NOT NULL,
  `is_forced` tinyint(1) unsigned NOT NULL,
  `is_external` tinyint(1) unsigned NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`subtitle_track_id`),
  KEY `updated_at` (`updated_at`),
  KEY `created_at` (`created_at`),
  KEY `playable_media_entity_id` (`playable_media_entity_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.Trailers
CREATE TABLE IF NOT EXISTS `Trailers` (
  `trailer_id` char(16) NOT NULL,
  `media_entity_id` char(16) NOT NULL,
  `url` varchar(256) NOT NULL,
  `last_valid_check` datetime NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`trailer_id`),
  UNIQUE KEY `url` (`url`),
  KEY `last_valid_check` (`last_valid_check`),
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.UserRoles
CREATE TABLE IF NOT EXISTS `UserRoles` (
  `user_role_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `role_name` varchar(32) NOT NULL,
  PRIMARY KEY (`user_role_id`) USING BTREE,
  UNIQUE KEY `role_name` (`role_name`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.Users
CREATE TABLE IF NOT EXISTS `Users` (
  `user_id` char(16) NOT NULL,
  `username` varchar(64) NOT NULL,
  `email` varchar(254) NOT NULL,
  `user_role_id` int(10) unsigned NOT NULL,
  `hashed_password` char(128) NOT NULL,
  `last_logged_in` timestamp NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`),
  KEY `FK__UserRoles` (`user_role_id`),
  CONSTRAINT `FK__UserRoles` FOREIGN KEY (`user_role_id`) REFERENCES `UserRoles` (`user_role_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.VideoTracks
CREATE TABLE IF NOT EXISTS `VideoTracks` (
  `video_track_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `playable_media_entity_id` char(16) NOT NULL,
  `title` varchar(256) NOT NULL,
  `file_path` varchar(256) NOT NULL,
  `stream_index` smallint(5) unsigned NOT NULL,
  `codec` varchar(10) NOT NULL,
  `codec_profile` varchar(15) NOT NULL,
  `file_format` varchar(5) NOT NULL,
  `width` smallint(5) unsigned NOT NULL,
  `height` smallint(5) unsigned NOT NULL,
  `bit_rate_kbps` smallint(5) unsigned NOT NULL,
  `aspect_ratio` varchar(10) NOT NULL,
  `dynamic_range` varchar(20) NOT NULL,
  `length_seconds` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`video_track_id`),
  KEY `title` (`title`),
  KEY `updated_at` (`updated_at`),
  KEY `created_at` (`created_at`),
  KEY `length_seconds` (`length_seconds`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
