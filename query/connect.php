<?php

/*
 * created arcady.1254@gmail.com 19/3/2012
 */

setlocale(LC_ALL, 'ru_RU.utf8');

    $link = mysql_connect("mysql69.1gb.ru","gb_hare", "e99f5b2a0m1") or die ("Ошибка");
        
    mysql_select_db("gb_hare");
        
    mysql_query ("SET NAMES utf8");
    
    $document_root = $_SERVER["DOCUMENT_ROOT"];
    
    $host          = $_SERVER["HTTP_HOST"];
        
    if (mysql_errno() <> 0) exit("Ошибка");
?>
