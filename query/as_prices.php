<?php 
$query = "SELECT  p.id,
                    p.name,
                    p.comment,
                    p.creation,
                    p.tags,
                    p.order_limit
               FROM price p
	   ORDER BY p.id";
$result = mysql_query($query) or die($query);

$prices = array();

while ($var = mysql_fetch_assoc($result)){
    array_push($prices, $var);
}

mysql_free_result($result);
?>