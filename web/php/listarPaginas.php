<?php
    include './connection/connection.php';

    $query = "SELECT id, nome FROM pagina";
    $stm = $connection->prepare($query);
    $stm->execute();
    $listaDePaginas = $stm->fetchAll();
?>