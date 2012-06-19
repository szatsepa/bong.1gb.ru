<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
include 'connect.php';

$oid = intval($_POST[oid]);

$query = "SELECT c.name,
                 c.surname,
                 c.email,
                 o.time,
                 o.exe_time,
                 o.phone, 
                 o.shipment, 
                 o.comments,
                 o.status
            FROM orders AS o, 
                 customers AS c 
           WHERE o.id  = $oid AND 
                 o.customer = c.id";

$result = mysql_query($query);

$row = mysql_fetch_assoc($result);

$out = array();

$out['order'] = $row;

$query = "SELECT * FROM `orders_items` WHERE `order` = $oid";

$result = mysql_query($query);

$tmp = array();

while ($var = mysql_fetch_assoc($result)){
    array_push($tmp, $var);
}

$out['items'] = $tmp;

echo json_encode($out);

mysql_close();
?>
