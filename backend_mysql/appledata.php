<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <?php include "database.php"; ?>
   <!-- Add Apple Data -->

   <div>
        <h2>Apple data</h2>

        <form action="addAppleData.php" method="post">
        <label for="title">title</label>
        <input type="title" name="title" id="title">
        
        <label for="image">Image</label>
        <input type="text" name="image" id="image">

        <label for="price">price</label>
        <input type="text" name="price" id="price">
        
        <label for="screen_replacement">screen_replacement</label>
        <input type="text" name="screen_replacement" id="screen_replacement">

        <label for="camera_damage">camera_damage</label>
        <input type="text" name="camera_damage" id="camera_damage" >
        
        <label for="battery_replacement">battery_replacement</label>
        <input type="text" name="battery_replacement" id="battery_replacement">

        <label for="liquid_damage">liquid_damage</label>
        <input type="text" name="liquid_damage" id="liquid_damage">
        
        <button>Add Data</button>
        </form>
    </div>



    <!-- appledata table -->


    <!-- <div class="container"> -->
        <!-- <div class="row">
            <div class="col-12"> -->
                <div>
            <table class="">
                <thead>
                <tr>
                    <th >id</th>
                    <th >Title</th>
                    <th >image</th>
                    <th >Price</th>
                    <th >screen_replacement</th>
                    <th >battery_replacement</th>
                    <th >camera_damage</th>
                    <th >liquid_damage</th>
                </tr>
                </thead>
                <tbody>
                    <?php
                        $query = "SELECT * from apple_data";
                        $getData = mysqli_query($connection, $query);
                        if(mysqli_num_rows($getData)>=1){
                            while($rows = mysqli_fetch_array($getData)){
                                ?>
                                <tr>
                                    <td> <?php echo $rows['id'] ?></td>
                                    <td> <?php echo $rows['title'] ?></td>
                                    <td> <?php echo $rows['price'] ?></td>
                                    <td> <?php echo $rows['image'] ?></td>
                                    <td> <?php echo $rows['screen_replacement'] ?></td>
                                    <td> <?php echo $rows['battery_replacement'] ?></td>
                                    <td> <?php echo $rows['camera_damage'] ?></td>
                                    <td> <?php echo $rows['liquid_damage'] ?></td>
                                    <td>
                                    <a type="button" class="btn btn-primary" href="edit-appledata.php?id=<?php echo $rows['id'] ?>">edit</a>
                                    <a type="button" href="delete-appleData.php?id=<?php echo $rows['id'] ?>" class="btn btn-success">detele</a>
                                    </td>
                                </tr>
                                <?php
                            }
                        }
                    ?>
                    
                    
                <!-- <tr>
                    <th scope="row">1</th>
                    <td>Bootstrap 4 CDN and Starter Template</td>
                    <td>Cristina</td>
                    <td>2.846</td>
                    <td>2.846</td>
                    <td>2.846</td>
                    <td>2.846</td>
                    <td>2.846</td>
                    <td>
                    <a type="button" class="btn btn-primary" href="edit-appledata.php">edit</a>
                    <a type="button" class="btn btn-success">detele</a>
                    
                    </td>
                </tr> -->
                
                </tbody>
            </table>
                    </div>
            <!-- </div>
        </div> -->
    <!-- </div> -->
</body>
</html>