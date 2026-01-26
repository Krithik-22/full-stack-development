-- select * from cars;

-- selecting columns
-- SELECT brand, model, year from cars;

-- WHERE clause - filtering
-- select * from cars where year = 2021;

-- Numerical filtering
-- select * from cars where year >= 2001;
-- select * from cars where year != 2001;(!= can be used like this as well <>)

-- NOT and LIKE
-- select * from cars where color LIKE '%green%'
-- select * from cars where color NOT LIKE '%green%'

-- AND operator
-- select * from cars where color LIKE '%green%' AND year >= 2019
-- select * from cars where year >= 2019 AND year <= 2021

-- BETWEEN operator
-- select * from cars where year BETWEEN 2019 AND 2021

-- OR operator
-- select * from cars where color LIKE '%green%' OR year >= 2019

-- IN operator
-- select * from cars where color in ('green','yellow','red')

-- Orders and Aggregates
-- ORDER BY
-- select * from cars ORDER BY year desc

-- LIMIT
-- select * from cars ORDER BY price desc LIMIT 1;

-- aggregations
-- SUM and COUNT
-- select COUNT(*) AS total_sold from cars WHERE SOLD IS TRUE;
-- select SUM(price) AS total_earnings from cars WHERE SOLD IS TRUE;

-- MAX, MIN and AVG
-- select MAX(price) AS most_expensive from cars WHERE sold IS TRUE;

-- Select AVG(price) as avg_price, brand FROM cars where brand = 'bentley'
-- Select MIN(price) AS min_price, MAX(price) as max_price, AVG(price) AS avg_price from cars sold IS TRUE;

-- GROUP BY
-- SELECT brand, count(brand) from cars GROUP BY brand;

-- HAVING
-- SELECT brand, count(brand) from cars GROUP BY brand HAVING count(brand) > 1;



-- DML - Data Manipulation Language
-- CRUD Operations - Create, Read, Update and Delete


-- Inserting new values
-- INSERT INTO
-- INSERT INTO cars(col1, col2, col3,...) VALUES(col1Val, col2Val, col3Val,..)

-- UPDATE
-- UPDATE cars SET sold = TRUE where brand = bentley;

-- DELETE
-- DELETE from cars where consition = 1;