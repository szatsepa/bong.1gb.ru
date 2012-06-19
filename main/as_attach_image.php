<?php
/*
*/
?>
<div id="attach_image">
<br /><br />

<form enctype="multipart/form-data" action="index.php?act=update_img" method="post">
<table class="dat" border="1" width="96%">
<!--<tr>-->
    <tr>
        <td align="left" valign="top" colspan="2">
            <strong>
                Загрузка изображений товарa
            </strong>
            <br />
            <br />
        </td>
    </tr>
    <tr>

    </tr>
    <tr>
        <input type="hidden" name="MAX_FILE_SIZE" value="8192000"> 
        <input id="att_img" type="hidden" name="barcode" value="">
        <input id="att_pg" type="hidden" name="page" value="">
        <td valign="top">
            <input name="userfile" type="file" size="50">
        </td>

        <td valign="top">
            <input type="submit" value="Загрузить jpg-файл" id="knob">
        </td>	

    </tr>
    <tr>
        <td colspan="2">
            <small>
                Повторная загрузка основного изображения или штрихкодов заменяет их предыдущие изображения.
            </small>
        </td>

    </tr>

</table>
</form>
<br />
<span id="s_img">
    <img id="smoll_img" src="" border="0" alt="" align="top" hspace="1" vspace="1" width="128">
</span>
</div>		
