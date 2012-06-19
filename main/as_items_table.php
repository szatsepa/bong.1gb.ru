<?php 

$cnt = count($items);

$pages = ceil($cnt/36);

if(isset ($attributes[page])){
    
    $page = intval($attributes[page]);
    
    $start = 36*$page;
    
}else{
    
    $start = 0;
    
    $page = 0;
    
}

if($start > (count($items) + 1)){
    
    $start = (count($items) - 36);
}
if($start < 0){
    
    $start = 0;
}


?>
<br />
<?php 
//echo "$page ==== $cnt  -   $pages  &&& start >> $start<br/>";
include '../main/as_pager.php';
?>
<br />
<table class="dat">
<th class="dat">Штрих-код</th>
<th class="dat">Наименование</th>
<th class="dat">Краткое описание</th>
<th class="dat">Состав</th>
<th class="dat">Описание</th>
<!--<th class="dat">Сайт поддержки</th>-->
<th class="dat">НДС %</th>
<th class="dat"></th>

<?php

$rows = 0;

for($i=$start;$i<($cnt-1);$i++) {
    
    $row = $items[$i];
	
	if (strlen($row["description"]) > 32) {
            
            $row["description"] = iconv("UTF-8", "WINDOWS-1251", $row["description"]);
	
		$row["description"] = substr($row["description"],0,32)."...";
                
                $row["description"] = iconv("WINDOWS-1251", "UTF-8", $row["description"]);
	
	} else {
		
		$row["description"] = $row["description"];
		
	}
	
	if (strlen($row["ingridients"]) > 25) {
            
             $row["ingridients"] = iconv("UTF-8", "WINDOWS-1251", $row["ingridients"]);
	
		$row["ingridients"] = substr($row["ingridients"],0,25)."...";
                
                $row["ingridients"] = iconv("WINDOWS-1251", "UTF-8", $row["ingridients"]);
	
	} else {
		
		$row["ingridients"] = $row["ingridients"];
		
	}
	
	if (strlen($row["specification"]) > 50) {
	
		$row["specification"] = iconv("UTF-8", "WINDOWS-1251", $row["specification"]);
	
		$row["specification"] = iconv_substr($row["specification"],0,50)."...";
                
               $row["specification"] = iconv("WINDOWS-1251", "UTF-8", $row["specification"]);
	
	} else {
		
		$row["specification"] = $row["specification"];
		
	}

    echo "<tr>";
    echo "<td class='dat'>".$row["barcode"]."</td>";
    echo "<td class='dat'>".$row["name"]."</td>";
    echo "<td class='dat'>".$row["description"]."</td>";
    echo "<td class='dat'>".$row["ingridients"]."</td>";
    echo "<td class='dat'>".$row["specification"]."</td>";
    echo "<td class='dat' style='text-align:center'>".$row["nds"]."</td>";
    echo "<td class='dat'><a class='itm' style='text-align:center;text-decoration:underline;cursor:pointer;' name='".$row["barcode"]."' target='".$page."'>Редакт.</a></td>";
?>
        
<?php        
    echo "</tr>";
    
    if($rows > 34){
        
                break;
                 
                }
    
    $rows++;
}

?>
</table>
<br/>
  
<?php
include '../main/as_pager.php';
?>
    


