document.getElementById('postre1').addEventListener('click', function() {
    var divTartaWisky = document.getElementById('divTartaWisky');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divTartaWisky) {
        if (divTartaWisky.style.display === 'none') {
            ocultartodosDiv();
            divTartaWisky.style.display = 'block'
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralPO1 = document.getElementById('textoGeneralPO1').innerHTML.replace(/<br>/g, '');
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralPO1}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadPO1').innerText = '1';
                    } else {
                        document.getElementById('cantidadPO1').innerText = '0';
                    }
                }
            });
        }
    }

});

document.getElementById('postre2').addEventListener('click', function() {
    var divCafe = document.getElementById('divCafe');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divCafe) {
        if (divCafe.style.display === 'none') {
            ocultartodosDiv();
            divCafe.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralPO2 = document.getElementById('textoGeneralPO2').innerHTML.replace(/<br>/g, '');
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralPO2}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadPO2').innerText = '1';
                    } else {
                        document.getElementById('cantidadPO2').innerText = '0';
                    }
                }
            });
        }
    }
});

document.getElementById('postre3').addEventListener('click', function() {
    var divTartaQueso = document.getElementById('divTartaQueso');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divTartaQueso) {
        if (divTartaQueso.style.display === 'none') {
            ocultartodosDiv();
            divTartaQueso.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralPO3 = document.getElementById('textoGeneralPO3').innerHTML.replace(/<br>/g, '');
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralPO3}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadPO3').innerText = '1';
                    } else {
                        document.getElementById('cantidadPO3').innerText = '0';
                    }
                }
            });
        }
    }
});

document.getElementById('postre4').addEventListener('click', function() {
    var divMouse = document.getElementById('divMouse');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divMouse) {
        if (divMouse.style.display === 'none') {
            ocultartodosDiv();
            divMouse.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralPO4 = document.getElementById('textoGeneralPO4').innerHTML.replace(/<br>/g, '');
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralPO4}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadPO4').innerText = '1';
                    } else {
                        document.getElementById('cantidadPO4').innerText = '0';
                    }
                }
            });
        }
    }
});



document.getElementById('postre5').addEventListener('click', function() {
    var divTiramisu = document.getElementById('divTiramisu');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divTiramisu) {
        if (divTiramisu.style.display === 'none') {
            ocultartodosDiv();
            divTiramisu.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralPO5 = document.getElementById('textoGeneralPO5').innerHTML.replace(/<br>/g, '');
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralPO5}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadPO5').innerText = '1';
                    } else {
                        document.getElementById('cantidadPO5').innerText = '0';
                    }
                }
            });
        }
    }
});

/*--------------------------------------------------------------------------------------------------------------------------*/
/*BOTONES PARA SALIR*/
document.getElementById('botonsalirPO1').addEventListener('click', function() {
    var divTartaWisky = document.getElementById('divTartaWisky');
    var divPostres = document.getElementById('divPostres');
    if (divTartaWisky.style.display == 'block') {
        divTartaWisky.style.display = 'none';
        divPostres.style.display ='flex';
    }
});

document.getElementById('botonsalirPO2').addEventListener('click', function() {
    var divCafe = document.getElementById('divCafe');
    var divPostres = document.getElementById('divPostres');
    if (divCafe.style.display == 'block') {
        divCafe.style.display = 'none';
        divPostres.style.display ='flex';
    }
});

document.getElementById('botonsalirPO3').addEventListener('click', function() {
    var divTartaQueso = document.getElementById('divTartaQueso');
    var divPostres = document.getElementById('divPostres');
    if (divTartaQueso.style.display == 'block') {
        divTartaQueso.style.display = 'none';
        divPostres.style.display ='flex';
    }
});

document.getElementById('botonsalirPO4').addEventListener('click', function() {
    var divMouse = document.getElementById('divMouse');
    var divPostres = document.getElementById('divPostres');
    if (divMouse.style.display == 'block') {
        divMouse.style.display = 'none';
        divPostres.style.display ='flex';
    }
});


document.getElementById('botonsalirPO5').addEventListener('click', function() {
    var divTiramisu = document.getElementById('divTiramisu');
    var divPostres = document.getElementById('divPostres');
    if (divTiramisu.style.display == 'block') {
        divTiramisu.style.display = 'none';
        divPostres.style.display ='flex';
    }
});

/*--------------------------------------------------------------------------------------------------------------------------*/
/*BOTONES SUMAR*/
document.getElementById('botonsumarPO1').addEventListener('click', function() {
    var textoGeneralPO1 = document.getElementById('textoGeneralPO1').innerHTML.replace(/<br>/g, '');
    var cantidadPO1 = parseInt(document.getElementById('cantidadPO1').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadPO1 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralPO1 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralPO1}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadPO1 < cantidadMaxima) {
                document.getElementById('cantidadPO1').innerText = cantidadPO1 + 1;
            }
        }
    });
});


