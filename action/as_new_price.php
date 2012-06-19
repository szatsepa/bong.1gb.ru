<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
include '../query/connect.php';

include 'quotesmart.php';

$active = intval($_POST[activ]);

$name = quote_smart($_POST[name]);

$query = "INSERT INTO price (name,activ) VALUES ($name,$active)";

$result = mysql_query($query) or die($query);

$id = mysql_insert_id();

if($id != 0){
    $price['new']=1;
}else{
    $price['new']=NULL;
}

$price['query'] = $query;

echo json_encode($price);

mysql_close();
?>
