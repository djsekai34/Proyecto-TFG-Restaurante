/*Insertar producto*/
$(document).ready(function() {
    $("#divInsertarProducto").click(function() {
        if ($("#divParaBorrarProducto").is(":visible")) {
            $("#divParaBorrarProducto").fadeOut();
        }
        if ($("#divParaVerLosProductos").is(":visible")) {
            $("#divParaVerLosProductos").fadeOut();
            $("#todosProductos").empty();
        }
        if ($("#VerTodosCamareros").is(":visible")) {
            $("#VerTodosCamareros").fadeOut();
        }
        if ($("#divParaCamarero").is(":visible")) {
            $("#divParaCamarero").fadeOut();
        }
        if ($("#divParaCambiarProducto").is(":visible")) {
            $("#divParaCambiarProducto").fadeOut();
            /*Limpiamos los input, select y checkbox*/
            $("#divParaCambiarProducto input, #divParaCambiarProducto select").val('');
            $("#divParaCambiarProducto #checkboxes input[type='checkbox']").prop('checked', false);
        }

        $("#divParaInsertar").slideToggle();

        if ($("#divParaInsertar").is(":visible")) {
            $.ajax({
                url: '../Controlador/ControladorObtenerCategorias.php',
                type: 'GET',
                success: function(response) {
                    var categorias = JSON.parse(response);
                    console.log(categorias)
                    var select = $("#CategoriaDisponible");
                    select.empty();

                    categorias.forEach(function(categoria) {
                        select.append(new Option(categoria, categoria));
                    });
                }
            });
        }
    });
});




$(document).ready(function() {
    $("#botonInsertarProducto").click(function(e) {
        e.preventDefault();

        var nombreProducto = $("#NombreProducto");
        var cantidadProducto = $("#CantidadProducto");
        var precioProducto = $("#PrecioProducto");
        var categoriaDisponible = $("#CategoriaDisponible");
        var imagenProducto = $("#txtFile");
        var alergenos = [];
        $("input:checkbox[name=opcion1]:checked, input:checkbox[name=opcion2]:checked, input:checkbox[name=opcion3]:checked, input:checkbox[name=opcion4]:checked, input:checkbox[name=opcion5]:checked, input:checkbox[name=opcion6]:checked, input:checkbox[name=opcion7]:checked, input:checkbox[name=opcion8]:checked, input:checkbox[name=opcion9]:checked, input:checkbox[name=opcion10]:checked, input:checkbox[name=opcion11]:checked, input:checkbox[name=opcion12]:checked, input:checkbox[name=opcion13]:checked").each(function(){
            alergenos.push($(this).val());
        });
        /*Comprobacion de que no deja campos vacios*/
        if (!nombreProducto.val()) {
            alert('Por favor, introduce el nombre del producto.');
            return;
        }
        if (!cantidadProducto.val()) {
            alert('Por favor, introduce la cantidad del producto.');
            return;
        }
        if (!precioProducto.val()) {
            alert('Por favor, introduce el precio del producto.');
            return;
        }
        if (!imagenProducto.val()) {
            alert('Por favor, selecciona una imagen para el producto.');
            return;
        }
        /*Comprobacion de que usa el punto en vez de la coma*/
        if (precioProducto.val().includes(',')) {
            alert('Por favor, utiliza un punto en lugar de una coma para los decimales. Por ejemplo: 10.50€');
            return;
        }

        /*Comprobacion de no pone mas de dos decimales*/
        if (Math.floor(precioProducto.val() * 100) != precioProducto.val() * 100) {
            alert('El precio solo puede añadirse con dos decimales. Por ejemplo: 10.50€');
            return;
        }

        var formData = new FormData();
        formData.append('txtFile', imagenProducto[0].files[0]);
        formData.append('nombre', nombreProducto.val());
        formData.append('cantidad', cantidadProducto.val());
        formData.append('precio', precioProducto.val());
        formData.append('categoria', categoriaDisponible.val());
        formData.append('alergenos', alergenos.join(', '));

        $.ajax({
            url: '../Controlador/ControladorInsertarProducto.php',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                var data = JSON.parse(response);
                if (data.success) {
                    alert(data.success);
                    nombreProducto.val('');
                    cantidadProducto.val('');
                    precioProducto.val('');
                    imagenProducto.val('');
                    $('input:checkbox').prop('checked', false);
                } else if (data.error) {
                    alert(data.error);
                }
            }
        });
    });
});





