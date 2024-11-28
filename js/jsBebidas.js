/*--------------------------------------------------------------------------------------------------------------------*/
/*Abrir el div del Agua*/
document.getElementById('bebida1').addEventListener('click', function() {
    var divAgua = document.getElementById('divAgua');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divAgua) {
        if (divAgua.style.display === 'none') {
            ocultartodosDiv();
            divAgua.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneral = document.getElementById('textoGeneral').innerText;
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneral}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidad').innerText = '1';
                    } else {
                        document.getElementById('cantidad').innerText = '0';
                    }
                }
            });
        }
    }

});


/*Abrir el div de agua con gas*/
document.getElementById('bebida2').addEventListener('click', function() {
    var divAguaGas = document.getElementById('divAguaGas');
    var divNavegador = document.getElementById('divNavegador');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    if (divAguaGas) {
        if (divAguaGas.style.display === 'none') {
            ocultartodosDiv();
            divAguaGas.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneral2 = document.getElementById('textoGeneral2').innerText;
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneral2}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidad2').innerText = '1';
                    } else {
                        document.getElementById('cantidad2').innerText = '0';
                    }
                }
            });
        }
    }
});


/*Abrir el div de la Coca Cola*/
document.getElementById('Refresco1').addEventListener('click', function() {
    var divCocaCola = document.getElementById('divCocaCola');
    var divNavegador = document.getElementById('divNavegador');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    if (divCocaCola) {
        if (divCocaCola.style.display === 'none') {
            ocultartodosDiv();
            divCocaCola.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralR1 = document.getElementById('textoGeneralR1').innerText;
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralR1}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadR1').innerText = '1';
                    } else {
                        document.getElementById('cantidadR1').innerText = '0';
                    }
                }
            });
        }
    }
});


/*Abrir el div de nestea*/
document.getElementById('Refresco2').addEventListener('click', function() {
    var divNestea = document.getElementById('divNestea');
    var divNavegador = document.getElementById('divNavegador');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    if (divNestea) {
        if (divNestea.style.display === 'none') {
            ocultartodosDiv();
            divNestea.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralR2 = document.getElementById('textoGeneralR2').innerText;
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralR2}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadR2').innerText = '1';
                    } else {
                        document.getElementById('cantidadR2').innerText = '0';
                    }
                }
            });
        }
    }
});


/*Abrir el div del Aquarius*/
document.getElementById('Refresco3').addEventListener('click', function() {
    var divAquarius = document.getElementById('divAquarius');
    var divNavegador = document.getElementById('divNavegador');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    if (divAquarius) {
        if (divAquarius.style.display === 'none') {
            ocultartodosDiv();
            divAquarius.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralR3 = document.getElementById('textoGeneralR3').innerText;
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralR3}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadR3').innerText = '1';
                    } else {
                        document.getElementById('cantidadR3').innerText = '0';
                    }
                }
            });
        }
    }
});


/*Abrir el div de la fanta de naranja*/
document.getElementById('Refresco4').addEventListener('click', function() {
    var divFantaNaranja = document.getElementById('divFantaNaranja');
    var divNavegador = document.getElementById('divNavegador');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    if (divFantaNaranja) {
        if (divFantaNaranja.style.display === 'none') {
            ocultartodosDiv();
            divFantaNaranja.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralR4 = document.getElementById('textoGeneralR4').innerText;
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralR4}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadR4').innerText = '1';
                    } else {
                        document.getElementById('cantidadR4').innerText = '0';
                    }
                }
            });
        }
    }
});

/*Abrir el div de la CocaCola Zero*/
document.getElementById('Refresco5').addEventListener('click', function() {
    var divCocaColaZero = document.getElementById('divCocaColaZero');
    var divNavegador = document.getElementById('divNavegador');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    if (divCocaColaZero) {
        if (divCocaColaZero.style.display === 'none') {
            ocultartodosDiv();
            divCocaColaZero.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralR5 = document.getElementById('textoGeneralR5').innerText;
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralR5}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadR5').innerText = '1';
                    } else {
                        document.getElementById('cantidadR5').innerText = '0';
                    }
                }
            });
        }
    }
});

/*Abrir el div de ls Fanta de Limon*/
document.getElementById('Refresco6').addEventListener('click', function() {
    var divFantaLimon = document.getElementById('divFantaLimon');
    var divNavegador = document.getElementById('divNavegador');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    if (divFantaLimon) {
        if (divFantaLimon.style.display === 'none') {
            ocultartodosDiv();
            divFantaLimon.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralR6 = document.getElementById('textoGeneralR6').innerText;
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralR6}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadR6').innerText = '1';
                    } else {
                        document.getElementById('cantidadR6').innerText = '0';
                    }
                }
            });
        }
    }
});

