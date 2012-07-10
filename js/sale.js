/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
//$("#main_0").css({'background':'none'});

$(document).ready(function () {
    
        if (document.readyState != "complete"){
             
		setTimeout( arguments.callee, 100 );
		return;
	}
        
       var tyts = false;
       
       var position;
       
       var tell_objects = new Object();   
       
       setStartPosition();
       
         $("#my_cart").css({'left':'832px','top': '-185px','color':'gold'});
       
         function moveCart(pos){ 
           if(!pos){
              $("#my_cart").css({'top': '-185px'}); 
           }else{
              $("#my_cart").css({'top': '-284px'});  
           }
           
       }
       
              function setStartPosition(){
           var row = 0;
           $(".tell").each(function(){
               tell_objects[this.id] = {pos_left:this.offsetLeft, zid:(row+2)};
               if(this.id == "tell_rebbit"){
                   tell_objects[this.id]['pos_top'] = (this.offsetTop);
                   tell_objects[this.id]['tell'] = 'На и отвали';
               }else if(this.id == 'tell_bear'){
                   tell_objects[this.id]['pos_top'] = (this.offsetTop);
                   tell_objects[this.id]['tell'] = 'Гони товар!';
               }else if(this.id == 'tell_beaver'){
                   tell_objects[this.id]['pos_top'] = (this.offsetTop);
                   tell_objects[this.id]['tell'] = 'Вы шо пацаны! Та ну его!!!';
               }
               
           });
           row++;
          }
          
          $(".tell").mousedown(function(){
              var id = this.id;
              var did;
              
              if(!tyts){
                  
                $(eval(id)).css({width:236,height:124,top:(tell_objects[this.id]['pos_top']-72),left:(tell_objects[id]['pos_left']-77),'z-index':'999'});
                $(eval(id)).append('<div class="tell_in"><p id="tell_r"></p></div>');
                $("#tell_r").text(tell_objects[id]['tell']);
                $(".tell").each(function(){
                    did = this.id;
                    if(did != id){
                       $(eval(did)).css({'visibility':'hidden'}); 
                    }
                });
                
              }else{
                  $(".tell").empty();
                  $(".tell").each(function(){
                   did = this.id; 
                   $(eval(did)).css({'width':'82px','height':'43px','visibility':'visible',top:tell_objects[did]['pos_top'],left:tell_objects[did]['pos_left'],'z-index':tell_objects[did]['zid']}); 
                    
                });
            }
            tyts = !tyts;
            moveCart(tyts);
            return false;
            });

//        $("#tell_rebbit").mousedown(function(){
//            if(!tyts){
//                position = $("#tell_rebbit").offset();
//                $("#tell_rebbit").css({'width':'236px','height':'124px','top':'62px','left':'278px','z-index':'999'});
//                $("#tell_rebbit").append('<div class="tell_in"><p id="tell_r"></p></div>');
//                $("#tell_r").text('На и отвали');
//                $("#tell_bear,#tell_beaver").css({'visibility':'hidden'});               
//            }else{
//                $(".tell").empty();
//                $(".tell").css({'width':'82px','height':'43px','visibility':'visible'});
//                $("#tell_rebbit").css({'top':(position['top']-43),'left':position['left'],'z-index':'4'});
//            }
//            tyts = !tyts;
//            moveCart(tyts);
//            return;
//        });
//        $("#tell_bear").mousedown(function(){
//            if(!tyts){
//                position = $("#tell_bear").offset();
//                $("#tell_bear").css({'width':'236px','height':'124px','top':'-96px','left':'348px','z-index':'999'});
//                $("#tell_bear").append('<div class="tell_in"><p id="tell_r"></p></div>');
//                $("#tell_r").text('Гони товар!');
//                $("#tell_rebbit,#tell_beaver").css({'visibility':'hidden'});               
//            }else{
//                $(".tell").empty();
//                $(".tell").css({'width':'82px','height':'43px','visibility':'visible'});
//                $("#tell_bear").css({'top':(position['top']-129),'left':position['left'],'z-index':'2'});
//            }
//            tyts = !tyts;
//            moveCart(tyts);
//            return;
//        }); 
//        $("#tell_beaver").mousedown(function(){
//            if(!tyts){
//                position = $("#tell_beaver").offset();
//                $("#tell_beaver").css({'width':'236px','height':'124px','top':'0px','left':'648px','z-index':'999'});
//                $("#tell_beaver").append('<div class="tell_in"><p id="tell_r"></p></div>');
//                $("#tell_r").text('Вы шо пацаны! Та ну его!!!');
//                $("#tell_rebbit,#tell_bear").css({'visibility':'hidden'});               
//            }else{
//                $(".tell").empty();
//                $(".tell").css({'width':'82px','height':'43px','visibility':'visible'});
//                $("#tell_beaver").css({'top':(position['top']-86),'left':position['left'],'z-index':'2'});
//            }
//            tyts = !tyts;
//            moveCart(tyts);
//            return;
//        });
});

