-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : sam. 19 avr. 2025 à 14:01
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `vereinsbuddy`
--

-- --------------------------------------------------------

--
-- Structure de la table `benutzerkonto`
--

CREATE TABLE `benutzerkonto` (
  `id` int(11) NOT NULL,
  `benutzername` varchar(100) NOT NULL,
  `passwort` varchar(255) NOT NULL,
  `aktiv` tinyint(1) NOT NULL DEFAULT 1,
  `person_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `person`
--

CREATE TABLE `person` (
  `id` int(11) NOT NULL,
  `vorname` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `geburtsdatum` date DEFAULT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `verein`
--

CREATE TABLE `verein` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `strasse` varchar(100) NOT NULL,
  `hausnummer` int(11) NOT NULL,
  `postleitzahl` int(11) NOT NULL,
  `ort` varchar(100) NOT NULL,
  `subdomain` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `vereinszuordnung`
--

CREATE TABLE `vereinszuordnung` (
  `id` int(11) NOT NULL,
  `person_id` int(11) NOT NULL,
  `verein_id` int(11) NOT NULL,
  `rolle` enum('mitglied','admin') NOT NULL DEFAULT 'mitglied'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `benutzerkonto`
--
ALTER TABLE `benutzerkonto`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `benutzername` (`benutzername`),
  ADD KEY `person_id` (`person_id`);

--
-- Index pour la table `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `verein`
--
ALTER TABLE `verein`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `subdomain` (`subdomain`);

--
-- Index pour la table `vereinszuordnung`
--
ALTER TABLE `vereinszuordnung`
  ADD PRIMARY KEY (`id`),
  ADD KEY `person_id` (`person_id`),
  ADD KEY `verein_id` (`verein_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `benutzerkonto`
--
ALTER TABLE `benutzerkonto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `person`
--
ALTER TABLE `person`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `verein`
--
ALTER TABLE `verein`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `vereinszuordnung`
--
ALTER TABLE `vereinszuordnung`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `benutzerkonto`
--
ALTER TABLE `benutzerkonto`
  ADD CONSTRAINT `benutzerkonto_ibfk_1` FOREIGN KEY (`person_id`) REFERENCES `person` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `vereinszuordnung`
--
ALTER TABLE `vereinszuordnung`
  ADD CONSTRAINT `vereinszuordnung_ibfk_1` FOREIGN KEY (`person_id`) REFERENCES `person` (`id`),
  ADD CONSTRAINT `vereinszuordnung_ibfk_2` FOREIGN KEY (`verein_id`) REFERENCES `verein` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
