<?php
include "database.php";
session_start();

if (isset($_SESSION["user_id"])) {
        
    $sql = "SELECT * FROM users
            WHERE id = {$_SESSION["user_id"]}";
            
    $result = $connection->query($sql);
    
    $user = $result->fetch_assoc();
}

?>
<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
</head>
<style>
    /* .container {
  padding: 2rem 0rem;
}

h4 {
  margin: 2rem 0rem 1rem;
}

.table-image {
  td, th {
    vertical-align: middle;
  }
} */
</style>
<body>
    
    <h1>Home</h1>
    <?php
        if (!isset($user)) {
            echo "Please Login again";
            echo "<a href='login.php'>Click Here to Login</a>";
        }
        else {
            $now = time(); 
            if (isset($_SESSION['start']) && (time() - $_SESSION['start'] > 3600)){
                session_unset();
                session_destroy();
                echo "Your session has expired! <a href='login.php'>Login here</a>";
            }
            else { 
    ?>
            
            <html>
                Welcome
                <?php
                    echo $user["name"];
                    echo "<a href='logout.php'>Log out</a>";
                ?>
            </html>
    <?php
            }
        }

    ?>

    <!-- data options -->

    <?php
        if (isset($user)) {
    ?>
            <ul>
                <a href="appledata.php">Apple</a>
                <a href="samsungdata.php">Samsung</a>
            </ul>
    <?php
        } 
    ?>
    

   
    
    
</body>
</html>
    
    
    
    
    
    
    
    
    
    
    