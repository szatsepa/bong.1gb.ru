/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    
	if (document.readyState != "complete"){
		setTimeout( arguments.callee, 100 );
		return;
	}
        
//если клиент определен проверяем и выводим его корзину================        
        if(customer['id'] || customer['id'] != undefined){
                checkCart(customer['id']);
            }
//начальные установки инициализация переменных
        var cart = new Object();
//        var check = false;
        var items = new Array('товар','товара','товаров');
        
        $("#indicator").hide();
        $("#closer").hide();
        $("#signup").hide();
        $("#signin").hide();
        $("#remindPass").hide();
        $("div.error").hide();
        $("div.message").hide();
        
        //   ========== суета вокруг корзины =================     

// тыц по ссылке в виде емейла выведем подробное описание корзины 

        $("#log_in,#my_email,#in_cart,#cost").live('mousedown',function(){
                var back = document.location.search;
                back = back.substr(5);
               document.location.href = '?act=cart&b='+back; 
            
        });
        $("#in_out").live('mousedown',function(){
            
            document.location.href = '?act=logout';
        });
         // move=== движение форм ===

        $("#reg_l").mousedown(function(){
                $("#signin").hide(300, function(){
                    $("#signup").show(300);
                    $('#email').focus();
                });

        });

        $("#rem_l").mousedown(function(){
                $("#signin").hide(300, function(){
                    $("#message0").hide();
                    $("#remindPass").show(300,function(){});
                    $('#remindEmail').focus();
                });

        });
        $("#log_rm").mousedown(function(){
                $("#remindPass").hide(300, function(){
                    $("#signin").show(300);
                    $('#loginEmail').focus();
                });

        });
        $("#reg_rm").mousedown(function(){
                $("#remindPass").hide(300, function(){
                    $("#signup").show(300);
                    $('#email').focus();
                });

        });
        $("#rem_r").mousedown(function(){
                $("#signup").hide(300, function(){
                    $("#message0").hide();
                    $("#remindPass").show(300,function(){});
                    $('#remindEmail').focus();
                });

        });
        $("#log_r").mousedown(function(){
                $("#signup").hide(300, function(){
                    $("#signin").show(300);
                    $('#loginEmail').focus();
                });

        });
        
// еси не надо закроем формы

        $("#closer").mousedown(function(){
            $("#vrWrapper").css('visibility', 'hidden');
        });
    
// end move
//привяжем к полям ввода кнопочки энтер для удоббства            
    
    $("#loginPass").keydown(function(event){

        if(event.keyCode==13) {
            authUser();
        }
    });
    $("#passwordAgain").keydown(function(event){

        if(event.keyCode==13) {
            SignUp();
        }
    });
    $("#remindEmail").keydown(function(event){

        if(event.keyCode==13) {
            SendRemind();
        }
    });
    
//    ну и главные кнопочки привяжем к функциям

    $("#remindButton").mousedown(function(event){
            SendRemind();
    });
    
    $("#registerButton").mousedown(function(event){
            SignUp();
    });
    
    $("#loginButton").mousedown(function(){
            authUser();
    });
    
//    массив сообщений о ошибках ввода и тд
    
    var er = [];
    er[0] = "Неправильный формат email'a"; //0
    er[1] = "Пароли не совпадают"; //0
    er[2] = "Пользователь с таким email'ом уже зарегистрирован"; //0
    er[3] = "Не угадали пароль. Или email. Попробуйте еще раз"; //1
    er[4] = "Пользователя с таким email'oм у нас еще нету"; //2
    er[5] = "Неправильный формат email'a, или забыли вписать пароль"; //2

    function HideError() {
        $('.error').hide();
    }
    function ShowError(code) {

        switch (code) {
            case 0:
                $('#error0').html(er[0]).slideDown();
                $('#email').select().focus();
                            break;
            case 1:
                $('#error0').html(er[1]).slideDown();
                            break;
            case 2:
                $('#error0').html(er[2]).slideDown();
                            break;
            case 3:
                $('#error1').html(er[3]).slideDown();
                break;
            case 4:
                $('#error2').html(er[4]).slideDown();
                break;
            case 5:
                $('#error2').html(er[5]).slideDown();
                break;
        }
    }

