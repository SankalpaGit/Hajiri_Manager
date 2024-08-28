import React from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 text-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        <div className="relative text-gray-600">
          <input
            type="search"
            name="search"
            placeholder="Search..."
            className="placeholder-fuchsia-600 placeholder:font-semibold bg-gray-50 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none border border-fuchsia-600 focus:text-fuchsia-600 focus:font-semibold"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-3 mr-4 text-fuchsia-600 hover:text-fuchsia-700"
          >
            <FaSearch />
          </button>
        </div>
        <div className="space-x-4 flex items-center gap-12">
          <FaBell className="text-2xl text-fuchsia-700 hover:text-fuchsia-800 cursor-pointer" />
          <FaUserCircle className="text-3xl text-fuchsia-700 hover:text-fuchsia-800 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
