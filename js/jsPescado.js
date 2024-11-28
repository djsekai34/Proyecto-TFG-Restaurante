document.getElementById('pescado1').addEventListener('click', function() {
    var divLubina = document.getElementById('divLubina');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divLubina) {
        if (divLubina.style.display === 'none' || divLubina.style.display === '') {
            ocultartodosDiv();
            divLubina.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralP1 = document.getElementById('textoGeneralP1').innerHTML.replace(/<br>/g, '');
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralP1}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadP1').innerText = '1';
                    } else {
                        document.getElementById('cantidadP1').innerText = '0';
                    }
                }
            });
        }
    }

});

document.getElementById('pescado2').addEventListener('click', function() {
    var divBacalado = document.getElementById('divBacalado');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divBacalado) {
        if (divBacalado.style.display === 'none' || divBacalado.style.display === '') {
            ocultartodosDiv();
            divBacalado.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralP2 = document.getElementById('textoGeneralP2').innerText;
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralP2}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadP2').innerText = '1';
                    } else {
                        document.getElementById('cantidadP2').innerText = '0';
                    }
                }
            });
        }
    }
});

document.getElementById('pescado3').addEventListener('click', function() {
    var divBesugo = document.getElementById('divBesugo');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divBesugo) {
        if (divBesugo.style.display === 'none' || divBesugo.style.display === '') {
            ocultartodosDiv();
            divBesugo.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralP3 = document.getElementById('textoGeneralP3').innerText;
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralP3}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadP3').innerText = '1';
                    } else {
                        document.getElementById('cantidadP3').innerText = '0';
                    }
                }
            });
        }
    }
});

document.getElementById('pescado4').addEventListener('click', function() {
    var divMurciano = document.getElementById('divMurciano');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divMurciano) {
        if (divMurciano.style.display === 'none' || divMurciano.style.display === '') {
            ocultartodosDiv();
            divMurciano.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralP4 = document.getElementById('textoGeneralP4').innerHTML.replace(/<br>/g, '');
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralP4}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadP4').innerText = '1';
                    } else {
                        document.getElementById('cantidadP4').innerText = '0';
                    }
                }
            });
        }
    }
});



document.getElementById('pescado5').addEventListener('click', function() {
    var divAlbondigaRape = document.getElementById('divAlbondigaRape');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divAlbondigaRape) {
        if (divAlbondigaRape.style.display === 'none') {
            ocultartodosDiv();
            divAlbondigaRape.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralP5 = document.getElementById('textoGeneralP5').innerHTML.replace(/<br>/g, '');
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralP5}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadP5').innerText = '1';
                    } else {
                        document.getElementById('cantidadP5').innerText = '0';
                    }
                }
            });
        }
    }
});

document.getElementById('pescado6').addEventListener('click', function() {
    var divSalmoRelleno = document.getElementById('divSalmoRelleno');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divSalmoRelleno) {
        if (divSalmoRelleno.style.display === 'none') {
            ocultartodosDiv();
            divSalmoRelleno.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralP6 = document.getElementById('textoGeneralP6').innerHTML.replace(/<br>/g, '');
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralP6}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadP6').innerText = '1';
                    } else {
                        document.getElementById('cantidadP6').innerText = '0';
                    }
                }
            });
        }
    }
});

document.getElementById('pescado7').addEventListener('click', function() {
    var divAtunPlancha = document.getElementById('divAtunPlancha');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divAtunPlancha) {
        if (divAtunPlancha.style.display === 'none' || divAtunPlancha.style.display === '') {
            ocultartodosDiv();
            divAtunPlancha.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralP7 = document.getElementById('textoGeneralP7').innerHTML.replace(/<br>/g, '');
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralP7}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadP7').innerText = '1';
                    } else {
                        document.getElementById('cantidadP7').innerText = '0';
                    }
                }
            });
        }
    }
});

document.getElementById('pescado8').addEventListener('click', function() {
    var divBacaladoRioja = document.getElementById('divBacaladoRioja');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divBacaladoRioja) {
        if (divBacaladoRioja.style.display === 'none') {
            ocultartodosDiv();
            divBacaladoRioja.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralP8 = document.getElementById('textoGeneralP8').innerHTML.replace(/<br>/g, '');
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralP8}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadP8').innerText = '1';
                    } else {
                        document.getElementById('cantidadP8').innerText = '0';
                    }
                }
            });
        }
    }
});
/*--------------------------------------------------------------------------------------------------------------------------*/
/*BOTONES PARA SALIR*/
document.getElementById('botonsalirP1').addEventListener('click', function() {
    var divLubina = document.getElementById('divLubina');
    var divPescado = document.getElementById('divPescado');
    if (divLubina.style.display == 'block') {
        divLubina.style.display = 'none';
        divPescado.style.display ='flex';
    }
});

document.getElementById('botonsalirP2').addEventListener('click', function() {
    var divBacalado = document.getElementById('divBacalado');
    var divPescado = document.getElementById('divPescado');
    if (divBacalado.style.display == 'block') {
        divBacalado.style.display = 'none';
        divPescado.style.display ='flex';
    }
});

