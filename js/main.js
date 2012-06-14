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
        
        $("#hint_l").hide();
        
        $("#hint_r").hide();
        
        var st_int = 0;
        
        var st = false;
        
        st_int = setInterval(function(){if(!st){$("#storefront").css('visibility','visible');}else{$("#storefront").css('visibility','hidden');}st=!st;},1000);
        
        var r_int = 0;
        
        var yee = false;
        
        r_int = setInterval(changeRabbit,1120);
        
        function changeRabbit(){
            if(!yee){
                $("#rabbit_btn").attr('src', '../images/rabbit_1.png');
            }else{
                $("#rabbit_btn").attr('src', '../images/rabbit_0.png');
            }
            yee = !yee;
        }
        
        $("#rabbit_btn").mousedown(function(){
            
            clearInterval(r_int);
            
            $("#rabbit_btn").css('cursor','default');
            
            $("#rabbit_btn").attr('src', '../images/rabbit_2.png');
            
            $("#lt_pocket").show();
            
            $("#lb_pocket").show();
            
            $("#rt_pocket").show();
            
            $("#rb_pocket").show();
            
            $("#midle_penis").show();

        });
        
        $("#midle_penis").mousedown(function(){
            
            $("#rabbit_btn").attr('src', '../images/rabbit_1.png');
                        
            r_int = setInterval(changeRabbit,1120);
            
            $("#hint_l").hide();
        
            $("#hint_r").hide();
            
            $("#lt_pocket").hide();
            
            $("#lb_pocket").hide();
            
            $("#rt_pocket").hide();
            
            $("#rb_pocket").hide();
            
            $("#midle_penis").hide();
            
        });
        
        $("#lt_pocket").mousedown(function(){
            
            $("#hint_l").hide();
        
            $("#hint_r").hide();
            
            $("#hint_l").show();
            
            $("#hint_l").css('top', '-825px');
        });
        
        $("#lb_pocket").mousedown(function(){
            
            $("#hint_l").hide();
        
            $("#hint_r").hide();
            
            $("#hint_l").show();
            
            $("#hint_l").css('top', '-720px');
        });
         
        $("#rt_pocket").mousedown(function(){
            
            $("#hint_l").hide();
        
            $("#hint_r").hide();
            
            $("#hint_r").show();
            
            $("#hint_r").css('top', '-825px');
        });
        
        $("#rb_pocket").mousedown(function(){
            
            $("#hint_l").hide();
        
            $("#hint_r").hide();
            
            $("#hint_r").show();
            
            $("#hint_r").css('top', '-720px');
        });

});

