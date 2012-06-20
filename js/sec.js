/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
     $("#main_0").css('background-image', 'url("../images/bg_1.png")');
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
        
        var items = new Array('товар','товара','товаров');
        
        $("#indicator").hide();
        $("#closer").hide();
        $("#signup").hide();
        $("#signin").hide();
        $("#remindPass").hide();
        $("div.error").hide();
        $("div.message").hide()
        
       
//клик по столу покажем товары

        $("#table").mousedown(function(){
//            if(customer['id'] || customer['id'] != undefined){
//                checkCart(customer['id']);
//            }
            
            $("#items").css('visibility','visible');
            
        });
        
// покажем описание товара

        $("div.item").mouseover(function(){
            var id = this.id;
            var coord = $(eval('"#'+id+'"')).offset();
            var cX = coord['left'];
            var cY = coord['top'];
            $("#item_dscr").css({top:(cY-169),left:(cX-256)});
            if(customer['id'] != undefined){
                $("#item_dscr").css('visibility', 'visible');
                $("#description").text(id);
//                
            }
            
        });
//        скроем описание

         $("div.item").mouseout(function(){
//            var id = this.id;
            if(customer['id'] != undefined){
                $("#item_dscr").css('visibility', 'hidden');
            }
            
        });
        
//   ========== суета вокруг корзины =================     

// тыц по ссылке в виде емейла выведем подробное описание корзины 

        $("#my_cart").mousedown(function(){
            buildCart();
        });
        
//  есле надо закрыть корзину

        $("#close").live('mousedown',function(){
            $("#your_cart").remove();
        });
        
//        изменить (добавить удалить продукт)
        
        $(".up").live('mousedown',function(){
            var id = this.id;
            id = parseInt(id);
            var artikul = cart[id]['artikul'];
            changeCart(artikul,1);
        })
        $(".down").live('mousedown',function(){
            var id = this.id;
            id = parseInt(id);
            var artikul = cart[id]['artikul'];
            changeCart(artikul,-1);
        })
        
//        привлечем внимание к ссылке создать заказ
        
        $("#crt_order").live('mouseover',function(){
            $("#crt_order").css({'color':'blueviolet'});
        });
        $("#crt_order").live('mouseout',function(){
            $("#crt_order").css({'color':'black'});
        });
        
//        тыц - строим форму создать заказ

        $("#crt_order").live('mousedown',function(){
            buildOrder();
        });
//  функция изменить корзину

        function changeCart(id,act){
            
                var artikul = id;
                var customer_id = customer['id'];
                var amount = act;
                $.ajax({
                    url:'../action/add_cart.php',
                    type:'post',
                    dataType:'json',
                    data:{artikul:artikul,customer:customer_id,amount:amount},
                    success:function(data){
//                        при успехе строим нокую корзину
                        buildCart();
//                        изменяем содерхание в углу
                        checkCart(customer_id);
                                
                    },
                    error:function(data){
                        document.write(data['response']); 
                    }
                });
        }
 
// функция построить форму отображающую содержание корзины

        function buildCart(){
            var id = customer['id'];
            $.ajax({
                url:'../query/cart.php',
                type:'post',
                dataType:'json',
                data:{customer:id},
                success:function(data){
                    var summ_cash = 0;
                    cart = data;
                    $("#your_cart").remove();
                    $("#main_0").append('<div id="your_cart"></div>');
                    $("#your_cart").css({'visibility': 'visible'});
                    $("#your_cart").append('<div id="close_cart"><a name="#" id="close">X</a></div>');
                    for(var i=0;i< data.length;i++){
                        $("#your_cart").append('<div class="row_cart"><div class="image_cart"><img id="image_c'+i+'" src="" alt=""/></div><div class="item_name"><p  id="name_c'+i+'" ></p></div><div class="item_price"><p id="price_c'+i+'" ></p></div><div class="up_down"><div class="up"  id="'+i+'_up" ></div><div class="amount"><p id="amount_c'+i+'" ></p></div><div class="down"  id="'+i+'_down" ></div></div><div class="item_cash"><p id="cash_c'+i+'" ></p></div></div>');
                        $("#image_c"+i).attr({src:'../images/items/'+data[i]['img'],alt:data[i]['artikul']});
                        $("#name_c"+i).text(data[i]['name']);
                        $("#price_c"+i).text(data[i]['price']);
                        $("#amount_c"+i).text(data[i]['amount']);
                        $("#cash_c"+i).text(data[i]['cost']);
                       summ_cash += parseInt(data[i]['cost']);
                    }
                    $("#your_cart").append('<div class="row_cart"><div class="image_cart"><img id="image_c" src="" alt=""/></div><div class="item_name"><p  id="name_c" ></p></div><div class="item_price"><p id="price_c" ></p></div><div class="up_down"><div class="amount" id="amount"><p id="amount_c" ></p></div></div><div class="item_cash"><p id="cash_c" ></p></div></div>');
                    $("#amount_c").text("Итого:");
                    $("#amount").css({'top':'32px'});
                    $("#amount_c").css({'font-size':'16px','font-weight':'bold'});
                    $("#cash_c").text(summ_cash+" p.");
                    $("#cash_c").css({'font-size':'16px','font-weight':'bold'});
                    $("#your_cart").append('<div class="cr_order"><a name="#" id="crt_order">Оформить заказ</a></div>');
                   return;
                },
                error:function(data){
                    document.write(data['response']);
                }
                
            });
        }
        
//        строим форму "оформить заказ"

        function buildOrder(){
            $("#your_cart").remove();
            var str = '';
            for(var i=0;i< cart.length;i++){
                str += cart[i]['artikul']+';\n';
            }
            alert(str+"Тутай буить форма заказу!");
        }
        
//      при тыц по изображению товара если клиент определен ложим товар в корзину иначе формы регистрации - логинизации
//        =======================================================
        
        $("div.item").mousedown(function(){
            var id = this.id;
            if(customer['id'] != undefined){
                       _addCart(id);
                }else{
                        $("#vrWrapper").css('visibility','visible');

                        $("#signin").show(300, function(){
                            $("#item_dscr").css('visibility', 'hidden');
                            $("#items").css('visibility', 'hidden');
                            $('#loginEmail').focus();
                        });

                    }
        });
        $("#vrWrapper").mousedown(function(){

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
    
//авторизация

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
        
//вспомни пароль

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
    
//проверим содержимое корзины в плане общего количества и суммы

    function checkCart(id){
        
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
               return;
            },
            error:function(data){
                document.write(data['response']);
            }
        });
        
        return;
    }
    
//    добавим товар в корзину

    function _addCart(id){
        var artikul = id;
        var customer_id = customer['id'];
        $.ajax({
           url:'../action/add_cart.php',
           type:'post',
           dataType:'json',
           data:{artikul:artikul,customer:customer_id},
           success:function(data){
                    checkCart(customer_id);
           },
           error:function(data){
               document.write(data['response']); 
           }
        });
        
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
