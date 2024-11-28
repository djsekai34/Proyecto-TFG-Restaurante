<?php
require_once "../Modelo/BaseDeDatosConexion.php";
$conexion = BaseDeDatosConexion::getConexion('saboresdelmundo');

$query = "SELECT DISTINCT categoria FROM productos";
$stmt = $conexion->prepare($query);
$stmt->execute();
/*Indicamos con el 0 de que solo quiero la primera columna*/
$categorias = $stmt->fetchAll(PDO::FETCH_COLUMN, 0);

echo json_encode($categorias);

