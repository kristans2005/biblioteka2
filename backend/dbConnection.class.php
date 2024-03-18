<?php



class dbConnection {

    private $config = [
        "host" => "localhost",
        "dbname" => "bliblioteka",
        "user" => "root",
        "password" => "",
        "charset" => "utf8mb4"
      ];

    public $dbConn;
    public $pdo;

    function __construct()
    {
        $this->pdo = "mysql:" . http_build_query($this->config, "", ";");
    }


    public function connection()
    {
        $this->dbConn= new PDO($this->pdo);
        $this->dbConn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        return $this->dbConn;
    }

    public function runSQL($sql) 
    {
        $this->dbConn->exec($sql);
    }


    function __destruct() 
    {
        $this->dbConn = null;
    }





}