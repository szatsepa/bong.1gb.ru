<?php

/*
 * created by arcady.1254@gmail.com 7/5/2012
 */

$disp = "none";

if(isset($attributes[slide_id])){
    $id=$attributes[slide_id];
    $disp = "block";
}
?>
<div class="downloader">
    <span class="download">
        <p align="center"> Загрузите слайд</p>
          <form enctype="multipart/form-data" action="index.php?act=ups" method="post">      
            <input type="hidden" name="MAX_FILE_SIZE" value="1248575"/>        
            <input name="imgfile" size="50" accept="image/*" type="file" required/>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <input type="image" name="prelo" id="pld" style="display: none;" src="images/circle.gif" disabled/> 
<!--            <input type="hidden" name="id" value="<?php echo $id;?>"/>-->
            <input type="submit" value="Загрузить изображениe" onclick="javascript:preload('pld');"/>
      </form>
    </span>
    <span class="parmeters" style="display: <?php echo $disp;?>;">
        <p align="center"> Задайте параметры</p>
        <form id="params">
<!--            action="index.php?act=upp" method="post" -->
            <input type="hidden" name="slide_id" value="<?php echo $id;?>"/>
            <table>
                <tr>
                    <td height="30"  width="30"colspan="11">
                        <p>Параметр 1</p>
                    </td>
                </tr>
                <tr>
                    <?php
                    for($i = 0;$i<10;$i++){
                        
                        ?>
                        <td height="30"  width="30" background="http://<?php echo $host;?>/images/bt_bg.png">
                        <?php 
                        if($i == 0){
                            echo "<input type='radio' name='p1' value='1' checked/>";
                        }else{
                            echo "<input type='radio' name='p1' value='".($i+1)."'/>";
                        }
                        ?>
                    </td>
                        <?php
                    }
                    ?>
                </tr>
                <tr>
                    <td height="30"  width="30"colspan="11">
                        <p>Параметр 2</p>
                    </td>
                </tr>
                <tr>
                     <?php
                    for($i = 0;$i<10;$i++){
                        
                        ?>
                        <td height="30"  width="30" background="http://<?php echo $host;?>/images/bt_bg.png">
                        <?php 
                        if($i == 0){
                            echo "<input type='radio' name='p2' value='1' checked/>";
                        }else{
                            echo "<input type='radio' name='p2' value='".($i+1)."'/>";
                        }
                        ?>
                    </td>
                        <?php
                    }
                    ?>
                </tr>
                <tr>
                    <td height="30"  width="30"colspan="11">
                        <p>Параметр 3</p>
                    </td>
                </tr>
                <tr>
                     <?php
                    for($i = 0;$i<10;$i++){
                        
                        ?>
                        <td height="30"  width="30" background="http://<?php echo $host;?>/images/bt_bg.png">
                        <?php 
                        if($i == 0){
                            echo "<input type='radio' name='p3' value='1' checked/>";
                        }else{
                            echo "<input type='radio' name='p3' value='".($i+1)."'/>";
                        }
                        ?>
                    </td>
                        <?php
                    }
                    ?>
                </tr>
                <tr>
                     <?php
                    for($i = 0;$i<10;$i++){
                        
                        ?>
                        <td height="30"  width="30">
                       
                    </td>
                        <?php
                    }
                    ?>
                    <td align="right">
                        &nbsp;&nbsp;
                        <input style="font-size: 14px;font-weight: bold;color: black;" type="button" value="Добавить"  onclick="javascript:_addParams('params');"/>
                    </td>
                </tr>
            </table>
        
            
            
            
            <br/>
            
        </form>
    </span>
</div>
