DROP TABLE IF EXISTS hotel_detail;

CREATE TABLE IF NOT EXISTS hotel_detail (
	hotel_id INT AUTO_INCREMENT PRIMARY KEY,
    hotel_name VARCHAR(255) NOT NULL,
	location VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    owner_id INT,
    CONSTRAINT FK_hd_hod FOREIGN KEY (owner_id) REFERENCES hotel_owner_detail(owner_id)
    );