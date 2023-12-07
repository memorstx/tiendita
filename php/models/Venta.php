<?php
include "../db_connection.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $cliente = isset($_POST['cliente']) ? $_POST['cliente'] : null;
    $fecha = isset($_POST['fecha']) ? $_POST['fecha'] : null;
    $total = isset($_POST['total']) ? $_POST['total'] : null;

    $sql = "INSERT INTO ventas (cliente, fecha, total) VALUES ('$cliente', '$fecha', '$total')";

    if ($connection->query($sql) === TRUE) {
        
        echo json_encode(['success' => true, 'message' => 'Venta guardada con éxito']);
    } else {
       
        echo json_encode(['success' => false, 'message' => 'Error al guardar la venta: ' . $connection->error]);
    }
} else {
    
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
}

$connection->close();
?>
