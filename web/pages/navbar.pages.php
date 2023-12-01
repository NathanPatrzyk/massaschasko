<?php
    include './php/listarPaginas.php';
?>
<nav class="navbar navbar-expand navbar-dark bg-success d-sm-block d-none fixed-top">
    <div class="container-fluid">
        <a href="./index.php" class="navbar-brand mx-3">
            <img src="./img/massaschasko.png">
        </a>
        <ul class="navbar-nav justify-content-end mx-3 px-3">
            <li class="nav-item dropdown mx-3">
                <a href="" class="nav-link active" data-bs-toggle="dropdown">Início</a>
                <ul class="dropdown-menu bg-success">
                    <li class="bg-success">
                        <a href="./index.php" class="dropdown-item text-light bg-success active">Massas e Salgados</a>
                    </li>
                    <li class="bg-success">
                        <a href="./index.php#endereco" class="dropdown-item text-light bg-success active">Endereço</a>
                    </li>
                    <li class="bg-success">
                        <a href="./index.php#redes-sociais" class="dropdown-item text-light bg-success active">Redes Sociais</a>
                    </li>
                </ul>
            </li>
            <li class="nav-item dropdown mx-3">
                <a href="" class="nav-link active" data-bs-toggle="dropdown">Nossos Produtos</a>
                <ul class="dropdown-menu bg-success">
                    <li class="bg-success">
                        <a href="./produtos.php?id=todos" class="dropdown-item text-light bg-success active">Todos os Produtos</a>
                    </li>
                    <?php foreach($listaDePaginas as $pagina): ?>
                        <?php if($pagina['id']!="outros"): ?>
                            <li class="bg-success">
                                <a href="./produtos.php?id=<?=$pagina['id']?>" class="dropdown-item text-light bg-success active"><?=$pagina['nome']?></a>
                            </li>
                        <?php endif; ?>
                    <?php endforeach; ?>
                    <li class="bg-success">
                        <a href="./produtos.php?id=outros" class="dropdown-item text-light bg-success active">Outros Produtos</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</nav>

<nav class="navbar navbar-dark bg-success d-sm-none d-block fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="./index.php">
            <img src="./img/massaschasko.png">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
            <i class="bi bi-list text-white" style="font-size: 40px"></i>
        </button>
        <div class="navbar-collapse collapse" id="menu">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="./index.php" class="nav-link active">Início</a>
                </li>
                <li class="nav-item mx-3">
                    <a href="./index.php" class="nav-link active">Massas e Salgados</a>
                </li>
                <li class="nav-item mx-3">
                    <a href="./index.php#endereco" class="nav-link active">Endereço</a>
                </li>
                <li class="nav-item mx-3">
                    <a href="./index.php#redes-sociais" class="nav-link active">Redes Sociais</a>
                </li>
                <li class="nav-item">
                    <a href="./produtos.php?id=todos" class="nav-link active">Nossos Produtos</a>
                </li>
                <li class="nav-item mx-3">
                    <a href="./produtos.php?id=todos" class="nav-link active">Todos os Produtos</a>
                </li>
                <?php foreach($listaDePaginas as $pagina): ?>
                    <?php if($pagina['id']!="outros"): ?>
                        <li class="nav-item mx-3">
                            <a href="./produtos.php?id=<?=$pagina['id']?>" class="nav-link active"><?=$pagina['nome']?></a>
                        </li>
                    <?php endif; ?>
                <?php endforeach; ?>
                <li class="nav-item mx-3">
                    <a href="./produtos.php?id=outros" class="nav-link active">Outros Produtos</a>
                </li>
            </ul>
        </div>
    </div>
</nav>