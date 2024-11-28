<?php
require_once "../Modelo/BaseDeDatosConexion.php";
$conexion = BaseDeDatosConexion::getConexion('saboresdelmundo');
/*Borramos camarero*/
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $idCamarero = $_POST['id'];
    $sql = "DELETE FROM usuarios WHERE id = :id";
    $stmt = $conexion->prepare($sql);
    $stmt->bindParam(':id', $idCamarero);

    try {
        $conexion->beginTransaction();
        $stmt->execute();
        $conexion->commit();
        echo json_encode(array('success' => true, 'message' => 'Camarero eliminado con éxito'));
    } catch (Exception $e) {
        $conexion->rollBack();
        echo json_encode(array('success' => false, 'message' => 'Hubo un error al eliminar el camarero'));
    }
}
