CREATE DATABASE s2lugpg6wdxixion;

USE s2lugpg6wdxixion; 

CREATE TABLE users (
    firstname VARCHAR (225) NOT NULL,
    lastname VARCHAR (225) NOT NULL,
    birthday date,
    email VARCHAR (225),
    phone INT (10),
    city VARCHAR (225),
    state VARCHAR (225),
    zip INT (5),
    created_at BIGINT,
    facebook_id BIGINT,
    billing_address1 VARCHAR (225),
    billing_address2 VARCHAR (225),
    last_four_ssn INT (4),
    money_owed BIGINT,
    PRIMARY KEY (facebook_id)
);
 

CREATE TABLE Tasklist (
	taskid INT NOT NULL auto_increment,
    text VARCHAR (225) NOT NULL,
    complete BOOLEAN NOT NULL,
    dueby BIGINT,
    chore_price INT,
    house_name VARCHAR (225),
    frequency VARCHAR (225),
    houseid INT NOT NULL,
    userid BIGINT NOT NULL,
    PRIMARY KEY (taskid),
    INDEX user_id (userid),
	FOREIGN KEY (userid)
		REFERENCES users(facebook_id)
        ON DELETE CASCADE,
	INDEX house_id (houseid),
    FOREIGN KEY (houseid)
		REFERENCES house(houseid)
        ON DELETE CASCADE
);
    
CREATE TABLE Inventory (
	inventoryid INT NOT NULL auto_increment,
    inventorytext VARCHAR (225),
    house_name VARCHAR (225),
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
    house_name VARCHAR (225),
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
    house_name VARCHAR (225),
	PRIMARY KEY (houseid)
);

CREATE TABLE houseuserrelationship (
	facebook_id BIGINT,
	house_name VARCHAR(225),
    PRIMARY KEY (facebook_id, house_name)
);
    



