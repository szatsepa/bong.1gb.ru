<?php
header('Content-Type: text/html; charset=utf-8');
 echo '<?xml version="1.0" encoding="utf-8"?>'; 
 ?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru">

<head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <title>BONG</title>
        <meta name="title" content="BONG" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        
        <link rel="stylesheet" href="../css/style.css" type="text/css" media="screen, projection" />
        <link rel="stylesheet" href="../css/<?php echo $_GET[act];?>.css" type="text/css" media="screen, projection" />
        <link rel="stylesheet" href="../css/user_forms.css" type="text/css" media="screen, projection" />
       
        <script type="text/javascript" src="../js/jquery-1.4.4.min.js"></script>
        <script type="text/javascript" src="../js/my_request.js"></script>
        <script type="text/javascript" src="../js/img_load.js"></script>
<!--        <script type="text/javascript" src="../js/u.js"></script>
        <script type="text/javascript" src="../js/jquery.blockUI.js"></script>-->
<!--        <script type="text/javascript" src="jquery.blockUI.js"></script>-->
        <script type="text/javascript" src="../js/<?php echo $_GET[act];?>.js"></script>
        
        
</head>
    <body onload="$('.main').css('visibility', 'visible');">
<!--        <div id="pl" style="background-color:#000;opacity:0.6;width:100%;height:100%;z-index:22;padding-top: 175px;padding-left: 325px;"><img src="../images/indicator_load.gif" border="0"  alt=""></div>-->
       <div class="main"> 
        <div id="main_0"> 