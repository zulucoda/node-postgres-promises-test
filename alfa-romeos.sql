DROP DATABASE IF EXISTS alfaromeos;
CREATE DATABASE alfaromeos;

\c alfaromeos;

CREATE TABLE cars (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  colour VARCHAR,
  age INTEGER,
  engine VARCHAR
);

INSERT INTO cars (name, colour, age, engine)
  VALUES ('Alfa Romeo Giulietta', 'White', 6, '1.8');
