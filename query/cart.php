<?php

/*
 * 28/5/2012
 */
include 'connect.php';

$customer = intval($_POST[id]);

$query = "SELECT 
                    b.id, 
                    a.artikul,
                    a.name, 
                    a.volume, 
                    a.price,
                    b.amount,
                    b.discount,
                    a.id AS item,
                    p.comment,
                    gp.name AS img,
                    (a.price*b.amount) AS cost,
                    p.id AS price_id
             FROM pricelist a, cart b, price p,image_items gp
             WHERE a.artikul = b.artikul
               AND a.pricelist = b.price_id
               AND a.pricelist = p.id
               AND gp.barcode = a.barcode
               AND b.customer=$customer
              ORDER BY b.id";

$result = mysql_query($query) or die($query);

$my_cart = array();

while ($var = mysql_fetch_assoc($result)){
    array_push($my_cart, $var);
}
mysql_free_result($result);

echo json_encode($my_cart);

mysql_close();

?>
