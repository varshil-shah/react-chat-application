import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import getFirebaseError from "../utils/firebase-error-handling";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const email = e.target[0].value.trim();
    const password = e.target[1].value.trim();

    if (!email || !password) setError("Please fill out all the input fields!");

    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      const errorMsg = getFirebaseError(error.code);
      setError(errorMsg);
    }

    e.target[0].value = "";
    e.target[1].value = "";
    setIsLoading(false);
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">संदेश</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input required type="email" placeholder="Email address" />
          <input required type="password" placeholder="Password" />
          <button disabled={isLoading}>
            {isLoading ? "Loading..." : "Sign In"}
          </button>
          {error && <p className="error">{error}</p>}
        </form>
        <p>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
