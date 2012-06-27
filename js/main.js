/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    
        if (document.readyState != "complete"){
             
		setTimeout( arguments.callee, 100 );
		return;
	}
        
        $("#main_0").css({'background-image': "url('../images/bg.png')",'margin-top':'0 auto'});
        
        var stat = false;
        
        if(!stat){
           stat =  _statistic();
        }
        
        var rbt = false;
                
        $("#storefront").css('visibility','hidden');
        
        $(".rebbit_btn").css('cursor', 'pointer');
        
        $("#vrWrapper").css({'top':'-1100px','left':'147px','visibility':'hidden'});
        
         $("#my_cart").css({'top': '-1155px','color':'black'});
                 
        $("#entry").mousedown(function(){
            
            if(!customer['id'] || customer['id'] == undefined){
                
                    $("#vrWrapper").css('visibility','visible');
                    $("#signin").show(300, function(){
                        $('#loginEmail').focus();
                    });

            }else{
                if(confirm("Действительно выйти?")){
                    document.location.href = '?act=logout';
                }
                
            }
            
        });


        var st = false;
                
       var st_int = setInterval(function(){
            if(!st){
                $("#storefront").css('visibility','visible');
            }else{
                $("#storefront").css('visibility','hidden');
                
            }
            st=!st;
        },1000);
           
        var r_int = setTimeout(changeRabbit_1,2500);
        
        function changeRabbit_1(){
            
                $("#rebbit_2").css('display', 'block');
                $("#rebbit_1").css('display', 'none');
                
                r_int = setTimeout(changeRabbit_0,500);

        }
        function changeRabbit_0(){
            
                $("#rebbit_1").css('display', 'block');
                $("#rebbit_2").css('display', 'none');
                
                r_int = setTimeout(changeRabbit_1,2500);

        }
        
        $("#r_btn").mouseover(function(){

                clearInterval(r_int);

                $("#rebbit_1").css('display', 'none');

                $("#rebbit_2").css('display', 'none');

                $("#rebbit_3").css({'display':'block'});

                $("#rebbit_3").append('<div id="midle_penis"></div>');
                
                $("#rebbit_3").append('<div class="L_pocket" id="lt_pocket"></div>');
                
                $("#rebbit_3").append('<div class="L_pocket" id="lb_pocket"></div>');
                
                $("#rebbit_3").append('<div class="R_pocket" id="rt_pocket"></div>');
                
                $("#rebbit_3").append('<div class="R_pocket" id="rb_pocket"></div>');
        });
        
        $(".L_pocket").live('mouseover',function(){
            var tid = this.id;
            $(eval(tid)).append('<div id="hint_l"><br/><br/><br/>Text?</div>');
            $("#hint_l").animate({opacity:0.6},1200,'linear');
        });
        $(".L_pocket").live('mouseout',function(){
            var tid = this.id;
            $(eval(tid)).empty();
        });
        
        
        $(".R_pocket").live('mouseover',function(){
            var tid = this.id;
            $(eval(tid)).append('<div id="hint_r"><br/><br/><br/>Text?</div>');
            $("#hint_r").animate({opacity:0.6},1200,'linear');
        });
        $(".R_pocket").live('mouseout',function(){
            var tid = this.id;
            $(eval(tid)).empty();
        });
        
        $("#midle_penis").live('mouseover',function(){
            
            $("#rebbit_3").empty();
            
            $("#rebbit_3").css('display', 'none');
            
            $("#rebbit_1").css({'display':'block'});
                        
             r_int = setTimeout(changeRabbit_1,2500);
  
        });
       
        $(".L_pocket").live('mousedown',function(){
           document.location = "?act=sec"; 
        });
        $(".R_pocket").live('mousedown',function(){
           document.location = "?act=sec"; 
        });
        
        $("#barrel").mousedown(function(){
            document.location = "?act=faq";
        }); 
        
        function _statistic(){
            var scr_W = screen.width;
            var scr_H = screen.height;
            var colorDepth = screen.colorDepth;
            $.ajax({
                url: '../action/statistics.php',
                type:'post',
                dataType:'json',
                data:{scr_W:scr_W,scr_H:scr_H,colorDepth:colorDepth},
                success:function(data){
                    return true;
                }
            });
            return true;
        }
        

});

