-- MariaDB dump 10.17  Distrib 10.4.11-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: collecte
-- ------------------------------------------------------
-- Server version	10.4.11-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `enquete_users`
--

DROP TABLE IF EXISTS `enquete_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `enquete_users` (
  `user_id` bigint(20) NOT NULL,
  `enquete_id` bigint(20) NOT NULL,
  PRIMARY KEY (`user_id`,`enquete_id`),
  KEY `FKlne8s6ekhknw1sin42mvjeir8` (`enquete_id`),
  CONSTRAINT `FKh6nhqsrc1m9qnygim06r1pxwq` FOREIGN KEY (`enquete_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `FKlne8s6ekhknw1sin42mvjeir8` FOREIGN KEY (`enquete_id`) REFERENCES `questionnaire` (`id`),
  CONSTRAINT `FKpwhelg3ktorhmdhlx9h7x13ja` FOREIGN KEY (`user_id`) REFERENCES `questionnaire` (`id`),
  CONSTRAINT `FKt9rwtb3jekbqmn1uu4roi6bag` FOREIGN KEY (`user_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enquete_users`
--

LOCK TABLES `enquete_users` WRITE;
/*!40000 ALTER TABLE `enquete_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `enquete_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enqueteur_questionnaire`
--

DROP TABLE IF EXISTS `enqueteur_questionnaire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `enqueteur_questionnaire` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `enqueteur_id` bigint(20) NOT NULL,
  `questionnaire_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKjala3smos7qm8dasirws0iot3` (`questionnaire_id`),
  KEY `FK5408jb5ducfegdfyjrw9ppjgr` (`enqueteur_id`),
  CONSTRAINT `FK1aa4iuwqofhfrkru3jsof3rx9` FOREIGN KEY (`enqueteur_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FK5408jb5ducfegdfyjrw9ppjgr` FOREIGN KEY (`enqueteur_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKjala3smos7qm8dasirws0iot3` FOREIGN KEY (`questionnaire_id`) REFERENCES `questionnaire` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enqueteur_questionnaire`
--

LOCK TABLES `enqueteur_questionnaire` WRITE;
/*!40000 ALTER TABLE `enqueteur_questionnaire` DISABLE KEYS */;
/*!40000 ALTER TABLE `enqueteur_questionnaire` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `suggestions` varchar(255) DEFAULT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `questionnaire_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK5a4p6bl440c9amsq08rs546wu` (`questionnaire_id`),
  CONSTRAINT `FK5a4p6bl440c9amsq08rs546wu` FOREIGN KEY (`questionnaire_id`) REFERENCES `questionnaire` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES (2,'Male\nFemale','question 1 updated','text',2),(3,'Male\nFemale','question 1 updated','text',2);
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questionnaire`
--

DROP TABLE IF EXISTS `questionnaire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questionnaire` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `creation_date` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `titre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questionnaire`
--

LOCK TABLES `questionnaire` WRITE;
/*!40000 ALTER TABLE `questionnaire` DISABLE KEYS */;
INSERT INTO `questionnaire` VALUES (2,'DR4-D','2020-12-12 00:00:00','Enquete SIDA','Questionnaire 3 updated pdate'),(3,'DR4-D','2020-12-12 00:00:00','Enquete SIDA','Questionnaire 3'),(4,'XD-30','2020-12-17 00:02:08','Descri[tio','Questionnaire'),(5,'CODE-39','2020-12-19 02:33:17','ert','Questionnaire 2 from front'),(6,'CODE-39','2020-12-19 02:33:28','ert','Questionnaire 2 from front'),(7,'CODE-3','2020-12-19 02:46:47','d','Questionnaire 2 from front'),(8,'CODE-33','2020-12-19 04:04:51','des','Questionnaire 2 from front'),(9,'VIH-10-20','2020-12-24 09:34:06','on veut savoir comment .....','Enquete sur le VIH'),(10,'CODE-333','2020-12-26 11:00:06','covid dans la province du Nord-Kivu','Enquete sur le covid');
/*!40000 ALTER TABLE `questionnaire` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questionnaire_questions`
--

DROP TABLE IF EXISTS `questionnaire_questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questionnaire_questions` (
  `questionnaire_id` bigint(20) NOT NULL,
  `questions_id` bigint(20) NOT NULL,
  UNIQUE KEY `UK_58btvncd4t4jltqukumokquh4` (`questions_id`),
  KEY `FK1ckstyto7qd0p722mwymyif1j` (`questionnaire_id`),
  CONSTRAINT `FK1ckstyto7qd0p722mwymyif1j` FOREIGN KEY (`questionnaire_id`) REFERENCES `questionnaire` (`id`),
  CONSTRAINT `FK2y8sue0cxphxq8l3qjg2idcdi` FOREIGN KEY (`questions_id`) REFERENCES `question` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questionnaire_questions`
--

LOCK TABLES `questionnaire_questions` WRITE;
/*!40000 ALTER TABLE `questionnaire_questions` DISABLE KEYS */;
/*!40000 ALTER TABLE `questionnaire_questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reponse`
--

DROP TABLE IF EXISTS `reponse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reponse` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `enquete` varchar(255) DEFAULT NULL,
  `valeur` varchar(255) DEFAULT NULL,
  `question_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKp0yq2hox7fyw8rpbhx9t514rt` (`question_id`),
  CONSTRAINT `FKp0yq2hox7fyw8rpbhx9t514rt` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reponse`
--

LOCK TABLES `reponse` WRITE;
/*!40000 ALTER TABLE `reponse` DISABLE KEYS */;
/*!40000 ALTER TABLE `reponse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_nb4h0p6txrmfc0xbrd1kglp9t` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `creation_date` datetime DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_ob8kqyqqgmefl0aco34akdtpe` (`email`),
  UNIQUE KEY `UK_sb8bbouer5wak8vyiiy4pf2bx` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `FKh8ciramu9cc9q3qcqiv4ue8a6` (`role_id`),
  CONSTRAINT `FKh8ciramu9cc9q3qcqiv4ue8a6` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `FKhfh9dx7w3ubf1co1vdev94g3f` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `creation_date` datetime DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_6dotkott2kjsp8vw4d0m25fb7` (`email`),
  UNIQUE KEY `UK_r43af9ap4edm43mmtq01oddj6` (`username`),
  UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`),
  UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-03  7:02:20
