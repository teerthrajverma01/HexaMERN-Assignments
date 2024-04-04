
DELIMITER $$
CREATE TRIGGER trg_after_insert_prods
    AFTER INSERT
    ON products FOR EACH ROW
BEGIN
	 SET @message:= CONCAT('AFTER INSERT TRIGGER IS EXECUTED AT ', DATE_FORMAT(NOW(), '%d-%m-%Y at %h:%i:%s %p'));
     
	INSERT INTO ProductsLogs(Operation, ProductId, ProductName, Date, Time, Message) 
	VALUES ('INSERT Operation',NEW.ProductId, NEW.name, CURDATE(), CURTIME(),
	'This message generated at the time insert a record in productstable');

END $$ 
DELIMITER ;

DROP TRIGGER trg_after_insert_prods;


-- Verify the trigger functionality by inserting new record in products table 
INSERT INTO products VALUES(10,'phulgobhi',12,100.99,'Sabji');
SELECT @message;