/* 
 * 6/6/2012
 */
$("#vrWrapper").hide();
$("#indicator").hide();
$("#signup").hide();
$("#signin").hide();
$("#remindPass").hide();
$("div.error").hide();
$("div.message").hide();

    $('#in_cart').mousedown(function(e) {
        e.preventDefault();
        $("#in_cart").css({'visibility': 'hidden'});
        $("#content").slideUp(500, function(){
            $("#vrWrapper").slideDown(500,function(){
                $("#signin").show(300);
                $('#loginEmail').focus();
            });
        });
    });
    
    $("#a_user").mousedown(function(){
        if(confirm("Действительно выйти?")){
            document.location.href = "?act=logout";
        }
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
                    url: '../action/registration.php',
                    type: 'post',
                    dataType: 'json',
                    data: {email:email,code:code},
                    success:function(data){
                        var ml = data['mail'];
                        if(ml == '1'){
//                            $("#message1").show();
                            $("#indicator").hide();
                            $('#message1').html(m[1]).slideDown();
                        }
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

//            ShowIndicator();
            if ((email != "") && ValidEmail(email)) {
                var uid = 0;
                $.ajax({
                    url: '../query/authorisation.php',
                    type: 'post',
                    dataType: 'json',
                    data: '&code='+code+'&email='+email,
                    success:function(data){
                        auth = data['auth'];
                        user_id = data['user']['id'];
                        if(!data['error']){
                            $("#vrWrapper").hide(200);
                            $("#indicator").hide();
                            $("#content").show(200);
                            $("#my_cart").show(100);
                            $("#customer").show();
                            $("#a_user").text(data['user']['email']);
                            $("#amount").text('Товаров - '+data['cart']['summ_amount']);
                            $("#summ").text('На сумму - '+data['cart']['summ_cost']+' p.');
                            $("#c_order").css('cursor','pointer');
//                            $("#c_order").removeAttr('disabled');
                        }else{
                             $('#error1').html(er[3]).slideDown();
                        }                      
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
                url: '../query/reminde.php',
                type:'post',
                dataType:'json',
                data: {email:email},
                success:function(data){
                    var str = data['query'];
                    var mail = data['mail'];
                    if(mail == 1){
                        ShowMessage(0);
                        $("#indicator").hide();
                    }else {
                        ShowError(4);
                        $("#indicator").hide();
                    }

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