document.getElementById('botonsumarPO2').addEventListener('click', function() {
    var textoGeneralPO2 = document.getElementById('textoGeneralPO2').innerHTML.replace(/<br>/g, '');
    var cantidadPO2 = parseInt(document.getElementById('cantidadPO2').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadPO2 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralPO2 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralPO2}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadPO2 < cantidadMaxima) {
                document.getElementById('cantidadPO2').innerText = cantidadPO2 + 1;
            }
        }
    });
});

document.getElementById('botonsumarPO3').addEventListener('click', function() {
    var textoGeneralPO3 = document.getElementById('textoGeneralPO3').innerHTML.replace(/<br>/g, '');
    var cantidadPO3 = parseInt(document.getElementById('cantidadPO3').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadPO3 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralPO3 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralPO3}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadPO3 < cantidadMaxima) {
                document.getElementById('cantidadPO3').innerText = cantidadPO3 + 1;
            }
        }
    });
});

document.getElementById('botonsumarPO4').addEventListener('click', function() {
    var textoGeneralPO4 = document.getElementById('textoGeneralPO4').innerHTML.replace(/<br>/g, '');
    var cantidadPO4 = parseInt(document.getElementById('cantidadPO4').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadPO4 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralPO4 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralPO4}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadPO4 < cantidadMaxima) {
                document.getElementById('cantidadPO4').innerText = cantidadPO4 + 1;
            }
        }
    });
});


document.getElementById('botonsumarPO5').addEventListener('click', function() {
    var textoGeneralPO5 = document.getElementById('textoGeneralPO5').innerHTML.replace(/<br>/g, '');
    var cantidadPO5 = parseInt(document.getElementById('cantidadPO5').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadPO5 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralPO5 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralPO5}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadPO5 < cantidadMaxima) {
                document.getElementById('cantidadPO5').innerText = cantidadPO5 + 1;
            }
        }
    });
});

/*--------------------------------------------------------------------------------------------------------------------------*/
/*BOTONES RESTAR*/
document.getElementById('botonrestarPO1').addEventListener('click', function() {
    var textoGeneralPO1 = document.getElementById('textoGeneralPO1').innerHTML.replace(/<br>/g, '');
    var cantidadPO1 = parseInt(document.getElementById('cantidadPO1').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadPO1 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralPO1 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralPO1}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadPO1 <= cantidadMaxima && cantidadPO1 > 1) {
                document.getElementById('cantidadPO1').innerText = cantidadPO1 - 1;
            }
        }
    });
});


document.getElementById('botonrestarPO2').addEventListener('click', function() {
    var textoGeneralPO2 = document.getElementById('textoGeneralPO2').innerHTML.replace(/<br>/g, '');
    var cantidadPO2 = parseInt(document.getElementById('cantidadPO2').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadPO2 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralPO2 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralPO2}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadPO2 <= cantidadMaxima && cantidadPO2 > 1) {
                document.getElementById('cantidadPO2').innerText = cantidadPO2 - 1;
            }
        }
    });
});

document.getElementById('botonrestarPO3').addEventListener('click', function() {
    var textoGeneralPO3 = document.getElementById('textoGeneralPO3').innerHTML.replace(/<br>/g, '');
    var cantidadPO3 = parseInt(document.getElementById('cantidadPO3').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadPO3 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralPO3 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralPO3}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadPO3 <= cantidadMaxima && cantidadPO3 > 1) {
                document.getElementById('cantidadPO3').innerText = cantidadPO3 - 1;
            }
        }
    });
});

document.getElementById('botonrestarPO4').addEventListener('click', function() {
    var textoGeneralPO4 = document.getElementById('textoGeneralPO4').innerHTML.replace(/<br>/g, '');
    var cantidadPO4 = parseInt(document.getElementById('cantidadPO4').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadPO4 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralPO4 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralPO4}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadPO4 <= cantidadMaxima && cantidadPO4 > 1) {
                document.getElementById('cantidadPO4').innerText = cantidadPO4 - 1;
            }
        }
    });
});

document.getElementById('botonrestarPO5').addEventListener('click', function() {
    var textoGeneralPO5 = document.getElementById('textoGeneralPO5').innerHTML.replace(/<br>/g, '');
    var cantidadPO5 = parseInt(document.getElementById('cantidadPO5').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadPO5 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralPO5 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralPO5}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadPO5 <= cantidadMaxima && cantidadPO5 > 1) {
                document.getElementById('cantidadPO5').innerText = cantidadPO5 - 1;
            }
        }
    });
});




/*----------------------------------------------------------------------------------------------------------------------------------------*/
document.getElementById('addcarritoPO').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralPO1').innerText;
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadPO1').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioPO').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoPO2').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralPO2').innerText;
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadPO2').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioI2').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoPO3').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralPO3').innerText;
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadPO3').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioPO3').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoPO4').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralPO4').innerText
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadPO4').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioPO4').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoPO5').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralPO5').innerText;
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadPO5').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioPO5').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});