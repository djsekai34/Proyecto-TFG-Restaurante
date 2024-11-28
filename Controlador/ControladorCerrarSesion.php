<?php
session_start();
require_once "../Modelo/BaseDeDatosConexion.php";
$conexion = BaseDeDatosConexion::getConexion('saboresdelmundo');

if (isset($_POST['Salir'])) {
    /*Borra las variables de las sesiones*/
    session_unset();
    /*Destruye la sesion*/
    session_destroy();
    /*Inicia una nueva sesion y establece un nuevo mensaje cuando se haya cerrado
    y vuelve a la pagina del login*/
    session_start();
    $_SESSION ['error'] = "Has cerrado sesion";
}
