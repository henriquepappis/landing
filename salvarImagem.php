<?php
	include "placaPage.php";
	$data = new DateTime();
    $data = $data->format('d-m-Y-H:i:s');

    // nome do arquivo que será gerado.
	$filename = $data;

	// local onde o arquivo será salvo
	$file = 'saves/'.$filename.'.png';

	// imagem gerada
	$imagedata = base64_decode($_POST['imgdata']);

	//monta a imagem gerada com o nome
	file_put_contents($file,$imagedata);

	$arquivoGerado = new Arquivo;
	$arquivoGerado->createPage($file);

	// retorna o caminho da imagem gerada.
	if(empty($file) || is_null($file)){
		return 'timblim';
	}
	return $arquivoGerado;