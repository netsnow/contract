# noinspection SqlNoDataSourceInspectionForFile
# INSERT INTO user (id, username, password, firstname, lastname, email, enabled, lastpasswordresetdate) VALUES (1, 'admin', '$2a$08$lDnHPz7eUkSi6ao14Twuau08mzhWrL4kyZGGU5xfiGALO/Vxd5DOi', 'admin', 'admin', 'admin@admin.com', 1, PARSEDATETIME('01-01-2016', 'dd-MM-yyyy'));
# INSERT INTO user (id, username, password, firstname, lastname, email, enabled, lastpasswordresetdate) VALUES (2, 'user', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'user', 'user', 'enabled@user.com', 1, PARSEDATETIME('01-01-2016','dd-MM-yyyy'));
# INSERT INTO user (id, username, password, firstname, lastname, email, enabled, lastpasswordresetdate) VALUES (3, 'disabled', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'user', 'user', 'disabled@user.com', 0, PARSEDATETIME('01-01-2016','dd-MM-yyyy'));

INSERT INTO deparment (id, deparmentname, deparmentshortname) VALUES (1, '系统默认部门', '01');

INSERT INTO USER (id, username, password, firstname, lastname, email, enabled, lastpasswordresetdate, deparment_id,userno,fullname) values (1, 'admin', '$2a$08$lDnHPz7eUkSi6ao14Twuau08mzhWrL4kyZGGU5xfiGALO/Vxd5DOi', 'admin', 'admin', 'admin@admin.com', 1, '2016-01-01', 1,0001,"admin123");
INSERT INTO USER (id, username, password, firstname, lastname, email, enabled, lastpasswordresetdate, deparment_id,userno,fullname) VALUES (2, 'user', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'user', 'user', 'enabled@user.com', 1, '2016-01-01', 1,0002,"user123");
INSERT INTO USER (id, username, password, firstname, lastname, email, enabled, lastpasswordresetdate, deparment_id,userno,fullname) VALUES (3, 'disabled', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'user', 'user', 'disabled@user.com', 0, '2016-01-01', 1,0003,"user456");
INSERT INTO USER (id, username, password, firstname, lastname, email, enabled, lastpasswordresetdate, deparment_id,userno,fullname) VALUES (4, 'baixue', '$2a$08$lDnHPz7eUkSi6ao14Twuau08mzhWrL4kyZGGU5xfiGALO/Vxd5DOi', 'baixue', 'baixue', 'admin@admin.com', 1, '2016-01-01', 1,0004,"baixue123");


INSERT INTO authority (id, name) VALUES (1, 'ROLE_ADMIN');
INSERT INTO authority (id, name) VALUES (2, 'ROLE_USER');
INSERT INTO authority (id, name) VALUES (3, 'ROLE_USER');
INSERT INTO authority (id, name) VALUES (4, 'ROLE_USER');

INSERT INTO user_authority (user_id, authority_id) VALUES (1, 1);
INSERT INTO user_authority (user_id, authority_id) VALUES (2, 2);
INSERT INTO user_authority (user_id, authority_id) VALUES (3, 3);
INSERT INTO user_authority (user_id, authority_id) VALUES (4, 4);

INSERT INTO template (id, templatename, templatetype) VALUES (1, '设备采购合同', '采购类');
INSERT INTO template (id, templatename, templatetype) VALUES (2, '苗木花卉草坪采购合同', '采购类');
INSERT INTO template (id, templatename, templatetype) VALUES (3, '物资采购合同（养管）', '采购类');
INSERT INTO template (id, templatename, templatetype) VALUES (4, '工程物资采购合同', '采购类');
INSERT INTO template (id, templatename, templatetype) VALUES (5, '劳务协议', '劳务类');
INSERT INTO template (id, templatename, templatetype) VALUES (6, '劳务用工协议', '劳务类');
INSERT INTO template (id, templatename, templatetype) VALUES (7, '机械（设备）租赁合同-工程', '租赁类');
INSERT INTO template (id, templatename, templatetype) VALUES (8, '机械（设备）租赁合同-养管', '租赁类');
INSERT INTO template (id, templatename, templatetype) VALUES (9, '合作协议书（工程分包合同）', '工程分包类');
INSERT INTO template (id, templatename, templatetype) VALUES (10, '绿化迁移合同', '绿化迁移类');
INSERT INTO template (id, templatename, templatetype) VALUES (11, '安全生产管理协议', '安全类');

