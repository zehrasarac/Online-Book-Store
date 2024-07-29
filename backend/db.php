<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "booksdb";


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("basarisiz: " . $conn->connect_error);
}

