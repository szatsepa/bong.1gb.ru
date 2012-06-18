<?php

/*
 * 29/5/2012
 */
include '../query/connect.php';

$id = intval($_POST[customer]);

$artikul = $_POST[artikul];

$query = "UPDATE cart 
             SET amount = (amount + 1),
                 time = now()
             WHERE artikul = '$artikul'
             AND customer = $customer";

$result = mysql_query($query);

$aff_r = mysql_affected_rows();

if($aff_r == 0){
    $query = "INSERT INTO cart (
                        amount,
                        artikul,
                        price_id,
                        customer,
                        time)
                        VALUES
                        (
                        1,
                        '$artikul',
                        1,
                        $id,
                        now())";

    $result = mysql_query($query);
}




$query = "UPDATE pricelist 
	  SET amount = (`amount` - $volume) 
	  WHERE artikul = '$artikul' AND code2 <> 'X'";

mysql_query($query);

 $query = "UPDATE cart SET time = now()  
	   WHERE customer  = id 
           AND price_id = 1";
 
 mysql_query($query);
 
 // Пропишем в корзине id заказа, из которого создан данный заказ
$parent_order = intval($_POST[parent_order]);

if (isset($parent_order) and $parent_order > 0) {


    $query = "UPDATE cart SET parent_order = $parent_order  
                            WHERE customer  = $id
                            AND price_id = 1";
   
    mysql_query($query);
}

// если в корзине колич товаров равно нулю то удаляем сей артикул из корзины

mysql_query("DELETE FROM cart WHERE amount = 0");

$query = "SELECT SUM(c.amount) AS amount,
                 SUM(c.amount*p.price) AS cash  
            FROM cart AS c, pricelist AS p  
            WHERE c.customer = $id  
            AND p.artikul = c.artikul";

$result = mysql_query($query);

$out = mysql_fetch_assoc($result);

echo json_encode($out);

mysql_close(); 
?>
