Create DATABASE vulcan_db ;

CREATE TABLE customer_info
(
	id int NOT NULL AUTO_INCREMENT,
	customer_firstName VARCHAR(255) NOT NULL,
    customer_lastName VARCHAR(255) NOT NULL,
    customer_companyName VARCHAR(255),
    customer_address VARCHAR(255) NOT NULL,
    customer_email VARCHAR(255) NOT NUlL,
    customer_userPassword VARCHAR(255) NOT NULL,
    customer_url VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE servicePro_info
(
id int NOT NULL AUTO_INCREMENT,
	servicePro_firstName VARCHAR(255) NOT NULL,
    servicePro_lastName VARCHAR(255) NOT NULL,
    servicePro_companyName VARCHAR(255),
    servicePro_address VARCHAR(255) NOT NULL,
    servicePro_email VARCHAR(255) NOT NUlL,
    servicePro_userPassword VARCHAR(255) NOT NULL,
    servicePro_url VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO customer_info () VALUES ();

INSERT INTO servicePro_info () VALUES ();
