-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 21, 2020 at 01:47 PM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `finalproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `a_contest_tbl`
--

DROP TABLE IF EXISTS `a_contest_tbl`;
CREATE TABLE IF NOT EXISTS `a_contest_tbl` (
  `a_contest_id` int(11) NOT NULL AUTO_INCREMENT,
  `a_language` varchar(10) NOT NULL,
  `a_projectname` varchar(20) NOT NULL,
  `a_timeline` varchar(8) NOT NULL,
  `a_price` int(11) NOT NULL,
  `s_time` varchar(20) NOT NULL,
  `e_time` varchar(20) NOT NULL,
  `fkuser_id` varchar(20) NOT NULL,
  `fkdesigner_id` varchar(20) NOT NULL,
  `fksubcat_id` int(11) NOT NULL,
  PRIMARY KEY (`a_contest_id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `a_contest_tbl`
--

INSERT INTO `a_contest_tbl` (`a_contest_id`, `a_language`, `a_projectname`, `a_timeline`, `a_price`, `s_time`, `e_time`, `fkuser_id`, `fkdesigner_id`, `fksubcat_id`) VALUES
(21, 'Hindi', 'kkkkk', '1 week', 5000, '10:50:53 AM', '30 minutes', 'zain@gmail.com', 'prachi@gmail.com', 1),
(20, 'Hindi', 'hhhh', '48 hours', 200, '10:42:27 PM', '2 minutes', 'adi@gmail.com', 'prachi@gmail.com', 2),
(19, 'English', 'aaaaaaaa', '48 hours', 100, '10:17:04 PM', '2 minutes', 'adi@gmail.com', 'prachi@gmail.com', 2);

-- --------------------------------------------------------

--
-- Table structure for table `a_hire_tbl`
--

DROP TABLE IF EXISTS `a_hire_tbl`;
CREATE TABLE IF NOT EXISTS `a_hire_tbl` (
  `a_id` int(11) NOT NULL AUTO_INCREMENT,
  `a_language` varchar(10) NOT NULL,
  `a_projectname` varchar(20) NOT NULL,
  `a_timeline` varchar(50) NOT NULL,
  `a_price` int(11) NOT NULL,
  `fkuser_id` varchar(50) NOT NULL,
  `fkdesigner_id` varchar(50) NOT NULL,
  `fksubcat_id` int(11) NOT NULL,
  PRIMARY KEY (`a_id`)
) ENGINE=MyISAM AUTO_INCREMENT=209 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `a_hire_tbl`
--

INSERT INTO `a_hire_tbl` (`a_id`, `a_language`, `a_projectname`, `a_timeline`, `a_price`, `fkuser_id`, `fkdesigner_id`, `fksubcat_id`) VALUES
(1, 'English', 'Coco cola', '1 week', 8000, 'dhruvi@gmail.com', 'prachi@gmail.com', 1),
(3, 'English', 'The Lost Story', '1 month', 30000, 'p@gmail.com', 'rahul@gmail.com', 2),
(8, 'english', 'cheers', '1 week', 10000, 'dhruvi@gmail.com', 'prachi@gmail.com', 1),
(7, 'hindi', 'pepsi.co', '1 week', 7000, 'dhruvi@gmail.com', 'prachi@gmail.com', 1),
(9, 'gujarati', 'cheers', '1 week', 10000, 'dhruvi@gmail.com', 'rahul@gmail.com', 1),
(11, 'Marathi', 'feminism', 'Not sure I would like to chat with my designer', 20000, 'dhruvi@gmail.com', 'kanishi@gmail.com', 2),
(155, 'Marathi', 'new soni', '48 hours', 3400, 'dhruvi@gmail.com', 'ruhi@gmail.com', 1),
(157, 'Hindi', 'new my', '48 hours', 200, 'p@gmail.com', 'rahul@gmail.com', 1),
(158, 'English', 'Traffic rules', '1 week', 5000, 'p@gmail.com', 'rahul@gmail.com', 2),
(184, 'Hindi', 'web series hindi', '48 hours', 2300, 'adi@gmail.com', 'arman@gmail.com', 10),
(195, 'English', 'newlastday', '48 hours', 300, 'p@gmail.com', 'arman@gmail.com', 1),
(198, 'English', 'pollution film', '1 week', 200, 'shivani@gmail.com', 'prachi@gmail.com', 1),
(208, 'Gujarati', 'soni', '48 hours', 200, 'adi@gmail.com', 'prachi@gmail.com', 1),
(207, 'Gujarati', 'gggg', '1 week', 3000, 'adi@gmail.com', 'rahul@gmail.com', 1),
(206, 'Hindi', 'hhhh', '1 week', 2000, 'hsfcc8@gmail.com', 'prachi@gmail.com', 1),
(205, 'English', 'asasas', '48 hours', 1000, 'zain@gmail.com', 'prachi@gmail.com', 1);

-- --------------------------------------------------------

--
-- Table structure for table `b_contest_tbl`
--

DROP TABLE IF EXISTS `b_contest_tbl`;
CREATE TABLE IF NOT EXISTS `b_contest_tbl` (
  `b_contest_id` int(11) NOT NULL AUTO_INCREMENT,
  `b_language` varchar(10) NOT NULL,
  `b_subject` varchar(20) NOT NULL,
  `b_design` varchar(10) NOT NULL,
  `b_description` varchar(70) NOT NULL,
  `b_budget` int(11) NOT NULL,
  `s_time` varchar(20) NOT NULL,
  `e_time` varchar(20) NOT NULL,
  `fkuser_id` varchar(20) NOT NULL,
  `fkdesigner_id` varchar(20) NOT NULL,
  `fksubcat_id` int(11) NOT NULL,
  PRIMARY KEY (`b_contest_id`)
) ENGINE=MyISAM AUTO_INCREMENT=71 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `b_contest_tbl`
--

