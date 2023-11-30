<?php
    try{
        $connection = new PDO("mysql:host=localhost;dbname=massaschasko", "root", "root");
        echo '<script type="text/javascript">console.log("Sucesso ao conectar com a base de dados!")</script>';
    }
    catch(Exception $exception){
        echo '<script type="text/javascript">console.log("Erro ao conectar com a base de dados!")</script>';
        echo 'Erro ao conectar com a base de dados!';
    }
?>