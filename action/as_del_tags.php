<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
include '../query/connect.php';

$tags = $_POST[tags];

$query = "SELECT name FROM image_groups WHERE tags = '$tags'";

$result = mysql_query($query);

$row = mysql_fetch_assoc($result);

$name = $row[name];

$out = array();

$filename = $document_root . '/images/tags/'.$name;

if(unlink($filename)){
    
    $query = "DELETE FROM image_groups WHERE tags = '$tags'";

    $result = mysql_query($query);
   $out['ok'] = 1; 
}else{
    $out['ok'] = NULL;
}

//$out['ok'] = $query;

echo json_encode($out);

mysql_close();
?>
