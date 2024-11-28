<?php
session_start();

require_once "../Modelo/BaseDeDatosConexion.php";
$conexion = BaseDeDatosConexion::getConexion('saboresdelmundo');


$data = json_decode(file_get_contents('php://input'), true);
$fechaPedido = $data['FechaPedido'];
$tramoHorario = $data['Tramohorario'];

/*Hacemos una consulta para cargar las mesas con su capacidad pero que no este en la tabla reservar, para solo cargar
las mesas que no este reservadas*/
$query = "SELECT mesa, capacidad FROM mesas WHERE mesa NOT IN (SELECT mesa FROM reservas WHERE fecha = :fecha AND tramohorario = :tramo)";
$stmt = $conexion->prepare($query);
$stmt->bindParam(':fecha', $fechaPedido);
$stmt->bindParam(':tramo', $tramoHorario);
$stmt->execute();

$mesasDisponibles = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($mesasDisponibles);
?>
