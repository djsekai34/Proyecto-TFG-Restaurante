<?php
require_once "../Modelo/BaseDeDatosConexion.php";
$conexion = BaseDeDatosConexion::getConexion('saboresdelmundo');

$producto = $_POST['producto'];

try {
    $conexion->beginTransaction();

    $query = "DELETE FROM productos WHERE nombre = :nombre";
    $stmt = $conexion->prepare($query);

    $stmt->bindParam(':nombre', $producto);
    $stmt->execute();

    $conexion->commit();

    /*Creamos la ruta de imagen basandonos en el nombre del producto
    Tambien definimos la extension que tendra la imagen*/
    $rutaImagen = "../Vista/imagenes/" . $producto;
    $formatosImagen = array('.jpg', '.png');

    /*Hacemos un foreach buscando el nombre de la imagen mas sus extension*/
    foreach ($formatosImagen as $formato) {
        /*Si existe lo borramos y salimos del bucle*/
        if (file_exists($rutaImagen . $formato)) {
            unlink($rutaImagen . $formato);
            break;
        }
    }

    echo 'success';
} catch (Exception $e) {
    $conexion->rollBack();

    echo 'error';
}
?>
