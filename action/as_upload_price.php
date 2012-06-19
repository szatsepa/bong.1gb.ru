<?php
// To do проверять дублирование артикулов в одном прайсе

if (move_uploaded_file($_FILES['userfile']['tmp_name'], $_FILES['userfile']['name']))
{
  // print "Файл успешно загружен.\n";    
} 
	else 
{
    print "Произошла ошибка при загрузке файла.";
}

$pid = intval($attributes[price_id]);

$nameoffile = $_FILES['userfile']['name'];

$row = 1;

$handle = fopen ($nameoffile,"r");
// Количество успешно добавленных строк
$sucs = 0;

$query2 = "DELETE FROM pricelist WHERE pricelist=$pid";

$result = mysql_query($query2) or die($query2);

// Имя текущей группы не установлено
$group_flag = 0;

while ($data = fgetcsv ($handle, 65636,";")) {
    
//    print_r($data);
//    echo "<br/>";
	if ($data [0] == '' and $data [1] == '' and $group_flag == 0)
		{
			$group = $data [2];
			// Имя уже образовалось
			$group_flag = 1;
			$row++;
			continue;
		}
		
	// Дополняем имя группы	
	if ($data [0] == '' and $data [1] == '' and $group_flag == 1)
		{
			$group = $group." ".$data [2];	
			$row++;
			continue;
		}
	
	// Появились данные на продукцию, сбрасываем флаг установки имени группы, ждем новую группу
	if ($data[0] != "")
		{
			$group_flag = 0;
		}
	
	
	$row++;
	$actual_row = $row - 1;
	$error = false;
	
    // Избавляемся от букв в имени артикула

    
	$data[8] = str_replace (",",".",$data[8]);
	$data[8] = str_replace (" ","",$data[8]);
	$data[9] = str_replace (",",".",$data[9]);
	$data[9] = str_replace (" ","",$data[9]);
	$group   = str_replace ('"','',$group);
	$group   = str_replace ("'","",$group);
	
	if ($data[8] == '') $data[8] = 0;
	if ($data[9] == '') $data[9] = 0;
	
    // Установлен ли безлимитный остаток?
    if (isset($attributes[limit]) and $attributes[limit] == 1){
        // Признак безлимитного остатка
        $data[10] = 999999999;
    }
	
    $artikul	      = iconv("WINDOWS-1251", "UTF-8", $data[0]);
    $barcode      = iconv("WINDOWS-1251", "UTF-8", $data[1]);
    $name         = iconv("WINDOWS-1251", "UTF-8", $data[2]);
    $state        = iconv("WINDOWS-1251", "UTF-8", $data[3]);
    $volume       = iconv("WINDOWS-1251", "UTF-8",$data[4]);
    $price = intval($data[5]);
    $amount       = intval($data[6]);
    $property        = iconv("WINDOWS-1251", "UTF-8",$data[7]);
    $degree       = intval($data[8]);
    $pricelist_id     = $pid;  
    
	$query3 = "INSERT INTO pricelist 
					   (artikul,
					    barcode,
					    name,
                                            state,
                                            volume,
                                            price,
                                            amount,
                                            pricelist,
                                            property,
                                            degree) 
                                    VALUES ('$artikul',
                                            '$barcode',
                                            '$name',
                                            '$state',
                                            '$volume',
                                           '$price',
                                            '$amount',
                                            '$pricelist_id',
                                            '$property',
                                            '$degree')";
						
	$result = mysql_query($query3) or die($query3."<br>");

        
	$sucs++;

}

fclose ($handle);
$javascript = "javascript:alert('Прайс загружен. Занесено ".$sucs." записей.');";

// Здесь установим сообщение об успешном обновлении информации
$eid = 2;

unlink ($nameoffile);

$query4 = "UPDATE price SET creation=now() where id=$pid";

$qry_updateprice = mysql_query($query4) or die($query4);

header("location:index.php?act=prices");

 ?>