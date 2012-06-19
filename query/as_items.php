<?php 
// Список товаров (штрих-коды)


$query = "SELECT barcode, 
                name,
                description,
                ingridients, 
                specification, 
                nds
            FROM goods
            ORDER BY barcode";

$result = mysql_query($query) or die($query);

$items = array();

while ($var = mysql_fetch_assoc($result)){
    array_push($items, $var);
}

mysql_free_result($result);

?>