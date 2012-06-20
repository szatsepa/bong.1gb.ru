<?php

/*
 * 29/5/2012
 */
include '../query/connect.php';

if(isset($_POST[amount])){
    $amount = intval($_POST[amount]);
}else{
    $amount = 1;
}

if(isset($_POST[pid])){
    $price_id = intval($_POST[pid]);
}else{
    $price_id = 1;
}

$customer = intval($_POST[customer]);

$artikul = $_POST[artikul];

$query1 = "UPDATE cart 
             SET amount = (amount + $amount),
                 time = now()
             WHERE artikul = '$artikul'
             AND customer = $customer";

$result = mysql_query($query1);

$aff_r = mysql_affected_rows();

if($aff_r === 0){
    $query = "INSERT INTO cart (
                        amount,
                        artikul,
                        price_id,
                        customer,
                        time)
                        VALUES
                        (
                        $amount,
                        '$artikul',
                        $price_id,
                        $customer,
                        now())";

    $result = mysql_query($query);
}




$query = "UPDATE pricelist 
	  SET amount = (`amount` - $amount) 
	  WHERE artikul = '$artikul' AND code2 <> 'X'";

mysql_query($query);

 $query = "UPDATE cart SET time = now()  
	   WHERE customer  = id 
           AND price_id = $price_id";
 
 mysql_query($query);
 
 // Пропишем в корзине id заказа, из которого создан данный заказ
$parent_order = intval($_POST[parent_order]);

if (isset($parent_order) and $parent_order > 0) {


    $query = "UPDATE cart SET parent_order = $parent_order  
                            WHERE customer  = $customer
                            AND price_id = $price_id";
   
    mysql_query($query);
}

// если в корзине колич товаров равно нулю то удаляем сей артикул из корзины

mysql_query("DELETE FROM cart WHERE amount = 0");

$out = array();

$out['rows'] = $customer;

$out['query'] = $query1;

echo json_encode($out);

mysql_close(); 
?>
