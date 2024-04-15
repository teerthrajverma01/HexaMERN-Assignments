DROP TABLE IF EXISTS room_detail;

CREATE TABLE IF NOT EXISTS room_detail (
	room_id INT PRIMARY KEY AUTO_INCREMENT,
    room_size INT ,
    max_people_accomodate INT,
    base_fare INT, 
    ac_non_ac BOOL,
    hotel_id INT, 
    CONSTRAINT FK_rd_hd FOREIGN KEY (hotel_id) REFERENCES hotel_detail(hotel_id)
    );