// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page from './components/Page';
import Login from './components/Login';
import AdminBoard from './pages/AdminBoard';
import AttendanceList from './pages/AttendanceList';
import UserList from './pages/UserList';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes that use the Page layout */}
        <Route path="/" element={<Page><AdminBoard /></Page>} />
        <Route path="/attendance" element={<Page><AttendanceList /></Page>} />
        <Route path="/user" element={<Page><UserList /></Page>} />
        
        {/* Routes that don't use the Page layout */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
