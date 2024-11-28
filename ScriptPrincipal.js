function ocultartodosDiv() {
    var divs = ['divEntrantes', 'divBebida', 'divPescado', 'divCarne', 'divInfantil', 'divPostres'];
    divs.forEach(function(divId) {
        var div = document.getElementById(divId);
        if (div.style.display === 'flex') {
            div.style.display = 'none';
        }
    });
}

document.getElementById('BotonEntrantes').addEventListener('click', function() {
    var divEntrantes = document.getElementById('divEntrantes');
    if (divEntrantes.style.display === 'none') {
        ocultartodosDiv();
        divEntrantes.style.display = 'flex';
    } else {
        divEntrantes.style.display = 'none';
    }
});

document.getElementById('BotonBebida').addEventListener('click', function() {
    var divBebida = document.getElementById('divBebida');
    if (divBebida.style.display === 'none') {
        ocultartodosDiv();
        divBebida.style.display = 'flex';
    } else {
        divBebida.style.display = 'none';
    }
});

document.getElementById('BotonPescado').addEventListener('click', function() {
    var divPescado = document.getElementById('divPescado');
    if (divPescado.style.display === 'none') {
        ocultartodosDiv();
        divPescado.style.display = 'flex';
    } else {
        divPescado.style.display = 'none';
    }
});

document.getElementById('BotonCarne').addEventListener('click', function() {
    var divCarne = document.getElementById('divCarne');
    if (divCarne.style.display === 'none') {
        ocultartodosDiv();
        divCarne.style.display = 'flex';
    } else {
        divCarne.style.display = 'none';
    }
});


document.getElementById('BotonInfantil').addEventListener('click', function() {
    var divInfantil = document.getElementById('divInfantil');
    if (divInfantil.style.display === 'none') {
        ocultartodosDiv();
        divInfantil.style.display = 'flex';
    } else {
        divInfantil.style.display = 'none';
    }
});


