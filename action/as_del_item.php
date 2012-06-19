<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
include '../query/connect.php'; 


$barcode = $_POST[barcode];

$query = "SELECT `name` FROM `image_items` WHERE `barcode` = '$barcode'";

$result = mysql_query($query) or die ($query);

while ($row = mysql_fetch_assoc($result)){
    
    $filename = $document_root.'/images/items'.$row[id];
    
    unlink ($filename);
}

$query = "UPDATE `pricelist` SET `code2` = 0 WHERE `barcode`='$barcode'";

mysql_query($query) or die($query);

$query = "DELETE FROM `image_items` WHERE `barcode` = '$barcode'";

mysql_query($query) or die($query);

$query = "DELETE FROM `goods` WHERE `barcode` = '$barcode'";

mysql_query($query) or die($query);

$out = array();

$out['ok'] = NULL;

$cnt = mysql_affected_rows();

if($cnt != 0)$out['ok'] = 1;

echo json_encode($out);

mysql_close();
?>
