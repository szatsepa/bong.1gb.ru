<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

?>
<div id="main_s">
<!--<div id="s_rabbit"></div>
<div id="beaver"></div>
<div id="squirell"></div>-->
<div id="table"></div>
<div id="items"> 
    <?php
    $row = 0;
    foreach ($items_array as $value){
        ?> 
    <div class="item" id="<?php echo $value[artikul];?>">
        <p class="p_item" style="text-align: center;">
            <img src="../images/items/<?php echo $value[img];?>" alt=""<?php echo $value[id];?>/>
        </p>
    </div>
    <?php
    $row++;
    if($row>8)break;
    }
    ?>
</div>
<div id="my_cart"></div>
<?php
include 'in_form.php';
?>
</div>