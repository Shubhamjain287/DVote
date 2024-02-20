import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutUser } from "../../store/features/auth/authServices";
import "./Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const logOut = () => {
    dispatch(logOutUser());
    Navigate("/");
  };

  return (
    <>
      <nav>
        <div className="logo"><Link to="/"> D-Vote </Link></div>

        <label htmlFor="btn" className="icon">
          <span className="fa fa-bars"></span>
        </label>

        <input type="checkbox" id="btn" />

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>          

          {user && (
            <li>
              <Link to="/voting">Voting Options</Link>
            </li>
          )}

          {user && user.user === "admin" && (
            <li>
              <Link to="/create-voting">Create Voting </Link>
            </li>
          )}

          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {!user && (
            <li>
              <Link
                to="/register"
                className="bg-blue-500 rounded-3xl hover:text-black"
              >
                Register
              </Link>
            </li>
          )}
          {!user && (
            <li>
              <Link
                to="/login"
                className="bg-blue-500 rounded-3xl hover:text-black"
              >
                Login
              </Link>
            </li>
          )}
          {user && (
            <li>
              <label htmlFor="btn-3" className="show">
                Profile
              </label>
              <Link to="/profile" className="bg-blue-500 rounded-3xl hover:text-black">
                Profile
              </Link>
              <input type="checkbox" id="btn-3" />
              <ul>
                <li>
                  <Link to="/profile" className="bg-blue-500 hover:text-black">
                    Profile
                  </Link>
                </li>
                <li onClick={logOut}>
                  <Link className="bg-blue-500 hover:text-black">Logout</Link>
                </li>
              </ul>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

{
  /* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={logOut}> Logout </button> */
}
