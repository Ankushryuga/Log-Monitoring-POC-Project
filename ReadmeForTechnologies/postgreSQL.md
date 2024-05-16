## postgreSQL: SQL engine that stores data and read queries and return information

## pgAdmin: GUI tool of postgreSQL.


### Table Design in POSTGRESQL:

Select neccessary data types, indexes, and partitioning strategies can
significantly impact performance and storage efficiency.

The JSON data can be normalized into separate table or whethter it's more suitable
to store as JSONB data type in postgresql.


## 5 Techinque to making postgreSQL run SUPERFAST.
1. PREPARE
2. INDEX
3. PARTITION
4. COPY (WHEN STORING FILE DATA BECAUSE INSERT INTO TAKE MORE BASED ON DATA).
5. REPLICATE



## check postgresql status
1. sudo systemctl status postgresql













### sudo su - postgres              //getting psql
### psql                            //getting in psql
### \du                             // will show all users avaiable
### ALTER USER "username" WITH PASSWORD '123';
 o/p=ALTERED





## Data Types
1. VARCHAR
2. CHAR
3. SMALLINT
4. DATE
    1. No matter what format you enter you get : YYYY-MM-DD
5. TIMESTAMP 
    1. Timestamp
    2. Interval
6. SERIAL //AUTO INCREMENT INTEGER. 
6. Text //store any number of char
7. NUMERIC
    0. Serial: it's auto increment used for column ids..
    1. Smallserial: 1 to 32,767
    2. Serial: 1 to 2147483647
    3. Bigserial: 1 to 9223372036854775807
    4. SmallInt: -32768 to 32767
    5. Integer: -2147583648 to 2147583647
    6. BigInt: -9223372036854775808 to 9223372036854775807
7.1. NUMERIC : Floats with decimals
    0. Decimal: 131072 whole digits and 16383 after decimal
    1. Numeric: 131072 whole digits and 16383 after decimal
    2. Real: 1E-37 to 1E37
    3. Double Precision: 1E-307 to 1E308
    4. Float: Same as double

8. Boolean: True, False or Null, 
    1. True: 1,t,y, Yes, on
    2. False: 0,f,n, no, off
    3. Null
9. Time
10. Currency
11. Binary
12. JSON
13. Range
14. Geometric
15. Arrays
16. XML
17. UUID
18. Custom Data Type


19. Create custom data type in post
1. CREATE TYPE check_type as enum ('M', 'F')

20. Foreign Key: It should be integer type when refernce primary key of other table.

21. Add new column:
    1. ALTER TABLE sales_item ADD days_of_week VARCHAR(50);

22. MODIFY column:
    1. ALTER TABLE sales_item ALTER COLUMN column_name SET NOT NULL;

23. RENAME THE COLUMN:
    1. ALTER TABLE sales_item RENAME COLUMN column_name TO new_column_name;

24. DROP Column:
    1. ALTER TABLE sales_item DROP COLUMN column_name;


## NOTE: CREATING INDEX BASED ON INDIVIDUAL COLUMN.
1. CREATE INDEX transaction_id ON table_name(name);
2. CREATE INDEX transaction_id_2 ON table_name(name, payment_type);


## Truncate all data inside table
1. TRUNCATE TABLE table_name;


## Drop table
1. DROP TABLE table_name;


## Conditional Operators:
1. = : Equal
2. <, >, <=, >=, <> (Not Equal) != :Not Equal


## JOIN
0. Inner Join:
1. Outer Join: return all of the rows from 1 of the table, even though no match found
2. LEFT JOIN: return all the rows from left table
3. RIGHT JOIN: return all the rows from right table
4. CROSS JOIN: return data from both table
5. NATURAL JOIN:

## UNION:
1. combine 2 or more table in one NOTE(rows number should be same and column should be matched data type).






## Create function in post

/** 
CREATE OR REPLACE FUNCTION function_name(int, int) RETURNS RETURN_TYPE AS
    '
    SELECT $1+$2;
    '
    LANGUAGE SQL

SELECT function_name(1, 2);


CREATE OR REPLACE FUNCTION function_name(int, int) RETURNS int AS
    '
    SELECT $1+$2;
    '
    LANGUAGE SQL



SELECT function_name(1, 2);
**/


## DOLLER QUOTE in function:
/**
   
 CREATE OR REPLACE FUNCTION temp_function(int, int, int) RETURNS int as
    $body$
    SELECT $1+$2+$3;
    $body$
LANGUAGE SQL

//run above script to create a function.

execute the function:
SELECT temp_function(1,2, 3);


CREATE OR REPLACE FUNCTION get_order_from_customer(cus_name varchar) RETURNS numeric as 
$body$
    select count(*) from orders
    where customer_name=cus_name;
$body$
LANGUAGE SQL

SELECT get_order_from_customer(rohan);
**/


## We can return table from function as well.






### PGSQL FUNCTIONS:


/**
CREATE OR REPLACE FUNCTION function_name(parameter parameter_type) RETURNS ret_type AS 
$body$
BEGIN


END
$body$

LANGUAGE plpgsql
**/


### DECLARE VARIABLE INSIDE FUNCTION::

/**
CREATE OR REPLACE FUNCTION function_name(val1 int, val2 int) RETURNS int as
$body$
DECLARE
    ans int;
BEGIN
    ans:=val1+val2
    return ans;
END
$body$
LANGUAGE plpgsql

SELECT function_name(1, 3);
**/

## IF else 

/**
IF condition THEN
ELSEIF condition THEN
ELSE

END IF
**/


## CASE statement:
/**
CASE
    WHEN condition THEN
    WHEN condition THEN
END CASE:
**/


## LOOPING:


