<?php
require_once "../Modelo/BaseDeDatosConexion.php";
$conexion = BaseDeDatosConexion::getConexion('saboresdelmundo');

$stmt = $conexion->prepare("SELECT mesa, capacidad FROM mesas");

$stmt->execute();

$resultado = $stmt->fetchAll(PDO::FETCH_ASSOC);

/*Creamos un array vacio que se llama mesas*/
$mesas = array();
/*Hacemos un foreach de todas las mesas cargadas para añadirlas en el array de mesas que hemos creado anteriormente*/
foreach($resultado as $filas) {
    $mesas[] = array(
        'mesa' => $filas['mesa'],
        'capacidad' => $filas['capacidad']
    );
}

header('Content-Type: application/json');
echo json_encode($mesas);
?>
