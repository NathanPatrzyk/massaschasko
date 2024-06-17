DROP DATABASE IF EXISTS new_massaschasko;
CREATE DATABASE new_massaschasko;
USE new_massaschasko;

CREATE TABLE category (
    id_category INT AUTO_INCREMENT,
    name_category VARCHAR(200) NOT NULL,
    parent_id_category INT,
    CONSTRAINT pk_category PRIMARY KEY (id_category),
    CONSTRAINT fk_category_category FOREIGN KEY (parent_id_category) REFERENCES category(id_category)
    ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE = INNODB;
DESC category;

INSERT INTO category
    (name_category)
VALUES
    ("Croissants"),
    ("Esfihas"),
    ("Nhoques"),
    ("Pães de Queijo"),
    ("Pierogues"),
    ("Outros Produtos");
INSERT INTO category
    (name_category, parent_id_category)
VALUES
    ("Croissants Doces", 1),
    ("Esfihas Abertas", 2),
    ("Nhoques Recheados", 3),
    ("Mini Pierogues", 4);
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
    ("500g"),
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
    CONSTRAINT fk_product_category FOREIGN KEY (id_category) REFERENCES category(id_category),
    CONSTRAINT fk_product_weight FOREIGN KEY (id_weight) REFERENCES weight(id_weight)
    ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE = INNODB;
DESC product;

INSERT INTO product
    (name_product, id_category, id_weight)
VALUES
    ("Croissant de Carne Moída", 1, 1),
    ("Croissant de Frango", 1, 1),
    ("Croissant de Pizza", 1, 1),
    ("Croissant de Palmito", 1, 1),

    ("Croissant de Banana com Canela", 7, 1),
    ("Croissant de Chocolate Preto", 7, 1),

    ("Croissant de Carne Moída", 1, 5),
    ("Croissant de Frango", 1, 5),
    ("Croissant de Pizza", 1, 5),

    ("Croissant de Chocolate Preto", 7, 5),

    ("Esfiha de Carne Moída", 2, 1),
    ("Esfiha de Frango", 2, 1),
    ("Esfiha de Pizza", 2, 1),
    ("Esfiha de Palmito", 2, 1),
    ("Esfiha de Costela", 2, 1),
    ("Esfiha de Multigrãos", 2, 1),

    ("Esfiha de Carne Moída", 2, 5),
    ("Esfiha de Frango", 2, 5),

    ("Nhoque Tradicional", 3, 2),

    ("Nhoque Recheado de Carne Moída", 9, 2),
    ("Nhoque Recheado de Frango", 9, 2),
    ("Nhoque Recheado de Queijo", 9, 2),
    
    ("Nhoque Tradicional", 3, 4),
    ("Nhoque de Espinafre", 3, 4),

    ("Nhoque Recheado de Carne Moída", 9, 4),
    ("Nhoque Recheado de Frango", 9, 4),
    ("Nhoque Recheado de Queijo", 9, 4),

    ("Pão de Queijo com Cheddar", 4, 3),
    ("Pão de Queijo com Vinagrete", 4, 3),
    ("Pão de Queijo Tradicional", 4, 3),

    ("Pierogue de Batata", 4, 2),
    ("Pierogue de Batata e Bacon", 4, 2),
    ("Pierogue de Batata e Frango", 4, 2),
    ("Pierogue de Batata e Carne Desfiada", 4, 2),
    ("Pierogue de Batata e Repolho", 4, 2),
    ("Pierogue de Batata e Rúcula", 4, 2),
    ("Pierogue de Calabresa", 4, 2),
    ("Pierogue de Espinafre Ricota e Brócolis", 4, 2),
    ("Pierogue de Feijão e Bacon", 4, 2),
    ("Pierogue de Pizza", 4, 2),
    ("Pierogue de Requeijão e Ricota", 4, 2),
    ("Pierogue de Ricota com Tomate Seco", 4, 2),
    ("Pierogue Tradicional", 4, 2),

    ("Pierogue de Batata", 4, 6),
    ("Pierogue de Batata e Bacon", 4, 6),
    ("Pierogue de Batata e Frango", 4, 6),
    ("Pierogue de Calabresa", 4, 6),
    ("Pierogue de Requeijão e Ricota", 4, 6),
    ("Pierogue Tradicional", 4, 6),

    ("Mini Pierogue de Bacon", 10, 4),
    ("Mini Pierogue de Calabresa", 10, 4),
    ("Mini Pierogue de Carne Desfiada", 10, 4),
    ("Mini Pierogue de Espinafre Ricota e Brócolis", 10, 4),
    ("Mini Pierogue de Frango", 10, 4),
    ("Mini Pierogue de Requeijão", 10, 4),
    ("Mini Pierogue Tradicional", 10, 4),

    ("Charuto de Repolho", 6, 2),
    ("Churros de Doce de Leite com Chocolate", 6, 2),
    ("Coxinha de Frango e Catupiry", 6, 2),
    ("Kibe Recheado", 6, 2),
    ("Macarrão Talharim", 6, 2),

    ("Churros de Doce de Leite com Chocolate", 6, 4),
    ("Coxinha de Frango e Catupiry", 6, 4),
    ("Kibe Recheado", 6, 4),

    ("Hamburgão", 6, 5),
    ("Hot Dog", 6, 5);