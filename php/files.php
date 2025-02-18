<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="../public/style/index.css" rel="stylesheet" type="text/css">
    <script src="../public/scripts/jquery.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <title>Epinotes</title>
</head>
<body>
    <header>
        <h1 class="header_title">
            <a href="">Bienvenue sur Epinotes !</a>
        </h1>
        <nav class="header_sections">
            <div id="top_section_left">
                <a href="#">
                    <button id="buttonAlert">Documents publics</button>
                </a>
            </div>
            <div id="top_section_center">
                <a href="../public/html/test.html">
                    <button>Tu veux contribuer ?</button>
                </a>
            </div>
            <div id="top_section_right">
                <a href="###">
                    <button>Se connecter</button>
                </a>
            </div>
        </nav>
        <!-- made invisible for the moment -->
        <marquee id="hiring" style="display: none;">
                <a href="##">Epinotes recrute !</a>
                <a href="##">Epinotes recrute !</a>
        </marquee>
    </header>
    <?php
        include 'helper.php';
        ls('../public/students_files');
    ?>
</body>
</html>