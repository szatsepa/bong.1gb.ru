<?php

/*
 *6/6/2012
 */

$query = "SELECT DISTINCT a.id, 
			 a.status,
                         DATE_FORMAT(a.time, '%d.%m.%y %H:%i') order_date,
			 DATE_FORMAT(a.exe_time, '%d.%m.%y %H:%i') exe_date,
                         g.price_id,
                         p.name,
			 u.surname,
                         u.email,
                         a.report
          FROM orders AS a, 
               orders_items AS g,
               price AS p,
               customers AS u           
          WHERE a.id = g.order AND 
                p.id = g.price_id AND 
                u.id=a.customer AND
                a.id=g.order
          ORDER BY a.id DESC";

$result = mysql_query($query) or die ($query);

$orders = array();

while ($var = mysql_fetch_assoc($result)){
    array_push($orders, $var);
}
mysql_free_result($result);
?>
