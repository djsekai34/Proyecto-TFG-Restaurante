<?php
require_once "../Modelo/BaseDeDatosConexion.php";

$conexion = BaseDeDatosConexion::getConexion('saboresdelmundo');

$categoria = $_POST['categoria'];

$query = "SELECT nombre, cantidad, categoria FROM productos WHERE categoria = :categoria";
$stmt = $conexion->prepare($query);
$stmt->bindParam(':categoria', $categoria);
$stmt->execute();

/*Creamos un array vacio que se llama camareros*/
$productos = array();
/*Hacemos un bucle para ver cuantas filas nos ha devuelto*/
while ($Fila = $stmt->fetch(PDO::FETCH_ASSOC)) {
    /*Y lo añadimos al array*/
    $productos[] = $Fila;
}

echo json_encode($productos);

