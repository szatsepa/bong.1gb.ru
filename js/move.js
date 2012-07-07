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
       
       $("#my_cart").css({'left':'832px','top': '-141px','color':'gold'});
       
       function moveCart(pos){ 
           if(!pos){
              $("#my_cart").css({'top': '-141px'}); 
           }else{
              $("#my_cart").css({'top': '-240px'});  
           }
           
       }

        $("#tell_right").mousedown(function(){
//            var pos = $("#my_cart").offset().top;
            if(!tyts){
                position = $("#tell_right").offset();
                $("#tell_right").css({'width':'236px','height':'124px','top':'-25px','left':'508px','z-index':'999'});
                $("#tell_right").append('<div class="tell_in"><p id="tell_r"></p></div>');
                $("#tell_r").text('На и отвали');
                $("#tell_left").css({'visibility':'hidden'});
//                moveCart(-114);
            }else{
                $(".tell").empty();
                $(".tell").css({'width':'82px','height':'43px','visibility':'visible'});
                $("#tell_right").css({'top':(position['top']-43),'left':position['left'],'z-index':'1'});
                
            }
            tyts = !tyts;
            moveCart(tyts);
            return false;
        });
        $("#tell_left").mousedown(function(){
//            var pos = $("#my_cart").offset().top;
            if(!tyts){
                position = $("#tell_left").offset();
                $("#tell_left").css({'width':'236px','height':'124px','top':'-61px','left':'508px','z-index':'999'});
                $("#tell_left").append('<div class="tell_in"><p id="tell_r"></p></div>');
                $("#tell_r").text('Гони товар!');
                $("#tell_right").css({'visibility':'hidden'});
//                moveCart(-114);
            }else{
                $(".tell").empty();
                $(".tell").css({'width':'82px','height':'43px','visibility':'visible'});
                $("#tell_left").css({'top':(position['top']-86),'left':position['left'],'z-index':'2'});
//                moveCart(114);
            }
            tyts = !tyts;
            moveCart(tyts);
            return false;
        });
});

