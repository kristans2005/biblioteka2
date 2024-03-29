<?php

class Login {

    public $dbConnection;

    function __construct($dbConnections)
    {
        $this->dbConnection = $dbConnections;
    }

    public function isLoginInputEmpty($email, $password){
        if(empty($email) || empty($password)){
            return true;
        }else{
            return false;
        }
    }

    public function login($email, $password) {
        $sql = 'SELECT * FROM users WHERE email = :email';
        $stmt = $this->dbConnection->dbConn->prepare($sql);
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        
        if ($stmt->rowCount() > 0) {
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
        
            if ($password == $user['password']) {
                // is password correct
                return $user;
            } else {
                // password wrong
                return "wrong password";
            }
        } else {
            // wrong email / dosnt exist
            return "this shit dose not exist";
        }
    }
}