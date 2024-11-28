<?php
require_once "../Modelo/BaseDeDatosConexion.php";
$conexion = BaseDeDatosConexion::getConexion('saboresdelmundo');

$query = "SELECT mesa FROM mesas WHERE camarero = 'No'";
$stmt = $conexion->prepare($query);
$stmt->execute();

/*Creamos un array vacio que se llama mesas*/
$mesas = array();
/*Hacemos un bucle para ver cuantas filas nos ha devuelto*/
while ($filas = $stmt->fetch(PDO::FETCH_ASSOC)) {
    /*Y lo añadimos al array*/
    $mesas[] = $filas;
}
echo json_encode($mesas);
