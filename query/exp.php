<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
if(!isset($_SESSION)){

    session_start();    
}
if(isset($_SESSION['arc'])){
    $out['ok']=$_SESSION['arc']."; id => ".$_SESSION[id]."; auth => ".$_SESSION[auth];
}else{
    $out['ok']="zalupa";
}

echo json_encode($out);
?>
