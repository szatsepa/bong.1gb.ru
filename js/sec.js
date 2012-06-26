/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
     
	if (document.readyState != "complete"){
		setTimeout( arguments.callee, 100 );
		return;
	}
        
        var first = false;
        
        $("#main_0").css('background-image', 'url("../images/bg_1.png")');
        $("#vrWrapper").css('visibility','visible');
        $("#vrWrapper").css('display','none');

////клик по столу покажем товары

        $("#table").mouseover(function(){
            if(!first){
                $("#items").css('visibility','visible');
                first = !first;
            }
            
        });
//        
//// покажем описание товара

        $("div.item").mouseover(function(){
            var id = this.id;
            $(eval('"#'+id+'"')).append('<div id="item_dscr"><p id="description"></p></div>');
            $("#description").text(id);  
        });
////        скроем описание

         $("div.item").mouseout(function(){ 
           $("#item_dscr").remove();
            
        });
       
//      при тыц по изображению товара если клиент определен ложим товар в корзину иначе формы регистрации - логинизации
//        =======================================================
        
        $("div.item").mousedown(function(){
            var id = this.id;
            if(customer['id'] != undefined){
                
                       _addCart(id);
                }else{
//                        $("#vrWrapper").css('visibility','visible');
                        $("#vrWrapper").css('display','block');

                        $("#signin").show(300, function(){
                            $("#item_dscr").css('visibility', 'hidden');
                            $("#items").css('visibility', 'hidden');
                            $('#loginEmail').focus();
                            $("#closer").show(50);
                        });

                    }
        }); 
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
                var cart = data;
                var items = _checkItems(cart['amount']);
                $('#in_cart').text("В корзине "+cart['amount']+" "+items);
                $("#cost").text("На сумму "+cart['cash']+" р.");
           },
           error:function(data){
               document.write(data['response']); 
           }
           
        });
        
    }
    //функция боль мень правильного написание слова товар товаров товара

    function _checkItems(items){
        var items_arr = new Array('товар','товара','товаров');
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
        return items_arr[num];
    }
   
});

