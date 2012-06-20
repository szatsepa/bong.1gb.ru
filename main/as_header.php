<?php
header('Content-Type: text/html; charset=utf-8');  
//header("Cache-Control: no-store"); 
//header("Expires: " . date("r")); 

//if(isset($attributes[jsc]))$javascript = $attributes[jsc];
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">

<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta http-equiv="Last-Modified" value="<?php echo date("r",(time() - 60));?>">
	<title><?php echo $title;?></title> 
	<link rel="STYLESHEET" type="text/css" href="../css/style.css">
        <link rel="STYLESHEET" type="text/css" href="../css/as_style.css">
        
<!--        <script type="text/javascript" src="../js/jquery.js"></script>-->
	<script type="text/javascript" src="../js/jquery-1.4.4.min.js"></script>
<!--        <script type="text/javascript" src="../js/jquery.validate.js"></script>-->
        <script type="text/javascript" src="../js/my_request.js"></script>
        <script type="text/javascript" src="../js/as_<?php echo $attributes[act];?>.js"></script>

</head>
<!--  -->
<body onload="<?php if (isset($attributes[jsc])) echo "javascript:alert('".$attributes[jsc]."')"; ?>">
    <div class="main"> 
        <div class="main_0">
              
            <h3>&nbsp;Административная область</h3>

<div class="selector"><table border="0" width="100%"><tr>
<?php if ($_SESSION[auth] == 0 or !isset($_SESSION[auth])) {?>
<form action="?act=auth" method="post">
    <td width='*' align='right'>
        <input type="password" name="code" size="10"/>
        <input type="submit" value="&gt;&gt;" />
    </td>
</form>
<?php } else if(isset($user)){?>
<td>

    <a href="?act=prices" class="header2">Прайсы</a>
    <a href="?act=imges" class="header2">Изображения</a>
    <a href="?act=items" class="header2">Товары</a>
    <a href="?act=orders" class="header2">Заказы</a>
    <a href="?act=reports" class="header2">Отчеты</a>
    <a href="?act=stat" class="header2">Статистика</a> 
</td>
<td width='*' align='right'>
    <small>
        <b><?php echo $user->data["name"]." ".$user->data["surname"];?> 
            <a href = '?act=logout'>&gt;&gt;</a>
        </b>
    </small>
</td>
<?php } else if(isset($user) && $user->data[status] == 11){?>
<td>
    <a href="?act=companies" class="header2">Компании</a>
    <a href="?act=users" class="header2">Пользователи</a>
    <a href="?act=allstorefront" class="header2">Все витрины</a>
    <a href="?act=rubrikator" class="header2">Рубрикатор</a>
    <a href="?act=arch_zakaz&amp;display=all" class="header2">Заказы</a>
    <a href="?act=messages" class="header2">Сообщения</a>
</td>
<td width='*' align='right'>
    <small>
        <b><?php echo $user->data["name"]." ".$user->data["surname"];?> 
            <a href = '?act=logout'>&gt;&gt;</a>
        </b>
    </small>
</td>
<?php }?>
</tr>
    </table>
</div>
<br /> 
<!--<p></p>-->
<h2 style="text-align: center;"><?php echo $title; ?></h2>

