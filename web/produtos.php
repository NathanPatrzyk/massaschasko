<!DOCTYPE html>
<?php
    include './connection/connection.php';

    $id = filter_input(INPUT_GET, "id", FILTER_SANITIZE_STRING);

    if(empty($id)){
        echo "Erro! Código da tarefa está nulo.";
    }
    else{
        if($id == "todos"){
            $query = "SELECT nome FROM categoria";
            $stm = $connection->prepare($query);
        }
        else{
            $query = "SELECT nome FROM categoria WHERE pagina_id=:pagina_id";
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
    </style>
<body>
    <?php
        include './pages/navbar.pages.php';
    ?>
    <?php foreach($listaDeCategorias as $categoria): ?>
        <p><?=$categoria['nome']?></p>
    <?php endforeach; ?>
    <?php
        include './pages/footer.pages.php';
    ?>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>