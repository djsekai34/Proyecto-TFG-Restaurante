<?php
// Incluye el autoload de Composer y crea una nueva instancia de mPDF
require_once '../../../vendor/autoload.php';
$mpdf = new \Mpdf\Mpdf();

// Recibe los datos del producto desde la solicitud AJAX
$data = json_decode(file_get_contents('php://input'), true);
$data["horaCobro"] = str_replace('-', ':', $data["horaCobro"]);

// Inicia la sesión para acceder a las variables de sesión
session_start();
$camarero = $_SESSION['usuario'];

// Añade el CSS
$stylesheet = file_get_contents('../Vista/Css/cssPDF.css');
$mpdf->WriteHTML($stylesheet, \Mpdf\HTMLParserMode::HEADER_CSS);

// Establece el encabezado con el logo y el nombre de la empresa
$mpdf->SetHTMLHeader('<img src="../Vista/imagenes/Logo.png" width="50" height="50" style="float: left;"> <h1 style="text-align: center;">Sabores del mundo</h1>');

// Añade el nombre del ticket, el camarero y la fecha y hora de cobro en la misma línea con más espacio entre ellos
$mpdf->WriteHTML('
    <br><br>
<h3 style="text-align: center;">Mesa: <span style="color: #FF4500;">' . $data["nombreTicket"] . '</span>&nbsp;&nbsp;Camarero: <span style="color: #FF4500;">' . $camarero . '</span>&nbsp;&nbsp;Fecha y Hora: <span style="color: #FF4500;">' . $data["fechaCobro"] . ' / ' . $data["horaCobro"] . '</span></h3> <br>
', \Mpdf\HTMLParserMode::HTML_BODY);

// Añade la línea fija al principio
$mpdf->WriteHTML('
        <table>
            <tr>
                <th>UDS</th>
                <th>Descripción</th>
                <th>PVP</th>
                <th>Importe</th>
            </tr>
    ', \Mpdf\HTMLParserMode::HTML_BODY);

// Añade los detalles del producto en el cuerpo del PDF
foreach ($data['productos'] as $producto) {
    $mpdf->WriteHTML('
            <tr>
                <td>' . $producto["cantidad"] . '</td>
                <td>' . $producto["nombreProducto"] . '</td>
                <td>' . $producto["precioUnitario"] . '</td>
                <td>' . $producto["precioTotal"] . '</td>
            </tr>
    ', \Mpdf\HTMLParserMode::HTML_BODY);
}

$mpdf->WriteHTML('</table>', \Mpdf\HTMLParserMode::HTML_BODY);

// Añade el total al final del PDF
$mpdf->WriteHTML('
        <br><br>
        <div class="total">
            <h1>Total: ' . $data["total"] . '</h1>
        </div>
    ', \Mpdf\HTMLParserMode::HTML_BODY);

// Genera el PDF y lo devuelve como una respuesta a la solicitud AJAX
$pdf = $mpdf->Output('', 'S');


echo base64_encode($pdf);
?>
