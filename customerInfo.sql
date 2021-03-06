Create DATABASE customers_db ;

CREATE TABLE customer_info
(
	id int NOT NULL AUTO_INCREMENT,
	customer_name VARCHAR(255) NOT NULL,
    company_name VARCHAR(255),
    address VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NUlL,
    user_password VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO customer_info () VALUES ();
