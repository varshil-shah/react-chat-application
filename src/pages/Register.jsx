import React from "react";
import Add from "../img/addAvatar.png";

function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">संदेश</span>
        <span className="title">Register</span>
        <form action="">
          <input required type="text" placeholder="Display name" />
          <input required type="email" placeholder="Email address" />
          <input required type="password" placeholder="Strong password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="file-picker" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  );
}

export default Register;
