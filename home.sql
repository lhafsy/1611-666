/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : mfw

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2017-03-25 08:55:05
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `home`
-- ----------------------------
DROP TABLE IF EXISTS `home`;
CREATE TABLE `home` (
  `homeId` int(11) NOT NULL DEFAULT '0',
  `homeImg` varchar(255) DEFAULT NULL,
  `homeMessage` varchar(255) DEFAULT NULL,
  `homeBvice` varchar(255) DEFAULT NULL,
  `homeSizes` int(11) DEFAULT NULL,
  `homePosition` varchar(255) DEFAULT NULL,
  `homeFeature` varchar(255) DEFAULT NULL,
  `homeEvaluate` varchar(255) DEFAULT NULL,
  `homeMsg` varchar(255) DEFAULT NULL,
  `homeSeat` varchar(255) DEFAULT NULL,
  `Maskname` varchar(255) DEFAULT NULL,
  `MaskNumber` varchar(255) DEFAULT NULL,
  `MaskSynopsis` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`homeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of home
-- ----------------------------
