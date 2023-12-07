<?php
include "../db_connection.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $idArticulo = isset($_POST['idArticulo']) ? $_POST['idArticulo'] : null;
    $nombre = isset($_POST['nombre']) ? $_POST['nombre'] : null;
    $descripcion = isset($_POST['descripcion']) ? $_POST['descripcion'] : null;
    $marca = isset($_POST['marca']) ? $_POST['marca'] : null;
    $precio = isset($_POST['precio']) ? $_POST['precio'] : null;

    $sql = "UPDATE articulos SET nombre = '$nombre', descripcion = '$descripcion', marca = '$marca', precio = $precio WHERE id_articulo = $idArticulo";


    if ($connection->query($sql) === TRUE) {
        echo json_encode(['success' => true, 'message' => 'Artículo actualizado con éxito']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error al actualizar el artículo: ' . $connection->error]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
}

$connection->close();
?>
