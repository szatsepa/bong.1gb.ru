<?php

/*
 * 28/5/2012
 */

$customer = intval($_SESSION[id]);
//$customer = intval($_POST[id]);


$query = "SELECT c.id, 
                 c.amount, 
                 c.discount, 
                 c.artikul, 
                 pl.price, 
                 ((c.amount)*(pl.price)) AS cost 
         FROM cart AS c, pricelist AS pl  
         WHERE c.customer = $customer 
         AND c.artikul = pl.artikul";

$result = mysql_query($query) or die($query); 

$pos =0;

$cart_summ = 0;

while ($row = mysql_fetch_assoc($result)){
    
    $cart_summ += intval($row[cost]);
    $pos++;
}

?>
