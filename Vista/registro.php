<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Regristo</title>
    <link rel="stylesheet" href="Css/cssRegristo.css">
    <link rel="icon" href="iconos/registro.ico">
</head>
<body>
<img src="imagenes/Logo.png" id="iconodelRestaurante">
<h1>Registrarse</h1>
<form method="POST" action="../Controlador/controladorUsuario.php" onsubmit="return validarFormulario()">
    <label for="nombre">Nombre:</label><br>
    <input type="text" id="nombre" name="nombre" required><br>
    <label for="apellidos">Apellidos:</label><br>
    <input type="text" id="apellidos" name="apellidos" required><br>
    <label for="dni">DNI:</label><br>
    <input type="text" id="dni" name="dni" required><br>
    <label for="correo">Correo Electronico:</label><br>
    <input type="text" id="correo" name="correo"  required><br>
    <label for="pwd">Contraseña:</label><br>
    <input type="password" id="pwd" name="pwd" required><br>
    <label for="fechaNacimiento">Fecha de Nacimiento (d/m/aaaa):</label><br>
    <input type="text" id="fechaNacimiento" name="fechaNacimiento"  required><br>
    <label for="telefono">Teléfono:</label><br>
    <input type="text" id="telefono" name="telefono" required><br>
    <label for="provincia">Provincia:</label>
    <select id='provincias' name='provincias'></select><br><br>
    <label for="localidad">Localidad:</label>
    <select id='localidad' name='localidad'></select><br><br>
    <label for="localidad">Calle:</label>
    <select id='calle' name='calle'></select><br><br>
    <label for="cp">Código Postal:</label><br>
    <input type="text" id="cp" name="cp" required><br><br>
    <button type="submit" name="registroUsuario">Registrase</button>
    <button type="button" id="volver" onclick="location.href='../Vista/logueo.php'">Volver</button>
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
<script src="../js/jsprincipal.js"></script>
</body>
</html>
