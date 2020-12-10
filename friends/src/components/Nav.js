import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ logOut }) => {
  const token = JSON.parse(localStorage.getItem("token"));

  return (
    <div className="Navbar">
      <nav>
        {!token && <NavLink to="/login">Login</NavLink>}
        {token && (
          <div>
            <NavLink to="/friends">FriendList</NavLink>
            <NavLink to="/login" onClick={logOut}>
              Log out
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