/*----------------------------------------------------------------------------------------------------------------------------*/
/*Borrar producto*/
$(document).ready(function() {
    $("#divEliminarProducto").click(function() {
        if ($("#divParaInsertar").is(":visible")) {
            $("#divParaInsertar").fadeOut();
            /*Limpiamos los input, select y checkbox*/
            $("#divParaInsertar input, #divParaInsertar select").val('');
            $("#divParaInsertar #checkboxes input[type='checkbox']").prop('checked', false);
        }

        if ($("#divParaVerLosProductos").is(":visible")) {
            $("#divParaVerLosProductos").fadeOut();
            $("#todosProductos").empty();
        }

        if ($("#VerTodosCamareros").is(":visible")) {
            $("#VerTodosCamareros").fadeOut();
        }
        if ($("#divParaCamarero").is(":visible")) {
            $("#divParaCamarero").fadeOut();
        }
        if ($("#divParaCambiarProducto").is(":visible")) {
            $("#divParaCambiarProducto").fadeOut();
            /*Limpiamos los input, select y checkbox*/
            $("#divParaCambiarProducto input, #divParaCambiarProducto select").val('');
            $("#divParaCambiarProducto #checkboxes input[type='checkbox']").prop('checked', false);
        }

        $("#divParaBorrarProducto").slideToggle();

        $.ajax({
            url: '../Controlador/ControladorObtenerProductos.php',
            type: 'GET',
            success: function(response) {
                var productos = JSON.parse(response);
                var select = $("#ProductoDisponible");
                select.empty();

                productos.forEach(function(producto) {
                    select.append(new Option(producto, producto));
                });
            }
        });
    });
});


$(document).ready(function() {
    $("#botonBorrarProducto").click(function(e) {
        e.preventDefault();

        var productoSeleccionado = $("#ProductoDisponible").val();

        var confirmacion = confirm('¿Deseas borrar el producto definitivamente?');
        if (confirmacion) {
            $.ajax({
                url: '../Controlador/ControladorBorrarProducto.php',
                type: 'POST',
                data: {
                    producto: productoSeleccionado
                },
                success: function(response) {
                    if (response === 'success') {
                        alert('El producto se ha eliminado correctamente.');
                        $("#divParaBorrarProducto").hide();
                    } else {
                        alert('No se ha podido eliminar el producto.');
                    }
                }
            });
        } else {
            alert('Has decidido no borrar el producto.');
        }
    });
});

/*----------------------------------------------------------------------------------------------------------------------------*/
/*Ver producto*/
$(document).ready(function() {
    $("#divVerProductos").click(function() {
        if ($("#divParaInsertar").is(":visible")) {
            $("#divParaInsertar").fadeOut();
            /*Limpiamos los input, select y checkbox*/
            $("#divParaInsertar input, #divParaInsertar select").val('');
            $("#divParaInsertar #checkboxes input[type='checkbox']").prop('checked', false);
        }

        if ($("#divParaInsertar").is(":visible")) {
            $("#divParaInsertar").fadeOut();
        }
        if ($("#VerTodosCamareros").is(":visible")) {
            $("#VerTodosCamareros").fadeOut();
        }
        if ($("#divParaCamarero").is(":visible")) {
            $("#divParaCamarero").fadeOut();
        }
        if ($("#divParaCambiarProducto").is(":visible")) {
            $("#divParaCambiarProducto").fadeOut();
            /*Limpiamos los input, select y checkbox*/
            $("#divParaCambiarProducto input, #divParaCambiarProducto select").val('');
            $("#divParaCambiarProducto #checkboxes input[type='checkbox']").prop('checked', false);
        }

        $("#divParaVerLosProductos").slideToggle();

        if ($("#divParaVerLosProductos").is(":visible")) {
            $.ajax({
                url: '../Controlador/ControladorObtenerCategorias.php',
                type: 'GET',
                success: function(response) {
                    var categorias = JSON.parse(response);
                    console.log(categorias)
                    var select = $("#CategoriaDisponibleVerProductos");
                    select.empty();

                    select.append(new Option("Seleccione la categoria", "nada"));

                    categorias.forEach(function(categoria) {
                        select.append(new Option(categoria, categoria));
                    });
                }
            });
        }
    });
});

