import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaCalendarCheck, FaUsers } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="sidebar bg-fuchsia-800 text-white h-screen fixed p-4 w-2/12">
      <p className="text-center text-2xl font-bold ">Hajiri Manager</p>
      <p className="text-sm text-center mb-6">Your own attendance system</p>
      <ul>
        <li className="py-2">
          <Link
            to="/"
            className={`${
              location.pathname === "/"
                ? "bg-fuchsia-700 flex items-center py-2.5 px-4 rounded"
                : "flex items-center py-2.5 px-4 rounded hover:bg-fuchsia-700 transition duration-20"
            }`}
          >
            <FaTachometerAlt className="text-xl mr-2" />
            Dashboard
          </Link>
        </li>
        <li className="py-2">
          <Link
            to="/attendance"
            className={`${
              location.pathname === "/attendance"
                ? "bg-fuchsia-700 flex items-center py-2.5 px-4 rounded"
                : "flex items-center py-2.5 px-4 rounded hover:bg-fuchsia-700 transition duration-20"
            }`}
          >
            <FaCalendarCheck className="text-xl mr-2" />
            Attendance
          </Link>
        </li>
        <li className="py-2">
          <Link
            to="/user"
            className={`${
              location.pathname === "/user"
                ? "bg-fuchsia-700 flex items-center py-2.5 px-4 rounded"
                : "flex items-center py-2.5 px-4 rounded hover:bg-fuchsia-700 transition duration-20"
            }`}
          >
            <FaUsers className="text-xl mr-2" />
            Employee List
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
