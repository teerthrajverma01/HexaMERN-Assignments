DROP TABLE IF EXISTS booking_description;

CREATE TABLE IF NOT EXISTS booking_description (
	uid INT PRIMARY KEY AUTO_INCREMENT,
    booking_id INT,
    room_id INT,
	booking_amount_room INT,
    checkin_date Date,
    checkout_date Date,
    CONSTRAINT  FK_bd_bd FOREIGN KEY (booking_id) REFERENCES booking_detail(booking_id),
    CONSTRAINT  FK_bd_rd FOREIGN KEY (room_id) REFERENCES room_detail(room_id)
	);	