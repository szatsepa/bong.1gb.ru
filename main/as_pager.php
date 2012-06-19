<?php

if($pages > 1){
?>
<p align="center">
 <?php 
   
 if($page > 0)echo "<a href='index.php?act=items&page=0'><<&nbsp;Первая &nbsp;</a><a href='index.php?act=items&page=".($page-1)."'>Предыдущая&nbsp;</a>";      
  ?>      
        
        
<?php

for($i=($page);$i<($page+4);$i++){

    if($i == $pages)break;
    
	$p = $i+1;
        
        ?>

        
        <a href="<?php echo "index.php?act=items&page=$p";?>"><?php echo $p;?></a>
    



<?php 

    }
  
    
    if($page < $pages) echo "<a href='index.php?act=items&page=".($page+1)."'>&nbsp;Следующая</a><a href='index.php?act=items&page=".$pages."'>&nbsp;Последняя&nbsp;>> </a>";
  
 $end = $start + 36; 
?>
</p>
<p align="center">Строки <?php echo ($start+1)." - ".$end." из ".$cnt;?>&nbsp;&nbsp;</p>

            
<?php
    }

?>
