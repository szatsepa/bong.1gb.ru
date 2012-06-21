<?php

/*
 * 5/6/2012
 */
include '../query/connect.php';

include 'quotesmart.php';



$email = quote_smart($_POST[email]);

$id = intval($_POST[customer]);

$shipment = quote_smart($_POST[shipment]);

$phone = quote_smart($_POST[phone]);

$comment = quote_smart($_POST[comment]);


$query = "INSERT INTO orders (customer, email, phone,shipment,comments) VALUES ($id,$email,$phone,$shipment,$comment)";

mysql_query($query) or die($query);

$order = mysql_insert_id();

//$order = 1;

$response = array('z_id'=>$order);

echo json_encode($response);

mysql_close();
?>
