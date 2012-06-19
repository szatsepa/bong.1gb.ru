<?php

/*
 * created by arcady.1254@gmail.com 7/5/2012
 */
//print_r($user);

?>
<div class="selector">&nbsp; 
    <div id="time" style="display: none;">	
            <?php
                 $senya = date("d M g:i");
                 echo "$senya";
             ?>
        </div> 
    <div class="main_menu" style="background-image: url('http://brioso-lab.ru/images/header_bg.png');">
<!--        <form id="f_menu">
            <span class="menu_select" onclick="javascript:location.href='index.php?act=adds';" title="Загрузить слайд">
               Загрузить слайд
            </span>
            &nbsp;&nbsp;
            <span class="menu_select"  onclick="javascript:location.href='index.php?act=main';" title="показать все слайды">
                Все слайды
            </span>
            &nbsp;&nbsp;
            <span class="menu_select"  onclick="javascript:location.href='index.php?act=search';" title="поиск слайдов">
                Поиск
            </span>
            &nbsp;&nbsp;
            <span class="menu_select"  onclick="javascript:location.href='index.php?act=searchn';" title="поиск слайдов">
                Поиск 2
            </span>
        </form>-->
    </div>
<?php 

if (!isset ($_SESSION[id]) && $_SESSION[auth] == 0) { 
    ?>
    <span class="selector3">
    
          <form id="13" action="index.php?act=auth" method="post">
            <input id="psw" type="password" name="code" size="18" value="" style='font-size:8pt;'  />
            <input type="submit" value="Войти" class='submit3' style='color:green'/>
          </form>  
     </span>      
   
<?php } else { 
    // To Do Если имя и фамилия очень длинные, то выводить только фамилию
    ?>
    
<span class="selector3">
    
<form id="ofice" action='index.php?act=logout' method='post'>
    <?php
    if($user->data[name]){
        echo $user->data[name]." ". $user->data[surname]; 
        $email = $user->data[email];
        $id = $user->data[id];
    }else{
        if(isset($user->data[email])){
            echo $user->data[email];
            $email = $user->data[email];
            $id = $user->data[id];
        }else{
            echo $attributes[email];
            $email = $attributes[email];
            $id = $attributes[id];
        }
   }
    echo "<input type='hidden' name='id' value='$id'/><input type='hidden' name='email' value='$email'/>";
?>
<!--    <input type='button' class='submit3' value='Кабинет' style='color:green;' onclick="javascript:_goAbout('ofice');" />-->
    <input type='submit' class='submit3' value='X' style='color:red'/>
</form>
</span>

<?php }


?>
</div>