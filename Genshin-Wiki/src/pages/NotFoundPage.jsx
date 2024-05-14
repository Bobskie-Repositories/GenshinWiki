import React from "react";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-slate-100 w-2/4 bg-opacity-90 py-8 px-10 my-10 rounded-lg">
        <span className="flex justify-center text-red-500 font-bold sm:text-xl md:text-8xl">
          404
        </span>
        <span className="flex justify-center text-red-500 font-bold sm:text-xl md:text-3xl mt-2">
          Page Not Found!
        </span>
        <span className="flex justify-center sm:text-sm md:text-xl mt-8">
          Oopss! The page you are accessing is unavailable.
        </span>
        <div className="flex justify-center sm:text-sm md:text-xl mt-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded">
            <NavLink to="/">Back to Home</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
