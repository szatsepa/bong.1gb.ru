<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

?>
<script type="text/javascript">
    var customer = new Object();
</script>
<?php
if(isset($user)){
    ?>
<script type="text/javascript">
    
 var customer = {id:<?php echo $user->data[id];?>,name:'<?php echo $user->data[name];?>',surname:'<?php echo $user->data[surname];?>',email:'<?php echo $user->data[email];?>',phone:'<?php echo $user->data[phone];?>'};
    
</script>
    <?php
}
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
    $row = 0;
    foreach ($items_array as $value){
        ?>
    <div class="item" id="<?php echo $value[artikul];?>">
        <p class="item" style="text-align: center;" id="MMM">
            <img src="../images/items/<?php echo $value[img];?>" alt=""<?php echo $value[id];?>/>
        </p>
    </div>
    <?php
    $row++;
    if($row>8)break;
    }
    ?>
</div>
<div id="item_dscr">
    <p id="description">
        
    </p>
</div>
<div id="my_cart">

</div>
<div id="vrWrapper">
        <div id="wr" class="wr" style="margin: 12px auto;">
            <div id="indicator">
            </div>
            <div id="closer">X</div>
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
                        <input id="loginButton" type="button" value="Войти"/>
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
<div id="your_cart"> 
    <div id="close_cart">X</div>
    
</div>
