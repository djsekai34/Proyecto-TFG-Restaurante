function ocultartodosDiv() {
    var divs = ['divEntrantes', 'divBebida', 'divPescado', 'divCarne', 'divInfantil', 'divPostres'];
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');

    divs.forEach(function(divId) {
        var div = document.getElementById(divId);
        if (div.style.display === 'flex') {
            div.style.display = 'none';
            divImagenesMasNombre.style.display = 'flex';
        }
    });
}

document.getElementById('BotonEntrantes').addEventListener('click', function() {
    var divEntrantes = document.getElementById('divEntrantes');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    var todosDivPersonales = document.getElementById('TodosDivPersonales').children;

    if (divEntrantes.style.display === 'none') {
        ocultartodosDiv();
        divEntrantes.style.display = 'flex';
        divImagenesMasNombre.style.display = 'none';
    } else if (divEntrantes.style.display === 'flex') {
        divEntrantes.style.display = 'none';
        divImagenesMasNombre.style.display = 'flex';
        divNavegador.style.display= 'none';
    }

    // Añade otro if para verificar si algún div dentro de TodosDivPersonales está abierto
    for (var i = 0; i < todosDivPersonales.length; i++) {
        var divPersonal = document.getElementById(todosDivPersonales[i].id);
        if (divPersonal.style.display === 'block') {
            divPersonal.style.display = 'none';
            divEntrantes.style.display = 'flex';
            break;
        }
    }
});



document.getElementById('BotonBebida').addEventListener('click', function() {
    var divBebida = document.getElementById('divBebida');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    var todosDivPersonales = document.getElementById('TodosDivPersonales').children;

    if (divBebida.style.display === 'none') {
        ocultartodosDiv();
        divBebida.style.display = 'flex';
        divImagenesMasNombre.style.display = 'none';
    } else {
        divBebida.style.display = 'none';
        divImagenesMasNombre.style.display = 'flex';
        divNavegador.style.display= 'none';
    }

    for (var i = 0; i < todosDivPersonales.length; i++) {
        var divPersonal = document.getElementById(todosDivPersonales[i].id);
        if (divPersonal.style.display === 'block') {
            divPersonal.style.display = 'none';
            divBebida.style.display = 'flex';
            break;
        }
    }
});

document.getElementById('BotonPescado').addEventListener('click', function() {
    var divPescado = document.getElementById('divPescado');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    var todosDivPersonales = document.getElementById('TodosDivPersonales').children;

    if (divPescado.style.display === 'none') {
        ocultartodosDiv();
        divPescado.style.display = 'flex';
        divImagenesMasNombre.style.display = 'none';
    } else {
        divPescado.style.display = 'none';
        divImagenesMasNombre.style.display = 'flex';
        divNavegador.style.display= 'none'
    }

    for (var i = 0; i < todosDivPersonales.length; i++) {
        var divPersonal = document.getElementById(todosDivPersonales[i].id);
        if (divPersonal.style.display === 'block') {
            divPersonal.style.display = 'none';
            divPescado.style.display = 'flex';
            break;
        }
    }
});

document.getElementById('BotonCarne').addEventListener('click', function() {
    var divCarne = document.getElementById('divCarne');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    var todosDivPersonales = document.getElementById('TodosDivPersonales').children;


    if (divCarne.style.display === 'none') {
        ocultartodosDiv();
        divCarne.style.display = 'flex';
        divImagenesMasNombre.style.display = 'none';
    } else {
        divCarne.style.display = 'none';
        divImagenesMasNombre.style.display = 'flex';
        divNavegador.style.display= 'none'
    }

    for (var i = 0; i < todosDivPersonales.length; i++) {
        var divPersonal = document.getElementById(todosDivPersonales[i].id);
        if (divPersonal.style.display === 'block') {
            divPersonal.style.display = 'none';
            divCarne.style.display = 'flex';
            break;
        }
    }
});

