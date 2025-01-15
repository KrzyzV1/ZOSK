-- MySQL dump 10.13  Distrib 9.1.0, for Linux (x86_64)
--
-- Host: localhost    Database: zosk
-- ------------------------------------------------------
-- Server version	9.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dostawcy`
--

DROP TABLE IF EXISTS `dostawcy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dostawcy` (
  `dostawca_id` int NOT NULL AUTO_INCREMENT,
  `nazwa_firmy` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_polish_ci DEFAULT NULL,
  `adres` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_polish_ci DEFAULT NULL,
  `dane_kontaktowe` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_polish_ci DEFAULT NULL,
  `numer_nip` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_polish_ci DEFAULT NULL,
  PRIMARY KEY (`dostawca_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_polish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dostawcy`
--

LOCK TABLES `dostawcy` WRITE;
/*!40000 ALTER TABLE `dostawcy` DISABLE KEYS */;
INSERT INTO `dostawcy` VALUES (1,'Firma Alpha','ul. Zielona 12, Warszawa','123-456-789, alpha@firma.pl','1234567890'),(2,'Beta Solutions','ul. Długa 8, Kraków','234-567-890, beta@beta.pl','2345678901'),(3,'Gamma Sp. z o.o.','ul. Prosta 4, Wrocław','345-678-901, kontakt@gamma.pl','3456789012'),(4,'Delta Tech','ul. Główna 15, Gdańsk','456-789-012, delta@delta.pl','4567890123'),(5,'Epsilon Group','ul. Słoneczna 25, Poznań','567-890-123, epsilon@firma.pl','5678901234'),(6,'Zeta Systems','ul. Lipowa 7, Łódź','678-901-234, zeta@zeta.pl','6789012345'),(7,'Eta Logistics','ul. Cicha 9, Szczecin','789-012-345, eta@logistics.pl','7890123456'),(8,'Theta Supplies','ul. Morska 3, Gdynia','890-123-456, theta@supplies.pl','8901234567'),(9,'Iota Electronics','ul. Polna 18, Katowice','901-234-567, iota@electronics.pl','9012345678'),(10,'Kappa Energy','ul. Krótka 1, Lublin','012-345-678, kappa@energy.pl','0123456789');
/*!40000 ALTER TABLE `dostawcy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faktury`
--

DROP TABLE IF EXISTS `faktury`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faktury` (
  `faktura_id` int NOT NULL AUTO_INCREMENT,
  `numer_faktury` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_polish_ci DEFAULT NULL,
  `data_wystawienia` date DEFAULT NULL,
  `kwota` decimal(10,2) DEFAULT NULL,
  `status_platnosci` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_polish_ci DEFAULT NULL,
  `klient_id` int DEFAULT NULL,
  `dostawca_id` int DEFAULT NULL,
  PRIMARY KEY (`faktura_id`),
  KEY `Klient_id` (`klient_id`),
  KEY `Dostawca_id` (`dostawca_id`),
  CONSTRAINT `faktury_ibfk_1` FOREIGN KEY (`klient_id`) REFERENCES `klienci` (`klient_id`),
  CONSTRAINT `faktury_ibfk_2` FOREIGN KEY (`dostawca_id`) REFERENCES `dostawcy` (`dostawca_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_polish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faktury`
--

LOCK TABLES `faktury` WRITE;
/*!40000 ALTER TABLE `faktury` DISABLE KEYS */;
INSERT INTO `faktury` VALUES (1,'F-001/2024','2024-01-05',1234.56,'opłacona',1,2),(2,'F-002/2024','2024-01-10',4567.89,'nieopłacona',3,4),(3,'F-003/2024','2024-01-12',789.00,'częściowo opłacona',5,1),(4,'F-004/2024','2024-01-15',1500.50,'opłacona',2,3),(5,'F-005/2024','2024-01-20',2750.75,'nieopłacona',4,5),(6,'F-006/2024','2024-01-25',3400.00,'opłacona',6,2),(7,'F-007/2024','2024-02-01',1980.90,'częściowo opłacona',7,4),(8,'F-008/2024','2024-02-05',4123.45,'opłacona',8,3),(9,'F-009/2024','2024-02-10',500.00,'nieopłacona',9,1),(10,'F-010/2024','2024-02-15',3000.00,'opłacona',10,5);
/*!40000 ALTER TABLE `faktury` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `klienci`
--

DROP TABLE IF EXISTS `klienci`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `klienci` (
  `klient_id` int NOT NULL AUTO_INCREMENT,
  `nazwa_firmy` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_polish_ci DEFAULT NULL,
  `imie_nazwisko` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_polish_ci DEFAULT NULL,
  `adres` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_polish_ci DEFAULT NULL,
  `dane_kontaktowe` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_polish_ci DEFAULT NULL,
  `numer_nip` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_polish_ci DEFAULT NULL,
  PRIMARY KEY (`klient_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_polish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `klienci`
--

LOCK TABLES `klienci` WRITE;
/*!40000 ALTER TABLE `klienci` DISABLE KEYS */;
INSERT INTO `klienci` VALUES (1,'Firma Omega','Jan Kowalski','ul. Rynek 10, Warszawa','111-222-333, omega@firma.pl','1234567890'),(2,'Sigma Sp. z o.o.','Anna Nowak','ul. Kolejowa 5, Kraków','222-333-444, sigma@firma.pl','2345678901'),(3,'Lambda Solutions','Piotr Wiśniewski','ul. Leśna 14, Wrocław','333-444-555, lambda@solutions.pl','3456789012'),(4,'Mu Logistics','Katarzyna Zielińska','ul. Spacerowa 8, Gdańsk','444-555-666, mu@logistics.pl','4567890123'),(5,'Nu Tech','Tomasz Kamiński','ul. Jasna 22, Poznań','555-666-777, nu@tech.pl','5678901234'),(6,'Xi Group','Marta Wojciechowska','ul. Sadowa 18, Łódź','666-777-888, xi@group.pl','6789012345'),(7,'Omicron Supplies','Adam Lewandowski','ul. Kręta 30, Szczecin','777-888-999, omicron@supplies.pl','7890123456'),(8,'Rho Electronics','Ewa Zawadzka','ul. Wiejska 2, Gdynia','888-999-000, rho@electronics.pl','8901234567'),(9,'Tau Energy','Łukasz Jankowski','ul. Prusa 11, Katowice','999-000-111, tau@energy.pl','9012345678'),(10,'Upsilon Solutions','Joanna Górska','ul. Łąkowa 9, Lublin','000-111-222, upsilon@solutions.pl','0123456789');
/*!40000 ALTER TABLE `klienci` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produkt`
--

DROP TABLE IF EXISTS `produkt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produkt` (
  `produktId` int NOT NULL AUTO_INCREMENT,
  `nazwa` varchar(255) COLLATE utf8mb3_polish_ci DEFAULT NULL,
  `kategoria` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_polish_ci DEFAULT NULL,
  `numerSeryjny` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_polish_ci DEFAULT NULL,
  `cena` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`produktId`)
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_polish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produkt`
--

LOCK TABLES `produkt` WRITE;
/*!40000 ALTER TABLE `produkt` DISABLE KEYS */;
INSERT INTO `produkt` VALUES (101,'Procesor Intel Core i5-12600K','Procesory','SN101001',1299.99),(102,'Karta graficzna NVIDIA GeForce RTX 3060','Karty graficzne','SN102002',2499.99),(103,'Płyta główna ASUS ROG STRIX B550-F','Płyty główne','SN103003',799.99),(104,'Dysk SSD Samsung 970 EVO Plus 1TB','Dyski SSD','SN104004',499.99),(105,'Pamięć RAM Corsair Vengeance 16GB DDR4','Pamięci RAM','SN105005',399.99),(106,'Zasilacz Pure Power 11 600W','Zasilacze','SN106006',349.99),(107,'Obudowa SilentiumPC Armis AR6','Obudowy','SN107007',299.99),(108,'Monitor LG UltraGear 27GN950-B 4K 144Hz','Monitory','SN108008',3499.99),(109,'Laptop Pro','Elektronika','SN-12345',2500.00),(110,'Smartphone XL','Elektronika','SN-67890',1200.00),(111,'Klawiatura','Peryferia','SN-11223',150.00),(112,'Mysz optyczna','Peryferia','SN-44556',70.00),(113,'Monitor HD','Elektronika','SN-77889',800.00),(114,'Słuchawki BT','Akcesoria','SN-99123',200.00),(115,'Drukarka','Urządzenia','SN-33344',600.00),(116,'Router WiFi','Elektronika','SN-55566',350.00),(117,'Tablet Mini','Elektronika','SN-77788',900.00),(118,'Powerbank','Akcesoria','SN-88899',120.00),(119,'Dysk SSD 1TB','Pamięć','SN-99900',500.00),(120,'Projektor HD','Elektronika','SN-22211',1500.00);
/*!40000 ALTER TABLE `produkt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stan_magazynowy`
--

DROP TABLE IF EXISTS `stan_magazynowy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stan_magazynowy` (
  `stanId` int NOT NULL AUTO_INCREMENT,
  `produktId` int DEFAULT NULL,
  `ilosc` int DEFAULT NULL,
  `lokalizacja` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_polish_ci DEFAULT NULL,
  PRIMARY KEY (`stanId`),
  KEY `Produkt_id` (`produktId`),
  CONSTRAINT `stan_magazynowy_ibfk_1` FOREIGN KEY (`produktId`) REFERENCES `produkt` (`produktId`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_polish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stan_magazynowy`
--

LOCK TABLES `stan_magazynowy` WRITE;
/*!40000 ALTER TABLE `stan_magazynowy` DISABLE KEYS */;
INSERT INTO `stan_magazynowy` VALUES (1,101,150,'Magazyn A'),(2,102,30,'Magazyn B'),(3,103,20,'Magazyn A'),(4,104,100,'Magazyn A'),(5,105,75,'Magazyn B'),(6,106,40,'Magazyn A'),(7,107,30,'Magazyn B'),(8,108,75,'Magazyn A'),(9,109,20,'Magazyn C'),(10,110,40,'Magazyn A'),(11,111,60,'Magazyn D'),(12,112,25,'Magazyn B'),(13,113,90,'Magazyn C'),(14,114,15,'Magazyn A'),(15,115,70,'Magazyn D'),(16,116,35,'Magazyn B'),(17,117,80,'Magazyn C'),(18,118,45,'Magazyn A'),(19,119,55,'Magazyn D'),(20,120,65,'Magazyn B');
/*!40000 ALTER TABLE `stan_magazynowy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transakcje`
--

DROP TABLE IF EXISTS `transakcje`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transakcje` (
  `transakcja_id` int NOT NULL AUTO_INCREMENT,
  `produkt_id` int DEFAULT NULL,
  `kwota` decimal(10,2) DEFAULT NULL,
  `ilosc` int DEFAULT NULL,
  `data_transakcji` date DEFAULT NULL,
  `numer_partii` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_polish_ci DEFAULT NULL,
  `numer_zamowienia` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_polish_ci DEFAULT NULL,
  `magazynier_id` int DEFAULT NULL,
  `klient_id` int DEFAULT NULL,
  `dostawca_id` int DEFAULT NULL,
  `zamowienia_id` int DEFAULT NULL,
  PRIMARY KEY (`transakcja_id`),
  KEY `Produkt_id` (`produkt_id`),
  KEY `Klient_id` (`klient_id`),
  KEY `Dostawca_id` (`dostawca_id`),
  KEY `Zamowienia_id` (`zamowienia_id`),
  CONSTRAINT `transakcje_ibfk_1` FOREIGN KEY (`produkt_id`) REFERENCES `produkt` (`produktId`),
  CONSTRAINT `transakcje_ibfk_2` FOREIGN KEY (`klient_id`) REFERENCES `klienci` (`klient_id`),
  CONSTRAINT `transakcje_ibfk_3` FOREIGN KEY (`dostawca_id`) REFERENCES `dostawcy` (`dostawca_id`),
  CONSTRAINT `transakcje_ibfk_4` FOREIGN KEY (`zamowienia_id`) REFERENCES `zamowienia` (`zamowienia_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_polish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transakcje`
--

LOCK TABLES `transakcje` WRITE;
/*!40000 ALTER TABLE `transakcje` DISABLE KEYS */;
INSERT INTO `transakcje` VALUES (1,101,100.50,2,'2024-01-01','PART123','1',1,1,1,1),(2,102,200.75,5,'2024-01-05','PART124','2',2,2,2,2),(3,103,150.00,3,'2024-01-10','PART125','3',3,3,3,3),(4,104,80.25,10,'2024-01-15','PART126','4',4,4,4,4),(5,105,300.40,1,'2024-01-20','PART127','5',5,5,5,5),(6,106,50.00,6,'2024-01-25','PART128','6',6,6,6,6),(7,107,120.10,4,'2024-01-30','PART129','7',7,7,7,7),(8,108,90.30,8,'2024-02-01','PART130','8',8,8,8,8),(9,109,130.50,3,'2024-02-05','PART131','9',9,9,9,9),(10,110,250.75,2,'2024-02-10','PART132','10',10,10,10,10);
/*!40000 ALTER TABLE `transakcje` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zamowienia`
--

DROP TABLE IF EXISTS `zamowienia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `zamowienia` (
  `zamowienia_id` int NOT NULL AUTO_INCREMENT,
  `data_zamowienia` date DEFAULT NULL,
  `status` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_polish_ci DEFAULT NULL,
  `dostawca_id` int DEFAULT NULL,
  PRIMARY KEY (`zamowienia_id`),
  KEY `Dostawca_id` (`dostawca_id`),
  CONSTRAINT `zamowienia_ibfk_1` FOREIGN KEY (`dostawca_id`) REFERENCES `dostawcy` (`dostawca_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_polish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zamowienia`
--

LOCK TABLES `zamowienia` WRITE;
/*!40000 ALTER TABLE `zamowienia` DISABLE KEYS */;
INSERT INTO `zamowienia` VALUES (1,'2024-01-01','zrealizowane',1),(2,'2024-01-05','oczekujące',2),(3,'2024-01-10','anulowane',3),(4,'2024-01-15','zrealizowane',4),(5,'2024-01-20','oczekujące',5),(6,'2024-01-25','zrealizowane',1),(7,'2024-01-30','oczekujące',2),(8,'2024-02-01','zrealizowane',3),(9,'2024-02-05','anulowane',4),(10,'2024-02-10','zrealizowane',5);
/*!40000 ALTER TABLE `zamowienia` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-07 17:00:11
