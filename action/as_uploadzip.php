<?php 
// Модуль загрузки архивов и логотипов

// TO DO сделать проверку на удаление предыдущего логотипа!!!


$uploadfile_zip   = $document_root . '/images/items/' . basename($_FILES['userfile']['name']);
$uploadfile_logos = $document_root . '/images/logo/' . basename($_FILES['userfile']['name']);
$uploadfile_tags  = $document_root . '/images/tags/' . basename($_FILES['userfile']['name']);
$uploadfile_tmp   = $document_root . '/images/tmp/' . basename($_FILES['userfile']['name']);

$size = $_FILES['userfile']['size'];

if ($_FILES['userfile']['type'] == 'image/gif' and $_FILES['userfile']['size'] < 512000) {
    if (!move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile_logos)) {
        $javascript = "Ошибка при копировании файла";
    } else {
        $new_uploadfile = $document_root . '/images/logo/logo.gif';
        // Убьем старый файл
        if (file_exists($new_uploadfile)) {
            unlink ($new_uploadfile);
        }

        // Переименуем загруженный файл
        rename ($uploadfile_logos, $new_uploadfile);
            $javascript = "Логотип успешно загружен";
    }
}


	
if ($_FILES['userfile']['type'] == 'image/jpeg' and $_FILES['userfile']['size'] < 512000) {
    
    $tags = $attributes[tag];

//    move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile_tags);
            // Картинка тега?
        if (isset($attributes[tag])) {
            
            $query = "SELECT name FROM image_groups WHERE tags = '$tags'";

            $result = mysql_query($query);

            $row = mysql_fetch_assoc($result);

            $name = $row[name];
            
            $fullname = $document_root . '/images/tags/' .$name; 
            
              // Убьем старый файл
                if ($name) {
                        unlink ($fullname);
                }

                if (!move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile_tags)) {
                    $javascript = "Ошибка при копировании файла";
                } else {
                                        
                    $query = "DELETE FROM image_groups WHERE tags='$tags'";
                                
                    $result = mysql_query($query) or die($query);
                                        
                    $query = "INSERT INTO image_groups 
                                                (tags)
                                        VALUES ('$tags')";

                    $result = mysql_query($query) or die($query);

                    $ins_id  = mysql_insert_id();
                    
                    $newname = "g_".$ins_id.".jpg";
                    
                    $fullname = $document_root . '/images/tags/' . $newname;
                    
                    $query = "UPDATE image_groups SET name = '$newname' WHERE id = $ins_id";

                    $result = mysql_query($query) or die($query);
                    
                    rename ($uploadfile_tags,$fullname);
                    
//                    echo $uploadfile_tags;
                    
                    $javascript = "Изображение тэга успешно загружено";
                }

            } 

            // Картинка товара?
    if (isset($attributes[barcode])) {


                    if (!move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile_tmp)) {
                           $javascript = "Ошибка при копировании файла";
                            exit;
                    } else { 

                        // Стираем старое изображение основного изображения или штрих-кодов
                        if ($attributes[pictype]) {

                                $query = "DELETE FROM image_items WHERE barcode=$attributes[barcode] AND pictype=$attributes[pictype]";
                                $qry_delpic = mysql_query($query) or die($query);

                        }
                        
                        $barcode = $attributes[barcode];
                        $type = intval($attributes[pictype]);

                            // Запоминаем инфу о картинке
                            $query = "INSERT INTO image_items 
                                                (barcode, 
                                                type)
                                        VALUES ('$barcode',
                                                $type)";

                            $qry_addpic = mysql_query($query) or die($query);

                            $ins_id  = mysql_insert_id();
                    
                            $newname = $ins_id.".jpg";

                            $query = "UPDATE image_items SET name = '$newname' WHERE id = $ins_id";

                            $result = mysql_query($query) or die($query);

                            $fullname = $document_root . '/images/tmp/' . $newname;
                            
                            rename ($uploadfile_tmp,$fullname);

                            if (!copy($fullname,$document_root.'/images/goods/'. $newname)) {
                                $javascript = "Ошибка при копировании файла";
                                exit;
                    }

                            unlink ($fullname);

                            $javascript = "Изображение товара успешно загружено";
        }



    } // isset($attributes[barcode])
}


   if (isset($attributes[filetype]) and $attributes[filetype] == "zip") {
       
        move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile_zip);
//                if(!) {
//            $javascript = "Ошибка при копировании файла";
//        }
        
        $zip = new ZipArchive;
        
        if ($zip->open($uploadfile_zip) === TRUE) {
            
		
            $i = 0;
            while ($name = $zip->getNameIndex($i)) {
                
                    $barcode     = substr ($name, 0, -4);
                    
                    $i_name = quote_smart($i_name);

                    // Удалим информацию о старой картинке
                    $query = "DELETE FROM image_items 
                                    WHERE barcode='$barcode' 
                                      AND type=1";

                    $result = mysql_query($query) or die($query);

                    // Запоминаем инфу о картинке
                    $query = "INSERT INTO image_items 
                                            (barcode)
                                    VALUES ($barcode)";

                    $result = mysql_query($query) or die($query);

                    $ins_id  = mysql_insert_id();
                    
                    $newname = $ins_id.".jpg";
                    
                    $query = "UPDATE image_items SET name = '$newname' WHERE id = $ins_id";
                    
                    $result = mysql_query($query) or die($query);


                    $zip->renameName($name,$newname);
				
                ++$i;
            }
            $zip->close();  
        }
        
		
        if ($zip->open($uploadfile_zip) === TRUE) {
            $zip->extractTo($document_root . '/images/items/');
            $zip->close(); 
									
			
        } else {
            $javascript = "Ошибка разархивирования";
        }
        if (!unlink ($uploadfile_zip)) {
           $javascript = "Ошибка удаления файла";
        } else {
            $javascript = "Изображения загружены);";
        }
        
            
    }

    if (!isset($javascript)) {
        $javascript = "Ошибка загрузки. Проверьте тип и размер файла.";
    }
//    header("location:index.php?act=images");
?>
<script type="text/javascript">
    document.write("<form action='index.php?act=imges' method='post'><input type='hidden' name='jsc' value='<?php echo $javascript;?>'/></form> ");
    document.forms[0].submit();
</script>
