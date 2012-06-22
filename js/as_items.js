/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
	if (document.readyState != "complete"){
		setTimeout( arguments.callee, 100 );
		return;
	}
        $("#del_item").hide();
        $("#attach_image").hide();
        
        $("#action_item").mousedown(function(){
            var barcode = $("#bcode").val();
            var name = $("#name_item").val();
            var description = $("#s_dscr").val();
            var ingridients = $("#comp").val();
            var specification = $("#spec").val();
            var nds = $("#nds").val();
            var action = $("#action_item").val();
            var page = $("#page").val();
            var url = 'http://brioso-lab.ru/action/as_add_item.php';
            if(action == 'Сохранить'){
                url = 'http://brioso-lab.ru/action/as_update_item.php';    
            }
//            alert(url);
            $.ajax({
                    url:url,
                    type:'post',
                    dataType:'json',
                    data:{barcode:barcode,name:name,description:description,ingridients:ingridients,specification:specification,nds:nds},
                    success:function(data){
                        var re = data['ok'];
                        if(re == 1){
                            window.location.href = "?act=items&page="+page;
                        }
                    },
                    error:function(data){
                        document.write(data['response']);
                    }
                });
            
        });
        
        $(".itm").mousedown(function(e){
            var barcode = this.name;
            var pg = this.target;
//            alert(barcode);
            $("#page").val(pg);
            $.ajax({
                url:'http://brioso-lab.ru/query/as_item.php',
                type:'post',
                dataType:'json',
                data:{barcode:barcode,page:pg},
                success:function(data){
                   $("#bcode").val(barcode).select();
                   $("#att_img").val(barcode);
                   $("#att_pg").val(pg);
                   $("#name_item").val(data['name']);
                   $("#s_dscr").val(data['description']);
                   $("#comp").val(data['ingridients']);
                   $("#spec").val(data['specification']);
                   $("#nds").val(data['nds']);
                   $("#action_item").val('Сохранить');
                   $("#del_item").show();
                   $("#attach_image").show();
                   $("#s_img").show();
                   if(data['image']){
                       $("#smoll_img").attr('src', 'http://brioso-lab.ru/images/items/'+data['image']);
                   }else{
                       $("#s_img").hide();
                   }
                   
// bcode                      
                },
                error:function(data){
                    document.write(data['response']);
                }
            });
        });
        $("#it_del").mousedown(function(){
            var barcode = $("#bcode").val();
            $.ajax({
                url:'../action/as_del_item.php',
                type:'post',
                dataType:'json',
                data:{barcode:barcode},
                success:function(data){
                    var re = data['ok'];
                    if(re){
                        alert('Позиция удалена');
                        window.location.href = "?act=items";
                    }
                },
                error:function(data){
                    document.write(data['response']);
                }
            });
        });

        
});

