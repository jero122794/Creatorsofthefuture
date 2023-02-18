-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: creatorsofthefuture
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `apellidos` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `celular` varchar(20) DEFAULT NULL,
  `rol` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `academia` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `linkedin_url` varchar(255) DEFAULT NULL,
  `cv_url` varchar(255) DEFAULT NULL,
  `views_count` int DEFAULT NULL,
  `last_viewed` datetime DEFAULT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Juan','Pérez','juan.perez@gmail.com','5551234567','Desarrollador','Experto en programación web','https://example.com/juanperez.jpg','Licenciatura en Informática','https://www.linkedin.com/in/juanperez','https://example.com/cv_juanperez.pdf',10,'2023-02-15 10:30:00',1),(2,'María','García','maria.garcia@gmail.com','5552345678','Diseñadora','Especialista en diseño gráfico','https://example.com/mariagarcia.jpg','Licenciatura en Diseño Gráfico','https://www.linkedin.com/in/mariagarcia','https://example.com/cv_mariagarcia.pdf',5,'2023-02-14 15:45:00',0),(3,'Pedro','López','pedro.lopez@gmail.com','5553456789','Gerente de Proyectos','Experiencia en liderazgo de equipos','https://example.com/pedrolopez.jpg','Maestría en Administración de Empresas','https://www.linkedin.com/in/pedrolopez','https://example.com/cv_pedrolopez.pdf',8,'2023-02-13 20:00:00',0),(4,'Ana','Martínez','ana.martinez@gmail.com','5554567890','Analista de Datos','Especialista en minería de datos','https://example.com/anamartinez.jpg','Maestría en Ciencia de Datos','https://www.linkedin.com/in/anamartinez','https://example.com/cv_anamartinez.pdf',3,'2023-02-12 11:15:00',0),(5,'Carlos','Ramírez','carlos.ramirez@gmail.com','5555678901','Ingeniero de Software','Experto en desarrollo de aplicaciones móviles','https://example.com/carlosramirez.jpg','Licenciatura en Ingeniería de Sistemas','https://www.linkedin.com/in/carlosramirez','https://example.com/cv_carlosramirez.pdf',7,'2023-02-11 16:30:00',0),(6,'Laura','González','laura.gonzalez@gmail.com','5556789012','Especialista en Marketing','Conocimiento en estrategias de marketing digital','https://example.com/lauragonzalez.jpg','Maestría en Marketing Digital','https://www.linkedin.com/in/lauragonzalez','https://example.com/cv_lauragonzalez.pdf',2,'2023-02-10 21:45:00',0);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'creatorsofthefuture'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-17 21:01:14