$(document).ready(function() {
    $("#CategoriaDisponibleVerProductos").change(function() {
        var categoriaSeleccionada = $(this).val();
        var tabla = $("#todosProductos");

        if (categoriaSeleccionada == "nada") {
            tabla.empty();
        } else {
            $.ajax({
                url: '../Controlador/ControladorObtenerProductosPorCategoria.php',
                type: 'POST',
                data: {categoria: categoriaSeleccionada},
                success: function(response) {
                    var productos = JSON.parse(response);
                    tabla.empty();

                    var thead = $("<thead></thead>");
                    thead.append("<th>Nombre</th>");
                    thead.append("<th>Cantidad</th>");
                    thead.append("<th>Categoria</th>");
                    tabla.append(thead);

                    productos.forEach(function(producto) {
                        var tr = $("<tr></tr>");
                        tr.append("<td>" + producto.nombre + "</td>");
                        tr.append("<td>" + producto.cantidad + "</td>");
                        tr.append("<td>" + producto.categoria + "</td>");
                        tabla.append(tr);
                    });
                }
            });
        }
    });
});

/*----------------------------------------------------------------------------------------------------------------------------*/
/*Ver camareros*/
$(document).ready(function() {
    $("#divVerCamareros").click(function() {
        if ($("#divParaInsertar").is(":visible")) {
            $("#divParaInsertar").fadeOut();
            /*Limpiamos los input, select y checkbox*/
            $("#divParaInsertar input, #divParaInsertar select").val('');
            $("#divParaInsertar #checkboxes input[type='checkbox']").prop('checked', false);
        }

        if ($("#divParaBorrarProducto").is(":visible")) {
            $("#divParaBorrarProducto").fadeOut();
        }
        if ($("#divParaVerLosProductos").is(":visible")) {
            $("#divParaVerLosProductos").fadeOut();
            $("#todosProductos").empty();
        }
        if ($("#divParaCamarero").is(":visible")) {
            $("#divParaCamarero").fadeOut();
        }
        if ($("#divParaCambiarProducto").is(":visible")) {
            $("#divParaCambiarProducto").fadeOut();
            /*Limpiamos los input, select y checkbox*/
            $("#divParaCambiarProducto input, #divParaCambiarProducto select").val('');
            $("#divParaCambiarProducto #checkboxes input[type='checkbox']").prop('checked', false);
        }

        $("#VerTodosCamareros").slideToggle();

        if ($("#VerTodosCamareros").is(":visible")) {
            $.ajax({
                url: '../Controlador/ControladorObtenerCamareros.php',
                type: 'GET',
                success: function(response) {
                    var camareros = JSON.parse(response);
                    var tabla = $("#VerTodosCamarerosTabla");
                    tabla.empty();

                    var thead = $("<thead></thead>");
                    thead.append("<th>Nombre</th>");
                    thead.append("<th>Apellidos</th>");
                    thead.append("<th>Fecha de Nacimiento</th>");
                    thead.append("<th>Localidad</th>");
                    tabla.append(thead);

                    camareros.forEach(function(camarero) {
                        var tr = $("<tr></tr>");
                        tr.append("<td>" + camarero.nombre + "</td>");
                        tr.append("<td>" + camarero.apellidos + "</td>");
                        tr.append("<td>" + invertirFecha(camarero.fechaNacimiento) + "</td>");
                        tr.append("<td>" + camarero.localidad + "</td>");
                        tabla.append(tr);
                    });
                }
            });
        }
    });
});

