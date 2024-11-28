<?php
require_once "../../../nusoap/lib/nusoap.php";
header('Content-Type: application/json; charset=utf-8');

$url="https://ovc.catastro.meh.es/ovcservweb/ovcswlocalizacionrc/ovccallejero.asmx?WSDL";
$cliente= new nusoap_client($url,true);

function listarProvincias($cliente){
    $respuesta = $cliente->call("ObtenerProvincias", "");
    return $respuesta;
}

function listarMunicipios($cliente, $provincias){
    $parametros = array('Provincia' => $provincias, 'Municipio' => '');
    $respuesta = $cliente->call("ObtenerMunicipios", $parametros);
    return $respuesta;
}

function listarCalles($cliente, $provincia, $localidad){
    $parametros = array('Provincia' => $provincia, 'Municipio' => $localidad, 'TipoVia' => '', 'NombreVia' => '');
    $respuesta = $cliente->call("ObtenerCallejero", $parametros);
    return $respuesta;
}

function listarCallesProvincia($cliente, $provincia){
    $parametros = array('Provincia' => $provincia, 'Municipio' => $provincia, 'TipoVia' => '', 'NombreVia' => '');
    $respuesta = $cliente->call("ObtenerCallejero", $parametros);
    return $respuesta;
}

try {
    /*Listar todas las calles*/
    if (isset($_GET['provincia']) && isset($_GET['localidad']) && $_GET['provincia'] != 'CEUTA' && $_GET['provincia'] != 'MELILLA') {
        $provinciaBuscar = mb_convert_encoding($_GET['provincia'], 'ISO-8859-1', 'UTF-8');;
        $localidadBuscar = mb_convert_encoding( $_GET['localidad'], 'ISO-8859-1', 'UTF-8');
        $calles = listarCalles($cliente, $provinciaBuscar, $localidadBuscar);
        // Procesar la respuesta y devolverla como JSON
        $callesArray = $calles['consulta_callejero']['callejero']['calle'];
        $jsonArrayCalle = array();
        foreach ($callesArray as $calle) {
            if (isset($calle['dir']['nv']) && isset($calle['dir']['tv'])) { // Accede a 'nv' y 'tv' dentro de 'dir'
                $nv = mb_convert_encoding($calle['dir']['nv'], 'UTF-8', 'ISO-8859-1');
                $tv = mb_convert_encoding($calle['dir']['tv'], 'UTF-8', 'ISO-8859-1');
                $jsonArrayCalle[] = array(
                    'nv' => $nv,
                    'tv' => $tv
                );
            }
        }
        header('Content-Type: application/json');
        echo json_encode($jsonArrayCalle);
    /*----------------------------------------------------------------------------------------------------------------*/
    /*Listar localidades*/
    }elseif (isset($_GET['provincia']) && $_GET['provincia'] != 'CEUTA' && $_GET['provincia'] != 'MELILLA') {
    $provinciaBuscar = mb_convert_encoding($_GET['provincia'], 'ISO-8859-1', 'UTF-8');
    $municipios = listarMunicipios($cliente, $provinciaBuscar);
    // Procesar la respuesta y devolverla como JSON
    $municipiosArray = $municipios['consulta_municipiero']['municipiero']['muni'];
    $jsonArrayMunicipio = array();
    foreach ($municipiosArray as $municipio) {
        $nm = mb_convert_encoding($municipio['nm'], 'UTF-8', 'ISO-8859-1');
        $jsonArrayMunicipio[] = array(
            'nm' => $nm
        );
    }
    header('Content-Type: application/json');
    echo json_encode($jsonArrayMunicipio);
    /*----------------------------------------------------------------------------------------------------------------*/
    /*Lista Ceuta y Melilla*/
    } elseif (isset($_GET['provincia'])) {
        $provinciaBuscar = mb_convert_encoding($_GET['provincia'], 'ISO-8859-1', 'UTF-8');;
        $calles = listarCallesProvincia($cliente, $provinciaBuscar);
        // Procesar la respuesta y devolverla como JSON
        $callesArray = $calles['consulta_callejero']['callejero']['calle'];
        $jsonArrayCalle = array();
        foreach ($callesArray as $calle) {
            if (isset($calle['dir']['nv']) && isset($calle['dir']['tv'])) { // Accede a 'nv' y 'tv' dentro de 'dir'
                $nv = mb_convert_encoding($calle['dir']['nv'], 'UTF-8', 'ISO-8859-1');
                $tv = mb_convert_encoding($calle['dir']['tv'], 'UTF-8', 'ISO-8859-1');
                $jsonArrayCalle[] = array(
                    'nv' => $nv,
                    'tv' => $tv
                );
            }
        }
        header('Content-Type: application/json');
        echo json_encode($jsonArrayCalle);
    /*----------------------------------------------------------------------------------------------------------------*/
    /*Listar todas las provincias*/
    } else {
        $provincias = listarProvincias($cliente);
        // Obtener el array provincias
        $provinciasArray = $provincias['consulta_provinciero']['provinciero']['prov'];
        // Prepare array for JSON
        $jsonArray = array();
        foreach ($provinciasArray as $provincia) {
            $np = mb_convert_encoding($provincia['np'], 'UTF-8', 'ISO-8859-1');
            $jsonArray[] = array(
                'cpine' => mb_convert_encoding($provincia['cpine'], 'UTF-8', 'ISO-8859-1'),
                'np' => $np
            );
        }
        header('Content-Type: application/json');
        echo json_encode($jsonArray);
        /*\u00d1*/
    }
} catch (Exception $e) {
    header('Content-Type: application/json');
    echo json_encode(array('error' => $e->getMessage()));
}
?>
