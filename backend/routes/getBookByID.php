<?php

//get book by id

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include("../dbConnection.class.php");
include("../dbController.class.php");

$db = new dbConnection;
$dbConntroller = new DbController($db); 
$db->connection();

if($_SERVER['REQUEST_METHOD'] === 'POST'){

    $data = json_decode(file_get_contents("php://input"), true);
    $id = $data['id'];
    $result = $dbConntroller->getBookByID($id);
    if($result != null){
        echo json_encode($result);
    }else{
        echo "no";
    }


}


