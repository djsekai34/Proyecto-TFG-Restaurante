<?php
require_once "../Modelo/BaseDeDatosConexion.php";
$conexion = BaseDeDatosConexion::getConexion('saboresdelmundo');

$nombreReserva = $_POST['nombreReserva'];
$TelfonoContacto = $_POST['TelfonoContacto'];
$FechaPedido = $_POST['FechaPedido'];
$Tramohorario = $_POST['Tramohorario'];
$MesasDisponibles = $_POST['MesasDisponibles'];
$mesaExtra = $_POST['mesaExtra'];

/*Cogemos la capacidad que tiene la mesa originalmente*/
$stmt = $conexion->prepare("SELECT capacidad FROM mesas WHERE mesa = ?");
$stmt->bindParam(1, $MesasDisponibles);
$stmt->execute();
$capacidad = $stmt->fetchColumn();

$stmt = $conexion->prepare("INSERT INTO reservas (nombre, telefono, fecha, tramohorario, mesa, capacidad, capacidadextra) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bindParam(1, $nombreReserva);
$stmt->bindParam(2, $TelfonoContacto);
$stmt->bindParam(3, $FechaPedido);
$stmt->bindParam(4, $Tramohorario);
$stmt->bindParam(5, $MesasDisponibles);
$stmt->bindParam(6, $capacidad);
$stmt->bindParam(7, $mesaExtra);
$stmt->execute();

/*Si funciona lo devolvemos que ha ido bien*/
$response = array(
    'status' => 'success',
    'message' => 'Reserva guardada con éxito'
);

echo json_encode($response);
?>

