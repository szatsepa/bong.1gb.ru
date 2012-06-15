/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
	if (document.readyState != "complete"){
		setTimeout( arguments.callee, 100 );
		return;
	}
        
//        $("div").css('outline','1px solid black');
        
        $("#storefront").css('visibility','hidden');
        
        $("#lt_pocket").hide();
        
        $("#lb_pocket").hide();

        $("#rt_pocket").hide();

        $("#rb_pocket").hide();

        $("#midle_penis").hide();
        
        $("#hint_l").css({opacity:0, top: -825});
        
        $("#hint_r").css({opacity:0, top: -1078});
        
//        $("#hint_l").attr('disabled', true);
//        
//        $("#hint_r").attr('disabled', true);
        
        var st_int = 0;
        
        var st = false;
        
        var morg = 500;
        
        st_int = setInterval(function(){
            if(!st){
                $("#storefront").css('visibility','visible');
            }else{
                $("#storefront").css('visibility','hidden');
                
            }
            st=!st;
        },1000);
        
        var r_int = 0;
                
        r_int = setTimeout(changeRabbit_1,2500);
        
        function changeRabbit_1(){
            
                $("#rabbit_btn").attr('src', '../images/rabbit_1.png');
                
                r_int = setTimeout(changeRabbit_0,500);

        }
        function changeRabbit_0(){
            
                $("#rabbit_btn").attr('src', '../images/rabbit_0.png');
                
                r_int = setTimeout(changeRabbit_1,2500);

        }
        
        $("#rabbit_btn").mousedown(function(){
            
            clearInterval(r_int);
            
            $("#rabbit_btn").css('cursor','default');
            
            $("#rabbit_btn").attr('src', '../images/rabbit_2.png');
            
            $("#lt_pocket").toggle();
            
            $("#lb_pocket").toggle();
            
            $("#rt_pocket").toggle();
            
            $("#rb_pocket").toggle();
            
            $("#midle_penis").toggle();

        });
        
        $("#midle_penis").mousedown(function(){
            
            $("#rabbit_btn").attr('src', '../images/rabbit_0.png');
                        
             r_int = setTimeout(changeRabbit_1,2500);
            
            $("#hint_l").css({opacity:0});
        
            $("#hint_r").hide();
            
            $("#lt_pocket").hide();
            
            $("#lb_pocket").hide();
            
            $("#rt_pocket").hide();
            
            $("#rb_pocket").hide();
            
            $("#midle_penis").hide();
            
        });
        
        $("#lt_pocket").mouseover(function(){
            
            $("#hint_l").animate({opacity:0.6, top: -825},1200,'linear');           
            
        });
        
        $("#lt_pocket").mouseout(function(){

            $("#hint_l").animate({opacity:0},1200,'linear');

        });
        
        $("#lb_pocket").mouseover(function(){
            
            $("#hint_l").animate({opacity:0.6, top:-720},1200,'linear'); 
        });
        
        $("#lb_pocket").mouseout(function(){

            $("#hint_l").animate({opacity:0},1200,'linear');

        });
         
        $("#rt_pocket").mouseover(function(){
            
            $("#hint_r").animate({opacity:0.6,top:-1078},1200, 'linear');
        });
        
         $("#rt_pocket").mouseout(function(){

            $("#hint_r").animate({opacity:0},1200,'linear');

        });
        
        $("#rb_pocket").mouseover(function(){
            
            $("#hint_r").animate({opacity:0.6,top:-973},1200, 'linear');
        });
        
        $("#rb_pocket").mouseout(function(){

            $("#hint_r").animate({opacity:0},1200,'linear');

        });
        
        $(".pocket").mousedown(function(){
           document.location = "?act=sec"; 
        });
        
//        $("#hint_l").mouseover(function(){
//             $("#hint_l").css({opacity:0.6});
//        });
//        $("#hint_l").mouseout(function(){
//             $("#hint_l").animate({opacity:0},700,'linear');
//        });
//        $("#hint_l").mousedown(function(){
//            
//        });
        
//        $("#hint_r").mouseover(function(){
//             $("#hint_r").css({opacity:0.6});
//        });
//        $("#hint_r").mouseout(function(){
//             $("#hint_r").animate({opacity:0},700,'linear');
//        });
//        $("#hint_r").mousedown(function(){
//            
//        });
        
        $("#main_0").bindImageLoad(function () {
            alert("ATASS");
            // делаем что-нибудь полезное
            // переменная this указывает на картинку
        });

});

