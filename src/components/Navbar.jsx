import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">संदेश</span>
      <div className="user">
        <img
          src="https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg"
          alt="user-pic"
        />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
