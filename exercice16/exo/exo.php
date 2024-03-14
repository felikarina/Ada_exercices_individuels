
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exo</title>
</head>
<body>
    <?php
    session_start();

    var_dump($_POST);

    if(isset($_POST['reset'])) {
        session_destroy();
    }
    $name_to_display = "anonyme";
    if(isset($_GET['name'])) {
        $name_to_display = $_GET['name'];
    } 
    elseif((isset($_SESSION['name'])) && (!isset($_POST['reset']))) {
        $name_to_display = $_SESSION['name'];
    }
    elseif((isset($_POST['name'])) && (!isset($_POST['reset']))) {
        $name_to_display = $_POST['name'];
        $_SESSION['name'] = $_POST['name'];
    }
    else {
        $name_to_display = "anonyme";
    }?>
    Coucou <?php echo $name_to_display; ?>
    <form action="exo.php" method="post">
        <p>Votre nom : <input type="text" name="name" /></p>
        <p><input type="submit" value="OK"></p>
        <p><input type="submit" name="reset" value="RESET"></p>
    </form>
</body>
</html>