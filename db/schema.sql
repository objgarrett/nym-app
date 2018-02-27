CREATE DATABASE s2lugpg6wdxixion;

USE s2lugpg6wdxixion; 

CREATE TABLE users (
	id INT NOT NULL auto_increment,
    firstname VARCHAR (225) NOT NULL,
    lastname VARCHAR (225) NOT NULL,
    birthday date,
    email VARCHAR (225),
    phone INT (10),
    city VARCHAR (225),
    state VARCHAR (225),
    zip INT (5),
    created_at datetime,
    facebook_id INT,
    PRIMARY KEY (id)
);
 

CREATE TABLE Tasklist (
	taskid INT NOT NULL auto_increment,
    text VARCHAR (225) NOT NULL,
    complete BOOLEAN NOT NULL,
    dueby date,
    userassigned VARCHAR (225) NOT NULL,
    houseid INT NOT NULL,
    userid INT NOT NULL,
    PRIMARY KEY (taskid),
    INDEX user_id (userid),
	FOREIGN KEY (userid)
		REFERENCES users(id)
        ON DELETE CASCADE,
	INDEX house_id (houseid),
    FOREIGN KEY (houseid)
		REFERENCES house(houseid)
        ON DELETE CASCADE
);
    
CREATE TABLE Inventory (
	inventoryid INT NOT NULL auto_increment,
    inventorytext VARCHAR (225),
    PRIMARY KEY (inventoryid),
    houseid INT NOT NULL,
    INDEX house_id (houseid),
    FOREIGN KEY (houseid)
		REFERENCES house(houseid)
        ON DELETE CASCADE
);

CREATE TABLE HouseholdStatus (
	householdid INT NOT NULL auto_increment,
    statustext VARCHAR (225),
    status BOOLEAN,
    houseid INT NOT NULL,
    PRIMARY KEY (householdid),
    INDEX house_id (houseid),
    FOREIGN KEY (houseid)
		REFERENCES house(houseid)
        ON DELETE CASCADE
);

CREATE TABLE sessions (
	GUID INT NOT NULL,
    expiration DATETIME,
    PRIMARY KEY (GUID)
);

CREATE TABLE house (
	houseid INT NOT NULL auto_increment,
	password VARCHAR (16),
	PRIMARY KEY (houseid)
);

CREATE TABLE houseuserrelationship (
	house_id INT NOT NULL,
    user_id INT NOT NULL,
    INDEX userid (user_id),
	FOREIGN KEY (user_id)
		REFERENCES users(id)
        ON DELETE CASCADE,
	INDEX houseid (house_id),
	FOREIGN KEY (house_id)
		REFERENCES house(houseid)
        ON DELETE CASCADE
);
    
ALTER TABLE house 
ADD house_name VARCHAR(225);