/*Abrir el div de la Cerveza*/
document.getElementById('Alcohol1').addEventListener('click', function() {
    var divCerveza = document.getElementById('divCerveza');
    var divNavegador = document.getElementById('divNavegador');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    if (divCerveza) {
        if (divCerveza.style.display === 'none') {
            ocultartodosDiv();
            divCerveza.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralA1 = document.getElementById('textoGeneralA1').innerText;
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralA1}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadA1').innerText = '1';
                    } else {
                        document.getElementById('cantidadA1').innerText = '0';
                    }
                }
            });
        }
    }
});

/*Abrir el div del Vino*/
document.getElementById('Alcohol2').addEventListener('click', function() {
    var divVino = document.getElementById('divVino');
    var divNavegador = document.getElementById('divNavegador');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    if (divVino) {
        if (divVino.style.display === 'none') {
            ocultartodosDiv();
            divVino.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralA2 = document.getElementById('textoGeneralA2').innerText;
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralA2}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadA2').innerText = '1';
                    } else {
                        document.getElementById('cantidadA2').innerText = '0';
                    }
                }
            });
        }
    }
});
/*-----------------------------------------------------------------------------------------------------------------------*/
/*Para Salir en el div agua*/
document.getElementById('botonsalir').addEventListener('click', function() {
    var divAgua = document.getElementById('divAgua');
    var divBebida = document.getElementById('divBebida');
    if (divAgua.style.display == 'block') {
        divAgua.style.display = 'none';
        divBebida.style.display ='flex';

    }
});

/*Para Salir en el div agua con gas*/
document.getElementById('botonsalir2').addEventListener('click', function() {
    var divAguaGas = document.getElementById('divAguaGas');
    var divBebida = document.getElementById('divBebida');
    if (divAguaGas.style.display == 'block') {
        divAguaGas.style.display = 'none';
        divBebida.style.display ='flex';
    }
});

/*Para Salir en el div cocacola*/
document.getElementById('botonsalirR1').addEventListener('click', function() {
    var divCocaCola = document.getElementById('divCocaCola');
    var divBebida = document.getElementById('divBebida');
    if (divCocaCola.style.display == 'block') {
        divCocaCola.style.display = 'none';
        divBebida.style.display ='flex';
    }
});
/*Para salir del div nestea*/
document.getElementById('botonsalirR2').addEventListener('click', function() {
    var divNestea = document.getElementById('divNestea');
    var divBebida = document.getElementById('divBebida');
    if (divNestea.style.display == 'block') {
        divNestea.style.display = 'none';
        divBebida.style.display ='flex';
    }
});
/*Para salir con el div Aquiarius*/
document.getElementById('botonsalirR3').addEventListener('click', function() {
    var divAquarius = document.getElementById('divAquarius');
    var divBebida = document.getElementById('divBebida');
    if (divAquarius.style.display == 'block') {
        divAquarius.style.display = 'none';
        divBebida.style.display ='flex';
    }
});

/*Para salir del div fanta naranja*/
document.getElementById('botonsalirR4').addEventListener('click', function() {
    var divFantaNaranja = document.getElementById('divFantaNaranja');
    var divBebida = document.getElementById('divBebida');
    if (divFantaNaranja.style.display == 'block') {
        divFantaNaranja.style.display = 'none';
        divBebida.style.display ='flex';
    }
});

/*Para salir del div de la CocaCola Zero*/
document.getElementById('botonsalirR5').addEventListener('click', function() {
    var divCocaColaZero = document.getElementById('divCocaColaZero');
    var divBebida = document.getElementById('divBebida');
    if (divCocaColaZero.style.display == 'block') {
        divCocaColaZero.style.display = 'none';
        divBebida.style.display ='flex';
    }
});

/*Para salir del div de la Fanta de Limon*/
document.getElementById('botonsalirR6').addEventListener('click', function() {
    var divFantaLimon = document.getElementById('divFantaLimon');
    var divBebida = document.getElementById('divBebida');
    if (divFantaLimon.style.display == 'block') {
        divFantaLimon.style.display = 'none';
        divBebida.style.display ='flex';
    }
});

/*Para salir del div de la Cerveza*/
document.getElementById('botonsalirA1').addEventListener('click', function() {
    var divCerveza = document.getElementById('divCerveza');
    var divBebida = document.getElementById('divBebida');
    if (divCerveza.style.display == 'block') {
        divCerveza.style.display = 'none';
        divBebida.style.display ='flex';
    }
});

