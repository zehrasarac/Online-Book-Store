<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
include 'db.php';

$search = isset($_GET['search']) ? $_GET['search'] : '';
$sql = "SELECT * FROM books WHERE title LIKE '%$search%' OR author LIKE '%$search%'";
$result = $conn->query($sql);

$books = array();
while ($row = $result->fetch_assoc()) {
    $books[] = $row;
}

echo json_encode($books);

$conn->close();
