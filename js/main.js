/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    
        if (document.readyState != "complete"){
             
		setTimeout( arguments.callee, 100 );
		return;
	}
        
        var stat = false;
        
        var tid = '';
        
        if(!stat){
           stat =  _statistic();
        }
        
        var rbt = false;
        
        $("#vrWrapper").css({'top':'-1100px','left':'147px','visibility':'hidden'});
        
        $("#my_cart").css({'top': '-1155px','color':'gold'});
                 
        $("#entry").mousedown(function(){
            
            if(!customer['id'] || customer['id'] == undefined){
                
                    $("#vrWrapper").css({'z-index':'16','visibility':'visible'});
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
        
        var step = 0;
        
        var store_array = new Array();
        
        for(var i = 0;i < 127; i++){
            store_array.push(Math.random() * 2700 + 300);
        }
                
       var st_int  = setTimeout(storefrontOFF,120);
        
        function storefrontOFF(){
            
                $("#storefront_off").css('display','block');
                $("#storefront_on").css('display','none');
                
                st_int = setTimeout(storefrontON,store_array[step]);
                step++;
                if(step > 127){
                    step = 0;
                }
        }
        function storefrontON(){
            
                 $("#storefront_on").css('display','block');
                 $("#storefront_off").css('display','none');
                
                st_int = setTimeout(storefrontOFF,store_array[step]);
                step++;
                if(step > 127){
                    step = 0;
                }

        }
        
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
            
            if(!rbt){
                clearInterval(r_int);
                
                $("#rebbit_1").css('display', 'none');

                $("#rebbit_2").css('display', 'none');

                $("#rebbit_3").css({'display':'block'});

                $("#rebbit_3").append('<div id="midle_penis"></div>');
                
                $("#rebbit_3").append('<div class="L_pocket" id="lt_pocket"></div>');
                
                $("#rebbit_3").append('<div class="L_pocket" id="lb_pocket"></div>');
                
                $("#rebbit_3").append('<div class="R_pocket" id="rt_pocket"></div>');
                
                $("#rebbit_3").append('<div class="R_pocket" id="rb_pocket"></div>');
                
                rbt = !rbt;
            }

                
        });
        
        var Pockets = new Object({'lt_pocket':'Перейти к витрине','rt_pocket':'Закупки','rb_pocket':'Доставка','lb_pocket':'Медпункт'});
        
        var Pages = new Object({'lt_pocket':'?act=sec','rt_pocket':'?act=sale','rb_pocket':'?act=move','lb_pocket':'?act=med'});
        
        $(".L_pocket").live('mouseover',function(){
            var tp = this.offsetTop;
            $("#rebbit_3").append('<div class="hint" id="hint_l"><div class="text_hint"><p id="p_link"></p></div></div>');
            $("#p_link").text(Pockets[this.id]);
            $("#hint_l").css({'top':(tp-572)+'px'}).animate({opacity:0.6},1200,'linear');
        });
        $(".L_pocket").live('mouseout',function(){
            $("#hint_l").remove();
        });
        
        
        $(".R_pocket").live('mouseover',function(){
            var tp = this.offsetTop;
            $("#rebbit_3").append('<div class="hint" id="hint_r"><div class="text_hint"><p id="p_link"></p></div></div>');
            $("#p_link").text(Pockets[this.id]);
            $("#hint_r").css({'top':(tp-562)+'px'}).animate({opacity:0.6},1200,'linear');
        });
        $(".R_pocket").live('mouseout',function(){
            $("#hint_r").remove();
        });
        
        $("#midle_penis").live('mouseover',function(){
            
            $("#rebbit_3").empty();
            
            $("#rebbit_3").css('display', 'none');
            
            $("#rebbit_1").css({'display':'block'});
                        
             r_int = setTimeout(changeRabbit_1,2500);
             
             rbt = !rbt;
  
        });
       
        $(".L_pocket").live('mousedown',function(){
            document.location = Pages[this.id]; 
        });
        $(".R_pocket").live('mousedown',function(){
            document.location = Pages[this.id]; 
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
                data:{scr_W:scr_W,scr_H:scr_H,colorDepth:colorDepth}
            });
            return false;
        }
        

});

