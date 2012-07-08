<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
include '../query/connect.php';

$out = array('ok'=>NULL);

$query = "INSERT INTO `orders_history` (`id`, `time`,`status`,`customer`)
    VALUES ($_POST[order],
(SELECT `time` FROM `orders` WHERE id = $_POST[order]),
(SELECT `status` FROM `orders` WHERE id = $_POST[order]),
(SELECT  `customer` FROM `orders` WHERE id = $_POST[order]))";

$result = mysql_query($query);

if($result){
    $query = "DELETE FROM orders WHERE id = $_POST[order]";
    
    $result = mysql_query($query);
    
    $cnt = mysql_affected_rows();
    
    if($cnt > 0){
        $out['ok'] = 1;
    }
}

echo json_encode($out);

mysql_close();
?>
