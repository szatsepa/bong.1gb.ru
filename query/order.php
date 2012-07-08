<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
include 'connect.php';

$order = intval($_POST[order]);

$query = "SELECT o.id, o.time, o.exe_time, o.shipment, o.comments, o.status, i.artikul, i.amount, i.name, i.price, p.name AS pricename FROM orders AS o, orders_items AS i, price AS p WHERE o.id = $order AND o.id = i.order AND p.id = i.price_id";

$result = mysql_query($query);

$order = array();

while ($var = mysql_fetch_assoc($result)){
    array_push($order, $var);
}

echo json_encode($order);

mysql_free_result($result);

mysql_close();
?>
