<?php

$user_id = intval($_SESSION[id]);

if (move_uploaded_file($_FILES['userfile']['tmp_name'], $_FILES['userfile']['name']))
{
      $jscr =  "Файл успешно загружен.\n";    
} 
	else 
{
    $jscr = "Произошла ошибка при загрузке файла.";
}

$nameoffile = $_FILES['userfile']['name'];

$row = 1;

$handle = fopen ($nameoffile,"r");
// Количество успешно добавленных строк
$sucs = 0;

$bad = 0;

while ($data = fgetcsv ($handle, 65636,";")) {
    	
	// Пропускаем строку, если нет штрихкода или названия
	if ($data [0] == '' or $data [1] == '') {
	
		continue;
	
	}
    
        $aff = 0;

        $barcode  		= iconv("WINDOWS-1251", "UTF-8", $data[0]);
        $name       		= iconv("WINDOWS-1251", "UTF-8", $data[1]);
        $description            = iconv("WINDOWS-1251", "UTF-8", $data[2]);
        $ingridients		= iconv("WINDOWS-1251", "UTF-8", $data[3]);
	$specification		= iconv("WINDOWS-1251", "UTF-8", $data[4]);
	$nds	      		= iconv("WINDOWS-1251", "UTF-8", $data[5]);
                
                
	$query = "INSERT INTO goods
                                    (barcode, 
                                    name,
                                    description,
                                    ingridients, 
                                    specification, 
                                    nds) 
                              VALUES 
                                    ('$barcode', 
                                    '$name', 
                                    '$description',
                                    '$ingridients', 
                                    '$specification', 
                                    '$nds')";
	
	$result = mysql_query($query);
        
//        echo "$query</br>";
        
        $aff = mysql_affected_rows();
				  
	if($aff != 0){
            
            $sucs++;
            
        }
        
}


fclose ($handle);

unlink ($nameoffile);

$jscr = "Добавлено $sucs строк.";

?>
<script language="javascript">
    document.write ('<form action="index.php?act=items" method="post"><input type="hidden" name="jsc" value="<?php echo $jscr;?>"/></form>');
    document.forms[0].submit();
</script>
