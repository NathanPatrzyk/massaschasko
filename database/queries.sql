CREATE DATABASE new_massaschasko;
USE new_massaschasko;

CREATE TABLE page (
    id_page INT AUTO_INCREMENT,
    nome_page VARCHAR(200) NOT NULL,
    CONSTRAINT pk_page PRIMARY KEY (id_page)
)ENGINE = INNODB;
DESC page;

INSERT INTO page
    (nome_page)
VALUES
    ("Croissants"),
    ("Esfihas"),
    ("Nhoques"),
    ("Pierogues"),
    ("Outros Produtos");