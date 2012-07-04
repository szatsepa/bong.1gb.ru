/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    
        if (document.readyState != "complete"){
             
		setTimeout( arguments.callee, 100 );
		return; 
	}
        
       var tyts = false;
       var position;

        $("#tell_right").mousedown(function(){
            if(!tyts){
                position = $("#tell_right").offset();
//                alert(position['top']);
                $("#tell_right").css({'width':'236px','height':'124px','top':'-25px','left':'508px','z-index':'999'});
                $("#tell_right").append('<div class="tell_in"><p id="tell_r"></p></div>');
                $("#tell_r").text('На и отвали');
                $("#tell_left").css({'visibility':'hidden'});               
            }else{
                $(".tell").empty();
                $(".tell").css({'width':'82px','height':'43px','visibility':'visible'});
                $("#tell_right").css({'top':(position['top']-43),'left':position['left'],'z-index':'1'});
            }
            tyts = !tyts;
            return;
        });
        $("#tell_left").mousedown(function(){
            if(!tyts){
                position = $("#tell_left").offset();
//                alert(position['top']);
                $("#tell_left").css({'width':'236px','height':'124px','top':'-61px','left':'508px','z-index':'999'});
                $("#tell_left").append('<div class="tell_in"><p id="tell_r"></p></div>');
                $("#tell_r").text('Гони товар!');
                $("#tell_right").css({'visibility':'hidden'});               
            }else{
                $(".tell").empty();
                $(".tell").css({'width':'82px','height':'43px','visibility':'visible'});
                $("#tell_left").css({'top':(position['top']-86),'left':position['left'],'z-index':'2'});
            }
            tyts = !tyts;
            return;
        });
});

