<?php

/*
 * 6/6/2012
 */

$customer = intval($_SESSION[id]);

$query = "SELECT DISTINCT a.id, 
                          a.time, 
                          weekday( a.time ) AS weekday, 
                          DATE_FORMAT( a.time, '%d.%m.%y' ) zakaz_date, 
                          g.price_id, 
                          p.name price_name, 
                          a.status
                    FROM orders AS a, orders_items AS g, price AS p
                    WHERE a.customer =$customer
                    AND a.id = g.order
                    AND p.id = g.price_id
                    AND TO_DAYS( NOW( ) ) - TO_DAYS( a.time ) <=54
                    ORDER BY weekday, a.id DESC";

$result = mysql_query($query) or die($query);

$orders_week = array();

while ($var = mysql_fetch_assoc($result)){
    array_push($orders_week, $var);
}
mysql_free_result($result);

//print_r($orders_week);
?>
