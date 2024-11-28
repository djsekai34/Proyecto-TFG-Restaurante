document.getElementById('infantil1').addEventListener('click', function() {
    var divPHC = document.getElementById('divPHC');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divPHC) {
        if (divPHC.style.display === 'none') {
            ocultartodosDiv();
            divPHC.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralI1 = document.getElementById('textoGeneralI1').innerHTML.replace(/<br>/g, '');
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralI1}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadI1').innerText = '1';
                    } else {
                        document.getElementById('cantidadI1').innerText = '0';
                    }
                }
            });
        }
    }

});

document.getElementById('infantil2').addEventListener('click', function() {
    var divHamburguesa = document.getElementById('divHamburguesa');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divHamburguesa) {
        if (divHamburguesa.style.display === 'none') {
            ocultartodosDiv();
            divHamburguesa.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralI2 = document.getElementById('textoGeneralI2').innerHTML.replace(/<br>/g, '');
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralI2}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadI2').innerText = '1';
                    } else {
                        document.getElementById('cantidadI2').innerText = '0';
                    }
                }
            });
        }
    }
});

document.getElementById('infantil3').addEventListener('click', function() {
    var divPollo = document.getElementById('divPollo');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divPollo) {
        if (divPollo.style.display === 'none') {
            ocultartodosDiv();
            divPollo.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralI3 = document.getElementById('textoGeneralI3').innerHTML.replace(/<br>/g, '');
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralI3}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadI3').innerText = '1';
                    } else {
                        document.getElementById('cantidadI3').innerText = '0';
                    }
                }
            });
        }
    }
});

document.getElementById('infantil4').addEventListener('click', function() {
    var divNuggetsPollo = document.getElementById('divNuggetsPollo');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divNuggetsPollo) {
        if (divNuggetsPollo.style.display === 'none') {
            ocultartodosDiv();
            divNuggetsPollo.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralI4 = document.getElementById('textoGeneralI4').innerHTML.replace(/<br>/g, '');
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralI4}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadI4').innerText = '1';
                    } else {
                        document.getElementById('cantidadI4').innerText = '0';
                    }
                }
            });
        }
    }
});



document.getElementById('infantil5').addEventListener('click', function() {
    var divNuggetsPescado = document.getElementById('divNuggetsPescado');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divNuggetsPescado) {
        if (divNuggetsPescado.style.display === 'none') {
            ocultartodosDiv();
            divNuggetsPescado.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralI5 = document.getElementById('textoGeneralI5').innerHTML.replace(/<br>/g, '');
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralI5}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadI5').innerText = '1';
                    } else {
                        document.getElementById('cantidadI5').innerText = '0';
                    }
                }
            });
        }
    }
});

document.getElementById('infantil6').addEventListener('click', function() {
    var divSpaguettis = document.getElementById('divSpaguettis');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divSpaguettis) {
        if (divSpaguettis.style.display === 'none') {
            ocultartodosDiv();
            divSpaguettis.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralI6 = document.getElementById('textoGeneralI6').innerHTML.replace(/<br>/g, '');
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralI6}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadI6').innerText = '1';
                    } else {
                        document.getElementById('cantidadI6').innerText = '0';
                    }
                }
            });
        }
    }
});

document.getElementById('infantil7').addEventListener('click', function() {
    var divFlamenquin = document.getElementById('divFlamenquin');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divFlamenquin) {
        if (divFlamenquin.style.display === 'none') {
            ocultartodosDiv();
            divFlamenquin.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralI7 = document.getElementById('textoGeneralI7').innerHTML.replace(/<br>/g, '');
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralI7}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadI7').innerText = '1';
                    } else {
                        document.getElementById('cantidadI7').innerText = '0';
                    }
                }
            });
        }
    }
});

document.getElementById('infantil8').addEventListener('click', function() {
    var divSanJacobo = document.getElementById('divSanJacobo');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divSanJacobo) {
        if (divSanJacobo.style.display === 'none') {
            ocultartodosDiv();
            divSanJacobo.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralI8 = document.getElementById('textoGeneralI8').innerHTML.replace(/<br>/g, '');
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralI8}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadI8').innerText = '1';
                    } else {
                        document.getElementById('cantidadI8').innerText = '0';
                    }
                }
            });
        }
    }
});
/*--------------------------------------------------------------------------------------------------------------------------*/
/*BOTONES PARA SALIR*/
document.getElementById('botonsalirI1').addEventListener('click', function() {
    var divPHC = document.getElementById('divPHC');
    var divInfantil = document.getElementById('divInfantil');
    if (divPHC.style.display == 'block') {
        divPHC.style.display = 'none';
        divInfantil.style.display ='flex';
    }
});

document.getElementById('botonsalirI2').addEventListener('click', function() {
    var divHamburguesa = document.getElementById('divHamburguesa');
    var divInfantil = document.getElementById('divInfantil');
    if (divHamburguesa.style.display == 'block') {
        divHamburguesa.style.display = 'none';
        divInfantil.style.display ='flex';
    }
});

