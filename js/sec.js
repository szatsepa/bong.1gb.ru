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
        
       $("#vrWrapper").css({'top':'-210px','left':'310px','visibility':'visible'});
        
        $("#my_cart").css({'top': '-355px','color':'gold'});

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
//                       _addCart(id);
                }else{
                    
                        $("#vrWrapper").css({'z-index':'16','visibility':'visible'});
                        
                        $("#signin").show(300, function(){
                            $('#loginEmail').focus();
                        });
                    }
        }); 
 
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