/*Para salir del div del Vino*/
document.getElementById('botonsalirA2').addEventListener('click', function() {
    var divVino = document.getElementById('divVino');
    var divBebida = document.getElementById('divBebida');
    if (divVino.style.display == 'block') {
        divVino.style.display = 'none';
        divBebida.style.display ='flex';
    }
});
/*------------------------------------------------------------------------------------------------------------------------*/
/*Cuando le demos al boton sumar en el div agua*/
document.getElementById('botonsumar').addEventListener('click', function() {
    var textoGeneral = document.getElementById('textoGeneral').innerText;
    /*Lo pasamos a decimal la cadena de texto*/
    var cantidadActual = parseInt(document.getElementById('cantidad').innerText, 10);
    /*Comporbacion de que no es 0 la cantidad actual*/
    if (cantidadActual === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneral + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneral}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadActual < cantidadMaxima) {
                document.getElementById('cantidad').innerText = cantidadActual + 1;
            }
        }
    });
});
/*Cuando le demos al boton sumar en el div agua con gas*/
document.getElementById('botonsumar2').addEventListener('click', function() {
    var textoGeneral2 = document.getElementById('textoGeneral2').innerText;
    /*Lo pasamos a decimal la cadena de texto*/
    var cantidadActual2 = parseInt(document.getElementById('cantidad2').innerText, 10);
    /*Comporbacion de que no es 0 la cantidad actual*/
    if (cantidadActual2 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneral2 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }

    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneral2}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadActual2 < cantidadMaxima) {
                document.getElementById('cantidad2').innerText = cantidadActual2 + 1;
            }
        }
    });
});

/*Cuando le demos al boton sumar en el div Coca Cola*/
document.getElementById('botonsumarR1').addEventListener('click', function() {
    var textoGeneralR1 = document.getElementById('textoGeneralR1').innerText;
    /*Lo pasamos a decimal la cadena de texto*/
    var cantidadR1 = parseInt(document.getElementById('cantidadR1').innerText, 10);
    /*Comporbacion de que no es 0 la cantidad actual*/
    if (cantidadR1 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralR1 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }

    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralR1}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadR1 < cantidadMaxima) {
                document.getElementById('cantidadR1').innerText = cantidadR1 + 1;
            }
        }
    });
});


/*Cuando le demos al boton sumar en el div Nestea*/
document.getElementById('botonsumarR2').addEventListener('click', function() {
    var textoGeneralR2 = document.getElementById('textoGeneralR2').innerText;
    var cantidadR2 = parseInt(document.getElementById('cantidadR2').innerText, 10);
    if (cantidadR2 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralR2 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }

    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralR2}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadR2 < cantidadMaxima) {
                document.getElementById('cantidadR2').innerText = cantidadR2 + 1;
            }
        }
    });
});

/*Cuando le demos al boton sumar en el div Aquarius*/
document.getElementById('botonsumarR3').addEventListener('click', function() {
    var textoGeneralR3 = document.getElementById('textoGeneralR3').innerText;
    var cantidadR3 = parseInt(document.getElementById('cantidadR3').innerText, 10);
    if (cantidadR3 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralR3 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }

    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralR3}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadR3 < cantidadMaxima) {
                document.getElementById('cantidadR3').innerText = cantidadR3 + 1;
            }
        }
    });
});


/*Cuando le demos al boton sumar en el div Fanta Naranja*/
document.getElementById('botonsumarR4').addEventListener('click', function() {
    var textoGeneralR4 = document.getElementById('textoGeneralR4').innerText;
    var cantidadR4 = parseInt(document.getElementById('cantidadR4').innerText, 10);
    if (cantidadR4 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralR4 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }

    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralR4}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadR4 < cantidadMaxima) {
                document.getElementById('cantidadR4').innerText = cantidadR4 + 1;
            }
        }
    });
});

/*Cuando le demos al boton sumar en el div de la CocaCola zero*/
document.getElementById('botonsumarR5').addEventListener('click', function() {
    var textoGeneralR5 = document.getElementById('textoGeneralR5').innerText;
    var cantidadR5 = parseInt(document.getElementById('cantidadR5').innerText, 10);
    if (cantidadR5 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralR5 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }

    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralR5}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadR5 < cantidadMaxima) {
                document.getElementById('cantidadR5').innerText = cantidadR5 + 1;
            }
        }
    });
});

