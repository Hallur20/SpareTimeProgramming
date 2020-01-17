create table Role(
id int NOT NULL AUTO_INCREMENT,
type varchar(80),
description varchar(400),
primary key(id)
);

create table User(
id int NOT NULL AUTO_INCREMENT,
userName varchar(100),
email varchar(170),
password varchar(100),
roleId int,
primary key(id),
foreign key (roleId) references Role(id)
);

create table Topic(
id int NOT NULL AUTO_INCREMENT,
title varchar(70),
description varchar(300),
primary key (id)
);

create table Post(
id int NOT NULL AUTO_INCREMENT,
topicId int,
title varchar(100),
description varchar(5000),
isLocked bool,
primary key (id),
foreign key (topicId) references Topic(id)
);

create table Comment(
id int NOT NULL AUTO_INCREMENT,
postId int,
description varchar(400),
replyTo int,
primary key(id),
foreign key (replyTo) references Comment(id),
foreign key (postId) references Post(id)
);

insert into Role(type, description) values ("user", "has access to: make posts, comment");
insert into Role(type, description) values ("super user", "has access to: make posts, comment, delete posts, delete comments, lock posts");
insert into Role(type, description) values ("admin", "has access to: make posts, comment, delete posts, delete comments, lock posts, delete users, grant user priveleges, create new topics, alter topic description");

insert into User(userName, email, password, roleId) values ("Karl", "karl@email.com", "123", 1);
insert into User(userName, email, password, roleId) values ("SuperKarl", "superkarl@email.com", "123", 2);
insert into User(userName, email, password, roleId) values ("AdminKarl", "adminkarl@email.com", "123", 3);

insert into Topic(title, description) values ("food", "when you pick this topic please keep the post relevant, food is about : <insert food explanation>");
insert into Topic(title, description) values ("sports", "when you pick this topic please keep the post relevant, food is about : <insert sports explanation>");
insert into Topic(title, description) values ("history", "when you pick this topic please keep the post relevant, food is about : <insert history explanation>");
insert into Topic(title, description) values ("music", "when you pick this topic please keep the post relevant, food is about : <insert music explanation>");
insert into Topic(title, description) values ("movies", "when you pick this topic please keep the post relevant, food is about : <insert movies explanation>");

insert into Post(topicId, title, description, isLocked) values (1, "i love bananas", "hey guys i love bananas they're great, watcha think?", false);
insert into Post(topicId, title, description, isLocked) values (4, "eminems new album", "hey guys what do you think of his new album?", false);

insert into Comment(postID, description, replyTo) values (1, "dude bananas are awesome", null);
insert into Comment(postID, description, replyTo) values (1, "hello no, i hate bananas, screw you!", 1);