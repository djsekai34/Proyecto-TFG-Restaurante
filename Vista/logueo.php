<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    <link rel="stylesheet" href="css/cssIndex.css">
    <link rel="icon" href="iconos/registro.ico">
</head>
<body>
<img src="imagenes/Logo.png" id="iconodelRestaurante">
<h1>Inicio de sesión</h1>
<form method="POST" action="../Controlador/controladorUsuario.php">
    <label for="correo">Correo:</label><br>
    <input type="text" id="correo" name="correo"><br>
    <label for="pwd">Contraseña:</label><br>
    <input type="password" id="pwd" name="pwd"><br><br>
    <button type="submit" name="login">Iniciar sesión</button>
    <button type="submit" name="registrar" formnovalidate>Registrarse</button>
    <!--<button type="submit" name="InicioConGoogle" class="botonGoogle">Inciar Sesion con google</button>-->
</form>
<br>
<?php
session_start();
if(isset($_SESSION['error'])) {
    echo '<div class="mensaje-error">' . $_SESSION['error'] . '</div>';
    unset($_SESSION['error']);
}
?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="../js/jsLogin.js"></script>
</body>
</html>
