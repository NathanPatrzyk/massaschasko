DROP DATABASE IF EXISTS new_massaschasko;
CREATE DATABASE new_massaschasko;
USE new_massaschasko;

CREATE TABLE category (
    id_category INT AUTO_INCREMENT,
    name_category VARCHAR(200) NOT NULL,
    CONSTRAINT pk_category PRIMARY KEY (id_category)
)ENGINE = INNODB;
DESC category;

INSERT INTO category
    (name_category)
VALUES
    ("Croissants"),
    ("Esfihas"),
    ("Nhoques"),
    ("Pierogues"),
    ("Outros Produtos");
SELECT * FROM category;