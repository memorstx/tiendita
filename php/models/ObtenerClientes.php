<?php

include "../db_connection.php";


$sql = "SELECT * FROM clientes";
$result = $connection->query($sql);

if ($result) {
    $clientes = array();

    while ($row = $result->fetch_assoc()) {
        $clientes[] = $row;
    }

    $result->free_result();
    $connection->close();

    echo json_encode($clientes);
} else {
    echo json_encode(['error' => 'Error al obtener la lista de clientes']);
}
?>