document.getElementById('BotonInfantil').addEventListener('click', function() {
    var divInfantil = document.getElementById('divInfantil');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    var todosDivPersonales = document.getElementById('TodosDivPersonales').children;

    if (divInfantil.style.display === 'none') {
        ocultartodosDiv();
        divInfantil.style.display = 'flex';
        divImagenesMasNombre.style.display = 'none';
    } else {
        divInfantil.style.display = 'none';
        divImagenesMasNombre.style.display = 'flex';
        divNavegador.style.display= 'none'
    }

    for (var i = 0; i < todosDivPersonales.length; i++) {
        var divPersonal = document.getElementById(todosDivPersonales[i].id);
        if (divPersonal.style.display === 'block') {
            divPersonal.style.display = 'none';
            divInfantil.style.display = 'flex';
            break;
        }
    }
});

document.getElementById('BotonPostres').addEventListener('click', function() {
    var divPostres = document.getElementById('divPostres');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    var todosDivPersonales = document.getElementById('TodosDivPersonales').children;

    if (divPostres.style.display === 'none') {
        ocultartodosDiv();
        divPostres.style.display = 'flex';
        divImagenesMasNombre.style.display = 'none';
    } else {
        divPostres.style.display = 'none';
        divImagenesMasNombre.style.display = 'flex';
        divNavegador.style.display= 'none'
    }

    for (var i = 0; i < todosDivPersonales.length; i++) {
        var divPersonal = document.getElementById(todosDivPersonales[i].id);
        if (divPersonal.style.display === 'block') {
            divPersonal.style.display = 'none';
            divPostres.style.display = 'flex';
            break;
        }
    }
});

document.getElementById('BotonVolver').addEventListener('click', function() {
    var divsToClose = ['divBebida', 'divEntrantes', 'divPescado', 'divCarne', 'divInfantil', 'divPostres', 'divNavegador'];
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var todosDivPersonales = document.getElementById('TodosDivPersonales').children;

    // Cierra todos los divs en divsToClose
    for (var i = 0; i < divsToClose.length; i++) {
        var div = document.getElementById(divsToClose[i]);
        if (div.style.display !== 'none') {
            div.style.display = 'none';
        }
    }

    // Cierra cualquier div personal abierto
    for (var i = 0; i < todosDivPersonales.length; i++) {
        var divPersonal = todosDivPersonales[i];
        if (divPersonal.style.display === 'block' || divPersonal.style.display === 'flex') {
            divPersonal.style.display = 'none';
        }
    }

    // Muestra divImagenesMasNombre
    divImagenesMasNombre.style.display = 'flex';
});





/*--------------------------------------------------------------------------------------*/
/*Menu para cerrar sesiom y cerrar sesion*/
document.getElementById('botonSalir').addEventListener('click', function() {
    var menuSalir = document.getElementById('menuSalir');
    if (menuSalir.style.display === 'none') {
        menuSalir.style.display = 'block';
    } else {
        menuSalir.style.display = 'none';
    }
});

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


/*--------------------------------------------------------------------------------------*/
/*Para Cargar la mesa cuando hagamos la comanda*/

$(document).ready(function() {
    $.ajax({
        url: '../Controlador/controladorCargarMesaSinCapacidad.php',
        type: 'GET',
        success: function(data) {
            try {
                var mesas = data;
                $.each(mesas, function(index, mesa) {
                    $('#mesa').append('<option value="' + mesa.mesa + '">' + mesa.mesa + '</option>');
                });
            } catch (error) {
                console.error("Error al procesar la respuesta del servidor: ", error);
            }
        }
    });
});



