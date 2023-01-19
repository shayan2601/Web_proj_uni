<?php
include "database.php";


$is_invalid = false;

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    $sql = sprintf("SELECT * FROM users
                    WHERE email = '%s'",
                   $connection->real_escape_string($_POST["email"]));

    
    $result = $connection->query($sql);
    
    $user = $result->fetch_assoc();
    
    if ($user) {
        
        if (password_verify($_POST["password"], $user["password"])) {
            
            session_start();
            
            session_regenerate_id();
            
            $_SESSION["user_id"] = $user["id"];

            $_SESSION['start'] = time(); // Taking now logged in time.
            // Ending a session in 30 minutes from the starting time.
            $_SESSION['expire'] = $_SESSION['start'] + (30 * 60 * 60);
            
            header("Location: index.php");
            exit;
        }
    }
    
    $is_invalid = true;
}

?>
<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
</head>
<body>
    
    <h1>Login</h1>
    
    <?php if ($is_invalid): ?>
        <em>Invalid login</em>
    <?php endif; ?>
    
    <form action="data_login.php" method="post">
        <label for="title">title</label>
        <input type="text" name="title" id="title"
               >
        
        <label for="price">price</label>
        <input type="text" name="price" id="price">
        
        <button>Log in</button>
    </form>
    
</body>
</html>