INSERT INTO `b_contest_tbl` (`b_contest_id`, `b_language`, `b_subject`, `b_design`, `b_description`, `b_budget`, `s_time`, `e_time`, `fkuser_id`, `fkdesigner_id`, `fksubcat_id`) VALUES
(52, 'English', 'hhh', 'hhhh', 'hhh', 3000, '1:11:02 PM', '10 minutes', 'adi@gmail.com', 'rahul@gmail.com', 3),
(51, 'Gujarati', 'hhh', 'hhhh', 'hhh', 2000, '12:52:38 PM', '10 minutes', 'adi@gmail.com', 'rahul@gmail.com', 3),
(50, 'English', 'hhhh', 'hhhh', 'hhhh', 2000, '6:00:05 AM', '10 minutes', 'adi@gmail.com', 'prachi@gmail.com', 3),
(49, 'English', 'jjjjJJJ', 'jjjjj', 'jjjj', 1900, '5:55:44 AM', '10 minutes', 'adi@gmail.com', 'rahul@gmail.com', 4),
(47, 'Gujarati', 'jjj', 'jjjj', 'jjjj', 2900, '4:37:36 AM', '1 hour', 'adi@gmail.com', 'rahul@gmail.com', 4),
(48, 'Gujarati', 'helo', 'hhhh', 'hhhh', 2000, '5:46:27 AM', '30 minutes', 'zain@gmail.com', 'prachi@gmail.com', 13),
(53, 'Hindi', 'hhh', 'hhh', 'hhh', 200, '1:35:49 PM', '10 minutes', 'adi@gmail.com', 'rahul@gmail.com', 3),
(54, 'English', 'hhh', 'hhhh', 'hhhh', 300, '8:10:18 PM', '10 minutes', 'adi@gmail.com', 'rahul@gmail.com', 4),
(55, 'English', 'hhh', 'hhhh', 'hhh', 200, '8:14:08 PM', '2 minutes', 'zain@gmail.com', 'prachi@gmail.com', 3),
(56, 'Gujarati', 'ggg', 'gggg', 'gggg', 90, '10:29:43 PM', '30 minutes', 'adi@gmail.com', 'prachi@gmail.com', 3),
(58, 'Gujarati', 'ggg', 'ggg', 'hhhg', 200, '11:55:23 PM', '10 minutes', 'adi@gmail.com', 'rahul@gmail.com', 4),
(67, 'Gujarati', 'kkkk', 'kkk', 'kkkk', 290, '6:24:00 AM', '10 minutes', 'zain@gmail.com', 'rahul@gmail.com', 4),
(60, 'Gujarati', 'hhhh', 'hhhh', 'hhh', 200, '2:29:15 AM', '10 minutes', 'adi@gmail.com', 'rahul@gmail.com', 3),
(66, 'English', 'kkk', 'kkkkk', 'I want to make Leaflet of Tution Class', 2100, '4:38:16 AM', '10 minutes', 'adi@gmail.com', '', 3),
(63, 'English', 'hhh', 'hhhh', 'logo for hotel', 200, '2:37:55 AM', '30 minutes', 'adi@gmail.com', 'prachi@gmail.com', 4),
(64, 'English', 'hhhh', 'hhh', 'want to make logo for hotel', 200, '2:46:12 AM', '10 minutes', 'adi@gmail.com', 'prachi@gmail.com', 4),
(65, 'English', 'hhhh', 'hhhh', 'hello jii byeee', 200, '3:36:47 AM', '10 minutes', 'zain@gmail.com', 'prachi@gmail.com', 4),
(68, 'Hindi', 'Logo', 'Rectangle', 'School Logo', 900, '10:43:58 AM', '2 minutes', 'adi@gmail.com', 'prachi@gmail.com', 3),
(69, 'Hindi', 'logo', 'circle', 'fggf', 500, '11:52:23 AM', '30 minutes', 'adi@gmail.com', 'rahul@gmail.com', 3),
(70, 'Gujarati', 'hhhh', 'hhhh', 'hhhh', 200, '8:23:04 PM', '10 minutes', 'hsfcc8@gmail.com', 'rahul@gmail.com', 3);

-- --------------------------------------------------------

--
-- Table structure for table `b_hire_tbl`
--

DROP TABLE IF EXISTS `b_hire_tbl`;
CREATE TABLE IF NOT EXISTS `b_hire_tbl` (
  `b_id` int(11) NOT NULL AUTO_INCREMENT,
  `b_language` varchar(10) NOT NULL,
  `b_subject` varchar(20) NOT NULL,
  `b_design` varchar(10) NOT NULL,
  `b_description` varchar(50) NOT NULL,
  `b_timeline` varchar(8) NOT NULL,
  `b_budget` int(11) NOT NULL,
  `b_link` varchar(20) NOT NULL,
  `b_image` varchar(50) NOT NULL,
  `fkuser_id` varchar(50) NOT NULL,
  `fkdesigner_id` varchar(50) NOT NULL,
  `fksubcat_id` int(11) NOT NULL,
  PRIMARY KEY (`b_id`)
) ENGINE=MyISAM AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `b_hire_tbl`
--

