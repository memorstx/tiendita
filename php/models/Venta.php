<?php
include "../db_connection.php";

// Verificar si la solicitud es de tipo POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $cliente = isset($_POST['cliente']) ? $_POST['cliente'] : null;
    $fecha = isset($_POST['fecha']) ? $_POST['fecha'] : null;
    $total = isset($_POST['total']) ? $_POST['total'] : null;

    // Validar los datos (puedes agregar más validaciones según tus necesidades)

    // Insertar los datos en la base de datos
    $sql = "INSERT INTO ventas (cliente, fecha, total) VALUES ('$cliente', '$fecha', '$total')";

    if ($connection->query($sql) === TRUE) {
        // Éxito en la inserción
        echo json_encode(['success' => true, 'message' => 'Venta guardada con éxito']);
    } else {
        // Error en la inserción
        echo json_encode(['success' => false, 'message' => 'Error al guardar la venta: ' . $connection->error]);
    }
} else {
    // La solicitud no es de tipo POST
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
}

// Cierra la conexión a la base de datos
$connection->close();
?>
