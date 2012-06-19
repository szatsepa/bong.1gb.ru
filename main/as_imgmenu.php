<br><br>
<br>

<table class="dat" width="99%">

    <tr>
        <td align="left" valign="top"><strong>Загрузка изображений товаров</strong><br><br></td>
    </tr>
    <form enctype="multipart/form-data" action="index.php?act=upload_zipimg" method="post">
	
	<td>
            <input type="hidden" name="MAX_FILE_SIZE" value="8192000"/>   
            <input type="hidden" name="filetype" value="zip"/> 	
            <input name="userfile" type="file" size="20"/>
            <input type="submit" value="Загрузить zip-архив" id="knob"/>
    </form>
        <br />
        <br />
            <small>Максимальный объем загружаемого файла не должен превышать 8 Мегабайт (zip-архив).<br />
                    Загружаются основные изображения товара. Формат изображений - JPG.
            </small>
        </td>
	

</table>

<br>
<br>

<table class="dat" width="99%">
    <tr>
        <td align="left" valign="top"><strong>Загрузка логотипа компании</strong><br><br></td>
        <td width="50%" align="left" valign="top"><strong>Удаление логотипа компании</strong></td>
    </tr>
    <form enctype="multipart/form-data" action="index.php?act=upload_zipimg" method="post">
    
    <tr>
	    <td>
                <input type="hidden" name="MAX_FILE_SIZE" value="512000">  
                <input type="file" name="userfile" size="20">
                <input type="submit" value="Загрузить логотип">
                <br />
                <br />		
		<small>Максимальный объем загружаемого файла не должен превышать 500 килобайт, формат изображения GIF.</small>
            </td>
    </form>
<!--        <form action="index.php?act=logo_delete" method="post">   </form>  -->
                <td>
                    <input id="del_logo" type="button" value="Удалить логотип" >
                </td>		    
       
    </tr>
       
</table> 

<br>
<br>
<table class="dat" width="99%">
    <form enctype="multipart/form-data" action="index.php?act=upload_zipimg" method="post">
    <tr>
        <td align="left" valign="top">
            <strong>Загрузка изображения прайса</strong>
            &nbsp;&nbsp;&nbsp;
            <select name="tag" id="id_tags">
                <?php
                foreach ($prices as $value) {
                    ?>
                <option value="<?php echo $value[name];?>"><?php echo $value[name];?></option>
                <?php
                }
                ?>
            </select>
            <br>
            <br>
        </td>
        <td width="50%" align="left" valign="top">
            <strong>Удаление изображения прайса</strong>
        </td>
    </tr>
    
    
    <tr>
	    <td>
                <input type="hidden" name="MAX_FILE_SIZE" value="512000"> 
                <input type="hidden" name="filetype" value="jpg"> 
<!--                <input type="hidden" name="tag" value="tag"/>-->
                <input name="userfile" type="file" size="20">
                <input type="submit" value="Загрузить">
                <br />
                <br />		
		<small>Максимальный объем загружаемого файла не должен превышать 500 килобайт, формат изображения - JPG.</small>
            </td>
    </form>
<!--    <form action="index.php?act=tagimg_delete" method="post"></form>    -->
	    <td>
                <input id="del_pimg" type="button" value="Удалить" >
            </td>		    
    
    </tr>
       
</table>