<?php
    class Arquivo {
        function createPage($file){
            if(empty($file) || is_null($file)){
                return false;
            }
            echo $file;
        }

    }
?>
