<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
include '../query/connect.php';

$status = intval($_POST[status]);

$order = intval($_POST[order]);

$query = "UPDATE `orders` SET status = $status WHERE id = $order";

$result = mysql_query($query);

$cnt = mysql_affected_rows();

$out = array('ok'=>NULL);

if($cnt != 0)$out['ok'] = 1;

echo json_encode($out);

mysql_close();
?>
