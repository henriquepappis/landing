<?php
	class DB {

	protected $db_host = "mysql796.umbler.com";
	protected $db_user = "henriquepappis";
	protected $db_pass = "dica300986";
	protected $db_name = "cirio";
	protected $db_port = "41890";

	// Open a connect to the database.
	// Make sure this is called on every page that needs to use the database.

	public function connect() {

		$connect_db = new mysqli($this->db_host, $this->db_user, $this->db_pass, $this->db_name, $this->db_port);

		if (mysqli_connect_errno()) {
			printf("Connection failed: %s\ ", mysqli_connect_error());
			exit();
		}
		return true;
	}

	public function insertPhoto($tabela, $campos, $valores) {
		$conn = connect();

		$sqlStatment = "INSERT INTO $table ($campos) VALUES ($valores)";

		return $sqlStatment;

		// mysql_query($sqlStatment);
	}

	public function listImage() {

	}

}