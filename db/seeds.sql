INSERT INTO users (firstname, lastname, birthday, email, phone, city, state, zip, created_at, facebook_id, money_owed) VAlUES ("Olivia", "Garrett", "1990-05-15", "oliviajonesbgarrett@gmail.com", "8642303336", "Richmond", "VA", 23230, 15200006638564, 10156414072913949, 0);
INSERT INTO users (firstname, lastname, birthday, email, phone, city, state, zip, created_at, facebook_id, money_owed) VAlUES ("Jordan", "Shear", "1111-11-11", "shear_J@hotmail.com", "5032988866", "Renton", "WA", 98056, 1519946590671, 10160070396760582, 0);
INSERT INTO users (firstname, lastname, birthday, email, phone, city, state, zip, created_at, facebook_id, money_owed) VAlUES ("Mary", "Hall", "1995-06-27", "mlh2913@msn.com", "8049206658", "Chester", "VA", 23831, 15199465876308, 1893049390736977, 0);
INSERT INTO users (firstname, lastname, birthday, email, phone, city, state, zip, created_at, facebook_id, money_owed) VAlUES ("Brittany", "Gillespie", "1993-07-27", "brittanyemail@aol.com", "5556203758", "Richmond", "VA", 23237, 15199465876308, 1893049390736978, 0);
INSERT INTO users (firstname, lastname, birthday, email, phone, city, state, zip, created_at, facebook_id, money_owed) VAlUES ("Bad", "Roomie", "1994-08-24", "whatrchores@aol.com", "5558233758", "Richmond", "VA", 23237, 15199465876308, 1893049390736962, 16);
INSERT INTO users (firstname, lastname, birthday, email, phone, city, state, zip, created_at, facebook_id, money_owed) VAlUES ("Press", "Garrett", "1990-05-15", "pressgarrett@gmail.com", "8647065891", "Richmond", "VA", 23230, 15199465876308, 10156414072913950, 4);

INSERT INTO house (houseid, password, house_name) VALUES (9, "password", "first house");
INSERT INTO house (houseid, password, house_name) VALUES (1, "password", "The Garretts");


INSERT INTO Tasklist (taskid, text, complete, dueby, chore_price, houseid, userid, house_name, frequency) VALUES (7, "Vaccuum floor", false, "2018-03-06", 4, 9, 1893049390736977, "first_house", "weekly");
INSERT INTO Tasklist (taskid, text, complete, dueby, chore_price, houseid, userid, house_name, frequency) VALUES (9, "Wash Dishes", true, "2018-03-02", 4, 9, 1893049390736977, "first_house", "daily");
INSERT INTO Tasklist (taskid, text, complete, dueby, chore_price, houseid, userid, house_name, frequency) VALUES (10, "Take out trash", true, "2018-03-06", 4, 9, 10160070396760582, "first_house", "weekly");
INSERT INTO Tasklist (taskid, text, complete, dueby, chore_price, houseid, userid, house_name, frequency) VALUES (12, "Refill ice", true, "2018-03-02", 4, 9, 10160070396760582, "first_house", "weekly");
INSERT INTO Tasklist (taskid, text, complete, dueby, chore_price, houseid, userid, house_name, frequency) VALUES (18, "Facilitate rent payment", true, "2018-03-06", 4, 9, 1893049390736978, "first_house", "monthly");
INSERT INTO Tasklist (taskid, text, complete, dueby, chore_price, houseid, userid, house_name, frequency) VALUES (19, "Prepare recylcing", false, "2018-03-04", 4, 9, 1893049390736962, "first_house", "weekly");
INSERT INTO Tasklist (taskid, text, complete, dueby, chore_price, houseid, userid, house_name, frequency) VALUES (21, "Walk your stupid dog so it doesn't crap in the house", false, "2018-03-01", 4, 9, 1893049390736962, "first_house", "daily");
INSERT INTO Tasklist (taskid, text, complete, dueby, chore_price, houseid, userid, house_name, frequency) VALUES (23, "Buy Olivia Chocolate", false, "2018-03-01", 4, 1, 10156414072913950, "The Garretts", "weekly");
INSERT INTO Tasklist (taskid, text, complete, dueby, chore_price, houseid, userid, house_name, frequency) VALUES (24, "Prepare recyling", true, "2018-03-02", 4, 1, 10156414072913949, "The Garretts", "weekly");

INSERT INTO houseuserrelationship (facebook_id, house_name) VALUES (10156414072913949, "The Garretts");
INSERT INTO houseuserrelationship (facebook_id, house_name) VALUES (10156414072913950, "The Garretts");
INSERT INTO houseuserrelationship (facebook_id, house_name) VALUES (10160070396760582, "first house");
INSERT INTO houseuserrelationship (facebook_id, house_name) VALUES (1893049390736977, "first house");
INSERT INTO houseuserrelationship (facebook_id, house_name) VALUES (1893049390736978, "first house");
INSERT INTO houseuserrelationship (facebook_id, house_name) VALUES (1893049390736962, "first house");

INSERT INTO Inventory (inventoryid, inventorytext, houseid, house_name) VALUES (1, "Toilet paper", 9, "first house");
INSERT INTO Inventory (inventoryid, inventorytext, houseid, house_name) VALUES (2, "Bread", 9, "first house");
INSERT INTO Inventory (inventoryid, inventorytext, houseid, house_name) VALUES (3, "Eggs", 9, "first house");
INSERT INTO Inventory (inventoryid, inventorytext, houseid, house_name) VALUES (5, "Cheese", 1, "The Garretts");
INSERT INTO Inventory (inventoryid, inventorytext, houseid, house_name) VALUES (6, "Books to Read", 1, "The Garretts"); 

INSERT INTO HouseholdStatus (householdid, statustext, status, houseid, house_name) VALUES (1, "Balcony Door Locked", true, 9, "first house");
INSERT INTO HouseholdStatus (householdid, statustext, status, houseid, house_name) VALUES (2, "Window Closed", true, 1, "The Garretts");


