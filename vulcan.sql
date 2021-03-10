Create DATABASE vulcan_db ;

CREATE TABLE customer_info
(
	id int NOT NULL AUTO_INCREMENT,
	customer_firstName VARCHAR(255) NOT NULL,
    customer_lastName VARCHAR(255) NOT NULL,
    customer_companyName VARCHAR(255),
    customer_address VARCHAR(255) NOT NULL,
    customer_city VARCHAR(255) NOT NULL,
    customer_state VARCHAR(255) NOT NULL,
    customer_zipCode VARCHAR(255) NOT NULL,
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
    servicePro_category VARCHAR(255),
    servicePro_workDescription VARCHAR(255) NOT NULL,
    servicePro_address VARCHAR(255) NOT NULL,
    servicePro_city VARCHAR(255) NOT NULL,
    servicePro_state VARCHAR(255) NOT NULL,
    servicePro_zipCode VARCHAR(255) NOT NULL,
    servicePro_email VARCHAR(255) NOT NUlL,
    servicePro_userPassword VARCHAR(255) NOT NULL,
    servicePro_url VARCHAR(255) NOT NULL,
    servicePro_profileImg BLOB,
	PRIMARY KEY (id)
);

INSERT INTO customer_info (customer_firstName, customer_lastName, customer_companyName, customer_address, customer_city, customer_state, customer_zipCode, customer_email, customer_userPassword, customer_url) VALUES ('Matt', 'Hoyt', 'Starlite', '3175 India St.', 'San Diego', 'CA', '92103', 'matt@starlitesandiego.com', '123456', 'www.starlitesandiego.com');

INSERT INTO servicePro_info (servicePro_firstName, servicePro_lastName, servicePro_companyName, servicePro_address, servicePro_city, servicePro_state, servicePro_zipCode, servicePro_email, servicePro_userPassword, servicePro_url) VALUES ('Tim', 'Hoyt', 'August Innovations', 'Consultant', 'Consultant', '231 Elkwood Ave', 'Imperial Beach', 'CA', '91932', 'timhoyt824@gmail.com', '654321', 'www.google.com');
