import React from "react";

const Login = props => (
  <nav className="login">
    <h2>Inventor Login</h2>
    <p>Sign in to manage your store's inventory</p>
    <button className="github" onClick={() => props.authenticate("Github")}>
      Log In with Github
    </button>
    <button className="facebook" onClick={() => props.authenticate("Facebook")}>
      Log In with Facebook
    </button>
    <button className="twitter" onClick={() => props.authenticate("Google")}>
      Log In with Google
    </button>
  </nav>
);

export default Login;
