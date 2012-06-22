/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
	if (document.readyState != "complete"){
		setTimeout( arguments.callee, 100 );
		return;
	}
        
        var new_order_color = $("a.new_order").css('color');
        
        
        var label_array = new Array('"Принять в обработку"','"Заказ отгружен"','"Заказ доставлен"','"Отменить заказ"','"Х"');
        
        $("#order_on_table").hide();
        
        $("#exp").hide();
        
        $('#status_btn').hide();
        
        $("a.new_order").mouseover(function(e){
            var id = this.id;
            $(eval(id)).css('color', 'blueviolet');
        });
        $("a.new_order").mouseout(function(e){
            var id = this.id;
            $(eval(id)).css('color', new_order_color);
        });
        $("a.new_order").mousedown(function(){
            var order_id = this.name;
//            alert(order_id);
            $.ajax({
                url:'../query/as_order.php',
                type:'post',
                dataType:'json',
                data:{oid:order_id},
                success:function(data){
                    var status = parseInt(data['order']['status']);
//                    alert(data);
                    $("#exps").remove();
                    $("#exp").show();
                    $("#exp").append('<span id="exps"></span>');
                    $("#exps").append('<p id="zag" style="text-align:center;font-weight: bold;">Заказ № '+order_id+'</p>');
                    $("#exps").append('<p  style="">Заказчик: '+data['order']['email']+'</p>');
                    $("#exps").append('<p  style="">Дата заказа: '+data['order']['time']+'</p>');
                    if(data['order']['exe_time'] != null)$("#exps").append('<p  style="">Дата исполнения: '+data['order']['exe_time']+'</p>');
                    $("#exps").append('<p  style="">Контактный телефон: '+data['order']['phone']+'</p>');
                    $("#exps").append('<p  style="">Адресс доставки: '+data['order']['shipment']+'</p>');
                    if(data['order']['comments'] != null)$("#exps").append('<p  style="">Дополнительно: '+data['order']['comments']+'</p>');
                    $("#exps").append('<table id="expt" border="0" class="cart" ></table>');
                    $("#expt").append('<th class="cart">Артикул</th><th class="cart">Наименование</th><th class="cart">Цена ед.</th><th class="cart">Кол-во (л.)</th><th class="cart"></th>');
                    for(var i = 0;i<data['items'].length;i++){
                        $("#expt").append("<tr><td>"+data['items'][i]['artikul']+"</td><td>"+data['items'][i]['name']+"</td><td>"+data['items'][i]['price']+"</td><td align='center'>"+data['items'][i]['amount']+"</td></tr>");
//                        $(eval("#cell_"+i)).css('background-color','hsl('+data['items'][i]['hsb']+')');
                    }
                    $("#exp").append('<br/><br/>');
                    $('#status_btn').attr('name', order_id);
                    $('#status_btn').show();
                    
                    switch (status) {
                            case 1:
                                $("#stat").text(label_array[0]);
                                $("#stat").attr('name', 2);
                                break;
                            case 2:
                                $("#stat").text(label_array[1]);
                                $("#stat").attr('name', 3);
                                break;
                            case 3:
                                $("#stat").text(label_array[2]);
                                $("#stat").attr('name', 4);
                                break;
                            case 4:
                                $("#stat").text(label_array[3]);
                                $("#stat").attr('name', 5);
                                break;
                            case 5:
                                $("#stat").text(label_array[4]);
                                $("#stat").attr('name',6);
                                break;
                        
                    }
                   
                },
                error:function(data){
                    document.write(data['response']);
                }
            });
            
            
        });
        $("#stat").mousedown(function(e){
            var status = $("#stat").attr('name');
            var order = $('#status_btn').attr('name');
            //alert("M "+status+" "+order);
            $.ajax({
                url: '../action/as_change_status.php',
                type:'post',
                dataType:'json',
                data:{status:status,order:order},
                success:function(data){
                    var re = data['ok'];
                    //alert("OK "+re);
                    if(re == 1){
                        document.location.href = "?act=orders";
                    }                    
                },
                error:function(data){
                    document.write(data['response']);
                }
            });
            
        });
        $("#stat").mouseover(function(){
            $("#stat").css('color','blueviolet');
        });
        $("#stat").mouseout(function(){
            $("#stat").css('color',new_order_color);
        });
       
});