# noinspection SqlNoDataSourceInspectionForFile
# INSERT INTO USER (ID, USERNAME, PASSWORD, FIRSTNAME, LASTNAME, EMAIL, ENABLED, LASTPASSWORDRESETDATE) VALUES (1, 'admin', '$2a$08$lDnHPz7eUkSi6ao14Twuau08mzhWrL4kyZGGU5xfiGALO/Vxd5DOi', 'admin', 'admin', 'admin@admin.com', 1, PARSEDATETIME('01-01-2016', 'dd-MM-yyyy'));
# INSERT INTO USER (ID, USERNAME, PASSWORD, FIRSTNAME, LASTNAME, EMAIL, ENABLED, LASTPASSWORDRESETDATE) VALUES (2, 'user', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'user', 'user', 'enabled@user.com', 1, PARSEDATETIME('01-01-2016','dd-MM-yyyy'));
# INSERT INTO USER (ID, USERNAME, PASSWORD, FIRSTNAME, LASTNAME, EMAIL, ENABLED, LASTPASSWORDRESETDATE) VALUES (3, 'disabled', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'user', 'user', 'disabled@user.com', 0, PARSEDATETIME('01-01-2016','dd-MM-yyyy'));

INSERT INTO DEPARMENT (ID, DEPARMENTNAME, DEPARMENTSHORTNAME) VALUES (1, '系统默认部门', '默认部门');

INSERT INTO USER (ID, USERNAME, PASSWORD, FIRSTNAME, LASTNAME, EMAIL, ENABLED, LASTPASSWORDRESETDATE, DEPARMENT_ID,USERNO,FULLNAME) VALUES (1, 'admin', '$2a$08$lDnHPz7eUkSi6ao14Twuau08mzhWrL4kyZGGU5xfiGALO/Vxd5DOi', 'admin', 'admin', 'admin@admin.com', 1, '2016-01-01', 1,0001,"admin123");
INSERT INTO USER (ID, USERNAME, PASSWORD, FIRSTNAME, LASTNAME, EMAIL, ENABLED, LASTPASSWORDRESETDATE, DEPARMENT_ID,USERNO,FULLNAME) VALUES (2, 'user', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'user', 'user', 'enabled@user.com', 1, '2016-01-01', 1,0002,"user123");
INSERT INTO USER (ID, USERNAME, PASSWORD, FIRSTNAME, LASTNAME, EMAIL, ENABLED, LASTPASSWORDRESETDATE, DEPARMENT_ID,USERNO,FULLNAME) VALUES (3, 'disabled', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'user', 'user', 'disabled@user.com', 0, '2016-01-01', 1,0003,"user456");
INSERT INTO USER (ID, USERNAME, PASSWORD, FIRSTNAME, LASTNAME, EMAIL, ENABLED, LASTPASSWORDRESETDATE, DEPARMENT_ID,USERNO,FULLNAME) VALUES (4, 'baixue', '$2a$08$lDnHPz7eUkSi6ao14Twuau08mzhWrL4kyZGGU5xfiGALO/Vxd5DOi', 'baixue', 'baixue', 'admin@admin.com', 1, '2016-01-01', 1,0004,"baixue123");


INSERT INTO AUTHORITY (ID, NAME) VALUES (1, 'ROLE_ADMIN');
INSERT INTO AUTHORITY (ID, NAME) VALUES (2, 'ROLE_USER');
INSERT INTO AUTHORITY (ID, NAME) VALUES (3, 'ROLE_USER');
INSERT INTO AUTHORITY (ID, NAME) VALUES (4, 'ROLE_USER');

INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_ID) VALUES (1, 1);
INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_ID) VALUES (2, 2);
INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_ID) VALUES (3, 3);
INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_ID) VALUES (4, 4);

INSERT INTO TEMPLATE (ID, TEMPLATENAME, TEMPLATETYPE) VALUES (1, '模版一', '模版组一');
INSERT INTO TEMPLATE (ID, TEMPLATENAME, TEMPLATETYPE) VALUES (2, '模版二', '模版组二');

INSERT INTO TEMPLATEDEFINE (ID, INPUTNAME, INPUTTYPE, TEMPLATE_ID, TEMPLATE_DEFINES_ID) VALUES (1, '输入一', 'text',1,1);
INSERT INTO TEMPLATEDEFINE (ID, INPUTNAME, INPUTTYPE, TEMPLATE_ID, TEMPLATE_DEFINES_ID) VALUES (2, '输入二', 'checkbox',1,2);

INSERT INTO `contract` (`id`, `contractname`, `contractno`, `user_id`, `deparment_id`) VALUES(1, '合同一', 'ADT20170101001', 1, 1);