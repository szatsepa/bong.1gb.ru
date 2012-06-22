<?php

/*
 * 6/6/2012
 */
include '../query/connect.php';

include 'quotesmart.php';

$cart = $_POST[cart];

$order = intval($_POST[order]);

$customer = intval($_POST[customer]);

$email = $_POST[email];

$n = 0;

$str = '';

foreach ($cart as $value) {
    
    $str = "INSERT INTO `orders_items` (`order`, customer,artikul,price_id,amount,name,price)
        VALUES ($order,$customer,'$value[artikul]',$value[price_id],$value[amount],'$value[name]','$value[price]')";
    
    mysql_query($str);
    
    $cnt = mysql_affected_rows();
    
    if($cnt){
        
        $query = "DELETE FROM cart WHERE artikul='$value[artikul]' AND customer = $customer";

        mysql_query($query);
    }

        
    $n++;
    
}

$response = array('out'=>$n,'str'=>$query);
    
$query = "SELECT name, surname, email FROM customers WHERE id = $customer";

$result = mysql_query($query);

$row = mysql_fetch_assoc($result);

$message ="Здравствуйте ".$row[name]." ".$row[surname]."! Ваш закаказ №$order рассматривается\r\n C уважением. Администрация. ";              

$headers = 'From: administrator@bong.1gb.ru\r\n';

$headers  .= 'MIME-Version: 1.0' . "\r\n";

$headers .= 'Content-type: text/plain; charset=utf-8' . "\r\n";

$to= $row[name]." ".$row[surname]."<".$row[email].">" ; //обратите внимание на запятую

mail($to, 'Заказ', $message, $headers);

echo json_encode($response);

mysql_close();
?>
