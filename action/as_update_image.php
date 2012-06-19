<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$uploadfile_zip   = $document_root . '/images/items/' . basename($_FILES['userfile']['name']);
$uploadfile_tmp   = $document_root . '/images/tmp/' . basename($_FILES['userfile']['name']);

$size = $_FILES['userfile']['size'];
$barcode = $attributes[barcode];
$page = intval($attributes[page]);

if ($_FILES['userfile']['type'] == 'image/jpeg' and $_FILES['userfile']['size'] < 512000) {

            if (!move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile_tmp)) {
                $javascript = "Ошибка при копировании файла";
                exit;
        } else { 

            // Стираем старое изображение основного изображения или штрих-кодов


                $query = "DELETE FROM image_items WHERE barcode='$barcode'";
                $qry_delpic = mysql_query($query) or die($query);            

                // Запоминаем инфу о картинке
                $query = "INSERT INTO image_items 
                                    (barcode)
                            VALUES ('$barcode')";

                $qry_addpic = mysql_query($query) or die($query);

                $ins_id  = mysql_insert_id();

                $newname = $ins_id.".jpg";

                $query = "UPDATE image_items SET name = '$newname' WHERE id = $ins_id";

                $result = mysql_query($query) or die($query);

                $fullname = $document_root . '/images/tmp/' . $newname;

                rename ($uploadfile_tmp,$fullname);

                if (!copy($fullname,$document_root.'/images/items/'. $newname)) {
                    $javascript = "Ошибка при копировании файла";
                    exit;
        }

                unlink ($fullname);

                $javascript = "Изображение товара успешно загружено";
    }
}
?>
<script type="text/javascript">
    document.write("<form action='index.php?act=items' method='post'><input type='hidden' name='page' value='<?php echo $page;?>'/><input type='hidden' name='jsc' value='<?php echo $javascript;?>'/></form> ");
    document.forms[0].submit();
</script>