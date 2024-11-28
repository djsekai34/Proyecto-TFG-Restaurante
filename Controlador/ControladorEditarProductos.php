<?php
require_once "../Modelo/BaseDeDatosConexion.php";
$conexion = BaseDeDatosConexion::getConexion('saboresdelmundo');

$nombre = $_POST['nombre'];
$cantidad = $_POST['cantidad'];
$precio = $_POST['precio'];
$categoria = $_POST['categoria'];
$alergenos = $_POST['alergenos'];
$nombreOriginal = $_POST['nombreAntiguo'];

/*Si categoria es nada hacemos una actualizacion sin actualizar categoria*/
if ($categoria == "nada") {
    $consulta = $conexion->prepare("UPDATE productos SET nombre = ?, cantidad = ?, precio = ?, alergenos = ? WHERE nombre = ?");
    $consulta->bindParam(1, $nombre);
    $consulta->bindParam(2, $cantidad);
    $consulta->bindParam(3, $precio);
    $consulta->bindParam(4, $alergenos);
    $consulta->bindParam(5, $nombreOriginal);
/*Si categoria tiene algo pues hacemos la actualizacion con la categoria tambien*/
} else {
    $consulta = $conexion->prepare("UPDATE productos SET nombre = ?, cantidad = ?, precio = ?, categoria = ?, alergenos = ? WHERE nombre = ?");
    $consulta->bindParam(1, $nombre);
    $consulta->bindParam(2, $cantidad);
    $consulta->bindParam(3, $precio);
    $consulta->bindParam(4, $categoria);
    $consulta->bindParam(5, $alergenos);
    $consulta->bindParam(6, $nombreOriginal);
}

if ($consulta->execute()) {
    /*Controlamos la extension de que se sube y las extenion del fichero que deberemos tener en el servidor*/
    $extensionFichero = '';
    $extensionesFicheroSinImagen = ['jpg', 'png'];

    if (isset($_FILES['txtFile']['name'])) {
        $extensionFichero = pathinfo($_FILES['txtFile']['name'], PATHINFO_EXTENSION);
    }

    /*Si el txtFile viene con el valor "nadaImagen" entramos al if*/
    if ($_POST['txtFile'] == "nadaImagen") {
        /*Hacemos un foreach para ver las extensiones */
        foreach ($extensionesFicheroSinImagen as $extension) {
            /*Si coincide entramos al if para renombrarlo*/
            if (file_exists('../Vista/imagenes/' . $nombreOriginal . '.' . $extension)) {
                /*Ahora en este if renombramos el fichero al nuevo nombre que hemos puesto si funciona devolvemos un true*/
                if (rename('../Vista/imagenes/' . $nombreOriginal . '.' . $extension, '../Vista/imagenes/' . $nombre . '.' . $extension)) {
                    echo json_encode(['success' => true]);
                    break;
                    /*Si da error se lo decimos al usuario*/
                } else {
                    echo json_encode(['success' => false, 'error' => 'No se ha podido cambiar el nombre del archivo.']);
                    break;
                }
            }
        }
    /*Si entramos aqui es que se ha subido una imagen */
    } else {
        if (!empty($_FILES['txtFile']['name'])) {
            $extensionesPerminitdas = array('jpg', 'png');
            if (!in_array($extensionFichero, $extensionesPerminitdas)) {
                echo json_encode(['success' => false, 'error' => 'Solo se permiten archivos jpg y png.']);
            } else if ($_FILES['txtFile']['size'] > 5000000) {
                echo json_encode(['success' => false, 'error' => 'El tamaño máximo de archivo permitido es de 5MB.']);
            } else if (is_uploaded_file($_FILES['txtFile']['tmp_name'])) {
                /*Si existe el fichero lo borramos y preparamos el nuevo a subir*/
                if (file_exists('../Vista/imagenes/' . $nombreOriginal . '.' . $extensionFichero)) {
                    unlink('../Vista/imagenes/' . $nombreOriginal . '.' . $extensionFichero);
                }
                $nombreArchivo = $nombre . '.' . $extensionFichero;
                $rutaDestino = '../Vista/imagenes/' . $nombreArchivo;
                /*Si no subimos el fichero da error y se lo decimos al usuario*/
                if (move_uploaded_file($_FILES['txtFile']['tmp_name'], $rutaDestino) == false) {
                    echo json_encode(['success' => false, 'error' => 'No se ha podido subir correctamente el archivo.']);
                    /*Si se sube pues damos true*/
                } else {
                    echo json_encode(['success' => true]);
                }
            }
        }
    }
} else {
    echo json_encode(['success' => false, 'error' => 'No se ha podido ejecutar la consulta SQL.']);
}
?>
