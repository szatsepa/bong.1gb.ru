<?php 
include 'connect.php';

$id = intval($_POST[pid]);

$query = "SELECT  p.id,
                    p.name,
                    p.comment,
                    p.creation,
                    p.tags,
                    p.order_limit
               FROM price p
               WHERE p.id = $id
	   ORDER BY p.id";
$result = mysql_query($query) or die($query);

$price = array();

$price = mysql_fetch_assoc($result);

echo json_encode($price);

mysql_free_result($result);

mysql_close();
?>