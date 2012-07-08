<?php

/*
 *6/6/2012
 */
$customer = intval($_SESSION[id]);

if(!isset($_SESSION[id]) OR !$_SESSION[auth])header ("location:index.php?act=main");

$query = "SELECT * FROM orders WHERE customer = $customer";

$result = mysql_query($query) or die ($query);

$my_orders = array();

while ($var = mysql_fetch_assoc($result)){
    array_push($my_orders, $var);
}
mysql_free_result($result);
?>
