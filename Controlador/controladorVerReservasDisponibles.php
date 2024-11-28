<?php
require_once "../Modelo/BaseDeDatosConexion.php";
$conexion = BaseDeDatosConexion::getConexion('saboresdelmundo');

$fecha = $_POST['fecha'];

$query = "SELECT nombre, telefono, mesa, capacidad, capacidadextra, tramohorario FROM reservas WHERE fecha = ?";
$stmt = $conexion->prepare($query);
$stmt->bindParam(1, $fecha, PDO::PARAM_STR);
$stmt->execute();
/*Si devolvemos una fila ya entramos al if*/
if($stmt->rowCount() > 0){
    /*Creamos el encabezado de la tabla*/
    echo "<tr><th>Nombre</th><th>Telefono</th><th>Mesa</th><th>Capacidad Total</th><th>Tramo Horario</th></tr>";
    /*Hacemos un while para iterar todas las opciones que nos hayan venido*/
    while($filas = $stmt->fetch(PDO::FETCH_ASSOC)){
        /*Hacemos la suma de la capacidad y la capacidad extra */
        $total = $filas['capacidad'] + $filas['capacidadextra'];
        /*Ahora creamos el cuerpo de la tabla */
        echo "<tr><td>".$filas['nombre']."</td><td>".$filas['telefono']."</td><td>".$filas['mesa']."</td><td>".$total."</td><td>".$filas['tramohorario']."</td></tr>";
    }
}else{
    echo "No hay reservas en la fecha que nos ha indicado";
}
?>

