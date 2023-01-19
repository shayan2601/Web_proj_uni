<?php
include "database.php";

$id = $_GET['id'];



$title = $_POST["title"];
$image = $_POST["image"];
$price = $_POST["price"];
$screen_replacement = $_POST["screen_replacement"];
$battery_replacement = $_POST["battery_replacement"];
$camera_damage = $_POST["camera_damage"];
$liquid_damage = $_POST["liquid_damage"];

        $sql = "UPDATE apple_data SET title = '$title', image = '$image', price = '$price', screen_replacement = '$screen_replacement', battery_replacement = '$battery_replacement',  camera_damage = '$camera_damage', liquid_damage = '$liquid_damage'  WHERE id = '$id';";

       $updated =  mysqli_query($connection, $sql);
        
// $stmt = $connection->stmt_init();

// if ( ! $stmt->prepare($sql)) {
//     die("SQL error: " . $connection->error);
// }

// $stmt->bind_param("sssssss",
//                   $_POST["title"],
//                   $_POST["image"],
//                   $_POST["price"],
//                   $_POST["screen_replacement"],
//                   $_POST["battery_replacement"],
//                   $_POST["camera_damage"],
//                   $_POST["liquid_damage"],
//                   );
                  
// if ($stmt->execute()) {
    echo "Apple data updated successfully";
    // header("Location: signup-success.html");
    // exit;
    
// } else {
    
    if ($connection->errno === 1062) {
        die("email already taken");
    } else {
        die($connection->error . " " . $connection->errno);
    }
// }