/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : mfw

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2017-03-24 16:35:05
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `home`
-- ----------------------------
DROP TABLE IF EXISTS `home`;
CREATE TABLE `home` (
  `homeID` int(255) NOT NULL,
  `homeSeat` varchar(255) NOT NULL,
  `homeMsg` varchar(255) NOT NULL,
  `homeEvaluate` varchar(255) NOT NULL,
  `homeFeature` varchar(255) NOT NULL,
  `homePosition` varchar(255) NOT NULL,
  `homeSizes` varchar(255) NOT NULL,
  `homeBvice` varchar(255) NOT NULL,
  `homeMessage` varchar(255) NOT NULL,
  `homeImg` varchar(255) NOT NULL,
  PRIMARY KEY (`homeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of home
-- ----------------------------