document.getElementById('BotonPostres').addEventListener('click', function() {
    var divPostres = document.getElementById('divPostres');
    if (divPostres.style.display === 'none') {
        ocultartodosDiv();
        divPostres.style.display = 'flex';
    } else {
        divPostres.style.display = 'none';
    }
});
/*--------------------------------------------------------------------------------------------------------------------*/
/*Abrir el div del Agua*/
    document.getElementById('bebida1').addEventListener('click', function() {
        var divAgua = document.getElementById('divAgua');
        if (divAgua) {
            if (divAgua.style.display === 'none' || divAgua.style.display === '') {
                ocultartodosDiv();
                divAgua.style.display = 'block';
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
    if (divAguaGas) {
        if (divAguaGas.style.display === 'none' || divAguaGas.style.display === '') {
            ocultartodosDiv();
            divAguaGas.style.display = 'block';
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
    if (divCocaCola) {
        if (divCocaCola.style.display === 'none' || divCocaCola.style.display === '') {
            ocultartodosDiv();
            divCocaCola.style.display = 'block';
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
    if (divNestea) {
        if (divNestea.style.display === 'none' || divNestea.style.display === '') {
            ocultartodosDiv();
            divNestea.style.display = 'block';
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
    if (divAquarius) {
        if (divAquarius.style.display === 'none' || divAquarius.style.display === '') {
            ocultartodosDiv();
            divAquarius.style.display = 'block';
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
    if (divFantaNaranja) {
        if (divFantaNaranja.style.display === 'none' || divFantaNaranja.style.display === '') {
            ocultartodosDiv();
            divFantaNaranja.style.display = 'block';
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
    if (divCocaColaZero) {
        if (divCocaColaZero.style.display === 'none' || divCocaColaZero.style.display === '') {
            ocultartodosDiv();
            divCocaColaZero.style.display = 'block';
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
    if (divFantaLimon) {
        if (divFantaLimon.style.display === 'none' || divFantaLimon.style.display === '') {
            ocultartodosDiv();
            divFantaLimon.style.display = 'block';
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
    if (divCerveza) {
        if (divCerveza.style.display === 'none' || divCerveza.style.display === '') {
            ocultartodosDiv();
            divCerveza.style.display = 'block';
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
    if (divVino) {
        if (divVino.style.display === 'none' || divVino.style.display === '') {
            ocultartodosDiv();
            divVino.style.display = 'block';
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
    if (divAgua.style.display == 'block') {
        divAgua.style.display = 'none';
    }
});

/*Para Salir en el div agua con gas*/
document.getElementById('botonsalir2').addEventListener('click', function() {
    var divAguaGas = document.getElementById('divAguaGas');
    if (divAguaGas.style.display == 'block') {
        divAguaGas.style.display = 'none';
    }
});

/*Para Salir en el div cocacola*/
document.getElementById('botonsalirR1').addEventListener('click', function() {
    var divCocaCola = document.getElementById('divCocaCola');
    if (divCocaCola.style.display == 'block') {
        divCocaCola.style.display = 'none';
    }
});
/*Para salir del div nestea*/
document.getElementById('botonsalirR2').addEventListener('click', function() {
    var divNestea = document.getElementById('divNestea');
    if (divNestea.style.display == 'block') {
        divNestea.style.display = 'none';
    }
});
/*Para salir con el div Aquiarius*/
document.getElementById('botonsalirR3').addEventListener('click', function() {
    var divAquarius = document.getElementById('divAquarius');
    if (divAquarius.style.display == 'block') {
        divAquarius.style.display = 'none';
    }
});

/*Para salir del div fanta naranja*/
document.getElementById('botonsalirR4').addEventListener('click', function() {
    var divFantaNaranja = document.getElementById('divFantaNaranja');
    if (divFantaNaranja.style.display == 'block') {
        divFantaNaranja.style.display = 'none';
    }
});

/*Para salir del div de la CocaCola Zero*/
document.getElementById('botonsalirR5').addEventListener('click', function() {
    var divCocaColaZero = document.getElementById('divCocaColaZero');
    if (divCocaColaZero.style.display == 'block') {
        divCocaColaZero.style.display = 'none';
    }
});

/*Para salir del div de la Fanta de Limon*/
document.getElementById('botonsalirR6').addEventListener('click', function() {
    var divFantaLimon = document.getElementById('divFantaLimon');
    if (divFantaLimon.style.display == 'block') {
        divFantaLimon.style.display = 'none';
    }
});

/*Para salir del div de la Cerveza*/
document.getElementById('botonsalirA1').addEventListener('click', function() {
    var divCerveza = document.getElementById('divCerveza');
    if (divCerveza.style.display == 'block') {
        divCerveza.style.display = 'none';
    }
});

/*Para salir del div del Vino*/
document.getElementById('botonsalirA2').addEventListener('click', function() {
    var divVino = document.getElementById('divVino');
    if (divVino.style.display == 'block') {
        divVino.style.display = 'none';
    }
});
/*------------------------------------------------------------------------------------------------------------------------*/
/*Cuando le demos al boton sumar en el div agua*/
document.getElementById('botonsumar').addEventListener('click', function() {
    var textoGeneral = document.getElementById('textoGeneral').innerText;
    var cantidadActual = parseInt(document.getElementById('cantidad').innerText, 10);
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
    var cantidadActual2 = parseInt(document.getElementById('cantidad2').innerText, 10);
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
    var cantidadR1 = parseInt(document.getElementById('cantidadR1').innerText, 10);
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
    var cantidadActual = parseInt(document.getElementById('cantidad').innerText, 10);

    // Comprueba si la cantidad actual es 0
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
    var cantidadActual2 = parseInt(document.getElementById('cantidad2').innerText, 10);

    // Comprueba si la cantidad actual es 0
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

    // Comprueba si la cantidad actual es 0
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

    // Comprueba si la cantidad actual es 0
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

    // Comprueba si la cantidad actual es 0
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

    // Comprueba si la cantidad actual es 0
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

    // Comprueba si la cantidad actual es 0
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

    // Comprueba si la cantidad actual es 0
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

    // Comprueba si la cantidad actual es 0
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

    // Comprueba si la cantidad actual es 0
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