INSERT INTO `b_hire_tbl` (`b_id`, `b_language`, `b_subject`, `b_design`, `b_description`, `b_timeline`, `b_budget`, `b_link`, `b_image`, `fkuser_id`, `fkdesigner_id`, `fksubcat_id`) VALUES
(3, 'english', 'travelling', 'circle', 'pravishi tours and travels', '5 days', 5000, '', 'pravi.jpg', 'adi@gmail.com', 'prachi@gmail.com', 3),
(4, 'hindi', 'classes', 'rectangle', 'commerce tutuon classes', '1 week', 4000, '', 'Image-1554396747968.JPG', 'dhruvi@gmail.com', 'rahul@gmail.com', 4),
(29, 'English', 'adaf', 'ddff', 'ffffg', '48 hours', 700, 'undefined', 'Image-1555568786403.jpg', 'adi@gmail.com', '', 3),
(28, 'Hindi', 'hhh', 'hhh', 'hhhh', '1 week', 200, 'undefined', 'Image-1555565862674.jpg', 'p@gmail.com', '', 3),
(27, 'Hindi', 'hhhh', 'hhhhh', 'burger king', '1 week', 1200, 'undefined', 'Image-1555564290920.jpg', 'p@gmail.com', 'ruhi@gmail.com', 4),
(26, 'English', 'logo', 'circle', 'hotel logo', '1 week', 2500, 'undefined', 'Image-1555564231495.png', 'p@gmail.com', 'rahul@gmail.com', 3);

-- --------------------------------------------------------

--
-- Table structure for table `category_tbl`
--

