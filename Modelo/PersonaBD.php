<?php
require_once "../Modelo/BaseDeDatosConexion.php";
require_once "../Modelo/Password.php";
require_once '../../vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
class PersonaBD
{
    private $conexion;

    public function __construct($conexion)
    {
        $this->conexion = $conexion;
    }

    public function login($correo, $password) {
        $consulta = $this->conexion->prepare("SELECT * FROM usuarios WHERE correo = :correo");
        $consulta->bindParam(':correo', $correo);
        $consulta->execute();

        if ($consulta->rowCount() > 0) {
            $fila = $consulta->fetch(PDO::FETCH_ASSOC);
            $hash = $fila['password'];

            if(password_verify($password, $hash)) {
                if (isset($fila['tipo'])) {
                    $_SESSION["correo"]= $correo;
                    $_SESSION["usuario"]= $fila['nombre'];
                    $_SESSION["Tipo"] = $fila['tipo'];

                    if ($fila['tipo'] == 1) {
                        header('location: ../Vista/PaginaPrincipal.php');
                    } else if ($fila['tipo'] == 2) {
                        header('location: ../Vista/PaginaAdmin.php');
                    }
                } else {
                    $_SESSION ['error'] = "Error: su cuenta no ha sido activada, así que no puede acceder";
                    header('location: ../Vista/logueo.php');
                }
            } else {
                $_SESSION ['error'] = "Error: la contraseña es incorrecta";
                header('location: ../Vista/logueo.php');
            }
        } else {
            $_SESSION ['error'] = "Error: el correo es inválido";
            header('location: ../Vista/logueo.php');
        }
    }





    public function registrar($dni, $apellidos, $nombre, $fechaNacimiento, $telefono, $correo, $localidad, $provincia, $calle, $cp, $tipo, $password)
    {
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }

        // Verificar si el correo ya está registrado
        $stmt = $this->conexion->prepare("SELECT * FROM usuarios WHERE correo = :correo");
        $stmt->bindParam(':correo', $correo);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            $_SESSION['error'] = "Error: el correo ya está registrado";
            header("Location: ../Vista/registro.php");
        } else {
            // Verificar si el DNI ya está registrado
            $stmt = $this->conexion->prepare("SELECT * FROM usuarios WHERE dni = :dni");
            $stmt->bindParam(':dni', $dni);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                $_SESSION['error'] = "Error: el DNI ya está registrado";
                header("Location: ../Vista/registro.php");
            } else {
                $hash = md5(rand(0, 2000)); // Generar el token
                $stmt = $this->conexion->prepare("INSERT INTO usuarios (dni, apellidos, nombre, fechaNacimiento, telefono, correo, localidad, provincia, calle, cp, tipo, password, token) VALUES (:dni, :apellidos, :nombre, :fechaNacimiento, :telefono, :correo, :localidad, :provincia, :calle, :cp, :tipo, :password, :token)");
                $stmt->bindParam(':dni', $dni);
                $stmt->bindParam(':apellidos', $apellidos);
                $stmt->bindParam(':nombre', $nombre);
                $stmt->bindParam(':fechaNacimiento', $fechaNacimiento);
                $stmt->bindParam(':telefono', $telefono);
                $stmt->bindParam(':correo', $correo);
                $stmt->bindParam(':localidad', $localidad);
                $stmt->bindParam(':provincia', $provincia);
                $stmt->bindParam(':calle', $calle);
                $stmt->bindParam(':cp', $cp);
                $stmt->bindParam(':tipo', $tipo);
                $stmt->bindParam(':password', $password);
                $stmt->bindParam(':token', $hash); // Añadir el token a la base de datos

                if ($stmt->execute()) {
                    $_SESSION['error'] = "Usuario Registrado correctamente, debe de verificarlo mirando su email";
                    list(, $dominio) = explode('@', $correo);
                    if ($dominio == 'server.edu') {
                        $mensaje = "Hola, has recibido este mensaje porque has iniciado el registro en nuestra web.\r\n
    Pulsa o copia el siguiente enlace en un navegador para confirmar el registro:\r\n\r\n
    http://localhost/ProyectoFinal/Vista/verifica.php?email=" . $correo . "&token=" . $hash;
                        $mensaje = wordwrap($mensaje, 70);
                        $cabeceras = 'From: noreplay@server.edu' . "\r\n";
                        mail($correo, "Nuevo usuario", $mensaje, $cabeceras);
                    } else {
                        if (!PersonaBD::enviarCorreo($correo, $hash)) {
                            header("Location: ../Vista/registro.php");
                        }
                    }
                    header("Location: ../Vista/logueo.php");
                } else {
                    $_SESSION['error'] = "Error al registrar el usuario";
                    header("Location: ../Vista/registro.php");
                }
            }
        }
        $stmt->close();
    }



    public function activarCuenta($email, $token)
    {
        // Preparar la consulta
        $stmt = $this->conexion->prepare("SELECT * FROM usuarios WHERE correo = :correo AND token = :token");

        // Vincular los parámetros
        $stmt->bindParam(':correo', $email);
        $stmt->bindParam(':token', $token);

        // Ejecutar la consulta
        $stmt->execute();

        // Verificar si se encontró una cuenta con el correo electrónico y el token proporcionados
        if ($stmt->rowCount() > 0) {
            // Si se encontró una cuenta, actualizar el estado de la cuenta a 'activada'
            $stmt = $this->conexion->prepare("UPDATE usuarios SET tipo = 1 WHERE correo = :correo AND token = :token");
            $stmt->bindParam(':correo', $email);
            $stmt->bindParam(':token', $token);
            $stmt->execute();

            return true;
        } else {
            // Si no se encontró ninguna cuenta, devolver false
            return false;
        }
    }




    public static function enviarCorreo($correo, $hash) {
        //Create a new PHPMailer instance
        $mail = new PHPMailer();
        $mail->IsSMTP();
        //Configuracion servidor mail
        $mail->From = "noreply@gmail.com"; //remitente
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = 'tls'; //seguridad
        $mail->Host = "smtp.gmail.com"; // servidor smtp
        $mail->Port = 587; //puerto
        $mail->Username = 'davidphp34@gmail.com'; //nombre usuario de google
        $mail->Password = 'zszn ifzu lfmd lequ'; //contraseña de aplicaciones de google
        $mail->AddAddress($correo); // Usuario que se envia
        $mail->Subject = "Nuevo usuario"; //Sujeto
        /*Mensaje*/
        $mail->Body = "Hola, has recibido este mensaje porque te has registrado en nuestra pagina web.\r\n
Por favor, pincha o copia este enlace para verificar su registro.\r\n\r\n
http://localhost/ProyectoFinal/Vista/verifica.php?email=" . $correo . "&token=" . $hash;
        /*Si el correo no se envia entramos al if*/
        if (!$mail->Send()) {
            /*Verificamos si la sesion esta abierta*/
            if (session_status() == PHP_SESSION_NONE) {
                session_start();
            }
            /*Mensaje de error y devolvemos false*/
            $_SESSION['error'] = "Error al enviar el correo electrónico";
            return false;
        }
        /*Si todo va okey devolvemos true*/
        return true;
    }

}