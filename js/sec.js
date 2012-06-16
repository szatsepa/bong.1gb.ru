/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
	if (document.readyState != "complete"){
		setTimeout( arguments.callee, 100 );
		return;
	}
        
        $("#main_0").css('background-image', 'url("../images/bg_1.png")');
        
        $("#table").mousedown(function(){
            $("#items").css('visibility','visible');
        });
        $("div.item").mouseover(function(){
            var id = this.id;
            var coord = $(eval('"#'+id+'"')).offset();
            var cX = coord['left'];
            var cY = coord['top'];
            $("#item_dscr").css({top:cY,left:cX});
        });
        
});

