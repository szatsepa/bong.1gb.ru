<?php

/*
 * created by arcady.1254@gmail.com 7/5/2012
 */

$query = "SELECT p.id AS price_id, pl.id AS item, pl.artikul, pl.barcode, pl.name, pl.price, i.name AS img
FROM price AS p, pricelist AS pl, image_items AS i
WHERE p.status =1
AND p.id = pl.pricelist
AND pl.barcode = i.barcode
AND pl.code2 =1";

$result = mysql_query($query) or die($query);

$items_array = array();

while ($var = mysql_fetch_assoc($result)) {
    array_push($items_array, $var);
}

mysql_free_result($result);
?>
