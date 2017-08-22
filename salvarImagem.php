<?php
	$imagedata = base64_decode($_POST['imgdata']);

	$data = new DateTime();
    $data = $data->format('d-m-Y-H:i:s');
	$filename = "Cirio".$data;

	//path where you want to upload image
	$file = 'saves/'.$filename.'.png';

	$imageurl  = 'saves/'.$filename.'.png';

	file_put_contents($file,$imagedata);

	echo $imageurl;