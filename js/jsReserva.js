document.querySelector('input[name="FechaPedido"]').addEventListener('change', actualizarMesas);
document.getElementById('Tramohorario').addEventListener('change', actualizarMesas);

function actualizarMesas() {
    var fechaPedido = document.querySelector('input[name="FechaPedido"]').value;
    var tramoHorario = document.getElementById('Tramohorario').value;
    /*Si tenemos fecha de pedido y tramo horario el cual este no es seleccione entramos a hacer la peticion json y lo mostramos en el select*/
    if (fechaPedido && tramoHorario !== 'Seleccione') {
        fetch('../Controlador/controladorCargarMesasReserva.php', {
            method: 'POST',
            body: JSON.stringify({ FechaPedido: fechaPedido, Tramohorario: tramoHorario }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => {
                var select = document.getElementById('MesasDisponibles');
                select.innerHTML = '';
                data.forEach(function(mesa) {
                    var option = document.createElement('option');
                    option.value = mesa.mesa;
                    option.text = 'Mesa ' + mesa.mesa + ' (Capacidad: ' + mesa.capacidad + ')';
                    select.appendChild(option);
                });
            });
    }
}


document.getElementById('SiAmpliar').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('2Form').style.display = 'block';
        var fechaPedido = document.querySelector('input[name="FechaPedido"]').value;
        var tramoHorario = document.getElementById('Tramohorario').value;


        var data = {
            FechaPedido: fechaPedido,
            Tramohorario: tramoHorario
        };


        $.ajax({
            url: '../Controlador/ControladorMesasExtras.php',
            type: 'POST',
            data: data,
            success: function(response) {
                document.getElementById('cantidadmesa').innerText = response;
            }
        });
    }
});



document.getElementById('NoAmpliar').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('2Form').style.display = 'none';
    }
});


$(document).ready(function(){
    $("#HacerReserva").click(function(e){
        e.preventDefault();
        var nombreReserva = $("#nombreReserva").val();
        var TelfonoContacto = $("#TelfonoContacto").val();
        var FechaPedido = $("input[name='FechaPedido']").val();
        var Tramohorario = $("#Tramohorario").val();
        var MesasDisponibles = $("#MesasDisponibles").val();
        var mesaExtra = $("#mesaExtra").val() || 0;
        var cantidadMesa = parseInt($("#cantidadmesa").text());

        /*Comprobacion de que ha puesto el nombre y el telefono*/
        if (!nombreReserva && !TelfonoContacto) {
            if($("#VerReservas").is(':visible')){
                $("#VerReservas").hide();
                $("#FechaVerReserva").val('');
                $("#TodasLasReservas").empty();
            }
            if($("#CancelacionReserva").is(':visible')){
                $("#CancelacionReserva").hide();
            }
            $(".mensaje-error").text("Por favor, proporcione un nombre y un teléfono de contacto.");
            $(".mensaje-error").show();
            return;
        }

        /*Comprobacion de que ha puesto el nombre*/
        if (!nombreReserva) {
            if($("#VerReservas").is(':visible')){
                $("#VerReservas").hide();
                $("#FechaVerReserva").val('');
                $("#TodasLasReservas").empty();
            }
            if($("#CancelacionReserva").is(':visible')){
                $("#CancelacionReserva").hide();
            }
            $(".mensaje-error").text("Por favor, proporcione un nombre para la reserva.");
            $(".mensaje-error").show();
            return;
        }

        /*Comprobacion de que ha puesto el telefono*/
        if (!TelfonoContacto) {
            if($("#VerReservas").is(':visible')){
                $("#VerReservas").hide();
                $("#FechaVerReserva").val('');
                $("#TodasLasReservas").empty();
            }
            if($("#CancelacionReserva").is(':visible')){
                $("#CancelacionReserva").hide();
            }
            $(".mensaje-error").text("Por favor, proporcione un teléfono de contacto.");
            $(".mensaje-error").show();
            return;
        }

        /*Comprobacion de la capacidad extra*/
        if (mesaExtra > cantidadMesa) {
            if($("#VerReservas").is(':visible')){
                $("#VerReservas").hide();
                $("#FechaVerReserva").val('');
                $("#TodasLasReservas").empty();
            }
            if($("#CancelacionReserva").is(':visible')){
                $("#CancelacionReserva").hide();
            }
            $(".mensaje-error").text("La cantidad de sitios extras que me pide supera la capacidad que disponemos. Por favor, introduce un número menor.");
            $(".mensaje-error").show();
            return;
        }


        $.ajax({
            url: '../Controlador/ControladorHacerReserva.php',
            type: 'post',
            data: {
                nombreReserva: nombreReserva,
                TelfonoContacto: TelfonoContacto,
                FechaPedido: FechaPedido,
                Tramohorario: Tramohorario,
                MesasDisponibles: MesasDisponibles,
                mesaExtra: mesaExtra
            },
            success: function(response) {
                var data = JSON.parse(response);
                alert(data.message);
                if (data.status === 'success') {
                    window.location.href = '../Vista/PaginaPrincipal.php';
                }
            }
        });
    });
});