DROP TABLE IF EXISTS `category_tbl`;
CREATE TABLE IF NOT EXISTS `category_tbl` (
  `cat_id` int(11) NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(20) NOT NULL,
  PRIMARY KEY (`cat_id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category_tbl`
--

INSERT INTO `category_tbl` (`cat_id`, `cat_name`) VALUES
(1, 'Advertising'),
(2, 'Branding & Designing'),
(3, 'Training');

-- --------------------------------------------------------

--
-- Table structure for table `d_contest_upload`
--

DROP TABLE IF EXISTS `d_contest_upload`;
CREATE TABLE IF NOT EXISTS `d_contest_upload` (
  `dc_id` int(11) NOT NULL AUTO_INCREMENT,
  `dc_image` varchar(200) NOT NULL,
  `fkcontest_id` int(11) NOT NULL,
  `fkdesigner_id` varchar(20) NOT NULL,
  PRIMARY KEY (`dc_id`)
) ENGINE=MyISAM AUTO_INCREMENT=71 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `d_contest_upload`
--

INSERT INTO `d_contest_upload` (`dc_id`, `dc_image`, `fkcontest_id`, `fkdesigner_id`) VALUES
(45, 'Image-1555518295413.jpg', 17, 'prachi@gmail.com'),
(44, 'Image-1555512286378.jpg', 55, 'prachi@gmail.com'),
(43, 'Image-1555512269720.png', 55, 'rahul@gmail.com'),
(42, 'Image-1555512057736.jpg', 54, 'rahul@gmail.com'),
(41, 'Image-1555512039960.jpg', 54, 'prachi@gmail.com'),
(40, 'Image-1555511093091.jpg', 15, 'prachi@gmail.com'),
(39, 'Image-1555488392010.jpg', 53, 'rahul@gmail.com'),
(38, 'Image-1555488376109.jpg', 53, 'prachi@gmail.com'),
(37, 'Image-1555486931278.jpg', 52, 'rahul@gmail.com'),
(36, 'Image-1555486914268.png', 52, 'prachi@gmail.com'),
(35, 'Image-1555485837368.jpg', 51, 'rahul@gmail.com'),
(34, 'Image-1555485810762.jpg', 51, 'prachi@gmail.com'),
(33, 'Image-1555461108962.jpg', 50, 'prachi@gmail.com'),
(32, 'Image-1555460871210.jpg', 49, 'rahul@gmail.com'),
(31, 'Image-1555460253667.JPG', 48, 'prachi@gmail.com'),
(30, 'Image-1555460227509.jpg', 48, 'rahul@gmail.com'),
(29, 'Image-1555457263628.jpg', 47, 'rahul@gmail.com'),
(28, 'Image-1555457171227.jpg', 47, 'prachi@gmail.com'),
(46, 'Image-1555518311755.jpg', 17, 'rahul@gmail.com'),
(47, 'Image-1555518737240.jpg', 18, 'prachi@gmail.com'),
(48, 'Image-1555519644732.jpg', 19, 'prachi@gmail.com'),
(49, 'Image-1555520407870.jpg', 56, 'prachi@gmail.com'),
(50, 'Image-1555520596427.jpg', 57, 'prachi@gmail.com'),
(51, 'Image-1555521163641.jpg', 20, 'prachi@gmail.com'),
(52, 'Image-1555525554002.jpg', 58, 'prachi@gmail.com'),
(53, 'Image-1555525576444.jpg', 58, 'rahul@gmail.com'),
(54, 'Image-1555531180931.jpg', 29, 'prachi@gmail.com'),
(55, 'Image-1555531204525.jpg', 29, 'rahul@gmail.com'),
(56, 'Image-1555534786357.jpg', 60, 'prachi@gmail.com'),
(57, 'Image-1555534816480.jpg', 60, 'rahul@gmail.com'),
(58, 'Image-1555535313129.jpg', 63, 'prachi@gmail.com'),
(59, 'Image-1555536701991.jpg', 64, 'prachi@gmail.com'),
(60, 'Image-1555538831939.png', 65, 'prachi@gmail.com'),
(61, 'Image-1555542794615.png', 66, 'prachi@gmail.com'),
(62, 'Image-1555548904334.jpg', 67, 'prachi@gmail.com'),
(63, 'Image-1555548926933.png', 67, 'rahul@gmail.com'),
(64, 'Image-1555564492310.JPG', 68, 'prachi@gmail.com'),
(65, 'Image-1555564891999.png', 21, 'rahul@gmail.com'),
(66, 'Image-1555564921619.jpg', 21, 'prachi@gmail.com'),
(67, 'Image-1555568588921.png', 69, 'prachi@gmail.com'),
(68, 'Image-1555568622283.jpg', 69, 'rahul@gmail.com'),
(69, 'Image-1556117633014.jpg', 70, 'prachi@gmail.com'),
(70, 'Image-1556117653807.jpg', 70, 'rahul@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `order_tbl`
--

DROP TABLE IF EXISTS `order_tbl`;
CREATE TABLE IF NOT EXISTS `order_tbl` (
  `o_id` int(11) NOT NULL AUTO_INCREMENT,
  `fksubcat_id` int(11) NOT NULL,
  `fkuser_id` varchar(50) NOT NULL,
  `fkdesigner_id` varchar(50) NOT NULL,
  `o_date` varchar(20) NOT NULL,
  `o_amount` int(11) NOT NULL,
  `fka_id` int(11) NOT NULL,
  PRIMARY KEY (`o_id`)
) ENGINE=MyISAM AUTO_INCREMENT=381 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_tbl`
--

INSERT INTO `order_tbl` (`o_id`, `fksubcat_id`, `fkuser_id`, `fkdesigner_id`, `o_date`, `o_amount`, `fka_id`) VALUES
(1, 2, 'dhruvi@gmail.com', 'rahul@gmail.com', '2019-02-21', 20000, 53),
(239, 3, 'dhruvi@gmail.com', 'rahul@gmail.com', '3/14/2019', 500, 11),
(240, 7, 'dhruvi@gmail.com', 'ruhi@gmail.com', '3/14/2019', 800, 24),
(234, 1, 'dhruvi@gmail.com', 'rahul@gmail.com', '3/14/2019', 700, 129),
(275, 2, 'adi@gmail.com', 'rahul@gmail.com', '3/24/2019', 700, 152),
(274, 1, 'adi@gmail.com', 'rahul@gmail.com', '3/19/2019', 8900, 151),
(273, 4, 'adi@gmail.com', 'prachi@gmail.com', '3/18/2019', 800, 16),
(328, 1, 'adi@gmail.com', 'prachi@gmail.com', '4/14/2019', 3000, 185),
(329, 1, 'adi@gmail.com', 'prachi@gmail.com', '4/14/2019', 3000, 185),
(330, 1, 'adi@gmail.com', 'prachi@gmail.com', '4/16/2019', 2000, 187),
(331, 2, 'adi@gmail.com', 'rahul@gmail.com', '4/16/2019', 2000, 189),
(332, 1, 'zain@gmail.com', 'prachi@gmail.com', '4/16/2019', 3400, 190),
(333, 10, 'radha@gmail.com', 'ruhi@gmail.com', '4/16/2019', 3000, 191),
(334, 9, 'zain@gmail.com', 'rahul@gmail.com', '4/16/2019', 2000, 192),
(335, 3, 'dhruvi@gmail.com', 'mayank@gmail.com', '4/16/2019', 4000, 22),
(336, 1, 'p@gmail.com', 'kanishi@gmail.com', '4/16/2019', 2000, 193),
(327, 1, 'adi@gmail.com', 'prachi@gmail.com', '4/14/2019', 3000, 185),
(326, 10, 'adi@gmail.com', 'arman@gmail.com', '4/14/2019', 2300, 184),
(360, 4, 'adi@gmail.com', 'prachi@gmail.com', '4/18/2019', 200, 63),
(323, 2, 'p@gmail.com', 'kanishi@gmail.com', '4/5/2019', 3000, 181),
(322, 1, 'p@gmail.com', 'rahul@gmail.com', '4/5/2019', 300, 180),
(321, 7, 'p@gmail.com', 'prachi@gmail.com', '4/5/2019', 700, 34),
(320, 6, 'p@gmail.com', 'prachi@gmail.com', '4/4/2019', 700, 33),
(316, 7, 'p@gmail.com', 'prachi@gmail.com', '4/4/2019', 700, 31),
(311, 2, 'p@gmail.com', 'rahul@gmail.com', '4/3/2019', 6700, 159),
(309, 2, 'p@gmail.com', 'rahul@gmail.com', '4/3/2019', 5000, 158),
(308, 1, 'p@gmail.com', 'rahul@gmail.com', '4/3/2019', 200, 157),
(307, 1, 'p@gmail.com', 'rahul@gmail.com', '4/3/2019', 800, 156),
(318, 12, 'p@gmail.com', 'prachi@gmail.com', '4/4/2019', 3000, 19),
(317, 7, 'p@gmail.com', 'ruhi@gmail.com', '4/4/2019', 600, 32),
(359, 3, 'adi@gmail.com', 'rahul@gmail.com', '4/18/2019', 200, 60),
(339, 3, 'adi@gmail.com', 'prachi@gmail.com', '4/17/2019', 2000, 50),
(340, 3, 'adi@gmail.com', 'rahul@gmail.com', '4/17/2019', 2000, 51),
(341, 3, 'adi@gmail.com', 'rahul@gmail.com', '4/17/2019', 3000, 52),
(342, 1, 'adi@gmail.com', 'prachi@gmail.com', '4/17/2019', 2000, 194),
(343, 3, 'adi@gmail.com', 'rahul@gmail.com', '4/17/2019', 200, 53),
(344, 3, 'p@gmail.com', 'ruhi@gmail.com', '4/17/2019', 200, 23),
(345, 3, 'p@gmail.com', 'mayank@gmail.com', '4/17/2019', 500, 24),
(346, 1, 'p@gmail.com', 'arman@gmail.com', '4/17/2019', 300, 195),
(347, 7, 'p@gmail.com', 'kanishi@gmail.com', '4/17/2019', 100, 35),
(348, 2, 'p@gmail.com', 'ruhi@gmail.com', '4/17/2019', 5000, 196),
(349, 4, 'adi@gmail.com', 'rahul@gmail.com', '4/17/2019', 300, 54),
(350, 3, 'zain@gmail.com', 'prachi@gmail.com', '4/17/2019', 200, 55),
(351, 2, 'adi@gmail.com', 'rahul@gmail.com', '4/17/2019', 200, 17),
(352, 1, 'adi@gmail.com', 'prachi@gmail.com', '4/17/2019', 300, 18),
(353, 2, 'adi@gmail.com', 'prachi@gmail.com', '4/17/2019', 100, 19),
(354, 3, 'adi@gmail.com', 'prachi@gmail.com', '4/17/2019', 90, 56),
(355, 2, 'adi@gmail.com', 'prachi@gmail.com', '4/17/2019', 200, 20),
(356, 2, 'adi@gmail.com', 'prachi@gmail.com', '4/17/2019', 200, 20),
(357, 4, 'adi@gmail.com', 'rahul@gmail.com', '4/17/2019', 200, 58),
(358, 5, 'adi@gmail.com', 'rahul@gmail.com', '4/18/2019', 400, 29),
(361, 4, 'adi@gmail.com', 'prachi@gmail.com', '4/18/2019', 200, 64),
(362, 4, 'zain@gmail.com', 'prachi@gmail.com', '4/18/2019', 200, 65),
(363, 3, 'adi@gmail.com', 'prachi@gmail.com', '4/18/2019', 1300, 25),
(364, 5, 'adi@gmail.com', 'ruhi@gmail.com', '4/18/2019', 300, 36),
(365, 1, 'adi@gmail.com', 'kanishi@gmail.com', '4/18/2019', 300, 197),
(366, 1, 'adi@gmail.com', 'kanishi@gmail.com', '4/18/2019', 300, 197),
(367, 1, 'shivani@gmail.com', 'prachi@gmail.com', '4/18/2019', 200, 198),
(368, 1, 'p@gmail.com', 'rahul@gmail.com', '4/18/2019', 210, 203),
(369, 2, 'adi@gmail.com', 'rahul@gmail.com', '4/18/2019', 1000, 204),
(370, 4, 'zain@gmail.com', 'rahul@gmail.com', '4/18/2019', 290, 67),
(371, 3, 'p@gmail.com', 'rahul@gmail.com', '4/18/2019', 2500, 26),
(372, 4, 'p@gmail.com', 'ruhi@gmail.com', '4/18/2019', 1200, 27),
(373, 3, 'adi@gmail.com', 'prachi@gmail.com', '4/18/2019', 900, 68),
(374, 1, 'zain@gmail.com', 'prachi@gmail.com', '4/18/2019', 5000, 21),
(375, 3, 'adi@gmail.com', 'rahul@gmail.com', '4/18/2019', 500, 69),
(376, 1, 'zain@gmail.com', 'prachi@gmail.com', '4/18/2019', 1000, 205),
(377, 1, 'hsfcc8@gmail.com', 'prachi@gmail.com', '4/24/2019', 2000, 206),
(378, 3, 'hsfcc8@gmail.com', 'rahul@gmail.com', '4/24/2019', 200, 70),
(379, 1, 'adi@gmail.com', 'rahul@gmail.com', '5/21/2019', 3000, 207),
(380, 1, 'adi@gmail.com', 'prachi@gmail.com', '7/8/2019', 200, 208);

-- --------------------------------------------------------

--
-- Table structure for table `portfolio_tbl`
--

DROP TABLE IF EXISTS `portfolio_tbl`;
CREATE TABLE IF NOT EXISTS `portfolio_tbl` (
  `image_id` int(11) NOT NULL AUTO_INCREMENT,
  `fkdesigner_id` varchar(50) NOT NULL,
  `fksubcat_id` int(11) NOT NULL,
  `d_description` varchar(500) NOT NULL,
  `d_photo` varchar(100) NOT NULL,
  `image1` varchar(100) NOT NULL,
  `image2` varchar(100) NOT NULL,
  `image3` varchar(100) NOT NULL,
  `image4` varchar(100) NOT NULL,
  `image5` varchar(100) NOT NULL,
  `image6` varchar(100) NOT NULL,
  `video1` varchar(100) NOT NULL,
  `video2` varchar(100) NOT NULL,
  PRIMARY KEY (`image_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `portfolio_tbl`
--

INSERT INTO `portfolio_tbl` (`image_id`, `fkdesigner_id`, `fksubcat_id`, `d_description`, `d_photo`, `image1`, `image2`, `image3`, `image4`, `image5`, `image6`, `video1`, `video2`) VALUES
(1, 'prachi@gmail.com', 2, 'Welcome!\r\n\r\n\r\nEvery person has their own unique story.Here is a glimpse into mine.\r\n\r\nMy name is PRACHI SONI I am currently the Graduate Fellow and had completed my master\'s in advertising and designing and making documentary films , short films,corporate video films ,logo,leaflets and also providing different types of training like train the trainer ,motivational training and many more  since 3 Years.These are some of the projects that I have done .\r\n', 'pr4.png', 'lost.png', 'corporate.jpg', 'tutionleaflet.jpg', 'w1.jpg', 'trainer.jpg', 'trainer1.jpeg', '', ''),
(2, 'rahul@gmail.com', 2, 'Hey there !\r\n\r\nI am Rahul Sharma.I have worked with many companies and making documentary films , short films , web series , corporate video films,logo,leaflets,brouchers,and also giving different types of training like leadership training,motivational training and many more since 4 years .\r\nThese are some of the projects that I have done ..', 'Rahul1.jpg', 'docu1.jpg', 'cor1.jpg', 'bro1.png', 'hoarding.jpg', 'trainer2.jpg', 'trainer3.jpg', '', ''),
(3, 'ruhi@gmail.com', 2, 'Hello !\r\nMy name is Ruhannika Dhawan .\r\nI have Completed the course of advertising and designing from ABC university of Mumbai.From last 5 years I am in this field and making documentary film , short film , web series , logo , hoardings ,leaflets and providing different types of training like team building , motivational training and many more.\r\nThese are some of the projects I have done ', 'ruhi.jpg', 'cor2.jpg', 'shortfilm1.jpg', 'signboard.jpg', 'banner1.jpg', 'trainer4.jpg', 'trainer5.jpg', '', ''),
(4, 'mayank@gmail.com', 2, 'Hey There!\r\nMy name is Mayank Shah .\r\nEveryone has unique story.Here is glimpse of mine .\r\nI have been in this field of advertising and designing and making documentary films,short films , corporate video films , webseries , signboards, hoardings , leaflets ,logo and also providing different types of training like team building , train the trainer from last 2 years .\r\nThese are some of the projects that I have done.', 'mayank1.jpg', 'cor3.jpg', 'docu2.jpg', 'signboard1.jpg', 'dance.jpg', 'trainer6.jpg', 'trainer7.png', '', ''),
(5, 'arman@gmail.com', 2, 'Welcome ! I am ARMAN PATEL.\r\nHere is a glimpse of mine.\r\nI have completed course of designing and advertising from NBC university of Delhi and making documentary films , short films , web series ,corporate video films ,logo,hoardings , signboards, leaflets and also providing different types of training like train the trainer , leadership training and many more from last 5 years.\r\nThese are some of the projects that I have done .', 'arman1.jpg', 'cor4.jpg', '', 'pizza.jpg', 'hoarding1.jpg', 'trainer8.jpg', '', '', ''),
(6, 'kanishi@gmail.com', 2, '', 'kani.jpg', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `review_tbl`
--

DROP TABLE IF EXISTS `review_tbl`;
CREATE TABLE IF NOT EXISTS `review_tbl` (
  `review_id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(500) NOT NULL,
  `fkuser_id` varchar(50) NOT NULL,
  `fkdesigner_id` varchar(50) NOT NULL,
  `stars` int(11) NOT NULL,
  PRIMARY KEY (`review_id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `review_tbl`
--

INSERT INTO `review_tbl` (`review_id`, `description`, `fkuser_id`, `fkdesigner_id`, `stars`) VALUES
(1, 'Great work done by you.\r\nwe just really loved it .\r\nThank you', 'dhruvi@gmail.com', 'prachi@gmail.com', 4),
(2, 'Great work .', 'adi@gmail.com', 'rahul@gmail.com', 3),
(3, 'Excellent designer to realize your logos.Designer is responsive and motivate with a lot of creativity.I recommend this designer.', 'adi@gmail.com', 'prachi@gmail.com', 5),
(8, 'Nice work .Great work . I would like the people to recommend this site as well as this designer mr mayank.Thank you for this designing.', 'dhruvi@gmail.com', 'mayank@gmail.com', 5),
(5, 'Amazing  documentary film .Thank you .', 'zain@gmail.com', 'prachi@gmail.com', 4),
(6, 'Excellent web series .I recommend this designer ', 'radha@gmail.com', 'ruhi@gmail.com', 4),
(7, 'Great work done by you mr rahul .I would like to recommended this designer ', 'zain@gmail.com', 'rahul@gmail.com', 4),
(9, 'Great work done by you ms kanishi .I would like to recommended this designer .just love your work .', 'p@gmail.com', 'kanishi@gmail.com', 4),
(11, 'Great work done by you mr rahul .I would like to recommended this designer  if any one part in contest.', 'adi@gmail.com', 'rahul@gmail.com', 5),
(12, 'Nice work .Great work . I would like the people to recommend this site as well as this designer miss Prachi.Thank you for this designing.', 'adi@gmail.com', 'prachi@gmail.com', 4),
(13, 'hey rahulll', 'adi@gmail.com', 'rahul@gmail.com', 4),
(14, 'hey rahulll', 'hsfcc8@gmail.com', 'prachi@gmail.com', 2),
(15, 'Nice work .Great work . I would like the people to recommend this site as well as this designer mr mayank.Thank you for this designing.', 'adi@gmail.com', 'prachi@gmail.com', 3);

-- --------------------------------------------------------

--
-- Table structure for table `subcategory_tbl`
--

DROP TABLE IF EXISTS `subcategory_tbl`;
CREATE TABLE IF NOT EXISTS `subcategory_tbl` (
  `subcat_id` int(11) NOT NULL AUTO_INCREMENT,
  `subcat_name` varchar(40) NOT NULL,
  `fkcat_id` int(11) NOT NULL,
  PRIMARY KEY (`subcat_id`)
) ENGINE=MyISAM AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subcategory_tbl`
--

INSERT INTO `subcategory_tbl` (`subcat_id`, `subcat_name`, `fkcat_id`) VALUES
(1, 'Documentary Films', 1),
(2, 'Short Films', 1),
(3, 'Logo', 2),
(4, 'Leaflets', 2),
(5, 'Motivational', 3),
(6, 'Leadership', 3),
(7, 'Team Building', 3),
(8, 'Films - 2D , 3D , Animation', 1),
(9, 'Social Media Advertising', 1),
(10, 'Web Series', 1),
(11, 'Tag-line for product/business', 2),
(12, 'Brochure making', 2),
(13, 'Banner', 2),
(14, 'Signboard/Hoardings', 2),
(15, 'Do\'s and Dont\'s for your brand', 2),
(16, 'Art of Talkmatics', 3),
(17, 'Train the trainer', 3),
(18, 'Corporate video films', 1);

-- --------------------------------------------------------

--
-- Table structure for table `t_contest_tbl`
--

DROP TABLE IF EXISTS `t_contest_tbl`;
CREATE TABLE IF NOT EXISTS `t_contest_tbl` (
  `t_contest_id` int(11) NOT NULL AUTO_INCREMENT,
  `t_participants` int(11) NOT NULL,
  `t_type` varchar(20) NOT NULL,
  `t_budget` int(11) NOT NULL,
  `t_date` date NOT NULL,
  `t_title` varchar(20) NOT NULL,
  `t_company` varchar(20) NOT NULL,
  `t_help` varchar(100) NOT NULL,
  `s_time` varchar(20) NOT NULL,
  `e_time` varchar(20) NOT NULL,
  `fkuser_id` varchar(20) NOT NULL,
  `fkdesigner_id` varchar(20) NOT NULL,
  `fksubcat_id` int(11) NOT NULL,
  PRIMARY KEY (`t_contest_id`)
) ENGINE=MyISAM AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `t_contest_tbl`
--

INSERT INTO `t_contest_tbl` (`t_contest_id`, `t_participants`, `t_type`, `t_budget`, `t_date`, `t_title`, `t_company`, `t_help`, `s_time`, `e_time`, `fkuser_id`, `fkdesigner_id`, `fksubcat_id`) VALUES
(29, 2, 'ggg', 400, '2019-04-12', 'hhh', 'hhhh', 'hhh', '1:29:05 AM', '10 minutes', 'adi@gmail.com', 'rahul@gmail.com', 5);

-- --------------------------------------------------------

--
-- Table structure for table `t_hire_tbl`
--

DROP TABLE IF EXISTS `t_hire_tbl`;
CREATE TABLE IF NOT EXISTS `t_hire_tbl` (
  `t_id` int(11) NOT NULL AUTO_INCREMENT,
  `t_participants` int(11) NOT NULL,
  `t_type` varchar(20) NOT NULL,
  `t_budget` int(11) NOT NULL,
  `t_date` date NOT NULL,
  `t_title` varchar(15) NOT NULL,
  `t_company` varchar(20) NOT NULL,
  `t_help` varchar(100) NOT NULL,
  `fkuser_id` varchar(50) NOT NULL,
  `fkdesigner_id` varchar(50) NOT NULL,
  `fksubcat_id` int(11) NOT NULL,
  PRIMARY KEY (`t_id`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `t_hire_tbl`
--

INSERT INTO `t_hire_tbl` (`t_id`, `t_participants`, `t_type`, `t_budget`, `t_date`, `t_title`, `t_company`, `t_help`, `fkuser_id`, `fkdesigner_id`, `fksubcat_id`) VALUES
(1, 5, 'Teambuilding', 3000, '2019-01-01', 'xyz', 'Oberoi Ind.', 'we want to give teambuilding training to our emp', 'dhruvi@gmail.com', 'prachi@gmail.com', 7),
(2, 7, 'leadership', 3500, '2019-01-02', 'abc', 'khurana company', 'we want to give leadership training to emp', 'ranbir@gmail.com', 'rahul@gmail.com', 6),
(18, 6, 'prachitraining', 70, '2019-03-14', 'aaa', 'aaa', 'aaaaaaaaaaaaaaaaaaaaaaa', 'dhruvi@gmail.com', 'ruhi@gmail.com', 17),
(14, 8, 'presentaton', 6009, '2019-03-13', 'gggggg', 'gggggg', 'ggggggggg', 'dhruvi@gmail.com', 'ruhi@gmail.com', 16),
(17, 7, 'hello', 980, '2019-03-13', 'hhh', 'hhh', 'hhhh', 'dhruvi@gmail.com', 'arman@gmail.com', 6),
(16, 8, 'finaltraining', 6000, '2019-03-13', 'final', 'final', 'final', 'dhruvi@gmail.com', 'kanishi@gmail.com', 5),
(33, 3, 'hhhh', 700, '2019-04-04', 'hhhh', 'hhh', 'hhh', 'p@gmail.com', 'prachi@gmail.com', 6),
(32, 2, 'soni', 600, '2019-04-04', 'hhhh', 'hhhh', 'hhhh', 'p@gmail.com', 'ruhi@gmail.com', 7),
(34, 5, 'hhhh', 700, '2019-04-05', 'hhhh', 'hhh', 'hhh', 'p@gmail.com', 'prachi@gmail.com', 7),
(35, 2, 'ggg', 100, '2019-04-17', 'hhh', 'hhh', 'hhh', 'p@gmail.com', 'kanishi@gmail.com', 7),
(36, 2, 'kkkk', 300, '2019-04-18', 'jjjj', 'jjjjj', 'jjjjjjj', 'adi@gmail.com', 'ruhi@gmail.com', 5);

-- --------------------------------------------------------

--
-- Table structure for table `user_tbl`
--

DROP TABLE IF EXISTS `user_tbl`;
CREATE TABLE IF NOT EXISTS `user_tbl` (
  `email_id` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL,
  `name` varchar(10) NOT NULL,
  `mobile_no` bigint(20) NOT NULL,
  `gender` varchar(1) NOT NULL,
  `city` varchar(10) NOT NULL,
  `address` varchar(20) NOT NULL,
  `type` varchar(8) NOT NULL,
  PRIMARY KEY (`email_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_tbl`
--

INSERT INTO `user_tbl` (`email_id`, `password`, `name`, `mobile_no`, `gender`, `city`, `address`, `type`) VALUES
('prachi@gmail.com', 'prachi245', 'Prachi', 9825471365, 'f', 'abad', 'Paldi', 'Designer'),
('dhruvidoshi98@gmail.com', 'dhruvi12345', 'dhruvi', 8758162766, 'f', 'ahmedabad', 'ambawadi', 'User'),
('p@gmail.com', 'pmp201098', 'Priyanshi', 9624776677, 'f', 'Ahmedabad', 'Vasna', 'Admin'),
('rahul@gmail.com', 'rahul12345', 'Rahul', 9879507470, 'm', 'baroda', 'vasna', 'Designer'),
('adi@gmail.com', 'adi12345', 'aditya', 9999999999, 'm', 'mumbai', 'church gate', 'User'),
('ranbir@gmail.com', 'ranbir', 'Ranbir', 9898989898, 'm', 'surat', 'paldi', 'Admin'),
('ruhi@gmail.com', 'ruhi', 'Ruhannika', 9234323454, 'f', 'surat', 'vasna,paldi', 'Designer'),
('mayank@gmail.com', 'mayank', 'Mayank', 9876555555, 'm', 'surat', 'surat,paldi', 'Designer'),
('arman@gmail.com', 'arman', 'Arman', 9834343434, 'm', 'baroda', 'vasna,baroda', 'Designer'),
('kanishi@gmail.com', 'kanishi', 'Kanishi', 9834565656, 'f', 'baroda', 'vasna,baroda', 'Designer'),
('mauli@gmail.com', 'mauli1496', 'Mauli Soni', 9428598887, 'f', 'ahmedabad', 'Paldi', 'User'),
('janki@gmail.com', 'janki7599', 'Janki', 9999999999, 'F', 'baroda', 'vasna,paldi', 'User'),
('hetal@gmail.com', 'hetal12345', 'Hetal soni', 9876565656, 'F', 'ahmedabad', 'vasna,paldi', 'User'),
('zain@gmail.com', 'zain123456', 'zain imam', 8889507470, 'M', 'ahmedabad', 'juhu,mumbai', 'User'),
('radha@gmail.com', 'radha12345', 'radha', 9898564345, 'f', 'surat', '1,amikrupa appt', 'User'),
('hina@gmail.com', 'hina12345', 'hina soni', 9879111111, 'f', 'ahmedabad', 'baroda', 'User'),
('shyam@gmail.com', 's1234567', 'shyam soni', 1111111111, 'm', 'ahmedabad', 'ambawadi', 'User'),
('shivani@gmail.com', 'shivani12345', 'shivani', 9999977777, 'f', 'baroda', 'vasna', 'User'),
('bina@gmail.com', 'bina12345', 'bina', 9999999996, 'f', 'baroda', 'vasna', 'User'),
('hsfcc8@gmail.com', 'hsfcc123', 'hemant', 9876555444, 'f', 'surat', 'vasna', 'User');

-- --------------------------------------------------------

--
-- Table structure for table `workgall_tbl`
--

DROP TABLE IF EXISTS `workgall_tbl`;
CREATE TABLE IF NOT EXISTS `workgall_tbl` (
  `w_id` int(11) NOT NULL AUTO_INCREMENT,
  `w_img` varchar(100) NOT NULL,
  `fkcat_id` int(11) NOT NULL,
  PRIMARY KEY (`w_id`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `workgall_tbl`
--

INSERT INTO `workgall_tbl` (`w_id`, `w_img`, `fkcat_id`) VALUES
(1, 'w1.jpg', 2),
(2, 'w2.jpg', 2),
(3, 'bro1.png', 2),
(4, 'l3.jpg', 2),
(5, 's1.png', 2),
(6, 'lost.png', 1),
(7, 'w8.jpg', 1),
(8, 'hsf.jpg', 2),
(9, 'l2.jpg', 2),
(10, 'logo1.png', 2),
(11, 'pravi.jpg', 2),
(12, 'pizza.jpg', 2),
(13, 'trainer.jpg', 3),
(14, 'trainer1.jpeg', 3),
(15, 'trainer2.jpg', 3),
(16, 'trainer3.jpg', 3),
(17, 'trainer4.jpg', 3),
(18, 'trainer5.jpg', 3),
(19, 'travel.jpg', 2),
(20, 'tut.jpg', 2),
(21, 'w2.jpg', 2),
(22, 'w3.png', 2),
(23, 'w4.jpg', 2),
(24, 'w5.jpg', 2),
(25, 'w6.png', 2),
(26, 'w7.png', 2),
(27, 'w10.jpg', 3),
(28, 'w11.png', 3),
(29, 'w12.jpg', 3),
(30, 'documentary.jpg', 1),
(31, 'cor1.jpg', 1),
(32, 'cor2.jpg', 1),
(33, 'cor3.jpg', 1),
(34, 'cor4.jpg', 1),
(35, 'docu2.jpg', 1),
(36, 'l1.png', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `b_contest_tbl`
--
ALTER TABLE `b_contest_tbl` ADD FULLTEXT KEY `b_description` (`b_description`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
