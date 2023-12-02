<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Massas Chasko</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    
    <style>
        main{
            background: url(./assets/img/main-bg.png) bottom;
        }
        body{
            padding-top: 71px;
        }
    </style>
</head>
<body>
    <?php
        include './pages/navbar.pages.php';
    ?>
    <main id="massas-e-salgados">
        <div class="container-fluid d-block d-md-flex gap-3 align-items-center p-4 p-md-5">
            <div class="container-fluid py-3 p-0 p-md-3">
                <h1 class="pb-3 text-light">Massas e Salgados</h1>
                <p class="h5 text-light">
                    Possuímos um amplo e moderno catálogo de
                    massas e salgados congelados. Sendo a marca
                    mais conhecida e querida entre nossos
                    consumidores. Conheça mais e experimente
                    nossos produtos!
                </p>
            </div>
            <div class="container-fluid py-3 p-0 p-md-3 d-flex justify-content-center">
                <img src="./assets/img/main.png" width="320" height="320">
            </div>
        </div>
    </main>
    <section>
        <div class="container-fluid d-block d-md-flex gap-3 align-items-center p-4 p-md-5">
            <div class="container-fluid py-3 p-0 p-md-3 d-flex justify-content-center">
                <img src="./assets/img/section-a.png" width="320" height="320">
            </div>
            <div class="container-fluid py-3 p-0 p-md-3">
                <h2 class="h1 pb-3">Pierogues</h2>
                <p class="h5">
                    Tradição dos imigrantes poloneses, o pierogue
                    (ou 'pierog') é basicamente um pastel salgado
                    cozido. Com uma massa saborosa recheios
                    únicos, o produto tornou-se carro chefe da
                    Massas Chasko por ser um dos mais procurados
                    pelos consumidores.
                </p>
            </div>
        </div>
    </section>
    <section>
        <div class="container-fluid d-block d-md-flex gap-3 align-items-center p-4 bg-dark">
            <div class="container-fluid py-0 p-0 p-md-3 d-sm-flex d-block gap-3 justify-content-center">
                <p class="h1 text-light text-sm-left text-center">Faça Seu Pedido:</p>
                <a href="https://api.whatsapp.com/send/?phone=5542998138118&text&type=phone_number&app_absent=0" target="_blank">
                    <button class="btn btn-success btn-lg d-sm-inline d-block mx-sm-0 mx-auto">(42) 9 9813-8118 <i class="bi bi-whatsapp"></i></button>
                </a>
            </div>
        </div>
    </section>
    <section id="endereco">
        <div class="container-fluid d-block d-md-flex gap-3 align-items-center p-4 p-md-5">
            <div class="container-fluid py-3 p-0 p-md-3">
                <h2 class="h1 pb-3 pt-md-5">Conheça Nossa Loja!</h2>
                <p class="h5 pb-3">
                    Endereço:<br>
                    Rua Camacuã, 43, Rio Bonito, Irati - PR
                </p>
                <a href="https://www.google.com/maps/place/Massas+Chasko/@-25.467822,-50.664352,15z/data=!4m6!3m5!1s0x94e87ff69ac3bb7f:0x6ce328b1484e5785!8m2!3d-25.4678224!4d-50.664352!16s%2Fg%2F11c53my7rw?hl=pt-BR&entry=ttu" target="_blank">
                    <button class="btn btn-success mb-md-3">Localização <i class="bi bi-geo-alt-fill"></i></button>
                </a>
            </div>
            <div class="container-fluid py-0 p-0 p-md-3 d-flex justify-content-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.11538304367!2d-50.66692692645915!3d-25.467822377537715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e87ff69ac3bb7f%3A0x6ce328b1484e5785!2sMassas%20Chasko!5e0!3m2!1spt-BR!2sbr!4v1698878432446!5m2!1spt-BR!2sbr" width="400px" height="400px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </section>
    <section id="redes-sociais">
        <div class="container-fluid d-block d-md-flex gap-3 align-items-center p-4 p-md-5 p-4 bg-dark">
            <div class="container-fluid py-3 p-0 p-md-3 d-flex justify-content-center">
                <img src="./assets/img/section-b.png" width="320" height="320">
            </div>
            <div class="container-fluid py-3 p-0 p-md-3">
                <h2 class="h1 pb-3 text-light">Redes Sociais</h2>
                <p class="h5 text-light">Instagram</p>
                <a href="https://www.instagram.com/massas_chasko/" target="_blank">
                    <button class="btn btn-success mb-md-3">@massas_chasko <i class="bi bi-instagram"></i></button>
                </a>
                <p class="h5 text-light">Facebook</p>
                <a href="https://www.facebook.com/massaschasko" target="_blank">
                    <button class="btn btn-success mb-md-3">Massas Chasko <i class="bi bi-facebook"></i></button>
                </a>
            </div>
        </div>
    </section>
    <?php
        include './pages/footer.pages.php';
    ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>