/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
	if (document.readyState != "complete"){
		setTimeout( arguments.callee, 100 );
		return;
	}
        
        var price = new Array();
        
        $("#pricelist").hide();
        
        $(".red").mouseover(function(e){
            var id = this.id;
            $(eval(id)).css('color','blueviolet');
        });
         $(".red").mouseout(function(e){
            var id = this.id; 
            $(eval(id)).css('color','black');
        });
        $(".red").mousedown(function(e){
            var pid = this.name;
            $("#pricelist").hide();
//            $("#upl_price").show();
            $.ajax({
                url: '../query/as_price.php',
                type: 'post',
                dataType: 'json',
                data: {pid:pid},
                success:function(data){
//                    alert(data['creation']);
                    price = data;
                    $("#pricelist").show();
                    $("#price_name").css('font-weight','bold').css('font-size','16px').text(data['name']);
                    if(data['creation']==null){
                        $("#creation").text('загрузите прайс-лист');                        
                    }else{
//                        $("#upl_price").hide();
                        $("#creation").css('color','black').text(data['creation']);                        
                    }
                    $("#price_id").val(data['id']);
                    $("#tg").val(data['tags']);
                    $("#dscr").val(data['comment']);
                },
                error:function(data){
                   document.write(data['response']); 
                }
                
            });
        });
        $("#new_price").mousedown(function(){
            var p_name = $("#p_name").val();
            if(p_name || p_name.length > 0){
                    $.ajax({
                    url: '../action/as_new_price.php',
                    type: 'post',
                    dataType: 'json',
                    data:{activ:0,name:p_name},
                    success:function(data){
                        var price = data['new'];

                        if(price == 1){
                            document.location.reload();
                        }else{
                            alert("ERROR MYSQL_SERVER");
                        }
                    },
                    error:function(data){
                        document.write(data['response']);
                    }

                });
            }else{
                alert("Укажите название прайслиста!");
            }
            
        });
        $("#price_delete").mousedown(function(){
            var pid = price['id'];
            
            $.ajax({
               url: '../action/as_price_delete.php',
               type:'post',
               dataType:'json',
               data:{pid:pid},
               success:function(data){
                   var price = data['ok'];
                   if(price == 1){
                        document.location.reload();
                    }                  
               },
               error:function(data){
                   document.write(data['response']);
               }
            });
        });
        $("#save_chng").mousedown(function(){
            var tags = $("#tg").val();
            var comm = $("#dscr").val();
            var pid = price['id'];
            alert("O");
            $.ajax({
                url:'../action/as_change_price.php',
                type:'post',
                dataType:'json',
                data:{tags:tags,comment:comm,pid:pid},
                success:function(data){
                    var re = data['ok'];
                    if(re == 1){
                       document.location.reload(); 
                    }
                },
               error:function(data){
                   document.write(data['response']);
               }
            });
        });
       
});

