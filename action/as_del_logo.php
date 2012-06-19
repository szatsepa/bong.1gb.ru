<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$out = array();

$filename = $_SERVER["DOCUMENT_ROOT"] . '/images/logo/logo.gif';

if(unlink($filename)){
   $out['ok'] = 1; 
}else{
    $out['ok'] = NULL;
}

echo json_encode($out);
?>
