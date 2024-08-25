INSERT INTO pages
    (name, description)
VALUES
    ("Pierogues", "Tradição dos imigrantes poloneses, o pierogue (ou 'pierog') é basicamente um pastel salgado cozido. Com uma massa saborosa recheios únicos, o produto tornou-se carro chefe da Massas Chasko por ser um dos mais procurados pelos consumidores."),
    
    ("Nhoques", "O nhoque é um prato típico da cozinha italiana. Trata-se de uma massa cozida dividida em pequenas porções arredondadas, pode ser servida com o molho de preferência. Experimente mais essa delícia da Massas Chasko."),

    ("Croissants", "O croissant, é um tipo de massa folhada em formato de meia-lua. São consumidos no café da manhã em muitos países europeus e servidos como sobremesa em todo o mundo. Conheça nossas opcões de croissants salgados e doces."),

    ("Esfihas", "A esfiha é uma pequena torta assada originária da Síria e do Líbano, e encontrada em outros países do Oriente Médio. Conheça nossos produtos e faça seu pedido."),

    ("Pães de Queijo", "O pão de queijo é originário de Minas Gerais e surgiu por volta de 1750, usando polvilho de mandioca, queijo, ovos e leite. Conheça nossos produtos e faça seu pedido para experimentar essa delícia."),

    ("Outros Produtos", "Também possuímos Charuto, Churros, Coxinha, Kibe, Macarrão, Hamburgão e Hot Dog. Conheça nossos produtos e faça seu pedido.");

INSERT INTO categories
    (name, weight, page_id)
VALUES
    ("Pierogues", "400g", 1),
    ("Pierogues", "2Kg", 1),
    ("Mini Pierogues", "1Kg", 1),

    ("Nhoques", "400g", 2),
    ("Nhoques", "1Kg", 2),

    ("Croissants", "350g", 3),
    ("Croissants", "1,2Kg", 3),

    ("Esfihas", "350g", 4),
    ("Esfihas", "1,2Kg", 4),
    ("Esfihas Abertas", "400g", 4),

    ("Pães de Queijo", "500g", 5),
    
    ("Outros Produtos", "400g", 6),
    ("Outros Produtos", "1Kg", 6),
    ("Outros Produtos", "1,2Kg", 6);

INSERT INTO products
    (name, category_id)
VALUES
    ("Pierogue de Batata", 1),
    ("Pierogue de Batata e Bacon", 1),
    ("Pierogue de Batata e Frango", 1),
    ("Pierogue de Batata e Carne Desfiada", 1),
    ("Pierogue de Batata e Repolho", 1),
    ("Pierogue de Batata e Rúcula", 1),
    ("Pierogue de Calabresa", 1),
    ("Pierogue de Espinafre Ricota e Brócolis", 1),
    ("Pierogue de Feijão e Bacon", 1),
    ("Pierogue de Pizza", 1),
    ("Pierogue de Requeijão e Ricota", 1),
    ("Pierogue de Ricota com Tomate Seco", 1),
    ("Pierogue Tradicional", 1),
    ("Pierogue de Batata", 2),
    ("Pierogue de Batata e Bacon", 2),
    ("Pierogue de Batata e Frango", 2),
    ("Pierogue de Calabresa", 2),
    ("Pierogue de Requeijão e Ricota", 2),
    ("Pierogue Tradicional", 2),
    ("Mini Pierogue de Bacon", 3),
    ("Mini Pierogue de Calabresa", 3),
    ("Mini Pierogue de Carne Desfiada", 3),
    ("Mini Pierogue de Espinafre Ricota e Brócolis", 3),
    ("Mini Pierogue de Frango", 3),
    ("Mini Pierogue de Requeijão", 3),
    ("Mini Pierogue Tradicional", 3),

    ("Croissant de Carne Moída", 4),
    ("Croissant de Frango", 4),
    ("Croissant de Pizza", 4),
    ("Croissant de Palmito", 4),
    ("Croissant de Banana com Canela", 4),
    ("Croissant de Chocolate Preto", 4),
    ("Croissant de Carne Moída", 5),
    ("Croissant de Frango", 5),
    ("Croissant de Pizza", 5),
    ("Croissant de Chocolate Preto", 5),

    ("Esfiha de Carne Moída", 6),
    ("Esfiha de Frango", 6),
    ("Esfiha de Pizza", 6),
    ("Esfiha de Palmito", 6),
    ("Esfiha de Costela", 6),
    ("Esfiha de Multigrãos", 6),
    ("Esfiha de Carne Moída", 7),
    ("Esfiha de Frango", 7),
    ("Esfiha Aberta de Carne Moída", 8),
    ("Esfiha Aberta de Frango", 8),
    ("Esfiha Aberta de Pizza", 8),
    ("Esfiha Aberta de Costela", 8),
    ("Esfiha Aberta de Chocolate Preto", 8),

    ("Nhoque Tradicional", 9),
    ("Nhoque Recheado de Carne Moída", 9),
    ("Nhoque Recheado de Frango", 9),
    ("Nhoque Recheado de Queijo", 9),
    ("Nhoque Tradicional", 10),
    ("Nhoque de Espinafre", 10),
    ("Nhoque Recheado de Carne Moída", 10),
    ("Nhoque Recheado de Frango", 10),
    ("Nhoque Recheado de Queijo", 10),

    ("Pão de Queijo com Cheddar", 11),
    ("Pão de Queijo com Vinagrete", 11),
    ("Pão de Queijo Tradicional", 11),

    ("Charuto de Repolho", 12),
    ("Churros de Doce de Leite com Chocolate", 12),
    ("Coxinha de Frango e Catupiry", 12),
    ("Kibe Recheado", 12),
    ("Macarrão Talharim", 12),
    ("Churros de Doce de Leite com Chocolate", 13),
    ("Coxinha de Frango e Catupiry", 13),
    ("Kibe Recheado", 13),
    ("Hamburgão", 14),
    ("Hot Dog", 14);