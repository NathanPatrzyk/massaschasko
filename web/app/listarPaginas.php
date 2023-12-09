<?php
    include './connection/connection.php';

    $query = "SELECT id, nome FROM pagina ORDER BY id DESC";
    $stm = $connection->prepare($query);
    $stm->execute();
    $listaDePaginas = $stm->fetchAll();
?>