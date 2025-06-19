-- Dumping database structure for Reelix
CREATE DATABASE IF NOT EXISTS `Reelix` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `Reelix`;

-- Dumping structure for table Reelix.SettingDefinitions
CREATE TABLE IF NOT EXISTS `SettingDefinitions` (
  `setting_definition_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `setting_name` varchar(256) NOT NULL,
  `setting_type` enum('individual','global','system') NOT NULL,
  PRIMARY KEY (`setting_definition_id`),
  UNIQUE KEY `setting_name` (`setting_name`),
  KEY `setting_type` (`setting_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.SettingValues
CREATE TABLE IF NOT EXISTS `SettingValues` (
  `setting_values_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `setting_definition_id` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `value` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`setting_values_id`),
  UNIQUE KEY `setting_definition_id_user_id` (`setting_definition_id`,`user_id`) USING BTREE,
  KEY `FK__Users` (`user_id`),
  CONSTRAINT `FK__SettingDefinitions` FOREIGN KEY (`setting_definition_id`) REFERENCES `SettingDefinitions` (`setting_definition_id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `FK__Users` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.UserRoles
CREATE TABLE IF NOT EXISTS `UserRoles` (
  `user_role_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `role_name` varchar(32) NOT NULL,
  PRIMARY KEY (`user_role_id`),
  UNIQUE KEY `role_name` (`role_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table Reelix.Users
CREATE TABLE IF NOT EXISTS `Users` (
  `user_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(64) NOT NULL,
  `user_role_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`),
  KEY `FK_Users_UserRoles` (`user_role_id`),
  CONSTRAINT `FK_Users_UserRoles` FOREIGN KEY (`user_role_id`) REFERENCES `UserRoles` (`user_role_id`) ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for trigger Reelix.validate_setting_scope_before_insert
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER validate_setting_scope_before_insert
BEFORE INSERT ON SettingValues
FOR EACH ROW
BEGIN
  DECLARE type ENUM('individual', 'global', 'system');

  SELECT setting_type INTO type
  FROM SettingDefinitions
  WHERE setting_definition_id = NEW.setting_definition_id;

  IF type = 'individual' AND NEW.user_id IS NULL THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Individual settings must have a user_id';
  END IF;

  IF type IN ('global', 'system') AND NEW.user_id IS NOT NULL THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Global/system settings must not have a user_id';
  END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Dumping structure for trigger Reelix.validate_setting_scope_before_update
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER validate_setting_scope_before_update
BEFORE UPDATE ON SettingValues
FOR EACH ROW
BEGIN
  DECLARE type ENUM('individual', 'global', 'system');

  SELECT setting_type INTO type
  FROM SettingDefinitions
  WHERE setting_definition_id = NEW.setting_definition_id;

  IF type = 'individual' AND NEW.user_id IS NULL THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Individual settings must have a user_id';
  END IF;

  IF type IN ('global', 'system') AND NEW.user_id IS NOT NULL THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Global/system settings must not have a user_id';
  END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;
