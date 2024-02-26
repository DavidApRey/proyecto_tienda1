<?php

include('./conexion.php');
$metodo = $_SERVER['REQUEST_METHOD'];

if ($metodo == 'POST') {

    $id_marca = $_POST['id_marca'];
    $capacidad = $_POST['capacidad'];
    $tipo_disco = $_POST['tipo_disco'];
    $referencia = $_POST['referencia'];

    $insert_alma = "INSERT INTO `computa_almacenamiento`(`id_cons`, `id_marca`, `capacidad`, `tipo_disco`, `referencia`, `estado`) VALUES 
                        (null,'$id_marca','$capacidad','$tipo_disco','$tipo_disco','Y')";
    $result = $mysqli->query($insert_alma);

    if (!$result) {
        echo 400;
    } else {
        echo 200;
    }

}

if ($metodo == 'GET') {
    if (isset($_GET['datos_general'])) {
        $sql = "SELECT
        computa_almacenamiento.id_cons,
        computa_marca.marca,
        computa_almacenamiento.capacidad,
        computa_almacenamiento.tipo_disco,
        computa_almacenamiento.estado
        FROM computa_almacenamiento
        INNER JOIN computa_marca ON computa_marca.id_cons = computa_almacenamiento.id_marca";
        $result = $mysqli->query($sql);
        $resultarray = array();

        $i=0;
        foreach ($result as $key) {
            $resultarray[$i]['id_cons'] = $key['id_cons'];
            $resultarray[$i]['marca'] = $key['marca'];
            $resultarray[$i]['capacidad'] = $key['capacidad'];
            $resultarray[$i]['tipo_disco'] = $key['tipo_disco'];
            $resultarray[$i]['estado'] = $key['estado'];
            $i++;
        }

        echo json_encode($resultarray);
    }

    if (isset($_GET['datos_especi'])) {

        $id = $_GET['id_alma'];

        $sql = "SELECT * FROM computa_almacenamiento WHERE id_cons = '$id'";
        $result = $mysqli->query($sql);
        $resultarray = array();

        foreach ($result as $key) {
            $resultarray[] = $key;
        }

        echo json_encode($resultarray);
    }
}

if ($metodo == 'PUT') {

    $id_cons = $id_cons['id_cons'];
    $id_marca = $datos_put['id_marca'];
    $capacidad = $datos_put['capacidad'];
    $tipo_disco = $datos_put['tipo_disco'];
    $referencia = $datos_put['referencia'];
    $estado = $datos_put['estado'];

    $update = "UPDATE `computa_almacenamiento` SET 
                `id_marca`='$id_marca',
                `capacidad`='$capacidad',
                `tipo_disco`='$tipo_disco',
                `referencia`='$referencia',
                `estado`='$estado'
            WHERE `id_cons`='$id_cons'";
    $result = $mysqli->query($update);

    if (!$result) {
        echo 400;
    } else {
        echo 200;
    }

}

if ($metodo == 'DELETE') {
    $id_cons = $id_cons['id_cons'];

    $delete = "DELETE FROM `computa_almacenamiento` WHERE `id_cons` = '$id_cons'";
    $result = $mysqli->query($delete);

    if (!$result) {
        echo 400;
    } else {
        echo 200;
    }
}