document.getElementById('botonsalirI3').addEventListener('click', function() {
    var divPollo = document.getElementById('divPollo');
    var divInfantil = document.getElementById('divInfantil');
    if (divPollo.style.display == 'block') {
        divPollo.style.display = 'none';
        divInfantil.style.display ='flex';
    }
});

document.getElementById('botonsalirI4').addEventListener('click', function() {
    var divNuggetsPollo = document.getElementById('divNuggetsPollo');
    var divInfantil = document.getElementById('divInfantil');
    if (divNuggetsPollo.style.display == 'block') {
        divNuggetsPollo.style.display = 'none';
        divInfantil.style.display ='flex';
    }
});


document.getElementById('botonsalirI5').addEventListener('click', function() {
    var divNuggetsPescado = document.getElementById('divNuggetsPescado');
    var divInfantil = document.getElementById('divInfantil');
    if (divNuggetsPescado.style.display == 'block') {
        divNuggetsPescado.style.display = 'none';
        divInfantil.style.display ='flex';
    }
});

document.getElementById('botonsalirI6').addEventListener('click', function() {
    var divSpaguettis = document.getElementById('divSpaguettis');
    var divInfantil = document.getElementById('divInfantil');
    if (divSpaguettis.style.display == 'block') {
        divSpaguettis.style.display = 'none';
        divInfantil.style.display ='flex';
    }
});

document.getElementById('botonsalirI7').addEventListener('click', function() {
    var divFlamenquin = document.getElementById('divFlamenquin');
    var divInfantil = document.getElementById('divInfantil');
    if (divFlamenquin.style.display == 'block') {
        divFlamenquin.style.display = 'none';
        divInfantil.style.display ='flex';
    }
});

document.getElementById('botonsalirI8').addEventListener('click', function() {
    var divSanJacobo = document.getElementById('divSanJacobo');
    var divInfantil = document.getElementById('divInfantil');
    if (divSanJacobo.style.display == 'block') {
        divSanJacobo.style.display = 'none';
        divInfantil.style.display ='flex';
    }
});
/*--------------------------------------------------------------------------------------------------------------------------*/
/*BOTONES SUMAR*/
document.getElementById('botonsumarI1').addEventListener('click', function() {
    var textoGeneralI1 = document.getElementById('textoGeneralI1').innerHTML.replace(/<br>/g, '');
    var cantidadI1 = parseInt(document.getElementById('cantidadI1').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadI1 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralI1 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralI1}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadI1 < cantidadMaxima) {
                document.getElementById('cantidadI1').innerText = cantidadI1 + 1;
            }
        }
    });
});


document.getElementById('botonsumarI2').addEventListener('click', function() {
    var textoGeneralI2 = document.getElementById('textoGeneralI2').innerHTML.replace(/<br>/g, '');
    var cantidadI2 = parseInt(document.getElementById('cantidadI2').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadI2 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralI2 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralI2}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadI2 < cantidadMaxima) {
                document.getElementById('cantidadI2').innerText = cantidadI2 + 1;
            }
        }
    });
});

document.getElementById('botonsumarI3').addEventListener('click', function() {
    var textoGeneralI3 = document.getElementById('textoGeneralI3').innerHTML.replace(/<br>/g, '');
    var cantidadI3 = parseInt(document.getElementById('cantidadI3').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadI3 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralI3 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralI3}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadI3 < cantidadMaxima) {
                document.getElementById('cantidadI3').innerText = cantidadI3 + 1;
            }
        }
    });
});

document.getElementById('botonsumarI4').addEventListener('click', function() {
    var textoGeneralI4 = document.getElementById('textoGeneralI4').innerHTML.replace(/<br>/g, '');
    var cantidadI4 = parseInt(document.getElementById('cantidadI4').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadI4 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralI4 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralI4}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadI4 < cantidadMaxima) {
                document.getElementById('cantidadI4').innerText = cantidadI4 + 1;
            }
        }
    });
});


document.getElementById('botonsumarI5').addEventListener('click', function() {
    var textoGeneralI5 = document.getElementById('textoGeneralI5').innerHTML.replace(/<br>/g, '');
    var cantidadI5 = parseInt(document.getElementById('cantidadI5').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadI5 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralI5 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralI5}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadI5 < cantidadMaxima) {
                document.getElementById('cantidadI5').innerText = cantidadI5 + 1;
            }
        }
    });
});

document.getElementById('botonsumarI6').addEventListener('click', function() {
    var textoGeneralI6 = document.getElementById('textoGeneralI6').innerHTML.replace(/<br>/g, '');
    var cantidadI6 = parseInt(document.getElementById('cantidadI6').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadI6 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralI6 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralI6}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadI6 < cantidadMaxima) {
                document.getElementById('cantidadI6').innerText = cantidadI6 + 1;
            }
        }
    });
});

document.getElementById('botonsumarI7').addEventListener('click', function() {
    var textoGeneralI7 = document.getElementById('textoGeneralI7').innerHTML.replace(/<br>/g, '');
    var cantidadI7 = parseInt(document.getElementById('cantidadI7').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadI7 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralI7 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralI7}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadI7 < cantidadMaxima) {
                document.getElementById('cantidadI7').innerText = cantidadI7 + 1;
            }
        }
    });
});