/*---------------------------------------------------------------------------------------------------------------------*/
$(document).ready(function(){
    $("#CancelarReserva").click(function(){
        if($("#VerReservas").is(':visible')){
            $("#VerReservas").hide();
            $("#FechaVerReserva").val('');
            $("#TodasLasReservas").empty();
        }
        if($(".mensaje-error").is(':visible')){
            $(".mensaje-error").hide();
        }
        $("#CancelacionReserva").toggle();
    });
});





document.querySelector('.FechaResevaCancelar').addEventListener('change', function() {
    var fecha = this.value;
    $('#TodasReservasNombre').empty();
    $.ajax({
        url: '../Controlador/obtenerUsuariosParaCancelar.php',
        type: 'POST',
        data: { fecha: fecha },
        dataType: 'json',
        success: function(usuarios) {
            var select = $('#TodasReservasNombreEsaFecha');
            select.empty();
            if (usuarios.length > 0) {
                select.append('<option value="nada">Seleccione una opción</option>');
                usuarios.forEach(function(usuario) {
                    select.append('<option value="' + usuario.nombre + '">' + usuario.nombre + '</option>');
                });
            } else {
                select.append('<option value="nada">No hay reservas en esa fecha</option>');
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('Error:', textStatus, errorThrown);
            console.log('Response:', jqXHR.responseText);
        }
    });
});


document.querySelector('#TodasReservasNombreEsaFecha').addEventListener('change', function() {
    var nombre = this.value;
    var fecha = document.querySelector('.FechaResevaCancelar').value;
    if (nombre !== 'nada') {
        $.ajax({
            url: '../Controlador/obtenerMesaConFechayNombre.php',
            type: 'POST',
            data: { nombre: nombre, fecha: fecha },
            dataType: 'json',
            success: function(mesas) {
                var select = $('#TodasReservasNombre');
                select.empty();
                if (mesas.length > 0) {
                    mesas.forEach(function(mesa) {
                        var capacidadTotal = parseInt(mesa.capacidad) + parseInt(mesa.capacidadextra);
                        select.append('<option value="' + mesa.mesa + '">Mesa: ' + mesa.mesa + ', Capacidad total: ' + capacidadTotal + '</option>');
                    });
                } else {
                    select.append('<option value="nadanombre">No hay mesas reservadas a este nombre en esta fecha</option>');
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('Error:', textStatus, errorThrown);
                console.log('Response:', jqXHR.responseText);
            }
        });
    }
});


$("#CancelarRerservasOficial").click(function() {
    var fechaReserva = $(".FechaResevaCancelar").val();
    var nombreReserva = $("#TodasReservasNombreEsaFecha").val();
    var mesaReserva = $("#TodasReservasNombre").val();

    /*Comprobacion de que la fecha no esta vacia*/
    if (fechaReserva === "") {
        alert("Por favor, ponga una fecha");
        return;
    }
    /*Comprobacion de que el nombre de la reserva no es nada*/
    if (nombreReserva === "nada") {
        alert("Por favor, seleccione un nombre para cancelar la reserva");
        return;
    }
    /*Comprobacion de la mesa reservada no es nadanombre*/
    if (mesaReserva === "nadanombre") {
        alert("No se puede eliminar ya que no hay reservas en esa fecha");
        return;
    }

    $.ajax({
        url: '../Controlador/ControladorCancelarReserva.php',
        type: 'POST',
        data: { fecha: fechaReserva, nombre: nombreReserva, mesa: mesaReserva },
        success: function(response) {
            alert("La reserva ha sido cancelada correctamente");
            $("#CancelacionReserva").hide();
        },
        error: function(error) {
            console.log(error);
        }
    });
});


/*-----------------------------------------------------------------------------------------------------------*/
$(document).ready(function(){
    $("input[name='FechaVerReserva']").change(function(){
        var fecha = $(this).val();
        $.ajax({
            url: '../Controlador/controladorVerReservasDisponibles.php',
            type: 'post',
            data: {fecha: fecha},
            success: function(response){
                if(response == "No hay reservas en la fecha que nos ha indicado"){
                    $("#NoReserva").html(response);
                    $("#TodasLasReservas").html("");
                }else{
                    $("#TodasLasReservas").html(response);
                    $("#NoReserva").html("");
                }
            }
        });
    });
});

$(document).ready(function(){
    $("#VerReserva").click(function(){
        if($("#CancelacionReserva").is(':visible')){
            $("#CancelacionReserva").hide();
        }
        if($(".mensaje-error").is(':visible')){
            $(".mensaje-error").hide();
        }
        $("#VerReservas").toggle();
    });
});

/*-----------------------------------------------------------------------------------------------------------*/
$("#BotonVolver").click(function() {
    window.location.href = '../Vista/PaginaPrincipal.php';
});
