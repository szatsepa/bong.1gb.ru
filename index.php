<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
if(!isset($_SESSION)){

    session_start();    
}
include 'query/connect.php';

include 'main/header.php';

switch ($_GET[act]) {
    
    case 'main':
        include 'main/main.php';
        break;
    case 'sec':
        include 'main/second.php';
        break;
    
    default :
        header("location:?act=main");
        break;
}

include 'main/footer.php';

mysql_close();
?>
