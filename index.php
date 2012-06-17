<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
if(!isset($_SESSION)){

    session_start();    
}
if(isset($_COOKIE[di]) && !isset ($_SESSION[auth]) && $_COOKIE[di] != ''){
         
   $_SESSION[id] = $_COOKIE[di];
   
   $_SESSION[auth] = 1;
         
}
include 'query/connect.php';

include 'classes/User.php';

if(isset ($_SESSION[id])) {
    include 'query/checkauth.php';
}
//print_r($_COOKIE);
include 'main/header.php';

switch ($_GET[act]) {
    
    case 'main':
        include 'main/main.php';
        break;
    case 'sec':
        include 'query/items.php';
        include 'main/second.php';
        break;
    
    default :
        header("location:?act=main");
        break;
}

include 'main/footer.php';

mysql_close();
?>
