<?php
header('Content-Type: application/json');
try {
    require_once "../Modelo/BaseDeDatosConexion.php";
    $conexion = BaseDeDatosConexion::getConexion('saboresdelmundo');

    $fecha = $_POST['fecha'];

    $stmt = $conexion->prepare("SELECT nombre FROM reservas WHERE fecha = :fecha");
    $stmt->bindParam(':fecha', $fecha);
    $stmt->execute();

    $usuarios = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($usuarios);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(array('error' => $e->getMessage()));
}
