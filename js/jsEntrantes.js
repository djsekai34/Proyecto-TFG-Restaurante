document.getElementById('entrante1').addEventListener('click', function() {
    var divHabas = document.getElementById('divHabas');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divHabas) {
        if (divHabas.style.display === 'none') {
            ocultartodosDiv();
            divHabas.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralE1 = document.getElementById('textoGeneralE1').innerHTML.replace(/<br>/g, '');
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralE1}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadE1').innerText = '1';
                    } else {
                        document.getElementById('cantidadE1').innerText = '0';
                    }
                }
            });
        }
    }

});

document.getElementById('entrante2').addEventListener('click', function() {
    var divJamon = document.getElementById('divJamon');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divJamon) {
        if (divJamon.style.display === 'none' || divJamon.style.display === '') {
            ocultartodosDiv();
            divJamon.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralE2 = document.getElementById('textoGeneralE2').innerText;
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralE2}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadE2').innerText = '1';
                    } else {
                        document.getElementById('cantidadE2').innerText = '0';
                    }
                }
            });
        }
    }
});

document.getElementById('entrante3').addEventListener('click', function() {
    var divJamonyQueso = document.getElementById('divJamonyQueso');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divJamonyQueso) {
        if (divJamonyQueso.style.display === 'none' || divJamonyQueso.style.display === '') {
            ocultartodosDiv();
            divJamonyQueso.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralE3 = document.getElementById('textoGeneralE3').innerHTML.replace(/<br>/g, '');
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralE3}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadE3').innerText = '1';
                    } else {
                        document.getElementById('cantidadE3').innerText = '0';
                    }
                }
            });
        }
    }
});

document.getElementById('entrante4').addEventListener('click', function() {
    var divCroquetas = document.getElementById('divCroquetas');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divCroquetas) {
        if (divCroquetas.style.display === 'none' || divCroquetas.style.display === '') {
            ocultartodosDiv();
            divCroquetas.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralE4 = document.getElementById('textoGeneralE4').innerText;
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralE4}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadE4').innerText = '1';
                    } else {
                        document.getElementById('cantidadE4').innerText = '0';
                    }
                }
            });
        }
    }
});


document.getElementById('entrante5').addEventListener('click', function() {
    var divSalchichonIberico = document.getElementById('divSalchichonIberico');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divSalchichonIberico) {
        if (divSalchichonIberico.style.display === 'none' || divSalchichonIberico.style.display === '') {
            ocultartodosDiv();
            divSalchichonIberico.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralE5 = document.getElementById('textoGeneralE5').innerText;
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralE5}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadE5').innerText = '1';
                    } else {
                        document.getElementById('cantidadE5').innerText = '0';
                    }
                }
            });
        }
    }
});

document.getElementById('entrante6').addEventListener('click', function() {
    var divBravas = document.getElementById('divBravas');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divBravas) {
        if (divBravas.style.display === 'none' || divBravas.style.display === '') {
            ocultartodosDiv();
            divBravas.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralE6 = document.getElementById('textoGeneralE6').innerText;
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralE6}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadE6').innerText = '1';
                    } else {
                        document.getElementById('cantidadE6').innerText = '0';
                    }
                }
            });
        }
    }
});

document.getElementById('entrante7').addEventListener('click', function() {
    var divCalamaresFritos = document.getElementById('divCalamaresFritos');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divCalamaresFritos) {
        if (divCalamaresFritos.style.display === 'none' || divCalamaresFritos.style.display === '') {
            ocultartodosDiv();
            divCalamaresFritos.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralE7 = document.getElementById('textoGeneralE7').innerText;
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralE7}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadE7').innerText = '1';
                    } else {
                        document.getElementById('cantidadE7').innerText = '0';
                    }
                }
            });
        }
    }
});

