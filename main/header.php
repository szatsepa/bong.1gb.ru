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
       
        <script type="text/javascript" src="../js/jQuery -1.7.2.js"></script>
        <script type="text/javascript" src="../js/jquery-1.4.4.min.js"></script>
        <script type="text/javascript" src="../js/my_request.js"></script>
        <script type="text/javascript" src="../js/in_form.js"></script>
        <script type="text/javascript" src="../js/<?php echo $_GET[act];?>.js"></script>

        
</head>
    <body onload="">
        

<script type="text/javascript">
    var customer = new Object();
</script>
<?php
if(isset($user)){
    ?>
<script type="text/javascript">
    
 var customer = {id:<?php echo $user->data[id];?>,name:'<?php echo $user->data[name];?>',surname:'<?php echo $user->data[surname];?>',email:'<?php echo $user->data[email];?>',phone:'<?php echo $user->data[phone];?>'};
    
</script>
    <?php
}
 ?>
        <div class="main"> 
<!--            <div id="prelo">
                <div id="img_p" style="">
                    <img src="../images/indicator_load.gif"/>
                </div>
            </div>-->
                <div id="main_0"> 