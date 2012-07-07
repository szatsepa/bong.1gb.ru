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
         
         $("#my_cart").css({'top': '-222px','color':'blue'});
         
          function moveCart(pos){ 
           if(!pos){
              $("#my_cart").css({'top': '-222px'}); 
           }else{
              $("#my_cart").css({'top': '-321px'});  
           }
           
       }

        $("#tell_rebbit").mousedown(function(){
            if(!tyts){
                position = $("#tell_rebbit").offset();
                $("#tell_rebbit").css({'width':'236px','height':'124px','top':'-17px','left':'188px','z-index':'999'});
                $("#tell_rebbit").append('<div class="tell_in"><p id="tell_r"></p></div>');
                $("#tell_r").text('Наверное надо клизму поставить!');
                $("#tell_squirell,#tell_beaver,#tell_narick").css({'visibility':'hidden'});               
            }else{
                $(".tell").empty();
                $(".tell").css({'width':'82px','height':'43px','visibility':'visible'});
                $("#tell_rebbit").css({'top':(position['top']-43),'left':position['left'],'z-index':'4'});
            }
            tyts = !tyts;
            moveCart(tyts);
            return;
        });
        $("#tell_squirell").mousedown(function(){
            if(!tyts){
                position = $("#tell_squirell").offset();
                $("#tell_squirell").css({'width':'236px','height':'124px','top':'-96px','left':'346px','z-index':'999'});
                $("#tell_squirell").append('<div class="tell_in"><p id="tell_r"></p></div>');
                $("#tell_r").text('Нет, просто душновато. Я буду вентилятором.');
                $("#tell_rebbit,#tell_beaver,#tell_narick").css({'visibility':'hidden'});               
            }else{
                $(".tell").empty();
                $(".tell").css({'width':'82px','height':'43px','visibility':'visible'});
                $("#tell_squirell").css({'top':(position['top']-129),'left':position['left'],'z-index':'2'});
            }
            tyts = !tyts;
            moveCart(tyts);
            return;
        }); 
        $("#tell_beaver").mousedown(function(){
            if(!tyts){
                position = $("#tell_beaver").offset();
                $("#tell_beaver").css({'width':'236px','height':'124px','top':'100px','left':'248px','z-index':'999'});
                $("#tell_beaver").append('<div class="tell_in"><p id="tell_r"></p></div>');
                $("#tell_r").text('Шота мне не харашо. Наверное что то съел.');
                $("#tell_rebbit,#tell_squirell,#tell_narick").css({'visibility':'hidden'});               
            }else{
                $(".tell").empty();
                $(".tell").css({'width':'82px','height':'43px','visibility':'visible'});
                $("#tell_beaver").css({'top':(position['top']-86),'left':position['left'],'z-index':'2'});
            }
            tyts = !tyts;
            moveCart(tyts);
            return;
        });
        $("#tell_narick").mousedown(function(){
            if(!tyts){
                position = $("#tell_narick").offset();
                $("#tell_narick").css({'width':'236px','height':'124px','top':'-156px','left':'563px','z-index':'999'});
                $("#tell_narick").append('<div class="tell_in"><p id="tell_r"></p></div>');
                $("#tell_r").text('Ой боже мой! Вот пыхни и все пройдет.');
                $("#tell_rebbit,#tell_squirell,#tell_beaver").css({'visibility':'hidden'});               
            }else{
                $(".tell").empty();
                $(".tell").css({'width':'82px','height':'43px','visibility':'visible'});
                $("#tell_narick").css({'top':(position['top']-172),'left':position['left'],'z-index':'2'});
            }
            tyts = !tyts;
            moveCart(tyts);
            return;
        });
});

