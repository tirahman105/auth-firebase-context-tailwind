import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary ">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-white text-xl">Auth  <span className="text-amber-500 ms-2">Master</span> </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal text-xl px-1 text-white">
            <li>
              <Link to= "/register">Register</Link>
            </li>
          
            <li>
            <Link to= "/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
