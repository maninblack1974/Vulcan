use vulcan_db;

INSERT INTO Users
    (id, firstName, lastName, email, password, createdAt, updatedAt)
VALUES
	("2", "Bob", "Bobby", "bob@gmail.com", "123123123", "2021-03-23 03:34:19", "2021-03-23 03:34:19"),
	("3", "Rob", "Robby", "rob@gmail.com", "123123123", "2021-03-23 03:34:19", "2021-03-23 03:34:19"),
	("4", "Lisa", "Lizzy", "lisa@gmail.com", "123123123", "2021-03-23 03:34:19", "2021-03-23 03:34:19"),
	("5", "Tom", "Tommy", "tom@gmail.com", "123123123", "2021-03-23 03:34:19", "2021-03-23 03:34:19"),
	("6", "Bill", "Billy", "bill@gmail.com", "123123123", "2021-03-23 03:34:19", "2021-03-23 03:34:19"),
	("7", "Pete", "Petey", "pete@gmail.com", "123123123", "2021-03-23 03:34:19", "2021-03-23 03:34:19"),
	("8", "Jill", "Jilly", "jill@gmail.com", "123123123", "2021-03-23 03:34:19", "2021-03-23 03:34:19"),
	("9", "Tim", "Timmy", "tim@gmail.com", "123123123", "2021-03-23 03:34:19", "2021-03-23 03:34:19"),
	("10", "Steve", "Stevey", "steve@gmail.com", "123123123", "2021-03-23 03:34:19", "2021-03-23 03:34:19");


INSERT INTO servicePros
    (servicePro_companyName, servicePro_url, servicePro_phone, servicePro_category, servicePro_address, servicePro_city, servicePro_state, servicePro_zipCode, createdAt, updatedAt, UserId)
VALUES
    ("Bobs Plumbing", "www.bobsplumbing.com", "123-123-1234", "Plumber", "3310 Walnut Ln", "Random City", "CA", "92101", "2021-03-23 03:34:19", "2021-03-23 03:34:19", "2"),
    ("Johns Electrical", "www.johnselectrical.com", "123-123-1234",  "Electrican", "807 Elm St", "Random City2", "CA", "92019", "2021-03-23 03:34:19", "2021-03-23 03:34:19", "3"),
    ("Sarahs HVAC", "www.sarahhvac.com",  "123-123-1234", "HVAC", "908 Main St", "Random City3", "CA", "92015", "2021-03-23 03:34:19", "2021-03-23 03:34:19", "4"),
    ("Diego Refrigeration", "www.diegofrig.com",  "123-123-1234",  "Refrigeration", "398 Ocean Blvd", "Random City4", "CA", "92101", "2021-03-23 03:34:19", "2021-03-23 03:34:19", "5"),
    ("Kumals Cleaning", "www.kumalscleaning.com",  "123-123-1234", "General Cleaning", "668 Juniper St", "Random City5", "CA", "92103", "2021-03-23 03:34:19", "2021-03-23 03:34:19", "6"),
    ("Megans Linens", "www.meganslinens.com",  "123-123-1234", "Linens", "379 Lakeview Ave", "Random City6", "CA", "91978", "2021-03-23 03:34:19", "2021-03-23 03:34:19", "7"),
    ("Amandas Pest Control", "www.amandaspestcontrol.com",  "123-123-1234", "Pest Control", "756 Iris Dr", "Random City7", "CA", "92154", "2021-03-23 03:34:19", "2021-03-23 03:34:19", "8"),
    ("Toms Window Repair", "www.tomswindowrepair.com",  "123-123-1234", "Window Repair", "899 Date Ave", "Random City8", "CA", "92023", "2021-03-23 03:34:19", "2021-03-23 03:34:19", "9"),
    ("Bills Apparel", "www.billsapparel.com",  "123-123-1234", "Apparel", "472 Harbor Dr", "Random City9", "CA", "92106", "2021-03-23 03:34:19", "2021-03-23 03:34:19", "10");    
      
    