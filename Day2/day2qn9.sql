
DELIMITER $$
CREATE TRIGGER trg_after_delete_prods
    AFTER DELETE
    ON products FOR EACH ROW
BEGIN
	 SET @message:= CONCAT('AFTER DELETE TRIGGER IS EXECUTED AT ', DATE_FORMAT(NOW(), '%d-%m-%Y at %h:%i:%s %p'));
     
	INSERT INTO ProductsLogs(Operation, ProductId, ProductName, Date, Time, Message) 
	VALUES ('DELETE Operation',OLD.ProductId, OLD.name, CURDATE(), CURTIME(),
	'This message generated at the time of delete a record in productstable');

END $$ 
DELIMITER ;

DROP TRIGGER trg_after_delete_prods;

-- Verify the trigger functionality by delelting existing record in produts table 
DELETE FROM products WHERE ProductId =6;
SELECT @message;