/*Cuando le demos al boton sumar en el div de la Fanta de limon*/
document.getElementById('botonsumarR6').addEventListener('click', function() {
    var textoGeneralR6 = document.getElementById('textoGeneralR6').innerText;
    var cantidadR6 = parseInt(document.getElementById('cantidadR6').innerText, 10);
    if (cantidadR6 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralR6 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }

    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralR6}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadR6 < cantidadMaxima) {
                document.getElementById('cantidadR6').innerText = cantidadR6 + 1;
            }
        }
    });
});


/*Cuando le demos al boton sumar en el div de la Cerveza*/
document.getElementById('botonsumarA1').addEventListener('click', function() {
    var textoGeneralA1 = document.getElementById('textoGeneralA1').innerText;
    var cantidadA1 = parseInt(document.getElementById('cantidadA1').innerText, 10);
    if (cantidadA1 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralA1 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }

    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralA1}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadA1 < cantidadMaxima) {
                document.getElementById('cantidadA1').innerText = cantidadA1 + 1;
            }
        }
    });
});

/*Cuando le demos al boton sumar en el div del Vino*/
document.getElementById('botonsumarA2').addEventListener('click', function() {
    var textoGeneralA2 = document.getElementById('textoGeneralA2').innerText;
    var cantidadA2 = parseInt(document.getElementById('cantidadA2').innerText, 10);
    if (cantidadA2 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralA2 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }

    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralA2}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadA2 < cantidadMaxima) {
                document.getElementById('cantidadA2').innerText = cantidadA2 + 1;
            }
        }
    });
});
/*-------------------------------------------------------------------------------------------------------------------------------------*/
/*Cuando le demos al boton restar en el div del agua*/
document.getElementById('botonrestar').addEventListener('click', function() {
    var textoGeneral = document.getElementById('textoGeneral').innerText;
    /*Lo pasamos a decimal la cadena de texto*/
    var cantidadActual = parseInt(document.getElementById('cantidad').innerText, 10);
    /*Comporbacion de que no es 0 la cantidad actual*/
    if (cantidadActual === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneral + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneral}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadActual <= cantidadMaxima && cantidadActual > 1) {
                document.getElementById('cantidad').innerText = cantidadActual - 1;
            }
        }
    });
});

/*Cuando le demos al boton restar en el div del agua con gas*/
document.getElementById('botonrestar2').addEventListener('click', function() {
    var textoGeneral2 = document.getElementById('textoGeneral2').innerText;
    /*Lo pasamos a decimal la cadena de texto*/
    var cantidadActual2 = parseInt(document.getElementById('cantidad2').innerText, 10);
    /*Comporbacion de que no es 0 la cantidad actual*/
    if (cantidadActual2 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneral2 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }

    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneral2}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadActual2 <= cantidadMaxima && cantidadActual2 > 1) {
                document.getElementById('cantidad2').innerText = cantidadActual2 - 1;
            }
        }
    });
});


/*Cuando le demos al boton restar en el div de la CocaCola*/
document.getElementById('botonrestarR1').addEventListener('click', function() {
    var textoGeneralR1 = document.getElementById('textoGeneralR1').innerText;
    var cantidadR1 = parseInt(document.getElementById('cantidadR1').innerText, 10);
    /*Comporbacion de que no es 0 la cantidad actual*/
    if (cantidadR1 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralR1 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }

    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralR1}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadR1 <= cantidadMaxima && cantidadR1 > 1) {
                document.getElementById('cantidadR1').innerText = cantidadR1 - 1;
            }
        }
    });
});


/*Cuando le demos al boton restar en el div de Nestea*/
document.getElementById('botonrestarR2').addEventListener('click', function() {
    var textoGeneralR2 = document.getElementById('textoGeneralR2').innerText;
    var cantidadR2 = parseInt(document.getElementById('cantidadR2').innerText, 10);
    /*Comporbacion de que no es 0 la cantidad actual*/
    if (cantidadR2 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralR2 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }

    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralR2}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadR2 <= cantidadMaxima && cantidadR2 > 1) {
                document.getElementById('cantidadR2').innerText = cantidadR2 - 1;
            }
        }
    });
});


/*Cuando le demos al boton restar en el div de Aquiarius*/
document.getElementById('botonrestarR3').addEventListener('click', function() {
    var textoGeneralR3 = document.getElementById('textoGeneralR3').innerText;
    var cantidadR3 = parseInt(document.getElementById('cantidadR3').innerText, 10);
    /*Comporbacion de que no es 0 la cantidad actual*/
    if (cantidadR3 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralR3 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }

    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralR3}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadR3 <= cantidadMaxima && cantidadR3 > 1) {
                document.getElementById('cantidadR3').innerText = cantidadR3 - 1;
            }
        }
    });
});


