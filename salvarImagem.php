<?php
	include "placaPage.php";
	require_once ('vendor/joshcam/mysqli-database-class/MysqliDb.php');
	require_once ('functions/functions.php');
	$data = new DateTime();
    $data = $data->format('YmdHis');

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
		return 'Erro ao processar o arquivo.';
	}

	$clienteIP = get_client_ip();

	$db = new MysqliDb (
		Array (
    		'host' => 'mysql796.umbler.com',
        	'username' => 'henriquepappis',
			'password' => 'dica300986',
        	'db'=> 'cirio',
        )
	);

	$data = Array ("path" => $arquivoGerado,
	               "clicks" => 0,
	               "ip" => $clienteIP
	);

	$id = $db->insert('saves', $data);

	if($id)
		return $arquivoGerado;