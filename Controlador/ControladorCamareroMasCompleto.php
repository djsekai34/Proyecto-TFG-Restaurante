<?php
require_once "../Modelo/BaseDeDatosConexion.php";
$conexion = BaseDeDatosConexion::getConexion('saboresdelmundo');

$query = "SELECT id, nombre, apellidos, fechaNacimiento, localidad, provincia FROM usuarios WHERE tipo = 1";
$stmt = $conexion->prepare($query);
$stmt->execute();

$camareros = array();
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $camareros[] = $row;
}
echo json_encode($camareros);


