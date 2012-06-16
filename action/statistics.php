<?php
/*
 * To change this template, choose Tools |7/5/2012
 */
include '../query/connect.php';

include 'quotesmart.php';

$color = quote_smart($_POST[colorDepth]);

$ip=$_SERVER['REMOTE_ADDR'];

$ip = quote_smart($ip);

if(!isset ($_SESSION[id])){
    $id = 0;
}  else {
    $id = intval($_SESSION[id]);
}

   
$resolution = quote_smart($_POST[scr_W]."x".$_POST[scr_H]);


$agent = quote_smart($_SERVER["HTTP_USER_AGENT"]);

$query = "INSERT INTO statistics 
                        (ip,
                        resolution,
                        agent,
                        colorDepth)
                VALUES ($ip,
                        $resolution,
                        $agent,
                        $color)";

mysql_query($query);

$out['ok'] = mysql_insert_id();

echo json_encode($out);

mysql_close();  
?>
