CREATE TABLE categoria(
    id INT AUTO_INCREMENT NOT NULL,
    nome VARCHAR(200) NOT NULL,
    -- "Produto"
    peso VARCHAR(50),
    -- "400g"
    -- "2kg"
    pagina_id VARCHAR(300),

    PRIMARY KEY(id),
    FOREIGN KEY(pagina_id) REFERENCES pagina(id)
)

-- FALTAR EXECUTAR