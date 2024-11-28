<?php
header('Content-Type: application/json');
try {
    require_once "../Modelo/BaseDeDatosConexion.php";
    $conexion = BaseDeDatosConexion::getConexion('saboresdelmundo');

    $fecha = $_POST['fecha'];
    $nombre = $_POST['nombre'];
    $mesa = $_POST['mesa'];

    $consulta = $conexion->prepare("DELETE FROM reservas WHERE fecha = :fecha AND nombre = :nombre AND mesa = :mesa");
    $consulta->bindParam(':fecha', $fecha);
    $consulta->bindParam(':nombre', $nombre);
    $consulta->bindParam(':mesa', $mesa);

    $consulta->execute();

    echo json_encode(array('success' => true));
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(array('error' => $e->getMessage()));
}


