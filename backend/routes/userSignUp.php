<?php

//user signUp

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include("../dbConnection.class.php");
include("../dbController.class.php");

$db = new dbConnection;
$dbConntroller = new DbController($db);
$db->connection();


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the data sent from the client
    $data = json_decode(file_get_contents("php://input"), true);
    var_dump($data);
    echo json_encode($dbConntroller->addUser($data['username'], $data['password']));

}