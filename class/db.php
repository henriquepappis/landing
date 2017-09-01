<?php

	class MysqliDB {

		protected $host 		= "127.0.0.1";
		protected $database 	= "cirio";
		protected $user			= "henriquepappis";
		protected $pass			= "dica300986";
		// protected $port		= "41890";

		public function connect() {
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
	}
?>