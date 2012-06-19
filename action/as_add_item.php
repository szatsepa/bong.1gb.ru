<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
include '../query/connect.php';

$barcode       	= trim($_POST[barcode]);
$name          	= trim($_POST[name]);
$description	= trim($_POST[description]);
$ingridients   	= trim($_POST[ingridients]);
$specification 	= trim($_POST[specification]);
$nds            =trim($_POST[nds]);

$query = "INSERT INTO goods 
                        (barcode, 
                            name,
                            description,
                            ingridients, 
                            specification, 
                            nds) 
            VALUES ('$barcode', 
                            '$name',
                            '$description',
                            '$ingridients', 
                            '$specification', 
                            '$nds')";
			  
$result = mysql_query($query) or die($query);

$out = array();

$out['ok'] = mysql_affected_rows();

echo json_encode($out);

mysql_close();
?>