##01_机械设备采购合同
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (101, '甲方', 'firstparty','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (102, '乙方', 'secondparty','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (103, '采购设备名称', 'equipment','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (104, '交货地点', 'deliveryplace','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (105, '交货方式', 'deliveryway','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (106, '交货时间', 'deliverytime','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (107, '金额小写', 'moneysmall','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (108, '金额大写', 'moneybig','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (109, '金额', 'money','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (110, '支付方式', 'payway','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (111, '质保期限', 'serviceterm','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (112, '履约保证金', 'depositvalue','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (113, '保证金补足日数', 'depositpayday','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (114, '保证金归还日数', 'depositbackday','text',1);
##02_苗木花卉草坪采购合同
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (201, '甲方', 'firstparty','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (202, '乙方', 'secondparty','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (203, '购买物品', 'buyitem','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (204, '物资计划编号', 'itemplanno','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (205, '项目名', 'projectname','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (206, '提供物品', 'supplyitem','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (207, '提供物品明细', 'supplyitemdetail','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (208, '金额大写', 'moneybig','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (209, '金额小写', 'moneysmall','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (210, '品质要求', 'quality','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (211, '交货地点', 'deliveryplace','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (212, '交货方式', 'deliveryway','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (213, '货物装卸方式', 'stevedoreway','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (214, '使用项目', 'useproject','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (215, '付款期限日数', 'paylimitday','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (216, '违约金百分比', 'penaltypercentage','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (218, '赔偿金百分比', 'compensationpercentage','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (219, '合同签订时间', 'signdate','text',2);
##03_物资采购合同（养管）
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (301, '甲方', 'firstparty','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (302, '乙方', 'secondparty','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (303, '购买物品', 'buyitem','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (304, '采购货品', 'purchasedgoods','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (305, '金额大写', 'moneybig','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (306, '金额小写', 'moneysmall','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (307, '物资计划编号', 'itemplanno','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (308, '项目名', 'projectname','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (309, '工程名', 'subprojectname','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (310, '交货地点', 'deliveryplace','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (311, '交货方式', 'deliveryway','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (312, '货物装卸方式', 'stevedoreway','text',3);
##04_工程物资采购合同
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (401, '甲方', 'firstparty','text',4);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (402, '乙方', 'secondparty','text',4);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (403, '购买物品', 'buyitem','text',4);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (404, '金额小写', 'moneysmall','text',4);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (405, '金额大写', 'moneybig','text',4);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (406, '交货地点', 'deliveryplace','text',4);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (407, '合同签订时间', 'signdate','text',4);
##05_劳务协议
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (501, '甲方', 'firstparty','text',5);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (502, '乙方', 'secondparty','text',5);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (309, '工程名', 'subprojectname','text',5);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (404, '金额小写', 'moneysmall','text',5);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (405, '金额大写', 'moneybig','text',5);
##06_劳务用工协议
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (601, '甲方', 'firstparty','text',6);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (602, '乙方', 'secondparty','text',6);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (603, '养护管理项目名', 'maintenancename','text',6);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (604, '项目名', 'projectname','text',6);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (605, '项目内容', 'projectdetail','text',6);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (606, '工作期限自', 'begindate','text',6);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (607, '工作期限至', 'enddate','text',6);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (608, '金额小写', 'moneysmall','text',6);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (609, '金额大写', 'moneybig','text',6);
##07_机械（设备）租赁合同-工程
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (701, '甲方', 'firstparty','text',7);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (702, '乙方', 'secondparty','text',7);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (703, '首付百分比', 'firstpaypercentage','text',7);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (704, '二付百分比', 'secondpaypercentage','text',7);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (705, '三付百分比', 'thirdpaypercentage','text',7);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (706, '合同签订时间', 'signdate','text',7);
##08_机械（设备）租赁合同-养管
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (801, '甲方', 'firstparty','text',8);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (802, '乙方', 'secondparty','text',8);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (803, '租赁物品', 'rentalitem','text',8);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (804, '金额小写', 'moneysmall','text',8);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (805, '金额大写', 'moneybig','text',8);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (806, '物资计划编号', 'itemplanno','text',8);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (807, '项目名', 'projectname','text',8);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (808, '工程名', 'subprojectname','text',8);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (809, '租赁期限自', 'begindate','text',8);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (810, '租赁期限至', 'enddate','text',8);
##09_合作协议书（工程分包合同）
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (901, '甲方', 'firstparty','text',9);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (902, '乙方', 'secondparty','text',9);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (902, '工程名', 'subprojectname','text',9);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (903, '协议标的', 'agreementobject','text',9);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (904, '工程地点', 'projectplace','text',9);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (905, '协议工期', 'limitdate','text',9);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (906, '金额小写', 'moneysmall','text',9);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (907, '金额大写', 'moneybig','text',9);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (908, '甲方负责人姓名', 'firstpartyname','text',9);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (909, '甲方负责人电话', 'firstpartyphone','text',9);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (910, '乙方负责人姓名', 'secondpartyname','text',9);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (911, '乙方负责人电话', 'secnodpartyphone','text',9);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (912, '主合同名称', 'maincontract','text',9);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (913, '合同签订时间', 'signdate','text',9);
##10_绿化迁移合同
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (1001, '甲方', 'firstparty','text',10);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (1002, '乙方', 'secondparty','text',10);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (1003, '工程名', 'subprojectname','text',10);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (1004, '工程地点', 'projectplace','text',10);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (1005, '工程内容-原因', 'projectreason','text',10);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (1006, '工程内容-对象', 'projectobject','text',10);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (1007, '工程内容-面积', 'projectacreage','text',10);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (1008, '占绿时间', 'greendate','text',10);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (1009, '金额小写', 'moneysmall','text',10);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (1010, '金额大写', 'moneybig','text',10);
##11_安全生产管理协议
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (1001, '甲方', 'firstparty','text',10);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (1002, '乙方', 'secondparty','text',10);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (1003, '工程名', 'subprojectname','text',10);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (1006, '工程对象', 'projectobject','text',10);



# INSERT INTO `contract` (`id`, `contractname`, `contractno`, `user_id`, `creatorname`,`deparment_id`,`departmentname`,`creattime`,`enabled`) VALUES(1, '合同一', 'ADT20170101001', 1,"admin", 1,"department1",'2016-01-01',1);
# INSERT INTO `contract` (`id`, `contractname`, `contractno`, `user_id`, `creatorname`,`deparment_id`,`departmentname`,`creattime`,`enabled`) VALUES(2, '合同二', 'ADT20170101002', 1,"baixue", 1,"department1",'2016-01-01',1);
# INSERT INTO `contract` (`id`, `contractname`, `contractno`, `user_id`, `creatorname`,`deparment_id`,`departmentname`,`creattime`,`enabled`) VALUES(3, '合同三', 'ADT20170101003', 1,"baixue", 1,"department1",'2016-01-01',0);

INSERT INTO `notice` (`id`, `noticetext`) VALUES(1, '初始通知信息，请修改。');
