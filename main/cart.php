<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
?>
<script type="text/javascript">
    var bc = "<?php echo $_GET[b];?>";
</script>
<div id="main_cart">
    <div id="order_form">
        <div id="order_title"></div>
        <div class="order_header">
                <div id="h_num" >
                    <p >№</p>
                </div>
                <div id="h_name" >
                    <p>Наименование</p>
                </div>
                <div id="h_amount" >
                    <p >Колич</p>
                </div>
                <div id="h_price" >
                    <p >Цена</p>
                </div>
        </div>
        <div id="order_body">


        </div>
        <div class="order_footer">
            <div id="address">
                <p>
                    <label>Адрес доставки:&nbsp;&nbsp;&nbsp;&nbsp;</label><input class="crt_o" id="shipment" type="text" value="" size="68"/>
                </p>
            </div>
            <div id="o_phone">
                <p>
                    <label>Телефон:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><input class="crt_o" id="phone" type="text" value="" size="68"/>
                </p>
            </div>
            <div id="o_comm">
                <p>
                    <label>Пожелания:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><textarea class="crt_o" id="comment" cols="68" rows="6"></textarea>
                </p>
            </div>
            <div id="o_order" >
                <p id="form_menager">
                    <a id="back_page" name="#">Вернутся</a>&nbsp;&nbsp;<a id="back_cart" name="#">К корзине</a>&nbsp;&nbsp;<a id="to_order" name="#">Заказать</a>
                </p>
            </div>
        </div>
        <div id="pid_order" >

            </div>
        </div>
</div>