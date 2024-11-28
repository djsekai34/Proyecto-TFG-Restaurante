<?php
require_once "../Modelo/BaseDeDatosConexion.php";
$conexion = BaseDeDatosConexion::getConexion('saboresdelmundo');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['producto'])) {
        $producto = $_POST['producto'];

        $consulta = $conexion->prepare("SELECT * FROM productos WHERE nombre = :nombre");
        $consulta->bindParam(':nombre', $producto);
        $consulta->execute();

        $detallesProducto = $consulta->fetch(PDO::FETCH_ASSOC);

        echo json_encode($detallesProducto);
    }
}
