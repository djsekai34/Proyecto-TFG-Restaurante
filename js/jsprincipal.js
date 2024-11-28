$(document).ready(function() {
    listarTodasProvincias();
    listarTodasLocalidades();
    listarTodasLasCalles();
});
$('#provincias').change(function() {
    listarTodasLocalidades();
});

$('#localidad').change(function() {
    listarTodasLasCalles();
});

function listarTodasProvincias() {
    $.ajax({
        url: '../Controlador/clienteSoap.php',
        method: 'GET',
        success: function(data, textStatus, jqXHR) {
            try {
                var jsonData = JSON.parse(jqXHR.responseText);
                if (Array.isArray(jsonData)) {
                    var select = $('#provincias');
                    select.empty();
                    select.append('<option value="">Seleccione una provincia</option>');
                    jsonData.forEach(function(provincia) {
                        if (provincia.hasOwnProperty('np')) {
                            select.append('<option value="' + provincia.np + '">' + provincia.np + '</option>');
                        }
                    });
                    listarTodasLocalidades();
                }
            } catch (error) {
                // No se muestra el error
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('Hubo un error al cargar las provincias: ' + textStatus + ', ' + errorThrown);
        }
    });
}
function listarTodasLocalidades() {
    var provincia = $('#provincias').val();
    console.log(provincia);
    if (provincia) {
        $.ajax({
            url: '../Controlador/clienteSoap.php',
            method: 'GET',
            data: { provincia: provincia },
            success: function(data, textStatus, jqXHR) {
                try {
                    var jsonData = JSON.parse(jqXHR.responseText);
                    if (jsonData.error) {
                        console.log('Error del servidor:', jsonData.error);
                    } else if (Array.isArray(jsonData)) {
                        var select = $('#localidad');
                        select.empty();
                        jsonData.forEach(function(municipio) {
                            if (municipio.hasOwnProperty('nm')) {
                                select.append('<option value="' + municipio.nm + '">' + municipio.nm + '</option>');
                            }
                        });
                        listarTodasLasCalles();
                    }
                } catch (error) {
                    console.log('Error al analizar la respuesta:', error);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('Hubo un error al cargar las provincias: ' + textStatus + ', ' + errorThrown);
            }
        });
    } else {
        $('#localidad').empty();
        $('#calle').empty();

    }
}



function listarTodasLasCalles() {
    var provincia = $('#provincias').val();
    var localidad = $('#localidad').val();


    if (provincia === 'CEUTA' || provincia === 'MELILLA') {
        localidadCM = provincia;
        $('#localidad').append('<option value="' + localidadCM + '">' + localidadCM + '</option>'); // Agrega la opción al select
    }

    if (provincia || localidad) {
        $.ajax({
            url: '../Controlador/clienteSoap.php',
            method: 'GET',
            data: { provincia: provincia,
                localidad: localidad},
            success: function(data, textStatus, jqXHR) {
                try {
                    var jsonData = JSON.parse(jqXHR.responseText);
                    if (jsonData.error) {
                        console.log('Error del servidor:', jsonData.error);
                    } else if (Array.isArray(jsonData)) {
                        var select = $('#calle');
                        select.empty();
                        jsonData.forEach(function(calles) {
                            if (calles.hasOwnProperty('nv') && calles.hasOwnProperty('tv')) {
                                select.append('<option value="' + calles.nv + '">' + calles.nv + " - "+ calles.tv + '</option>');
                            }
                        });
                    }
                } catch (error) {
                    console.log('Error al analizar la respuesta:', error);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('Hubo un error al cargar las provincias: ' + textStatus + ', ' + errorThrown);
            }
        });
    } else {
        $('#calle').empty();
    }
}



function validarFormulario() {
    var dni = document.getElementById("dni").value;
    var correo = document.getElementById("correo").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var telefono = document.getElementById("telefono").value;
    var dniPattern = /^[0-9]{8}[A-Za-z]$/;
    var correoPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!dniPattern.test(dni)) {
        alert("Formato de DNI válido: 8 números y 1 letra");
        return false;
    }
    if (!correoPattern.test(correo)) {
        alert("Formato de correo electrónico válido: debe contener un '@' y seguir el formato estándar de correo electrónico");
        return false;
    }

    return true;
}