document.getElementById('botonsalirP3').addEventListener('click', function() {
    var divBesugo = document.getElementById('divBesugo');
    var divPescado = document.getElementById('divPescado');
    if (divBesugo.style.display == 'block') {
        divBesugo.style.display = 'none';
        divPescado.style.display ='flex';
    }
});

document.getElementById('botonsalirP4').addEventListener('click', function() {
    var divMurciano = document.getElementById('divMurciano');
    var divPescado = document.getElementById('divPescado');
    if (divMurciano.style.display == 'block') {
        divMurciano.style.display = 'none';
        divPescado.style.display ='flex';
    }
});


document.getElementById('botonsalirP5').addEventListener('click', function() {
    var divAlbondigaRape = document.getElementById('divAlbondigaRape');
    var divPescado = document.getElementById('divPescado');
    if (divAlbondigaRape.style.display == 'block') {
        divAlbondigaRape.style.display = 'none';
        divPescado.style.display ='flex';
    }
});

document.getElementById('botonsalirP6').addEventListener('click', function() {
    var divSalmoRelleno = document.getElementById('divSalmoRelleno');
    var divPescado = document.getElementById('divPescado');
    if (divSalmoRelleno.style.display == 'block') {
        divSalmoRelleno.style.display = 'none';
        divPescado.style.display ='flex';
    }
});

document.getElementById('botonsalirP7').addEventListener('click', function() {
    var divAtunPlancha = document.getElementById('divAtunPlancha');
    var divPescado = document.getElementById('divPescado');
    if (divAtunPlancha.style.display == 'block') {
        divAtunPlancha.style.display = 'none';
        divPescado.style.display ='flex';

    }
});

document.getElementById('botonsalirP8').addEventListener('click', function() {
    var divBacaladoRioja = document.getElementById('divBacaladoRioja');
    var divPescado = document.getElementById('divPescado');
    if (divBacaladoRioja.style.display == 'block') {
        divBacaladoRioja.style.display = 'none';
        divPescado.style.display ='flex';

    }
});
/*--------------------------------------------------------------------------------------------------------------------------*/
/*BOTONES SUMAR*/
document.getElementById('botonsumarP1').addEventListener('click', function() {
    var textoGeneralP1 = document.getElementById('textoGeneralP1').innerHTML.replace(/<br>/g, '');
    var cantidadP1 = parseInt(document.getElementById('cantidadP1').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadP1 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralP1 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralP1}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadP1 < cantidadMaxima) {
                document.getElementById('cantidadP1').innerText = cantidadP1 + 1;
            }
        }
    });
});


document.getElementById('botonsumarP2').addEventListener('click', function() {
    var textoGeneralP2 = document.getElementById('textoGeneralP2').innerText;
    var cantidadP2 = parseInt(document.getElementById('cantidadP2').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadP2 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralP2 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralP2}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadP2 < cantidadMaxima) {
                document.getElementById('cantidadP2').innerText = cantidadP2 + 1;
            }
        }
    });
});

document.getElementById('botonsumarP3').addEventListener('click', function() {
    var textoGeneralP3 = document.getElementById('textoGeneralP3').innerText;
    var cantidadP3 = parseInt(document.getElementById('cantidadP3').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadP3 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralP3 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralP3}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadP3 < cantidadMaxima) {
                document.getElementById('cantidadP3').innerText = cantidadP3 + 1;
            }
        }
    });
});

document.getElementById('botonsumarP4').addEventListener('click', function() {
    var textoGeneralP4 = document.getElementById('textoGeneralP4').innerHTML.replace(/<br>/g, '');
    console.log(textoGeneralP4)
    var cantidadP4 = parseInt(document.getElementById('cantidadP4').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadP4 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralP4 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralP4}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadP4 < cantidadMaxima) {
                document.getElementById('cantidadP4').innerText = cantidadP4 + 1;
            }
        }
    });
});


document.getElementById('botonsumarP5').addEventListener('click', function() {
    var textoGeneralP5 = document.getElementById('textoGeneralP5').innerHTML.replace(/<br>/g, '');
    var cantidadP5 = parseInt(document.getElementById('cantidadP5').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadP5 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralP5 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralP5}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadP5 < cantidadMaxima) {
                document.getElementById('cantidadP5').innerText = cantidadP5 + 1;
            }
        }
    });
});

document.getElementById('botonsumarP6').addEventListener('click', function() {
    var textoGeneralP6 = document.getElementById('textoGeneralP6').innerHTML.replace(/<br>/g, '');
    var cantidadP6 = parseInt(document.getElementById('cantidadP6').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadP6 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralP6 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralP6}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadP6 < cantidadMaxima) {
                document.getElementById('cantidadP6').innerText = cantidadP6 + 1;
            }
        }
    });
});

document.getElementById('botonsumarP7').addEventListener('click', function() {
    var textoGeneralP7 = document.getElementById('textoGeneralP7').innerHTML.replace(/<br>/g, '');
    var cantidadP7 = parseInt(document.getElementById('cantidadP7').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadP7 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralP7 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralP7}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadP7 < cantidadMaxima) {
                document.getElementById('cantidadP7').innerText = cantidadP7 + 1;
            }
        }
    });
});

