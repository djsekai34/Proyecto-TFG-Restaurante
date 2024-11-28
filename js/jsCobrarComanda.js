$(document).ready(function() {
    var nombreArchivo = localStorage.getItem('nombreArchivo');
    $.ajax({
        url: '../Comanda/' + nombreArchivo,
        dataType: 'json',
        success: function(data) {
            for (var persona in data) {
                /*Recogemos los datos*/
                var productos = data[persona]['Producto'];
                var cantidades = data[persona]['Cantidad'];
                var precios = data[persona]['Precio'];

                /*Creamos la tabla y la añadimos*/
                for (var i = 0; i < productos.length; i++) {
                    var producto = productos[i];
                    var cantidad = parseInt(cantidades[i]);
                    var precioUnitario = parseFloat(precios[i].replace('€', '').replace(',', '.'));
                    var precioTotal = (cantidad * precioUnitario).toFixed(2).replace('.', ',') + '€';

                    var fila = '<tr><td>' + producto + '</td><td>' + cantidad + '</td><td>' + precios[i] + '</td><td>' + precioTotal + '</td></tr>';
                    $('table').append(fila);
                }
            }
            /*Llamamos a calcular total*/
            calcularTotal();
        },
        error: function() {
            alert('Error al leer el archivo');
        }
    });
});
/*Calculamos el total y cambiamos el punto por coma*/
function calcularTotal() {
    var total = 0;
    $('th:contains("Precio en total")').parent().parent().find('tr').each(function() {
        var precio = $(this).find('td:last').text();
        if (precio) {
            precio = precio.replace(',', '.');
            total += parseFloat(precio);
        }
    });
    $('#TotalMoney').text(total.toFixed(2).replace('.', ',') + '€');
}



/*-------------------------------------------------------------------------------------------------------------------------*/
/*div para cobrar en fisico*/
/*Calculamos el total y cambiamos el punto por coma*/
function calcularTotal2() {
    var total = 0;
    $('th:contains("Precio en total")').parent().parent().find('tr').each(function() {
        var precio = $(this).find('td:last').text();
        if (precio) {
            precio = precio.replace(',', '.');
            total += parseFloat(precio);
        }
    });
    $('#TotalMoney2').text(total.toFixed(2).replace('.', ',') + '€');
}


document.getElementById('CobrarFisico').addEventListener('click', function() {
    var divFisico = document.getElementById('divFisico');
    var divTarjeta = document.getElementById('divTarjeta');

    if (divTarjeta.style.display === 'block') {
        divTarjeta.style.display = 'none';
    }

    if (divFisico.style.display === 'none') {
        divFisico.style.display = 'block';
        calcularTotal2();
    } else {
        divFisico.style.display = 'none';
    }
});





document.getElementById('TicketSI').addEventListener('click', function() {
    var nombreTicket = localStorage.getItem('nombreTicket');
    var nombreArchivo = localStorage.getItem('nombreArchivo');
    var fechaCobro = localStorage.getItem('fechaCobro');
    var horaCobro = localStorage.getItem('horaCobro');
    var rows = document.querySelectorAll('table tr');
    var data = [];

    for (var i = 1; i < rows.length; i++) {
        var nombreProducto = rows[i].querySelector('td:nth-child(1)').innerText;
        var cantidad = rows[i].querySelector('td:nth-child(2)').innerText;
        var precioUnitario = rows[i].querySelector('td:nth-child(3)').innerText;
        var precioTotal = rows[i].querySelector('td:nth-child(4)').innerText;

        data.push({
            nombreProducto: nombreProducto,
            cantidad: cantidad,
            precioUnitario: precioUnitario,
            precioTotal: precioTotal
        });
    }

    var total = document.getElementById('TotalMoney2').innerText;

    /*Dos llamadas ajax 1 para genear el pdf para el usuario y otro para el servidor*/
    $.ajax({
        url: '../Controlador/controladorPDF.php',
        type: 'post',
        data: JSON.stringify({ productos: data, total: total, nombreArchivo: nombreArchivo, fechaCobro: fechaCobro, nombreTicket: nombreTicket, horaCobro: horaCobro }),
        contentType: 'application/json',
        success: function (data) {
            var link = document.createElement('a');
            link.href = 'data:application/pdf;base64,' + data;
            link.download = 'Ticket_' + nombreTicket + '.pdf';
            link.click();

        }
    });

    $.ajax({
        url: '../Controlador/controladorPDF_copia.php',
        type: 'post',
        data: JSON.stringify({ productos: data, total: total, nombreArchivo: nombreArchivo, fechaCobro: fechaCobro, nombreTicket: nombreTicket, horaCobro: horaCobro }),
        contentType: 'application/json',
        success: function (data) {
            window.location.href = '../Vista/PaginaPrincipal.php';
        }
    });
});






