<?php
require_once "../Modelo/BaseDeDatosConexion.php";
$conexion = BaseDeDatosConexion::getConexion('saboresdelmundo');

$stmt = $conexion->prepare("SELECT nombre FROM usuarios");

$stmt->execute();

$resultado = $stmt->fetchAll(PDO::FETCH_ASSOC);

/*Creamos un array vacio que se llama camareros*/
$camarero = array();
/*Hacemos un foreach de todas los camareros cargadas para añadirlas en el array de mesas que hemos creado anteriormente*/
foreach ($resultado as $fila) {
    $camarero[] = array(
        'camarero' => $fila['nombre'],
    );
}

header('Content-Type: application/json');
echo json_encode($camarero);