$('#ApuntarComanda').click(function() {
    var producto = $('#tituloSeleccionado').text();
    var cantidad = $('#cantidadSeleccionada').text();
    var precio = $('#precioUnitario').text();
    var mesa = $('#mesa').val();

    producto = producto.replace(/<br\s*\/?>/g, ' ');

    producto = producto.replace(/conjamón/g, 'con jamón');
    producto = producto.replace(/jamóny/g, 'jamón y');
    producto = producto.replace(/hornocon/g, 'horno con');
    producto = producto.replace(/merluzay/g, 'merluza y');
    producto = producto.replace(/estilomurciano/g, 'estilo murciano');
    producto = producto.replace(/rapecon/g, 'rape con');
    producto = producto.replace(/decrema/g, 'de crema');
    producto = producto.replace(/espinacascon/g, 'espinacas con');
    producto = producto.replace(/planchacon/g, 'plancha con');
    producto = producto.replace(/aguacatey/g, 'aguacate y');
    producto = producto.replace(/riojana,con/g, 'riojana, con');
    producto = producto.replace(/depimientos/g, 'de pimientos');
    producto = producto.replace(/cerdoal/g, 'cerdo al');
    producto = producto.replace(/deternera/g, 'de ternera');
    producto = producto.replace(/salsacon/g, 'salsa con');
    producto = producto.replace(/conhuevos/g, 'con huevos');
    producto = producto.replace(/fritosy/g, 'fritos y');
    producto = producto.replace(/conpatatas/g, 'con patatas');
    producto = producto.replace(/rebozadocon/g, 'rebozado con');
    producto = producto.replace(/ala/g, 'a la');
    producto = producto.replace(/Flamenquincon/g, 'Flamenquin con');
    producto = producto.replace(/Jacoboscon/g, 'Jacobos con');
    producto = producto.replace(/dechocolate/g, 'de chocolate');
    producto = producto.replace(/Ca lamares/g, 'Calamares');
    $.ajax({
        url: '../Controlador/controladorApuntarComanda.php',
        type: 'POST',
        data: {
            producto: producto,
            cantidad: cantidad,
            precio: precio,
            mesa: mesa
        },
        success: function(response) {
            try {
                var data = JSON.parse(response);
                alert(data.message);
                $('#anadiraltxt').hide();
            } catch (e) {
                alert('Error al analizar los datos');
            }
        }
    });
});






document.getElementById('salirApuntar').addEventListener('click', function() {
    var anadiraltxt = document.getElementById('anadiraltxt');
    if (anadiraltxt.style.display === 'block') {
        anadiraltxt.style.display = 'none';
    } else {
        anadiraltxt.style.display = 'none';
    }
});


/*--------------------------------------------------------------------------------------------------------------------*/
/*JS para cobrar la comanda*/
$(document).ready(function() {
    $.ajax({
        url: '../Controlador/controladorCargarMesaSinCapacidad.php',
        type: 'GET',
        success: function(data) {
            try {
                var mesas = data;
                $.each(mesas, function(index, mesa) {
                    $('#mesaParaCobrar').append('<option value="' + mesa.mesa + '">' + mesa.mesa + '</option>');
                });
            } catch (error) {
                console.error("Error al procesar la respuesta del servidor: ", error);
            }
        }
    });
});

$(document).ready(function() {
    $('#cobrarComanda').click(function() {
        var mesaParaCobrar = $('#mesaParaCobrar').val();

        var fecha = new Date();
        var dia = String(fecha.getDate()).padStart(2, '0');
        var mes = String(fecha.getMonth() + 1).padStart(2, '0');
        var ano = fecha.getFullYear();
        var hora = String(fecha.getHours()).padStart(2, '0');
        var minuto = String(fecha.getMinutes()).padStart(2, '0');
        var segundo = String(fecha.getSeconds()).padStart(2, '0');

        var fechaHoy = dia + '-' + mes + '-' + ano;
        var horaActual = hora + '-' + minuto + '-' + segundo;

        var nombreArchivo = 'Comanda' + mesaParaCobrar + '_' + fechaHoy + '.txt';
        var nombreTicket = mesaParaCobrar;
        var fechaCobro = fechaHoy;

        $.ajax({
            url: '../Comanda/' + nombreArchivo,
            type: 'HEAD',
            error: function() {
                alert('No podemos cobrar nada de esta mesa ya que no han pedido');
            },
            success: function() {
                window.location.href = '../Vista/PaginaCobrar.php';
                /*LocalStorage es como $Session de javascript*/
                localStorage.setItem('nombreArchivo', nombreArchivo);
                localStorage.setItem('nombreTicket', nombreTicket);
                localStorage.setItem('fechaCobro', fechaCobro);
                localStorage.setItem('horaCobro', horaActual);
            }
        });
    });
});





