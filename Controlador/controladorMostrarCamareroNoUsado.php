<?php
session_start();
require_once "../Modelo/BaseDeDatosConexion.php";
$conexion = BaseDeDatosConexion::getConexion('saboresdelmundo');

$usuarioActual = $_SESSION["usuario"];
/*Hacemos una consulta para obtener los camareros que no se este usando actualmente */
$stmt = $conexion->prepare("SELECT nombre FROM usuarios WHERE nombre != :usuarioActual AND tipo = 1");
$stmt->bindParam(':usuarioActual', $usuarioActual);
$stmt->execute();

$resultado = $stmt->fetchAll(PDO::FETCH_COLUMN, 0);
echo json_encode($resultado);

/*Actualizamos el nuevo usuario con el valor que hemos enviado al formulario*/
if (isset($_POST['nuevoCamarero'])) {
    $_SESSION["usuario"] = $_POST['nuevoCamarero'];
}


?>
