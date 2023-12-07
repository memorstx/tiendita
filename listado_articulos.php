
<?php
  include "./php/db_connection.php";
  
  $sql = "SELECT * FROM articulos";
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

    header("Content-Type: application/json");
    echo json_encode($articulos);

  }

  // $articulos = array(
    //     array('id_articulo' => 1, 'nombre' => 'Artículo 1', 'descripcion' => 'Descripción 1', 'marca' => 'Marca 1', 'categoria' => 'Categoría 1', 'precio' => 19.99, 'estatus' => 1),
    //     array('id_articulo' => 2, 'nombre' => 'Artículo 2', 'descripcion' => 'Descripción 2', 'marca' => 'Marca 2', 'categoria' => 'Categoría 2', 'precio' => 29.99, 'estatus' => 1),
    
    // );
    
    
    // header('Content-Type: application/json');
    
    // echo json_encode($articulos);
    
    
  ?>