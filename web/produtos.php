<!DOCTYPE html>
<?php
    include './connection/connection.php';

    $id = filter_input(INPUT_GET, "id", FILTER_SANITIZE_STRING);

    if(empty($id)){
        echo "Erro! Código da tarefa está nulo.";
    }
    else{
        if($id == "todos"){
            $query = "SELECT id, nome FROM categoria";
            $stm = $connection->prepare($query);
        }
        else{
            $query = "SELECT id, nome FROM categoria WHERE pagina_id=:pagina_id";
            $stm = $connection->prepare($query);
            $stm->bindParam('pagina_id', $id);
        }
        $stm->execute();
        $listaDeCategorias = $stm->fetchAll(PDO::FETCH_ASSOC);
    }
?>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Massas Chasko - Nossos Produtos</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    
    <style>
        main{
            background: url(./img/main-bg.png) bottom;
        }
        body{
            padding-top: 71px;
        }
        .produtos{
            grid-template-columns: repeat(auto-fit, 144px);
        }
    </style>
<body>
    <?php
        include './pages/navbar.pages.php';
    ?>
    <section>
        <div class="container-fluid d-block d-md-flex gap-3 align-items-center p-4 p-md-5">
            <div class="container-fluid py-3 p-0 p-md-3">
                <?php foreach($listaDeCategorias as $categoria): ?>
                    <h2 class="h1 pb-2 border-bottom border-2 border-success"><?=$categoria['nome']?></h2>

                    <?php
                        $query = "SELECT * FROM produto WHERE categoria_id=:categoria_id";
                        $stm = $connection->prepare($query);
                        $stm->bindParam('categoria_id', $categoria['id']);
                        $stm->execute();
                        $listaDeProdutos = $stm->fetchAll(PDO::FETCH_ASSOC);
                    ?>
                    
                    <div class="produtos container-fluid d-grid gap-1 gap-md-3 px-0 px-md-3">
                        <?php foreach($listaDeProdutos as $produto): ?>
                            <div class="produto container-fluid d-flex align-items-center flex-column px-0 px-md-1 py-4">
                                <div>
                                    <img src="./assets/img/produtos/<?=$produto['titulo_da_imagem']?>" width="138" height="190">
                                </div>
                                <div class="mb-auto w-100">
                                    <h3 class="h4 pt-3 pb-2 m-0"><?=$produto['nome']?></h3>
                                </div>
                                <div class="mt-auto w-100">
                                    <p class="pt-2 pb-3 m-0"><?=$produto['descricao']?></p>
                                </div>
                                <div>
                                    <a class="text-decoration-none" href="https://api.whatsapp.com/send/?phone=5542998138118&text=<?=$produto['mensagem_de_texto']?>&type=phone_number&app_absent=0" target="_blank">
                                        <button class="btn btn-success px-2">Fazer pedido <i class="bi bi-whatsapp"></i></button>
                                    </a>
                                </div> 
                            </div>
                        <?php endforeach; ?>
                    </div>

                <?php endforeach; ?>
            </div>
        </div>
        
    </section>
    
    <?php
        include './pages/footer.pages.php';
    ?>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>