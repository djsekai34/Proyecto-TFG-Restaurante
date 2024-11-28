<?php
/*Importamos lo necesario*/
require_once "../Modelo/BaseDeDatosConexion.php";
require_once "../Modelo/Password.php";
require_once "../Modelo/PersonaBD.php";


/*Inicamos la sesion*/
session_start();

/*Hacemos la conexion a la base de datos*/
$conexion = BaseDeDatosConexion::getConexion('saboresdelmundo');

/*Aqui hacemos lo necesario cuando le demos al boton de loguearnos*/
if (isset($_POST['login'])){
    $correo = $_POST['correo'];
    $password = $_POST['pwd'];
    $_SESSION["UsuarioLogs"] = $_POST['correo'];

    $personaBD = new PersonaBD($conexion);
    $personaBD->login($correo, $password);
}


/*Cuando le demos al boton regristar nos llevara a regristar*/
if (isset($_POST['registrar'])){
    header('Location: ../Vista/registro.php');
}

/*Cuando le demos al boton regristar, haremos lo del if*/
if (isset($_POST['registroUsuario'])){
    $dni = $_POST['dni'];
    $apellidos = $_POST['apellidos'];
    $nombre = $_POST['nombre'];
    $fechaNacimiento = DateTime::createFromFormat('d/m/Y', $_POST['fechaNacimiento'])->format('Y-m-d');
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    $localidad = $_POST['localidad'];
    $provincia = $_POST['provincias'];
    $calle = $_POST['calle'];
    $cp = $_POST['cp'];
    $tipo = 0;
    $password = Password::hash($_POST['pwd']);
    $personaBD = new PersonaBD($conexion);
    $personaBD->registrar($dni, $apellidos, $nombre, $fechaNacimiento, $telefono, $correo, $localidad, $provincia, $calle, $cp, $tipo, $password);
}

/*LOGIN CON GOOGLE*/
require_once '../../vendor/autoload.php';
require_once '../Modelo/configGoogle.php';

/*Variables para hacer el logueo con google*/
$client = new Google_Client();
$client->setClientId($clientID);
$client->setClientSecret($clientSecret);
$client->setRedirectUri($redirectUri);
$client->addScope("email");
$client->addScope("profile");

if (isset($_POST['InicioConGoogle'])) {
    header('Location: ' . $client->createAuthUrl());
    exit();
}

if (isset($_GET['code'])) {
    $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
    $_SESSION['access_token'] = $token;
    $client->setAccessToken($token['access_token']);
}

if (isset($_SESSION['access_token']) && $_SESSION['access_token']) {
    $client->setAccessToken($_SESSION['access_token']);
    $google_oauth = new Google_Service_Oauth2($client);
    $google_account_info = $google_oauth->userinfo->get();
    $_SESSION['correo'] =  $google_account_info->email;
    $nombreCompleto = $google_account_info->name;
    $partesDelNombre = explode(" ", $nombreCompleto);
    $_SESSION['usuario'] = $partesDelNombre[0];

    if (isset($_SESSION['correo']) &&   $_SESSION['usuario']){
        header('Location: ../Vista/PaginaPrincipal.php');
    }
} else {
    echo 'User not logged in';
}