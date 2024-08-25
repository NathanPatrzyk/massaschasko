CREATE TABLE page (
    id_page INT AUTO_INCREMENT,
    name_page VARCHAR(200) NOT NULL,
    CONSTRAINT pk_page PRIMARY KEY (id_page)
)ENGINE = INNODB;

CREATE TABLE category (
    id_category INT AUTO_INCREMENT,
    name_category VARCHAR(200) NOT NULL,
    weight_category VARCHAR(200) NOT NULL,
    id_page INT NOT NULL,
    CONSTRAINT pk_category PRIMARY KEY (id_category),
    CONSTRAINT fk_category_page FOREIGN KEY (id_page) REFERENCES page(id_page)
    ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE = INNODB;

CREATE TABLE product (
    id_product INT AUTO_INCREMENT,
    name_product VARCHAR(200) NOT NULL,
    id_category INT NOT NULL,
    CONSTRAINT pk_product PRIMARY KEY (id_product),
    CONSTRAINT fk_product_category FOREIGN KEY (id_category) REFERENCES category(id_category)
    ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE = INNODB;