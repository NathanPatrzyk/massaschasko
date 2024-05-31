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

CREATE TABLE weight (
    id_weight INT AUTO_INCREMENT,
    name_weight VARCHAR(200) NOT NULL,
    CONSTRAINT pk_category PRIMARY KEY (id_weight)
)ENGINE = INNODB;
DESC weight;

INSERT INTO weight
    (name_weight)
VALUES
    ("350g"),
    ("400g"),
    ("1Kg"),
    ("1,2Kg"),
    ("2Kg");
SELECT * FROM weight;

CREATE TABLE product (
    id_product INT AUTO_INCREMENT,
    name_product VARCHAR(200) NOT NULL,
    id_category INT NOT NULL,
    id_weight INT NOT NULL,
    CONSTRAINT pk_product PRIMARY KEY (id_product),
    CONsTRAINT fk_product_category FOREIGN KEY (id_category) REFERENCES category(id_category),
    CONSTRAINT fk_product_weight FOREIGN KEY (id_weight) REFERENCES weight(id_weight)
    ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE = INNODB;
DESC product;

INSERT INTO product
    (name_product, id_category, id_weight)
VALUES
    ("Pierogue de Pizza", 4, 2),
    ("Pierogue de Batata", 4, 2),
    ("Pierogue de Batata com Frango", 4, 2),
    ("Pierogue Tradicional", 4, 2),
    ("Pierogue de Calabresa", 4, 2),
    ("Pierogue de Espinafre Ricota e Brócolis", 4, 2),
    ("Pierogue de Requeijão e Ricota", 4, 2),
    ("Pierogue de Feijão e Bacon", 4, 2),
    ("Pierogue de Batata e Rúcula", 4, 2),
    ("Pierogue de Batata e Repolho", 4, 2),
    ("Pierogue de Batata com Bacon", 4, 2),
    ("Pierogue de Ricota com Tomate Seco", 4, 2),
    ("Pierogue de Batata e Carne Desfiada", 4, 2),

    ("Pierogue de Batata", 4, 5),
    ("Pierogue de Batata com Frango", 4, 5),
    ("Pierogue Tradicional", 4, 5),
    ("Pierogue de Calabresa", 4, 5),
    ("Pierogue de Requeijão e Ricota", 4, 5),
    ("Pierogue de Batata com Bacon", 4, 5),

    ("Nhoque Tradicional", 3, 2),

    ("Nhoque Tradicional", 3, 3);
