<!DOCTYPE html>
<html>
<head>
  <title>The best page ever!</title>
  <link href="views/style.css" rel="stylesheet">
</head>
  <body>
    <a href="index.php"><h2 id="title">Sze Csapatkereső portál</h2></a>
    <section id = "signup">
      <div>
        <h2 id="sign">Log In</h2>
        <form action = "includes/login.inc.php" method = "post">
          <input type="text" name="name" placeholder="Username" class="fields"> <br>
          <input type="password" name="pass" placeholder="Password" class="fields"> <br>
          <button type="submit" name="submit" id="btn">Log In</button>
        </form>
      </div>
    </section>
  </body>
</html>