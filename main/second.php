<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
?>
<div id="s_rabbit">
    
</div>
<div id="beaver">
    
</div>
<div id="squirell">
    
</div>
<div id="table">
    
</div>
<div id="items">
    <?php 
    for($i=1;$i<7;$i++){
        ?>
    <div class="item" id="item_<?php echo $i;?>">
        <p class="item" style="text-align: center;">
            <img src="../images/items/item_<?php echo $i;?>.png"/>
        </p>
    </div>
    <?php
    }
    ?>
</div>
<div id="item_dscr">
    
</div>