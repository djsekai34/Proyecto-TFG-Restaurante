<?php

$data = json_decode(file_get_contents('php://input'), true);
$nombreArchivo = $data['nombreArchivo'];

unlink('../Comanda/' . $nombreArchivo);

