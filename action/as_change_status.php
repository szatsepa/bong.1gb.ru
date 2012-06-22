<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
include '../query/connect.php';

$status = intval($_POST[status]);

$order = intval($_POST[order]);

$step = $_POST[step];

$query = "UPDATE `orders` SET status = $status WHERE id = $order";

mysql_query($query);

$cnt = mysql_affected_rows();

$out = array('ok'=>NULL);

if($cnt != 0)$out['ok'] = 1;

$query = "SELECT o.email, c.name, c.surname FROM `orders` AS o, customers AS c WHERE o.id = $order AND o.customer = c.id";

$result = mysql_query($query);

$row = mysql_fetch_assoc($result);

$message ="Здравствуйте ".$row[name]." ".$row[surname]."! Ваш закаказ №$order получил статус '$step'\r\n C уважением.\n Администрация. ";              

$headers = 'From: administrator@bong.1gb.ru' . "\r\n";

$headers  .= 'MIME-Version: 1.0' . "\r\n";

$headers .= 'Content-type: text/plain; charset=utf-8' . "\r\n";

$to= $row[name]." ".$row[surname]."<".$row[email].">" ; //обратите внимание на запятую

mail($to, 'Статус заказа', $message, $headers);

echo json_encode($out);

mysql_close();
?>
