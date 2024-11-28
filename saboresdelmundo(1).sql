-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-06-2024 a las 18:55:16
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `saboresdelmundo`
--
CREATE DATABASE IF NOT EXISTS `saboresdelmundo` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `saboresdelmundo`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mesas`
--

DROP TABLE IF EXISTS `mesas`;
CREATE TABLE `mesas` (
  `idMesa` int(255) NOT NULL,
  `mesa` varchar(255) NOT NULL,
  `capacidad` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mesas`
--

INSERT INTO `mesas` (`idMesa`, `mesa`, `capacidad`) VALUES
(1, 'Terraza N1', 4),
(2, 'Interior N1', 2),
(3, 'Terraza N2', 3),
(4, 'Interior N2', 5),
(5, 'Terraza N3', 5),
(6, 'Interior N3', 4),
(7, 'Terraza N4', 2),
(8, 'Interior N4', 6),
(9, 'Terraza N5', 3),
(10, 'Interior N5', 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mesasextras`
--

DROP TABLE IF EXISTS `mesasextras`;
CREATE TABLE `mesasextras` (
  `idMesasExtras` int(255) NOT NULL,
  `mesasextra` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mesasextras`
--

INSERT INTO `mesasextras` (`idMesasExtras`, `mesasextra`) VALUES
(1, 30);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE `productos` (
  `idProducto` int(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `cantidad` int(255) NOT NULL,
  `categoria` varchar(255) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `alergenos` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idProducto`, `nombre`, `cantidad`, `categoria`, `precio`, `alergenos`) VALUES
(1, 'Agua sin Gas', 5, 'Agua', 2.50, 'No'),
(2, 'Agua con Gas', 18, 'Agua', 3.00, 'No'),
(3, 'Coca-Cola', 50, 'Refrescos', 2.00, 'No'),
(4, 'Nestea', 50, 'Refrescos', 2.50, 'No'),
(5, 'Aquarius', 50, 'Refrescos', 2.50, 'No'),
(6, 'Fanta Naranja', 50, 'Refrescos', 2.00, 'No'),
(7, 'Coca-Cola Zero', 49, 'Refrescos', 2.00, 'No'),
(8, 'Fanta Limon', 50, 'Refrescos', 2.00, 'No'),
(9, 'Cerveza', 13, 'Alcohol', 2.00, 'No'),
(10, 'Copa de vino', 15, 'Alcohol', 3.50, 'No'),
(11, 'Plato de habas con jamón y huevos', 29, 'Entrantes', 6.50, 'Huevo'),
(12, 'Plato de jamón', 28, 'Entrantes', 6.50, 'No'),
(13, 'Plato de jamón y queso', 30, 'Entrantes', 11.00, 'Huevo'),
(14, 'Croquetas', 30, 'Entrantes', 9.00, 'Gluten, Huevo'),
(15, 'Salchichón Ibérico', 29, 'Entrantes', 7.50, 'Lacteos, Soja, Dioxido de sulfitos'),
(16, 'Patatas Bravas', 30, 'Entrantes', 4.50, 'No'),
(17, 'Calamares Fritos', 30, 'Entrantes', 5.00, 'Gluten, Moluscos'),
(18, 'Tabla de Quesos', 29, 'Entrantes', 9.50, 'Cascara, Lacteos'),
(19, 'Lubina al horno con patatas', 35, 'Pescado', 15.00, 'Pescado'),
(20, 'Bacalao al pil pil', 35, 'Pescado', 10.00, 'Pescado'),
(21, 'Besugo al horno', 35, 'Pescado', 20.00, 'Pescado'),
(22, 'Caldero de merluza y patatas al estilo murciano', 35, 'Pescado', 20.00, 'Pescado, Cascara'),
(23, 'Albóndigas de rape con salsa de cava', 35, 'Pescado', 9.00, 'Pescado, Crustaceos, Huevo, Gluten'),
(24, 'Salmón relleno de crema de espinacas con salsa holandesa', 35, 'Pescado', 10.00, 'Pescado, Huevo, Lacteos, Mostaza'),
(25, 'Atún a la plancha con pesto de aguacate y verduras', 35, 'Pescado', 12.00, 'Pescado, Cascara'),
(26, 'Bacalao a la riojana, con salsa de pimientos', 35, 'Pescado', 12.00, 'Gluten, Pescado'),
(27, 'Solomillo de cerdo al ajillo con patatas', 40, 'Carne', 13.00, 'Gluten'),
(28, 'Cordero al chilindron', 40, 'Carne', 12.00, 'Gluten'),
(29, 'Escalopines de ternera con arroz', 40, 'Carne', 16.50, 'Gluten'),
(30, 'Codillo al horno con patatas', 40, 'Carne', 20.00, 'Gluten'),
(31, 'Brochetas de ternera', 40, 'Carne', 10.00, 'Gluten'),
(32, 'Carrillada en salsa con patatas', 40, 'Carne', 10.00, 'Gluten'),
(33, 'Pinchos de pollo', 37, 'Carne', 11.00, 'Gluten'),
(34, 'Estofado de ternera', 40, 'Carne', 13.50, 'Gluten'),
(35, 'Patatas fritas con huevos fritos y croquetas', 30, 'Comida infantil', 8.00, 'Gluten, Huevos, Lacteos'),
(36, 'Hamburguesa con patatas fritas', 29, 'Comida infantil', 5.00, 'Gluten, Huevos, Lacteos'),
(37, 'Pollo rebozado con patatas fritas', 30, 'Comida infantil', 7.50, 'Gluten, Huevos'),
(38, 'Nuggets de pollo', 30, 'Comida infantil', 4.50, 'Gluten, Huevos, Lacteos'),
(39, 'Nuggets de pescado', 30, 'Comida infantil', 4.50, 'Gluten, Huevos, Lacteos, Mostaza'),
(40, 'Spaguettis a la boloñesa', 30, 'Comida infantil', 8.00, 'Gluten, Huevos, Lacteos'),
(41, 'Flamenquin con patatas', 30, 'Comida infantil', 10.00, 'Gluten, Huevos'),
(42, 'San Jacobos con patatas', 30, 'Comida infantil', 13.50, 'Gluten, Huevos, Lacteos'),
(43, 'Tarta de Whisky', 25, 'Postres', 3.50, 'Gluten, Huevos, Lacteos'),
(44, 'Cafe', 25, 'Postres', 1.50, 'Gluten'),
(45, 'Tarta de queso', 25, 'Postres', 4.00, 'Gluten, Huevos, Lacteos'),
(46, 'Mouse de chocolate', 24, 'Postres', 3.00, 'Gluten, Huevos, Lacteos'),
(47, 'Tiramisu', 25, 'Postres', 4.00, 'Gluten, Huevos, Lacteos'),
(62, 'Enslada de garbanzos', 30, 'Entrantes', 12.50, 'Apio, Huevo, Lacteos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

DROP TABLE IF EXISTS `reservas`;
CREATE TABLE `reservas` (
  `idReserva` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `telefono` int(255) NOT NULL,
  `fecha` date NOT NULL,
  `tramohorario` varchar(255) NOT NULL,
  `mesa` varchar(255) NOT NULL,
  `capacidad` int(255) NOT NULL,
  `capacidadextra` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`idReserva`, `nombre`, `telefono`, `fecha`, `tramohorario`, `mesa`, `capacidad`, `capacidadextra`) VALUES
(6, 'David Jimenez', 648823976, '2024-05-31', '1-3', 'Terraza N1', 4, 6),
(8, 'Pablo', 648823976, '2024-05-31', '1-3', 'Terraza N2', 3, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id` int(255) NOT NULL,
  `dni` varchar(255) NOT NULL,
  `apellidos` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `fechaNacimiento` varchar(255) NOT NULL,
  `telefono` int(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `localidad` varchar(255) NOT NULL,
  `provincia` varchar(255) NOT NULL,
  `calle` varchar(255) NOT NULL,
  `cp` int(255) NOT NULL,
  `tipo` int(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `dni`, `apellidos`, `nombre`, `fechaNacimiento`, `telefono`, `correo`, `localidad`, `provincia`, `calle`, `cp`, `tipo`, `password`, `token`) VALUES
(1, '21026478Q', 'Jimenez Villena', 'David', '2003-01-15', 648823976, 'Usuario1@saboresdelmundo.com', 'BENALMADENA', 'MALAGA', 'AGUACATE', 29014, 1, '$2y$15$ogXcQvkM5g7l.TO4O7Q05uE3Pi8QvcZegu0SJAA36LILMJBPoX5WK', '45645a27c4f1adc8a7a835976064a86d'),
(2, '25254786T', 'Valverde Lopez', 'Pablo', '2000-02-19', 652214784, 'Usuario2@saboresdelmundo.com', 'ZARAGOZA', 'ZARAGOZA', 'SUPER MARIO BROS', 50022, 1, '$2y$15$nKP1XxdkekfbYq8L/nu6iOv3lCpOghj1rLhE/NkfichLfzEnLOCsa', '9d7311ba459f9e45ed746755a32dcd11'),
(3, '784478534O', 'Valverde Ibañez', 'Ruben', '2002-08-15', 647124574, 'Usuario3@saboresdelmundo.com', 'ZARAGOZA', 'ZARAGOZA', 'TETRIS', 50022, 1, '$2y$15$nKP1XxdkekfbYq8L/nu6iOv3lCpOghj1rLhE/NkfichLfzEnLOCsa', '9d7311ba459f9e45ed746755a32dcd11'),
(4, '23064747A', 'Admin', 'Admin', '2003-01-15', 648823976, 'Admin@saboresdelmundo.com', 'ALCALA LA REAL', 'JAEN', 'REPUBLICA ARGENTINA', 23680, 2, '$2y$15$CJFnY3/SydQvKbydCvacLukdmc4XSDBcZpI.G7mtIEz3tg5ulobrq', '58e4d44e550d0f7ee0a23d6b02d9b0db'),
(7, '25252547A', 'Navarro Lopez', 'Antonio', '1997-10-25', 654741268, 'davidjimenezvillena@gmail.com', 'ALCUESCAR', 'CACERES', 'AIRE', 23680, 1, '$2y$15$jRA9DNMSIjxkGhxpgXAjZecQ3vAJYHwhTf9NMiI3tXGIYYxIVCrPu', 'fe51510c80bfd6e5d78a164cd5b1f688'),
(12, '25247547A', 'Flores Villena', 'Pepito', '1995-02-18', 648741742, 'Usuario4@saboresdelmundo.com', 'ALCALA LA REAL', 'JAEN', 'ALFONSO XI', 23680, 0, '$2y$15$rnof9nSL.GCCZM.lHLjX.uwHlPyI0Y4EBklQtFun261xbLwmRVENO', 'cfecdb276f634854f3ef915e2e980c31'),
(13, '25258547A', 'Flores ', 'Pepito', '1995-03-18', 648741256, 'Usuario5@saboresdelmundo.com', 'ALCALA LA REAL', 'JAEN', 'ALMENDRO', 23680, 0, '$2y$15$IjSrhipVERXG1RD8R1PhIeIudw/EUzao61HcJE4wHYyHzV98tNAcC', '01d8bae291b1e4724443375634ccfa0e');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `mesas`
--
ALTER TABLE `mesas`
  ADD PRIMARY KEY (`idMesa`);

--
-- Indices de la tabla `mesasextras`
--
ALTER TABLE `mesasextras`
  ADD PRIMARY KEY (`idMesasExtras`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idProducto`);

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`idReserva`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `mesas`
--
ALTER TABLE `mesas`
  MODIFY `idMesa` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `mesasextras`
--
ALTER TABLE `mesasextras`
  MODIFY `idMesasExtras` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `idProducto` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `idReserva` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