//регистрация

    function SignUp() {
   
    var email = $('#email').val();
    var code = $('#password').val();
    var passAgain = $('#passwordAgain').val();
    
        if (!ValidEmail(email)) {
            ShowError(0);
        } else {
            if ((code != "") && (code == passAgain)) {
                $("#indicator").show();
                $("#closer").hide();
                $.ajax({
                    url:'../action/registration.php',
                    type:'post',
                    dataType:'json',
                    data:{email:email,code:code},
                    success:function(data){
                        var re = data['ok'];
                        if(re == 1){
                            ShowMessage(1);
                            $("#indicator").hide();
                            $("#closer").show();
                        }else{
                            ShowError(2);
                            $("#indicator").hide();
                        }
                    },
                    error:function(data){
                        document.write(data['response']);
                    }

                });
            } else {
                $("#indicator").hide();
                $("#closer").show();
                ShowError(1);
            }
        }
    }
    
//авторизация

    function authUser(){
        
            $("#indicator").show();
            $("#closer").hide();
            var  code = $('#loginPass').val();
            var  email = $('#loginEmail').val();

            if ((email != "") && ValidEmail(email)) {
                var uid = 0;
                $.ajax({
                    url: '../query/authorisation.php',
                    type: 'post',
                    dataType: 'json',
                    data: {email:email,code:code},
                    success:function(data){
                        var re = data['ok'];
                        if(re == 1){
                            customer = data;
                            checkCart(data['id']); 
                        }else{
                            $("#signin").hide(300, function(){
                                $("#signup").show(300);
                                $('#email').focus();
                            });
                        }
                    },
                    error:function(data){
                        document.write(data['response']);
                    }
                });

            } else {
                $('#error1').html(er[5]).slideDown(); 
                $("#indicator").hide();
                $("#closer").show();
            }
        }
        
//вспомни пароль

    function SendRemind() {
        var email = $('#remindEmail').val();
          if (!ValidEmail(email)) {
            ShowError(5);
        } else {
            $("#indicator").show();
            $("#closer").hide();        
            $.ajax({
                url:'../query/reminde.php',
                type:'post',
                dataType:'json',
                data:{email:email},
                success:function(data){
                   var re = data['ok'];
                    if(re == 1){
                        ShowMessage(0);
                        $("#indicator").hide();                       
                        $("#closer").show();
                    }else {
                        ShowError(4);
                        $("#indicator").hide();
                        $("#closer").show();
                    } 
                },
                error:function(data){
                    document.write(data['response']);
                }
                
            });            
        }
    }
    
    // ----------
    //  MESSAGES
    // ----------

    var m = [];
    m[0] = "Письмо с напоминанием пароля выслано вам на email";
    m[1] = "Вы зарегистрированы. Инструкции в письме."

    function ShowMessage(code) {
        HideError();
        $('.message').fadeOut();
        switch (code) {
            case 0:
                $('#message0').html(m[0]).slideDown();
                break;
            }
    }

    function ValidEmail(email) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return reg.test(email)
    }
    
//проверим содержимое корзины в плане общего количества и суммы

    function checkCart(id){
//        alert(id);
        var id = id;
        $.ajax({
            url:'../query/check_cart.php',
            type:'post',
            dataType:'json',
            data:{id:id},
            success:function(data){
                var cart = data;
                $("#log_in").remove();
                $("#in_cart").remove();
                $("#cost").remove();
                $("#in_out").remove();
                $("#indikator").hide();
                $("#vrWrapper").css('visibility', 'hidden');
                $("#my_cart").css({'visibility': 'visible'});
                $("#my_cart").append("<p id='log_in' name='#'>"+customer['email']+"&nbsp;&nbsp;&nbsp;&nbsp;</p>");
                if(data['amount'] != null){
//                    check = true;
                  var num = _checkItems(cart['amount']);
                  $("#my_cart").append("<p id='in_cart' name='#'>В корзине "+cart['amount']+" "+items[num]+"&nbsp;&nbsp;&nbsp;&nbsp;</p>");
                  $("#my_cart").append("<p id='cost' name='#'>На сумму "+cart['cash']+" р.&nbsp;&nbsp;&nbsp;&nbsp;</p>");
                }else{
                    check = false;
                   $("#my_cart").append("<p id='in_cart' name='#'>Корзина пустая.&nbsp;&nbsp;&nbsp;&nbsp;</p>"); 
                }
                $("#my_cart").append("<p id='in_out'><a id='logaut' name='#'>Выйти</a></p>"); 
               return;
            },
            error:function(data){
                document.write(data['response']);
            }
        });
        
        return;
    }
    

  
//функция боль мень правильного написание слова товар товаров товара

    function _checkItems(items){
        var items = items;
        var str = items.toString();
        str = str.substr(-1);
        var sho = parseInt(str);
        var num;
        if(sho==1){
            num = 0;
        }else if(sho>1 && sho<5){
            num = 1;
        }else{
            num = 2;
        }
        if(items>10 && items<21){
            num = 2;
        }
        return num;
    }
});