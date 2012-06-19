<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 * Здесь выводится краткая таблица всех прайсов в системе 
 */

?>
<div id="content">
    <br />
<table>
<tr>
    
	<td>Создать прайс;</td>
	<td>
            <input id="p_name" type="text" value="">
        </td>
	<td><input id="new_price" type="button" value="Ok"></td>
   
</tr>
</table>
<br />
<br />
<table class="dat">
<th class="dat">Наименование</th>
<th class="dat">Дата загрузки</th>
<th class="dat">Описание</th>
<th class="dat">Мин. заказ</th>
<th class="dat"></th>
<?php 
foreach ($prices as $value) {
	$price_id    = $value["id"];
        $comment     = $value["comment"];
	$tags        = $value["tags"];
	$order_limit = $value["order_limit"];
	
	if ($order_limit == 0) $order_limit = '';
	
		
?>
<tr>
	<td><?php echo $value["name"];?></td>
	<td><?php 
            if ($value["creation"] == '') {
                echo "<div style='color:red'>Не загружен</div>";
            } else {
                echo "<small>".$value["creation"]."</small>";
            }
    ?></td>
	<td><?php echo $comment;?></td>
	<td><div align="center"><?php echo $order_limit;?></div></td>
	<td><a name="<?php echo $value[id];?>" class="red" id="price_<?php echo $value[id];?>" style="text-decoration: underline;cursor: pointer;">Редактировать</a><td>
</tr>
<?php } ?>
</table>
</div>
<div id="pricelist">
    <br />

    <div align="center">
            <table class="dat" border="0" width="950" >
            <tr>
                    <td colspan="6">&nbsp;</td>
            </tr>
            <tr>
                <td><input id="price_delete" type="button" value="Удалить прайс" style="font-weight:bold;color:red;"></td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td >Название: <span id="price_name"></span></td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>Дата последней загрузки: </td>
                <td id="creation"  style='color:red;font-weight:bold;'></td>
            </tr>
            <tr>
                    <td colspan="6">&nbsp;</td>
            </tr>
            </table>

        <br />
        <br />
       <span id="upl_price"> 
            <table class="dat" border="0" width="950" >
                <tr>
                        <td colspan="4">&nbsp;</td>
                </tr>
                <tr>
                <form enctype="multipart/form-data" action="index.php?act=upload_price" method="post" name="price_upload" id="price_upload">
                    
                        <td>
                            <input id="max_size" type="hidden" name="MAX_FILE_SIZE" value="1048575">
                            <input id="price_id" type="hidden" name="price_id" value="">
                            <input id="upload_file" type="file" name="userfile" size="62" accept="text/*"/>
                        </td>
                        <td>
                            <input id="limit" type="checkbox" name="limit" value="1">
                            <label for="limit">Безлимитный</label>
                        </td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td>
                            <input id="price_upload" type="submit" value="Загрузить прайс">
                        </td>
                </form>
                </tr>
                <tr>
                        <td colspan="4">&nbsp;</td>
                </tr>
            </table>
        
        <br />
        <br />
    </span>
            <table class="dat" border="0" width="950" >
            <tr>
                    <td colspan="2">&nbsp;</td>
            </tr>
            <tr>
                    <td>Описание:</td>
                    <td>
                        <input id="dscr" type="text" name="comment" maxlength="255" size="92" value="">
                    </td>
            </tr>
            <tr>
                    <td>Теги:</td>
                    <td>
                        <input id="tg" type="text" name="tags" maxlength="255" size="92" value="">
                    </td>
            </tr>
           
            <tr>
                <td colspan="2">
                    <div style="text-align: right;">
                        <input id="save_chng" type="button" value="Сохранить изменения">
                    </div>
                </td>
            </tr>   
            

            <tr>
                <td colspan="2">&nbsp;</td>
            </tr>

            </table>
<br/>
<br/>
        </div>
</div>
<div class="any_f"></div>