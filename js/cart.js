/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    
        if (document.readyState != "complete"){
		setTimeout( arguments.callee, 100 );
		return;
	}
        
         $(".main").css({'background-color':'gold'});
         $("#main_0").css({'background-image':'none','background-color':'gold'});
         
         var h = $(document).height();
                  
         $("#main_0").css('height', h);
         
         
         
         //начальные установки инициализация переменных
        var cart = new Object();
        
         var month = new Array('- 01 -','- 02 -','- 03 -','- 04 -','- 05 -','- 06 -','- 07 -','- 08 -','- 09 -','- 10 -','- 11 -','- 12 -')
        
        //   ========== суета вокруг корзины =================     

// тыц по ссылке в виде емейла выведем подробное описание корзины 

       var tc = setTimeout(buildCart,200);
      
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
            createOrder();
        });
        
        $("#to_order").mouseover(function(){
            $("#to_order").css('color', 'blueviolet');
        });
        $("#to_order").mouseout(function(){
            $("#to_order").css('color', 'black');
        });
        $("#to_order").mousedown(function(){
            saveOrder();
        });
        
        $("#back_cart").mouseover(function(){
            $("#back_cart").css('color', 'blueviolet');
        });
        $("#back_cart").mouseout(function(){
            $("#back_cart").css('color', 'black');
        });
        $("#back_cart").mousedown(function(){
            
            buildCart();
        });
        
        $("#back_page").mouseover(function(){
            $("#back_page").css('color', 'blueviolet');
        });
        $("#to_order").mouseout(function(){
            $("#back_page").css('color', 'black');
        });
        $("#back_page").mousedown(function(){
            history.back();
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
//                        при успехе строим ноbую корзину
                        buildCart();                               
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
                    $("#order_form").css('display', 'none');
                    
                    $("#your_cart").remove();
                    var summ_cash = 0;
                    cart = data;
                   $("#main_0").append('<div id="your_cart"></div>');

                    for(var i in cart){
                        $("#your_cart").append('<div class="row_cart"><div class="image_cart"><img id="image_c'+i+'" src="" alt=""/></div><div class="item_name"><p  id="name_c'+i+'" ></p></div><div class="item_price"><p id="price_c'+i+'" ></p></div><div class="up_down"><div class="up"  id="'+i+'_up" ></div><div class="amount"><p id="amount_c'+i+'" ></p></div><div class="down"  id="'+i+'_down" ></div></div><div class="item_cash"><p id="cash_c'+i+'" ></p></div></div>');
                        $("#image_c"+i).attr({src:'../images/items/'+cart[i]['img'],alt:cart[i]['artikul']});
                        $("#name_c"+i).text(cart[i]['name']);
                        $("#price_c"+i).text(cart[i]['price']);
                        $("#amount_c"+i).text(cart[i]['amount']);
                        $("#cash_c"+i).text(cart[i]['cost']);
                       summ_cash += parseInt(cart[i]['cost']);
                    }
                    
                    $("#your_cart").append('<div class="row_cart"><div class="image_cart"><img id="image_c" src="" alt=""/></div><div class="item_name"><p  id="name_c" ></p></div><div class="item_price"><p id="price_c" ></p></div><div class="up_down"><div class="amount" id="amount"><p id="amount_c" ></p></div></div><div class="item_cash"><p id="cash_c" ></p></div></div>');
                    $("#amount_c").text("Итого:");
                    $("#amount").css({'top':'32px'});
                    $("#amount_c").css({'font-size':'16px','font-weight':'bold'});
                    $("#cash_c").text(summ_cash+" p.");
                    $("#cash_c").css({'font-size':'16px','font-weight':'bold'});
                    $("#your_cart").append('<div class="cr_order"><a name="#" id="crt_order">Оформить заказ</a></div>');
                    var h = $(document).height();
                    $("#your_cart").css({'background-color':'gold','height':h});
                   return;
                },
                error:function(data){
                    document.write(data['response']);
                }
                
            });
        }
        
//        строим форму "оформить заказ"
        
        function createOrder(){
            $("#your_cart").remove();
            $("#order_body").empty();
            
            $.ajax({
                url: '../query/num_order.php',
                type: 'post',
                dataType: 'json',
                success:function(data){
                    var now = new Date();
                    var num = parseInt(data['num'])+1;
                    if(!num)num=1;
                    for(var i in cart){
                        var num_row = (parseInt(i)+1);
                        $("#order_body").append('<div id="order_row_'+i+'" ></div>');
                        $("#order_row_"+i).append('<div class="b_num"><p>'+num_row+'</p></div><div class="b_name"><p id="name_'+i+'">'+cart[i]['name']+'</p></div><div class="b_amount"><p id="amount_'+i+'" >'+cart[i]['amount']+'</p></div><div class="b_cost"><p id="cost_'+i+'" >'+cart[i]['cost']+'</p></div><div class="b_artikul"><p id="artikul_'+i+'">'+cart[i]['artikul']+'</p></div>');
                    }
                    $("#order_form").css('display','block');
                    $("#order_title").text("Заказ №"+num+" от "+now.getDate()+" "+month[now.getMonth()]+" "+now.getFullYear()+" г.");
                    $("#shipment").focus();
                }
            });
        }
        function saveOrder(){
            $.ajax({
                url: '../action/add_order.php',
                type: 'post',
                dataType:'json',
                data:{customer:customer['id'],email:customer['email'],shipment:$("#shipment").val(),phone:$("#phone").val(),comment:document.getElementById('comment').value},
                success:function(data){
                      var order = data['z_id'];
                      itemAddOrder(order);
                }
            });
        }
        function itemAddOrder(order){
            var my_cart = cart;
            var ord = order;
            $.ajax({
               url: '../action/add_orders_item.php',
                type: 'post',
                dataType:'json', 
                data:{cart:my_cart,order:ord,customer:customer['id']},
                success:function(data){
                    if(data['out']!=0)document.location.href='../index.php?act=sec';
                }
            });
        }
        
});

