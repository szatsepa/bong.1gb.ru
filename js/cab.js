/* 
 * 6/6/2012
 */
$(document).ready(function(){
    
    if (document.readyState != "complete"){
		setTimeout( arguments.callee, 200 );
		return;
	}
        
    $("#my_cart").css({'color':'#330000'});
    
    $("#order_form").hide(); 
    
    $("#createOrder").mousedown(function(){
        $("#content").slideUp(500,function(){
            $("#order_form").slideDown(500);
        });
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
    
    $("#back_to_cart").mousedown(function(){
        $("#order_form").slideUp(500,function(){
            $("#content").slideDown(500);
        });
    });
     $("#back_to_cart").mouseover(function(){
            $("#back_to_cart").css('color', 'blueviolet');
    });
    $("#back_to_cart").mouseout(function(){
        $("#back_to_cart").css('color', 'black');
    });
    
    $("#clear_all").mousedown(function(){
        var customer = user_id;
        $.ajax({
            url: '../action/clear_cart.php',
            dataType: 'json',
            type: 'post',
            data: {customer:customer},
            success:function(data){
                alert("Удалено "+data['rows']+" строк");
                document.location.href="index.php?act=main";
            }
        });
        
    });
    
    $("#clear_row").mousedown(function(e){
        var item = this.name;
        var customer = user_id;
        $.ajax({
            url: '../action/clear_row.php',
            dataType: 'json',
            type: 'post',
            data: {customer:customer,item:item},
            success:function(data){
                document.location.href="index.php?act=cab";
            }
        });
        
    });
    
        function createOrder(){
            $.ajax({
                url: '../query/num_order.php',
                type: 'post',
                dataType: 'json',
                success:function(data){
                    var now = new Date();
                    var num = data['num']+1;
                    if(!num)num=1;
                    $("#order_form").css('display','block');
                    $("#order_title").text("Заказ №"+num+" от "+now.getDate()+" "+month[now.getMonth()]+" "+now.getFullYear()+" г.");
                    $("#shipment").focus();
                }
            });
        }
        
        function saveOrder(){
            var customer = user_id;
            $.ajax({
                url: '../action/j_add_order.php',
                type: 'post',
                dataType:'json',
                data:{customer:customer,email:$("#act_email").val(),shipment:$("#shipment").val(),phone:$("#phone").val(),comment:document.getElementById('act_comment').value},
                success:function(data){
                      var order = data['z_id'];
                      itemAddOrder(order);
                }
            });
        }
        function itemAddOrder(order){
            var cart = my_cart;
            var ord = order;
            var customer = user_id;
            $.ajax({
               url: '../action/j_add_orders_item.php',
                type: 'post',
                dataType:'json', 
                data:{cart:cart,order:ord,customer:customer},
                success:function(data){
                    if(data['out']!=0)document.location.href='../index.php?act=main';
                }
            });
        }
        $(".order_lnk").mousedown(function(){
            var order_id = this.name;
//            alert(order_id);
            $.ajax({
                url:'../query/order.php',
                type:'post',
                dataType:'json',
                data:{order:order_id},
                success:function(data){
                    $("#delivered, #similar").attr('name',order_id);
                    $("#my_cart").hide();
                    var summ_cost = 0;
                    $("#any_order").css({'display':'block'});
                    $("#order_h").text('Заказ №'+data[0]['id']+' от '+data[0]['time']);
                    $("#order_table > tbody").empty();
                    for(var i in data){
                        var price = parseInt(data[i]['price']);
                        var amount = parseInt(data[i]['amount']);
                        summ_cost += (price*amount);
                        $("#order_table > tbody:last").append("<tr align='center'><td  class='cart'>"+data[i]['artikul']+"</td><td align='left'  class='cart'>"+data[i]['name']+"</td><td  class='cart'>"+data[i]['price']+"</td><td  class='cart'>"+data[i]['amount']+"</td><td  class='cart'></td><td  class='cart' style='background-color:hsl"+data[0]['hsb']+";color:#fff;'>"+data[0]['hsb']+"</td></tr>");
                    }
                    $("#order_table > tbody:last").append("<tr class='footer_table'><td  class='cart' style='text-align:right;font-size:16px;font-weight:bold;' colspan='3'></td><td colspan='2' class='footer_table'>Итого:"+summ_cost+".00 р.</td></tr>");
                },
                error:function(data){
                    document.write(data['response']);
                }
            });
        });    
    $("#close_table").mousedown(function(){
        $("#any_order").css({'display':'none'});
        $("#my_cart").show();
    });
    
    $(".submit2").mouseout(function(){
        var id = this.id;
        
        $("#"+id+"").css('color','#000');
    });
    $(".submit2").mouseover(function(){
        var id = this.id;
        $("#"+id+"").css({'color':'#fff'});
    });
    $("#delivered").mousedown(function(){
        var order = this.name;
        $.ajax({
            url:'../action/order_delivered.php',
            type:'post',
            dataType:'json',
            data:{order:order},
            success:function(data){
                if(data['ok'] == 1){
                    document.location.reload();
                }
            },
            erroe:function(data){
                document.write(data['response']);
            }
            
        });
    });
    $("#similar").mousedown(function(){
        var order = this.name;
        $.ajax({
            url:'../action/similar_order.php',
            type:'post',
            dataType:'json',
            data:{order:order},
            success:function(data){
                if(data['ok']==1){
                    document.location.reload();
                }
            },
            error:function(data){
                document.write(data['response']);
            }
        });
    }); 
    
    $("#go_main").mousedown(function(){
        document.location.href = "?act=main";
    });
    $("#go_storefront").mousedown(function(){
        document.location.href = "?act=sec";
    });
    $("#go_faq").mousedown(function(){
        document.location.href = "?act=faq";
    });
    
});

