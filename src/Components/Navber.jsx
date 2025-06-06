import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navber = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logout Successfully!",
          icon: "success",
          draggable: true,
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm mb-5">
      <div className="navbar-start">
        <div className="dropdown mr-2">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={`/`}>Home</NavLink>
            </li>
            <li>
              <NavLink to={`/allrecipes`}>All Recipes</NavLink>
            </li>
            <li>
              <NavLink to={`/addrecipes`}>Add Recipes</NavLink>
            </li>
            <li>
              <NavLink to={`/myrecipes`}>My Recipes</NavLink>
            </li>
            <li className="mr-2">
            <NavLink to={`/tips-and-tricks`}>Tips & Tricks</NavLink>
          </li>
            <li>
              <NavLink to={`/about`}>About</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-2">
          <img
            className="w-10"
            src="https://img.icons8.com/?size=100&id=xlR7C5a6wcLB&format=png&color=000000"
            alt=""
          />
          <a className="text-xl font-bold">COOKING</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="mr-2">
            <NavLink to={`/`}>Home</NavLink>
          </li>
          <li className="mr-2">
            <NavLink to={`/allrecipes`}>All Recipes</NavLink>
          </li>
          <li className="mr-2">
            <NavLink to={`/addrecipes`}>Add Recipes</NavLink>
          </li>
          <li className="mr-2">
            <NavLink to={`/myrecipes`}>My Recipes</NavLink>
          </li>
          <li className="mr-2">
            <NavLink to={`/tips-and-tricks`}>Tips & Tricks</NavLink>
          </li>
          <li>
              <NavLink to={`/about`}>About</NavLink>
            </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <label className="swap swap-rotate mr-2">
          <input type="checkbox" className="theme-controller" value="dark" />
          <svg
            className="swap-on fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          <svg
            className="swap-off fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>

        {user ? (
          <div className="dropdown dropdown-end tooltip tooltip-bottom mr-4" data-tip={user ? user.email : ""}>
            <div tabIndex={0} role="button" className="avatar cursor-pointer">
              <div className="w-13 rounded-full">
                <img 
                  src={user.photoURL} 
                  alt="User avatar"
                />
              </div>
            </div>
            <ul tabIndex={0} className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-62 mt-4">
              {user.email && (
                <li className="p-2 text-sm font-medium text-gray-600">{user.email}</li>
              )}
              <li>
                <button
                  onClick={handleLogOut} 
                  className="text-red-500 font-bold btn"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          
          <div className="flex items-center">
          
            <Link
              to={`/auth/login`}
              className="btn bg-orange-500 border-0 shadow-none font-bold text-gray-900 mr-2"
            >
              Login
            </Link>

            <Link to={`/auth/register`} className="btn">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navber;