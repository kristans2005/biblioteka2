<?php


class DbController{

    public $dbConnection;

    function __construct($dbConnections)
    {
        $this->dbConnection = $dbConnections;
    }


    public function returnBooks()
    {
        $result = $this->dbConnection->dbConn->query(' SELECT * FROM books ');
        $result->execute();
        $result = $result->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    public function addUser($user, $pass){
        if ($this->dbConnection->dbConn != null){
            $sql = 'INSERT INTO user (name, password) VALUES (:username, :password)';
            $stmt = $this->dbConnection->dbConn->prepare($sql);
            $stmt->bindParam(':username', $user);
            $stmt->bindParam(':password', $pass);
            $stmt->execute();
            return ["respond" => "you have made an account! Welcome to our book club " . $user . "!"];
        } else {
            return "ERROR: Connection is null";
        }
    }
    



    function __destruct() 
    {
        $this->dbConnection->dbConn = null;
    }


}