document.getElementById('botonsumarI8').addEventListener('click', function() {
    var textoGeneralI8 = document.getElementById('textoGeneralI8').innerHTML.replace(/<br>/g, '');
    var cantidadI8 = parseInt(document.getElementById('cantidadI8').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadI8 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralI8 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralI8}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadI8 < cantidadMaxima) {
                document.getElementById('cantidadI8').innerText = cantidadI8 + 1;
            }
        }
    });
});
/*--------------------------------------------------------------------------------------------------------------------------*/
/*BOTONES RESTAR*/
document.getElementById('botonrestarI1').addEventListener('click', function() {
    var textoGeneralI1 = document.getElementById('textoGeneralI1').innerHTML.replace(/<br>/g, '');
    var cantidadI1 = parseInt(document.getElementById('cantidadI1').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadI1 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralI1 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralI1}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadI1 <= cantidadMaxima && cantidadI1 > 1) {
                document.getElementById('cantidadI1').innerText = cantidadI1 - 1;
            }
        }
    });
});


document.getElementById('botonrestarI2').addEventListener('click', function() {
    var textoGeneralI2 = document.getElementById('textoGeneralI2').innerHTML.replace(/<br>/g, '');
    var cantidadI2 = parseInt(document.getElementById('cantidadI2').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadI2 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralI2 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralI2}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadI2 <= cantidadMaxima && cantidadI2 > 1) {
                document.getElementById('cantidadI2').innerText = cantidadI2 - 1;
            }
        }
    });
});

document.getElementById('botonrestarI3').addEventListener('click', function() {
    var textoGeneralI3 = document.getElementById('textoGeneralI3').innerHTML.replace(/<br>/g, '');
    var cantidadI3 = parseInt(document.getElementById('cantidadI3').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadI3 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralI3 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralI3}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadI3 <= cantidadMaxima && cantidadI3 > 1) {
                document.getElementById('cantidadI3').innerText = cantidadI3 - 1;
            }
        }
    });
});

document.getElementById('botonrestarI4').addEventListener('click', function() {
    var textoGeneralI4 = document.getElementById('textoGeneralI4').innerHTML.replace(/<br>/g, '');
    var cantidadI4 = parseInt(document.getElementById('cantidadI4').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadI4 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralI4 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralI4}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadI4 <= cantidadMaxima && cantidadI4 > 1) {
                document.getElementById('cantidadI4').innerText = cantidadI4 - 1;
            }
        }
    });
});

document.getElementById('botonrestarI5').addEventListener('click', function() {
    var textoGeneralI5 = document.getElementById('textoGeneralI5').innerHTML.replace(/<br>/g, '');
    var cantidadI5 = parseInt(document.getElementById('cantidadI5').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadI5 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralI5 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralI5}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadI5 <= cantidadMaxima && cantidadI5 > 1) {
                document.getElementById('cantidadI5').innerText = cantidadI5 - 1;
            }
        }
    });
});

document.getElementById('botonrestarI6').addEventListener('click', function() {
    var textoGeneralC6 = document.getElementById('textoGeneralC6').innerHTML.replace(/<br>/g, '');
    var cantidadI6 = parseInt(document.getElementById('cantidadI6').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadI6 === 0) {
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
            if (cantidadI6 <= cantidadMaxima && cantidadI6 > 1) {
                document.getElementById('cantidadI6').innerText = cantidadI6 - 1;
            }
        }
    });
});

document.getElementById('botonrestarI7').addEventListener('click', function() {
    var textoGeneralI7 = document.getElementById('textoGeneralI7').innerHTML.replace(/<br>/g, '');
    var cantidadI7 = parseInt(document.getElementById('cantidadI7').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadI7 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralI7 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralI7}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadI7 <= cantidadMaxima && cantidadI7 > 1) {
                document.getElementById('cantidadI7').innerText = cantidadI7 - 1;
            }
        }
    });
});

document.getElementById('botonrestarI8').addEventListener('click', function() {
    var textoGeneralI8 = document.getElementById('textoGeneralI8').innerHTML.replace(/<br>/g, '');
    var cantidadI8 = parseInt(document.getElementById('cantidadI8').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadI8 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralI8 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralI8}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadI8 <= cantidadMaxima && cantidadI8 > 1) {
                document.getElementById('cantidadI8').innerText = cantidadI8 - 1;
            }
        }
    });
});



/*-------------------------------------------------------------------------------------------------------------------------------------*/
document.getElementById('addcarritoI').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralI1').innerText;
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadI1').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioI').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoI2').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralI2').innerText;
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadI2').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioI2').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoI3').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralI3').innerText;
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadI3').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioI3').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoI4').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralI4').innerText
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadI4').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioI4').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoI5').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralI5').innerText;
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadI5').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioI5').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoI6').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralI6').innerText;
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadI6').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioI6').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoI7').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralI7').innerText;
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadI7').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioI7').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoI8').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralI8').innerText;
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadI8').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioI8').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});