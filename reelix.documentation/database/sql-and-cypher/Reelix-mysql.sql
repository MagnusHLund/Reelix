-- --------------------------------------------------------
-- Server version:               12.0.2-MariaDB-ubu2404
-- --------------------------------------------------------

CREATE DATABASE IF NOT EXISTS `Reelix`
USE `Reelix`;

CREATE TABLE IF NOT EXISTS `AudioTracks` (
  `audio_track_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `playable_media_entity_id` char(36) NOT NULL,
  `title` varchar(256) NOT NULL,
  `file_path` varchar(256) NOT NULL,
  `stream_index` smallint(5) unsigned NOT NULL,
  `language_code` char(5) NOT NULL,
  `codec` varchar(10) NOT NULL,
  `codec_profile` varchar(15) NOT NULL,
  `file_format` varchar(5) NOT NULL,
  `channels` tinyint(3) unsigned NOT NULL,
  `sample_rate_hz` int(10) unsigned NOT NULL,
  `bit_rate_kbps` int(10) unsigned NOT NULL,
  `channel_layout` varchar(15) NOT NULL,
  `is_external` tinyint(1) NOT NULL,
  `is_forced` tinyint(1) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`audio_track_id`),
  KEY `title` (`title`),
  KEY `updated_at` (`updated_at`),
  KEY `created_at` (`created_at`),
  KEY `FK_AudioTracks_PlayableMediaEntities` (`playable_media_entity_id`),
  CONSTRAINT `FK_AudioTracks_PlayableMediaEntities` FOREIGN KEY (`playable_media_entity_id`) REFERENCES `PlayableMediaEntities` (`playable_media_entity_id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `AuthenticationTokens` (
  `authentication_token_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` char(36) NOT NULL,
  `token` char(255) NOT NULL COMMENT 'length might change',
  `expires_at` timestamp NOT NULL,
  `expired_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`authentication_token_id`) USING BTREE,
  KEY `token` (`token`) USING BTREE,
  KEY `expired_at` (`expired_at`) USING BTREE,
  KEY `created_at` (`created_at`) USING BTREE,
  KEY `FK_AuthenticationTokens_Users` (`user_id`),
  CONSTRAINT `FK_AuthenticationTokens_Users` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `ContributorDescriptions` (
  `media_contributor_description_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `contributor_id` char(36) NOT NULL,
  `language_code` char(5) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`media_contributor_description_id`),
  UNIQUE KEY `Index 5` (`language_code`,`contributor_id`),
  KEY `updated_at` (`updated_at`),
  KEY `created_at` (`created_at`),
  KEY `FK__Contributors_2` (`contributor_id`),
  CONSTRAINT `FK__Contributors_2` FOREIGN KEY (`contributor_id`) REFERENCES `Contributors` (`contributor_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `ContributorImages` (
  `contributor_images_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `contributor_id` char(36) NOT NULL,
  `file_type` varchar(5) NOT NULL,
  `capture_year` smallint(5) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`contributor_images_id`),
  UNIQUE KEY `Index 6` (`capture_year`,`contributor_id`),
  KEY `capture_year` (`capture_year`),
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`),
  KEY `FK__Contributors` (`contributor_id`),
  CONSTRAINT `FK__Contributors` FOREIGN KEY (`contributor_id`) REFERENCES `Contributors` (`contributor_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `ContributorRoles` (
  `contributor_role_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `role` varchar(64) NOT NULL,
  PRIMARY KEY (`contributor_role_id`),
  UNIQUE KEY `role` (`role`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `ContributorRolesContributors` (
  `contributor_roles_contributors_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `contributor_role_id` int(10) unsigned NOT NULL,
  `contributor_id` char(36) NOT NULL,
  PRIMARY KEY (`contributor_roles_contributors_id`),
  UNIQUE KEY `Index 3` (`contributor_id`,`contributor_role_id`),
  KEY `FK_ContributorRolesContributors_ContributorRoles` (`contributor_role_id`),
  CONSTRAINT `FK_ContributorRolesContributors_ContributorRoles` FOREIGN KEY (`contributor_role_id`) REFERENCES `ContributorRoles` (`contributor_role_id`) ON DELETE CASCADE,
  CONSTRAINT `FK_ContributorRolesContributors_Contributors` FOREIGN KEY (`contributor_id`) REFERENCES `Contributors` (`contributor_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `Contributors` (
  `contributor_id` char(36) NOT NULL DEFAULT uuid(),
  `name` varchar(64) NOT NULL,
  `born_at` timestamp NOT NULL,
  `died_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`contributor_id`),
  KEY `name` (`name`),
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `ContributorsPlayableMediaEntities` (
  `media_contributors_playable_media_entity_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `contributor_id` char(36) NOT NULL,
  `playable_media_entity_id` char(36) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`media_contributors_playable_media_entity_id`),
  UNIQUE KEY `Index 5` (`playable_media_entity_id`,`contributor_id`),
  KEY `updated_at` (`updated_at`),
  KEY `created_at` (`created_at`),
  KEY `FK_ContributorsPlayableMediaEntities_Contributors` (`contributor_id`),
  CONSTRAINT `FK_ContributorsPlayableMediaEntities_Contributors` FOREIGN KEY (`contributor_id`) REFERENCES `Contributors` (`contributor_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `MediaCollectionDescriptions` (
  `media_collection_description_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `media_collection_id` char(36) NOT NULL,
  `language_code` char(5) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`media_collection_description_id`),
  UNIQUE KEY `Index 6` (`media_collection_id`,`language_code`),
  KEY `language_code` (`language_code`),
  KEY `updated_at` (`updated_at`),
  KEY `created_at` (`created_at`),
  CONSTRAINT `FK_MediaCollectionDescriptions_MediaCollections` FOREIGN KEY (`media_collection_id`) REFERENCES `MediaCollections` (`media_collection_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `MediaCollections` (
  `media_collection_id` char(36) NOT NULL DEFAULT uuid(),
  `image_file_path` varchar(256) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`media_collection_id`),
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `MediaCollectionTitles` (
  `media_collection_title_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `media_collection_id` char(36) NOT NULL,
  `language_code` char(5) NOT NULL,
  `title` varchar(256) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`media_collection_title_id`),
  UNIQUE KEY `Index 6` (`media_collection_id`,`language_code`),
  KEY `language_code` (`language_code`),
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`),
  CONSTRAINT `FK_MediaCollectionTitles_MediaCollections` FOREIGN KEY (`media_collection_id`) REFERENCES `MediaCollections` (`media_collection_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `MediaDescriptions` (
  `media_description_id` int(10) unsigned NOT NULL,
  `media_entity_id` char(36) NOT NULL,
  `language_code` char(5) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`media_description_id`),
  UNIQUE KEY `Index 6` (`media_entity_id`,`language_code`),
  KEY `language_code` (`language_code`),
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`),
  CONSTRAINT `FK_MediaDescriptions_MediaEntities` FOREIGN KEY (`media_entity_id`) REFERENCES `MediaEntities` (`media_entity_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `MediaEntities` (
  `media_entity_id` char(36) NOT NULL DEFAULT uuid(),
  `entity_id` char(36) NOT NULL,
  `entity_type_id` smallint(5) unsigned NOT NULL,
  PRIMARY KEY (`media_entity_id`),
  UNIQUE KEY `Index 4` (`entity_type_id`,`entity_id`) USING BTREE,
  KEY `FK_MediaEntities_SeriesEpisodes` (`entity_id`),
  KEY `entity_type` (`entity_type_id`) USING BTREE,
  CONSTRAINT `FK_MediaEntities_MediaEntityTypes` FOREIGN KEY (`entity_type_id`) REFERENCES `MediaEntityTypes` (`media_entity_type_id`) ON DELETE CASCADE,
  CONSTRAINT `FK_MediaEntities_Movies` FOREIGN KEY (`entity_id`) REFERENCES `Movies` (`movie_id`) ON DELETE CASCADE,
  CONSTRAINT `FK_MediaEntities_Series` FOREIGN KEY (`entity_id`) REFERENCES `Series` (`series_id`) ON DELETE CASCADE,
  CONSTRAINT `FK_MediaEntities_SeriesEpisodes` FOREIGN KEY (`entity_id`) REFERENCES `SeriesEpisodes` (`series_episode_id`) ON DELETE CASCADE,
  CONSTRAINT `FK_MediaEntities_SeriesSeasons` FOREIGN KEY (`entity_id`) REFERENCES `SeriesSeasons` (`series_season_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `MediaEntitiesMediaCollections` (
  `media_entities_media_collections_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `media_entity_id` char(36) NOT NULL,
  `media_collection_id` char(36) NOT NULL,
  PRIMARY KEY (`media_entities_media_collections_id`),
  UNIQUE KEY `Index 4` (`media_collection_id`,`media_entity_id`),
  KEY `FK_MediaEntitiesMediaCollections_MediaEntities` (`media_entity_id`),
  CONSTRAINT `FK_MediaEntitiesMediaCollections_MediaCollections` FOREIGN KEY (`media_collection_id`) REFERENCES `MediaCollections` (`media_collection_id`) ON DELETE CASCADE,
  CONSTRAINT `FK_MediaEntitiesMediaCollections_MediaEntities` FOREIGN KEY (`media_entity_id`) REFERENCES `MediaEntities` (`media_entity_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `MediaEntityTypes` (
  `media_entity_type_id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `media_type` varchar(64) NOT NULL,
  PRIMARY KEY (`media_entity_type_id`),
  KEY `media_type` (`media_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `MediaImages` (
  `media_images_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `media_entity_id` char(36) NOT NULL,
  `media_image_type_id` smallint(5) unsigned NOT NULL,
  `url_path` char(64) NOT NULL COMMENT 'Havent figured out the size yet',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`media_images_id`),
  UNIQUE KEY `url_path` (`url_path`),
  UNIQUE KEY `Index 6` (`media_entity_id`,`media_image_type_id`) USING BTREE,
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`),
  KEY `FK_MediaImages_MediaEntityTypes` (`media_image_type_id`),
  CONSTRAINT `FK_MediaImages_MediaEntities` FOREIGN KEY (`media_entity_id`) REFERENCES `MediaEntities` (`media_entity_id`) ON DELETE CASCADE,
  CONSTRAINT `FK_MediaImages_MediaEntityTypes` FOREIGN KEY (`media_image_type_id`) REFERENCES `MediaEntityTypes` (`media_entity_type_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `MediaImageTypes` (
  `media_image_type_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(32) NOT NULL,
  PRIMARY KEY (`media_image_type_id`),
  UNIQUE KEY `type` (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `MediaLibraries` (
  `media_library_id` char(36) NOT NULL DEFAULT uuid(),
  `library_name` varchar(64) NOT NULL,
  `library_directory` varchar(256) NOT NULL,
  `media_type` enum('MOVIES','SERIES') NOT NULL,
  PRIMARY KEY (`media_library_id`),
  UNIQUE KEY `library_directory` (`library_directory`),
  UNIQUE KEY `library_name` (`library_name`),
  KEY `media_type` (`media_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `MediaTitles` (
  `media_title_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `media_entity_id` char(36) NOT NULL,
  `language_code` char(5) NOT NULL,
  `title` varchar(256) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`media_title_id`),
  UNIQUE KEY `Index 6` (`media_entity_id`,`language_code`),
  KEY `language_code` (`language_code`),
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`),
  CONSTRAINT `FK_MediaTitles_MediaEntities` FOREIGN KEY (`media_entity_id`) REFERENCES `MediaEntities` (`media_entity_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `Movies` (
  `movie_id` char(36) NOT NULL DEFAULT uuid(),
  `media_library_id` char(36) NOT NULL,
  `movie_directory` varchar(256) NOT NULL,
  `release_date` date NOT NULL,
  `imdb_id` char(9) DEFAULT NULL,
  `tmdb_id` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`movie_id`),
  UNIQUE KEY `movie_directory` (`movie_directory`),
  KEY `release_date` (`release_date`),
  KEY `imdb_id` (`imdb_id`),
  KEY `tmdb_id` (`tmdb_id`),
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`),
  KEY `FK_Movies_MediaLibraries` (`media_library_id`),
  CONSTRAINT `FK_Movies_MediaLibraries` FOREIGN KEY (`media_library_id`) REFERENCES `MediaLibraries` (`media_library_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `PlayableMediaEntities` (
  `playable_media_entity_id` char(36) NOT NULL DEFAULT uuid(),
  `entity_id` char(36) NOT NULL,
  `entity_type` smallint(5) unsigned NOT NULL,
  PRIMARY KEY (`playable_media_entity_id`),
  UNIQUE KEY `Index 4` (`entity_type`,`entity_id`),
  KEY `entity_type` (`entity_type`),
  KEY `FK_PlayableMediaEntities_SeriesEpisodes` (`entity_id`),
  CONSTRAINT `FK_PlayableMediaEntities_MediaEntityTypes` FOREIGN KEY (`entity_type`) REFERENCES `MediaEntityTypes` (`media_entity_type_id`),
  CONSTRAINT `FK_PlayableMediaEntities_Movies` FOREIGN KEY (`entity_id`) REFERENCES `Movies` (`movie_id`) ON DELETE CASCADE,
  CONSTRAINT `FK_PlayableMediaEntities_SeriesEpisodes` FOREIGN KEY (`entity_id`) REFERENCES `SeriesEpisodes` (`series_episode_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `PlayableMediaEntitiesPlaylists` (
  `playable_media_entities_playlists_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `playable_media_entity_id` char(36) NOT NULL,
  `playlist_id` char(36) NOT NULL,
  `play_order` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`playable_media_entities_playlists_id`),
  UNIQUE KEY `Index 7` (`playlist_id`,`play_order`) USING BTREE,
  UNIQUE KEY `Index 8` (`playable_media_entity_id`,`playlist_id`) USING BTREE,
  KEY `play_order` (`play_order`),
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`),
  CONSTRAINT `FK_PlayableMediaEntitiesPlaylists_PlayableMediaEntities` FOREIGN KEY (`playable_media_entity_id`) REFERENCES `PlayableMediaEntities` (`playable_media_entity_id`) ON DELETE CASCADE,
  CONSTRAINT `FK_PlayableMediaEntitiesPlaylists_Playlists` FOREIGN KEY (`playlist_id`) REFERENCES `Playlists` (`playlist_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `Playlists` (
  `playlist_id` char(36) NOT NULL DEFAULT uuid(),
  `owned_by_user_id` char(36) NOT NULL,
  `title` varchar(50) NOT NULL,
  `is_public` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`playlist_id`),
  KEY `title` (`title`),
  KEY `is_public` (`is_public`),
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`),
  KEY `FK_Playlists_Users` (`owned_by_user_id`),
  CONSTRAINT `FK_Playlists_Users` FOREIGN KEY (`owned_by_user_id`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `RefreshTokens` (
  `refresh_token_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` char(36) NOT NULL,
  `token` char(255) NOT NULL COMMENT 'Length might change',
  `expires_at` timestamp NOT NULL,
  `expired_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`refresh_token_id`) USING BTREE,
  KEY `token` (`token`) USING BTREE,
  KEY `expired_at` (`expired_at`) USING BTREE,
  KEY `created_at` (`created_at`),
  KEY `FK_RefreshTokens_Users` (`user_id`),
  CONSTRAINT `FK_RefreshTokens_Users` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `Series` (
  `series_id` char(36) NOT NULL DEFAULT uuid(),
  `media_library_id` char(36) NOT NULL,
  `series_directory` varchar(256) NOT NULL,
  `title` varchar(256) NOT NULL,
  `total_episodes` mediumint(8) unsigned NOT NULL,
  `total_seasons` mediumint(8) unsigned NOT NULL,
  `start_airing_date` date DEFAULT NULL,
  `end_airing_date` date DEFAULT NULL,
  `imdb_id` char(9) DEFAULT NULL,
  `tmdb_id` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`series_id`),
  UNIQUE KEY `series_directory` (`series_directory`),
  KEY `title` (`title`),
  KEY `start_airing_date` (`start_airing_date`),
  KEY `end_airing_date` (`end_airing_date`),
  KEY `imdb_id` (`imdb_id`),
  KEY `tmdb_id` (`tmdb_id`),
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`),
  KEY `FK_Series_MediaLibraries` (`media_library_id`),
  CONSTRAINT `FK_Series_MediaLibraries` FOREIGN KEY (`media_library_id`) REFERENCES `MediaLibraries` (`media_library_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `SeriesEpisodes` (
  `series_episode_id` char(36) NOT NULL DEFAULT uuid(),
  `series_id` char(36) NOT NULL,
  `series_season_id` char(36) NOT NULL,
  `episode_directory` varchar(256) NOT NULL,
  `release_date` date DEFAULT NULL,
  `episode_number` mediumint(8) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`series_episode_id`),
  UNIQUE KEY `episode_directory` (`episode_directory`),
  UNIQUE KEY `Index 9` (`series_season_id`,`episode_number`),
  KEY `updated_at` (`updated_at`),
  KEY `created_at` (`created_at`),
  KEY `episode_number` (`episode_number`),
  KEY `release_date` (`release_date`),
  KEY `FK_SeriesEpisodes_Series` (`series_id`),
  CONSTRAINT `FK_SeriesEpisodes_Series` FOREIGN KEY (`series_id`) REFERENCES `Series` (`series_id`) ON DELETE CASCADE,
  CONSTRAINT `FK_SeriesEpisodes_SeriesSeasons` FOREIGN KEY (`series_season_id`) REFERENCES `SeriesSeasons` (`series_season_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `SeriesSeasons` (
  `series_season_id` char(36) NOT NULL DEFAULT uuid(),
  `series_id` char(36) NOT NULL,
  `season_number` smallint(5) unsigned NOT NULL,
  `total_season_episodes` smallint(5) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`series_season_id`),
  UNIQUE KEY `Index 5` (`series_id`,`season_number`),
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`),
  CONSTRAINT `FK_SeriesSeasons_Series` FOREIGN KEY (`series_id`) REFERENCES `Series` (`series_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `SettingsDefinitions` (
  `settings_definition_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL,
  `type` enum('INDIVIDUAL','SYSTEM') NOT NULL,
  PRIMARY KEY (`settings_definition_id`),
  UNIQUE KEY `setting_name` (`name`) USING BTREE,
  KEY `setting_type` (`type`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `SettingsValues` (
  `settings_value_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `setting_definition_id` int(16) unsigned NOT NULL,
  `user_id` char(36) DEFAULT NULL,
  `value` varchar(256) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`settings_value_id`),
  UNIQUE KEY `Index 5` (`setting_definition_id`,`user_id`),
  KEY `updated_at` (`updated_at`),
  KEY `FK_Settingsvalues_SettingsDefinitions` (`setting_definition_id`),
  KEY `FK_Settingsvalues_Users` (`user_id`),
  CONSTRAINT `FK_Settingsvalues_SettingsDefinitions` FOREIGN KEY (`setting_definition_id`) REFERENCES `SettingsDefinitions` (`settings_definition_id`) ON DELETE CASCADE,
  CONSTRAINT `FK_Settingsvalues_Users` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `SubtitleTracks` (
  `subtitle_track_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `playable_media_entity_id` char(36) NOT NULL,
  `title` varchar(256) NOT NULL,
  `file_path` varchar(256) NOT NULL,
  `stream_index` smallint(5) unsigned NOT NULL,
  `language_code` char(5) NOT NULL,
  `encoding` varchar(50) NOT NULL,
  `file_format` varchar(5) NOT NULL,
  `is_forced` tinyint(1) unsigned NOT NULL,
  `is_external` tinyint(1) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`subtitle_track_id`),
  KEY `updated_at` (`updated_at`),
  KEY `created_at` (`created_at`),
  KEY `FK_SubtitleTracks_PlayableMediaEntities` (`playable_media_entity_id`),
  CONSTRAINT `FK_SubtitleTracks_PlayableMediaEntities` FOREIGN KEY (`playable_media_entity_id`) REFERENCES `PlayableMediaEntities` (`playable_media_entity_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `Trailers` (
  `trailer_id` char(36) NOT NULL DEFAULT uuid(),
  `media_entity_id` char(36) NOT NULL,
  `url` varchar(256) NOT NULL,
  `last_valid_check` datetime NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`trailer_id`),
  UNIQUE KEY `url` (`url`),
  KEY `last_valid_check` (`last_valid_check`),
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`),
  KEY `FK_Trailers_MediaEntities` (`media_entity_id`),
  CONSTRAINT `FK_Trailers_MediaEntities` FOREIGN KEY (`media_entity_id`) REFERENCES `MediaEntities` (`media_entity_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `UserRoles` (
  `user_role_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `role_name` varchar(32) NOT NULL,
  PRIMARY KEY (`user_role_id`) USING BTREE,
  UNIQUE KEY `role_name` (`role_name`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `Users` (
  `user_id` char(36) NOT NULL DEFAULT uuid(),
  `username` varchar(64) NOT NULL,
  `email` varchar(254) NOT NULL,
  `user_role_id` int(10) unsigned NOT NULL,
  `hashed_password` char(128) NOT NULL,
  `last_logged_in` timestamp NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`),
  KEY `FK__UserRoles` (`user_role_id`),
  CONSTRAINT `FK__UserRoles` FOREIGN KEY (`user_role_id`) REFERENCES `UserRoles` (`user_role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `VideoTracks` (
  `video_track_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `playable_media_entity_id` char(36) NOT NULL,
  `title` varchar(256) NOT NULL,
  `file_path` varchar(256) NOT NULL,
  `stream_index` smallint(5) unsigned NOT NULL,
  `codec` varchar(10) NOT NULL,
  `codec_profile` varchar(15) NOT NULL,
  `file_format` varchar(5) NOT NULL,
  `width` smallint(5) unsigned NOT NULL,
  `height` smallint(5) unsigned NOT NULL,
  `bit_rate_kbps` int(10) unsigned NOT NULL,
  `aspect_ratio` varchar(10) NOT NULL,
  `dynamic_range` varchar(20) NOT NULL,
  `length_seconds` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`video_track_id`),
  KEY `title` (`title`),
  KEY `updated_at` (`updated_at`),
  KEY `created_at` (`created_at`),
  KEY `length_seconds` (`length_seconds`),
  KEY `FK_VideoTracks_PlayableMediaEntities` (`playable_media_entity_id`),
  CONSTRAINT `FK_VideoTracks_PlayableMediaEntities` FOREIGN KEY (`playable_media_entity_id`) REFERENCES `PlayableMediaEntities` (`playable_media_entity_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER trg_mediaentities_before_insert
BEFORE INSERT ON MediaEntities
FOR EACH ROW
BEGIN
  DECLARE v_type VARCHAR(64);

  SELECT media_type INTO v_type
  FROM MediaEntityTypes
  WHERE media_entity_type_id = NEW.entity_type_id;

  -- Check each type against its table
  IF v_type = 'MOVIE' AND NOT EXISTS (SELECT 1 FROM Movies WHERE movie_id = NEW.entity_id) THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Invalid entity_id for MOVIE';
  END IF;

  IF v_type = 'SERIES' AND NOT EXISTS (SELECT 1 FROM Series WHERE series_id = NEW.entity_id) THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Invalid entity_id for SERIES';
  END IF;

  IF v_type = 'SEASON' AND NOT EXISTS (SELECT 1 FROM SeriesSeasons WHERE series_season_id = NEW.entity_id) THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Invalid entity_id for SEASON';
  END IF;

  IF v_type = 'EPISODE' AND NOT EXISTS (SELECT 1 FROM SeriesEpisodes WHERE series_episode_id = NEW.entity_id) THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Invalid entity_id for EPISODE';
  END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO';
DELIMITER //
CREATE TRIGGER trg_playablemediaentitiesplaylists_after_delete
AFTER DELETE ON PlayableMediaEntitiesPlaylists
FOR EACH ROW
BEGIN
    -- Shift all items with a higher play_order down by 1
    UPDATE PlayableMediaEntitiesPlaylists
    SET play_order = play_order - 1
    WHERE playlist_id = OLD.playlist_id
      AND play_order > OLD.play_order;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER trg_playablemediaentities_before_insert
BEFORE INSERT ON PlayableMediaEntities
FOR EACH ROW
BEGIN
  DECLARE v_type VARCHAR(64);

  SELECT media_type INTO v_type
  FROM MediaEntityTypes
  WHERE media_entity_type_id = NEW.entity_type;

  IF v_type = 'MOVIE' AND NOT EXISTS (SELECT 1 FROM Movies WHERE movie_id = NEW.entity_id) THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Invalid MOVIE entity_id for PlayableMediaEntities';
  END IF;

  IF v_type = 'EPISODE' AND NOT EXISTS (SELECT 1 FROM SeriesEpisodes WHERE series_episode_id = NEW.entity_id) THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Invalid EPISODE entity_id for PlayableMediaEntities';
  END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER trg_settingsvalues_before_insert
BEFORE INSERT ON SettingsValues
FOR EACH ROW
BEGIN
  DECLARE v_type ENUM('INDIVIDUAL','SYSTEM');

  SELECT type INTO v_type
  FROM SettingsDefinitions
  WHERE settings_definition_id = NEW.setting_definition_id;

  IF v_type = 'INDIVIDUAL' AND NEW.user_id IS NULL THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'INDIVIDUAL settings must have a user_id';
  END IF;

  IF v_type = 'SYSTEM' AND NEW.user_id IS NOT NULL THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'SYSTEM settings must not have a user_id';
  END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER trg_settingsvalues_before_update
BEFORE UPDATE ON SettingsValues
FOR EACH ROW
BEGIN
  DECLARE v_type ENUM('INDIVIDUAL','SYSTEM');

  SELECT type INTO v_type
  FROM SettingsDefinitions
  WHERE settings_definition_id = NEW.setting_definition_id;

  IF v_type = 'INDIVIDUAL' AND NEW.user_id IS NULL THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'INDIVIDUAL settings must have a user_id';
  END IF;

  IF v_type = 'SYSTEM' AND NEW.user_id IS NOT NULL THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'SYSTEM settings must not have a user_id';
  END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;
