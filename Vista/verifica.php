<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="../Vista/Css/cssVerificado.css">
</head>
<body>
<h1>Verificacion Email</h1>
<img src="imagenes/Logo.png" id="iconodelRestaurante">
<?php
/*Importamos lo necesario*/
require_once "../Modelo/BaseDeDatosConexion.php";
require_once "../Modelo/Password.php";
require_once "../Modelo/PersonaBD.php";
/*Inicamos la sesion*/
session_start();

/*Hacemos la conexion a la base de datos*/
$conexion = BaseDeDatosConexion::getConexion('saboresdelmundo');

/*Si existe el email y el correo accedemos al if*/
if (isset($_GET['email']) && isset($_GET['token'])){
    /*Lo guardamos en variables*/
    $email = $_GET['email'];
    $token = $_GET['token'];

    /*Creamos una nueva personaBD donde le pasamos la conexion*/
    $personaBD = new PersonaBD($conexion);

    /*Llamamos a la funcion activar cuenta donde le pasamos el email y el token*/
    if ($personaBD->activarCuenta($email, $token)) {
        /*Si todo sale okey se lo decimos*/
        echo "<p><b><u>Cuenta activada con éxito</u></b></p>";
    } else {
        /*Si tenemos algun error se lo decimos*/
        echo "<p><b><u>Error al activar la cuenta</u></b></p>";
    }
} else {
    /*Si no hemos encontrado los datos*/
    echo "<p><b><u>No hemos encontrado el email suyo</u></b></p>";
}
?>
<!--Boton que nos llevara al loguin-->
<button type="button" id="logueookey" onclick="location.href='../Vista/logueo.php'">Ir a login para acceder</button>
</body>
</html>
