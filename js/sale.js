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
       
//         $("#my_cart").css({'left':'832px'});
//       
//         function moveCart(pos){ 
//           if(!pos){
//              $("#my_cart").css({'top': '-185px'}); 
//           }else{
//              $("#my_cart").css({'top': '-284px'});  
//           }
//           
//       }
       
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
//            moveCart(tyts);
            return false;
            });

});

