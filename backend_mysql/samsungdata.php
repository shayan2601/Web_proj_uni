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
        <h2>Samsung data</h2>

        <form action="addSamsungData.php" method="post">
        <label for="title">title</label>
        <input type="title" name="title" id="title">
        
        <label for="image">Image</label>
        <input type="text" name="image" id="image">

        <label for="price">price</label>
        <input type="text" name="price" id="price">
        
        
        
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
                    
                </tr>
                </thead>
                <tbody>
                    <?php
                        $query = "SELECT * from samsung_data";
                        $getData = mysqli_query($connection, $query);
                        if(mysqli_num_rows($getData)>=1){
                            while($rows = mysqli_fetch_array($getData)){
                                ?>
                                <tr>
                                    <td> <?php echo $rows['id'] ?></td>
                                    <td> <?php echo $rows['title'] ?></td>
                                    <td> <?php echo $rows['price'] ?></td>
                                    <td> <?php echo $rows['image'] ?></td>
                                    
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