DROP TABLE IF EXISTS review_detail;

-- CREATE TABLE IF NOT EXISTS review_detail (
-- 	review_id INT PRIMARY KEY AUTO_INCREMENT,
--     booking_uid INT,
--     review TEXT,
--     time_stamp DATETIME DEFAULT CURRENT_TIMESTAMP,
--     CONSTRAINT FK_rd_bd FOREIGN KEY (booking_uid) REFERENCES booking_detail(uid)
-- 	);

CREATE TABLE IF NOT EXISTS review_detail (
	review_id INT PRIMARY KEY AUTO_INCREMENT,
    booking_id INT,
    review TEXT,
    time_stamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT FK_rd_bd FOREIGN KEY (booking_id) REFERENCES booking_detail(booking_id)
	);