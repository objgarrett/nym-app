CREATE DATABASE s2lugpg6wdxixion;

USE 2lugpg6wdxixion; 

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
    PRIMARY KEY (inventoryid)
);

CREATE TABLE HouseholdStatus (
	householdid INT NOT NULL auto_increment,
    statustext VARCHAR (225),
    status BOOLEAN,
    PRIMARY KEY (householdid)
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
    


INSERT INTO users (firstname, lastname, email, phone, city, state, zip, facebook_id) VALUES ("Chrom", "Ylisse", "chrom@forylisse.net", 5555555, "Village", "Capitol", 23401, 6);  
INSERT INTO house (password) VALUES ("shahahalaalabala");
INSERT INTO houseuserrelationship VALUES (1, 1);
INSERT INTO Tasklist (text, complete, dueby, userassigned, userid, houseid) VALUES ("Polish shields", false, "2018-03-03", "Chrom", 1, 1); 

