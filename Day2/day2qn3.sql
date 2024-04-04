use apr2024db;

DELIMITER //
CREATE PROCEDURE qnthree(OUT empcount INT )
BEGIN
	SELECT COUNT(*)   FROM emps 
    WHERE salary > (SELECT AVG(salary) FROM emps) ;
END //
DELIMITER ;

DROP PROCEDURE qnthree;

SET @empcount = 0;
CALL qnthree(@empcount);
SELECT @empcount AS EMPCOUNT;



