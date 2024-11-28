document.getElementById('carne1').addEventListener('click', function() {
    var divSolomillo = document.getElementById('divSolomillo');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divSolomillo) {
        if (divSolomillo.style.display === 'none') {
            ocultartodosDiv();
            divSolomillo.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralC1 = document.getElementById('textoGeneralC1').innerHTML.replace(/<br>/g, '');
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralC1}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadC1').innerText = '1';
                    } else {
                        document.getElementById('cantidadC1').innerText = '0';
                    }
                }
            });
        }
    }

});

document.getElementById('carne2').addEventListener('click', function() {
    var divCordero = document.getElementById('divCordero');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divCordero) {
        if (divCordero.style.display === 'none') {
            ocultartodosDiv();
            divCordero.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralC2 = document.getElementById('textoGeneralC2').innerText;
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralC2}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadC2').innerText = '1';
                    } else {
                        document.getElementById('cantidadC2').innerText = '0';
                    }
                }
            });
        }
    }
});

document.getElementById('carne3').addEventListener('click', function() {
    var divEscalopines = document.getElementById('divEscalopines');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divEscalopines) {
        if (divEscalopines.style.display === 'none') {
            ocultartodosDiv();
            divEscalopines.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralC3 = document.getElementById('textoGeneralC3').innerHTML.replace(/<br>/g, '');
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralC3}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadC3').innerText = '1';
                    } else {
                        document.getElementById('cantidadC3').innerText = '0';
                    }
                }
            });
        }
    }
});

document.getElementById('carne4').addEventListener('click', function() {
    var divCodillo = document.getElementById('divCodillo');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divCodillo) {
        if (divCodillo.style.display === 'none') {
            ocultartodosDiv();
            divCodillo.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralC4 = document.getElementById('textoGeneralC4').innerHTML.replace(/<br>/g, '');
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralC4}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadC4').innerText = '1';
                    } else {
                        document.getElementById('cantidadC4').innerText = '0';
                    }
                }
            });
        }
    }
});



document.getElementById('carne5').addEventListener('click', function() {
    var divBrochetas = document.getElementById('divBrochetas');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divBrochetas) {
        if (divBrochetas.style.display === 'none') {
            ocultartodosDiv();
            divBrochetas.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralC5 = document.getElementById('textoGeneralC5').innerHTML.replace(/<br>/g, '');
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralC5}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadC5').innerText = '1';
                    } else {
                        document.getElementById('cantidadC5').innerText = '0';
                    }
                }
            });
        }
    }
});

document.getElementById('carne6').addEventListener('click', function() {
    var divCarrillada = document.getElementById('divCarrillada');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divCarrillada) {
        if (divCarrillada.style.display === 'none') {
            ocultartodosDiv();
            divCarrillada.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralC6 = document.getElementById('textoGeneralC6').innerHTML.replace(/<br>/g, '');
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralC6}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadC6').innerText = '1';
                    } else {
                        document.getElementById('cantidadC6').innerText = '0';
                    }
                }
            });
        }
    }
});

document.getElementById('carne7').addEventListener('click', function() {
    var divPinchos = document.getElementById('divPinchos');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divPinchos) {
        if (divPinchos.style.display === 'none') {
            ocultartodosDiv();
            divPinchos.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralC7 = document.getElementById('textoGeneralC7').innerHTML.replace(/<br>/g, '');
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralC7}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadC7').innerText = '1';
                    } else {
                        document.getElementById('cantidadC7').innerText = '0';
                    }
                }
            });
        }
    }
});

document.getElementById('carne8').addEventListener('click', function() {
    var divEstofado = document.getElementById('divEstofado');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divEstofado) {
        if (divEstofado.style.display === 'none') {
            ocultartodosDiv();
            divEstofado.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralC8 = document.getElementById('textoGeneralC8').innerHTML.replace(/<br>/g, '');
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralC8}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadC8').innerText = '1';
                    } else {
                        document.getElementById('cantidadC8').innerText = '0';
                    }
                }
            });
        }
    }
});
/*--------------------------------------------------------------------------------------------------------------------------*/
/*BOTONES PARA SALIR*/
document.getElementById('botonsalirC1').addEventListener('click', function() {
    var divSolomillo = document.getElementById('divSolomillo');
    var divCarne = document.getElementById('divCarne');
    if (divSolomillo.style.display == 'block') {
        divSolomillo.style.display = 'none';
        divCarne.style.display ='flex';
    }
});

document.getElementById('botonsalirC2').addEventListener('click', function() {
    var divCordero = document.getElementById('divCordero');
    var divCarne = document.getElementById('divCarne');
    if (divCordero.style.display == 'block') {
        divCordero.style.display = 'none';
        divCarne.style.display ='flex';
    }
});

document.getElementById('botonsalirC3').addEventListener('click', function() {
    var divEscalopines = document.getElementById('divEscalopines');
    var divCarne = document.getElementById('divCarne');
    if (divEscalopines.style.display == 'block') {
        divEscalopines.style.display = 'none';
        divCarne.style.display ='flex';
    }
});

