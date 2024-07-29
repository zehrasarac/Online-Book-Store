<?php 
include 'db.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$book_id = isset($_GET['book_id']) ? intval($_GET['book_id']) : 0;
$sql = "SELECT * From books WHERE book_id = $book_id";

$result = $conn->query($sql);
$books = $result->fetch_assoc();

echo json_encode($books);

$conn->close();