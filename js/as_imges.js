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
        
        $("#del_logo").mousedown(function(){
            if(confirm('Действительно удалить?')){
                    $.ajax({
                    url:'http://brioso-lab.ru/action/as_del_logo.php',
                    dataType:'json',
                    type:'post',
                    data:{my:1},
                    success:function(data){
                        var re = data['ok'];
                        if(re == 1){
                            alert("Логотип удален");
//                            window.location.href = 'index.php?act=imges';
                            return;
                        }
                    },
                    error:function(data){
                        document.write(data['response']);
                    }
                });
            }else{
                return;
            }
           
        });
        $("#del_pimg").mousedown(function(){
            var tags = $("#id_tags").val();
            if(confirm('Действительно удалить?'+tags)){
                    $.ajax({
                    url:'http://brioso-lab.ru/action/as_del_tags.php',
                    dataType:'json',
                    type:'post',
                    data:{tags:tags},
                    success:function(data){
                        var re = data['ok'];
                        if(re == 1){
                            alert("Изображение удалено");
//                            window.location.href = 'index.php?act=imges';
                        }
                    },
                    error:function(data){
                        document.write(data['response']);
                    }
                });
            }else{
                return;
            }
           
        });
        
});
