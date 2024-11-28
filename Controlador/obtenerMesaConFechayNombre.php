<?php

header('Content-Type: application/json');
try {
    require_once "../Modelo/BaseDeDatosConexion.php";
    $conexion = BaseDeDatosConexion::getConexion('saboresdelmundo');

    $nombre = $_POST['nombre'];
    $fecha = $_POST['fecha'];

    $stmt = $conexion->prepare("SELECT mesa, capacidad, capacidadextra FROM reservas WHERE nombre = :nombre AND fecha = :fecha");
    $stmt->bindParam(':nombre', $nombre);
    $stmt->bindParam(':fecha', $fecha);
    $stmt->execute();

    $mesas = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($mesas);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(array('error' => $e->getMessage()));
}
