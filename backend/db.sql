-- CREATE DATABASE bliblioteka;
-- USE bliblioteka;

/*
CREATE TABLE gramata (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	bookname VARCHAR(90) NOT NULL, 
	author VARCHAR(40) NOT NULL,
	releaseDate INT NOT NULL,
	isInStock BOOL NOT NULL
);
*/

/*
ALTER TABLE gramata
MODIFY releaseDate DATETIME NOT NULL;
*/

/*
INSERT INTO gramata (bookname, author, releaseDate, isInStock)
VALUE 
("ManaDienasgramata", "biden", "2001", TRUE),
("FNAF_TFTPP", "scott", "2022", TRUE),
("idkWhatToPut", "ogaBooga", "2005", FALSE);
*/


CREATE TABLE user (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	username VARCHAR(90) NOT NULL, 
	password VARCHAR(255) NOT NULL 	
);




-- DROP TABLE gramata;