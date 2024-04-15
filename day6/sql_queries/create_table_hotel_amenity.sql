DROP TABLE IF EXISTS hotel_amenity;

CREATE TABLE IF NOT EXISTS hotel_amenity (
	hotel_id INT PRIMARY KEY,
    parking BOOL ,
    wifi BOOL,
    room_service BOOL, 
    swimming_pool BOOL,
    fitness_center BOOL,
    dining BOOL,
    CONSTRAINT FK_ha_hd FOREIGN KEY (hotel_id) REFERENCES hotel_detail(hotel_id)
    );