/*Funcion para poder invertir la fecha y que salga en nuestro formato*/
function invertirFecha(fecha) {
    var partes = fecha.split('-');
    return partes[2] + '-' + partes[1] + '-' + partes[0];
}
/*----------------------------------------------------------------------------------------------------------------------------*/
/*Borrar Camarero*/
$(document).ready(function() {
    $("#divEliminarCamareros").click(function() {
        if ($("#divParaInsertar").is(":visible")) {
            $("#divParaInsertar").fadeOut();
            /*Limpiamos los input, select y checkbox*/
            $("#divParaInsertar input, #divParaInsertar select").val('');
            $("#divParaInsertar #checkboxes input[type='checkbox']").prop('checked', false);
        }

        if ($("#divParaBorrarProducto").is(":visible")) {
            $("#divParaBorrarProducto").fadeOut();
        }
        if ($("#divParaVerLosProductos").is(":visible")) {
            $("#divParaVerLosProductos").fadeOut();
            $("#todosProductos").empty();
        }
        if ($("#VerTodosCamareros").is(":visible")) {
            $("#VerTodosCamareros").fadeOut();
        }
        if ($("#divParaCambiarProducto").is(":visible")) {
            $("#divParaCambiarProducto").fadeOut();
            /*Limpiamos los input, select y checkbox*/
            $("#divParaCambiarProducto input, #divParaCambiarProducto select").val('');
            $("#divParaCambiarProducto #checkboxes input[type='checkbox']").prop('checked', false);
        }


        $("#divParaCamarero").slideToggle();

        if ($("#divParaCamarero").is(":visible")) {
            $.ajax({
                url: '../Controlador/ControladorCamareroMasCompleto.php',
                type: 'GET',
                dataType: 'json',
                success: function(data) {
                    $('#CamareroEliminar2').empty();
                    $.each(data, function(key, value) {
                        var fechaInvertida = invertirFecha(value.fechaNacimiento);
                        $('#CamareroEliminar2').append('<option value="' + value.id + '">' + value.nombre + ' ' + value.apellidos + ', nació en: ' + fechaInvertida + ', en la localidad: ' + value.localidad + ', en la provincia: ' + value.provincia + '</option>');
                    });
                }
            });
        }
    });
});

$(document).ready(function() {
    $("#botonBorrarCamarero").click(function(event) {
        event.preventDefault();
        var idCamarero = $("#CamareroEliminar2").val();

        var confirmacion = confirm('¿Deseas borrar el camarero definitivamente?');
        if (confirmacion) {
            $.ajax({
                url: '../Controlador/ControladorBorrarCamarero.php',
                type: 'POST',
                data: {id: idCamarero},
                success: function(response) {
                    var result = JSON.parse(response);
                    if (result.success) {
                        alert(result.message);
                        $("#divParaCamarero").hide();
                    } else {
                        alert(result.message);
                    }
                },
                error: function() {
                    alert("Hubo un error al eliminar el camarero");
                }
            });
        } else {
            alert('Has decidido no borrar el camarero.');
        }
    });
});





/*----------------------------------------------------------------------------------------------------------------------------*/
/*Editar Producto*/
$(document).ready(function() {
    $("#divEditarProducto").click(function() {
        if ($("#divParaInsertar").is(":visible")) {
            $("#divParaInsertar").fadeOut();
            /*Limpiamos los input, select y checkbox*/
            $("#divParaInsertar input, #divParaInsertar select").val('');
            $("#divParaInsertar #checkboxes input[type='checkbox']").prop('checked', false);
        }

        if ($("#divParaVerLosProductos").is(":visible")) {
            $("#divParaVerLosProductos").fadeOut();
            $("#todosProductos").empty();
        }
        if ($("#divParaBorrarProducto").is(":visible")) {
            $("#divParaBorrarProducto").fadeOut();
        }
        if ($("#VerTodosCamareros").is(":visible")) {
            $("#VerTodosCamareros").fadeOut();
        }
        if ($("#divParaCamarero").is(":visible")) {
            $("#divParaCamarero").fadeOut();
        }

        $("#divParaCambiarProducto").slideToggle();

        if ($("#divParaCambiarProducto").is(":visible")) {
            $.ajax({
                url: '../Controlador/ControladorObtenerProductos.php',
                type: 'GET',
                success: function(response) {
                    var productos = JSON.parse(response);
                    var select = $("#ProductoDisponibleEditar");
                    select.empty();
                    select.append(new Option("Seleccione el producto para editar", "nada"));

                    productos.forEach(function(producto) {
                        select.append(new Option(producto, producto));
                    });
                }
            });

            $.ajax({
                url: '../Controlador/ControladorObtenerCategorias.php',
                type: 'GET',
                success: function(response) {
                    var categorias = JSON.parse(response);
                    console.log(categorias)
                    var select = $("#CategoriaDisponibleEditar");
                    select.empty();

                    select.append(new Option("Seleccione la categoria", "nada"));

                    categorias.forEach(function(categoria) {
                        select.append(new Option(categoria, categoria));
                    });
                }
            });
        }
    });
});




