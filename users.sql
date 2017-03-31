/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : hq

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2017-03-29 20:08:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `uid` int(255) NOT NULL AUTO_INCREMENT,
  `usersname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('2', '111', '111');
INSERT INTO `users` VALUES ('3', '111', 'jimmy');
INSERT INTO `users` VALUES ('4', '111', 'jimmy');
INSERT INTO `users` VALUES ('5', '444', '4444');
INSERT INTO `users` VALUES ('6', '444', '4444');
INSERT INTO `users` VALUES ('7', '2222', '2222');
INSERT INTO `users` VALUES ('8', '11111', '1111');
INSERT INTO `users` VALUES ('43', '1111', '11112');
INSERT INTO `users` VALUES ('44', '233333', '3333');
INSERT INTO `users` VALUES ('45', '2323', '1123');
INSERT INTO `users` VALUES ('46', '11133', '123');