/*-------------------------------------------------------------------------------------------------------------------------*/
/*div para cobrar con tarjeta*/
document.getElementById('CobrarTarjeta').addEventListener('click', function() {
    var divTarjeta = document.getElementById('divTarjeta');
    var divFisico = document.getElementById('divFisico');

    if (divFisico.style.display === 'block') {
        divFisico.style.display = 'none';
    }

    if (divTarjeta.style.display === 'none') {
        divTarjeta.style.display = 'block';
        calcularTotal3();
    } else {
        divTarjeta.style.display = 'none';
    }
});

/*Calculamos el total y cambiamos el punto por coma*/
function calcularTotal3() {
    var total = 0;
    $('th:contains("Precio en total")').parent().parent().find('tr').each(function() {
        var precio = $(this).find('td:last').text();
        if (precio) {
            precio = precio.replace(',', '.');
            total += parseFloat(precio);
        }
    });
    $('#TotalMoney3').text(total.toFixed(2).replace('.', ',') + '€');
}

document.getElementById('Pagar').addEventListener('click', function(event) {
    event.preventDefault();

    var numeroTarjeta = document.getElementById('numeroTarjeta').value;
    var fechaVencimiento = document.getElementById('fechaVencimiento').value;
    var cvv = document.getElementById('cvv').value;
    var divTarjeta = document.getElementById('divTarjeta');
    var divYaCobrado = document.getElementById('divYaCobrado');

    var regexTarjeta = /^\d{16}$/;
    var regexFecha = /^(0[1-9]|1[0-2])\/\d{2}$/;
    var regexCVV = /^\d{3}$/;
    /*Comprobacion de que la tarjeta debe de tener 16 digitos*/
    if (!regexTarjeta.test(numeroTarjeta)) {
        alert('El número de tarjeta debe tener 16 dígitos.');
        return;
    }
    /*Comprobacion de que la fecha de vencimiento debe de tener un x formato*/
    if (!regexFecha.test(fechaVencimiento)) {
        alert('La fecha de vencimiento debe estar en formato MM/AA.');
        return;
    }
    /*Comprobacion de que el cvv debe de tener 3 digitos*/
    if (!regexCVV.test(cvv)) {
        alert('El CVV debe tener 3 dígitos.');
        return;
    }

    divTarjeta.style.display = 'none';
    /*Muestra el div de ya cobrado tras 1,5s*/
    setTimeout(function() {
        divYaCobrado.style.display = 'block';
    }, 1500);
});


document.getElementById('TicketSITarjeta').addEventListener('click', function() {
    var nombreTicket = localStorage.getItem('nombreTicket');
    var nombreArchivo = localStorage.getItem('nombreArchivo');
    var fechaCobro = localStorage.getItem('fechaCobro');
    var horaCobro = localStorage.getItem('horaCobro'); // Añadido la hora de cobro
    var rows = document.querySelectorAll('table tr');
    var data = [];

    for (var i = 1; i < rows.length; i++) {
        var nombreProducto = rows[i].querySelector('td:nth-child(1)').innerText;
        var cantidad = rows[i].querySelector('td:nth-child(2)').innerText;
        var precioUnitario = rows[i].querySelector('td:nth-child(3)').innerText;
        var precioTotal = rows[i].querySelector('td:nth-child(4)').innerText;

        data.push({
            nombreProducto: nombreProducto,
            cantidad: cantidad,
            precioUnitario: precioUnitario,
            precioTotal: precioTotal
        });
    }

    var total = document.getElementById('TotalMoney3').innerText;

    /*Dos llamadas ajax 1 para genear el pdf para el usuario y otro para el servidor*/
    $.ajax({
        url: '../Controlador/controladorPDF.php',
        type: 'post',
        data: JSON.stringify({ productos: data, total: total, nombreArchivo: nombreArchivo, fechaCobro: fechaCobro, nombreTicket: nombreTicket, horaCobro: horaCobro }),
        contentType: 'application/json',
        success: function (data) {
            var link = document.createElement('a');
            link.href = 'data:application/pdf;base64,' + data;
            link.download = 'Ticket_' + nombreTicket + '.pdf';
            link.click();

        }
    });

    $.ajax({
        url: '../Controlador/controladorPDF_copia.php',
        type: 'post',
        data: JSON.stringify({ productos: data, total: total, nombreArchivo: nombreArchivo, fechaCobro: fechaCobro, nombreTicket: nombreTicket, horaCobro: horaCobro }),
        contentType: 'application/json',
        success: function (data) {
            window.location.href = '../Vista/PaginaPrincipal.php';
        }
    });
});
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
$(document).ready(function() {
    $('#BotonVolver').click(function() {
        window.location.href = '../Vista/PaginaPrincipal.php';
    });
});
