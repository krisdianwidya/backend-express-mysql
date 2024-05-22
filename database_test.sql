-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2024 at 06:23 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `database_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `employee_id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `gender` char(1) NOT NULL,
  `role` varchar(20) NOT NULL,
  `salary` int(11) NOT NULL,
  `birth_date` date NOT NULL,
  `join_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`employee_id`, `first_name`, `last_name`, `gender`, `role`, `salary`, `birth_date`, `join_date`) VALUES
(1, 'John', 'Doe', 'M', 'Admin', 2400000, '1998-01-15', '2022-05-20'),
(2, 'Jane', 'Smith', 'F', 'Kasir', 1200000, '1997-03-22', '2023-08-01'),
(3, 'Michael', 'Johnson', 'M', 'Staff Gudang', 1000000, '1985-07-10', '2022-09-15'),
(4, 'Emily', 'Davis', 'F', 'Koki', 2450000, '1999-11-30', '2022-01-20'),
(5, 'Robert', 'Brown', 'M', 'Barista', 2300000, '1999-05-25', '2022-03-12'),
(6, 'Linda', 'Wilson', 'F', 'Admin', 2000000, '2000-09-14', '2024-02-23'),
(7, 'James', 'Moore', 'M', 'Kasir', 750000, '2003-12-05', '2024-06-18'),
(8, 'Patricia', 'Taylor', 'F', 'Staff Gudang', 850000, '2004-08-19', '2024-04-22'),
(9, 'David', 'Anderson', 'M', 'Koki', 1850000, '2003-10-11', '2024-07-03'),
(10, 'Susan', 'Thomas', 'F', 'Barista', 1600000, '2002-06-29', '2024-11-05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`employee_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `employee_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
