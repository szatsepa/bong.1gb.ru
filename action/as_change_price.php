<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
include '../query/connect.php';

include 'quotesmart.php';

$id = intval($_POST[pid]);

$tags = quote_smart($_POST[tags]);

$comment = quote_smart($_POST[comment]);

$query = "UPDATE price SET tags=$tags, comment = $comment WHERE id = $id";

mysql_query($query);

$aff = mysql_affected_rows();

$out = array();

if($aff != 0){
    $out['ok'] = 1;
}else{
    $out['ok'] = NULL;
}

echo json_encode($out);

mysql_close();
?>
