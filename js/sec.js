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
        
        $("#indicator").hide();
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
            $("#item_dscr").css('visibility', 'visible');
            $("#description").text(id);
        });
        $("div.item").mousedown(function(){
            $("#my_cart").css('visibility', 'visible');
//            $("#my_cart > p").remove();
            if(customer['id'] == undefined){
                $("#my_cart").append("<p id='log_in' name='#'>Войти/Зарегистрироваться</p>");
                $("#my_cart").css('padding-top','22px');
                $("#log_in").css('text-decoration','underline');
                $("#log_in").css('cursor','pointer');
                $("#log_in").css('text-align','left');
                $("#log_in").css('font-weight','bold');
                $("#items").css('visibility','hidden');
                $("#item_dscr").css('visibility', 'hidden');
            }else{
                
            }
        });
        $("#vrWrapper").mousedown(function(){
//            var cnty = $("#vrWrapper").offset();
//            alert("X-"+cnty['left']+"; Y-"+cnty['top']);
        });
        
        $('#my_cart').mousedown(function() {
        $("#log_in").css({'visibility': 'hidden'});
            $("#vrWrapper").css('visibility','visible');
            $("#signin").show(300, function(){
                $('#loginEmail').focus();
            });
            
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

//            ShowIndicator();
            if ((email != "") && ValidEmail(email)) {
                var uid = 0;
                $.ajax({
                    url: 'http://bong.1gb.ru/query/authorisation.php',
                    type: 'post',
                    dataType: 'json',
                    data: {email:email,code:code},
                    success:function(data){
                        var re = data['ok'];
                        
                        if(re == 1){
                            user = data;
                            checkCart(user['id']);
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
            url:'http://bong.1gb.ru/query/ceck_cart.php',
            type:'post',
            dataType:'json',
            data:{id:id},
            success:function(data){
                
            },
            error:function(data){
                document.write(data['response']);
            }
        });
    }
    
});

