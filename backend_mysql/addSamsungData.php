<?php
include "database.php";


$sql = "INSERT INTO samsung_data (title, image, price)
        VALUES (?, ?, ?)";
        
$stmt = $connection->stmt_init();

if ( ! $stmt->prepare($sql)) {
    die("SQL error: " . $connection->error);
}

$stmt->bind_param("sss",
                  $_POST["title"],
                  $_POST["image"],
                  $_POST["price"],
                  
                  );
                  
if ($stmt->execute()) {
    echo "Samsung data added successfully";
    // header("Location: signup-success.html");
    // exit;
    
} else {
    
    if ($connection->errno === 1062) {
        die("email already taken");
    } else {
        die($connection->error . " " . $connection->errno);
    }
}