$(document).ready(function() {
    $("#ProductoDisponibleEditar").change(function() {
        var productoSeleccionado = $(this).val();

        if (productoSeleccionado && productoSeleccionado != "nada") {
            $.ajax({
                url: '../Controlador/ControladorObtenerProductosEditar.php',
                type: 'POST',
                data: { producto: productoSeleccionado },
                success: function(response) {
                    if (response) {
                        var detallesProducto = JSON.parse(response);

                        // Rellena los campos con los detalles del producto
                        $("#NombreProductoEditar").val(detallesProducto.nombre);
                        $("#CantidadProductoEditar").val(detallesProducto.cantidad);
                        $("#PrecioProductoEditar").val(detallesProducto.precio);
                        $("#CategoriaDisponibleEditarTexto").text(detallesProducto.categoria);

                        // Marca los checkboxes de alergenos según los datos de la base de datos
                        var alergenos = detallesProducto.alergenos.split(',');  // Asume que los alergenos están separados por comas
                        for (var i = 1; i <= 13; i++) {
                            if (alergenos.includes($("#opcion" + i + "Editar").val())) {
                                $("#opcion" + i + "Editar").prop('checked', true);
                            } else {
                                $("#opcion" + i + "Editar").prop('checked', false);
                            }
                        }
                    }
                }
            });
        } else {
            // Limpia todos los campos si la opción seleccionada es "nada"
            $("#NombreProductoEditar").val("");
            $("#CantidadProductoEditar").val("");
            $("#PrecioProductoEditar").val("");
            $("#CategoriaDisponibleEditarTexto").text("");
            for (var i = 1; i <= 13; i++) {
                $("#opcion" + i + "Editar").prop('checked', false);
            }
        }
    });
});

$(document).ready(function() {
    $("#botonEditarProducto").click(function() {
        var nombreProducto = $("#NombreProductoEditar").val();
        var cantidadProducto = $("#CantidadProductoEditar").val();
        var precioProducto = $("#PrecioProductoEditar").val();
        var categoriaProducto = $("#CategoriaDisponibleEditar").val();
        var nombreOriginal = $("#ProductoDisponibleEditar").val();

        var alergenos = [];
        for (var i = 1; i <= 13; i++) {
            if ($("#opcion" + i + "Editar").prop('checked')) {
                alergenos.push($("#opcion" + i + "Editar").val());
            }
        }

        var alergenosStr = alergenos.join(',');

        var txtFile = $('#txtFile2').get(0).files[0];
        if (typeof txtFile === 'undefined') {
            txtFile = "nadaImagen";
        }


        /*Comprobacion de que no tiene coma la cantidad puesta*/
        if (precioProducto.includes(',')) {
            alert('Por favor, utiliza un punto en lugar de una coma para los decimales. Por ejemplo: 10.50€');
            return;
        }

        /*Comprobacion de no pone mas de dos decimales*/
        if (Math.floor(precioProducto * 100) != precioProducto * 100) {
            alert('El precio solo puede añadirse con dos decimales. Por ejemplo: 10.50€');
            return;
        }

        var formData = new FormData();
        formData.append('nombre', nombreProducto);
        formData.append('cantidad', cantidadProducto);
        formData.append('precio', precioProducto);
        formData.append('categoria', categoriaProducto);
        formData.append('alergenos', alergenosStr);
        formData.append('nombreAntiguo', nombreOriginal);
        formData.append('txtFile', txtFile);

        $.ajax({
            url: '../Controlador/ControladorEditarProductos.php',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                var data = JSON.parse(response);
                if (data.success) {
                    alert("Todo se cambió correctamente");
                    $("#NombreProductoEditar").val("");
                    $("#CantidadProductoEditar").val("");
                    $("#PrecioProductoEditar").val("");
                    $("#CategoriaDisponibleEditar").prop('selectedIndex', 0);
                    $("#CategoriaDisponibleEditarTexto").text("");
                    for (var i = 1; i <= 13; i++) {
                        $("#opcion" + i + "Editar").prop('checked', false);
                    }
                    $("#ProductoDisponibleEditar").prop('selectedIndex', 0);
                    $('#txtFile2').val('');
                } else {
                    alert(data.error);
                }
            }
        });
    });
});



/*----------------------------------------------------------------------------------------------------------------------------*/
/*Cerrar Sesion*/
$(document).ready(function() {
    $("#cerrarSesion").click(function() {
        $.ajax({
            type: "POST",
            url: "../Controlador/ControladorCerrarSesion.php",
            data: { Salir: true },
            success: function() {
                window.location.href = '../Vista/logueo.php';
            }
        });
    });
});