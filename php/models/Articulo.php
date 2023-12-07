
<?php
  include "../db_connection.php";
  $idArticulo = $_GET['idArticulo'];

  // echo $idArticulo;
  $sql = "SELECT * FROM articulos WHERE id_articulo = $idArticulo";
  $result = $connection->query($sql);

  if (!$result) {
    die("error". $connection->error);
  }
  else{
    $articulos = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $articulos[] = array(
                'id_articulo' => $row['id_articulo'],
                'codigo' => $row['codigo_de_barras'],
                'nombre' => $row['nombre'],
                'descripcion' => $row['descripcion'],
                'marca' => $row['marca'],
                'categoria' => $row['categoria'],
                'precio' => $row['precio'],
                'estatus' => $row['estatus']
            );
        }
    }

    echo json_encode($articulos);
    header("Content-Type: application/json");

  }
  

  ?>