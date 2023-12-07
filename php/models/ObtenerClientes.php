<?php
// obtenerclientes.php

include "../db_connection.php";

// Realiza la consulta para obtener la lista de clientes
$sql = "SELECT * FROM clientes";
$result = $connection->query($sql);

if ($result) {
    $clientes = array();

    // Obtén los resultados de la consulta y agrégalos al array
    while ($row = $result->fetch_assoc()) {
        $clientes[] = $row;
    }

    // Libera el resultado de la consulta
    $result->free_result();

    // Cierra la conexión a la base de datos
    $connection->close();

    // Devuelve la lista de clientes en formato JSON
    echo json_encode($clientes);
} else {
    // Si hay un error en la consulta, devuelve un mensaje de error en formato JSON
    echo json_encode(['error' => 'Error al obtener la lista de clientes']);
}
?>
