<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

include 'connect.php';

$query = "SELECT MAX(id) AS num FROM orders";

$result = mysql_query($query) or die($query);

$row = mysql_fetch_assoc($result);

echo json_encode($row);

mysql_close();
?>
