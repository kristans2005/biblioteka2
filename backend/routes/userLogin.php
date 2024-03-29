<?php
session_set_cookie_params(86400); //set session to expire in 24 hours
if(!isset($_SESSION)) {
    session_start();
 }


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include("../dbConnection.class.php");
include("../loginController.class.php");

$db = new dbConnection;
$loginConntroller = new login($db);
$db->connection();

if($_SERVER['REQUEST_METHOD'] === 'POST'){

    $data = json_decode(file_get_contents("php://input"), true);

    $email = $data["email"];
    $password = $data["password"];

    if(!$loginConntroller->isLoginInputEmpty($email, $password)){
        $result = $loginConntroller->login($email, $password);
        if($result != is_string($result)){
            unset($result["password"], $result['user_id']);
            $_SESSION["user"] = $result;
            echo json_encode($_SESSION["user"]);
        }else{
            echo json_encode(["respond" => $result]);
        }
    }else{
        echo json_encode(["respond" => "please enter all form"]);
    }
    



}