document.getElementById('entrante8').addEventListener('click', function() {
    var divQuesos = document.getElementById('divQuesos');
    var divImagenesMasNombre = document.getElementById('imagenesMasNombre');
    var divNavegador = document.getElementById('divNavegador');
    if (divQuesos) {
        if (divQuesos.style.display === 'none' || divQuesos.style.display === '') {
            ocultartodosDiv();
            divQuesos.style.display = 'block';
            divImagenesMasNombre.style.display = 'none';
            divNavegador.style.display= 'block';
            var textoGeneralE8 = document.getElementById('textoGeneralE8').innerText;
            $.ajax({
                url: '../Controlador/controladorProductoSeleccionado.php',
                type: 'POST',
                data: JSON.stringify({nombre: textoGeneralE8}),
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if (data.cantidad > 0) {
                        document.getElementById('cantidadE8').innerText = '1';
                    } else {
                        document.getElementById('cantidadE8').innerText = '0';
                    }
                }
            });
        }
    }
});
/*--------------------------------------------------------------------------------------------------------------------------*/
/*BOTONES PARA SALIR*/
document.getElementById('botonsalirE1').addEventListener('click', function() {
    var divHabas = document.getElementById('divHabas');
    var divEntrantes = document.getElementById('divEntrantes');
    if (divHabas.style.display == 'block') {
        divHabas.style.display = 'none';
        divEntrantes.style.display ='flex';
    }
});

document.getElementById('botonsalirE2').addEventListener('click', function() {
    var divJamon = document.getElementById('divJamon');
    var divEntrantes = document.getElementById('divEntrantes');
    if (divJamon.style.display == 'block') {
        divJamon.style.display = 'none';
        divEntrantes.style.display ='flex';
    }
});

document.getElementById('botonsalirE3').addEventListener('click', function() {
    var divJamonyQueso = document.getElementById('divJamonyQueso');
    var divEntrantes = document.getElementById('divEntrantes');
    if (divJamonyQueso.style.display == 'block') {
        divJamonyQueso.style.display = 'none';
        divEntrantes.style.display ='flex';
    }
});

document.getElementById('botonsalirE4').addEventListener('click', function() {
    var divCroquetas = document.getElementById('divCroquetas');
    var divEntrantes = document.getElementById('divEntrantes');
    if (divCroquetas.style.display == 'block') {
        divCroquetas.style.display = 'none';
        divEntrantes.style.display ='flex';
    }
});


document.getElementById('botonsalirE5').addEventListener('click', function() {
    var divSalchichonIberico = document.getElementById('divSalchichonIberico');
    var divEntrantes = document.getElementById('divEntrantes');
    if (divSalchichonIberico.style.display == 'block') {
        divSalchichonIberico.style.display = 'none';
        divEntrantes.style.display ='flex';
    }
});

document.getElementById('botonsalirE6').addEventListener('click', function() {
    var divBravas = document.getElementById('divBravas');
    var divEntrantes = document.getElementById('divEntrantes');
    if (divBravas.style.display == 'block') {
        divBravas.style.display = 'none';
        divEntrantes.style.display ='flex';
    }
});

document.getElementById('botonsalirE7').addEventListener('click', function() {
    var divCalamaresFritos = document.getElementById('divCalamaresFritos');
    var divEntrantes = document.getElementById('divEntrantes');
    if (divCalamaresFritos.style.display == 'block') {
        divCalamaresFritos.style.display = 'none';
        divEntrantes.style.display ='flex';
    }
});

document.getElementById('botonsalirE8').addEventListener('click', function() {
    var divQuesos = document.getElementById('divQuesos');
    var divEntrantes = document.getElementById('divEntrantes');
    if (divQuesos.style.display == 'block') {
        divQuesos.style.display = 'none';
        divEntrantes.style.display ='flex';
    }
});
/*--------------------------------------------------------------------------------------------------------------------------*/
/*BOTONES SUMAR*/
document.getElementById('botonsumarE1').addEventListener('click', function() {
    var textoGeneralE1 = document.getElementById('textoGeneralE1').innerHTML.replace(/<br>/g, '');
    var cantidadE1 = parseInt(document.getElementById('cantidadE1').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadE1 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralE1 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralE1}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadE1 < cantidadMaxima) {
                document.getElementById('cantidadE1').innerText = cantidadE1 + 1;
            }
        }
    });
});


