<?php

/*
 * 7/6/2012
 */
include '../query/connect.php';

$customer = intval($_POST[customer]);

$id = intval($_POST[item]);

$query = "DELETE FROM cart WHERE customer = $customer AND id = $id";

$result = mysql_query($query) or die($query);

$cnt = mysql_affected_rows();

$response['rows'] = $query; 

echo json_encode($response);

mysql_close();
?>
