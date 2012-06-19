<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
include '../query/connect.php';

include 'quotesmart.php';

$barcode = $_POST[barcode]; 
$name = $_POST[name];
$description = $_POST[description];
$ingridients = $_POST[ingridients];
$specification = $_POST[specification]; 
$nds = $_POST[nds]; 

$query = "UPDATE goods
            SET name = '$name',
                description = '$description',
                ingridients = '$ingridients', 
                specification = '$specification', 
                nds = '$nds'
          WHERE barcode = '$barcode'";

mysql_query($query);

$cnt = mysql_affected_rows();

$out = array();

$out['ok'] = NULL;

if($cnt != 0){
    $out['ok'] = 1;
}

echo json_encode($out);

mysql_close();
?>
