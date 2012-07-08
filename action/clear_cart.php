<?php

/*
 * 7/6/2012
 */
include '../query/connect.php';

$customer = intval($_POST[customer]);

$query = "DELETE FROM cart WHERE customer = $customer";

$result = mysql_query($query) or die($query);

$cnt = mysql_affected_rows();

$response['rows'] = $cnt;

echo json_encode($response);

mysql_close();
?>
