<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
?>
<div id="content">
<div align="center">
    
<table border="1">
    <tr>
        <td valign="top" class="kab">
            <table border="0" cellpadding="5" cellspacing="5" width="430">
                <tr>
                	<td><div class="kab">Новые заказы</div></td>
                </tr>
				<tr><td><?php
         
				 foreach ($orders as $row) {
                                     
                                     if ($row["status"] == 1) {
                                         
						echo "<p><a class='new_order' id='no_".$row["id"]."' name='".$row["id"]."'>N".$row['id'].'&nbsp;'.$row['order_date']."</a>;";
						// Отсроченный заказ?
						if ($row["exe_date"] != '') {
						
							echo "<br /><strong><small>Исполнить ".$row["exe_date"]."</small></strong>";
						
						}
						echo "</p>";
                                         }
				}
                                
				 ?>
                        </td>
                    </tr>				
            </table>
        </td>
                    
                    
		<td valign="top" class="kab">
            <table border="0" cellpadding="5" cellspacing="5" width="430">
                <tr>
                    
                	<td><div class="kab">Текущие заказы</div></td>
                </tr>
				<tr><td>
                                <?php
                                
                                foreach ($orders as $row) { 
                                    
                                    switch ($row[report]){
                                        case 0:
                                            $color = "blue";
                                            break;
                                        
                                        case 1:
                                            $color = "green";
                                            break;
                                    }          
                                    
				if(($row["status"])== 5)$color = "brown";
                                
                                if($row[report] == 1)$label = "doc";
                                
					// Выводим только подтвержденные и отгруженные заказы
					if ($row["status"] == 2 or $row["status"] == 3) {
						
						
                        switch ($row["status"]) {
                            case 2:
                                $dsp = " (Подтвержден)";
                            break;
                                
                            case 5:
                                $dsp = " (Отменен)";
                            break;
                            
                            case 3:
                                $dsp = " (Отгружен)";
                            break;
                            
                            case 4:
                                $dsp = " (Выполнен)";
                            break;
                        }

                            echo "<p><a class='new_order' id='no_".$row["id"]."' name='".$row["id"]."'>N".$row['id'].'&nbsp;'.$row['order_date'].$dsp."</a>;";
                                    // Отсроченный заказ?
                                    if ($row["exe_date"] != '') {

                                            echo "<br /><strong><small>Исполнить ".$row["exe_date"]."</small></strong>";

                                    }
                                    echo "</p>";

                            }				
                    }
                                

				?>
                                    </td>
                                   
                                </tr>	

            </table>
                   
        </td>

</tr>
</table>
    
</div>
    <div id="exp" style="position: relative;width: 96%;margin: 12px auto;font-size: 16px;">
        
    </div>
    <div id="status_btn" name="">
        <p style="text-align:center;font-size: 16px;font-weight: bold;">
            Изменить статус на - <a id="stat" style="text-decoration: underline;cursor: pointer;" name="" type="button" value=""/></a>
        </p>
    </div>
    <div style="position: relative;width: 96%;height: 120px;">
        
    </div>
