import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { capitalizeFirstLetter } from "../utils/utils";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="logo">संदेश</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="user-pic" />
        <span>{capitalizeFirstLetter(currentUser.displayName)}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
