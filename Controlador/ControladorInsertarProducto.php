<?php
require_once "../Modelo/BaseDeDatosConexion.php";
$conexion = BaseDeDatosConexion::getConexion('saboresdelmundo');

if (!empty($_FILES['txtFile']['name'])) {
    $extensionesPerminitdas = array('jpg', 'png');
    $extensionFichero = pathinfo($_FILES['txtFile']['name'], PATHINFO_EXTENSION);
    if (!in_array($extensionFichero, $extensionesPerminitdas)) {
        echo json_encode(['error' => 'Solo se permiten archivos jpg y png.']);
    } else if ($_FILES['txtFile']['size'] > 5000000) {
        echo json_encode(['error' => 'El tamaño máximo de archivo permitido es de 5MB.']);
    } else if (is_uploaded_file($_FILES['txtFile']['tmp_name'])) {
        $nombreArchivo = $_POST['nombre'] . '.' . $extensionFichero;
        $rutaDestino = '../Vista/imagenes/' . $nombreArchivo;
        if (move_uploaded_file($_FILES['txtFile']['tmp_name'], $rutaDestino) == false) {
            echo json_encode(['error' => 'No se ha podido subir correctamente el archivo.']);
        } else {
            $nombre = $_POST['nombre'];
            $cantidad = $_POST['cantidad'];
            $precio = $_POST['precio'];
            $categoria = $_POST['categoria'];
            $alergenos = $_POST['alergenos'];

            try {
                $conexion->beginTransaction();

                $query = "INSERT INTO productos (nombre, cantidad, categoria, precio, alergenos) VALUES (:nombre, :cantidad, :categoria, :precio, :alergenos)";
                $stmt = $conexion->prepare($query);

                $stmt->bindParam(':nombre', $nombre);
                $stmt->bindParam(':cantidad', $cantidad);
                $stmt->bindParam(':categoria', $categoria);
                $stmt->bindParam(':precio', $precio);
                $stmt->bindParam(':alergenos', $alergenos);

                $stmt->execute();

                $conexion->commit();

                echo json_encode(['success' => 'El producto se ha insertado correctamente. Por decisión del jefe del restaurante no se añadira actualmente a la carta']);

            } catch (Exception $e) {
                $conexion->rollBack();

                echo json_encode(['error' => 'No se ha podido insertar el producto.']);
            }
        }
    }
} else {
    echo json_encode(['error' => 'No se seleccionó ningún archivo.']);
}
?>
