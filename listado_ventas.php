
<?php
  include "./php/db_connection.php";
  
  $sql = "SELECT * FROM ventas";
  $result = $connection->query($sql);

  if (!$result) {
    die("error". $connection->error);
  }
  else{
    $ventas = array();
    if($result->num_rows>0){
      while ($row = $result->fetch_assoc()) {
        $ventas[] = array(
            "id_venta" => $row['id_venta'],
            "fecha"=> $row['fecha'],
            "total"=> $row['total'],
        );
        
      }
    }

    header("Content-Type: application/json");
    echo json_encode($ventas);
  }

?>