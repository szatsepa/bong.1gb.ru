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
    <p id="description">
        
    </p>
</div>
<div id="my_cart"> 
<!--    <p id="email" style="text-align: center;font-size: 14px;color: gold;">Почтовый ящик</p>
    <p id="in_cart"  style="text-align: right;font-size: 14px;color: gold;">В корзине 2 предмета</p>
    <p id="sum" style="text-align: right;font-size: 14px;color: gold;">на 800 р.</p>-->

</div>
    <div id="vrWrapper">
        <div id="wr" class="wr" style="margin: 12px auto;">
            <div id="indicator">
            </div>

            <div class='loginBlock' id="signup">
                <label for="email">Email:</label> <input id="email" type="text" class='textinput' />
                <label for="password">Пароль:</label> <input id="password" type="password" class='textinput' />
                <label for="passwordAgain">Пароль еще раз:</label> <input id="passwordAgain" type="password" class='textinput' />
                <div id="error0" class="error">
                </div>
                <div id="message1" class="message">
                </div>
                <div class='buttonDiv'>
                    <input id="registerButton" type="button" value="Зарегистрироваться"/></div>
                    
                <div class='additional'>
                    <a name="" id="rem_r" style="text-decoration: underline;cursor: pointer;">Вспомнить пароль</a> 
                    <a name="" id="log_r" style="text-decoration: underline;cursor: pointer;">Войти</a>
                </div>
             </div>   
                <div class='loginBlock' id="signin">
                <label for="email">Email:</label> <input id="loginEmail" type="text" class='textinput'/>
                <label for="password">Пароль:</label> <input id="loginPass" type="password" class='textinput'/>
                    <div id="error1" class="error">
                    </div>
                    <div class='buttonDiv'>
                        <input id="loginButton" type="button" value="Войти" onClick="javascript:authUser();"/>
                    </div>
                    <div class='additional'>
                        <a name="" id="rem_l"  style="text-decoration: underline;cursor: pointer;">Вспомнить пароль</a> 
                        <a name="" id="reg_l" style="text-decoration: underline;cursor: pointer;">Зарегистрироваться</a>
                    </div>
                </div>
                <div id="result"></div> 
            
            
            <div class='loginBlock' id="remindPass">
                <div class="description">
                    Чтобы вспомнить пароль, вспомните для начала хотя бы email.
                </div>
                <label for="email">Email:</label> <input id="remindEmail" type="text" class='textinput' />
                <div id="error2" class="error">
                </div>
                <div id="message0" class="message">
                </div>
                <div class='buttonDiv'>
                    <input id="remindButton" type="button" value="Выслать пароль"/></div>
                <div class='additional'>
                    <a name="" id="log_rm" style="text-decoration: underline;cursor: pointer;">Войти</a> 
                    <a name="" id="reg_rm" style="text-decoration: underline;cursor: pointer;">Зарегистрироваться</a></div>
            </div>
        </div>
    </div>
<!--<script type="text/javascript" src="../js/my_forms.js"></script>-->