<?php

/*
 * 6/6/2012
 */
$days = array('Пн','Вт','Ср','Чт','Пт','Сб','Вс');

$zakaz = array('','','','','','','');

// Счетчик количества заказов по дням недели
$order_count = array(0,0,0,0,0,0,0);
?>
<script type="text/javascript">
    var user_id = <?php echo $_SESSION[id];?>;
    var my_cart = new Array();
    var my_orders = new Array();
</script>
<div id="content">
    <?php
    
        foreach ($orders_week as $value) {
    
    // Ограничим вывод
    $counter = $order_count[$value["weekday"]];
    if ($counter >= 5) continue;
    
    $dsp = '';
    
    if($value["status"] == 1) {
        $status = "<span class='edit2'>Новый</span>";
        $dsp    = "&amp;dsp=decline";
    }
    if($value["status"] == 2) {
        $status = "<span class='edit'>Рассмотрен</span>";
        $dsp    = "&amp;dsp=decline";
    }
    if($value["status"] == 3) $status = "<span class='edit4'>Отменен</span>";
    
    if($value["status"] == 4) {
        $status = "<span class='edit3'>Отгружен</span>";
        $dsp    = "&amp;dsp=fin";
    }
    if($value["status"] == 5) $status = "<span class='edit5'>Выполнен</span>";
    if($value["status"] == 6) $status = "<span class='edit2'>Демо</span>";
    $dat = $zakaz[$value["weekday"]]."<p style='margin-left:5px;margin-top:5px;margin-bottom:10px;margin-right:3px;'><a href='index.php?act=view_order'>N".$value["id"]."&nbsp;".$value["zakaz_date"]."<br />".$value["price_name"]."</a><br />".$status."</p>";

    $zakaz[$value["weekday"]] = $dat;
    
    // Посчитаем количество заказов на один день
    ++$counter;
    $order_count[$value["weekday"]] = $counter;
    
}

?> 
 <div style="margin-left:5px;">
    <p class="order">Заказы по дням недели:</p>
<table class='cart'   border="0">
<?php
foreach ($days as $day) {
?>
<th  class='cart' style="width:10em;"><?php echo $day;?></th>
<?php } ?>
<tr>
<?php
foreach ($zakaz as $dat) {
?>
<td class='cart' style="text-align:left;" valign="top"><?php echo $dat;?><br/>&nbsp;</td>
<?php } ?>
</tr>
</table>
    
<!--    <p><a href="index.php?act=all_orders" class="help" style="text-decoration:underline;">Архив заказов</a>&nbsp;&nbsp;</p>-->
</div>   

<br/>
<?php if(count($my_cart)) { ?>
<p class="order">Незавершенные заказы</p>

<br/>&nbsp;
<!--width="100"-->
<table class="btp" border="0" >
    
    <tbody>
        <tr>
            <td class="btp">
                
                    <input style="cursor: pointer;" type="button" onClick="javascript:document.location.href = '?act=main';" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#000'" value="Прайс заказа" class="submit2"/>
               
            </td>
            <td class="btp">
                <form action="" method="post"> 
                   
                    <input  style="cursor: pointer;" id="createOrder" type='button' onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#000'" value='Оформить заказ'   class="submit2"/>
                </form>
            </td>
            <td class="btp">
                <form action="" method="post">
                     
                    <input style="cursor: pointer;" id="clear_all" type='button' onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#000'" value='Удалить заказ'  class="submit2" />
                </form>
            </td>
        </tr>
    </tbody>
</table>
<br />

<br />

<div style="margin-left:5px;margin-bottom:10px;">
<?php

$field_count	=	0;

if(count($my_cart, COUNT_RECURSIVE)){
       
$fields = array ("Артикул","Наименование","Емкость","Цена ед.","Кол-во (л.)","Скидка","Цвет");

echo "<table border='0' class='cart'>";

// Выводим заголовок таблицы

foreach ($fields as $value) {
        echo "<th class='cart'>".$value."</th>";
    // Место под кнопку
}

echo "<th class='cart'>&nbsp;</th>";

$row_count = 0;

$total = 0;

foreach ($my_cart as $key => $value) {
    ?>
     <script type="text/javascript">
    var tmp = <?php echo json_encode($value);?>;
    my_cart.push(tmp);
    </script>
    <?php
        
    echo "<tr>";
    
    $field_count = 0;

    echo "<td class='cart'>".$value[artikul]."</td>";
    echo "<td class='cart'>".$value[name]."</td>";
    echo "<td class='cart'>".$value[volume]."</td>";
    echo "<td class='cart'>".$value[price]."</td>";
    echo "<td class='cart'>".$value[amount]."</td>";
    echo "<td class='cart'>".$value[discount]."</td>";
    echo "<td class='cart' style='background-color:hsl($value[h],$value[s]%,$value[b]%);color:#fff;'>".$value[h]."-".$value[s]."-".$value[b]."</td>";
    
//    
    $single_price = $value[price]; 
    $amount       = $value[amount];
    $price_id     = $value[price_id];
    $discount = $value[discount];
    $total += ($single_price*$amount)*(1-$discount/100);
    
    $artikul = $value[artikul];
    echo "<td class='cart' style='cursor: pointer;'><input id='clear_row' name='$value[id]' class='submit3' type='button' value='X'></td>";
    
   echo "</tr>"; 
      
 ++$row_count;
    
}


if ($total == 0) {
//    echo"<tr><td colspan='5'>В корзине нет товаров</td><td colspan='2' align='right'>&nbsp;</td></tr>";
}
echo"<tr><td colspan='5'></td><td class='cart' colspan='2' align='right'>Итого: ".$total."руб. </td></tr>";
echo "</table>";

if ($mobile != 'true') {?>
</div>
    <?php }
    }
}

 ?>
