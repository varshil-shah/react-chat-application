import React from "react";

function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">संदेश</span>
        <span className="title">Login</span>
        <form action="">
          <input required type="email" placeholder="Email address" />
          <input required type="password" placeholder="Password" />
          <button>Sign in</button>
        </form>
        <p>Don't have an account? Signup</p>
      </div>
    </div>
  );
}

export default Login;
