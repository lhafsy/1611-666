/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : lianjiawang

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2017-03-31 15:49:12
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
  `Mask` varchar(255) DEFAULT NULL,
  `home` varchar(255) DEFAULT NULL,
  `MaskSynopsis` varchar(255) DEFAULT NULL,
  `homePrice` varchar(255) DEFAULT NULL,
  `homeFeaturea` varchar(255) DEFAULT NULL,
  `homeValue` varchar(255) DEFAULT NULL,
  `homeStyle` varchar(255) DEFAULT NULL,
  `homeProportion` varchar(255) DEFAULT NULL,
  `homeDownPayment` varchar(255) DEFAULT NULL,
  `homeRegiterDate` varchar(255) DEFAULT NULL,
  `homeFloor` varchar(255) DEFAULT NULL,
  `homeDirection` varchar(255) DEFAULT NULL,
  `homeTnim` varchar(255) DEFAULT NULL,
  `homeType` varchar(255) DEFAULT NULL,
  `homeAge` varchar(255) DEFAULT NULL,
  `homeArea` varchar(255) DEFAULT NULL,
  `checkingTime` varchar(255) DEFAULT NULL,
  `number` varchar(255) DEFAULT NULL,
  `metro` varchar(255) DEFAULT NULL,
  `plot` varchar(255) DEFAULT NULL,
  `useful` varchar(255) DEFAULT NULL,
  `pageHomeName` varchar(255) DEFAULT NULL,
  `listHimg` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`homeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of home
-- ----------------------------
INSERT INTO `home` VALUES ('1', '../img/house3.jpg', '金碧二期 格局方正 厅直出阳台 采光通透', '360 万', '5262', '广州', '竹楼是傣族传统的建筑形式。傣族人民居住区地处亚热带，地温高，据说竹楼利于防止酷热和湿气，因此，傣族人家至今依然保持着“多起竹楼，傍水而居”的习惯', '毛坯房是中国特色，装修成为业主拿到钥匙的心头大事。住宅的装修要遵循舒适的原则，住宅不是夜总会，是人休息的地方，要将住宅装修得没有压力。', '3室1厅/89m²/南/金碧', '[{\"str\":\"近市区\"}]', '[{\"a\":\"../img/11.jpg\",\"name\":\"lha\",\"score\":\"评分:5 \",\"cishu\":\"本房带看4次\",\"pj\":\"41评价\"},{\"a\":\"../img/22.jpg\",\"name\":\"fsy\",\"score\":\"评分:5\",\"cishu\":\"本房带看61次\",\"pj\":\"142评价\"},{\"a\":\"../img/33.jpg\",\"name\":\"lhafsy\",\"score\":\"评分:215\",\"cishu\":\"本房带看146次\",\"pj\":\"1242评价\"}]', null, '本房信息由我更新维护，有变化最快得知', '43300', null, '360万', '3室1厅', '89', '首付：108万', '挂牌：2017-3-15', '楼层：低楼层/28', '方向：向南', '装修：其他', '楼型：塔楼', '年代：2000年', '区域：海珠、金碧', '看房时间：提前预约随时可看', '房子编号：GZ0002548201', '地铁：距离2号线东晓南地铁站较近', '小区：金碧花园', '用途：普通', '金碧二期  三室一厅  360万', '[{\"listHimg\":\"../img/listhousea1.html\"},{\"listHimg\":\"../img/listhousea2.html\"},{\"listHimg\":\"../img/listhousea3.html\"}]');
INSERT INTO `home` VALUES ('2', '../img/house2.jpg', '丰乐小区 繁华地段 配套齐全 电梯三房', '190 万', '5351', '梧州', '这种窑洞一般修在朝南的山坡上。向阳，被靠山。门朝开阔的地带，少有树木遮挡。一个院的窑洞一般只修3个至5个。最中间的为正窑，两边常放杂物或是小的房间，也可以贮存粮食。', '  住宅装修品质的标准不是绝对的，必须体现基本的价值，如安全、私密、舒适、温馨，通风良好，采光充足，动静协调不冲突，空间摆设比例适当，材质颜色协调，流畅、平衡，所以好房子的标准也要加入精装修这一条。', '3室1厅/72.75m²/东北/区府', '[{\"str\":\"满五年\"}]', '[{\"a\":\"../img/11.jpg\",\"name\":\"lha\",\"score\":\"评分:5 \",\"cishu\":\"本房带看4次\",\"pj\":\"41评价\"},{\"a\":\"../img/22.jpg\",\"name\":\"fsy\",\"score\":\"评分:5\",\"cishu\":\"本房带看61次\",\"pj\":\"142评价\"}]', null, '我最近带看过本房10次，非常清除本房源特色', '25333', null, '190万', '4室1厅', '72.7', '首付：90万', '挂牌：2017-1-23', '楼层：低楼层/10', '方向：向东', '装修：其他', '楼型：塔楼', '年代：2005年', '区域：梧州、丰乐', '看房时间：提前预约随时可看', '房子编号：GZ0432548234', '地铁：距离2号线东晓南地铁站较近', '小区：丰乐小区', '用途：普通', '丰乐小区  三室一厅  360万', '[{\"listHimg\":\"../img/listhouseb1.html\"},{\"listHimg\":\"../img/listhouseb2.html\"},{\"listHimg\":\"../img/listhouseb3.html\"}]');
INSERT INTO `home` VALUES ('3', '../img/house1.jpg', '骏景花园高层两房 可改小三房 新装修', '101 万', '6537', '广州', '羌族是四川的一个少数民族，他们独具特色的民居就是----碉楼。', '使用涂料，当和其他不同材料接触时，交结处必须像刀一样的整齐，不能糊在一起，特别是铝门窗的交接，最好用胶布将窗边贴满，再上涂料', '2室1厅/62.39m²/西南/工业大道中', '[{\"str\":\"近地铁\"}]', '[{\"a\":\"../img/11.jpg\",\"name\":\"lha\",\"score\":\"评分:5 \",\"cishu\":\"本房带看4次\",\"pj\":\"41评价\"}]', null, '我最近带看过本房2次，非常清除本房源特色', '17722', null, '101万', '3室1厅', '62.3', '首付：50万', '挂牌：2017-2-28', '楼层：低楼层/8', '方向：向西', '装修：其他', '楼型：塔楼', '年代：2002年', '区域：天河、元岗', '看房时间：提前预约随时可看', '房子编号：GZ0022548247', '地铁：距离2号线东晓南地铁站较近', '小区：骏景花园', '用途：普通', '骏景花园  四室一厅  360万', '[{\"listHimg\":\"../img/listhousec1.html\"},{\"listHimg\":\"../img/listhousec2.html\"},{\"listHimg\":\"../img/listhousec3.html\"}]');
INSERT INTO `home` VALUES ('4', '../img/house4.jpg', '保利花园 电梯楼 方正四房', '480 万', '6432', '北京', '羌族人有“依山而居，垒石为屋，高者十余丈”的习俗。碉楼的高度在十米至三十米之间。用于御敌、贮存粮食和柴草。羌族民居为石片砌成，平顶房，呈正方形。多数为三层，每层高约三至四米。有着强烈传统民俗文化。', '其他如吸顶灯、电灯开关板、门、把手等等，则应该在涂料完成后再安装', '4室1厅/112.39m²/西南/工业大道中', '[{\"str\":\"有电梯\"}]', '[{\"a\":\"../img/11.jpg\",\"name\":\"lha\",\"score\":\"评分:5 \",\"cishu\":\"本房带看4次\",\"pj\":\"41评价\"},{\"a\":\"../img/22.jpg\",\"name\":\"fsy\",\"score\":\"评分:5\",\"cishu\":\"本房带看61次\",\"pj\":\"142评价\"}]', null, '本房信息由我更新维护，有变化最快得知', '42802', null, '480万', '4室1厅', '112', '首付：200万', '挂牌：2017-1-05', '楼层：低楼层/15', '方向：向南', '装修：其他', '楼型：塔楼', '年代：2008年', '区域：北京四环', '看房时间：提前预约随时可看', '房子编号：GZ0002540122', '地铁：距离2号线东晓南地铁站较近', '小区：保利花园', '用途：普通', '保利花园  四室一厅  360万', '[{\"listHimg\":\"../img/listhoused1.html\"},{\"listHimg\":\"../img/listhoused2.html\"},{\"listHimg\":\"../img/listhoused3.html\"}]');
INSERT INTO `home` VALUES ('5', '../img/house5.jpg', '中信广场 实用三房 户型方正', '740 万', '7234', '广州', '该单位位于电梯中高层，间隔方正实用，通风采光非常好。北北望东站大花园。', '间隔方正实用，通风采光非常好。北北望东站大花园。住家精致装修，厅是落地飘窗。', '3室2厅/183.65m²/北/天河', '[{\"str\":\"有电梯\"}]', '[{\"a\":\"../img/11.jpg\",\"name\":\"lha\",\"score\":\"评分:5 \",\"cishu\":\"本房带看4次\",\"pj\":\"41评价\"},{\"a\":\"../img/22.jpg\",\"name\":\"fsy\",\"score\":\"评分:5\",\"cishu\":\"本房带看61次\",\"pj\":\"142评价\"}]', null, '本房信息由我更新维护，有变化最快得知', '37455', null, '740万', '3室2厅', '183.65', '首付：222万', '挂牌：2016-12-25', '楼层：中楼层/38', '方向：向北', '装修：简装', '楼型：塔楼', '年代：2000年', '区域：天河、天河北', '看房时间：提前预约随时可看', '房子编号：GZ0002545394', '地铁：距离3号线北延段林和西地铁站147米', '小区：中信广场', '用途：普通', '中信广场  三室两厅  740万', '{\"listHimg\":\"../img/listhousea3.html\"}]');
INSERT INTO `home` VALUES ('6', '../img/house6.jpg', '荟雅苑3房 住家装修 交通方便', '630 万', '8287', '广州', '简洁干净住家装修，白石灰刷胶墙， 白地板砖 ，高品质木门', ' 洗手间白质模糊玻璃门，保养好', '3室2厅/113.55m²', '[{\"str\":\"有电梯\"}]', '[{\"a\":\"../img/11.jpg\",\"name\":\"lha\",\"score\":\"评分:5 \",\"cishu\":\"本房带看4次\",\"pj\":\"41评价\"},{\"a\":\"../img/22.jpg\",\"name\":\"fsy\",\"score\":\"评分:5\",\"cishu\":\"本房带看61次\",\"pj\":\"142评价\"}]', null, '本房信息由我更新维护，有变化最快得知', '55483', null, '630万', '3室2厅', '113.55', '首付：189万', '挂牌：2017-3-10', '楼层：中楼层/31', '方向：向北', '装修：精装', '楼型：塔楼', '年代：2008年', '区域：天河、天河北', '看房时间：提前预约随时可看', '房子编号：GZ0002530304', '地铁：距离3号线北延段林和西地铁站390米', '小区：荟雅苑', '用途：普通', '荟雅苑 三室两厅 630万', '{\"listHimg\":\"../img/listhousea3.html\"}]');
INSERT INTO `home` VALUES ('7', '../img/house7.jpg', '精装朝南 单室套 楼层好 采光佳', '85   万', '2318', '江苏', '此房满五年，楼层好，采光佳， 没有增值税，。', '只有个税和契税', '1室0厅/34.47m²', '[{\"str\":\"满5年\"}]', '[{\"a\":\"../img/11.jpg\",\"name\":\"lha\",\"score\":\"评分:5 \",\"cishu\":\"本房带看4次\",\"pj\":\"41评价\"}', null, '本房信息由我更新维护，有变化最快得知', '28769', null, '85万', '1室0厅', '34.47', '首付：26万', '挂牌：2017-3-19', '楼层：中楼层/11', '方向：向南', '装修：其他', '楼型：塔楼', '年代：2003年', '区域：江宁、将军大道', '看房时间：提前预约随时可看', '房子编号：103101114120', '地铁：距离S1机场线翠屏山地铁站462米', '小区：托乐嘉单身公寓', '用途：普通', '精装朝南 单室套  85万', '[{\"listHimg\":\"../img/listhousec1.html\"},{\"listHimg\":\"../img/listhousec2.html\"},{\"listHimg\":\"../img/listhousec3.html\"}]');
INSERT INTO `home` VALUES ('8', '../img/house8.jpg', '保利.香槟国际 3室2厅 200万', '200 万', '6731', '安徽', '此房满两年，免了增值税，户型南北通透', '三开间朝南，楼层好', '3室2厅/98m²/南', null, '[{\"a\":\"../img/11.jpg\",\"name\":\"lha\",\"score\":\"评分:5 \",\"cishu\":\"本房带看4次\",\"pj\":\"41评价\"},{\"a\":\"../img/22.jpg\",\"name\":\"fsy\",\"score\":\"评分:5\",\"cishu\":\"本房带看61次\",\"pj\":\"142评价\"},{\"a\":\"../img/33.jpg\",\"name\":\"lhafsy\",\"score\":\"评分:215\",\"cishu\":\"本房带看146次\",\"pj\":\"1242评价\"}]', null, '本房信息由我更新维护，有变化最快得知', '20409', null, '200万', '3室2厅', '98', '首付：60万', '挂牌：2017-3-22', '楼层：中楼层/33', '方向：向南', '装修：其他', '楼型：暂无数据', '年代：暂无数据', '区域：高新、兴园', '看房时间：提前预约随时可看', '房子编号：103101123540', null, '小区：香槟国际', '用途：普通', '保利.香槟国际 3室2厅 200万', '[{\"listHimg\":\"../img/listhousea1.html\"},{\"listHimg\":\"../img/listhousea2.html\"},{\"listHimg\":\"../img/listhousea3.html\"}]');
