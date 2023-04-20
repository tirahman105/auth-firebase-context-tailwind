import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(error => console.error(error))
  }
  return (
    <div>
      <div className="navbar bg-primary ">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-white text-xl">Auth  <span className="text-amber-500 ms-2">Master</span> </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal text-xl px-1 text-white">
            <li>
              <Link to= "/">Home</Link>
            </li>
            <li>
              <Link to= "/orders">Orders</Link>
            </li>
            { user && <li>
              <Link to= "/profile">Profile</Link>
            </li>}
            <li>
              <Link to= "/register">Register</Link>
            </li>
            {
              user ? <>
              <li>
                <span>{user.email}</span> 
              </li>
              
              <button className="btn btn-warning" onClick={handleLogOut}> Sign Out</button> 
              </>:
              <li>
            <Link className="btn btn-warning text-black" to= "/login">Login</Link>
            </li>
            }
          
            
            {/* {
              user ? <>
              <span>{user.email}</span> 
              <button onClick={handleLogOut}> Sign Out</button> 
              </> : <Link to= "/login">Login</Link>
            } */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
