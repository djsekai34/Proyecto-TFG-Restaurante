<?php
session_start();
if (!isset($_SESSION["correo"])) {
    $_SESSION['error'] = "Error debes de estar logueado";
    header('Location: ../Vista/logueo.php');
} else {
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menú principal</title>
    <link rel="icon" href="imagenes/Logo.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="css/cssPaginaPrincipal.css">
    <link rel="stylesheet" type="text/css" href="css/cssBebidas.css">
    <link rel="stylesheet" type="text/css" href="css/cssEntrantes.css">
    <link rel="stylesheet" type="text/css" href="css/cssPescado.css">
    <link rel="stylesheet" type="text/css" href="css/cssCarne.css">
    <link rel="stylesheet" type="text/css" href="css/cssInfantil.css">
    <link rel="stylesheet" type="text/css" href="css/cssPostres.css">
</head>
<body>
<div id="imagenesMasNombre" >
    <h1 id="TituloRestaurante">Bienvenido a " Sabores del Mundo " disfrute del servicio excelente en nuestro restaurante</h1>
    <div id="tarjetaBebidasAbrir">
        <img src="imagenes/BebidasGeneral.jpg" alt="Especias" title="Ver Bebidas">
    </div>

    <div id="tarjetaEntrantesAbrir">
        <img src="imagenes/entrantes.jpg" alt="Comida General" title="Ver Entrantes">
    </div>

    <div id="tarjetaPescadoAbrir">
        <img src="imagenes/pescado.jpg" alt="Bebidas General" title="Ver Pescado">
    </div>

    <div id="tarjetaCarneAbrir">
        <img src="imagenes/carne.jpeg" alt="Camareros" title="Ver Carne">
    </div>

    <div id="tarjetaInfantilAbrir">
        <img src="imagenes/infantiñ.png" alt="Camareros" title="Ver infantil">
    </div>

    <div id="tarjetaPostresAbrir">
        <img src="imagenes/postres.jpg" alt="Camareros" title="Ver postres">
    </div>

</div>
<div id="menuCarrito">
    <button id="botoncarrito"><img src="imagenes/Carrito.png" title="Ver Total Comanda"></button>
    <button id="botonSalir"><img src="imagenes/icono.png" title="Sección Camarero"></button>
    <button id="Reservar" title="Hacer una Reserva">Reservar Mesa</button>
</div>

<!--Div para cerrar sesion -->
<div id="menuSalir" style="display: none">
    <button id="cerrarSesion">Cerrar Sesión</button>
    <button id="cambiarCamarero">Cambiar Camarero</button>
</div>
<div id="NuevoCamarero" style="display: none">
    <p id="TextoNewCamarero">Seleccione el nuevo camarero</p>
    <select id="camareroSelect"></select><br>
    <button id="BotonCambiarCamarero">Cambiar camarero</button>
</div>
<div id="VerCamararo">
    <h2>Camarero actual: &nbsp;&nbsp;<span style="color: #dc322f"><?php echo $_SESSION['usuario']?></span></h2>
</div>

<!--Div para cobrar-->
<div id="sacarComanda" style="display:none;">
    <label for="mesaAcobrar" id="mesaAcobrar">Seleccione la mesa a cobrar:</label><br>
    <select id="mesaParaCobrar" name="mesaParaCobrar"></select><br><br>
    <button id="cobrarComanda">Cobrar comanda</button>
</div>


<img src="imagenes/Logo.png" id="Logo" title="Ver Descripción Alérgenos">
<main>
<div id="divNavegador" style="display: none">
    <button id="BotonBebida">Bebidas</button>
    <button id="BotonEntrantes">Entrantes</button>
    <button id="BotonPescado">Pescado</button>
    <button id="BotonCarne">Carne</button>
    <button id="BotonInfantil">Infantil</button>
    <button id="BotonPostres">Postres</button>
    <button id="BotonVolver">Volver</button>
</div>
<div id="content">
<div id="divBebida" style="display: none;">
    <h3 id="TituloTarjetas">Agua</h3>
    <div id="bebida1">
        <img src="imagenes/agua sin gas.png">
        <div class="texto">
            <p>Agua sin Gas</p>
            <p><b>2,5€</b></p>
        </div>
    </div>
    <div id="bebida2">
        <img src="imagenes/agua con gas.png">
        <div class="texto">
            <p>Agua con Gas</p>
            <p><b>3€</b></p>
        </div>
    </div>

    <!--Refrescos-->
    <h3 id="TituloTarjetas2">Refrescos</h3>
    <div id="Refresco1">
        <img src="imagenes/cocaloca.png">
        <div class="texto">
            <p>Coca-Cola</p>
            <p><b>2€</b></p>
        </div>
    </div>
    <div id="Refresco2">
        <img src="imagenes/nestea.png">
        <div class="texto">
            <p>Nestea</p>
            <p><b>2,5€</b></p>
        </div>
    </div>

    <div id="Refresco3">
        <img src="imagenes/aquarius.png">
        <div class="texto">
            <p>Aquarius</p>
            <p><b>2,5€</b></p>
        </div>
    </div>

    <div id="Refresco4">
        <img src="imagenes/Fanta%20Naranja.png">
        <div class="texto">
            <p>Fanta Naranja</p>
            <p><b>2€</b></p>
        </div>
    </div>

    <div id="Refresco5">
        <img src="imagenes/Cocacola%20Zero.png">
        <div class="texto">
            <p>Coca-Cola Zero</p>
            <p><b>2€</b></p>
        </div>
    </div>

    <div id="Refresco6">
        <img src="imagenes/Fanta%20Limon.png">
        <div class="texto">
            <p>Fanta Limon</p>
            <p><b>2€</b></p>
        </div>
    </div>

    <!--Alcohol-->
    <h3 id="TituloTarjetas3">Alcohol</h3>
    <div id="Alcohol1">
        <img src="imagenes/Cerveza.png">
        <div class="texto">
            <p>Cerveza</p>
            <p><b>2€</b></p>
            <br> <br>
        </div>
    </div>

    <div id="Alcohol2">
        <img src="imagenes/Copa%20de%20Vino.png">
        <div class="texto">
            <p>Copa de vino</p>
            <p><b>3,5€</b></p>
        </div>
    </div>
</div>
<div id="divEntrantes" style="display: none">
    <h3 id="TituloTarjetas">Entrantes</h3>
    <div id="entrante1">
        <img src="imagenes/Habas.png">
        <div class="texto">
            <p>Plato de habas <br>con jamón <br>y huevos</p>
            <p><b>6,5€</b></p>
        </div>
    </div>

    <div id="entrante2">
        <img src="imagenes/jamon.png">
        <div class="texto">
            <p>Plato de jamón</p>
            <p><b>9,5€</b></p>
        </div>
    </div>

    <div id="entrante3">
        <img src="imagenes/Platon%20de%20jamon%20y%20queso.png">
        <div class="texto">
            <p>Plato de jamón <br>y queso</p>
            <p><b>11€</b></p>
        </div>
    </div>

    <div id="entrante4">
        <img src="imagenes/Croquetas.png">
        <div class="texto">
            <p>Croquetas</p>
            <p><b>9€</b></p>
        </div>
    </div>

    <div id="entrante5">
        <img src="imagenes/Salchichon%20iberico.png">
        <div class="texto">
            <p>Salchichón Ibérico</p>
            <p><b>7,5€</b></p>
        </div>
    </div>

    <div id="entrante6">
        <img src="imagenes/Bravas.png">
        <div class="texto">
            <p>Patatas Bravas</p>
            <p><b>4,5€</b></p>
        </div>
    </div>

    <div id="entrante7">
        <img src="imagenes/Calamares%20Fritos.png">
        <div class="texto">
            <p>Calamares Fritos</p>
            <p><b>5€</b></p>
        </div>
    </div>

    <div id="entrante8">
        <img src="imagenes/Tabla%20de%20queso.png">
        <div class="texto">
            <p>Tabla de Quesos</p>
            <p><b>9,5€</b></p>
        </div>
    </div>
</div>
<div id="divPescado" style="display: none">
    <h3 id="TituloTarjetas">Pescado</h3>
    <div id="pescado1">
        <img src="imagenes/Lubina.png">
        <div class="texto">
            <p>Lubina al horno <br>con patatas</p>
            <p><b>15€</b></p>
        </div>
    </div>

    <div id="pescado2">
        <img src="imagenes/Bacalao%20al%20pil%20pil.png">
        <div class="texto">
            <p>Bacalao al pil pil</p>
            <p><b>10€</b></p>
        </div>
    </div>

    <div id="pescado3">
        <img src="imagenes/Besugo%20al%20horno.png">
        <div class="texto">
            <p>Besugo al horno</p>
            <p><b>20€</b></p>
        </div>
    </div>

    <div id="pescado4">
        <img src="imagenes/Bacalao%20Murciano.png">
        <div class="texto">
            <p>Caldero de <br>merluza  y patatas al estilo murciano</p>
            <p><b>14,5€</b></p>
        </div>
    </div>

    <div id="pescado5">
        <img src="imagenes/Albondigas%20de%20pescado.png">
        <div class="texto">
            <p>Albóndigas de rape <br> con salsa de cava</p>
            <p><b>9€</b></p>
        </div>
    </div>

    <div id="pescado6">
        <img src="imagenes/Salmon%20relleno.png">
        <div class="texto">
            <p>Salmón relleno de <br>crema de espinacas <br>con salsa holandesa</p>
            <p><b>10€</b></p>
        </div>
    </div>

    <div id="pescado7">
        <img src="imagenes/Atun%20plancha.png">
        <div class="texto">
            <p>Atún a la plancha <br>con pesto de aguacate y verduras</p>
            <p><b>12€</b></p>
        </div>
    </div>

    <div id="pescado8">
        <img src="imagenes/Bacalo%20a%20la%20rioja.png">
        <div class="texto">
            <p>Bacalao a la riojana, con salsa de pimientos</p>
            <p><b>13,5€</b></p>
        </div>
    </div>
</div>
<div id="divCarne" style="display: none">
    <h3 id="TituloTarjetas">Carne</h3>
    <div id="carne1">
        <img src="imagenes/Solomillo%20Cerdo%20con%20papas.png">
        <div class="texto">
            <p>Solomillo de cerdo <br> al ajillo con patatas</p>
            <p><b>13€</b></p>
        </div>
    </div>

    <div id="carne2">
        <img src="imagenes/cordeo%20al%20chichildron.png">
        <div class="texto">
            <p>Cordero al chilindron</p>
            <p><b>12€</b></p>
        </div>
    </div>

    <div id="carne3">
        <img src="imagenes/escalopines%20ternera.png">
        <div class="texto">
            <p>Escalopines de <br>ternera con arroz</p>
            <p><b>16,5€</b></p>
        </div>
    </div>

    <div id="carne4">
        <img src="imagenes/codillo.png">
        <div class="texto">
            <p>Codillo al horno <br> con patatas </p>
            <p><b>20€</b></p>
        </div>
    </div>

    <div id="carne5">
        <img src="imagenes/brochetas%20.png">
        <div class="texto">
            <p>Brochetas de ternera</p>
            <p><b>10€</b></p>
        </div>
    </div>

    <div id="carne6">
        <img src="imagenes/carrillada%20en%20salsa.png">
        <div class="texto">
            <p>Carrillada en salsa <br>con patatas</p>
            <p><b>10€</b></p>
        </div>
    </div>

    <div id="carne7">
        <img src="imagenes/pinchitos%20de%20pollo.png">
        <div class="texto">
            <p>Pinchos de pollo</p>
            <p><b>11€</b></p>
        </div>
    </div>

    <div id="carne8">
        <img src="imagenes/estofado%20de%20ternera.png">
        <div class="texto">
            <p>Estofado de ternera</p>
            <p><b>13,5€</b></p>
        </div>
    </div>
</div>
<div id="divInfantil" style="display:none;">
    <h3 id="TituloTarjetas">Comida infantil</h3>
    <div id="infantil1">
        <img src="imagenes/Patatas%20huevos%20y%20croquetas.png">
        <div class="texto">
            <p>Patatas fritas con <br>huevos fritos <br>y croquetas</p>
            <p><b>8€</b></p>
        </div>
    </div>

    <div id="infantil2">
        <img src="imagenes/Hamburguesa%20y%20papas.png">
        <div class="texto">
            <p>Hamburguesa con <br>patatas fritas</p>
            <p><b>5€</b></p>
        </div>
    </div>

    <div id="infantil3">
        <img src="imagenes/Pollo%20rebozado%20con%20papas.png">
        <div class="texto">
            <p>Pollo rebozado con patatas fritas</p>
            <p><b>7,5€</b></p>
        </div>
    </div>

    <div id="infantil4">
        <img src="imagenes/Nuggets%20de%20pollo.png">
        <div class="texto">
            <p>Nuggets de pollo</p>
            <p><b>4,5€</b></p>
        </div>
    </div>

    <div id="infantil5">
        <img src="imagenes/nuggets%20pescado.png">
        <div class="texto">
            <p>Nuggets de pescado</p>
            <p><b>4,5€</b></p>
        </div>
    </div>

    <div id="infantil6">
        <img src="imagenes/Spaguettis.png">
        <div class="texto">
            <p>Spaguettis a <br>la boloñesa</p>
            <p><b>8€</b></p>
        </div>
    </div>

    <div id="infantil7">
        <img src="imagenes/Flamenquines%20con%20papas.png">
        <div class="texto">
            <p>Flamenquin con <br>patatas</p>
            <p><b>10€</b></p>
        </div>
    </div>
    <div id="infantil8">
        <img src="imagenes/San%20jacobos%20con%20papas.png">
        <div class="texto">
            <p>San Jacobos con patatas</p>
            <p><b>13,5€</b></p>
        </div>
    </div>
</div>
<div id="divPostres" style="display: none">
    <h3 id="TituloTarjetas">Postres</h3>
    <div id="postre1">
        <img src="imagenes/Tarta%20de%20wisky.png">
        <div class="texto">
            <p>Tarta de Whisky</p>
            <p><b>3,5€</b></p>
        </div>
    </div>

    <div id="postre2">
        <img src="imagenes/Cafe.png">
        <div class="texto">
            <p>Cafe</p>
            <p><b>1,5€</b></p>
        </div>
    </div>

    <div id="postre3">
        <img src="imagenes/tarta%20queso.png">
        <div class="texto">
            <p>Tarta de queso</p>
            <p><b>4€</b></p>
        </div>
    </div>

    <div id="postre4">
        <img src="imagenes/mouse%20de%20chocolat.png">
        <div class="texto">
            <p>Mouse de chocolate</p>
            <p><b>3€</b></p>
        </div>
    </div>

    <div id="postre5">
        <img src="imagenes/tiramisu.png">
        <div class="texto">
            <p>Tiramisu</p>
            <p><b>4€</b></p>
        </div>
    </div>
</div>
<div id="TodosDivPersonales">
<!--Div Individuales de las bebidas-->
<div id="divAgua" style="display: none">
    <img id="imagenGeneral" src="imagenes/agua sin gas.png">
    <p id="textoGeneral">Agua sin Gas</p>
    <p id="precio">2,5€</p>
    <button id="botonsumar"><img src="imagenes/sumar.png"></button>
    <button id="botonrestar"><img src="imagenes/restar.png"></button>
    <p id="cantidad"></p>
    <button id="botonsalir"><img src="imagenes/salir.png"></button>
    <button id="addcarrito">Apuntar</button>
</div>
<div id="divAguaGas" style="display: none">
    <img id="imagenGeneral" src="imagenes/agua%20con%20gas.png">
    <p id="textoGeneral2">Agua con Gas</p>
    <p id="precio2"> 3€</p>
    <button id="botonsumar2"><img src="imagenes/sumar.png"></button>
    <button id="botonrestar2"><img src="imagenes/restar.png"></button>
    <p id="cantidad2"></p>
    <button id="botonsalir2"><img src="imagenes/salir.png"></button>
    <button id="addcarrito2">Apuntar</button>
</div>
<div id="divCocaCola" style="display: none">
    <img id="imagenGeneral2" src="imagenes/cocaloca.png">
    <p id="textoGeneralR1">Coca-Cola</p>
    <p id="precio3"> 2€</p>
    <button id="botonsumarR1"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarR1"><img src="imagenes/restar.png"></button>
    <p id="cantidadR1"></p>
    <button id="botonsalirR1"><img src="imagenes/salir.png"></button>
    <button id="addcarrito3">Apuntar</button>
</div>
<div id="divNestea" style="display: none">
    <img id="imagenGeneral3" src="imagenes/nestea.png">
    <p id="textoGeneralR2">Nestea</p>
    <p id="precio4"> 2,5€</p>
    <button id="botonsumarR2"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarR2"><img src="imagenes/restar.png"></button>
    <p id="cantidadR2"></p>
    <button id="botonsalirR2"><img src="imagenes/salir.png"></button>
    <button id="addcarrito4">Apuntar</button>
</div>
<div id="divAquarius" style="display: none">
    <img id="imagenGeneral4" src="imagenes/aquarius.png">
    <p id="textoGeneralR3">Aquarius</p>
    <p id="precio5"> 2,5€</p>
    <button id="botonsumarR3"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarR3"><img src="imagenes/restar.png"></button>
    <p id="cantidadR3"></p>
    <button id="botonsalirR3"><img src="imagenes/salir.png"></button>
    <button id="addcarrito5">Apuntar</button>
</div>
<div id="divFantaNaranja" style="display: none">
    <img id="imagenGeneral5" src="imagenes/Fanta%20Naranja.png">
    <p id="textoGeneralR4">Fanta Naranja</p>
    <p id="precio6"> 2€</p>
    <button id="botonsumarR4"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarR4"><img src="imagenes/restar.png"></button>
    <p id="cantidadR4"></p>
    <button id="botonsalirR4"><img src="imagenes/salir.png"></button>
    <button id="addcarrito6">Apuntar</button>
</div>
<div id="divCocaColaZero" style="display: none">
    <img id="imagenGeneral6" src="imagenes/Cocacola%20Zero.png">
    <p id="textoGeneralR5">Coca-Cola Zero</p>
    <p id="precio7"> 2€</p>
    <button id="botonsumarR5"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarR5"><img src="imagenes/restar.png"></button>
    <p id="cantidadR5"></p>
    <button id="botonsalirR5"><img src="imagenes/salir.png"></button>
    <button id="addcarrito7">Apuntar</button>
</div>
<div id="divFantaLimon" style="display: none">
    <img id="imagenGeneral7" src="imagenes/Fanta%20Limon.png">
    <p id="textoGeneralR6">Fanta Limon</p>
    <p id="precio8"> 2€</p>
    <button id="botonsumarR6"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarR6"><img src="imagenes/restar.png"></button>
    <p id="cantidadR6"></p>
    <button id="botonsalirR6"><img src="imagenes/salir.png"></button>
    <button id="addcarrito8">Apuntar</button>
</div>
<div id="divCerveza" style="display: none">
    <img id="imagenGeneralCerveza" src="imagenes/Cerveza.png">
    <p id="textoGeneralA1">Cerveza</p>
    <p id="precio9"> 2€</p>
    <button id="botonsumarA1"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarA1"><img src="imagenes/restar.png"></button>
    <p id="cantidadA1"></p>
    <button id="botonsalirA1"><img src="imagenes/salir.png"></button>
    <button id="addcarrito9">Apuntar</button>
</div>
<div id="divVino"style="display: none">
    <img id="imagenGeneral9" src="imagenes/Copa%20de%20Vino.png">
    <p id="textoGeneralA2">Copa de vino</p>
    <p id="precio10"> 3,5€</p>
    <button id="botonsumarA2"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarA2"><img src="imagenes/restar.png"></button>
    <p id="cantidadA2"></p>
    <button id="botonsalirA2"><img src="imagenes/salir.png"></button>
    <button id="addcarrito10">Apuntar</button>
</div>
<!--Div Indivuales de los entrantes-->
<div id="divHabas"style="display: none">
    <img id="imagenGeneralEntrantes" src="imagenes/Habas.png">
    <p id="textoGeneralE1">Plato de habas con <br>jamón y huevos</p>
    <p id="precioE"> 6,5€</p>
    <button id="botonsumarE1"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarE1"><img src="imagenes/restar.png"></button>
    <p id="cantidadE1"></p>
    <button id="botonsalirE1"><img src="imagenes/salir.png"></button>
    <button id="addcarritoE">Apuntar</button>
    <div id="Alergenoshabas">
        <p id="TextoHabasAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergenos%20Huevo.png" id="imagenHuevo">
    </div>
</div>
<div id="divJamon"style="display: none">
    <img id="imagenGeneralEntrantesJ" src="imagenes/jamon.png">
    <p id="textoGeneralE2">Plato de jamón</p>
    <p id="precioE2"> 6,5€</p>
    <button id="botonsumarE2"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarE2"><img src="imagenes/restar.png"></button>
    <p id="cantidadE2"></p>
    <button id="botonsalirE2"><img src="imagenes/salir.png"></button>
    <button id="addcarritoE2">Apuntar</button>
</div>
<div id="divJamonyQueso"style="display: none">
    <img id="imagenGeneralEntrantesJQ" src="imagenes/Platon%20de%20jamon%20y%20queso.png">
    <p id="textoGeneralE3">Plato de jamón <br>y queso</p>
    <p id="precioE3"> 11€</p>
    <button id="botonsumarE3"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarE3"><img src="imagenes/restar.png"></button>
    <p id="cantidadE3"></p>
    <button id="botonsalirE3"><img src="imagenes/salir.png"></button>
    <button id="addcarritoE3">Apuntar</button>
    <div id="AlergenosJamonyQueso">
        <p id="TextoJyQAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergenos%20Huevo.png" id="imagenHuevo">
    </div>
</div>
<div id="divCroquetas"style="display: none">
    <img id="imagenGeneralEntrantesCr" src="imagenes/Croquetas.png">
    <p id="textoGeneralE4">Croquetas</p>
    <p id="precioE4"> 9€</p>
    <button id="botonsumarE4"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarE4"><img src="imagenes/restar.png"></button>
    <p id="cantidadE4"></p>
    <button id="botonsalirE4"><img src="imagenes/salir.png"></button>
    <button id="addcarritoE4">Apuntar</button>
    <div id="AlergenosCroquetas">
        <p id="TextoCroqueAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergernos%20Gluten.png" id="imagenGluten">
        <img src="imagenes/Alergenos/Alergenos%20Huevo.png" id="imagenHuevo"><br>
    </div>
</div>
<div id="divSalchichonIberico"style="display: none">
    <img id="imagenGeneralEntrantesSI" src="imagenes/Salchichon%20iberico.png">
    <p id="textoGeneralE5">Salchichon Iberico</p>
    <p id="precioE5"> 7,5€</p>
    <button id="botonsumarE5"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarE5"><img src="imagenes/restar.png"></button>
    <p id="cantidadE5"></p>
    <button id="botonsalirE5"><img src="imagenes/salir.png"></button>
    <button id="addcarritoE5">Apuntar</button>
    <div id="AlergenosSalchichon">
        <p id="TextoSalchiAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergenos%20Lacteos.png" id="imagenLactosa">
        <img src="imagenes/Alergenos/Alergenos%20Soja.png" id="imagenSoja"><br>
        <img src="imagenes/Alergenos/Alergenos%20dioxido%20de%20sulfitos.png" id="imagenDixidoSulfurico">
    </div>
</div>
<div id="divBravas"style="display: none">
    <img id="imagenGeneralEntrantesB" src="imagenes/Bravas.png">
    <p id="textoGeneralE6">Patatas Bravas</p>
    <p id="precioE6"> 4,5€</p>
    <button id="botonsumarE6"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarE6"><img src="imagenes/restar.png"></button>
    <p id="cantidadE6"></p>
    <button id="botonsalirE6"><img src="imagenes/salir.png"></button>
    <button id="addcarritoE6">Apuntar</button>
</div>
<div id="divCalamaresFritos"style="display: none">
    <img id="imagenGeneralEntrantesCF" src="imagenes/Calamares%20Fritos.png">
    <p id="textoGeneralE7">Calamares fritos</p>
    <p id="precioE7"> 5€</p>
    <button id="botonsumarE7"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarE7"><img src="imagenes/restar.png"></button>
    <p id="cantidadE7"></p>
    <button id="botonsalirE7"><img src="imagenes/salir.png"></button>
    <button id="addcarritoE7">Apuntar</button>
    <div id="AlergenosCalamares">
        <p id="TextoCalamaresAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergernos%20Gluten.png" id="imagenGluten">
        <img src="imagenes/Alergenos/Alergenos%20Moluscos.png" id="imagenMoluscos"><br>
    </div>
</div>
<div id="divQuesos"style="display: none">
    <img id="imagenGeneralEntrantesTQ" src="imagenes/Tabla%20de%20queso.png">
    <p id="textoGeneralE8">Tabla de Quesos</p>
    <p id="precioE8"> 9,5€</p>
    <button id="botonsumarE8"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarE8"><img src="imagenes/restar.png"></button>
    <p id="cantidadE8"></p>
    <button id="botonsalirE8"><img src="imagenes/salir.png"></button>
    <button id="addcarritoE8">Apuntar</button>
    <div id="AlergenosCalamares">
        <p id="TextoCalamaresAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergenos%20Cascara.png" id="imagenCascara">
        <img src="imagenes/Alergenos/Alergenos%20Lacteos.png" id="imagenLactosa"><br>
    </div>
</div>
<!--Div Indivuales de los pescados-->
<div id="divLubina"style="display: none">
    <img id="imagenGeneralPescadoLubina" src="imagenes/Lubina.png">
    <p id="textoGeneralP1">Lubina al horno <br>con patatas</p>
    <p id="textoGeneralP1H" hidden="">Lubina al horno <br>con patatas</p>
    <p id="precioP"> 15€</p>
    <button id="botonsumarP1"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarP1"><img src="imagenes/restar.png"></button>
    <p id="cantidadP1"></p>
    <button id="botonsalirP1"><img src="imagenes/salir.png"></button>
    <button id="addcarritoP">Apuntar</button>
    <div id="AlergenosLubina">
        <p id="TextoLubinasAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergenos%20Pescado.png" id="imagenPescado">
    </div>
</div>
<div id="divBacalado"style="display: none">
    <img id="imagenGeneralPescadoBacalado" src="imagenes/Bacalao%20al%20pil%20pil.png">
    <p id="textoGeneralP2">Bacalao al pil pil</p>
    <p id="precioP2"> 10€</p>
    <button id="botonsumarP2"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarP2"><img src="imagenes/restar.png"></button>
    <p id="cantidadP2"></p>
    <button id="botonsalirP2"><img src="imagenes/salir.png"></button>
    <button id="addcarritoP2">Apuntar</button>
    <div id="AlergenosBacalado">
        <p id="TextoBacaladoAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergenos%20Pescado.png" id="imagenPescado">
    </div>
</div>
<div id="divBesugo"style="display: none">
    <img id="imagenGeneralPescadoBesugo" src="imagenes/Besugo%20al%20horno.png">
    <p id="textoGeneralP3">Besugo al horno</p>
    <p id="precioP3"> 20€</p>
    <button id="botonsumarP3"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarP3"><img src="imagenes/restar.png"></button>
    <p id="cantidadP3"></p>
    <button id="botonsalirP3"><img src="imagenes/salir.png"></button>
    <button id="addcarritoP3">Apuntar</button>
    <div id="AlergenosBesugo">
        <p id="TextoBesugoAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergenos%20Pescado.png" id="imagenPescado">
    </div>
</div>
<div id="divMurciano"style="display: none">
    <img id="imagenGeneralPescadoMerluzaMurciano" src="imagenes/Bacalao%20Murciano.png">
    <p id="textoGeneralP4">Caldero de merluza <br>y patatas al estilo <br>murciano</p>
    <p id="precioP4"> 20€</p>
    <button id="botonsumarP4"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarP4"><img src="imagenes/restar.png"></button>
    <p id="cantidadP4"></p>
    <button id="botonsalirP4"><img src="imagenes/salir.png"></button>
    <button id="addcarritoP4">Apuntar</button>
    <div id="AlergenosMurciano">
        <p id="TextoMurcianoAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergenos%20Pescado.png" id="imagenPescado">
        <img src="imagenes/Alergenos/Alergenos%20Cascara.png" id="imagenCascara">
    </div>
</div>
<div id="divAlbondigaRape"style="display: none">
    <img id="imagenGeneralPescadoAlbondigaPescado" src="imagenes/Albondigas%20de%20pescado.png">
    <p id="textoGeneralP5">Albóndigas de rape <br>con salsa de cava</p>
    <p id="precioP5"> 9€</p>
    <button id="botonsumarP5"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarP5"><img src="imagenes/restar.png"></button>
    <p id="cantidadP5"></p>
    <button id="botonsalirP5"><img src="imagenes/salir.png"></button>
    <button id="addcarritoP5">Apuntar</button>
    <div id="AlergenosAlbonRape">
        <p id="TextoAlbonRapeAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergenos%20Pescado.png" id="imagenPescado2">
        <img src="imagenes/Alergenos/Alergenos%20Crustaceos.png" id="imagenCrustaceo2"><br>
        <img src="imagenes/Alergenos/Alergenos%20Huevo.png" id="imagenHuevo2">
        <img src="imagenes/Alergenos/Alergernos%20Gluten.png" id="imagenGluten2">
    </div>
</div>
<div id="divSalmoRelleno"style="display: none">
    <img id="imagenGeneralPescadoSalmon" src="imagenes/Salmon%20relleno.png">
    <p id="textoGeneralP6">Salmón relleno de <br>crema de espinacas <br>con salsa holandesa</p>
    <p id="precioP6"> 10€</p>
    <button id="botonsumarP6"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarP6"><img src="imagenes/restar.png"></button>
    <p id="cantidadP6"></p>
    <button id="botonsalirP6"><img src="imagenes/salir.png"></button>
    <button id="addcarritoP6">Apuntar</button>
    <div id="AlergenosSalmon">
        <p id="TextoAlbonRapeAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergenos%20Pescado.png" id="imagenPescado2">
        <img src="imagenes/Alergenos/Alergenos%20Huevo.png" id="imagenHuevo2"><br>
        <img src="imagenes/Alergenos/Alergenos%20Lacteos.png" id="imagenLactosa2">
        <img src="imagenes/Alergenos/Alergenos%20Mostaza.png" id="imagenMostaza2">
    </div>
</div>
<div id="divAtunPlancha"style="display: none">
    <img id="imagenGeneralPescadoAtun" src="imagenes/Atun%20plancha.png">
    <p id="textoGeneralP7">Atún a la plancha <br>con pesto de aguacate <br>y verduras</p>
    <p id="precioP7"> 12€</p>
    <button id="botonsumarP7"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarP7"><img src="imagenes/restar.png"></button>
    <p id="cantidadP7"></p>
    <button id="botonsalirP7"><img src="imagenes/salir.png"></button>
    <button id="addcarritoP7">Apuntar</button>
    <div id="AlergenosAtunPlancha">
        <p id="TextoAtunPlanchaAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergenos%20Pescado.png" id="imagenPescado">
        <img src="imagenes/Alergenos/Alergenos%20Cascara.png" id="imagenCascara">
    </div>
</div>
<div id="divBacaladoRioja"style="display: none">
    <img id="imagenGeneralPescadoBacaladoRioja" src="imagenes/Bacalo%20a%20la%20rioja.png">
    <p id="textoGeneralP8">Bacalao a la riojana, <br>con salsa de <br>pimientos</p>
    <p id="precioP8"> 12€</p>
    <button id="botonsumarP8"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarP8"><img src="imagenes/restar.png"></button>
    <p id="cantidadP8"></p>
    <button id="botonsalirP8"><img src="imagenes/salir.png"></button>
    <button id="addcarritoP8">Apuntar</button>
    <div id="AlergenosBacaladoRioja">
        <p id="TextoBacaladoRiojaAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergernos%20Gluten.png" id="imagenGluten">
        <img src="imagenes/Alergenos/Alergenos%20Pescado.png" id="imagenPescado">
    </div>
</div>
<!--Div Indivuales de las carnes-->
<div id="divSolomillo"style="display: none">
    <img id="imagenGeneralCarneSolomillo" src="imagenes/Solomillo%20Cerdo%20con%20papas.png">
    <p id="textoGeneralC1">Solomillo de cerdo <br>al ajillo con patatas</p>
    <p id="precioC"> 13€</p>
    <button id="botonsumarC1"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarC1"><img src="imagenes/restar.png"></button>
    <p id="cantidadC1"></p>
    <button id="botonsalirC1"><img src="imagenes/salir.png"></button>
    <button id="addcarritoC">Apuntar</button>
    <div id="AlergenosSolomillo">
        <p id="TextoSolimilloAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergernos%20Gluten.png" id="imagenGluten">
    </div>
</div>
<div id="divCordero"style="display: none">
    <img id="imagenGeneralCarneCordero" src="imagenes/cordeo%20al%20chichildron.png">
    <p id="textoGeneralC2">Cordero al chilindron</p>
    <p id="precioC2"> 12€</p>
    <button id="botonsumarC2"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarC2"><img src="imagenes/restar.png"></button>
    <p id="cantidadC2"></p>
    <button id="botonsalirC2"><img src="imagenes/salir.png"></button>
    <button id="addcarritoC2">Apuntar</button>
    <div id="AlergenosCordero">
        <p id="TextoCorderoAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergernos%20Gluten.png" id="imagenGluten">
    </div>
</div>
<div id="divEscalopines"style="display: none">
    <img id="imagenGeneralCarneEscalopines" src="imagenes/escalopines%20ternera.png">
    <p id="textoGeneralC3">Escalopines de <br>ternera con arroz</p>
    <p id="precioC3"> 16,5€</p>
    <button id="botonsumarC3"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarC3"><img src="imagenes/restar.png"></button>
    <p id="cantidadC3"></p>
    <button id="botonsalirC3"><img src="imagenes/salir.png"></button>
    <button id="addcarritoC3">Apuntar</button>
    <div id="AlergenosEscalopines">
        <p id="TextoEscalopinesAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergernos%20Gluten.png" id="imagenGluten">
    </div>
</div>
<div id="divCodillo"style="display: none">
    <img id="imagenGeneralCarneCodillo" src="imagenes/codillo.png">
    <p id="textoGeneralC4">Codillo al horno <br>con patatas</p>
    <p id="precioC4"> 20€</p>
    <button id="botonsumarC4"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarC4"><img src="imagenes/restar.png"></button>
    <p id="cantidadC4"></p>
    <button id="botonsalirC4"><img src="imagenes/salir.png"></button>
    <button id="addcarritoC4">Apuntar</button>
    <div id="AlergenosCordillo">
        <p id="TextoCordilloAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergernos%20Gluten.png" id="imagenGluten">
    </div>
</div>
<div id="divBrochetas"style="display: none">
    <img id="imagenGeneralCarneBrochetas" src="imagenes/brochetas%20.png">
    <p id="textoGeneralC5">Brochetas de ternera</p>
    <p id="precioC5"> 10€</p>
    <button id="botonsumarC5"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarC5"><img src="imagenes/restar.png"></button>
    <p id="cantidadC5"></p>
    <button id="botonsalirC5"><img src="imagenes/salir.png"></button>
    <button id="addcarritoC5">Apuntar</button>
    <div id="AlergenosBrotechas">
        <p id="TextoBrotechasAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergernos%20Gluten.png" id="imagenGluten">
    </div>
</div>
<div id="divCarrillada"style="display: none">
    <img id="imagenGeneralCarneCarrillada" src="imagenes/carrillada%20en%20salsa.png">
    <p id="textoGeneralC6">Carrillada en salsa <br>con patatas</p>
    <p id="precioC6"> 10€</p>
    <button id="botonsumarC6"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarC6"><img src="imagenes/restar.png"></button>
    <p id="cantidadC6"></p>
    <button id="botonsalirC6"><img src="imagenes/salir.png"></button>
    <button id="addcarritoC6">Apuntar</button>
    <div id="AlergenosCarrillada">
        <p id="TextoCarrilladaAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergernos%20Gluten.png" id="imagenGluten">
    </div>
</div>
<div id="divPinchos"style="display: none">
    <img id="imagenGeneralCarnePinchos" src="imagenes/pinchitos%20de%20pollo.png">
    <p id="textoGeneralC7">Pinchos de pollo</p>
    <p id="precioC7"> 11€</p>
    <button id="botonsumarC7"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarC7"><img src="imagenes/restar.png"></button>
    <p id="cantidadC7"></p>
    <button id="botonsalirC7"><img src="imagenes/salir.png"></button>
    <button id="addcarritoC7">Apuntar</button>
    <div id="AlergenosPinchos">
        <p id="TextoPinchosAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergernos%20Gluten.png" id="imagenGluten">
    </div>
</div>
<div id="divEstofado"style="display: none">
    <img id="imagenGeneralCarneEstofado" src="imagenes/estofado%20de%20ternera.png">
    <p id="textoGeneralC8">Estofado de ternera</p>
    <p id="precioC8"> 13,5€</p>
    <button id="botonsumarC8"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarC8"><img src="imagenes/restar.png"></button>
    <p id="cantidadC8"></p>
    <button id="botonsalirC8"><img src="imagenes/salir.png"></button>
    <button id="addcarritoC8">Apuntar</button>
    <div id="AlergenosEstofado">
        <p id="TextoEstofadoAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergernos%20Gluten.png" id="imagenGluten">
    </div>
</div>
<!--Div Indivuales del infatil-->
<div id="divPHC"style="display: none">
    <img id="imagenGeneralInfatilPHC" src="imagenes/Patatas%20huevos%20y%20croquetas.png">
    <p id="textoGeneralI1">Patatas fritas con <br>huevos fritos <br>y croquetas</p>
    <p id="precioI"> 8€</p>
    <button id="botonsumarI1"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarI1"><img src="imagenes/restar.png"></button>
    <p id="cantidadI1"></p>
    <button id="botonsalirI1"><img src="imagenes/salir.png"></button>
    <button id="addcarritoI">Apuntar</button>
    <div id="AlergenosPHC">
        <p id="TextoPHCAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergernos%20Gluten.png" id="imagenGluten2">
        <img src="imagenes/Alergenos/Alergenos%20Huevo.png" id="imagenHuevo2"><br>
        <img src="imagenes/Alergenos/Alergenos%20Lacteos.png" id="imagenLactosa2">
    </div>
</div>
<div id="divHamburguesa"style="display: none">
    <img id="imagenGeneralInfantilHamburguesa" src="imagenes/Hamburguesa%20y%20papas.png">
    <p id="textoGeneralI2">Hamburguesa con <br>patatas fritas</p>
    <p id="precioI2"> 5€</p>
    <button id="botonsumarI2"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarI2"><img src="imagenes/restar.png"></button>
    <p id="cantidadI2"></p>
    <button id="botonsalirI2"><img src="imagenes/salir.png"></button>
    <button id="addcarritoI2">Apuntar</button>
    <div id="AlergenosHamburguesa">
        <p id="TextoHamburguesaAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergernos%20Gluten.png" id="imagenGluten2">
        <img src="imagenes/Alergenos/Alergenos%20Huevo.png" id="imagenHuevo2"><br>
        <img src="imagenes/Alergenos/Alergenos%20Lacteos.png" id="imagenLactosa2">
    </div>
</div>
<div id="divPollo"style="display: none">
    <img id="imagenGeneralInfantilPollo" src="imagenes/Pollo%20rebozado%20con%20papas.png">
    <p id="textoGeneralI3">Pollo rebozado <br>con patatas fritas</p>
    <p id="precioI3"> 7,5€</p>
    <button id="botonsumarI3"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarI3"><img src="imagenes/restar.png"></button>
    <p id="cantidadI3"></p>
    <button id="botonsalirI3"><img src="imagenes/salir.png"></button>
    <button id="addcarritoI3">Apuntar</button>
    <div id="AlergenosPollo">
        <p id="TextoPolloAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergernos%20Gluten.png" id="imagenGluten2">
        <img src="imagenes/Alergenos/Alergenos%20Huevo.png" id="imagenHuevo2">
    </div>
</div>
<div id="divNuggetsPollo"style="display: none">
    <img id="imagenGeneralInfantilNuggets" src="imagenes/Nuggets%20de%20pollo.png">
    <p id="textoGeneralI4">Nuggets de pollo</p>
    <p id="precioI4"> 4,5€</p>
    <button id="botonsumarI4"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarI4"><img src="imagenes/restar.png"></button>
    <p id="cantidadI4"></p>
    <button id="botonsalirI4"><img src="imagenes/salir.png"></button>
    <button id="addcarritoI4">Apuntar</button>
    <div id="AlergenosNuggetsPollo">
        <p id="TextoNuggetsPolloAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergernos%20Gluten.png" id="imagenGluten2">
        <img src="imagenes/Alergenos/Alergenos%20Huevo.png" id="imagenHuevo2"><br>
        <img src="imagenes/Alergenos/Alergenos%20Lacteos.png" id="imagenLactosa2">
    </div>
</div>
<div id="divNuggetsPescado"style="display: none">
    <img id="imagenGeneralInfantilNuggetsPescado" src="imagenes/nuggets%20pescado.png">
    <p id="textoGeneralI5">Nuggets de pescado</p>
    <p id="precioI5"> 4,5€</p>
    <button id="botonsumarI5"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarI5"><img src="imagenes/restar.png"></button>
    <p id="cantidadI5"></p>
    <button id="botonsalirI5"><img src="imagenes/salir.png"></button>
    <button id="addcarritoI5">Apuntar</button>
    <div id="AlergenosNuggetsPescado">
        <p id="TextoNuggetsPescadoAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergernos%20Gluten.png" id="imagenGluten2">
        <img src="imagenes/Alergenos/Alergenos%20Huevo.png" id="imagenHuevo2"><br>
        <img src="imagenes/Alergenos/Alergenos%20Lacteos.png" id="imagenLactosa2">
        <img src="imagenes/Alergenos/Alergenos%20Mostaza.png" id="imagenMostaza2">
    </div>
</div>
<div id="divSpaguettis"style="display: none">
    <img id="imagenGeneralInfantilSpaguettis" src="imagenes/Spaguettis.png">
    <p id="textoGeneralI6">Spaguettis a <br>la boloñesa</p>
    <p id="precioI6"> 8€</p>
    <button id="botonsumarI6"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarI6"><img src="imagenes/restar.png"></button>
    <p id="cantidadI6"></p>
    <button id="botonsalirI6"><img src="imagenes/salir.png"></button>
    <button id="addcarritoI6">Apuntar</button>
    <div id="AlergenosSpaguetti">
        <p id="TextoSpaguettiAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergernos%20Gluten.png" id="imagenGluten2">
        <img src="imagenes/Alergenos/Alergenos%20Huevo.png" id="imagenHuevo2"><br>
        <img src="imagenes/Alergenos/Alergenos%20Lacteos.png" id="imagenLactosa2">
    </div>
</div>
<div id="divFlamenquin"style="display: none">
    <img id="imagenGeneralInfantilFlamenquin" src="imagenes/Flamenquines%20con%20papas.png">
    <p id="textoGeneralI7">Flamenquin <br>con patatas</p>
    <p id="precioI7"> 10€</p>
    <button id="botonsumarI7"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarI7"><img src="imagenes/restar.png"></button>
    <p id="cantidadI7"></p>
    <button id="botonsalirI7"><img src="imagenes/salir.png"></button>
    <button id="addcarritoI7">Apuntar</button>
    <div id="AlergenosFlamenquin">
        <p id="TextoFlamenquinAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergernos%20Gluten.png" id="imagenGluten2">
        <img src="imagenes/Alergenos/Alergenos%20Huevo.png" id="imagenHuevo2"><br>
    </div>
</div>
<div id="divSanJacobo"style="display: none">
    <img id="imagenGeneralInfantilSanJacobo" src="imagenes/San%20jacobos%20con%20papas.png">
    <p id="textoGeneralI8">San Jacobos <br>con patatas</p>
    <p id="precioI8"> 13,5€</p>
    <button id="botonsumarI8"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarI8"><img src="imagenes/restar.png"></button>
    <p id="cantidadI8"></p>
    <button id="botonsalirI8"><img src="imagenes/salir.png"></button>
    <button id="addcarritoI8">Apuntar</button>
    <div id="AlergenosSanJacobos">
        <p id="TextoSanJacobosAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergernos%20Gluten.png" id="imagenGluten2">
        <img src="imagenes/Alergenos/Alergenos%20Huevo.png" id="imagenHuevo2"><br>
        <img src="imagenes/Alergenos/Alergenos%20Lacteos.png" id="imagenLactosa2">
    </div>
</div>
<!--Div Indivuales de los postres-->
<div id="divTartaWisky"style="display: none">
    <img id="imagenGeneralPostreTartaWisky" src="imagenes/Tarta%20de%20wisky.png">
    <p id="textoGeneralPO1">Tarta de Whisky</p>
    <p id="precioPO"> 3,5€</p>
    <button id="botonsumarPO1"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarPO1"><img src="imagenes/restar.png"></button>
    <p id="cantidadPO1"></p>
    <button id="botonsalirPO1"><img src="imagenes/salir.png"></button>
    <button id="addcarritoPO">Apuntar</button>
    <div id="AlergenosTartaWisky">
        <p id="TextoTartaWiskyAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergernos%20Gluten.png" id="imagenGluten">
        <img src="imagenes/Alergenos/Alergenos%20Huevo.png" id="imagenHuevo"><br>
        <img src="imagenes/Alergenos/Alergenos%20Lacteos.png" id="imagenLactosa">
    </div>
</div>
<div id="divCafe"style="display: none">
    <img id="imagenGeneralPostreCafe" src="imagenes/cafe.png">
    <p id="textoGeneralPO2">Cafe</p>
    <p id="precioI2"> 1,5€</p>
    <button id="botonsumarPO2"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarPO2"><img src="imagenes/restar.png"></button>
    <p id="cantidadPO2"></p>
    <button id="botonsalirPO2"><img src="imagenes/salir.png"></button>
    <button id="addcarritoPO2">Apuntar</button>
    <div id="AlergenosCafe">
        <p id="TextoCafeAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergernos%20Gluten.png" id="imagenGluten">
    </div>
</div>
<div id="divTartaQueso"style="display: none">
    <img id="imagenGeneralPostreTartaQueso" src="imagenes/tarta%20queso.png">
    <p id="textoGeneralPO3">Tarta de queso</p>
    <p id="precioPO3"> 4€</p>
    <button id="botonsumarPO3"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarPO3"><img src="imagenes/restar.png"></button>
    <p id="cantidadPO3"></p>
    <button id="botonsalirPO3"><img src="imagenes/salir.png"></button>
    <button id="addcarritoPO3">Apuntar</button>
    <div id="AlergenosTartaQueso">
        <p id="TextoTartaQuesoAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergernos%20Gluten.png" id="imagenGluten">
        <img src="imagenes/Alergenos/Alergenos%20Huevo.png" id="imagenHuevo"><br>
        <img src="imagenes/Alergenos/Alergenos%20Lacteos.png" id="imagenLactosa">
    </div>
</div>
<div id="divMouse"style="display: none">
    <img id="imagenGeneralPostreMouse" src="imagenes/mouse%20de%20chocolat.png">
    <p id="textoGeneralPO4">Mouse de <br>chocolate</p>
    <p id="precioPO4"> 3€</p>
    <button id="botonsumarPO4"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarPO4"><img src="imagenes/restar.png"></button>
    <p id="cantidadPO4"></p>
    <button id="botonsalirPO4"><img src="imagenes/salir.png"></button>
    <button id="addcarritoPO4">Apuntar</button>
    <div id="AlergenosMouse">
        <p id="TextoMouseAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergernos%20Gluten.png" id="imagenGluten">
        <img src="imagenes/Alergenos/Alergenos%20Huevo.png" id="imagenHuevo"><br>
        <img src="imagenes/Alergenos/Alergenos%20Lacteos.png" id="imagenLactosa">
    </div>
</div>
<div id="divTiramisu"style="display: none">
    <img id="imagenGeneralPostreTiramisu" src="imagenes/tiramisu.png">
    <p id="textoGeneralPO5">Tiramisu</p>
    <p id="precioPO5"> 4€</p>
    <button id="botonsumarPO5"><img src="imagenes/sumar.png"></button>
    <button id="botonrestarPO5"><img src="imagenes/restar.png"></button>
    <p id="cantidadPO5"></p>
    <button id="botonsalirPO5"><img src="imagenes/salir.png"></button>
    <button id="addcarritoPO5">Apuntar</button>
    <div id="AlergenosTiramisu">
        <p id="TextoTiramisuAlergenos">Alérgenos</p>
        <img src="imagenes/Alergenos/Alergernos%20Gluten.png" id="imagenGluten">
        <img src="imagenes/Alergenos/Alergenos%20Huevo.png" id="imagenHuevo"><br>
        <img src="imagenes/Alergenos/Alergenos%20Lacteos.png" id="imagenLactosa">
    </div>
</div>
</div>
    <!--Div para apuntar al txt-->
<div id="anadiraltxt" style="display:none;">
    <button id="salirApuntar"><img src="imagenes/salir.png"></button>
    <p id="nombreCamarero">El camarero que te atiende es: <strong><?php echo $_SESSION["usuario"]?></strong></p>
    <label for="mesa">Mesa a atender:</label><br>
    <select id="mesa" name="mesa"></select><br><br>
    <p id="tituloSeleccionado"></p>
    <p id="cantidadSeleccionada"></p>
    <p id="precioUnitario"></p>
    <button id="ApuntarComanda">Añadir a la comanda</button>
</div>
</main>
<footer id="FooterPrincipal" style="display: none">
    <p id="textoFooter">© Sabores del mundo 2024</p>
    <img src="imagenes/Logo.png" id="imagenLogoFooter">
</footer>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="../js/ScriptPrincipal.js"></script>
<script src="../js/jsBebidas.js"></script>
<script src="../js/jsEntrantes.js"></script>
<script src="../js/jsPescado.js"></script>
<script src="../js/jsCarne.js"></script>
<script src="../js/jsInfantil.js"></script>
<script src="../js/jsPostres.js"></script>
</body>
</html>
<?php
}
?>