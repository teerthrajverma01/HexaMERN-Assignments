CREATE DATABASE ShoppingCartDb;
use ShoppingCartDb;


CREATE TABLE Products (
ProductId  INT  PRIMARY KEY ,
Name	VARCHAR(100) NOT NULL,
QuantityInStock	INT NOT NULL CHECK (QuantityInStock >= 0),
UnitPrice DECIMAL(10, 2) NOT NULL CHECK (UnitPrice > 0),
Category VARCHAR(100) NOT NULL
);

CREATE TABLE Users (
    UserId INT PRIMARY KEY,
    UserName VARCHAR(100),
    Password VARCHAR(100),
    ContactNumber VARCHAR(15),
    Address VARCHAR(255)
);

CREATE TABLE Cart (
    CartId INT PRIMARY KEY,
    ProductId INT,
    Quantity INT NOT NULL CHECK (Quantity > 0),
    UserId INT NOT NULL,
    FOREIGN KEY (ProductId) REFERENCES Products(ProductId),
    FOREIGN KEY (UserId) REFERENCES Users(UserId)
);

CREATE TABLE Orders (
    OrderId INT PRIMARY KEY,
    CartId INT NOT NULL,
    OrderDate DATE,
    FOREIGN KEY (CartId) REFERENCES Cart(CartId)
);

-- ***************************************** 
ALTER TABLE `shoppingcartdb`.`cart` 
DROP FOREIGN KEY `cart_ibfk_1`,
DROP FOREIGN KEY `cart_ibfk_2`;
ALTER TABLE `shoppingcartdb`.`cart` 
ADD CONSTRAINT `cart_ibfk_1`
  FOREIGN KEY (`ProductId`)
  REFERENCES `shoppingcartdb`.`products` (`ProductId`)
  ON DELETE CASCADE
  ON UPDATE CASCADE,
ADD CONSTRAINT `cart_ibfk_2`
  FOREIGN KEY (`UserId`)
  REFERENCES `shoppingcartdb`.`users` (`UserId`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;
  

ALTER TABLE `shoppingcartdb`.`orders` 
DROP FOREIGN KEY `orders_ibfk_1`;
ALTER TABLE `shoppingcartdb`.`orders` 
ADD CONSTRAINT `orders_ibfk_1`
  FOREIGN KEY (`CartId`)
  REFERENCES `shoppingcartdb`.`cart` (`CartId`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;


-- ************************************************ 

INSERT INTO Products (ProductId, Name, QuantityInStock, UnitPrice, Category)
VALUES
    (1, 'p1', 10, 1500.99, 'Category1'),
    (2, 'p2', 20, 2500.49, 'Category2'),
    (3, 'p3', 5, 900.99, 'Category3'),
    (4, 'p4', 15, 1200.99, 'Category2'),
    (5, 'p5', 30, 19000.99, 'Category1');
    
INSERT INTO Users (UserId, UserName, Password, ContactNumber, Address)
VALUES
    (1, 'User1', 'password1', '1234567890', 'Address1'),
    (2, 'User2', 'password2', '0987654321', 'Address2'),
    (3, 'User3', 'password3', '9876543210', 'Address3'),
    (4, 'User4', 'password4', '0123456789', 'Address4'),
    (5, 'User5', 'password5', '5678901234', 'Address5');

INSERT INTO Cart (CartId, ProductId, Quantity, UserId)
VALUES
    (1, 1, 2, 1),
    (2, 3, 1, 2),
    (3, 5, 3, 3),
    (4, 2, 2, 3),
    (5, 4, 1, 5);

INSERT INTO Orders (OrderId, CartId, OrderDate)
VALUES
    (1, 1, '2024-08-01'),
    (2, 2, '2023-07-02'),
    (3, 3, '2022-06-03'),
    (4, 4, '2021-05-04'),
    (5, 5, '2020-04-05');
    
DELETE FROM Products WHERE ProductId = 1;  
DELETE FROM Users WHERE UserId = 1;

-- works
INSERT INTO Products (ProductId, Name, QuantityInStock, UnitPrice, Category)
VALUES (6, 'InvalidProduct', -5, 10.99, 'InvalidCategory');

-- should not work 
INSERT INTO Cart (CartId, ProductId, Quantity, UserId)
VALUES (6, 10, 2, 3);


-- *****************************************

SELECT * FROM Products;
SELECT * FROM Products WHERE Category = 'Category2';
SELECT * FROM Products WHERE QuantityInStock = 0;
SELECT * FROM Products WHERE UnitPrice BETWEEN 1000 AND 10000;
SELECT * FROM Products WHERE ProductId = 3;

SELECT * FROM Cart WHERE CartId = 2;
SELECT * FROM Cart WHERE ProductId = 3;

SELECT * FROM Orders WHERE OrderId = 2;
SELECT *
FROM Orders 
JOIN Cart 
ON Orders.CartId = Cart.CartId
WHERE  Cart.UserId=2 ;






 


