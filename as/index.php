<?php
  header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
  header('Pragma: no-cache'); 
  
include '../query/connect.php';

include '../action/quotesmart.php';

include '../classes/User.php';

if(!isset($attributes) || !is_array($attributes)) {
	$attributes = array();
	$attributes = array_merge($_GET,$_POST,$_COOKIE); 
}
if(!isset($_SESSION)){

    session_start();
}

if(isset ($_SESSION[id])) {
    include '../query/as_checkauth.php';
}

if ($_SESSION[auth] != 1 and $attributes[act] != "auth"){
    $attributes[act] = '';
    unset($_SESSION[auth]);
    unset($_SESSION[id]);
}

switch ($attributes[act]) {
    
    case "auth":	
        include("../query/adminauth.php");	
	break;
    
    case 'main':
        include("../main/as_header.php");
        break;
	
//    // Управление прайс-листами
  
    case "prices":
        $title = 'Создание, редактирование прайсов';
        include '../query/as_prices.php';
        include("../main/as_header.php");
        include '../main/as_main.php'; 
        break;
    
    case "imges":
        $title = 'Операции с изображениями.';
        include '../query/as_prices.php';
        include("../main/as_header.php");
        include '../main/as_imgmenu.php';
	break;
    
    case "upload_zipimg":
        include '../action/as_uploadzip.php';
        break;
    
	// Товары (штрих-коды)
    case "items":
        $title = 'Операции с товарами.';
        include '../query/as_items.php';        
        include '../main/as_header.php';
        include '../main/as_item.php';
        include '../main/as_attach_image.php';
        include '../main/as_items_table.php';    
	break;
    
    case 'uploaditems':
        include '../action/as_upload_items.php';
        break;
    
    case "upload_price":
        include '../action/as_upload_price.php';  
	break;
    
    case 'update_img':
        include '../action/as_update_image.php'; 
        break;
    
    case 'orders':
        $title = 'Заказы.';
        include '../query/as_orders.php';        
        include '../main/as_header.php'; 
        include '../main/as_orders.php';
        break;
	  
        case "logout": 
            include '../action/logout.php';
            break;
    
	default:
            $title = "";	
	    include '../main/as_header.php';
            break; 
   
    
	}
	
include '../main/footer.php';
  
    mysql_close();

?>