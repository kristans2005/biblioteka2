<?php

// add new book
// only admin can do it


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include("../dbConnection.class.php");
include("../dbController.class.php");

$db = new dbConnection;
$dbController = new DbController($db);
$db->connection();

if($_SERVER['REQUEST_METHOD'] === 'POST'){

    $data = json_decode(file_get_contents("php://input"), true);

    $title = $data['title'];
    $author = $data['author'];
    $year = $data['year'];
    $stock = $data['stock'];
    $image = $data['image'];
    $description = $data['description'];

    if($dbController->checkBook($title, $author, $year, $stock, $image, $description) == 1){
        $dbController->addBook($title, $author, $year, $stock, $image, $description);

    }else{
        echo json_encode(['respond' => "nope somethin is missin"]);
    }
    

}

