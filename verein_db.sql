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
-- Base de données : `verein_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `einsatz`
--

CREATE TABLE `einsatz` (
  `id` int(11) NOT NULL,
  `datum` datetime NOT NULL,
  `beschreibung` text DEFAULT NULL,
  `ort` varchar(255) DEFAULT NULL,
  `art` enum('brand','hilfeleistung','sonstiges') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `ff_mitglied`
--

CREATE TABLE `ff_mitglied` (
  `id` int(11) NOT NULL,
  `person_id` int(11) NOT NULL,
  `eintrittsdatum` date NOT NULL,
  `austrittsdatum` date DEFAULT NULL,
  `status` enum('aktiv','anwärter','ausgetreten') NOT NULL DEFAULT 'aktiv'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `funktion_ff`
--

CREATE TABLE `funktion_ff` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `ist_admin` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `funktion_jf`
--

CREATE TABLE `funktion_jf` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `ist_admin` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `jf_erziehungsberechtigter`
--

CREATE TABLE `jf_erziehungsberechtigter` (
  `id` int(11) NOT NULL,
  `jf_mitglied_id` int(11) NOT NULL,
  `person_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `jf_mitglied`
--

CREATE TABLE `jf_mitglied` (
  `id` int(11) NOT NULL,
  `person_id` int(11) NOT NULL,
  `eintrittsdatum` date NOT NULL,
  `austrittsdatum` date DEFAULT NULL,
  `status` enum('aktiv','anwärter','ausgetreten') NOT NULL DEFAULT 'aktiv'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `mitglied_funktionen`
--

CREATE TABLE `mitglied_funktionen` (
  `id` int(11) NOT NULL,
  `mitglied_id` int(11) NOT NULL,
  `funktion_id` int(11) NOT NULL,
  `typ` enum('ff','jf') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `mitglied_login`
--

CREATE TABLE `mitglied_login` (
  `id` int(11) NOT NULL,
  `benutzer_id` int(11) NOT NULL,
  `mitglied_id` int(11) NOT NULL,
  `ty` enum('ff','jf') NOT NULL
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
-- Structure de la table `teilnahme`
--

CREATE TABLE `teilnahme` (
  `id` int(11) NOT NULL,
  `mitglied_id` int(11) NOT NULL,
  `veranstaltung_id` int(11) NOT NULL,
  `typ` enum('einsatz','uebung') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `uebungsabend`
--

CREATE TABLE `uebungsabend` (
  `id` int(11) NOT NULL,
  `datum` datetime NOT NULL,
  `thema` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `einsatz`
--
ALTER TABLE `einsatz`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `ff_mitglied`
--
ALTER TABLE `ff_mitglied`
  ADD PRIMARY KEY (`id`),
  ADD KEY `person_id` (`person_id`);

--
-- Index pour la table `funktion_ff`
--
ALTER TABLE `funktion_ff`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `funktion_jf`
--
ALTER TABLE `funktion_jf`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `jf_erziehungsberechtigter`
--
ALTER TABLE `jf_erziehungsberechtigter`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jf_mitglied_id` (`jf_mitglied_id`),
  ADD KEY `person_id` (`person_id`);

--
-- Index pour la table `jf_mitglied`
--
ALTER TABLE `jf_mitglied`
  ADD PRIMARY KEY (`id`),
  ADD KEY `person_id` (`person_id`);

--
-- Index pour la table `mitglied_funktionen`
--
ALTER TABLE `mitglied_funktionen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mitglied_id` (`mitglied_id`),
  ADD KEY `funktion_id` (`funktion_id`);

--
-- Index pour la table `mitglied_login`
--
ALTER TABLE `mitglied_login`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `teilnahme`
--
ALTER TABLE `teilnahme`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mitglied_id` (`mitglied_id`);

--
-- Index pour la table `uebungsabend`
--
ALTER TABLE `uebungsabend`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `einsatz`
--
ALTER TABLE `einsatz`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `ff_mitglied`
--
ALTER TABLE `ff_mitglied`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `funktion_ff`
--
ALTER TABLE `funktion_ff`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `funktion_jf`
--
ALTER TABLE `funktion_jf`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `jf_erziehungsberechtigter`
--
ALTER TABLE `jf_erziehungsberechtigter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `jf_mitglied`
--
ALTER TABLE `jf_mitglied`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `mitglied_funktionen`
--
ALTER TABLE `mitglied_funktionen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `mitglied_login`
--
ALTER TABLE `mitglied_login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `person`
--
ALTER TABLE `person`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `teilnahme`
--
ALTER TABLE `teilnahme`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `uebungsabend`
--
ALTER TABLE `uebungsabend`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `ff_mitglied`
--
ALTER TABLE `ff_mitglied`
  ADD CONSTRAINT `ff_mitglied_ibfk_1` FOREIGN KEY (`person_id`) REFERENCES `person` (`id`);

--
-- Contraintes pour la table `jf_erziehungsberechtigter`
--
ALTER TABLE `jf_erziehungsberechtigter`
  ADD CONSTRAINT `jf_erziehungsberechtigter_ibfk_1` FOREIGN KEY (`jf_mitglied_id`) REFERENCES `jf_mitglied` (`id`),
  ADD CONSTRAINT `jf_erziehungsberechtigter_ibfk_2` FOREIGN KEY (`person_id`) REFERENCES `person` (`id`);

--
-- Contraintes pour la table `jf_mitglied`
--
ALTER TABLE `jf_mitglied`
  ADD CONSTRAINT `jf_mitglied_ibfk_1` FOREIGN KEY (`person_id`) REFERENCES `person` (`id`);

--
-- Contraintes pour la table `mitglied_funktionen`
--
ALTER TABLE `mitglied_funktionen`
  ADD CONSTRAINT `mitglied_funktionen_ibfk_1` FOREIGN KEY (`mitglied_id`) REFERENCES `ff_mitglied` (`id`),
  ADD CONSTRAINT `mitglied_funktionen_ibfk_2` FOREIGN KEY (`funktion_id`) REFERENCES `funktion_ff` (`id`);

--
-- Contraintes pour la table `teilnahme`
--
ALTER TABLE `teilnahme`
  ADD CONSTRAINT `teilnahme_ibfk_1` FOREIGN KEY (`mitglied_id`) REFERENCES `ff_mitglied` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
