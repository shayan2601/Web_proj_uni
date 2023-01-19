<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<div>

<?php 
include "database.php";

$id = $_GET["id"];

$getData = mysqli_query($connection,"SELECT * from apple_data where id = '$id';");
?>
        <h2>Apple data</h2>

        <?php
        while($rows = mysqli_fetch_array($getData))
        {
          ?>
<form action="edit_functionality.php?id=<?php echo $rows['id'] ?>" method="post" value="">
        <label for="title">title</label>
        <input type="title" name="title" id="title" value="<?php echo $rows['title'] ?>">
        
        <label for="image">Image</label>
        <input type="text" name="image" id="image" value="<?php echo $rows['image'] ?>">

        <label for="price">price</label>
        <input type="text" name="price" id="price" value="<?php echo $rows['price'] ?>">
        
        <label for="screen_replacement">screen_replacement</label>
        <input type="text" name="screen_replacement" id="screen_replacement" value="<?php echo $rows['screen_replacement'] ?>">

        <label for="camera_damage">camera_damage</label>
        <input type="text" name="camera_damage" id="camera_damage"  value="<?php echo $rows['camera_damage'] ?>">
        
        <label for="battery_replacement">battery_replacement</label>
        <input type="text" name="battery_replacement" id="battery_replacement" value="<?php echo $rows['battery_replacement'] ?>">

        <label for="liquid_damage">liquid_damage</label>
        <input type="text" name="liquid_damage" id="liquid_damage" value="<?php echo $rows['liquid_damage'] ?>">
        
        <button type="submit" >EDIT</a>
        </form>
<?php

}
?>

        
    </div>
</body>
</html>