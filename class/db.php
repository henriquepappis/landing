<?php

	private $host 		= "mysql796.umbler.com";
	private $database 	= "cirio";
	private $user		= "henriquepappis";
	private $pass		= "dica300986";
	// private $port		= "41890";


	class MysqliDB {

		$link = mysqli_connect($host, $user, $pass, $database);

		if (!$link) {
		    echo "Não foi possível conectar ao MySQL." . PHP_EOL;
		    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
		    echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
		    exit;
		}

		echo "Conexão realizada com sucesso." . PHP_EOL;
		echo "Host information: " . mysqli_get_host_info($link) . PHP_EOL;

		mysqli_close($link);

	}
?>