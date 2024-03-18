<?php

//show all books list

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include("../dbConnection.class.php");
include("../dbController.class.php");

$db = new dbConnection;
$dbConntroller = new DbController($db);
$db->connection();

echo json_encode($dbConntroller->returnBooks());
