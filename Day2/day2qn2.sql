use apr2024db;

DELIMITER //
CREATE PROCEDURE qntwo(IN dept_name VARCHAR(100))
BEGIN
	SELECT * FROM emps JOIN dept ON emps.deptno = dept.deptno
    WHERE dept.dname = dept_name;
END //
DELIMITER ;

DROP PROCEDURE qntwo;

set @dept_name= "Logistic";
CALL qntwo(@dept_name);


