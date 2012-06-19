<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
include '../query/connect.php';

$id = intval($_POST[pid]);

$query = "DELETE FROM price WHERE id = $id";

$out = array();

mysql_query($query);

$aff = mysql_affected_rows();

if($aff != 0){
    $out['ok']=1;
}else{
    $out['ok']=NULL;
}

echo json_encode($out);

mysql_close();
?>
