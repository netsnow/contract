# noinspection SqlNoDataSourceInspectionForFile
# INSERT INTO user (id, username, password, firstname, lastname, email, enabled, lastpasswordresetdate) VALUES (1, 'admin', '$2a$08$lDnHPz7eUkSi6ao14Twuau08mzhWrL4kyZGGU5xfiGALO/Vxd5DOi', 'admin', 'admin', 'admin@admin.com', 1, PARSEDATETIME('01-01-2016', 'dd-MM-yyyy'));
# INSERT INTO user (id, username, password, firstname, lastname, email, enabled, lastpasswordresetdate) VALUES (2, 'user', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'user', 'user', 'enabled@user.com', 1, PARSEDATETIME('01-01-2016','dd-MM-yyyy'));
# INSERT INTO user (id, username, password, firstname, lastname, email, enabled, lastpasswordresetdate) VALUES (3, 'disabled', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'user', 'user', 'disabled@user.com', 0, PARSEDATETIME('01-01-2016','dd-MM-yyyy'));

INSERT INTO deparment (id, deparmentname, deparmentshortname) VALUES (1, '系统默认部门1', '01');
INSERT INTO deparment (id, deparmentname, deparmentshortname) VALUES (2, '系统默认部门2', '02');
INSERT INTO deparment (id, deparmentname, deparmentshortname) VALUES (3, '系统默认部门3', '03');
INSERT INTO deparment (id, deparmentname, deparmentshortname) VALUES (4, '系统默认部门4', '04');
INSERT INTO deparment (id, deparmentname, deparmentshortname) VALUES (5, '系统默认部门5', '05');
INSERT INTO deparment (id, deparmentname, deparmentshortname) VALUES (6, '系统默认部门6', '06');
INSERT INTO deparment (id, deparmentname, deparmentshortname) VALUES (7, '系统默认部门7', '07');
INSERT INTO deparment (id, deparmentname, deparmentshortname) VALUES (8, '系统默认部门8', '08');
INSERT INTO deparment (id, deparmentname, deparmentshortname) VALUES (9, '系统默认部门9', '09');
INSERT INTO deparment (id, deparmentname, deparmentshortname) VALUES (10, '系统默认部门10', '10');
INSERT INTO deparment (id, deparmentname, deparmentshortname) VALUES (11, '系统默认部门11', '11');
INSERT INTO deparment (id, deparmentname, deparmentshortname) VALUES (12, '系统默认部门12', '12');
INSERT INTO deparment (id, deparmentname, deparmentshortname) VALUES (13, '系统默认部门13', '13');
INSERT INTO deparment (id, deparmentname, deparmentshortname) VALUES (14, '系统默认部门14', '14');
INSERT INTO deparment (id, deparmentname, deparmentshortname) VALUES (15, '系统默认部门15', '15');
INSERT INTO deparment (id, deparmentname, deparmentshortname) VALUES (16, '系统默认部门16', '16');
INSERT INTO deparment (id, deparmentname, deparmentshortname) VALUES (17, '系统默认部门17', '17');
INSERT INTO deparment (id, deparmentname, deparmentshortname) VALUES (18, '系统默认部门18', '18');
INSERT INTO deparment (id, deparmentname, deparmentshortname) VALUES (19, '系统默认部门19', '19');
INSERT INTO deparment (id, deparmentname, deparmentshortname) VALUES (20, '系统默认部门20', '20');
INSERT INTO deparment (id, deparmentname, deparmentshortname) VALUES (21, '系统默认部门21', '21');
INSERT INTO deparment (id, deparmentname, deparmentshortname) VALUES (22, '系统默认部门22', '22');
INSERT INTO deparment (id, deparmentname, deparmentshortname) VALUES (23, '系统默认部门23', '23');
INSERT INTO deparment (id, deparmentname, deparmentshortname) VALUES (24, '系统默认部门24', '24');
INSERT INTO deparment (id, deparmentname, deparmentshortname) VALUES (25, '系统默认部门25', '25');

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
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (107, '金额小写（元）', 'moneysmall','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (109, '金额（元）', 'money','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (110, '支付方式', 'payway','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (111, '质保期限', 'serviceterm','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (112, '履约保证金（元）', 'depositvalue','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (113, '保证金补足日数（日）', 'depositpayday','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (114, '保证金归还日数（日）', 'depositbackday','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (115, '甲方法人', 'firstpartylegal','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (116, '甲方纳税人识别号', 'firstpartytaxno','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (117, '甲方地址', 'firstpartyaddress','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (118, '甲方电话', 'firstpartytel','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (119, '甲方开户行', 'firstpartybank','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (120, '甲方账号', 'firstpartybankacc','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (121, '乙方法人', 'secondpartylegal','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (122, '乙方纳税人识别号', 'secondpartytaxno','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (123, '乙方地址', 'secondpartyaddress','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (124, '乙方电话', 'secondpartytel','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (125, '乙方开户行', 'secondpartybank','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (126, '乙方账号', 'secondpartybankacc','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (127, '备注信息', 'comment','text',1);

##02_苗木花卉草坪采购合同
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (201, '甲方', 'firstparty','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (202, '乙方', 'secondparty','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (203, '购买物品', 'buyitem','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (204, '物资计划编号', 'itemplanno','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (205, '项目名', 'projectname','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (206, '提供物品', 'supplyitem','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (207, '提供物品明细', 'supplyitemdetail','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (209, '金额小写（元）', 'moneysmall','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (210, '品质要求', 'quality','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (211, '交货地点', 'deliveryplace','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (212, '交货方式（①乙方负责送货；②乙方负责委托第三方运输，甲方负责运费；③甲方自提自运。）', 'deliveryway','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (213, '货物装卸方式（①乙方负责装卸；②乙方负责装、甲方负责卸；③甲方负责装卸）', 'stevedoreway','text',2);
##INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (214, '使用项目', 'useproject','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (215, '付款期限日数', 'paylimitday','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (216, '违约金百分比', 'penaltypercentage','text',2);
##INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (218, '赔偿金百分比', 'compensationpercentage','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (219, '合同签订时间', 'signdate','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (220, '甲方法人', 'firstpartylegal','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (221, '甲方纳税人识别号', 'firstpartytaxno','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (222, '甲方地址', 'firstpartyaddress','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (223, '甲方电话', 'firstpartytel','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (224, '甲方开户行', 'firstpartybank','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (225, '甲方账号', 'firstpartybankacc','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (226, '乙方法人', 'secondpartylegal','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (227, '乙方纳税人识别号', 'secondpartytaxno','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (228, '乙方地址', 'secondpartyaddress','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (229, '乙方电话', 'secondpartytel','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (230, '乙方开户行', 'secondpartybank','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (231, '乙方账号', 'secondpartybankacc','text',2);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (232, '备注信息', 'comment','text',2);
##03_物资采购合同（养管）
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (301, '甲方', 'firstparty','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (302, '乙方', 'secondparty','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (303, '购买物品', 'buyitem','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (304, '采购货品', 'purchasedgoods','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (306, '金额小写（元）', 'moneysmall','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (307, '物资计划编号', 'itemplanno','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (308, '项目名', 'projectname','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (309, '工程名', 'subprojectname','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (310, '交货地点', 'deliveryplace','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (311, '交货方式（①乙方负责送货；②乙方负责委托第三方运输，甲方负责运费；③甲方自提自运）', 'deliveryway','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (312, '货物装卸方式（①乙方负责装卸；②乙方负责装、甲方负责卸；③甲方负责装卸）', 'stevedoreway','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (313, '甲方法人', 'firstpartylegal','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (314, '甲方纳税人识别号', 'firstpartytaxno','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (315, '甲方地址', 'firstpartyaddress','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (316, '甲方电话', 'firstpartytel','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (317, '甲方开户行', 'firstpartybank','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (318, '甲方账号', 'firstpartybankacc','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (319, '乙方法人', 'secondpartylegal','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (320, '乙方纳税人识别号', 'secondpartytaxno','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (321, '乙方地址', 'secondpartyaddress','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (322, '乙方电话', 'secondpartytel','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (323, '乙方开户行', 'secondpartybank','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (324, '乙方账号', 'secondpartybankacc','text',3);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (325, '备注信息', 'comment','text',3);

##04_工程物资采购合同
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (401, '甲方', 'firstparty','text',4);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (402, '乙方', 'secondparty','text',4);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (403, '购买物品', 'buyitem','text',4);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (404, '金额小写', 'moneysmall','text',4);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (406, '交货地点', 'deliveryplace','text',4);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (407, '合同签订时间', 'signdate','text',4);
##05_劳务协议
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (501, '甲方', 'firstparty','text',5);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (502, '乙方', 'secondparty','text',5);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (503, '工程名', 'subprojectname','text',5);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (504, '金额小写', 'moneysmall','text',5);
##06_劳务用工协议
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (601, '甲方', 'firstparty','text',6);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (602, '乙方', 'secondparty','text',6);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (603, '养护管理项目名', 'maintenancename','text',6);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (604, '项目名', 'projectname','text',6);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (605, '项目内容', 'projectdetail','text',6);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (606, '工作期限自', 'begindate','text',6);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (607, '工作期限至', 'enddate','text',6);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (608, '金额小写', 'moneysmall','text',6);
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
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (806, '物资计划编号', 'itemplanno','text',8);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (807, '项目名', 'projectname','text',8);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (808, '工程名', 'subprojectname','text',8);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (809, '租赁期限自', 'begindate','text',8);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (810, '租赁期限至', 'enddate','text',8);
##09_合作协议书（工程分包合同）
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (901, '甲方', 'firstparty','text',9);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (902, '乙方', 'secondparty','text',9);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (903, '工程名', 'subprojectname','text',9);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (904, '协议标的', 'agreementobject','text',9);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (905, '工程地点', 'projectplace','text',9);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (906, '协议工期', 'limitdate','text',9);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (907, '金额小写', 'moneysmall','text',9);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (909, '甲方负责人姓名', 'firstpartyname','text',9);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (910, '甲方负责人电话', 'firstpartyphone','text',9);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (911, '乙方负责人姓名', 'secondpartyname','text',9);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (912, '乙方负责人电话', 'secnodpartyphone','text',9);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (913, '主合同名称', 'maincontract','text',9);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (914, '合同签订时间', 'signdate','text',9);
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
##11_安全生产管理协议
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (1101, '甲方', 'firstparty','text',11);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (1102, '乙方', 'secondparty','text',11);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (1103, '工程名', 'subprojectname','text',11);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (1104, '工程对象', 'projectobject','text',11);



# INSERT INTO `contract` (`id`, `contractname`, `contractno`, `user_id`, `creatorname`,`deparment_id`,`departmentname`,`creattime`,`enabled`) VALUES(1, '合同一', 'ADT20170101001', 1,"admin", 1,"department1",'2016-01-01',1);
# INSERT INTO `contract` (`id`, `contractname`, `contractno`, `user_id`, `creatorname`,`deparment_id`,`departmentname`,`creattime`,`enabled`) VALUES(2, '合同二', 'ADT20170101002', 1,"baixue", 1,"department1",'2016-01-01',1);
# INSERT INTO `contract` (`id`, `contractname`, `contractno`, `user_id`, `creatorname`,`deparment_id`,`departmentname`,`creattime`,`enabled`) VALUES(3, '合同三', 'ADT20170101003', 1,"baixue", 1,"department1",'2016-01-01',0);

INSERT INTO `notice` (`id`, `noticetext`) VALUES(1, '初始通知信息，请修改。');
