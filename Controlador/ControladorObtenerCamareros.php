<?php
require_once "../Modelo/BaseDeDatosConexion.php";

$conexion = BaseDeDatosConexion::getConexion('saboresdelmundo');

$query = "SELECT nombre, apellidos, fechaNacimiento, localidad FROM usuarios where tipo = 1";
$stmt = $conexion->prepare($query);
$stmt->execute();

/*Creamos un array vacio que se llama camareros*/
$camareros = array();
/*Hacemos un bucle para ver cuantas filas nos ha devuelto*/
while ($filas = $stmt->fetch(PDO::FETCH_ASSOC)) {
    /*Y lo añadimos al array*/
    $camareros[] = $filas;
}

echo json_encode($camareros);
?>
