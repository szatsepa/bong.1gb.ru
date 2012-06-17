/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
	if (document.readyState != "complete"){
		setTimeout( arguments.callee, 100 );
		return;
	}
        
        var customer = new Object();
        var cart = new Object();
        var items = new Array('товар','товара','товаров');
        
        $("#indicator").hide();
        $("#closer").hide();
        $("#signup").hide();
        $("#signin").hide();
        $("#remindPass").hide();
        $("div.error").hide();
        $("div.message").hide()
        
        $("#main_0").css('background-image', 'url("../images/bg_1.png")');
        
        $("#table").mousedown(function(){
            $("#items").css('visibility','visible');
        });
        
        $("div.item").mouseover(function(){
            var id = this.id;
            var coord = $(eval('"#'+id+'"')).offset();
            var cX = coord['left'];
            var cY = coord['top'];
            $("#item_dscr").css({top:(cY-169),left:(cX-256)});
            if(customer['id'] != undefined){
                $("#item_dscr").css('visibility', 'visible');
                $("#description").text(id);
            }
            
        });
        
        $("div.item").mousedown(function(){
            var id = this.id;
            if(customer['id'] == undefined){
                $("#vrWrapper").css('visibility','visible');
                
                $("#signin").show(300, function(){
                    $("#item_dscr").css('visibility', 'hidden');
                    $("#items").css('visibility', 'hidden');
                    $('#loginEmail').focus();
                });
        }else{

               _addCart(id); 
            }
        });
        $("#vrWrapper").mousedown(function(){

        });
        
        $('#my_cart').mousedown(function() {

            
        });
        
        
// move===
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
        
        $("#closer").mousedown(function(){
            $("#vrWrapper").css('visibility', 'hidden');
        });
    
// end move
            
    
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
    $("#remindButton").mousedown(function(event){
            SendRemind();
    });
    
    $("#registerButton").mousedown(function(event){
            SignUp();
    });
    
    $("#loginButton").mousedown(function(){
            authUser();
    });
    
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



    function SignUp() {
   
    var email = $('#email').val();
    var code = $('#password').val();
    var passAgain = $('#passwordAgain').val();
    
        if (!ValidEmail(email)) {
            ShowError(0);
        } else {
            if ((code != "") && (code == passAgain)) {
                $("#indicator").show();
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
                ShowError(1);
            }
        }
    }

    function authUser(){
        
            $("#indicator").show();
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
            }
        }

    function SendRemind() {
        var email = $('#remindEmail').val();
          if (!ValidEmail(email)) {
            ShowError(5);
        } else {
            $("#indicator").show();
                    
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
    
    function checkCart(id){
        
        var id = id;
        
        $.ajax({
            url:'../query/check_cart.php',
            type:'post',
            dataType:'json',
            data:{id:id},
            success:function(data){
                cart = data;
                $("#indikator").hide();
                $("#vrWrapper").css('visibility', 'hidden');
                $("#my_cart").css({'visibility': 'visible'});
                $("#my_cart").append("<p id='log_in' name='#'>"+customer['email']+"&nbsp;&nbsp;&nbsp;&nbsp;</p>");
                if(data['amount'] != null){
                  var num = _checkItems(cart['amount']);
                  $("#my_cart").append("<p id='in_cart' name='#'>В корзине "+cart['amount']+" "+items[num]+"&nbsp;&nbsp;&nbsp;&nbsp;</p>");
                  $("#my_cart").append("<p id='cost' name='#'>На сумму "+cart['cash']+" р.&nbsp;&nbsp;&nbsp;&nbsp;</p>");
                }else{
                   $("#my_cart").append("<p id='in_cart' name='#'>Корзина пустая.&nbsp;&nbsp;&nbsp;&nbsp;</p>"); 
                }
            },
            error:function(data){
                document.write(data['response']);
            }
        });
        
        return;
    }
    
    function _addCart(id){
        var artikul = id;
        var customer_id = customer['id'];
        $.ajax({
           url:'../action/add_cart.php',
           type:'post',
           dataType:'json',
           data:{artikul:artikul,customer:customer_id},
           success:function(data){
               cart = data;
               $("#items").css('visibility','hidden');
               $("#item_dscr").css('visibility', 'hidden');
               if(data['amount'] != null){
                   $("#in_cart").remove();
                   $("#cost").remove();
                   var num = _checkItems(data['amount']);
                  $("#my_cart").append("<p id='in_cart' name='#'>В корзине "+cart['amount']+" "+items[num]+"&nbsp;&nbsp;&nbsp;&nbsp;</p>");
                  $("#my_cart").append("<p id='cost' name='#'>На сумму "+cart['cash']+" р.&nbsp;&nbsp;&nbsp;&nbsp;</p>");
                }else{
                   $("#my_cart").append("<p id='in_cart' name='#'>Корзина пустая.&nbsp;&nbsp;&nbsp;&nbsp;</p>"); 
                }
                
           },
           error:function(data){
               document.write(data['response']);
           }
        });
        
    }
    
    function _checkItems(items){
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
        return num;
    }
    
});

