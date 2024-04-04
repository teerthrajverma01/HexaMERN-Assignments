USE shoppingcartdb;

CREATE TABLE  ProductsLogs (
	Id INT  AUTO_INCREMENT  PRIMARY KEY,
	Operation  VARCHAR(100),
	ProductId INT, 
	ProductName VARCHAR(100),
	Date VARCHAR(100),  
    Time VARCHAR(100),
    Message VARCHAR(200)
    );
    
    
    DROP TABLE ProductsLogs;