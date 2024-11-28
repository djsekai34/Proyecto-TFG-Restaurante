<?php
session_start();
if (!isset($_SESSION["correo"])) {
    $_SESSION['error'] = "Error debes de estar logueado";
    header('Location: ../Vista/logueo.php');
} else {
?>
<!DOCTYPE html>
<html>
<head>
    <title>Resumen Comanda</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="css/cssCobrar.css">
    <link rel="icon" href="imagenes/Logo.ico" type="image/x-icon">
</head>
<body>
<h1 id="ResumenComida">Resumen de su pedido</h1>
<h3 id="CamareroAtendido">Le atendio el camarero: <span style="color:#FF6347;"><?php echo $_SESSION["usuario"]?></span></h3>
<button id="BotonVolver"><img src="imagenes/volver.png" title="Voler a la pagina principal"></button>
<table>
    <tr>
        <th>Nombre del producto</th>
        <th>Cantidad</th>
        <th>Precio Unitario</th>
        <th>Precio en total</th>
    </tr>
</table>
</body>

<h1 id="TotalCuenta">El total a cobrar es: <span id="TotalMoney" style="color:#FF6347;"></span></h1>
<div id="contenedorPagar">
    <p id="TextoForma">Eliga su forma de pago:</p>
    <button id="CobrarTarjeta">Tarjeta</button>
    <button id="CobrarFisico">Fisico</button>
</div>
<!--Div para cobrar en fisico-->
<div id="divFisico" style="display: none">
    <p id="TextoPrecioTotal">Ahora vendra un camarero nuesto a cobrarle, el total de la cuenta es:</p>
    <h1><span id="TotalMoney2" style="color:#FF6347;"></span></h1>
    <button id="TicketSI">Ticket Resumen</button>
</div>
<!-- Div para cobrar en tarjeta-->
<div id="divTarjeta" style="display: none">
    <p id="TextoPrecioTotal">El total de la cuenta es:</p>
    <h1><span id="TotalMoney3" style="color:#FF6347;"></span></h1>
    <form id="FormTarjeta">
        <label for="nombre">Nombre del titular:</label><br>
        <input type="text" id="nombre" name="nombre"><br><br>
        <label for="numeroTarjeta">Número de tarjeta:</label><br>
        <input type="text" id="numeroTarjeta" name="numeroTarjeta"><br><br>
        <label for="fechaVencimiento">Fecha de vencimiento (MM/AA):</label><br>
        <input type="text" id="fechaVencimiento" name="fechaVencimiento"><br><br>
        <label for="cvv">CVV:</label><br>
        <input type="text" id="cvv" name="cvv"><br><br>
        <button id="Pagar">Realizar Pago</button>
    </form>
</div>
<!--Div de que ya cobro con tarjeta -->
<div id="divYaCobrado" style="display: none">
    <p id="TextoPrecioTotal">El pago ha sido efectuado correctamente</p>
    <button id="TicketSITarjeta">Ticket Resumen</button>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="../js/jsCobrarComanda.js"></script>
</html>
<?php
}
?>
