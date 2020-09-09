-- Schema for use in MYSQL database if hosted locally

USE devcon_db;

DROP TABLE IF EXISTS 'developers';

CREATE TABLE developers
(
    id int
    AUTO_INCREMENT NOT NULL,
    lastName varchar
    (255) NOT NULL,
    firstName varchar
    (255) NOT NULL,
    city varchar
    (255) NOT NULL,
    headline varchar
    (255),
    summary varchar
    (500),
    skill1 varchar
    (30),
    skill2 varchar
    (30),
    skill3 varchar
    (30),
    PRIMARY KEY
    (id)
); 
