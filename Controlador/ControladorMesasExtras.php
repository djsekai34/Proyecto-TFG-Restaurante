<?php

require_once "../Modelo/BaseDeDatosConexion.php";
$conexion = BaseDeDatosConexion::getConexion('saboresdelmundo');

$fechaPedido = $_POST['FechaPedido'];
$tramoHorario = $_POST['Tramohorario'];

/*Obtenemos las mesas extras*/
$query1 = "SELECT mesasextra FROM mesasextras";
$stmt1 = $conexion->prepare($query1);
$stmt1->execute();
$mesasExtraTotal = $stmt1->fetchColumn();

/*Ahroa obtenemos todas las capacidad extra de las mesas resveradas en este tramo y fecha*/
$query2 = "SELECT SUM(capacidadextra) as mesasReservadas FROM reservas WHERE fecha = :fecha AND tramohorario = :tramo";
$stmt2 = $conexion->prepare($query2);
$stmt2->bindParam(':fecha', $fechaPedido);
$stmt2->bindParam(':tramo', $tramoHorario);
$stmt2->execute();
$mesasReservadas = $stmt2->fetchColumn();

/*Hacemos la resta y se devuelve*/
$mesasDisponibles = $mesasExtraTotal - $mesasReservadas;

echo $mesasDisponibles;

