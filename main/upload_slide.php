<?php

/*
 * created by arcady.1254@gmail.com 12/5/2012 
 */
if(isset($attributes[cp]))$_SESSION[cp]=$attributes[cp];
$disp = "block";
$sid = 0;
if(isset($attributes[slide_id])){
    $sid=$attributes[slide_id];
    $disp = "block"; 
}
print_r($attributes);  
?>
<div class="downloader">
    <span class="download">
        <p align="center"> Загрузите слайд</p>
          <form enctype="multipart/form-data" action="index.php?act=upsn" method="post">      
            <input type="hidden" name="MAX_FILE_SIZE" value="1248575"/>        
            <input name="imgfile" size="50" accept="image/*" type="file" required/>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <input type="image" name="prelo" id="pld" style="display: none;" src="images/circle.gif" disabled/>     
<!--            <input type="hidden" name="id" value="<?php echo $sid;?>"/>-->
            <input type="submit" value="Загрузить изображениe" onclick="javascript:preload('pld');"/>
      </form>
    </span>
    
    <span class="parmeters" style="display: <?php echo $disp;?>;">
        <p align="center"> Задайте параметры</p>
        <p>Количество параметров - <input name="count_params" size="4" value="<?php echo $_SESSION[cp];?>" onchange="javascript:document.location.href='index.php?act=addsu&cp='+this.value+'&slide_id=<?php echo $sid;?>'"/></p>
        <form id="params">
            <input type="hidden" name="slide_id" value="<?php echo $sid;?>"/>
            <div style="position: relative;width: 475px;">
            <div id="sl0" style="float: left;"></div> 
            <script type="text/javascript"> 
                var slider_array = new Array(); 
                var mysl0 = new slider('sl0', 420, 0, 15, 1, 'uppn', false); 
                slider_array.push(mysl0);
            </script>
            <div style="position:relative;float: right;">
                <input class="search" placeholder="0" type="text" size="2" id="sl0_info"/>
            </div>
            &nbsp;<br /><br/>
            </div>
            
            <?php
            if(isset($_SESSION[cp])){
               for($i=1;$i<($_SESSION[cp]);$i++){
                   if($i==9){
                       $_SESSION[cp]=$i;
                       break;                       
                       }
                   if($i==($_SESSION[cp]-1)){ 
                       ?>
                    <div style="position: relative; width: 475px;">  
                       <div id="sl<?php echo $i;?>"  style="float: left;"></div>  
                       <?php
                       echo "<script type='text/javascript'>
                                var mysl$i = new slider('sl$i', 420, 0, 15, 1, 'uppn', true);
                               slider_array.push(mysl$i);
                               mysl$i.setArray(slider_array); 
                             </script>
                           <div style='position:relative;float: right;'>
                                <input class='search' placeholder='0' type='text'  size='2' id='sl".$i."_info'/>
                            </div>
                            &nbsp;<br /><br/>
                            </div>";
                   }else{
                       echo "<div style='position: relative; width: 475px;'>
                       <div id='sl$i'  style='float: left;'></div>";
                       echo "<script type='text/javascript'>
                                var mysl$i = new slider('sl$i', 420, 0, 15, 1, 'uppn', false);
                               slider_array.push(mysl$i);
                             </script>
                           <div style='position:relative;float: right;'>
                                <input class='search' placeholder='0' type='text'  size='2' id='sl".$i."_info'/>
                            </div>
                            &nbsp;<br /><br/>
                            </div>";
                   }
                  
               }
            }
            ?>
<!--         <input type="button" class="but" value=" Загрузить параметры " onclick="javascript:_getParams(<?php echo $_SESSION[cp];?>);" />   -->
        </form>
    </span>
<br /><br />
</div>
<?php 
//unset($_SESSION[cp]);