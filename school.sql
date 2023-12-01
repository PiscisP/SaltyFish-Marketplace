/*
 Navicat Premium Data Transfer

 Source Server         : 120.78.187.96
 Source Server Type    : MySQL
 Source Server Version : 50734
 Source Host           : 120.78.187.96:3306
 Source Schema         : school

 Target Server Type    : MySQL
 Target Server Version : 50734
 File Encoding         : 65001

 Date: 25/04/2022 01:11:16
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;



-- ----------------------------
-- Table structure for school_commodity
-- ----------------------------
DROP TABLE IF EXISTS `school_commodity`;
CREATE TABLE `school_commodity`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Product ID',
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Product Description',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'product title',
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'product type',
  `image` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'product image',
  `price` decimal(10, 2) NOT NULL COMMENT 'product price',
  `createAt` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT 'creat time',
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'deal address',
  `userId` int(10) UNSIGNED NOT NULL COMMENT 'user ID',
  `recommend` int(255) NOT NULL DEFAULT 0 COMMENT 'Recommend or not',
  `seller` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'seller name',
  `isrelease` int(255) NULL DEFAULT 1 COMMENT 'publish or not ',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 25 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of school_commodity
-- ----------------------------
INSERT INTO `school_commodity` VALUES (1, 'second hand book, packed to go', 'second hand book', '3', 'https://assets.penguinrandomhouse.com/wp-content/uploads/2018/03/05105825/1200x628_instagrammable.jpg', 12.50, '2023-11-25 20:01:45', 'SCUXXXXXXXX', 1, 0, 'Rocky', 0);
INSERT INTO `school_commodity` VALUES (2, 'second hand book, packed to go', 'second hand book', '3', 'https://assets.penguinrandomhouse.com/wp-content/uploads/2018/03/05105825/1200x628_instagrammable.jpg', 12.50, '2023-11-24 20:18:36', 'SCUXXXXXXXX', 1, 1, 'Rocky', 1);
INSERT INTO `school_commodity` VALUES (3, 'second hand book, packed to go', 'second hand book', '3', 'https://assets.penguinrandomhouse.com/wp-content/uploads/2018/03/05105825/1200x628_instagrammable.jpg', 12.50, '2023-11-24 14:22:33', 'SCUXXXXXXXX', 1, 0, 'Pocky', 1);
INSERT INTO `school_commodity` VALUES (4, 'A fancy tea cup, orginal price is 23, a great deal right now ', 'tea cups', '6', 'https://m.media-amazon.com/images/I/61pFP3+lrPL.jpg', 1.50, '2023-11-24 09:31:59', 'SCUXXXXXXXX', 5, 1, 'yuumi', 1);
INSERT INTO `school_commodity` VALUES (5, 'A Ikea table，used only half year,', 'Ikea table', '6', 'https://www.ikea.com/us/en/images/products/linnmon-adils-table-white__0737165_pe740925_s5.jpg?f=xl', 30.00, '2023-11-24 09:32:00', 'SCUXXXXXXXX', 5, 1, 'yuumi', 1);
INSERT INTO `school_commodity` VALUES (6, 'A sofa bed，there are some scratch ', 'sofa bed', '6', 'https://cdn-images.article.com/products/SKU17040/2890x1500/image66845.jpg', 300.00, '2023-11-24 09:32:01', 'SCUXXXXXXXX', 5, 1, 'yuumi', 1);
INSERT INTO `school_commodity` VALUES (7, 'A wooden chair', 'chair', '6', 'https://cdn-images.article.com/products/SKU15417/2890x1500/image65744.jpg', 1.50, '2023-11-24 09:32:01', 'SCUXXXXXXXX', 5, 1, 'yuumi', 1);
INSERT INTO `school_commodity` VALUES (8, 'A wooden dinner table', 'dining-table', '6', 'https://res.cloudinary.com/castlery/image/private/w_1920,f_auto,q_auto/b_rgb:FFFFFF,c_fit/v1657271967/crusader/variants/PB-DR0109/Seb-Dining-Squaie-Table-Set8__1_-1657271965.jpg', 888.50, '2023-11-24 09:32:02', 'SCUXXXXXXXX', 5, 1, 'yuumi', 1);
INSERT INTO `school_commodity` VALUES (9, 'exercise bike, spend thousands dollars before, want to buy a new one, have orignial receipt', 'second hand exercise bike', '2', 'https://m.media-amazon.com/images/I/71PVBwDOTAL._AC_UF1000,1000_QL80_.jpg', 500.00, '2023-11-24 09:31:41', 'san jose', 7, 0, 'Andy', 1);
INSERT INTO `school_commodity` VALUES (10, ' bike, spend thousands dollars before, want to buy a new one, have orignial receipt', ' bike', '2', 'https://target.scene7.com/is/image/Target/GUEST_e3e9aa8c-8360-4aa5-a257-76f00d088957?wid=1000&hei=1000&qlt=80&fmt=pjpeg', 500.00, '2023-11-24 09:32:03', 'san jose', 7, 1, 'Andy', 0);
INSERT INTO `school_commodity` VALUES (11, 'brand new frying pan', 'fry pan', '6', 'https://m.media-amazon.com/images/I/71nd7YSIRGL.jpg', 500.00, '2023-11-24 09:31:43', 'san jose', 7, 0, 'Andy', 1);
INSERT INTO `school_commodity` VALUES (12, 'A expensive bowl', 'bowl', '2', 'https://m.media-amazon.com/images/I/41Jg9K5MpsL._AC_SL1130_.jpg', 500.00, '2023-11-24 09:32:04', 'san jose', 7, 1, 'Andy', 0);
INSERT INTO `school_commodity` VALUES (14, 'children gamepad, more than 5000 child game', 'gamepad', '5', 'https://m.media-amazon.com/images/I/71WzEVtX4yL._AC_UF894,1000_QL80_.jpg', 12.00, '2023-11-24 09:32:13', 'SJSU', 6, 1, 'Mia', 1);
INSERT INTO `school_commodity` VALUES (15, 'a switch with XXXXXXX', 'switch', '5', 'https://m.media-amazon.com/images/I/71pIS8f417L._SL1500_.jpg', 12.00, '2023-11-24 09:32:05', 'SJSU', 6, 1, 'Mia', 1);
INSERT INTO `school_commodity` VALUES (16, 'children gamepad, more than 5000 child game', 'headphone', '5', 'https://m.media-amazon.com/images/I/61z-rTknwVS._AC_SL1500_.jpg', 12.00, '2023-11-24 09:31:47', 'SJSU', 6, 0, 'Mia', 1);
INSERT INTO `school_commodity` VALUES (17, 'A pack of snacks, never open, brand new ', 'a pack of snacks', '10', 'https://m.media-amazon.com/images/I/81EfJxnaJ3L._SL1200_.jpg', 20.00, '2023-11-24 09:27:45', ' The Benton', 7, 0, 'Li', 0);
INSERT INTO `school_commodity` VALUES (18, 'A pack of snacks, never open, brand new ', 'a pack of snacks', '10', 'https://m.media-amazon.com/images/I/81EfJxnaJ3L._SL1200_.jpg', 20.00, '2023-11-24 09:32:12', ' The Benton', 7, 1, 'Li', 1);
INSERT INTO `school_commodity` VALUES (22, 'switch games', 'switch games', '1', 'https://qvc.scene7.com/is/image/QVC/e/10/e318410_180.102?$aempdlarge$', 33.00, '2023-11-23 17:03:59', 'SCUXXX', 7, 1, 'Mr.good', 1);
INSERT INTO `school_commodity` VALUES (23, '80% new', 'Retro Vintage Radio', '1', 'https://m.media-amazon.com/images/I/811mAg3gU+L._AC_SL1500_.jpg', 15.00, '2023-11-24 19:50:57', 'SCU Benson', 8, 1, 'Jack', 1);
INSERT INTO `school_commodity` VALUES (24, 'Brand new, never opened before', 'SKII', '9', 'https://cdn11.bigcommerce.com/s-x3hur0xe4r/images/stencil/500w/products/218/1808/01_Hero_330ml__47189.1697229404.png', 180.00, '2023-11-23 20:22:42', 'SCU Benson', 8, 0, 'Five', 0);

-- ----------------------------
-- Table structure for school_need
-- ----------------------------
DROP TABLE IF EXISTS `school_need`;
CREATE TABLE `school_need`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `goods` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `userid` int(10) UNSIGNED NULL DEFAULT NULL,
  `create_time` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `through` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `uid`(`userid`) USING BTREE,
  CONSTRAINT `uid` FOREIGN KEY (`userid`) REFERENCES `school_user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of school_need
-- ----------------------------
INSERT INTO `school_need` VALUES (1, 'Lee', 'earpods', 'SCU Library', 5, '2023-11-25 12:17:57', 1);
INSERT INTO `school_need` VALUES (2, 'Red', 'charger', 'Oconor 215', 1, '2023-11-25 12:17:58', 1);
INSERT INTO `school_need` VALUES (3, 'Peter', 'Needs a table, please!', 'Domicilo', 5, '2023-11-25 12:17:58', 1);
INSERT INTO `school_need` VALUES (4, 'Peter', 'Needs a table, please!', 'Domicilo', 7, '2023-11-25 12:17:59', 1);
INSERT INTO `school_need` VALUES (5, 'Peter', 'Needs a table, please!', 'Domicilo', 1, '2023-11-25 12:18:00', 1);
INSERT INTO `school_need` VALUES (6, 'Peter', 'Needs a table, please!', 'Domicilo', 6, '2023-11-25 16:40:07', 0);
INSERT INTO `school_need` VALUES (7, 'Lee', 'I want a 90% new iphone', 'Domicilo', 7, '2023-11-25 16:40:06', 0);
INSERT INTO `school_need` VALUES (8, 'Lee', 'I want a 90% new iphone', 'Domicilo', 7, '2023-11-25 16:40:09', 0);
INSERT INTO `school_need` VALUES (9, 'Lee', 'I want a 90% new iphone', 'Domicilo', 7, '2023-11-25 16:40:12', 0);
INSERT INTO `school_need` VALUES (10, 'Lee', 'I want a 90% new iphone', 'Domicilo', 7, '2023-11-25 12:18:03', 1);
INSERT INTO `school_need` VALUES (11, 'Lee', 'I want a 90% new iphone', 'Domicilo', 7, '2023-11-25 12:18:04', 1);
INSERT INTO `school_need` VALUES (12, 'Zhang', 'English book', 'library', 1, '2023-11-25 16:40:03', 1);
INSERT INTO `school_need` VALUES (19, 'Ben', 'want an Airpods pro', 'Beson 1st floor', 8, '2023-11-23 19:51:42', 1);

-- ----------------------------
-- Table structure for school_user
-- ----------------------------
DROP TABLE IF EXISTS `school_user`;
CREATE TABLE `school_user`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'User ID',
  `username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'User name',
  `gender` tinyint(1) NULL DEFAULT 0 COMMENT 'User gender:0male 1female',
  `age` int(11) NULL DEFAULT 0 COMMENT 'User age',
  `school` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'User school',
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'User phone number',
  `introduction` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'self introduction',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'User password',
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'create time',
  `updateAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'update time',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of school_user
-- ----------------------------
INSERT INTO `school_user` VALUES (1, 'nli123', 0, 18, 'SCU', '4089089999', 'I am the Admin', 'A12345a', '2022-04-16 23:55:24', '2023-11-23 20:18:03');
INSERT INTO `school_user` VALUES (5, 'admin123', 0, 18, 'nimbid', '12345678911', 'sfjlsjfslkfjslslfjslkd', '8e6c88ab7ef45df5fe7cd39095c20e22', '2022-04-19 16:19:25', '2023-11-23 11:22:50');
INSERT INTO `school_user` VALUES (6, 'pxk123456', 0, 18, '123456', '', 'No introduction', '8e6c88ab7ef45df5fe7cd39095c20e22', '2022-04-19 16:31:47', '2023-11-25 14:41:55');
INSERT INTO `school_user` VALUES (7, 'ly123456', 0, 18, 'SCU', '13874006060', 'wdcjkne2enin2in', '03bbbdf309a3db38a545cc7008de09bb', '2022-04-20 11:26:15', '2023-11-23 12:06:13');
INSERT INTO `school_user` VALUES (8, 'Action123', 0, 18, 'SCU', '17680394053', 'No introduction', 'c99ee0aef1eb1490f115cb5d1c3a8729', '2023-11-23 19:38:53', '2023-11-23 20:20:20');

SET FOREIGN_KEY_CHECKS = 1;