</div>
<div id="order_form">
    <div style="position:relative; width: 600px;height:27px;">
        <p id="order_title"></p>
    </div>
    <div class="order_header" style="font-size:16px;font-weight:bold;color: black;position:relative;margin:0 auto;width:92%;height:47px;">
            <div style="position:relative;float:left;width:43px;text-align:center;">
                <p style="">№</p>
            </div>
            <div style="position:relative;float:left;width:543px;text-align:center;">
                <p>Наименование</p>
            </div>
            <div style="position:relative;float:left;width:52px;text-align:center;">
                <p style="">Колич</p>
            </div>
            <div style="position:relative;float:left;width:143px;text-align:center;">
                <p style="">Цена</p>
            </div>
    </div>
    <div id="order_body">
        <?php 
        $n = 1;
        foreach ($my_cart as $value) {
            ?>
        <div id="order_row_<?php echo $n;?>" style="font-size:14px;color: black;position:relative;margin:0 auto;width:92%;height:47px;">
            <div style="position:relative;float:left;width:43px;text-align:center;">
                <p><?php echo $n;?></p>
            </div>
            <div style="position:relative;float:left;width:543px;text-align:left;">
                <p id="name_<?php echo $n;?>"><?php echo $value[name];?></p>
            </div>
            <div style="position:relative;float:left;width:52px;text-align:center;">
                <p id="amount_<?php echo $n;?>" style=""><?php echo $value[amount];?></p>
            </div>
            <div style="position:relative;float:left;width:143px;text-align:center;">
                <p id="cost_<?php echo $n;?>" style=""><?php echo $value[cost];?></p>
                 
            </div>
            <div style="visibility:hidden;" >
                <p id="artikul_<?php echo $n;?>"><?php echo $value[artikul];?></p>
            </div>
        </div>
        <?php
        $n++;
        }
        ?>
    </div>
    <div class="order_footer"  style="font-weight:normal;position:relative; width: 720px;height:270px;margin: 0 auto;text-align:left;">
        <div id="address">
            <p>
                <label>Адрес доставки:&nbsp;&nbsp;&nbsp;&nbsp;</label><input id="shipment" type="text" value="" size="72"/>
            </p>
        </div>
        <div id="o_email">
            <p><label>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><input id="act_email" type="text" value="" size="72"/></p>
        </div>
        <div id="o_phone">
            <p>
                <label>Телефон:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><input id="phone" type="text" value="" size="72"/>
            </p>
        </div>
        <div id="o_comm">
            <p>
                <label>Пожелания:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><textarea id="act_comment" cols="72" rows="6"></textarea>
            </p>
        </div>
        <div id="o_order" style="width:520px;margin-top: 12px;">
            <div style="position:relative;float: left;width: 300px;">
                <p id="back_to_cart" style="text-align: right;font-size: 18px;font-weght:bold;color: black;text-decoration:underline;cursor:pointer;">
                    Вернутся
                </p>
            </div>
            <div style="position:relative;float: left;width: 120px;">
                <p id="to_order" style="text-align: right;font-size: 18px;font-weght:bold;color: black;text-decoration:underline;cursor:pointer;">
                    Заказать
                </p>
            </div>
        </div>
     </div>
    <div id="o_order" style="width:100%;height:24px;">

        </div>
    
</div>