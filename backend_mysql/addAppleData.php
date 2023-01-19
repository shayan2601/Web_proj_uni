<?php
include "database.php";


$sql = "INSERT INTO apple_data (title, image, price, screen_replacement, battery_replacement, camera_damage, liquid_damage)
        VALUES (?, ?, ?, ?, ?, ?, ?)";
        
$stmt = $connection->stmt_init();

if ( ! $stmt->prepare($sql)) {
    die("SQL error: " . $connection->error);
}

$stmt->bind_param("sssssss",
                  $_POST["title"],
                  $_POST["image"],
                  $_POST["price"],
                  $_POST["screen_replacement"],
                  $_POST["battery_replacement"],
                  $_POST["camera_damage"],
                  $_POST["liquid_damage"],
                  );
                  
if ($stmt->execute()) {
    echo "Apple data added successfully";
    // header("Location: signup-success.html");
    // exit;
    
} else {
    
    if ($connection->errno === 1062) {
        die("email already taken");
    } else {
        die($connection->error . " " . $connection->errno);
    }
}