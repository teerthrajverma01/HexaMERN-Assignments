use apr2024db;

DELIMITER //
CREATE PROCEDURE qnfour(IN ipempno INT, IN ipename VARCHAR(30), IN ipjob VARCHAR(30), IN salary INT, IN deptno INT  )
BEGIN
	INSERT INTO emps VALUES(ipempno,ipename,ipjob,salary,deptno);
END //
DELIMITER ;

DROP PROCEDURE qnfour;

SET @ipempno=7777;
SET @ipename='RONAK';
SET @ipjob='PUEN';
SET @salary=2300;
SET @deptno=10;
CALL qnfour(@ipempno,@ipename,@ipjob,@salary,@deptno);



