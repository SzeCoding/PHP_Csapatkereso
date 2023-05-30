<!DOCTYPE html>
<html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <link href="views/style.css" rel="stylesheet">
        <title>Sze Csapatkereső</title>
    </head>
    <body>
      <a href="index.php"><h2 id="title">Sze csapatkereső portál</h2></a>
      <section id = "signup">
        <div>
          <h2 id="sign">Sign Up</h2>
          <form action = "includes/signup.inc.php" method = "post">
            <input type="text" name="name" placeholder="Username" class="fields"> <br>
            <input type="password" name="pass" placeholder="Password" class="fields"> <br>
            <input type="password" name="passrepeat" placeholder="Repeat password" class="fields"> <br>
            <button type="submit" name="submit" id="btn">Sign Up</button>
          </form>
        </div>
      <?php
        if (isset($_GET["error"])){
          if($_GET["error"] == "empytinput"){
            echo "<p>Fill in all fields!</p>";
          }else if($_GET["error"]=="invalidusername"){
            echo "<p>Invalid username!</p>";
          }else if($_GET["error"]=="passwordsdontmatch"){
            echo "<p>Password doesn't match!</p>";
          }else if($_GET["error"]=="usernametaken"){
            echo "<p>Username already taken!</p>";
        }else if($_GET["error"]=="none"){
          echo "<p>You are successfully signed up!</p>";
        }}
      ?>
      </section>
    </body>
</html>