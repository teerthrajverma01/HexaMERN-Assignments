DROP TABLE IF EXISTS admin;

CREATE TABLE IF NOT EXISTS admin (
	admin_id INT PRIMARY KEY AUTO_INCREMENT,
    admin_name VARCHAR(255),
    admin_email VARCHAR(255),
    admin_password VARCHAR(255),
    admin_phoneno VARCHAR(255)
	);