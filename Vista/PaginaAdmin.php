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
    <title>Pagina Admin</title>
    <link rel="icon" href="imagenes/Logo.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="css/cssPaginaAdmin.css">
</head>
<body>
<header>
    <div id="DivCerrarSesion">
        <p id="TextoHeader">Página Administrador</p>
        <button id="cerrarSesion">Cerrar Sesión</button>
        <img id="imagenHeader" src="imagenes/Logo.png">
    </div>
</header>
<main>
<div id="divInsertarProducto">
    <p class="textoProducto">Insertar producto</p>
</div>
<div id="divParaInsertar" style="display: none">
    <form >
        <label for="NombreProducto" id="NombreProductolabel">Escriba el nombre del producto :</label><br>
        <input type="text" id="NombreProducto" name="NombreProducto"><br><br>
        <label for="CantidadProducto">Escriba la cantidad de producto disponible:</label><br>
        <input type="text" id="CantidadProducto" name="CantidadProducto"><br><br>
        <label for="PrecioProducto">Escriba el precio del producto:</label><br>
        <input type="text" id="PrecioProducto" name="PrecioProducto"><br><br>
        <label for="CategoriaDisponible">Seleccione la categoria del producto:</label><br>
        <select id="CategoriaDisponible" name="CategoriaDisponible" class="CategoriaDisponible"></select><br>
        <label for="SubirFoto">Suba la foto del producto:</label><br>
        <input type="file" name="txtFile" id="txtFile" /><br><br>
        <label>Seleccione los alergenos del producto:</label><br>
        <div id="checkboxes">
            <input type="checkbox" id="opcion1" name="opcion1" value="Altramuces">
            <label for="option1">Altramuces</label>
            <input type="checkbox" id="opcion2" name="opcion2" value="Apio">
            <label for="option2">Apio</label>
            <input type="checkbox" id="opcion3" name="opcion3" value="Cacahuetes">
            <label for="option3">Cacahuetes</label>
            <input type="checkbox" id="opcion4" name="opcion4" value="Crustaceos">
            <label for="option3">Crustaceos</label>
            <input type="checkbox" id="opcion5" name="opcion5" value="Dioxido de sulfitos">
            <label for="option3">Dioxido de sulfitos</label>
            <input type="checkbox" id="opcion6" name="opcion6" value="Gramos de sesamo">
            <label for="option3">Gramos de sesamo</label>
            <input type="checkbox" id="opcion7" name="opcion7" value="Huevo">
            <label for="option3">Huevo</label>
            <input type="checkbox" id="opcion8" name="opcion8" value="Lacteos">
            <label for="option3">Lacteos</label>
            <input type="checkbox" id="opcion9" name="opcion9" value="Moluscos">
            <label for="option3">Moluscos</label>
            <input type="checkbox" id="opcion10" name="opcion10" value="Mostaza">
            <label for="option3">Mostaza</label>
            <input type="checkbox" id="opcion11" name="opcion11" value="Pescado">
            <label for="option3">Pescado</label>
            <input type="checkbox" id="opcion12" name="opcion12" value="Soja">
            <label for="option3">Soja</label>
            <input type="checkbox" id="opcion13" name="opcion13" value="Gluten">
            <label for="option3">Gluten</label>
        </div>
        <button id="botonInsertarProducto">Insertar Producto</button>
    </form>

</div>
<!--Eliminar Productos-->
<div id="divEliminarProducto">
    <p class="textoProducto">Eliminar producto</p>
</div>

<div id="divParaBorrarProducto" style="display: none">
    <form>
        <label for="ProductoDisponible" id="ProductoDisponibleid">Seleccione el producto a eliminar:</label><br>
        <select id="ProductoDisponible" name="ProductoDisponible" class="ProductoDisponible"></select><br>
        <button id="botonBorrarProducto">Borrar Producto</button>
    </form>
</div>

<div id="divEditarProducto">
    <p class="textoProducto">Editar producto</p>
</div>

