import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import getFirebaseError from "../utils/firebase-error-handling";

import Add from "../img/addAvatar.png";

function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const displayName = e.target[0].value.trim();
    const email = e.target[1].value.trim();
    const password = e.target[2].value.trim();
    const file = e.target[3].files[0];

    if (!displayName || !email || !password)
      return setError("Please fill out all the input fields!");

    if (!file) return setError("Please upload your profile picture!");

    try {
      setIsLoading(true);
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName}-${date}`.toLowerCase());

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          await updateProfile(res.user, {
            displayName: displayName.toLowerCase(),
            photoURL: downloadURL,
          });
          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName: displayName.toLowerCase(),
            email,
            photoURL: downloadURL,
          });
          await setDoc(doc(db, "userChats", res.user.uid), {});
          navigate("/");
        });
      });
    } catch (error) {
      const errorMsg = getFirebaseError(error.code);
      setError(errorMsg);
    }

    // reset values
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
    e.target[3].files = null;
    setIsLoading(false);
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">संदेश</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="Display name" />
          <input required type="email" placeholder="Email address" />
          <input required type="password" placeholder="Strong password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="file-picker" />
            <span>Add an avatar</span>
          </label>
          <button disabled={isLoading}>
            {isLoading ? "Loading..." : "Sign Up"}
          </button>
          {error && <p className="error">{error}</p>}
        </form>
        <p>
          Already have an account? <Link to="/register">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
