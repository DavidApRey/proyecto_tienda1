<?php

// $server = "localhost";
// $username = "id21920637_davidrey1311";
// $password = "Empires123@";
// $database = "id21920637_backend_tienda";

$server = "localhost";
$username = "root";
$password = "";
$database = "backendtienda";

$mysqli = new mysqli($server, $username, $password, $database);

if ($mysqli->connect_error) {
    die('error' . $mysqli->connect_error);
}

?>