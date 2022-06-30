-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-04-2022 a las 01:40:50
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hospital_ia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `appointments`
--

CREATE TABLE `appointments` (
  `id_appointment` int(11) NOT NULL,
  `date_attention_appointment` date NOT NULL,
  `hour_attention_appointment` time NOT NULL,
  `date_register_appointment` date NOT NULL,
  `id_doctor` int(11) NOT NULL,
  `id_patient` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carts`
--

CREATE TABLE `carts` (
  `id_cart` int(11) NOT NULL,
  `amount_cart` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctor`
--

CREATE TABLE `doctor` (
  `id_doctor` int(11) NOT NULL,
  `date_start_doctor` int(11) NOT NULL,
  `payment_doctor` int(11) NOT NULL,
  `id_speciality` int(11) NOT NULL,
  `id_person` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hours`
--

CREATE TABLE `hours` (
  `id_hour` int(11) NOT NULL,
  `day_attention_hour` varchar(30) NOT NULL,
  `hour_start_hour` time NOT NULL,
  `hour_finished_hour` time NOT NULL,
  `id_doctor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2022_04_06_010118_create_doctor_table', 0),
(2, '2022_04_06_010118_create_modules_table', 0),
(3, '2022_04_06_010118_create_operations_table', 0),
(4, '2022_04_06_010118_create_patients_table', 0),
(5, '2022_04_06_010118_create_people_table', 0),
(6, '2022_04_06_010118_create_role_table', 0),
(7, '2022_04_06_010118_create_role_operations_table', 0),
(8, '2022_04_06_010118_create_speciallity_table', 0),
(9, '2022_04_06_010118_create_user_table', 0),
(10, '2022_04_06_010119_add_foreign_keys_to_doctor_table', 0),
(11, '2022_04_06_010119_add_foreign_keys_to_operations_table', 0),
(12, '2022_04_06_010119_add_foreign_keys_to_patients_table', 0),
(13, '2022_04_06_010119_add_foreign_keys_to_role_operations_table', 0),
(14, '2022_04_06_010119_add_foreign_keys_to_user_table', 0),
(15, '2019_12_14_000001_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modules`
--

CREATE TABLE `modules` (
  `id_module` int(11) NOT NULL,
  `name_module` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `modules`
--

INSERT INTO `modules` (`id_module`, `name_module`) VALUES
(1, 'registro-doctores'),
(2, 'citas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operations`
--

CREATE TABLE `operations` (
  `id_operation` int(11) NOT NULL,
  `name_operation` varchar(50) NOT NULL,
  `id_module` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `operations`
--

INSERT INTO `operations` (`id_operation`, `name_operation`, `id_module`) VALUES
(1, 'agregar', 1),
(2, 'editar', 1),
(3, 'ver', 1),
(4, 'eliminar', 1),
(5, 'agregar', 2),
(6, 'editar', 2),
(7, 'ver', 2),
(8, 'eliminar', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id_order` int(11) NOT NULL,
  `date_order` datetime NOT NULL,
  `price_order` float NOT NULL,
  `id_cart` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `patients`
--

CREATE TABLE `patients` (
  `id_patient` int(11) NOT NULL,
  `id_person` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `patients`
--

INSERT INTO `patients` (`id_patient`, `id_person`) VALUES
(2, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `people`
--

CREATE TABLE `people` (
  `id_person` int(11) NOT NULL,
  `name_person` varchar(30) NOT NULL,
  `last_name_person` varchar(30) NOT NULL,
  `ci_person` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `people`
--

INSERT INTO `people` (`id_person`, `name_person`, `last_name_person`, `ci_person`) VALUES
(8, 'Isabel', 'Montaño', 3610674);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(3, 'App\\Models\\User', 4, 'auth_token', 'ad29584af548a17fae5ae2ecce2e3d759f72efc055fca3a361b6b8d82ba0852f', '[\"*\"]', NULL, '2022-04-06 18:56:56', '2022-04-06 18:56:56'),
(4, 'App\\Models\\User', 4, 'auth_token', 'bb365ae8743f41de5dbc241612d88f95d50486922ac75de485447361a5808adf', '[\"*\"]', NULL, '2022-04-06 19:54:53', '2022-04-06 19:54:53'),
(5, 'App\\Models\\User', 4, 'auth_token', 'a82046e8f0c28b653c3ba9add81c8c6f5f4d0fb929d2c77ee543835fe789ae88', '[\"*\"]', NULL, '2022-04-06 19:56:47', '2022-04-06 19:56:47'),
(6, 'App\\Models\\User', 4, 'auth_token', '11e58efca01021da9121277f5bfc1c1c841f0196058e14a29abdd2911243eb92', '[\"*\"]', NULL, '2022-04-06 19:58:00', '2022-04-06 19:58:00'),
(7, 'App\\Models\\User', 4, 'auth_token', '1f04d08c9c0217188940a644986be7c924cb10b9b4e0c56a7eaa620972444937', '[\"*\"]', NULL, '2022-04-06 19:58:59', '2022-04-06 19:58:59'),
(8, 'App\\Models\\User', 4, 'auth_token', 'af7eaf987554c899800b40fa5abd48a8230c6fd0eb71e32f398c4f7633394008', '[\"*\"]', NULL, '2022-04-06 20:03:09', '2022-04-06 20:03:09'),
(9, 'App\\Models\\User', 4, 'auth_token', '835beba297f0af52e64714a54961abcadc8ec483eaf15a1e7f208d9b4afd1277', '[\"*\"]', NULL, '2022-04-06 20:04:30', '2022-04-06 20:04:30'),
(10, 'App\\Models\\User', 4, 'auth_token', 'bce0ed9f68dd9d715903b4f773395aa3c7d2eb0c089d7096d306bda67841acb8', '[\"*\"]', NULL, '2022-04-06 20:09:14', '2022-04-06 20:09:14'),
(11, 'App\\Models\\User', 4, 'auth_token', 'e64ddc08c1db920a4b480631a093631e40c65247910c2fa349f84cc3584a6586', '[\"*\"]', NULL, '2022-04-06 20:10:02', '2022-04-06 20:10:02'),
(12, 'App\\Models\\User', 4, 'auth_token', '691c395352a3b5e437b68b0606ac6187aeddedf9cf2835bee6e64ab1d0814e28', '[\"*\"]', NULL, '2022-04-06 20:10:10', '2022-04-06 20:10:10'),
(13, 'App\\Models\\User', 4, 'auth_token', '4f1707f3e358a37124c76c1511600709cce765952f18afb0a078fa3026ca0776', '[\"*\"]', NULL, '2022-04-06 20:10:26', '2022-04-06 20:10:26'),
(14, 'App\\Models\\User', 4, 'auth_token', '20ac7c288bf0c42e734602c5cd2f0e4c0e7b129e25e55e2a50dcfab3ee62aea2', '[\"*\"]', NULL, '2022-04-06 20:10:33', '2022-04-06 20:10:33'),
(15, 'App\\Models\\User', 4, 'auth_token', 'fb4b206bf93961923f70b24e00023770c130e1b61d81620797212512624e8391', '[\"*\"]', NULL, '2022-04-06 20:10:44', '2022-04-06 20:10:44'),
(16, 'App\\Models\\User', 4, 'auth_token', '47ae09d8cc59f491984fa18f0893ff34edc3a3d8e40b24d1c8278eb726c6aa5d', '[\"*\"]', NULL, '2022-04-06 20:25:00', '2022-04-06 20:25:00'),
(17, 'App\\Models\\User', 4, 'auth_token', '4d492a4ca967c234335bb95c577f42645c93b41ab0ed5602af22e61ecbd962e4', '[\"*\"]', NULL, '2022-04-06 20:32:13', '2022-04-06 20:32:13'),
(18, 'App\\Models\\User', 4, 'auth_token', '4499f41af0ae11a66be23a03f25b373bbefdeb247aa3420ae8ad759d13526aa3', '[\"*\"]', NULL, '2022-04-06 20:32:32', '2022-04-06 20:32:32'),
(19, 'App\\Models\\User', 4, 'auth_token', '70999e88b886402b3095ab26b5c30a02ebbe3d56adae22339a61c846964a70e1', '[\"*\"]', NULL, '2022-04-06 20:32:36', '2022-04-06 20:32:36'),
(20, 'App\\Models\\User', 4, 'auth_token', '3e972e1e920011aec3865ae180b5e7a4ca93c2558752fb8afcb0a90eb496f784', '[\"*\"]', NULL, '2022-04-06 21:09:56', '2022-04-06 21:09:56'),
(21, 'App\\Models\\User', 4, 'auth_token', '77da5d0705c7b537efe303334a05a0ae8d310d404380e078e732a5ebeb723672', '[\"*\"]', NULL, '2022-04-06 21:13:20', '2022-04-06 21:13:20'),
(22, 'App\\Models\\User', 4, 'auth_token', '08938c159583429d5eeeff2f91bd34e08a10b6ecbda8fd8764ea7cc31221342f', '[\"*\"]', NULL, '2022-04-06 21:13:41', '2022-04-06 21:13:41'),
(23, 'App\\Models\\User', 4, 'auth_token', '5df34b9c6dbb24ca037579d5b5ff12af576c03d96904a9b9d72e0373ab44441d', '[\"*\"]', NULL, '2022-04-06 21:13:45', '2022-04-06 21:13:45'),
(24, 'App\\Models\\User', 4, 'auth_token', 'addca813f6cd2d549ddbd9e9cf73868c3deaabd643b4af5c45ea8db594d35ee4', '[\"*\"]', NULL, '2022-04-06 21:14:04', '2022-04-06 21:14:04'),
(25, 'App\\Models\\User', 4, 'auth_token', 'd7a9d5407f78962b4e8409c2c48d9a5ab695b2ca018d12c2f4e73bec4601fe20', '[\"*\"]', NULL, '2022-04-06 21:14:09', '2022-04-06 21:14:09'),
(26, 'App\\Models\\User', 4, 'auth_token', 'f6792595b7bfa5a640177f7ba0dedc284b34aacd7429e01c5a017ce6559c8ce6', '[\"*\"]', NULL, '2022-04-06 21:14:37', '2022-04-06 21:14:37'),
(27, 'App\\Models\\User', 4, 'auth_token', '94aeded737cff3161a68153954c02c47d9754b2e48ef3d226467aad1cb1c5feb', '[\"*\"]', NULL, '2022-04-06 21:15:41', '2022-04-06 21:15:41'),
(28, 'App\\Models\\User', 4, 'auth_token', 'd158ea065635d73f76adef09c47a9683f5bfbc210e6e0ca951298917a34e5a91', '[\"*\"]', NULL, '2022-04-06 21:17:42', '2022-04-06 21:17:42'),
(29, 'App\\Models\\User', 4, 'auth_token', '2a683d3a739d372387f9266e4d6be66912e6a4bbae6227f4c675ef9f9ae26913', '[\"*\"]', NULL, '2022-04-06 21:18:29', '2022-04-06 21:18:29'),
(30, 'App\\Models\\User', 4, 'auth_token', '1d52c62fae7de238f91c299221e22ddd82db48f2d8f2bed5813ce066c008db2d', '[\"*\"]', NULL, '2022-04-06 21:18:41', '2022-04-06 21:18:41'),
(31, 'App\\Models\\User', 4, 'auth_token', '2db3a3fc28e01c65f9b4cce41e347bb4cc03a9e976a7907e1cf92bd33b927725', '[\"*\"]', NULL, '2022-04-06 21:22:05', '2022-04-06 21:22:05'),
(32, 'App\\Models\\User', 4, 'auth_token', 'ea83bb4c026ae50d8a40614644d803c84034d550a5a0bae726aec3d858c472ca', '[\"*\"]', NULL, '2022-04-06 21:29:23', '2022-04-06 21:29:23'),
(33, 'App\\Models\\User', 4, 'auth_token', '6abc6a2f02a068d0a6beae80797c7784771bf0b1b2b7af30e3717a9cb0498001', '[\"*\"]', '2022-04-16 22:12:00', '2022-04-16 22:04:03', '2022-04-16 22:12:00'),
(34, 'App\\Models\\User', 4, 'auth_token', 'eecfb192af87f3c9583bc4965cc75bc810a5ef4d66a976b67502cb6a493ad36e', '[\"*\"]', NULL, '2022-04-20 03:10:43', '2022-04-20 03:10:43'),
(35, 'App\\Models\\User', 4, 'auth_token', '4cf38d8ddaddf288f342b4b6170ced464314011466a4b0b2cdc2d436fffee5d8', '[\"*\"]', NULL, '2022-04-20 03:20:12', '2022-04-20 03:20:12'),
(36, 'App\\Models\\User', 4, 'auth_token', 'b60212bd204c75f650a131af353f988691d0846ca7709c32cf6a3f8f45f08d66', '[\"*\"]', NULL, '2022-04-20 03:21:15', '2022-04-20 03:21:15'),
(37, 'App\\Models\\User', 4, 'auth_token', '53dd6fa32b5b5bb5c02632a33243e289483f66fd160d85a93ae28c15c9d0c40d', '[\"*\"]', NULL, '2022-04-20 03:23:56', '2022-04-20 03:23:56'),
(38, 'App\\Models\\User', 4, 'auth_token', 'd84d229c5d6ac34f321ef0dc100f9cc2301c40fcf2cfa8db57750e7fdeed6287', '[\"*\"]', NULL, '2022-04-20 03:27:51', '2022-04-20 03:27:51'),
(39, 'App\\Models\\User', 4, 'auth_token', 'f8378fce16670f2a35423ddb996f3288febee4e94191c49f76473a7caa56229a', '[\"*\"]', NULL, '2022-04-20 03:41:06', '2022-04-20 03:41:06'),
(40, 'App\\Models\\User', 4, 'auth_token', 'edf64e3833950376ce03db44f46aa8d338de6dec6b33ac799bc0d574720e7bcd', '[\"*\"]', NULL, '2022-04-20 03:53:39', '2022-04-20 03:53:39'),
(41, 'App\\Models\\User', 4, 'auth_token', '96bbf9224cf692c1282a76babd0bc0df77225a2cf241e9fa826eaed280c7480f', '[\"*\"]', NULL, '2022-04-20 04:15:42', '2022-04-20 04:15:42'),
(42, 'App\\Models\\User', 4, 'auth_token', 'd2160bca0466abeaa973afe58d82616bfdb42e3073d739ae5e8fd7a7a66d9feb', '[\"*\"]', NULL, '2022-04-20 04:19:07', '2022-04-20 04:19:07'),
(43, 'App\\Models\\User', 4, 'auth_token', '7295bbd32a03587ca7216bd4e02b9ed31d517e98e32291af5dcbe3e256e8aecb', '[\"*\"]', NULL, '2022-04-20 04:22:13', '2022-04-20 04:22:13'),
(44, 'App\\Models\\User', 4, 'auth_token', '02af0945dd1c154b3172a474e386814a8b71e552057b5153804b171cc44c29ad', '[\"*\"]', NULL, '2022-04-20 04:37:18', '2022-04-20 04:37:18'),
(45, 'App\\Models\\User', 4, 'auth_token', 'db55097e4301ee56cdae6c256b5d20957732c42de9b1d9dae35554682a7c5188', '[\"*\"]', NULL, '2022-04-20 04:55:35', '2022-04-20 04:55:35'),
(46, 'App\\Models\\User', 4, 'auth_token', 'fb12b1830fe5483b7aa79882bac38c39e68d2f8f929110cb7243109bbb6777a9', '[\"*\"]', NULL, '2022-04-20 04:56:05', '2022-04-20 04:56:05'),
(47, 'App\\Models\\User', 4, 'auth_token', '4530a8c728ff8433eeff2cfc28ddb7252f0a4c470caaadc414e717753bbe81bd', '[\"*\"]', NULL, '2022-04-20 04:58:12', '2022-04-20 04:58:12'),
(48, 'App\\Models\\User', 4, 'auth_token', '9734af013163f6ae40f3bb7d8b080a601b7d2ee838078ffedbc1e1b5e9b58421', '[\"*\"]', NULL, '2022-04-20 04:58:57', '2022-04-20 04:58:57'),
(49, 'App\\Models\\User', 4, 'auth_token', 'f30235f7ee5c27962e5becf38aea7f8f7593809a81674096b13c424e05258ea8', '[\"*\"]', NULL, '2022-04-20 04:59:22', '2022-04-20 04:59:22'),
(50, 'App\\Models\\User', 4, 'auth_token', 'c565e7f3a073e2fab1c19e9bc3d907c453791b11e8382849d169aaade39d8682', '[\"*\"]', NULL, '2022-04-20 05:00:41', '2022-04-20 05:00:41'),
(51, 'App\\Models\\User', 4, 'auth_token', '3f26a9bf9ff71f8436ed5f7d4f76f701034ee3b1d7c7d0103929ead72dc72b4a', '[\"*\"]', NULL, '2022-04-20 20:11:48', '2022-04-20 20:11:48'),
(52, 'App\\Models\\User', 4, 'auth_token', '088082fb73e0bd344007513996a00b7abcaf3a84cb8d12fbfc779ab9c24acd22', '[\"*\"]', NULL, '2022-04-20 20:12:41', '2022-04-20 20:12:41'),
(53, 'App\\Models\\User', 4, 'auth_token', 'f1c2c11a27936c07ce6a4b6d798986e740f9e4a5ade247fad27a18142745236b', '[\"*\"]', NULL, '2022-04-20 21:21:20', '2022-04-20 21:21:20'),
(54, 'App\\Models\\User', 4, 'auth_token', 'fe9db032d3080102d42ebe18d050ccebfa675af3925a0a8ab2a84d5317f6256c', '[\"*\"]', NULL, '2022-04-20 21:52:50', '2022-04-20 21:52:50'),
(55, 'App\\Models\\User', 4, 'auth_token', '0c45679df92bbafbe240acedee10f7886b42bdc4b34810a6355bb6f19272cc79', '[\"*\"]', NULL, '2022-04-20 21:57:18', '2022-04-20 21:57:18'),
(56, 'App\\Models\\User', 4, 'auth_token', 'fa1a8cd442a49897b5970b0cff61d468e5dce50d232973772fc71f14571e7b51', '[\"*\"]', NULL, '2022-04-20 22:11:21', '2022-04-20 22:11:21'),
(57, 'App\\Models\\User', 4, 'auth_token', '64a23bb596702724a4f053b17fb698bec2bec0aef30b9be7562e5c7ea9556d88', '[\"*\"]', NULL, '2022-04-20 22:13:29', '2022-04-20 22:13:29'),
(58, 'App\\Models\\User', 4, 'auth_token', 'bc16470b23966597d363b8e04664035e35a7a4733b6be93e905a0de947e2ed0d', '[\"*\"]', NULL, '2022-04-20 22:25:34', '2022-04-20 22:25:34'),
(59, 'App\\Models\\User', 4, 'auth_token', '76a0ad0e94fcf2bf5b14dec162090bcc34f0b82288ec34922b65d8d0e0dc6376', '[\"*\"]', NULL, '2022-04-20 22:47:30', '2022-04-20 22:47:30'),
(60, 'App\\Models\\User', 4, 'auth_token', '6d2a920084e1fc77590db36394623cc4b338929e5c7166231299e01f91095bec', '[\"*\"]', NULL, '2022-04-20 22:48:11', '2022-04-20 22:48:11'),
(61, 'App\\Models\\User', 4, 'auth_token', '30bc12da5961877e28405d2bb1849c170214829e9ff11895016a394fb64478b2', '[\"*\"]', NULL, '2022-04-21 04:53:24', '2022-04-21 04:53:24'),
(62, 'App\\Models\\User', 4, 'auth_token', 'd1f81df05eb9867c4f6a879b31621d9485adb76685447410712d7bf14c3c2d4f', '[\"*\"]', NULL, '2022-04-21 06:20:10', '2022-04-21 06:20:10'),
(63, 'App\\Models\\User', 4, 'auth_token', '6db95b5bdd0edb171034961e5aaadbca3d9aef979095bdbf8cd592baac6642e5', '[\"*\"]', NULL, '2022-04-21 06:38:26', '2022-04-21 06:38:26'),
(64, 'App\\Models\\User', 4, 'auth_token', '9ea24045befcf9b03051b07ea0b87d05808ad912b7826c6587ff9d28b03c35b3', '[\"*\"]', NULL, '2022-04-21 06:48:52', '2022-04-21 06:48:52'),
(65, 'App\\Models\\User', 4, 'auth_token', 'b496fa81e5bd008cb485414d8487e22434f85149b3f7c5b685b4d7f486f85f62', '[\"*\"]', NULL, '2022-04-21 06:50:59', '2022-04-21 06:50:59'),
(66, 'App\\Models\\User', 4, 'auth_token', 'dd7c1a52e8058047c939f213cf53a418bb07a281b93f2025092a4d7e35b6c1d5', '[\"*\"]', NULL, '2022-04-21 06:51:03', '2022-04-21 06:51:03'),
(67, 'App\\Models\\User', 4, 'auth_token', '86e6458136990187ad7318fd5127ab7ea5f89de8352995307109b05e72c204d8', '[\"*\"]', NULL, '2022-04-21 06:51:23', '2022-04-21 06:51:23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id_product` int(11) NOT NULL,
  `name_product` varchar(30) NOT NULL,
  `description_product` varchar(50) NOT NULL,
  `price_product` float NOT NULL,
  `amount_product` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `role`
--

CREATE TABLE `role` (
  `id_role` int(11) NOT NULL,
  `name_role` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `role`
--

INSERT INTO `role` (`id_role`, `name_role`) VALUES
(1, 'paciente'),
(2, 'doctor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `role_operations`
--

CREATE TABLE `role_operations` (
  `id_role_operation` int(11) NOT NULL,
  `id_role` int(11) NOT NULL,
  `id_operation` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `role_operations`
--

INSERT INTO `role_operations` (`id_role_operation`, `id_role`, `id_operation`) VALUES
(1, 1, 5),
(2, 1, 6),
(4, 1, 7),
(3, 1, 8),
(5, 2, 1),
(6, 2, 2),
(8, 2, 3),
(7, 2, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `speciallity`
--

CREATE TABLE `speciallity` (
  `id_speciallity` int(11) NOT NULL,
  `name_speciallity` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `speciallity`
--

INSERT INTO `speciallity` (`id_speciallity`, `name_speciallity`) VALUES
(2, 'dermatologia'),
(3, 'cardiologia'),
(4, 'Cirujia plastica'),
(5, 'pediatria'),
(6, 'otorrinolaringología');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `name_user` varchar(15) NOT NULL,
  `password_user` varchar(250) NOT NULL,
  `id_role` int(11) NOT NULL,
  `id_person` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `name_user`, `password_user`, `id_role`, `id_person`) VALUES
(4, '3610674Montaño', '$2y$10$rEd0xIJTnS4I6mcZUw5xMeyzqH.UbXkks00vMEZfUexpZ/CXHI8jG', 1, 8);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id_appointment`),
  ADD KEY `id_doctor` (`id_doctor`,`id_patient`),
  ADD KEY `id_patient` (`id_patient`);

--
-- Indices de la tabla `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id_cart`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_product` (`id_product`);

--
-- Indices de la tabla `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`id_doctor`),
  ADD KEY `id_speciality` (`id_speciality`,`id_person`),
  ADD KEY `id_person` (`id_person`);

--
-- Indices de la tabla `hours`
--
ALTER TABLE `hours`
  ADD PRIMARY KEY (`id_hour`),
  ADD UNIQUE KEY `id_doctor` (`id_doctor`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `modules`
--
ALTER TABLE `modules`
  ADD PRIMARY KEY (`id_module`);

--
-- Indices de la tabla `operations`
--
ALTER TABLE `operations`
  ADD PRIMARY KEY (`id_operation`),
  ADD KEY `id_module` (`id_module`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id_order`),
  ADD KEY `id_cart` (`id_cart`);

--
-- Indices de la tabla `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id_patient`),
  ADD KEY `id_person` (`id_person`);

--
-- Indices de la tabla `people`
--
ALTER TABLE `people`
  ADD PRIMARY KEY (`id_person`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id_product`);

--
-- Indices de la tabla `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id_role`);

--
-- Indices de la tabla `role_operations`
--
ALTER TABLE `role_operations`
  ADD PRIMARY KEY (`id_role_operation`),
  ADD KEY `id_role` (`id_role`,`id_operation`),
  ADD KEY `id_operation` (`id_operation`);

--
-- Indices de la tabla `speciallity`
--
ALTER TABLE `speciallity`
  ADD PRIMARY KEY (`id_speciallity`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_role` (`id_role`),
  ADD KEY `id_person` (`id_person`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id_appointment` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `carts`
--
ALTER TABLE `carts`
  MODIFY `id_cart` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `doctor`
--
ALTER TABLE `doctor`
  MODIFY `id_doctor` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `hours`
--
ALTER TABLE `hours`
  MODIFY `id_hour` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `modules`
--
ALTER TABLE `modules`
  MODIFY `id_module` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `operations`
--
ALTER TABLE `operations`
  MODIFY `id_operation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id_order` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `patients`
--
ALTER TABLE `patients`
  MODIFY `id_patient` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `people`
--
ALTER TABLE `people`
  MODIFY `id_person` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `role`
--
ALTER TABLE `role`
  MODIFY `id_role` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `role_operations`
--
ALTER TABLE `role_operations`
  MODIFY `id_role_operation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `speciallity`
--
ALTER TABLE `speciallity`
  MODIFY `id_speciallity` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`id_patient`) REFERENCES `patients` (`id_patient`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `appointments_ibfk_2` FOREIGN KEY (`id_doctor`) REFERENCES `doctor` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `carts_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `doctor`
--
ALTER TABLE `doctor`
  ADD CONSTRAINT `doctor_ibfk_1` FOREIGN KEY (`id_speciality`) REFERENCES `speciallity` (`id_speciallity`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `doctor_ibfk_2` FOREIGN KEY (`id_person`) REFERENCES `people` (`id_person`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `hours`
--
ALTER TABLE `hours`
  ADD CONSTRAINT `hours_ibfk_1` FOREIGN KEY (`id_doctor`) REFERENCES `doctor` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `operations`
--
ALTER TABLE `operations`
  ADD CONSTRAINT `operations_ibfk_1` FOREIGN KEY (`id_module`) REFERENCES `modules` (`id_module`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`id_cart`) REFERENCES `carts` (`id_cart`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `patients`
--
ALTER TABLE `patients`
  ADD CONSTRAINT `patients_ibfk_1` FOREIGN KEY (`id_person`) REFERENCES `people` (`id_person`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `role_operations`
--
ALTER TABLE `role_operations`
  ADD CONSTRAINT `role_operations_ibfk_1` FOREIGN KEY (`id_role`) REFERENCES `role` (`id_role`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `role_operations_ibfk_2` FOREIGN KEY (`id_operation`) REFERENCES `operations` (`id_operation`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`id_role`) REFERENCES `role` (`id_role`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuario_ibfk_2` FOREIGN KEY (`id_person`) REFERENCES `people` (`id_person`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
