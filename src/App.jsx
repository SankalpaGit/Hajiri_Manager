import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import AdminBoard from "./pages/AdminBoard";
import AttendanceList from "./pages/AttendanceList";
import UserList from "./pages/UserList";
import Signup from "./components/SignUp";

const App = () => {
  return (
    <Router>
      <div className="flex w-full justify-between">
        <div>
          <Sidebar />
        </div>
        <div className="w-10/12">
          <Navbar />
          <main className=" p-3">
            <Routes>
              <Route path="/dashboard" element={<AdminBoard />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/attendance" element={<AttendanceList />} />
              <Route path="/user" element={<UserList />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