document.getElementById('botonsumarE2').addEventListener('click', function() {
    var textoGeneralE2 = document.getElementById('textoGeneralE2').innerHTML.replace(/<br>/g, '');
    var cantidadE2 = parseInt(document.getElementById('cantidadE2').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadE2 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralE2 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralE2}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadE2 < cantidadMaxima) {
                document.getElementById('cantidadE2').innerText = cantidadE2 + 1;
            }
        }
    });
});

document.getElementById('botonsumarE3').addEventListener('click', function() {
    var textoGeneralE3 = document.getElementById('textoGeneralE3').innerText;
    var cantidadE3 = parseInt(document.getElementById('cantidadE3').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadE3 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralE3 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralE3}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadE3 < cantidadMaxima) {
                document.getElementById('cantidadE3').innerText = cantidadE3 + 1;
            }
        }
    });
});

document.getElementById('botonsumarE4').addEventListener('click', function() {
    var textoGeneralE4 = document.getElementById('textoGeneralE4').innerText;
    var cantidadE4 = parseInt(document.getElementById('cantidadE4').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadE4 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralE4 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralE4}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadE4 < cantidadMaxima) {
                document.getElementById('cantidadE4').innerText = cantidadE4 + 1;
            }
        }
    });
});


document.getElementById('botonsumarE5').addEventListener('click', function() {
    var textoGeneralE5 = document.getElementById('textoGeneralE5').innerText;
    var cantidadE5 = parseInt(document.getElementById('cantidadE5').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadE5 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralE5 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralE5}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadE5 < cantidadMaxima) {
                document.getElementById('cantidadE5').innerText = cantidadE5 + 1;
            }
        }
    });
});

document.getElementById('botonsumarE6').addEventListener('click', function() {
    var textoGeneralE6 = document.getElementById('textoGeneralE6').innerText;
    var cantidadE6 = parseInt(document.getElementById('cantidadE6').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadE6 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralE6 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralE6}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadE6 < cantidadMaxima) {
                document.getElementById('cantidadE6').innerText = cantidadE6 + 1;
            }
        }
    });
});

document.getElementById('botonsumarE7').addEventListener('click', function() {
    var textoGeneralE7 = document.getElementById('textoGeneralE7').innerText;
    var cantidadE7 = parseInt(document.getElementById('cantidadE7').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadE7 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralE7 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralE7}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadE7 < cantidadMaxima) {
                document.getElementById('cantidadE7').innerText = cantidadE7 + 1;
            }
        }
    });
});

document.getElementById('botonsumarE8').addEventListener('click', function() {
    var textoGeneralE8 = document.getElementById('textoGeneralE8').innerText;
    var cantidadE8 = parseInt(document.getElementById('cantidadE8').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadE8 === 0) {
        alert('No puedes sumar de este producto ' + '"' + textoGeneralE8 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralE8}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadE8 < cantidadMaxima) {
                document.getElementById('cantidadE8').innerText = cantidadE8 + 1;
            }
        }
    });
});
/*--------------------------------------------------------------------------------------------------------------------------*/
/*BOTONES RESTAR*/
document.getElementById('botonrestarE1').addEventListener('click', function() {
    var textoGeneralE1 = document.getElementById('textoGeneralE1').innerHTML.replace(/<br>/g, '');
    var cantidadE1 = parseInt(document.getElementById('cantidadE1').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadE1 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralE1 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralE1}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadE1 <= cantidadMaxima && cantidadE1 > 1) {
                document.getElementById('cantidadE1').innerText = cantidadE1 - 1;
            }
        }
    });
});


document.getElementById('botonrestarE2').addEventListener('click', function() {
    var textoGeneralE2 = document.getElementById('textoGeneralE2').innerText;
    var cantidadE2 = parseInt(document.getElementById('cantidadE2').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadE2 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralE2 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralE2}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadE2 <= cantidadMaxima && cantidadE2 > 1) {
                document.getElementById('cantidadE2').innerText = cantidadE2 - 1;
            }
        }
    });
});

document.getElementById('botonrestarE3').addEventListener('click', function() {
    var textoGeneralE3 = document.getElementById('textoGeneralE3').innerHTML.replace(/<br>/g, '');
    var cantidadE3 = parseInt(document.getElementById('cantidadE3').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadE3 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralE3 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralE3}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadE3 <= cantidadMaxima && cantidadE3 > 1) {
                document.getElementById('cantidadE3').innerText = cantidadE3 - 1;
            }
        }
    });
});

