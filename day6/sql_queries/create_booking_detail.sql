DROP TABLE IF EXISTS booking_detail;

-- CREATE TABLE IF NOT EXISTS booking_detail (
-- 	uid INT PRIMARY KEY AUTO_INCREMENT,
-- 	booking_id INT NOT NULL,
--     hotel_id INT,
--     user_id INT,
--     room_id INT ,
--     checkin_date Date,
--     checkout_date Date,
--     booking_status ENUM('BOOKED', 'REFUND_PENDING','REFUND_APPROVED','REFUND_CANCELED'),
--     CONSTRAINT  FK_bd_hd FOREIGN KEY (hotel_id) REFERENCES hotel_detail(hotel_id),
--     CONSTRAINT  FK_bd_ud FOREIGN KEY (user_id) REFERENCES user_detail(user_id),
-- 	CONSTRAINT  FK_bd_rd FOREIGN KEY (room_id) REFERENCES room_detail(room_id)
-- 	);

CREATE TABLE IF NOT EXISTS booking_detail (
	booking_id INT PRIMARY KEY AUTO_INCREMENT,
    hotel_id INT,
    user_id INT,
    no_rooms INT ,
    total_booking_amount INT, 
    checkin_date Date,
    checkout_date Date,
    booking_status ENUM('BOOKED', 'REFUND_PENDING','REFUND_APPROVED','REFUND_CANCELED'),
    CONSTRAINT  FK_bd_hd FOREIGN KEY (hotel_id) REFERENCES hotel_detail(hotel_id),
    CONSTRAINT  FK_bd_ud FOREIGN KEY (user_id) REFERENCES user_detail(user_id)
	);