<div id="divParaCambiarProducto" style="display: none">
    <label for="ProductoDisponibleEditar" id="ProductoDisponibleEditarid">Seleccione el producto a eliminar:</label><br>
    <select id="ProductoDisponibleEditar" name="ProductoDisponibleEditar" class="ProductoDisponibleEditar"></select><br>
    <label for="NombreProducto" id="NombreProductolabel">Escriba el nombre del producto :</label><br>
    <input type="text" id="NombreProductoEditar" name="NombreProductoEditar"><br><br>
    <label for="CantidadProducto">Escriba la cantidad de producto disponible:</label><br>
    <input type="text" id="CantidadProductoEditar" name="CantidadProductoEditar"><br><br>
    <label for="PrecioProducto">Escriba el precio del producto:</label><br>
    <input type="text" id="PrecioProductoEditar" name="PrecioProductoEditar"><br><br>
    <label for="CategoriaDisponible">La actual categoria del producto es: <p id="CategoriaDisponibleEditarTexto"></p> Seleccione una nueva categoria si desea</label><br>
    <select id="CategoriaDisponibleEditar" name="CategoriaDisponibleEditar" class="CategoriaDisponibleEditar"></select><br>
    <label for="SubirFoto">Suba la foto del producto:</label><br>
    <input type="file" name="txtFile2" id="txtFile2" /><br><br>
    <label>Seleccione los alergenos del producto:</label><br>
    <div id="checkboxes">
        <input type="checkbox" id="opcion1Editar" name="opcion1Editar" value="Altramuces">
        <label for="option1">Altramuces</label>
        <input type="checkbox" id="opcion2Editar" name="opcion2Editar" value="Apio">
        <label for="option2">Apio</label>
        <input type="checkbox" id="opcion3Editar" name="opcion3Editar" value="Cacahuetes">
        <label for="option3">Cacahuetes</label>
        <input type="checkbox" id="opcion4Editar" name="opcion4Editar" value="Crustaceos">
        <label for="option3">Crustaceos</label>
        <input type="checkbox" id="opcion5Editar" name="opcion5Editar" value="Dioxido de sulfitos">
        <label for="option3">Dioxido de sulfitos</label>
        <input type="checkbox" id="opcion6Editar" name="opcion6Editar" value="Gramos de sesamo">
        <label for="option3">Gramos de sesamo</label>
        <input type="checkbox" id="opcion7Editar" name="opcion7Editar" value="Huevo">
        <label for="option3">Huevo</label>
        <input type="checkbox" id="opcion8Editar" name="opcion8Editar" value="Lacteos">
        <label for="option3">Lacteos</label>
        <input type="checkbox" id="opcion9Editar" name="opcion9Editar" value="Moluscos">
        <label for="option3">Moluscos</label>
        <input type="checkbox" id="opcion10Editar" name="opcion10Editar" value="Mostaza">
        <label for="option3">Mostaza</label>
        <input type="checkbox" id="opcion11Editar" name="opcion11Editar" value="Pescado">
        <label for="option3">Pescado</label>
        <input type="checkbox" id="opcion12Editar" name="opcion12Editar" value="Soja">
        <label for="option3">Soja</label>
        <input type="checkbox" id="opcion13Editar" name="opcion13Editar" value="Gluten">
        <label for="option3">Gluten</label>
    </div>
    <button id="botonEditarProducto">Editar Producto</button>
</div>
<!--Ver Productos-->
<div id="divVerProductos">
    <p class="textoProducto">Ver productos</p>
</div>

<div id="divParaVerLosProductos" style="display: none">
    <label for="CategoriaDisponible" id="ProductosCategoria">Seleccione la categoria del producto que desea ver:</label><br>
    <select id="CategoriaDisponibleVerProductos" name="CategoriaDisponibleVerProductos" class="CategoriaDisponible"></select><br>
    <table id="todosProductos"></table>
</div>
<!--Ver Camareros-->
<div id="divVerCamareros">
    <p class="textoProducto">Ver Camareros</p>
</div>
<div id="VerTodosCamareros" style="display: none">
    <table id="VerTodosCamarerosTabla"></table>
</div>
<!--Eliminar Camareros-->
<div id="divEliminarCamareros">
    <p class="textoProducto">Eliminar Camareros</p>
</div>
<div id="divParaCamarero" style="display: none">
    <form>
        <label for="CamareroEliminar" id="CamareroEliminarID">Seleccione el producto a eliminar:</label><br>
        <select id="CamareroEliminar2" name="CamareroEliminar" class="CamareroEliminar"></select><br>
        <button id="botonBorrarCamarero">Borrar Camarero</button>
    </form>
</div>
</main>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="../js/jsAdmin.js"></script>
</html>
    <?php
}
?>