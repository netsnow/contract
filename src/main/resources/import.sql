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

INSERT INTO template (id, templatename, templatetype) VALUES (1, '设备采购合同模版', '采购类');
# INSERT INTO template (id, templatename, templatetype) VALUES (2, '模版二', '模版组二');

INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (1, '甲方', 'firstparty','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (2, '乙方', 'secondparty','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (3, '采购设备名称', 'equipment','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (4, '交货地点', 'deliveryplace','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (5, '交货方式', 'deliveryway','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (6, '交货时间', 'deliverytime','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (7, '金额小写', 'moneysmall','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (8, '金额大写', 'moneybig','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (9, '金额', 'money','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (10, '支付方式', 'payway','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (11, '质保期限', 'serviceterm','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (12, '履约保证金', 'depositvalue','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (13, '保证金补足日数', 'depositpayday','text',1);
INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (14, '保证金归还日数', 'depositbackday','text',1);
# INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (15, '输入一1', 'input21','text',2);
# INSERT INTO templatedefine (id, inputname, inputename,inputtype, template_id) VALUES (16, '输入二1', 'input22','checkbox',2);

# INSERT INTO `contract` (`id`, `contractname`, `contractno`, `user_id`, `creatorname`,`deparment_id`,`departmentname`,`creattime`,`enabled`) VALUES(1, '合同一', 'ADT20170101001', 1,"admin", 1,"department1",'2016-01-01',1);
# INSERT INTO `contract` (`id`, `contractname`, `contractno`, `user_id`, `creatorname`,`deparment_id`,`departmentname`,`creattime`,`enabled`) VALUES(2, '合同二', 'ADT20170101002', 1,"baixue", 1,"department1",'2016-01-01',1);
# INSERT INTO `contract` (`id`, `contractname`, `contractno`, `user_id`, `creatorname`,`deparment_id`,`departmentname`,`creattime`,`enabled`) VALUES(3, '合同三', 'ADT20170101003', 1,"baixue", 1,"department1",'2016-01-01',0);

INSERT INTO `notice` (`id`, `noticetext`) VALUES(1, '初始通知信息，请修改。');
