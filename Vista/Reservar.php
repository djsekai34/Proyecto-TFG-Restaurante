<?php
session_start();
if (!isset($_SESSION["correo"])) {
    $_SESSION['error'] = "Error debes de estar logueado";
    header('Location: ../Vista/logueo.php');
} else {
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reserva de Mesa</title>
    <link rel="icon" href="imagenes/Logo.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="css/cssReserva.css">
</head>
<body>
<button id="BotonVolver"><img src="imagenes/volver.png" title="Volver a la pagina principal"></button>
<header>
    <h1>Reserva de Mesa</h1>
</header>
<main>
    <div id="divReserva" style="display:block;">
        <form id="FormularioReserva">
            <label for="nombreReserva">Nombre para la reserva:</label>
            <input type="text" id="nombreReserva" name="nombreReserva" class="inputEscrbir"><br><br>
            <label for="TelfonoContacto">Teléfono de contacto:</label>
            <input type="tel" id="TelfonoContacto" name="TelfonoContacto" class="inputEscrbir" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required><br><br>
            <label for="FechaPedido">Fecha de la reserva:</label>
            <input name="FechaPedido" type="date" class="inputEscrbir" required><br><br>
            <label for="Tramohorario">Seleccione un tramo horario:</label><br>
            <select id="Tramohorario" name="Tramohorario" class="Tramohorario">
                <option value="Seleccione">Seleccione un tramo horario</option>
                <option value="1-3">1-3</option>
                <option value="3-5">3-5</option>
            </select><br><br>

            <label for="MesasDisponibles">Mesas Disponibles:</label><br>
            <select id="MesasDisponibles" name="MesasDisponibles" class="MesasDisponibles">
            </select><br><br>
            <fieldset id="ampliarMesas">
                <legend>¿Desea ampliar la capacidad de las mesas?</legend>
                <label><input type="radio" name="ampliar" id="SiAmpliar" value="si" /> Si deseo ampliar</label>
                <label><input type="radio" name="ampliar" id="NoAmpliar" value="no" /> No deseo ampliar</label><br>
            </fieldset><br>
            <div id="2Form" style="display:none;">
                <form id="SeleccionAmpliacion" >
                    <label>¿Cuanta capacidad extra quiere en su mesa de la reserva?</label>
                    <input type="number" id="mesaExtra" name="mesaExtra" class="inputEscrbir" min="1"><br><br>
                </form>
                <p id="MesaExtra">Tenemos en total <span id="cantidadmesa" style="color: #dc322f"></span> asientos disponibles extras</p>
            </div>
            <button type="submit" id="HacerReserva">Hacer Reserva</button>
            <button type="submit" id="CancelarReserva">Cancelar Reserva</button>
            <button type="submit" id="VerReserva">Ver Reserva</button>
        </form>
    </div>
    <div class="mensaje-error" style="display: none;"> </div>

    <div id="CancelacionReserva" style="display: none;">
        <label for="FechaResevaCancelar">Fecha de la reserva:</label>
        <input name="FechaResevaCancelar" type="date" class="FechaResevaCancelar" required><br><br>
        <label for="nombreReservaCancelar">Nombre del la reserva:</label>
        <select id="TodasReservasNombreEsaFecha"></select>
        <label for="MesasDisponibles">Mesas Disponibles que esten reservadas a su nombre:</label><br>
        <select id="TodasReservasNombre"></select>
        <button id="CancelarRerservasOficial">Cancelar Reserva</button><br><br>
    </div>

    <div id="VerReservas" style="display: none;">
        <label for="FechaVerReserva">Fecha de la reserva que desea ver:</label>
        <input name="FechaVerReserva" type="date" class="inputEscrbir" required><br><br>
        <h1 id="NoReserva" style="color: #dc322f"></h1>
        <table id="TodasLasReservas"></table>
    </div>

</main>
<footer>
</footer>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="../js/jsReserva.js"></script>
</body>
</html>
    <?php
}
?>
