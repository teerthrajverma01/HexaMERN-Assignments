DROP TABLE IF EXISTS user_detail;

CREATE TABLE IF NOT EXISTS user_detail (
	user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    password VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    gender ENUM("MALE" ,"FEMALE", "OTHER" ) CHECK (gender IN ("MALE" ,"FEMALE", "OTHER" )),
    contact_no VARCHAR(20) UNIQUE,
    address text
    ) ;