document.getElementById('botonsumarP8').addEventListener('click', function() {
    var textoGeneralP8 = document.getElementById('textoGeneralP8').innerHTML.replace(/<br>/g, '');
    var cantidadP8 = parseInt(document.getElementById('cantidadP8').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadP8 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralP8 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralP8}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadP8 < cantidadMaxima) {
                document.getElementById('cantidadP8').innerText = cantidadP8 + 1;
            }
        }
    });
});
/*--------------------------------------------------------------------------------------------------------------------------*/
/*BOTONES RESTAR*/
document.getElementById('botonrestarP1').addEventListener('click', function() {
    var textoGeneralP1 = document.getElementById('textoGeneralP1').innerHTML.replace(/<br>/g, '');
    var cantidadP1 = parseInt(document.getElementById('cantidadP1').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadP1 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralP1 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralP1}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadP1 <= cantidadMaxima && cantidadP1 > 1) {
                document.getElementById('cantidadP1').innerText = cantidadP1 - 1;
            }
        }
    });
});


document.getElementById('botonrestarP2').addEventListener('click', function() {
    var textoGeneralP2 = document.getElementById('textoGeneralP2').innerText;
    var cantidadP2 = parseInt(document.getElementById('cantidadP2').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadP2 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralP2 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralP2}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadP2 <= cantidadMaxima && cantidadP2 > 1) {
                document.getElementById('cantidadP2').innerText = cantidadP2 - 1;
            }
        }
    });
});

document.getElementById('botonrestarP3').addEventListener('click', function() {
    var textoGeneralP3 = document.getElementById('textoGeneralP3').innerText;
    var cantidadP3 = parseInt(document.getElementById('cantidadP3').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadP3 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralP3 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralP3}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadP3 <= cantidadMaxima && cantidadP3 > 1) {
                document.getElementById('cantidadP3').innerText = cantidadP3 - 1;
            }
        }
    });
});

document.getElementById('botonrestarP4').addEventListener('click', function() {
    var textoGeneralP4 = document.getElementById('textoGeneralP4').innerHTML.replace(/<br>/g, '');
    var cantidadP4 = parseInt(document.getElementById('cantidadP4').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadP4 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralP4 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralP4}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadP4 <= cantidadMaxima && cantidadP4 > 1) {
                document.getElementById('cantidadP4').innerText = cantidadP4 - 1;
            }
        }
    });
});

document.getElementById('botonrestarP5').addEventListener('click', function() {
    var textoGeneralP5 = document.getElementById('textoGeneralP5').innerHTML.replace(/<br>/g, '');
    var cantidadP5 = parseInt(document.getElementById('cantidadP5').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadP5 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralP5 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralP5}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadP5 <= cantidadMaxima && cantidadP5 > 1) {
                document.getElementById('cantidadP5').innerText = cantidadP5 - 1;
            }
        }
    });
});

document.getElementById('botonrestarP6').addEventListener('click', function() {
    var textoGeneralP6 = document.getElementById('textoGeneralP6').innerHTML.replace(/<br>/g, '');
    var cantidadP6 = parseInt(document.getElementById('cantidadP6').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadP6 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralP6 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralP6}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadP6 <= cantidadMaxima && cantidadP6 > 1) {
                document.getElementById('cantidadP6').innerText = cantidadP6 - 1;
            }
        }
    });
});

document.getElementById('botonrestarP7').addEventListener('click', function() {
    var textoGeneralP7 = document.getElementById('textoGeneralP7').innerHTML.replace(/<br>/g, '');
    var cantidadP7 = parseInt(document.getElementById('cantidadP7').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadP7 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralP7 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralP7}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadP7 <= cantidadMaxima && cantidadP7 > 1) {
                document.getElementById('cantidadP7').innerText = cantidadP7 - 1;
            }
        }
    });
});

document.getElementById('botonrestarP8').addEventListener('click', function() {
    var textoGeneralP8 = document.getElementById('textoGeneralP8').innerHTML.replace(/<br>/g, '');
    var cantidadP8 = parseInt(document.getElementById('cantidadP8').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadP8 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralP8 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralP8}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadP8 <= cantidadMaxima && cantidadP8 > 1) {
                document.getElementById('cantidadP8').innerText = cantidadP8 - 1;
            }
        }
    });
});


/*------------------------------------------------------------------------------------------------------------------*/


document.getElementById('addcarritoP').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralP1').innerText;
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadP1').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioP').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoP2').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralP2').innerHTML.replace(/<br>/g, ' ');
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadP2').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioP2').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoP3').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralP3').innerText;
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadP3').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioP3').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoP4').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralP4').innerText
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadP4').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioP4').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoP5').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralP5').innerText;
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadP5').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioP5').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoP6').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralP6').innerText;
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadP6').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioP6').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoP7').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralP7').innerText;
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadP7').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioP7').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoP8').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralP8').innerText;
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadP8').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioP8').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});