document.getElementById('botoncarrito').addEventListener('click', function() {
    var sacarComanda = document.getElementById('sacarComanda');
    if (sacarComanda.style.display === 'none') {
        sacarComanda.style.display = 'block';
    } else {
        sacarComanda.style.display = 'none';
    }
});

/*----------------------------------------------------------------------------------------------------------------------------*/
/*Para sacar la  mesas con su capacidad*/
$(document).ready(function() {
    $.ajax({
        url: '../Controlador/controladorCargarMesas.php',
        type: 'GET',
        success: function(data) {
            try {
                var mesas = data;
                $.each(mesas, function(index, mesa) {
                    $('#mesaReservarSelect').append('<option value="' + mesa.mesa + '">' + mesa.mesa + ' con capacidad de: ' + mesa.capacidad + ' personas' + '</option>');
                });
            } catch (error) {
                console.error("Error al procesar la respuesta del servidor: ", error);
            }
        }
    });
});


document.getElementById('Reservar').addEventListener('click', function() {
    window.location.href = '../Vista/Reservar.php';
});


/*-------------------------------------------------------------------------------------------------------------------------------*/
/*Js para cambiar camarero*/
$("#cambiarCamarero").click(function() {
    $.ajax({
        url: '../Controlador/controladorMostrarCamareroNoUsado.php',
        type: 'POST',
        dataType: 'json',
        success: function(data) {
            var select = $("#camareroSelect");
            select.empty();
            $.each(data, function(index, value) {
                select.append('<option value="' + value + '">' + value + '</option>');
            });
            $("#NuevoCamarero").toggle();
        }
    });
});



$("#BotonCambiarCamarero").click(function() {
    var nuevoCamarero = $("#camareroSelect").val();
    $.ajax({
        url: '../Controlador/controladorMostrarCamareroNoUsado.php',
        type: 'POST',
        data: { 'nuevoCamarero': nuevoCamarero },
        success: function() {
            location.reload();
        }
    });
});


document.getElementById("Logo").addEventListener("click", function() {
    window.location.href = "../Vista/alergenos.php";
});


document.getElementById('tarjetaBebidasAbrir').addEventListener('click', function() {
    document.getElementById('divBebida').style.display = 'flex';
    document.getElementById('divNavegador').style.display = 'block';
    document.getElementById('imagenesMasNombre').style.display = 'none';
});

document.getElementById('tarjetaEntrantesAbrir').addEventListener('click', function() {
    document.getElementById('divEntrantes').style.display = 'flex';
    document.getElementById('divNavegador').style.display = 'block';
    document.getElementById('imagenesMasNombre').style.display = 'none';
});

document.getElementById('tarjetaPescadoAbrir').addEventListener('click', function() {
    document.getElementById('divPescado').style.display = 'flex';
    document.getElementById('divNavegador').style.display = 'block';
    document.getElementById('imagenesMasNombre').style.display = 'none';
});

document.getElementById('tarjetaCarneAbrir').addEventListener('click', function() {
    document.getElementById('divCarne').style.display = 'flex';
    document.getElementById('divNavegador').style.display = 'block';
    document.getElementById('imagenesMasNombre').style.display = 'none';
});

document.getElementById('tarjetaInfantilAbrir').addEventListener('click', function() {
    document.getElementById('divInfantil').style.display = 'flex';
    document.getElementById('divNavegador').style.display = 'block';
    document.getElementById('imagenesMasNombre').style.display = 'none';
});

document.getElementById('tarjetaPostresAbrir').addEventListener('click', function() {
    document.getElementById('divPostres').style.display = 'flex';
    document.getElementById('divNavegador').style.display = 'block';
    document.getElementById('imagenesMasNombre').style.display = 'none';
});