document.getElementById('botonrestarE4').addEventListener('click', function() {
    var textoGeneralE4 = document.getElementById('textoGeneralE4').innerText;
    var cantidadE4 = parseInt(document.getElementById('cantidadE4').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadE4 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralE4 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralE4}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadE4 <= cantidadMaxima && cantidadE4 > 1) {
                document.getElementById('cantidadE4').innerText = cantidadE4 - 1;
            }
        }
    });
});

document.getElementById('botonrestarE5').addEventListener('click', function() {
    var textoGeneralE5 = document.getElementById('textoGeneralE5').innerText;
    var cantidadE5 = parseInt(document.getElementById('cantidadE5').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadE5 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralE5 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralE5}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadE5 <= cantidadMaxima && cantidadE5 > 1) {
                document.getElementById('cantidadE5').innerText = cantidadE5 - 1;
            }
        }
    });
});

document.getElementById('botonrestarE6').addEventListener('click', function() {
    var textoGeneralE6 = document.getElementById('textoGeneralE6').innerText;
    var cantidadE6 = parseInt(document.getElementById('cantidadE6').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadE6 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralE6 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralE6}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadE6 <= cantidadMaxima && cantidadE6 > 1) {
                document.getElementById('cantidadE6').innerText = cantidadE6 - 1;
            }
        }
    });
});

document.getElementById('botonrestarE7').addEventListener('click', function() {
    var textoGeneralE7 = document.getElementById('textoGeneralE7').innerText;
    var cantidadE7 = parseInt(document.getElementById('cantidadE7').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadE7 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralE7 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralE7}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadE7 <= cantidadMaxima && cantidadE7 > 1) {
                document.getElementById('cantidadE7').innerText = cantidadE7 - 1;
            }
        }
    });
});

document.getElementById('botonrestarE8').addEventListener('click', function() {
    var textoGeneralE8 = document.getElementById('textoGeneralE8').innerText;
    var cantidadE8 = parseInt(document.getElementById('cantidadE8').innerText, 10);
    /*Comprobacion de que no esta en 0 ya la cantidad*/
    if (cantidadE8 === 0) {
        alert('No puedes restar de este producto ' + '"' + textoGeneralE8 + '"' + ' ya que no nos queda. Sentimos las molestias.');
        return;
    }
    $.ajax({
        url: '../Controlador/controladorSumaryRestarProducto.php',
        type: 'POST',
        data: JSON.stringify({nombre: textoGeneralE8}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            var cantidadMaxima = data.cantidad;
            if (cantidadE8 <= cantidadMaxima && cantidadE8 > 1) {
                document.getElementById('cantidadE8').innerText = cantidadE8 - 1;
            }
        }
    });
});

/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*Para abrir para apuntar en la comanda*/

document.getElementById('addcarritoE').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralE1').innerText;
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadE1').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioE').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoE2').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralE2').innerHTML.replace(/<br>/g, ' ');
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadE2').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioE2').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoE3').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralE3').innerText;
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadE3').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioE3').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoE4').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralE4').innerHTML.replace(/<br>/g, '');
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadE4').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioE4').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoE5').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralE5').innerHTML.replace(/<br>/g, '');
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadE5').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioE5').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoE6').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralE6').innerHTML.replace(/<br>/g, '');
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadE6').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioE6').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoE7').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralE7').innerText;
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadE7').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioE7').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});

document.getElementById('addcarritoE8').addEventListener('click', function() {
    document.getElementById('anadiraltxt').style.display = 'block';
    var titulo = document.getElementById('textoGeneralE8').innerHTML.replace(/<br>/g, '');
    document.getElementById('tituloSeleccionado').innerText = titulo;
    var cantidad = document.getElementById('cantidadE8').innerText;
    document.getElementById('cantidadSeleccionada').innerText = cantidad;
    var precio = document.getElementById('precioE8').innerText;
    document.getElementById('precioUnitario').innerText = precio;
});