document.getElementById('botonsalirC4').addEventListener('click', function() {
    var divCodillo = document.getElementById('divCodillo');
    var divCarne = document.getElementById('divCarne');
    if (divCodillo.style.display == 'block') {
        divCodillo.style.display = 'none';
        divCarne.style.display ='flex';
    }
});


document.getElementById('botonsalirC5').addEventListener('click', function() {
    var divBrochetas = document.getElementById('divBrochetas');
    var divCarne = document.getElementById('divCarne');
    if (divBrochetas.style.display == 'block') {
        divBrochetas.style.display = 'none';
        divCarne.style.display ='flex';
    }
});

document.getElementById('botonsalirC6').addEventListener('click', function() {
    var divCarrillada = document.getElementById('divCarrillada');
    var divCarne = document.getElementById('divCarne');
    if (divCarrillada.style.display == 'block') {
        divCarrillada.style.display = 'none';
        divCarne.style.display ='flex';
    }
});

document.getElementById('botonsalirC7').addEventListener('click', function() {
    var divPinchos = document.getElementById('divPinchos');
    var divCarne = document.getElementById('divCarne');
    if (divPinchos.style.display == 'block') {
        divPinchos.style.display = 'none';
        divCarne.style.display ='flex';
    }
});

document.getElementById('botonsalirC8').addEventListener('click', function() {
    var divEstofado = document.getElementById('divEstofado');
    var divCarne = document.getElementById('divCarne');
    if (divEstofado.style.display == 'block') {
        divEstofado.style.display = 'none';
        divCarne.style.display ='flex';
    }
});
/*--------------------------------------------------------------------------------------------------------------------------*/
/*BOTONES SUMAR*/
document.getElementById('botonsumarC1').addEventListener('click', function() {
    var textoGeneralC1 = document.getElementById('textoGeneralC1').innerHTML.replace(/<br>/g, '');
    var cantidadC1 = parseInt(document.getElementById('cantidadC1').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadC1 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralC1 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralC1}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadC1 < cantidadMaxima) {
                document.getElementById('cantidadC1').innerText = cantidadC1 + 1;
            }
        }
    });
});


document.getElementById('botonsumarC2').addEventListener('click', function() {
    var textoGeneralC2 = document.getElementById('textoGeneralC2').innerText;
    var cantidadC2 = parseInt(document.getElementById('cantidadC2').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadC2 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralC2 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralC2}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadC2 < cantidadMaxima) {
                document.getElementById('cantidadC2').innerText = cantidadC2 + 1;
            }
        }
    });
});

document.getElementById('botonsumarC3').addEventListener('click', function() {
    var textoGeneralC3 = document.getElementById('textoGeneralC3').innerHTML.replace(/<br>/g, '');
    var cantidadC3 = parseInt(document.getElementById('cantidadC3').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadC3 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralC3 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralC3}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadC3 < cantidadMaxima) {
                document.getElementById('cantidadC3').innerText = cantidadC3 + 1;
            }
        }
    });
});

document.getElementById('botonsumarC4').addEventListener('click', function() {
    var textoGeneralC4 = document.getElementById('textoGeneralC4').innerHTML.replace(/<br>/g, '');
    var cantidadC4 = parseInt(document.getElementById('cantidadC4').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadC4 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralC4 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralC4}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadC4 < cantidadMaxima) {
                document.getElementById('cantidadC4').innerText = cantidadC4 + 1;
            }
        }
    });
});


document.getElementById('botonsumarC5').addEventListener('click', function() {
    var textoGeneralC5 = document.getElementById('textoGeneralC5').innerHTML.replace(/<br>/g, '');
    var cantidadC5 = parseInt(document.getElementById('cantidadC5').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadC5 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralC5 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralC5}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadC5 < cantidadMaxima) {
                document.getElementById('cantidadC5').innerText = cantidadC5 + 1;
            }
        }
    });
});

document.getElementById('botonsumarC6').addEventListener('click', function() {
    var textoGeneralC6 = document.getElementById('textoGeneralC6').innerHTML.replace(/<br>/g, '');
    var cantidadC6 = parseInt(document.getElementById('cantidadC6').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadC6 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralC6 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralC6}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadC6 < cantidadMaxima) {
                document.getElementById('cantidadC6').innerText = cantidadC6 + 1;
            }
        }
    });
});

document.getElementById('botonsumarC7').addEventListener('click', function() {
    var textoGeneralC7 = document.getElementById('textoGeneralC7').innerHTML.replace(/<br>/g, '');
    var cantidadC7 = parseInt(document.getElementById('cantidadC7').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadC7 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralC7 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralC7}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadC7 < cantidadMaxima) {
                document.getElementById('cantidadC7').innerText = cantidadC7 + 1;
            }
        }
    });
});

