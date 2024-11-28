<?php
session_start();
require_once "../Modelo/BaseDeDatosConexion.php";
$conexion = BaseDeDatosConexion::getConexion('saboresdelmundo');

if (isset($_POST['producto'], $_POST['cantidad'], $_POST['precio'], $_POST['mesa'])) {
    $producto = $_POST['producto'];
    $nuevaCantidad = $_POST['cantidad'];
    $precio = $_POST['precio'];
    $mesa = $_POST['mesa'];
    $usuario = $_SESSION["usuario"];
    $fecha = date('d-m-Y');

    /*Nombre del fichero txt*/
    $ficherotxt = "../Comanda/Comanda{$mesa}_{$fecha}.txt";

    /*Si no se ha creado pues se crea con todos los permisos*/
    if (!is_dir(dirname($ficherotxt))) {
        mkdir(dirname($ficherotxt), 0777, true);
    }

    /*Creamos un array vacio y comprobamos que si el fichero existe y si existe lo leemos y decodificamos este ultimo*/
    $data = [];
    if (file_exists($ficherotxt)) {
        $data = json_decode(file_get_contents($ficherotxt), true);
    }

    /*Si no existe el usuario en el array creamos uno nuevo array para ese usuario*/
    if (!isset($data[$usuario])) {
        $data[$usuario] = [
            'Producto' => [],
            'Cantidad' => [],
            'Precio' => [],
        ];
    }
    /*Buscamos el producto que tenga el usuario introducido*/
    $index = array_search($producto, $data[$usuario]['Producto']);
    /*Si el usuario añade uno que ya no estaba pues se añade al array*/
    if ($index === false) {
        $data[$usuario]['Producto'][] = $producto;
        $data[$usuario]['Cantidad'][] = $nuevaCantidad;
        $data[$usuario]['Precio'][] = $precio;
    /*Y si esta pues solo añadimos una nueva cantidad*/
    } else {
        $data[$usuario]['Cantidad'][$index] += $nuevaCantidad;
    }

    /*Codificamos y añadimos al txt*/
    file_put_contents($ficherotxt, json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));

    /*Actualizamos la cantidad en la base de datos haciendo una resta de la cantidad que tenaimos menos la que hemos añadido
    por ultimo actualizamos la cantidad de ese solo producto*/
    $stmt = $conexion->prepare("SELECT cantidad FROM productos WHERE nombre = ?");
    $stmt->bindParam(1, $producto);
    $stmt->execute();
    $cantidadActual = $stmt->fetchColumn();

    $cantidadActual -= $nuevaCantidad;

    $stmt = $conexion->prepare("UPDATE productos SET cantidad = ? WHERE nombre = ?");
    $stmt->bindParam(1, $cantidadActual);
    $stmt->bindParam(2, $producto);
    $stmt->execute();

    echo json_encode(['message' => 'Se añadió a la Comanda correctamente']);
} else {
    echo json_encode(['message' => 'Error: Faltan datos']);
}
?>
