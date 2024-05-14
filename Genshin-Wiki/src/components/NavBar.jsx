import React from "react";
import logo from "/logo.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white hover:bg-gray-900 hover:bg-opacity-10 px-3 py-2 border-b-2 border-white"
      : "text-white hover:bg-gray-900 hover:bg-opacity-10 text-1xl rounded-md px-3 py-2";

  return (
    <nav className="bg-slate-800 bg-opacity-80">
      <div className="max-w-full px-1 sm:px-12 lg:px-20">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img src={logo} alt="logo" className="h-24 w-auto md:h-24" />
            </NavLink>

            <div className="md:ml-auto flex items-center">
              <div className="space-x-4">
                <NavLink className={linkClass} to="/">
                  Home
                </NavLink>
                <NavLink className={linkClass} to="/characters">
                  Characters
                </NavLink>
                <NavLink className={linkClass} to="/weapons">
                  Weapons
                </NavLink>
                <NavLink className={linkClass} to="/artifacts">
                  Artifacts
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
