<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
include 'connect.php';

$user = array();

$email = $_POST[email];

$code = $_POST[code];

$query = "SELECT * FROM customers WHERE code='$code' AND email='$email'";

$result = mysql_query($query);

$cnt = mysql_num_rows($result);

if($cnt != 0){
    $user = mysql_fetch_assoc($result);
    $user['ok']=1;
}else{
    $user['ok']=NULL;
}



echo json_encode($user);

mysql_close();
?>