/*Cuando le demos al boton restar en el div de la fanta de naranja*/
document.getElementById('botonrestarR4').addEventListener('click', function() {
    var textoGeneralR4 = document.getElementById('textoGeneralR4').innerText;
    var cantidadR4 = parseInt(document.getElementById('cantidadR4').innerText, 10);
    /*Comporbacion de que no es 0 la cantidad actual*/
    if (cantidadR4 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralR4 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }

    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralR4}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadR4 <= cantidadMaxima && cantidadR4 > 1) {
                document.getElementById('cantidadR4').innerText = cantidadR4 - 1;
            }
        }
    });
});

/*Cuando le demos al boton restar en el div de la CocaCola Zero*/
document.getElementById('botonrestarR5').addEventListener('click', function() {
    var textoGeneralR5 = document.getElementById('textoGeneralR5').innerText;
    var cantidadR5 = parseInt(document.getElementById('cantidadR5').innerText, 10);
    /*Comporbacion de que no es 0 la cantidad actual*/
    if (cantidadR5 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralR5 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }

    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralR5}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadR5 <= cantidadMaxima && cantidadR5 > 1) {
                document.getElementById('cantidadR5').innerText = cantidadR5 - 1;
            }
        }
    });
});

/*Cuando le demos al boton restar en el div de la Fanta de Naranja*/
document.getElementById('botonrestarR6').addEventListener('click', function() {
    var textoGeneralR6 = document.getElementById('textoGeneralR6').innerText;
    var cantidadR6 = parseInt(document.getElementById('cantidadR6').innerText, 10);
    /*Comporbacion de que no es 0 la cantidad actual*/
    if (cantidadR6 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralR6 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }

    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralR6}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadR6 <= cantidadMaxima && cantidadR6 > 1) {
                document.getElementById('cantidadR6').innerText = cantidadR6 - 1;
            }
        }
    });
});

/*Cuando le demos al boton restar en el div de la Cerveza*/
document.getElementById('botonrestarA1').addEventListener('click', function() {
    var textoGeneralA1 = document.getElementById('textoGeneralA1').innerText;
    var cantidadA1 = parseInt(document.getElementById('cantidadA1').innerText, 10);
    /*Comporbacion de que no es 0 la cantidad actual*/
    if (cantidadA1 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralA1 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }

    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralA1}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadA1 <= cantidadMaxima && cantidadA1 > 1) {
                document.getElementById('cantidadA1').innerText = cantidadA1 - 1;
            }
        }
    });
});

/*Cuando le demos al boton restar en el div del Vino*/
document.getElementById('botonrestarA2').addEventListener('click', function() {
    var textoGeneralA2 = document.getElementById('textoGeneralA2').innerText;
    var cantidadA2 = parseInt(document.getElementById('cantidadA2').innerText, 10);
    /*Comporbacion de que no es 0 la cantidad actual*/
    if (cantidadA2 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralA2 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }

    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralA2}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadA2 <= cantidadMaxima && cantidadA2 > 1) {
                document.getElementById('cantidadA2').innerText = cantidadA2 - 1;
            }
        }
    });
});


/*--------------------------------------------------------------------------------------------------------------------------------------------*/
/*Para abrir la comanda agua sin gas*/
document.getElementById('addcarrito').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneral').innerHTML.replace(/<br>/g, '');
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidad').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precio').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarrito2').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneral2').innerHTML.replace(/<br>/g, '');
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidad2').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precio2').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarrito3').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralR1').innerHTML.replace(/<br>/g, '');
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadR1').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precio3').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarrito4').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralR2').innerHTML.replace(/<br>/g, '');
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadR2').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precio4').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarrito5').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralR3').innerHTML.replace(/<br>/g, '');
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadR3').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precio5').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarrito6').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralR4').innerHTML.replace(/<br>/g, '');
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadR4').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precio6').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarrito7').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralR5').innerHTML.replace(/<br>/g, '');
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadR5').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precio7').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarrito8').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralR6').innerHTML.replace(/<br>/g, '');
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadR6').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precio8').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarrito9').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralA1').innerHTML.replace(/<br>/g, '');
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadA1').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precio9').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarrito10').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralA2').innerHTML.replace(/<br>/g, '');
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadA2').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precio10').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});
