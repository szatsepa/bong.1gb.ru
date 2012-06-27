/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
//$("#main_0").css({'background':'none'});

$(document).ready(function () {
    
        if (document.readyState != "complete"){
             
		setTimeout( arguments.callee, 3000 );
		return;
	}


    $("#main_0").css({'background-image': "url('../images/purchases.jpg')"}).bindImageLoad(function () {
            $("#main_0").css({'background-image':'none'});
        }).css({'margin-top':'0 auto'});
//    .css({'margin-top':'0 auto'});

    

//         $("#main_0").css({'background-image': "url('../images/purchases.jpg')",'margin-top':'0 auto'});
});

