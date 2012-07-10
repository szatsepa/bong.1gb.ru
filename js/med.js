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
         
      var tell_objects = new Object();   
       
       setStartPosition();
       
       function setStartPosition(){
           var row = 0;
           $(".tell").each(function(){
               tell_objects[this.id] = {pos_left:this.offsetLeft, zid:(row+2)};
               if(this.id == 'tell_rebbit'){
                   tell_objects[this.id]['pos_top'] = (this.offsetTop);
                   tell_objects[this.id]['tell'] = 'Наверное надо клизму поставить!';
               }else if(this.id == 'tell_squirell'){
                   tell_objects[this.id]['pos_top'] = (this.offsetTop);
                   tell_objects[this.id]['tell'] = 'Нет, просто душновато. Я буду вентилятором.';
               }else if(this.id == 'tell_beaver'){
                   tell_objects[this.id]['pos_top'] = (this.offsetTop);
                   tell_objects[this.id]['tell'] = 'Шота мне не харашо. Наверное что то съел.';
               }else if(this.id == 'tell_narick'){
                   tell_objects[this.id]['pos_top'] = (this.offsetTop);
                   tell_objects[this.id]['tell'] = 'Ой боже мой! Вот пыхни и все пройдет.';
               }
               
           });
           row++;
          } 
          $(".tell").mousedown(function(){
              var id = this.id;
              var did;
              
              if(!tyts){
                  
                $(eval(id)).css({width:236,height:124,top:(tell_objects[this.id]['pos_top']-79),left:(tell_objects[id]['pos_left']-77),'z-index':'999'});
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

        function moveCart(pos){ 
           if(!pos){
              $("#my_cart").css({'top': '-222px'}); 
           }else{
              $("#my_cart").css({'top': '-321px'});  
           }
           return false;
       }       
});

