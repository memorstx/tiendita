<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "tiendita_db";

$connection = new mysqli($servername, $username, $password, $database);


if($connection->connect_error){
  die("Conexión fallida". $connection->connect_error);
}

?>