document.getElementById('botonsumarC8').addEventListener('click', function() {
    var textoGeneralC8 = document.getElementById('textoGeneralC8').innerHTML.replace(/<br>/g, '');
    var cantidadC8 = parseInt(document.getElementById('cantidadC8').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadC8 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralC8 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralC8}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadC8 < cantidadMaxima) {
                document.getElementById('cantidadC8').innerText = cantidadC8 + 1;
            }
        }
    });
});
/*--------------------------------------------------------------------------------------------------------------------------*/
/*BOTONES RESTAR*/
document.getElementById('botonrestarC1').addEventListener('click', function() {
    var textoGeneralC1 = document.getElementById('textoGeneralC1').innerHTML.replace(/<br>/g, '');
    var cantidadC1 = parseInt(document.getElementById('cantidadC1').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadC1 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralC1 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralC1}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadC1 <= cantidadMaxima && cantidadC1 > 1) {
                document.getElementById('cantidadC1').innerText = cantidadC1 - 1;
            }
        }
    });
});


document.getElementById('botonrestarC2').addEventListener('click', function() {
    var textoGeneralC2 = document.getElementById('textoGeneralC2').innerText;
    var cantidadC2 = parseInt(document.getElementById('cantidadC2').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadC2 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralC2 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralC2}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadC2 <= cantidadMaxima && cantidadC2 > 1) {
                document.getElementById('cantidadC2').innerText = cantidadC2 - 1;
            }
        }
    });
});

document.getElementById('botonrestarC3').addEventListener('click', function() {
    var textoGeneralC3 = document.getElementById('textoGeneralC3').innerHTML.replace(/<br>/g, '');
    var cantidadC3 = parseInt(document.getElementById('cantidadC3').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadC3 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralC3 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralC3}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadC3 <= cantidadMaxima && cantidadC3 > 1) {
                document.getElementById('cantidadC3').innerText = cantidadC3 - 1;
            }
        }
    });
});

document.getElementById('botonrestarC4').addEventListener('click', function() {
    var textoGeneralC4 = document.getElementById('textoGeneralC4').innerHTML.replace(/<br>/g, '');
    var cantidadC4 = parseInt(document.getElementById('cantidadC4').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadC4 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralC4 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralC4}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadC4 <= cantidadMaxima && cantidadC4 > 1) {
                document.getElementById('cantidadC4').innerText = cantidadC4 - 1;
            }
        }
    });
});

document.getElementById('botonrestarC5').addEventListener('click', function() {
    var textoGeneralC5 = document.getElementById('textoGeneralC5').innerHTML.replace(/<br>/g, '');
    var cantidadC5 = parseInt(document.getElementById('cantidadC5').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadC5 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralC5 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralC5}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadC5 <= cantidadMaxima && cantidadC5 > 1) {
                document.getElementById('cantidadC5').innerText = cantidadC5 - 1;
            }
        }
    });
});

document.getElementById('botonrestarC6').addEventListener('click', function() {
    var textoGeneralC6 = document.getElementById('textoGeneralC6').innerHTML.replace(/<br>/g, '');
    var cantidadC6 = parseInt(document.getElementById('cantidadC6').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadP6 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralC6 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralC6}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadC6 <= cantidadMaxima && cantidadC6 > 1) {
                document.getElementById('cantidadC6').innerText = cantidadC6 - 1;
            }
        }
    });
});

document.getElementById('botonrestarC7').addEventListener('click', function() {
    var textoGeneralC7 = document.getElementById('textoGeneralC7').innerHTML.replace(/<br>/g, '');
    var cantidadC7 = parseInt(document.getElementById('cantidadC7').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadC7 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralC7 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralC7}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadC7 <= cantidadMaxima && cantidadC7 > 1) {
                document.getElementById('cantidadC7').innerText = cantidadC7 - 1;
            }
        }
    });
});

document.getElementById('botonrestarC8').addEventListener('click', function() {
    var textoGeneralC8 = document.getElementById('textoGeneralC8').innerHTML.replace(/<br>/g, '');
    var cantidadC8 = parseInt(document.getElementById('cantidadC8').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadP8 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralC8 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralC8}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadC8 <= cantidadMaxima && cantidadC8 > 1) {
                document.getElementById('cantidadC8').innerText = cantidadC8 - 1;
            }
        }
    });
});


/*-------------------------------------------------------------------------------------------------------------------------------------*/
document.getElementById('addcarritoC').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralC1').innerText;
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadC1').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioC').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoC2').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralC2').innerHTML.replace(/<br>/g, ' ');
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadC2').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioC2').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoC3').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralC3').innerText;
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadC3').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioC3').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoC4').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralC4').innerText
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadC4').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioC4').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoC5').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralC5').innerText;
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadC5').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioC5').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoC6').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralC6').innerText;
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadC6').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioC6').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoC7').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralC7').innerText;
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadC7').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioC7').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoC8').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralC8').innerText;
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadC8').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioC8').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});