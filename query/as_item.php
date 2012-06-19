<?php 
// Список товаров (штрих-коды)
include 'connect.php';

$barcode = $_POST[barcode];

$page = $_POST[page];

$query = "SELECT barcode, 
                name,
                description,
                ingridients, 
                specification, 
                nds
            FROM goods
            WHERE barcode = '$barcode'
            ORDER BY barcode";

$result = mysql_query($query) or die($query);

$item = array();

$item = mysql_fetch_assoc($result);

// Какие картинки есть для товара?
$query = "SELECT name
            FROM image_items
            WHERE barcode = '$barcode'";

$result = mysql_query($query) or die($query);

$row = mysql_fetch_assoc($result);

$item['image'] = $row[name];

$item['page'] = $page;
//
//while ($var = mysql_fetch_assoc($result)){
//    array_push($items, $var);
//}

echo json_encode($item);

mysql_free_result($result);

mysql_close();

?>