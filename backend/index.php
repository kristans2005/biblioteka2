<?php 

/*
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Content-Type: application/json");


require("dataBase.php");
$config = require("config.php");

//echo "hello";

$db = new Database($config);

// $query = "SELECT * FROM gramatas";
// $params = [];

$books = $db->executePROT(" SELECT * FROM gramata ");


//var_dump($books);

echo json_encode($books);
//header('Content-Type: application/json');
*/