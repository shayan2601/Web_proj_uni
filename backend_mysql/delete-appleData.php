<?php
include "database.php";

$id = $_GET['id'];
$deleteQuery = "DELETE FROM apple_data WHERE id = '$id';";


$deleted = mysqli_query($connection, $deleteQuery);

echo "Apple data deleted successfully";

?>