<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

?>
<script type="text/javascript">
    var items_array = new Array();
</script>
<div id="main_s">
<div id="table"></div>
<div id="items"> 
    <?php
    $row = 0;
    foreach ($items_array as $value){
        ?>
<script type="text/javascript">
    var tmp = new Object({'price_id':<?php echo $value[price_id];?>,'price_name':<?php echo $value[price_name];?>,'item':<?php echo $value[item];?>,'artikul':<?php echo $value[artikul];?>,'barcode':<?php echo $value[barcode];?>,'name':<?php echo $value[name];?>,'volume':<?php echo $value[volume];?>,'price':<?php echo $value[price];?>,'img':<?php echo $value[img];?>});
    items_array.push(tmp);
</script>
    <div class="item" id="<?php echo $value[name];?>">
        <p class="p_item" style="text-align: center;">
            <img src="../images/items/<?php echo $value[img];?>" alt="<?php echo $value[name];?>"/>
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