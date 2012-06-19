<?php
 
 ?>
<!--uploadgoods-->
<div style="position: relative;width: 680px;height: 47px;margin: 0 auto;padding-top: 22px;">
    <form enctype="multipart/form-data" action="index.php?act=uploaditems" method="post">
            <input type="hidden" name="MAX_FILE_SIZE" value="1048575"/>        
            <input name="userfile" type="file" size="20" required/>
            <input type="submit" value="Загрузить инф. о товарах"/>
    </form>
</div>
<br />&nbsp;
<br />
 
<br />
<br />
<input id="page" type="hidden" value=""/>
<table border="0" cellpadding="0" cellspaciing="15">
        <tr>
            <td>
                Штрих-код
            </td>
            <td>
                <input id="bcode" required type="text" name="barcode" size="25" maxlength="25" value="" />
            </td>
    </tr>
    <tr>
            <td>
                Наименование товара
            </td>
            <td>
                <input id="name_item" type="text" name="name" size="105" maxlength="255" value="">
            </td>
    </tr>
    <tr>
            <td>
                Краткое описание
            </td>
            <td>
                <input id="s_dscr" type="text" name="short_description" size="105" maxlength="255" value="">
            </td>
    </tr>
    <tr>
            <td>
                Состав
            </td>
            <td>
                <textarea id="comp" name="ingridients" rows="3" cols="80" wrap="soft" >

                </textarea>
            </td>
    </tr>
    <tr>
            <td>
                Описание
            </td>
            <td>
                <textarea id="spec" name="specification" rows="3" cols="80" wrap="soft" >

                </textarea>
            </td>
    </tr>
    <tr>
            <input type="hidden" name="page" value="0"/>
            <td>
                НДС %
            </td>
            <td>
                <input id="nds" type="text" name="nds" size="25" value=""/>
            </td>
    </tr>
    <tr>
        <td>

        </td>
        <td>
            <table>
                    <tr>

                    <td align="right">
                        <br />
                        <input id="action_item" type="button" value="Добавить товар"/>
                    </td>
                    <td align="right"><br />
                        <span id="del_item">
                            <input id="it_del" type="submit" value="Удалить" />
                        </span>
                    </td>
               </tr>
            </table>
            </td>
    </tr>
</table>
       

<br />

