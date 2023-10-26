<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <link rel="stylesheet" href="style-form2.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
</head>
<body>
<div class="page" id="page" >
  <div id="form_signIn">
    <div id="form-bg">
      <img id="image-bg" src="image/bg-signIn.jpg" width="100%" height="auto">
    </div>
    <div id="form-content">
      <div class="container">
        <div class="title">
          <h3>Sign In</h3>
        </div>
        <form action="login" class="form_input_group" >
          <div class="input-group-control user">
            <input type="text" id="user" name="user" required placeholder="username or email">
          </div>
          <div class="input-group-control pass">
            <input type="password" id="password" name="password" required placeholder="password">
          </div>
          <button class="btn btn-signIn">Sign in</button>
        </form>
        <div id="txt-loginWith">
          <p>Or login with</p>
        </div>
        <div id="icon-socs">
          <div><a class="fab fa-facebook-f"></a></div>
          <div><a class="fab fa-google"></a></div>
        </div>
        <div id="sign_up">
          <a href="">Sign Up</a>
        </div>
      </div>
    </div>
  </div>
</div>
</body>
</html>