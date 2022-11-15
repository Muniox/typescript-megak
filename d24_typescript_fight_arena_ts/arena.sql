-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Wersja serwera:               10.6.9-MariaDB - mariadb.org binary distribution
-- Serwer OS:                    Win64
-- HeidiSQL Wersja:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Zrzut struktury bazy danych megak_arena
CREATE DATABASE IF NOT EXISTS `megak_arena` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `megak_arena`;

-- Zrzut struktury tabela megak_arena.warriors
CREATE TABLE IF NOT EXISTS `warriors` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT uuid(),
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `power` tinyint(2) NOT NULL,
  `defense` tinyint(2) NOT NULL,
  `stamina` tinyint(2) NOT NULL,
  `agility` tinyint(2) NOT NULL,
  `wins` int(11) NOT NULL DEFAULT 0,
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Zrzucanie danych dla tabeli megak_arena.warriors: ~0 rows (około)
/*!40000 ALTER TABLE `warriors` DISABLE KEYS */;
INSERT INTO `warriors` (`id`, `name`, `power`, `defense`, `stamina`, `agility`, `wins`) VALUES
	('ba4b564f-6466-11ed-973f-50ebf64adf2b', 'PB', 4, 2, 3, 1, 0);
/*!40000 ALTER TABLE `warriors` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
